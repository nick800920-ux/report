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
      intro: "OECD는 AI가 분명한 교육 목적 아래에서는 학습을 도울 수 있지만, 과제를 AI에 맡기는 것만으로는 배움이 늘지 않을 수 있다고 설명합니다. 편리함과 스스로 생각하는 힘을 함께 이야기해 보세요.",
      questions: ["How can AI help students learn without doing all their work for them?", "Should students be allowed to use AI for homework?", "What should teachers do to help students check AI-generated answers?"],
      idea: "AI로 어려운 개념을 다시 설명받거나 연습 문제를 만들어 볼 수 있습니다. 답을 그대로 제출하기보다 근거를 확인하고 자기 말로 설명해야 실력이 늘 수 있습니다.",
      answer: "I think AI can be a useful study partner, but it should not do a student's work. For example, it can explain a difficult idea in simpler words and suggest practice questions. However, students still need to check whether the answer is correct. I would use AI to get feedback, then write my final answer in my own words. Teachers can also show students how to question AI-generated information. That way, AI supports learning instead of replacing it.",
      vocab: [["study partner", "학습 도우미"], ["in my own words", "내 말로"], ["check the facts", "사실을 확인하다"], ["replace learning", "학습을 대신하다"]],
      links: [
        ["OECD: AI 활용·읽기 능력·학습에 관한 PISA 분석", "https://www.oecd.org/en/blogs/2026/09/pisa-findings-on-artificial-intelligence-use-reading-skills-and-learning.html", "OECD 설명 · 2026-09-08"],
        ["OECD: Digital Education Outlook 2026", "https://www.oecd.org/en/publications/oecd-digital-education-outlook-2026_062a7394-en.html", "교육 연구 보고서 · 2026"],
        ["UNESCO: 교육·연구에서 생성형 AI 활용 지침", "https://www.unesco.org/en/articles/guidance-generative-ai-education-and-research", "UNESCO 지침 · 2023-09-07, 2026-01-16 갱신"]
      ]
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

  const everydayTopics = [
    {
      title: "집에서 보내는 저녁",
      intro: "집의 분위기와 평일 저녁에 하는 일을 편하게 묘사해 보세요.",
      questions: ["What do you usually do at home after work?", "Describe your favorite place in your home.", "Tell me about a relaxing evening you had recently."],
      idea: "퇴근 후 쉬는 장소를 먼저 소개하고, 최근 어느 날 무엇을 했는지와 왜 좋았는지를 덧붙입니다.",
      answer: "After work, I usually have dinner with my family and relax in the living room. It is not a big room, but it feels warm and comfortable. Last Friday, we watched a baseball game together. We ordered some food and talked about the players. I was tired at first, but I felt much better by the end of the evening. That is why I like spending quiet time at home.",
      vocab: [["relax in the living room", "거실에서 쉬다"], ["feel comfortable", "편안하게 느끼다"], ["at first", "처음에는"], ["by the end of the evening", "저녁이 끝날 무렵"]],
      query: "family time at home evening relaxation"
    },
    {
      title: "좋아하는 식당",
      intro: "자주 가는 식당을 하나 떠올리고, 위치·음식·최근 방문 경험을 말해 보세요.",
      questions: ["Describe a restaurant you often visit.", "What do you usually order there?", "Tell me about your most recent visit to that restaurant."],
      idea: "식당의 위치와 분위기 → 즐겨 먹는 메뉴 → 최근 방문 때 있었던 일 → 그곳을 좋아하는 이유 순서로 답합니다.",
      answer: "There is a small restaurant near my home that I often visit with my family. It serves simple Korean food, and the staff are always friendly. I usually order grilled fish because it tastes fresh and comes with several side dishes. Last weekend, we went there after a long walk. The restaurant was busy, so we waited for about fifteen minutes. The food was worth the wait, and we had a nice conversation over dinner. I like this place because it feels comfortable and the food is reliable.",
      vocab: [["near my home", "집 근처에"], ["side dishes", "반찬"], ["worth the wait", "기다릴 만한 가치가 있는"], ["have a nice conversation", "즐겁게 대화하다"]],
      query: "favorite local restaurant dining out family experience"
    },
    {
      title: "주말에 하는 일",
      intro: "평소 주말 루틴과 기억에 남는 지난 주말을 비교해 말해 보세요.",
      questions: ["What do you usually do on weekends?", "How was last weekend different from a normal weekend?", "Do you prefer busy or relaxing weekends?"],
      idea: "평소에는 쉬거나 가족과 시간을 보낸다고 설명하고, 지난 주말의 구체적인 경험을 한 가지 이야기합니다.",
      answer: "On weekends, I usually sleep a little longer and spend time with my family. We often go to a nearby park or have lunch outside. Last weekend was different because it rained all day. Instead of going out, we cooked dinner together and played a board game. I enjoyed it more than I expected. I like relaxing weekends because they help me get ready for the next week.",
      vocab: [["sleep a little longer", "조금 늦잠을 자다"], ["instead of", "~대신에"], ["more than I expected", "생각보다 더"], ["get ready for", "~을 준비하다"]],
      query: "weekend family activities relaxation"
    },
    {
      title: "기억에 남는 여행",
      intro: "방문한 곳, 함께 간 사람, 예상 밖의 일과 느낀 점을 순서대로 말해 보세요.",
      questions: ["Tell me about a trip you remember well.", "Who did you go with and what did you do?", "Did anything unexpected happen during the trip?"],
      idea: "여행지와 동행을 짧게 소개하고, 가장 기억나는 순간 하나를 자세히 말한 뒤 느낌으로 마무리합니다.",
      answer: "One trip I remember well was a family trip to the seaside. We went there by train and stayed for two nights. On the first day, it suddenly started to rain, so our plans changed. We found a small cafe with a view of the ocean and spent the afternoon there. At first, I was disappointed, but the quiet time with my family became my favorite memory. The trip reminded me that unexpected moments can be special.",
      vocab: [["by train", "기차로"], ["all of a sudden", "갑자기"], ["be disappointed", "실망하다"], ["favorite memory", "가장 좋아하는 추억"]],
      query: "memorable family travel unexpected experience"
    },
    {
      title: "좋아하는 음악",
      intro: "언제 어떤 음악을 듣는지, 최근 들은 노래와 그때의 기분을 연결해 보세요.",
      questions: ["What kind of music do you enjoy?", "When do you usually listen to music?", "Tell me about a song that brings back a memory."],
      idea: "음악 장르를 말하는 데 그치지 않고, 듣는 상황과 개인적인 기억을 한 가지 더합니다.",
      answer: "I enjoy listening to soft pop music, especially when I am on my way home. It helps me slow down after a busy day. A few days ago, I heard a song that I used to listen to in college. It reminded me of my old friends and the time we spent together. I smiled without realizing it. That is what I like about music: a simple song can bring back a strong memory.",
      vocab: [["on my way home", "집에 가는 길에"], ["slow down", "속도를 늦추고 쉬다"], ["remind me of", "~을 떠올리게 하다"], ["bring back a memory", "추억을 되살리다"]],
      query: "music memory daily life listening"
    },
    {
      title: "운동과 산책",
      intro: "부담 없이 하는 운동 하나와 최근 실제로 해본 경험을 이야기해 보세요.",
      questions: ["What do you do to stay active?", "Where do you usually go for a walk or exercise?", "Describe a recent time when you exercised."],
      idea: "운동 장소·시간과 함께 시작하기 어려운 이유, 하고 나서의 기분을 넣으면 자연스럽습니다.",
      answer: "I try to go for a walk a few times a week. There is a park near my home, so I can get there easily. Yesterday evening, I went there after dinner even though I felt tired. I walked for about thirty minutes and listened to a podcast. The fresh air helped me clear my mind. I do not do intense exercise, but regular walks make me feel healthier.",
      vocab: [["stay active", "활동적으로 지내다"], ["even though", "비록 ~이지만"], ["clear my mind", "머리를 식히다"], ["a few times a week", "일주일에 몇 번"]],
      query: "walking exercise daily routine wellbeing"
    },
    {
      title: "동네와 자주 가는 장소",
      intro: "사는 동네의 모습과 자주 가는 곳을 실제 방문 경험으로 설명해 보세요.",
      questions: ["What is your neighborhood like?", "Where do you often go in your neighborhood?", "How has your neighborhood changed over time?"],
      idea: "동네의 장점 한두 가지를 말하고, 자주 가는 공원·카페·도서관 중 한 곳의 경험을 덧붙입니다.",
      answer: "My neighborhood is quiet, but there are many useful places nearby. I often visit a small park because it is close to my home. Last Sunday, I went there with my family and we spent an hour walking around. A new walking path was added recently, so it is easier to move around. I like living here because I can enjoy a calm place without going far from the city.",
      vocab: [["nearby", "근처에"], ["walking path", "산책로"], ["move around", "돌아다니다"], ["without going far", "멀리 가지 않고"]],
      query: "neighborhood park community daily life"
    }
  ];

  const parts = new Intl.DateTimeFormat("en-CA", {timeZone: "Asia/Seoul", year: "numeric", month: "2-digit", day: "2-digit"}).formatToParts(new Date());
  const datePart = name => Number(parts.find(part => part.type === name).value);
  const today = Math.round((Date.UTC(datePart("year"), datePart("month") - 1, datePart("day")) - Date.UTC(2026, 9, 22)) / 86400000);
  const indexForDay = day => ((day % topics.length) + topics.length) % topics.length;
  const dateForDay = day => new Intl.DateTimeFormat("ko-KR", {timeZone: "Asia/Seoul", year: "numeric", month: "long", day: "numeric", weekday: "long"}).format(new Date(Date.UTC(2026, 9, 22 + day, 12)));
  const topicForDay = day => topics[indexForDay(day)];
  const everydayForDay = day => everydayTopics[((day % everydayTopics.length) + everydayTopics.length) % everydayTopics.length];
  const title = document.getElementById("opic-today-title");
  if (title) {
    title.textContent = topicForDay(today).title;
    const lifeTitle = document.getElementById("opic-life-today-title");
    if (lifeTitle) lifeTitle.textContent = everydayForDay(today).title;
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
  function renderTopic(prefix, topic) {
    setText(prefix + "-title", topic.title);
    setText(prefix + "-intro", topic.intro);
    setText(prefix + "-idea", topic.idea);
    setText(prefix + "-answer", topic.answer);
    const questions = document.getElementById(prefix + "-questions");
    questions.replaceChildren();
    topic.questions.forEach(question => { const li = document.createElement("li"); li.textContent = question; questions.append(li); });
    const vocab = document.getElementById(prefix + "-vocab");
    vocab.replaceChildren();
    topic.vocab.forEach(([word, meaning]) => addItem(vocab, word, meaning));
    const links = document.getElementById(prefix + "-links");
    links.replaceChildren();
    if (topic.links) {
      topic.links.forEach(([label, url, note]) => addItem(links, label, note, url));
      setText(prefix + "-link-note", "직접 확인한 기사·분석 링크입니다. 유료 기사나 국가별 접속 제한이 있을 수 있습니다.");
    } else {
      const query = encodeURIComponent(topic.query);
      addItem(links, "Google News 관련 기사 검색", "최신 기사 목록에서 발행일 확인", "https://news.google.com/search?q=" + query + "&hl=en-US&gl=US&ceid=US:en");
      addItem(links, "Reuters 관련 기사 검색", "Google에서 Reuters 보도 찾기", "https://www.google.com/search?q=" + encodeURIComponent("site:reuters.com " + topic.query));
      addItem(links, "BBC 관련 기사 검색", "Google에서 BBC 보도 찾기", "https://www.google.com/search?q=" + encodeURIComponent("site:bbc.com/news " + topic.query));
      setText(prefix + "-link-note", "검색 링크는 기사 자체가 아닙니다. 검색 결과의 출처·발행일을 확인하세요.");
    }
  }
  function render() {
    setText("opic-date", dateForDay(selectedDay) + (selectedDay === today ? " · 오늘" : ""));
    renderTopic("opic", topicForDay(selectedDay));
    renderTopic("opic-life", everydayForDay(selectedDay));
  }
  document.getElementById("opic-prev").addEventListener("click", () => { selectedDay--; render(); });
  document.getElementById("opic-next").addEventListener("click", () => { selectedDay++; render(); });
  document.getElementById("opic-today").addEventListener("click", () => { selectedDay = today; render(); });
  render();
})();
