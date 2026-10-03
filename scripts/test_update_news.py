import unittest

from scripts.update_news import select_realestate_market_items


class RealEstateHeadlineTests(unittest.TestCase):
    def test_filters_irrelevant_or_spam_headlines(self):
        items = [
            {"title": "서울 아파트 실거래가 변동"},
            {"title": "카지노 베팅 보너스 안내"},
            {"title": "경기 오피스텔 월세 동향"},
            {"title": "서울 카지노 슬롯머신"},
        ]
        self.assertEqual(
            [x["title"] for x in select_realestate_market_items(items, 5)],
            ["서울 아파트 실거래가 변동", "경기 오피스텔 월세 동향"],
        )


if __name__ == "__main__":
    unittest.main()
