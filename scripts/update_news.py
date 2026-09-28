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
    "top_world_markets": ("미국 증시 OR 유럽 증시 OR 세계 경제 OR 국제 유가 OR 미국 연준", 12),
    "top_world_macro": ("미국 경제 OR 중국 경제 OR 글로벌 증시 OR 국제유가 OR 달러 환율", 12),
    "top_property": ("서울 아파트 시장 OR 수도권 부동산 OR 주택담보대출 OR 청약", 12),
    "it": ("AI OR 클라우드 OR 반도체", 8),
    "sds": ("삼성SDS", 8),
    "realestate_policy": ("부동산 대출 규제 OR 주택 세제 OR 재건축 정책", 5),
    "realestate_market": ("서울 아파트 실거래가 OR 경기 아파트 가격 OR 오피스텔 가격동향", 5),
    "realestate_presale": ("서울 경기 아파트 청약 입주자모집공고", 5),
    "samsung_baseball": ("삼성 라이온즈 경기 결과 OR 삼성 라이온즈 경기 일정 OR 삼성 라이온즈 구단 소식", 6),
    "science_tech": ("과학기술 OR 신기술 OR 연구 성과", 6),
}

DOMESTIC_POLITICS_TERMS = (
    "대통령실", "청와대", "국회", "여당", "야당", "여야", "민주당",
    "국민의힘", "당대표", "원내대표", "탄핵", "국정감사", "지방선거",
    "대선", "총선", "정치권", "이 대통령", "이재명 대통령",
)


def select_top_items(world_feeds: list[dict], property_feed: dict) -> list[dict]:
    """Keep the headline deck focused, balanced and free of domestic politics."""
    seen = set()

    def take(feeds: list[dict], category: str, limit: int) -> list[dict]:
        selected = []
        for feed in feeds:
            for item in feed.get("items", []):
                title = item["title"]
                key = "".join(title.casefold().split())
                if key in seen or any(term in title for term in DOMESTIC_POLITICS_TERMS):
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


def parse_feed(xml_bytes: bytes, now: datetime, limit: int) -> dict:
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
        if published > now + timedelta(minutes=10) or published < now - timedelta(hours=72):
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
    fresh = [item for item in found if datetime.fromisoformat(item["published_at"]) >= now - timedelta(hours=36)]
    if fresh:
        return {"items": fresh[:limit], "window": "최근 36시간"}
    return {"items": found[:limit], "window": "최근 72시간"}


def build() -> dict:
    now = datetime.now(KST)
    sections = {}
    errors = []
    for name, (query, limit) in FEEDS.items():
        try:
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
