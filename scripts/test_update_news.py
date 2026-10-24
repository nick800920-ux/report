import unittest
from datetime import datetime
from zoneinfo import ZoneInfo

from scripts.update_news import FEEDS, add_current_sds_event, add_recent_baseball_official, add_recent_science_official, add_recent_sds_official, dedupe_sds_topics, select_presale_items, select_realestate_market_items, select_top_items, unique_headlines


class RealEstateHeadlineTests(unittest.TestCase):
    def test_playoff_link_only_before_game_one(self):
        kst = ZoneInfo("Asia/Seoul")
        section = {"items": [], "window": "최근 72시간"}
        add_recent_baseball_official(section, datetime(2026, 10, 23, tzinfo=kst))
        self.assertEqual(section["items"][0]["source"], "KBO")
        add_recent_baseball_official(section, datetime(2026, 10, 23, tzinfo=kst))
        self.assertEqual(len(section["items"]), 1)
        later = {"items": [], "window": "최근 72시간"}
        add_recent_baseball_official(later, datetime(2026, 10, 25, tzinfo=kst))
        self.assertEqual(later["items"], [])

    def test_sds_syndicated_deal_is_shown_once(self):
        items = [{"title": "BNK금융, 삼성SDS 우선협상"}, {"title": "BNK금융 삼성SDS와 협상"}, {"title": "삼성SDS 신규 서비스"}]
        self.assertEqual(len(dedupe_sds_topics(items, 8)), 2)

    def test_gyeongju_travel_feed_is_excluded(self):
        self.assertNotIn("gyeongju_travel", FEEDS)

    def test_presale_requires_trusted_source_and_real_notice(self):
        rows = [
            {"title": "경기 아파트 청약 일정", "source": "민심뉴스"},
            {"title": "서울 아파트 청약 추천 후보 정리", "source": "연합뉴스"},
            {"title": "서울 아파트 입주자모집공고 발표", "source": "연합뉴스"},
        ]
        self.assertEqual([x["title"] for x in select_presale_items(rows, 5)], ["서울 아파트 입주자모집공고 발표"])

    def test_official_sds_event_only_during_event_dates(self):
        kst = ZoneInfo("Asia/Seoul")
        for day, expected in [(5, 0), (6, 1), (8, 1), (9, 0)]:
            section = {"items": [], "window": "최근 72시간"}
            add_current_sds_event(section, datetime(2026, 10, day, 12, tzinfo=kst))
            self.assertEqual(len(section["items"]), expected)
            if expected:
                self.assertEqual(section["items"][0]["source"], "Samsung SDS")

    def test_official_sds_fallback_expires_and_does_not_override_news(self):
        kst = ZoneInfo("Asia/Seoul")
        section = {"items": [], "window": "최근 72시간"}
        add_recent_sds_official(section, datetime(2026, 10, 10, tzinfo=kst))
        self.assertEqual(len(section["items"]), 1)
        self.assertEqual(section["items"][0]["source"], "Samsung SDS")
        section = {"items": [], "window": "최근 72시간"}
        add_recent_sds_official(section, datetime(2026, 10, 30, tzinfo=kst))
        self.assertEqual(section["items"], [])

    def test_duplicate_video_headlines_are_removed(self):
        rows = [
            {"title": "[영상] 크래프톤, 서울대와 AI 연구", "published_at": "2026-10-09T10:00:00+09:00"},
            {"title": "영상크래프톤, 서울대와 AI 연구", "published_at": "2026-10-09T11:00:00+09:00"},
        ]
        self.assertEqual(len(unique_headlines(rows, 5)), 1)

    def test_official_science_fallback_expires(self):
        kst = ZoneInfo("Asia/Seoul")
        section = {"items": [], "window": "최근 72시간"}
        add_recent_science_official(section, datetime(2026, 10, 21, tzinfo=kst))
        self.assertEqual(section["items"][0]["source"], "NASA")
        section = {"items": [], "window": "최근 72시간"}
        add_recent_science_official(section, datetime(2026, 10, 28, tzinfo=kst))
        self.assertEqual(section["items"], [])

    def test_official_science_story_leads_generic_results(self):
        kst = ZoneInfo("Asia/Seoul")
        section = {"items": [{"title": "일반 과학 기사", "source": "연합뉴스"}], "window": "최근 36시간"}
        add_recent_science_official(section, datetime(2026, 10, 21, tzinfo=kst))
        self.assertEqual(section["items"][0]["source"], "NASA")
        self.assertEqual(section["window"], "최근 36시간")

    def test_new_science_story_replaces_old_one_and_expires(self):
        kst = ZoneInfo("Asia/Seoul")
        section = {"items": [{"title": "기존 NASA 기사", "source": "NASA"}], "window": "최근 36시간"}
        add_recent_science_official(section, datetime(2026, 10, 21, tzinfo=kst))
        self.assertIn("화성 헬리콥터", section["items"][0]["title"])
        section = {"items": [], "window": "최근 72시간"}
        add_recent_science_official(section, datetime(2026, 10, 28, tzinfo=kst))
        self.assertEqual(section["items"], [])

    def test_filters_irrelevant_or_spam_headlines(self):
        items = [
            {"title": "서울 아파트 실거래가 변동", "source": "연합뉴스"},
            {"title": "카지노 베팅 보너스 안내", "source": "연합뉴스"},
            {"title": "경기 오피스텔 월세 동향", "source": "KBS 뉴스"},
            {"title": "서울 카지노 슬롯머신", "source": "연합뉴스"},
            {"title": "서울 아파트 투자 공부 재테크 서적 출간", "source": "연합뉴스"},
            {"title": "서울 아파트 쥐 민원 증가", "source": "연합뉴스"},
            {"title": "서울 아파트 광고", "source": "광고 사이트"},
        ]
        self.assertEqual(
            [x["title"] for x in select_realestate_market_items(items, 5)],
            ["서울 아파트 실거래가 변동", "경기 오피스텔 월세 동향"],
        )

    def test_top_keeps_trusted_world_and_housing_without_politics(self):
        market = {"items": [
            {"title": "뉴욕증시 상승 마감", "source": "연합뉴스"},
            {"title": "미국 증시 투자 전략", "source": "광고 사이트"},
            {"title": "국회, 뉴욕증시 논쟁", "source": "KBS 뉴스"},
        ]}
        oil = {"items": [{"title": "국제유가 하락", "source": "MBC 뉴스"}]}
        homes = {"items": [{"title": "서울 아파트 전셋값", "source": "한국일보"}]}
        self.assertEqual(
            [item["title"] for item in select_top_items([market, oil], homes)],
            ["뉴욕증시 상승 마감", "국제유가 하락", "서울 아파트 전셋값"],
        )

    def test_top_puts_newer_headlines_first_without_same_topic_repeats(self):
        market = {"items": [
            {"title": "뉴욕증시 오래된 소식", "source": "연합뉴스", "published_at": "2026-10-07T08:00:00+09:00"},
            {"title": "뉴욕증시 오늘 소식", "source": "연합뉴스", "published_at": "2026-10-09T05:00:00+09:00"},
        ]}
        homes = {"items": [
            {"title": "서울 아파트 어제 소식", "source": "한국일보", "published_at": "2026-10-08T16:00:00+09:00"},
        ]}
        self.assertEqual(
            [item["title"] for item in select_top_items([market], homes)],
            ["뉴욕증시 오늘 소식", "서울 아파트 어제 소식"],
        )

    def test_top_rejects_housing_buy_signal(self):
        homes = {"items": [
            {"title": "서울 아파트 지금 매수 기회?", "source": "매일경제"},
            {"title": "서울 아파트 실거래 동향", "source": "연합뉴스"},
        ]}
        self.assertEqual(
            [item["title"] for item in select_top_items([], homes)],
            ["서울 아파트 실거래 동향"],
        )

    def test_top_collapses_median_apartment_price_repeats(self):
        homes = {"items": [
            {"title": "서울 중간 가격대 아파트 10억 원", "source": "연합뉴스"},
            {"title": "서울 아파트 중간가격 10억 원", "source": "한국일보"},
        ]}
        self.assertEqual(len(select_top_items([], homes)), 1)


if __name__ == "__main__":
    unittest.main()
