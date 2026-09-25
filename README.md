# 모닝 브리프

매일 아침의 주요 뉴스, IT·삼성SDS 소식, 주식 관심 종목을 보여주는 개인 웹페이지입니다.

- [홈페이지](index.html): 한국 주요 뉴스, IT·삼성SDS 뉴스, 투자 관찰 후보 3개
- [삼성SDS 사업·재무 분석](sds-report.html): 공개 DART 공시와 공식 IR 자료 기반 보고서
- [뉴스 수집 스크립트](scripts/update_news.py): Google News RSS에서 제목·출처·발행 시각·원문 링크만 수집
- [자동 갱신 설정](.github/workflows/site.yml): 매일 오전 7시(Asia/Seoul) 실행을 예약하고 GitHub Pages에 배포

GitHub Pages를 처음 활성화할 때 저장소 **Settings → Pages → Build and deployment → Source**를 **GitHub Actions**로 설정해야 합니다. GitHub Actions의 예약 실행은 지연되거나 누락될 수 있으므로 정확히 7시 배포를 보장하지 않습니다. 뉴스 화면에는 실제 마지막 수집 시각과 오래된 자료 여부가 표시됩니다.

주식 관심 종목은 비개인화 정보이며 매수·매도 지시가 아닙니다. 실시간 시세나 목표가를 제공하지 않습니다. 뉴스 헤드라인의 내용은 링크된 언론사의 원문에서 확인하세요.
