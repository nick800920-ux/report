(function () {
  "use strict";

  const topics = [
    {
      title: "AI 데이터센터와 전력 문제",
      intro: "AI 데이터센터가 늘면서 전력·물 사용과 지역사회 부담을 어떻게 나눌지가 쟁점입니다. 미국의 자체 전력·지역사회 혜택 논의는 확정된 보편적 법률이 아니라 최근 발표와 제안으로 구분해 보세요.",
      questions: [
        "What are the benefits and problems of building AI data centers?",
        "Should tech companies pay for the electricity and water their data centers use?",
        "How do you think AI will change our daily lives?"
      ],
      idea: "AI는 의료·교육·업무를 편리하게 만들 수 있지만, 데이터센터가 전력과 물을 많이 쓰면 지역사회에 부담이 됩니다. 기업과 정부가 효율적인 사용과 비용 분담을 함께 고민해야 합니다.",
      answer: "Artificial intelligence is becoming part of our daily lives. It can help people work faster and solve difficult problems. However, AI data centers need a lot of electricity and water. This can put pressure on local communities and the power grid. I think technology companies should use energy more efficiently and help pay for the resources they consume. Governments should also make clear rules. AI can benefit society, but its growth should be sustainable.",
      vocab: [["put pressure on", "~에 부담을 주다"], ["power grid", "전력망"], ["use energy efficiently", "에너지를 효율적으로 사용하다"], ["sustainable", "지속 가능한"]],
      links: [
        ["로이터: 데이터센터와 지역사회 배당 논의", "https://uk.marketscreener.com/news/trump-says-companies-should-pay-dividend-to-communities-to-make-data-centers-popular-ce785cd8de8af622", "로이터 기사 재게재 · 2026-10-21"],
        ["Axios: AI 경쟁과 전력 공급 병목", "https://www.axios.com/2026/10/20/goldman-ai-energy-infrastructure-bottleneck", "전력망·인프라 분석 · 2026-10-20"],
        ["Brookings: AI 데이터센터와 물 사용", "https://www.brookings.edu/articles/ai-data-centers-and-water/", "연구소 분석 · 2025-11"],
        ["로이터: 한국 AI 반도체 단지의 전력·물 과제", "https://wifc.com/2026/07/20/analysis-power-water-needs-test-south-koreas-push-to-build-ai-chip-hub-beyond-seoul/", "로이터 기사 재게재 · 2026-07-21"]
      ]
    },
    {
      title: "AI와 학교 교육",
      intro: "AI 학습 도구가 숙제와 공부 방법을 바꾸고 있습니다. 편리함과 스스로 생각하는 힘을 함께 이야기해 보세요.",
      questions: ["How can AI help students learn?", "Should students be allowed to use AI for homework?", "Describe a useful learning tool you have tried."],
      idea: "AI는 어려운 개념을 쉽게 설명하고 연습 문제를 만들 수 있습니다. 하지만 답을 그대로 베끼면 스스로 생각할 기회를 잃습니다.",
      answer: "I think AI can be a helpful learning partner. When I do not understand a topic, I can ask it for a simple explanation or more practice questions. However, I should not copy its answers. I need to check the information and explain it in my own words. In my opinion, schools should teach students how to use AI responsibly.",
      vocab: [["learning partner", "학습 동반자"], ["in my own words", "내 말로"], ["check the information", "정보를 확인하다"], ["responsibly", "책임감 있게"]],
      query: "AI education students homework learning"
    },
    {
      title: "재택근무와 사무실 근무",
      intro: "어디에서 일할 때 가장 집중이 잘 되는지, 협업과 출퇴근 시간을 어떻게 생각하는지 말해 보세요.",
      questions: ["Do you prefer working from home or at an office?", "What are the benefits of remote work?", "How has technology changed the way people work?"],
      idea: "재택근무는 출퇴근 시간을 줄이고 집중하기 좋지만, 얼굴을 맞대는 협업은 어려울 수 있습니다. 일의 성격에 맞춰 선택하는 방식이 좋습니다.",
      answer: "I prefer a mix of working from home and going to the office. At home, I can save commuting time and focus on individual tasks. At the office, it is easier to discuss ideas with my coworkers. Online tools make remote work possible, but they cannot replace every face-to-face conversation. A flexible schedule would give me the best of both options.",
      vocab: [["commuting time", "출퇴근 시간"], ["face-to-face", "대면의"], ["flexible schedule", "유연한 일정"], ["collaborate", "협업하다"]],
      query: "remote work hybrid office productivity"
    },
    {
      title: "대중교통과 친환경 이동",
      intro: "버스·지하철·자전거·자동차 중 어떤 교통수단을 자주 쓰는지 경험을 곁들여 말해 보세요.",
      questions: ["How do you usually travel around your city?", "What are the advantages of public transportation?", "How can cities reduce traffic and air pollution?"],
      idea: "대중교통은 교통 체증과 오염을 줄일 수 있지만, 환승이나 혼잡이 불편할 수 있습니다. 운행 간격과 접근성을 개선하는 것이 중요합니다.",
      answer: "I usually take the subway because it is reliable and I do not have to worry about parking. Public transportation can reduce traffic and air pollution when many people use it. Still, crowded trains can be uncomfortable during rush hour. I think cities should provide more frequent service and make stations easier to reach.",
      vocab: [["rush hour", "출퇴근 혼잡 시간"], ["reliable", "믿을 만한"], ["air pollution", "대기오염"], ["frequent service", "잦은 운행"]],
      query: "public transportation traffic air pollution city"
    },
    {
      title: "플라스틱 쓰레기 줄이기",
      intro: "일회용품을 줄이는 작은 습관과 기업·정부의 역할을 이야기해 보세요.",
      questions: ["What do you do to reduce plastic waste?", "Should stores charge for disposable bags?", "Why is recycling sometimes difficult?"],
      idea: "텀블러와 장바구니를 쓰는 개인의 실천이 도움이 됩니다. 동시에 재사용하기 쉬운 포장과 명확한 분리배출 안내도 필요합니다.",
      answer: "I try to carry a reusable bottle and a shopping bag. These habits do not solve the whole problem, but they help me use fewer disposable products. Recycling can be confusing because the rules are different for each material. Companies should design simpler packaging, and local governments should give clear instructions.",
      vocab: [["reusable bottle", "다회용 물병"], ["disposable products", "일회용품"], ["packaging", "포장재"], ["sort waste", "쓰레기를 분리하다"]],
      query: "plastic waste reusable packaging recycling"
    },
    {
      title: "개인정보와 온라인 생활",
      intro: "편리한 앱을 이용하면서 개인정보를 지키는 방법을 말해 보세요.",
      questions: ["How do you protect your personal information online?", "Are you worried about sharing data with apps?", "What should companies do to keep user data safe?"],
      idea: "강한 비밀번호와 이중 인증을 쓰고, 앱 권한을 점검합니다. 기업은 수집 범위를 줄이고 유출 시 빠르게 알려야 합니다.",
      answer: "I use different passwords for important accounts and turn on two-factor authentication. Before installing an app, I check what information it asks for. I like convenient services, but I do not want to share more data than necessary. Companies should explain their privacy rules clearly and protect user information carefully.",
      vocab: [["personal information", "개인정보"], ["two-factor authentication", "이중 인증"], ["app permissions", "앱 접근 권한"], ["data breach", "정보 유출"]],
      query: "online privacy apps personal data cybersecurity"
    },
    {
      title: "건강한 생활 습관",
      intro: "운동·수면·식사 중 하나를 골라 실제 생활에서 지키는 방법을 말해 보세요.",
      questions: ["What do you do to stay healthy?", "Why do many people find it hard to exercise regularly?", "Describe a healthy habit you want to build."],
      idea: "무리한 목표보다 걷기와 일정한 수면처럼 지속할 수 있는 습관이 중요합니다. 바쁜 날에도 작은 실천을 이어가는 방법을 제시하세요.",
      answer: "I try to take a short walk every day and get enough sleep. It can be difficult to exercise regularly when work gets busy. So I set a small goal that I can actually follow. For example, I can walk for twenty minutes after dinner. I think a simple habit is more useful than an ambitious plan I cannot keep.",
      vocab: [["stay healthy", "건강을 유지하다"], ["regularly", "규칙적으로"], ["set a small goal", "작은 목표를 세우다"], ["keep a habit", "습관을 유지하다"]],
      query: "healthy habits walking sleep exercise research"
    }
  ];

  const parts = new Intl.DateTimeFormat("en-CA", {timeZone: "Asia/Seoul", year: "numeric", month: "2-digit", day: "2-digit"}).formatToParts(new Date());
  const datePart = name => Number(parts.find(part => part.type === name).value);
  const today = Math.round((Date.UTC(datePart("year"), datePart("month") - 1, datePart("day")) - Date.UTC(2026, 9, 22)) / 86400000);
  const indexForDay = day => ((day % topics.length) + topics.length) % topics.length;
  const dateForDay = day => new Intl.DateTimeFormat("ko-KR", {timeZone: "Asia/Seoul", year: "numeric", month: "long", day: "numeric", weekday: "long"}).format(new Date(Date.UTC(2026, 9, 22 + day, 12)));
  const topicForDay = day => topics[indexForDay(day)];
  const title = document.getElementById("opic-today-title");
  if (title) {
    title.textContent = topicForDay(today).title;
    const date = document.getElementById("opic-today-date");
    if (date) date.textContent = dateForDay(today);
  }

  if (!document.getElementById("opic-questions")) return;
  let selectedDay = today;
  const setText = (id, value) => { document.getElementById(id).textContent = value; };
  const addItem = (list, label, description, url) => {
    const li = document.createElement("li");
    if (url) {
      const a = document.createElement("a");
      a.href = url;
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      a.textContent = label + " ↗";
      li.append(a);
      const small = document.createElement("small");
      small.textContent = description;
      li.append(small);
    } else {
      const strong = document.createElement("strong");
      strong.textContent = label;
      li.append(strong, document.createTextNode(description));
    }
    list.append(li);
  };
  function render() {
    const topic = topicForDay(selectedDay);
    setText("opic-date", dateForDay(selectedDay) + (selectedDay === today ? " · 오늘" : ""));
    setText("opic-title", topic.title);
    setText("opic-intro", topic.intro);
    setText("opic-idea", topic.idea);
    setText("opic-answer", topic.answer);
    const questions = document.getElementById("opic-questions");
    questions.replaceChildren();
    topic.questions.forEach(question => { const li = document.createElement("li"); li.textContent = question; questions.append(li); });
    const vocab = document.getElementById("opic-vocab");
    vocab.replaceChildren();
    topic.vocab.forEach(([word, meaning]) => addItem(vocab, word, meaning));
    const links = document.getElementById("opic-links");
    links.replaceChildren();
    if (topic.links) {
      topic.links.forEach(([label, url, note]) => addItem(links, label, note, url));
      setText("opic-link-note", "직접 확인한 기사·분석 링크입니다. 유료 기사나 국가별 접속 제한이 있을 수 있습니다.");
    } else {
      const query = encodeURIComponent(topic.query);
      addItem(links, "Google News 관련 기사 검색", "최신 기사 목록에서 발행일 확인", "https://news.google.com/search?q=" + query + "&hl=en-US&gl=US&ceid=US:en");
      addItem(links, "Reuters 관련 기사 검색", "Google에서 Reuters 보도 찾기", "https://www.google.com/search?q=" + encodeURIComponent("site:reuters.com " + topic.query));
      addItem(links, "BBC 관련 기사 검색", "Google에서 BBC 보도 찾기", "https://www.google.com/search?q=" + encodeURIComponent("site:bbc.com/news " + topic.query));
      setText("opic-link-note", "검색 링크는 기사 자체가 아닙니다. 검색 결과의 출처·발행일을 확인하세요.");
    }
  }
  document.getElementById("opic-prev").addEventListener("click", () => { selectedDay--; render(); });
  document.getElementById("opic-next").addEventListener("click", () => { selectedDay++; render(); });
  document.getElementById("opic-today").addEventListener("click", () => { selectedDay = today; render(); });
  render();
})();
