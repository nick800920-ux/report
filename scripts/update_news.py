#!/usr/bin/env python3
"""Collect headline metadata from public Google News RSS feeds.

Only titles, publisher names, publication times and links are stored. Article
contents, images and financial recommendations are not copied or generated.
"""

from __future__ import annotations

import argparse
import json
import sys
import time
import urllib.parse
import urllib.request
import xml.etree.ElementTree as ET
from datetime import datetime, timedelta, timezone
from email.utils import parsedate_to_datetime
from pathlib import Path
from zoneinfo import ZoneInfo


KST = ZoneInfo("Asia/Seoul")
BASE = "https://news.google.com/rss"
FEEDS = {
    "top_world_markets": ("뉴욕 증시", 20),
    "top_world_macro": ("국제 유가", 20),
    "top_property": ("서울 아파트", 20),
    "it": ("AI 기술", 8),
    "sds": ("삼성SDS", 8),
    "realestate_policy": ("부동산 대출 규제 OR 주택 세제 OR 재건축 정책", 5),
    "realestate_market": ("서울 아파트", 5),
    "realestate_presale": ("서울 경기 아파트 청약 입주자모집공고", 5),
    "samsung_baseball": ("삼성 라이온즈 경기 결과 OR 삼성 라이온즈 경기 일정 OR 삼성 라이온즈 구단 소식", 6),
    "science_tech": ("AI 연구", 20),
    "italy_travel": ("이탈리아 여행 OR 로마 여행 OR 베네치아 관광 OR 피렌체 박물관 OR 밀라노 관광", 12),
    "gyeongju_travel": ("경주 신라문화제 OR 경주 문화유산 OR 경주 박물관 OR 경주 역사축제", 4),
}

DOMESTIC_POLITICS_TERMS = (
    "대통령실", "청와대", "국회", "여당", "야당", "여야", "민주당",
    "국민의힘", "당대표", "원내대표", "탄핵", "국정감사", "지방선거",
    "대선", "총선", "정치권", "이 대통령", "이재명 대통령",
)

REALESTATE_MARKET_TERMS = ("서울", "경기", "수도권", "아파트", "오피스텔", "주택", "집값", "실거래", "전세", "월세")
REALESTATE_SPAM_TERMS = ("카지노", "도박", "베팅", "슬롯머신", "토토", "트럼프")
TRUSTED_NEWS_SOURCES = {
    "연합뉴스", "연합뉴스tv", "연합인포맥스", "뉴스1", "newsis.com",
    "kbs 뉴스", "mbc 뉴스", "ytn", "한국경제", "매일경제", "서울경제",
    "서울경제tv", "한국일보", "한겨레", "경향신문", "서울신문",
    "아시아경제", "머니투데이", "헤럴드경제", "뉴스핌", "chosunbiz",
    "전자신문", "지디넷코리아", "it조선", "edaily.co.kr", "데일리한국",
    "samsung sds", "대한민국 정책브리핑", "국토교통부", "금융위원회",
}
WORLD_MARKET_TERMS = ("뉴욕증시", "뉴욕 증시", "미국 증시", "국제유가", "국제 유가", "원유", "연준", "미국 국채", "g7", "wti")
WORLD_ADVICE_TERMS = ("사도 될까", "투자 전략", "추천 종목", "수익률 석권")
OFFICIAL_POLICY_SOURCES = {"국토교통부", "금융위원회", "대한민국 정책브리핑", "서울특별시"}
SCIENCE_SOURCES = TRUSTED_NEWS_SOURCES | {"nasa", "kaist", "사이언스타임즈", "과학동아"}


def trusted(item: dict, sources: set[str] = TRUSTED_NEWS_SOURCES) -> bool:
    return item.get("source", "").casefold() in sources


def select_realestate_market_items(items: list[dict], limit: int) -> list[dict]:
    """Keep housing-market headlines and reject unrelated search-result spam."""
    return [
        item for item in items
        if trusted(item)
        and any(term in item["title"] for term in REALESTATE_MARKET_TERMS)
        and not any(term in item["title"] for term in REALESTATE_SPAM_TERMS)
    ][:limit]


def select_top_items(world_feeds: list[dict], property_feed: dict) -> list[dict]:
    """Keep the headline deck focused, balanced and free of domestic politics."""
    seen = set()

    def take(feeds: list[dict], category: str, limit: int) -> list[dict]:
        selected = []
        rows = [feed.get("items", []) for feed in feeds]
        for index in range(max((len(row) for row in rows), default=0)):
            for row in rows:
                if index >= len(row):
                    continue
                item = row[index]
                title = item["title"]
                key = "".join(title.casefold().split())
                if (key in seen or not trusted(item)
                        or any(term in title for term in DOMESTIC_POLITICS_TERMS)):
                    continue
                if category == "세계 경제" and (not any(term in title.casefold() for term in WORLD_MARKET_TERMS)
                                                   or any(term in title for term in WORLD_ADVICE_TERMS)):
                    continue
                if category == "부동산" and (not any(term in title for term in REALESTATE_MARKET_TERMS)
                                                 or any(term in title for term in REALESTATE_SPAM_TERMS)):
                    continue
                seen.add(key)
                selected.append({**item, "category": category})
                if len(selected) >= limit:
                    return selected
        return selected

    world = take(world_feeds, "세계 경제", 5)
    property_items = take([property_feed], "부동산", 4)
    return world + property_items


def feed_url(query: str | None) -> str:
    path = BASE + ("/search" if query else "")
    params = {"hl": "ko", "gl": "KR", "ceid": "KR:ko"}
    if query:
        params["q"] = query
    return path + "?" + urllib.parse.urlencode(params)


def get_xml(url: str) -> bytes:
    request = urllib.request.Request(
        url,
        headers={"User-Agent": "Mozilla/5.0 (compatible; PersonalNewsDashboard/1.0)"},
    )
    error = None
    for attempt in range(3):
        try:
            with urllib.request.urlopen(request, timeout=18) as response:
                return response.read(2_000_000)
        except Exception as exc:
            error = exc
            if attempt < 2:
                time.sleep(attempt + 1)
    raise RuntimeError(f"RSS fetch failed: {type(error).__name__}: {error}")


def parse_feed(xml_bytes: bytes, now: datetime, limit: int, max_age_hours: int = 72, fresh_hours: int = 36) -> dict:
    root = ET.fromstring(xml_bytes)
    found = []
    seen = set()
    for item in root.findall("./channel/item"):
        title = (item.findtext("title") or "").strip()
        link = (item.findtext("link") or "").strip()
        source_node = item.find("source")
        source = (source_node.text or "").strip() if source_node is not None else ""
        published_raw = (item.findtext("pubDate") or "").strip()
        if not title or not link.startswith("https://") or not published_raw:
            continue
        try:
            published = parsedate_to_datetime(published_raw)
            if published.tzinfo is None:
                published = published.replace(tzinfo=timezone.utc)
            published = published.astimezone(KST)
        except (TypeError, ValueError):
            continue
        if published > now + timedelta(minutes=10) or published < now - timedelta(hours=max_age_hours):
            continue
        if source and title.endswith(" - " + source):
            title = title[: -(len(source) + 3)].strip()
        key = "".join(title.casefold().split())
        if key in seen:
            continue
        seen.add(key)
        found.append(
            {
                "title": title[:240],
                "source": source[:70] or "언론사 미표기",
                "url": link,
                "published_at": published.isoformat(timespec="seconds"),
            }
        )
    fresh = [item for item in found if datetime.fromisoformat(item["published_at"]) >= now - timedelta(hours=fresh_hours)]
    if fresh:
        return {"items": fresh[:limit], "window": f"최근 {fresh_hours // 24}일" if fresh_hours >= 24 and fresh_hours != 36 else "최근 36시간"}
    return {"items": found[:limit], "window": f"최근 {max_age_hours // 24}일" if max_age_hours >= 24 and max_age_hours != 72 else "최근 72시간"}


def build() -> dict:
    now = datetime.now(KST)
    sections = {}
    errors = []
    for name, (query, limit) in FEEDS.items():
        try:
            if name in ("top_world_markets", "top_world_macro"):
                result = parse_feed(get_xml(feed_url(query)), now, limit, max_age_hours=96, fresh_hours=72)
            elif name == "it":
                result = parse_feed(get_xml(feed_url(query)), now, 30)
                tech_terms = ("AI", "인공지능", "클라우드", "반도체", "데이터센터", "보안")
                result["items"] = [item for item in result["items"] if trusted(item) and any(term in item["title"] for term in tech_terms) and not any(term in item["title"] for term in DOMESTIC_POLITICS_TERMS)][:limit]
            elif name == "italy_travel":
                result = parse_feed(get_xml(feed_url(query)), now, 30, max_age_hours=720, fresh_hours=336)
                travel_terms = ("여행", "관광", "기차", "철도", "박물관", "도시", "로마", "베네치아", "피렌체", "밀라노")
                result["items"] = [item for item in result["items"] if "이탈리아" in item["title"] and any(term in item["title"] for term in travel_terms)][:limit]
            elif name == "gyeongju_travel":
                result = parse_feed(get_xml(feed_url(query)), now, 30, max_age_hours=720, fresh_hours=336)
                heritage_terms = ("신라", "문화유산", "박물관", "축제", "유적", "역사", "관광", "여행")
                result["items"] = [item for item in result["items"] if "경주" in item["title"] and any(term in item["title"] for term in heritage_terms)][:limit]
            elif name == "sds":
                result = parse_feed(get_xml(feed_url(query)), now, 30)
                sds_terms = ("삼성sds", "삼성에스디에스", "samsung sds")
                result["items"] = [item for item in result["items"] if trusted(item) and any(term in item["title"].casefold() for term in sds_terms)][:limit]
            elif name == "realestate_policy":
                result = parse_feed(get_xml(feed_url(query)), now, 25)
                policy_terms = ("부동산", "주택", "아파트", "대출", "세제", "재건축", "청약", "공급", "임대", "보유세", "양도세", "LTV", "DSR")
                change_terms = ("시행", "발표", "확정", "개정", "규제", "완화", "강화", "도입", "공고", "입법", "대책")
                result["items"] = [item for item in result["items"] if trusted(item, OFFICIAL_POLICY_SOURCES) and any(term in item["title"] for term in policy_terms) and any(term in item["title"] for term in change_terms) and not any(term in item["title"] for term in DOMESTIC_POLITICS_TERMS)][:limit]
            elif name == "realestate_market":
                result = parse_feed(get_xml(feed_url(query)), now, 25)
                result["items"] = select_realestate_market_items(result["items"], limit)
            elif name == "samsung_baseball":
                result = parse_feed(get_xml(feed_url(query)), now, 20)
                result["items"] = [item for item in result["items"] if not item["title"].startswith("[사진]")][:limit]
            elif name == "science_tech":
                result = parse_feed(get_xml(feed_url(query)), now, 30)
                science_terms = ("연구", "기술", "개발", "실험", "발견", "우주", "과학", "신물질")
                result["items"] = [item for item in result["items"] if trusted(item, SCIENCE_SOURCES) and any(term in item["title"] for term in science_terms) and not any(term in item["title"] for term in DOMESTIC_POLITICS_TERMS)][:limit]
            else:
                result = parse_feed(get_xml(feed_url(query)), now, limit)
            result["feed_url"] = feed_url(query)
            sections[name] = result
        except Exception as exc:
            errors.append(f"{name}: {exc}")
            sections[name] = {"items": [], "window": "가져오기 실패", "feed_url": feed_url(query)}
    world_markets = sections.pop("top_world_markets")
    world_macro = sections.pop("top_world_macro")
    property_feed = sections.pop("top_property")
    top_items = select_top_items([world_markets, world_macro], property_feed)
    sections["top"] = {
        "items": top_items,
        "window": "최근 36시간" if all(
            datetime.fromisoformat(item["published_at"]) >= now - timedelta(hours=36)
            for item in top_items
        ) else "최근 72시간",
        "feed_urls": [feed["feed_url"] for feed in (world_markets, world_macro, property_feed)],
    }
    if not any(section["items"] for section in sections.values()):
        raise RuntimeError("All news feeds failed or contained no recent items: " + "; ".join(errors))
    return {
        "generated_at": now.isoformat(timespec="seconds"),
        "timezone": "Asia/Seoul",
        "method": "Google News RSS 세계 경제·부동산 헤드라인 수집; 국내 정치 키워드 제외; 순서는 피드 제공 순서이며 독자적 중요도 평가가 아님",
        "sections": sections,
        "errors": errors,
    }


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--output", type=Path, help="JSON output file; omit to print to stdout")
    args = parser.parse_args()
    data = build()
    encoded = json.dumps(data, ensure_ascii=False, indent=2) + "\n"
    if args.output:
        args.output.parent.mkdir(parents=True, exist_ok=True)
        args.output.write_text(encoded, encoding="utf-8")
        print(f"Wrote {args.output}: " + ", ".join(f"{k}={len(v['items'])}" for k, v in data["sections"].items()))
    else:
        sys.stdout.write(encoded)


if __name__ == "__main__":
    main()
