import unittest
from datetime import datetime
from zoneinfo import ZoneInfo

from scripts.update_market import calculate_changes


class MarketComparisonTests(unittest.TestCase):
    def test_holiday_gap_uses_previous_week_last_trading_close(self):
        zone = ZoneInfo("Asia/Seoul")
        dates = [(2026, 9, 23), (2026, 10, 1), (2026, 10, 2)]
        timestamps = [int(datetime(*day, 9, tzinfo=zone).timestamp()) for day in dates]
        result = {
            "meta": {"exchangeTimezoneName": "Asia/Seoul"},
            "timestamp": timestamps,
            "indicators": {"quote": [{"close": [90.0, 95.0, None]}]},
        }
        changes = calculate_changes(result, datetime(2026, 10, 2, 20, tzinfo=zone), 100.0)
        self.assertEqual(changes["day_change"]["baseline_date"], "2026-10-01")
        self.assertEqual(changes["day_change"]["amount"], 5.0)
        self.assertEqual(changes["week_change"]["baseline_date"], "2026-09-23")
        self.assertEqual(changes["week_change"]["amount"], 10.0)

    def test_same_day_extra_fx_bar_is_not_previous_day(self):
        zone = ZoneInfo("Europe/London")
        dates = [(2026, 9, 25), (2026, 10, 1), (2026, 10, 2), (2026, 10, 2)]
        timestamps = [int(datetime(*day, 9, tzinfo=zone).timestamp()) + i for i, day in enumerate(dates)]
        result = {
            "meta": {"exchangeTimezoneName": "Europe/London"},
            "timestamp": timestamps,
            "indicators": {"quote": [{"close": [80.0, 90.0, 95.0, 100.0]}]},
        }
        changes = calculate_changes(result, datetime(2026, 10, 2, 22, tzinfo=zone), 100.0)
        self.assertEqual(changes["day_change"]["baseline"], 90.0)
        self.assertEqual(changes["week_change"]["baseline"], 80.0)


if __name__ == "__main__":
    unittest.main()
