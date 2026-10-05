import unittest
from datetime import datetime
from zoneinfo import ZoneInfo

from scripts.update_news import add_current_sds_event, select_realestate_market_items, select_top_items


class RealEstateHeadlineTests(unittest.TestCase):
    def test_official_sds_event_only_during_event_dates(self):
        kst = ZoneInfo("Asia/Seoul")
        for day, expected in [(5, 0), (6, 1), (8, 1), (9, 0)]:
            section = {"items": [], "window": "최근 72시간"}
            add_current_sds_event(section, datetime(2026, 10, day, 12, tzinfo=kst))
            self.assertEqual(len(section["items"]), expected)
            if expected:
                self.assertEqual(section["items"][0]["source"], "Samsung SDS")

    def test_filters_irrelevant_or_spam_headlines(self):
        items = [
            {"title": "서울 아파트 실거래가 변동", "source": "연합뉴스"},
            {"title": "카지노 베팅 보너스 안내", "source": "연합뉴스"},
            {"title": "경기 오피스텔 월세 동향", "source": "KBS 뉴스"},
            {"title": "서울 카지노 슬롯머신", "source": "연합뉴스"},
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


if __name__ == "__main__":
    unittest.main()
