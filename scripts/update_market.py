#!/usr/bin/env python3
"""Save dated, delayed market snapshots for the static homepage.

Yahoo Finance chart data is not a trading feed. Each quote carries its own
timestamp, so a holiday or a failed fetch is never labeled as today's price.
"""

from __future__ import annotations

import argparse
import json
import math
import time
import urllib.parse
import urllib.request
from datetime import datetime, timedelta, timezone
from pathlib import Path
from zoneinfo import ZoneInfo


KST = ZoneInfo("Asia/Seoul")
SYMBOLS = {
    "kospi": ("^KS11", "코스피", "지수"),
    "sp500": ("^GSPC", "S&P 500", "지수"),
    "usdkrw": ("KRW=X", "달러/원", "원 / 1 USD"),
}


def fetch_quote(symbol: str, name: str, unit: str, now: datetime) -> dict:
    encoded = urllib.parse.quote(symbol, safe="")
    url = f"https://query1.finance.yahoo.com/v8/finance/chart/{encoded}?range=5d&interval=1d"
    request = urllib.request.Request(
        url,
        headers={"User-Agent": "Mozilla/5.0 (compatible; PersonalMarketDashboard/1.0)", "Accept": "application/json"},
    )
    error = None
    for attempt in range(3):
        try:
            with urllib.request.urlopen(request, timeout=15) as response:
                result = json.load(response)["chart"]["result"][0]
            meta = result["meta"]
            value = float(meta["regularMarketPrice"])
            quoted_at = datetime.fromtimestamp(int(meta["regularMarketTime"]), timezone.utc).astimezone(KST)
            if not math.isfinite(value) or value <= 0:
                raise ValueError("Invalid quote")
            if quoted_at > now + timedelta(minutes=15):
                raise ValueError("Quote timestamp is in the future")
            return {
                "name": name,
                "value": round(value, 4),
                "unit": unit,
                "as_of": quoted_at.isoformat(timespec="seconds"),
                "source_url": f"https://finance.yahoo.com/quote/{encoded}/",
            }
        except Exception as exc:
            error = exc
            if attempt < 2:
                time.sleep(attempt + 1)
    raise RuntimeError(f"{symbol}: {type(error).__name__}: {error}")


def build(previous: dict | None = None) -> dict:
    now = datetime.now(KST)
    old_quotes = (previous or {}).get("quotes", {})
    quotes = {}
    errors = []
    for key, (symbol, name, unit) in SYMBOLS.items():
        try:
            quotes[key] = fetch_quote(symbol, name, unit, now)
        except Exception as exc:
            errors.append(str(exc))
            old = old_quotes.get(key)
            if isinstance(old, dict) and isinstance(old.get("as_of"), str) and isinstance(old.get("value"), (int, float)):
                quotes[key] = old
    return {
        "checked_at": now.isoformat(timespec="seconds"),
        "timezone": "Asia/Seoul",
        "source": "Yahoo Finance delayed chart quotes",
        "quotes": quotes,
        "errors": errors,
    }


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--output", type=Path, help="JSON output; omit to print to stdout")
    args = parser.parse_args()
    previous = None
    if args.output and args.output.exists():
        try:
            previous = json.loads(args.output.read_text(encoding="utf-8"))
        except (OSError, ValueError):
            pass
    encoded = json.dumps(build(previous), ensure_ascii=False, indent=2) + "\n"
    if args.output:
        args.output.parent.mkdir(parents=True, exist_ok=True)
        args.output.write_text(encoded, encoding="utf-8")
        print(f"Wrote {args.output}")
    else:
        print(encoded, end="")


if __name__ == "__main__":
    main()
