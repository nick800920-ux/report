(function () {
  "use strict";

  const topics = [
    {
      title: "기후 적응 재원과 지역사회 보호",
      intro: "UNEP의 2026년 적응 격차 보고서는 기후 위험에 대비하는 데 필요한 재원과 실제 지원 사이의 큰 차이를 다룹니다. 폭염·홍수 같은 위험에 대비하는 일이 왜 중요하고, 정부와 국제사회가 어떻게 취약한 지역사회를 도울 수 있을지 말해 보세요.",
      questions: [
        "Why should communities prepare for climate-related risks?",
        "Who should help pay for climate adaptation projects?",
        "What can local governments do to protect people from extreme weather?"
      ],
      idea: "폭염이나 홍수 같은 위험은 사람들의 생활과 안전에 영향을 줄 수 있습니다. 지역 정부는 경보와 대피 계획을 마련하고, 국제사회와 정부는 재난에 더 취약한 지역이 필요한 대비 시설을 갖추도록 도울 수 있습니다. 모든 곳에 똑같은 해결책을 적용하기보다 지역 상황을 고려해야 한다고 말해 보세요.",
      answer: "Communities need to prepare for climate-related risks, such as heat waves and floods. These events can affect people's health, homes, and daily routines. Local governments can share clear warnings and make emergency plans. I also think national governments and international organizations should help communities that do not have enough resources. For example, they can support safer buildings and better drainage systems. The needs are different in each place, so plans should fit the local community. Preparing early can help people stay safer.",
      vocab: [["climate-related risks", "기후 관련 위험"], ["share clear warnings", "명확한 경보를 알리다"], ["emergency plan", "비상 계획"], ["fit the local community", "지역사회에 맞다"]],
      links: [
        ["UNEP: 기후 적응 재원이 필요한 수준에 크게 못 미친다는 분석", "https://www.unep.org/en/news-and-stories/press-release/world-heads-overshoot-15degc-adaptation-too-slow", "UNEP 발표 · 2026-11-04"],
        ["UNEP: Adaptation Gap Report 2026 — Ready? Not", "https://www.unep.org/en/publications/report/adaptation-gap-report-2026", "보고서 원문 · 2026-11-04"],
        ["WHO: 기후변화와 건강 대응 우선순위 (COP31 브리핑)", "https://www.who.int/publications/m/item/who-at-cop31--climate-and-health-briefing-and-key-messages", "WHO 브리핑 · 2026-11-03"]
      ]
    },
    {
      title: "모두를 위한 안전하고 부담 가능한 주거",
      intro: "UN-Habitat의 2026 세계도시보고서는 주거비 부담, 안전한 집의 부족, 기후 위험을 서로 연결된 도시 과제로 다룹니다. 집은 잠자는 곳뿐 아니라 일자리·학교·대중교통과 가까운 생활 기반이기도 합니다. 도시가 기존 주민을 보호하면서 주거 환경을 개선하는 방법을 이야기해 보세요.",
      questions: ["Why is affordable housing important for a community?", "What makes a home and its neighborhood a good place to live?", "How can cities improve neighborhoods without pushing out local residents?"],
      idea: "집은 안전하게 쉴 공간이고 직장·학교·교통과 연결되어야 합니다. 지방정부는 임대주택과 기반시설을 늘리고, 동네를 개선할 때 기존 주민의 의견을 듣고 이주 부담을 줄일 수 있다고 말해 보세요. 나에게 중요한 조건 한 가지를 덧붙이면 답변이 자연스럽습니다.",
      answer: "I think everyone needs a safe and affordable place to live. A good home is not just a building; it should also be close to schools, jobs, and public transportation. When a neighborhood needs improvement, cities should listen to the people who already live there. They can add useful services and improve streets while keeping housing affordable. I would like to live in a quiet area with a small park nearby. In my opinion, a good neighborhood helps people feel safe and connected.",
      vocab: [["affordable housing", "부담 가능한 주거"], ["public transportation", "대중교통"], ["improve a neighborhood", "동네 환경을 개선하다"], ["feel connected", "유대감을 느끼다"]],
      links: [
        ["UN-Habitat: World Cities Day 2026 주거와 도시 재생", "https://unhabitat.org/news/02-nov-2026/world-cities-day-2026-highlights-people-centred-approaches-to-urban-regeneration", "UN-Habitat 발표 · 2026-11-02"],
        ["UN-Habitat: World Cities Report 2026 — The Global Housing Crisis", "https://unhabitat.org/sites/default/files/2026/05/wcr_2026.pdf", "보고서 원문 · 2026-05-19 발표"],
        ["UN-Habitat: World Habitat Day 2026, Adequate Housing for All", "https://unhabitat.org/news/05-oct-2026/world-habitat-day-2026-marked-with-call-for-adequate-housing-for-all", "UN-Habitat 발표 · 2026-10-05"]
      ]
    },
    {
      title: "디지털·경제 변화 속 사회적 포용",
      intro: "UN의 2026 세계사회보고서는 기술·경제 변화의 혜택에서 일자리, 교육, 인터넷 접근 등으로 소외되는 사람이 없도록 하는 사회적 포용을 다룹니다. 변화의 기회를 더 많은 사람이 누리려면 무엇이 필요한지 이야기해 보세요.",
      questions: ["Why is it important to include everyone in social and technological change?", "How can people gain the skills they need for new jobs?", "What can governments do to make digital services accessible to more people?"],
      idea: "새 기술과 산업 변화는 기회를 만들지만, 교육이나 인터넷을 이용하기 어려운 사람은 뒤처질 수 있습니다. 평생학습, 직업 훈련, 부담 가능한 인터넷과 기본 서비스를 예로 들고, 변화의 혜택을 넓게 나누는 것이 중요하다고 말해 보세요.",
      answer: "Technology is changing the way people work and learn. These changes can create new opportunities, but not everyone has the same access to education or the internet. I think governments and companies should offer affordable digital services and practical job training. Schools and community centers can also help people learn new skills. For example, a short computer class may help someone feel more confident at work. In my opinion, progress is better when more people can take part in it.",
      vocab: [["social inclusion", "사회적 포용"], ["access to education", "교육 접근성"], ["job training", "직업 훈련"], ["take part in", "~에 참여하다"]],
      links: [
        ["UN DESA: 세계사회보고서 2026 — 사회적 포용의 새로운 경제학", "https://desapublications.un.org/publications/world-social-report-2026-new-economics-social-inclusion-making-transformations-work", "보고서 원문 · 2026년 10월 발행"],
        ["UN: 사회적 포용이 변화를 모두에게 작동하게 하는 방법", "https://www.un.org/en/desa/a-new-economics-of-social-inclusion-transformations-that-work-for-all", "UN DESA 설명 · 2026-11-02"],
        ["UN: 배제의 비용 증가를 경고한 세계사회보고서 발표", "https://www.un.org/ht/node/249090", "UN 보도자료 · 2026-10-15"]
      ]
    },
    {
      title: "해상 운송비와 생활물가",
      intro: "IEA는 10월 21일 원유 운송비 상승이 소비자가 부담하는 연료비에도 영향을 줄 수 있다고 분석했습니다. 물건이 멀리서 오는 비용과 일상 가격을 연결해 말해 보세요.",
      questions: ["Why do shipping costs affect the prices we pay?", "How do higher fuel prices affect your daily life?", "What can people and businesses do when transport costs rise?"],
      idea: "배나 트럭으로 물건을 옮기는 비용이 오르면 기업의 비용도 늘어 가격에 일부 반영될 수 있습니다. 단정적으로 모든 물건의 가격이 오른다고 말하기보다, 생활 속에서 느끼는 교통비·장보기 부담과 가능한 대응을 예로 드세요.",
      answer: "Many products travel a long way before they reach our stores. If shipping and fuel costs rise, businesses may have to pay more to move them. Some of that cost can reach consumers. I notice changes most when I buy groceries or fill up my car. I cannot control global shipping costs, but I can compare prices and plan my shopping more carefully. I also think companies should explain major price changes clearly.",
      vocab: [["shipping costs", "운송비"], ["reach consumers", "소비자에게 전가되다"], ["compare prices", "가격을 비교하다"], ["fill up my car", "차에 기름을 넣다"]],
      links: [
        ["IEA: 운송비 상승이 유가·소비자에게 미치는 영향", "https://www.iea.org/commentaries/the-soaring-cost-of-shipping-is-lifting-the-price-of-oil-for-consumers", "IEA 분석 · 2026-10-21"],
        ["OECD: 해상 운송비와 수입·소비자물가", "https://www.oecd.org/en/publications/the-impact-of-container-shipping-costs-on-import-and-consumer-prices_957f0c0c-en.html", "OECD 연구 · 2025-08-05"],
        ["IMF: 공급망 지연과 소비자물가", "https://www.imf.org/en/publications/wp/issues/2026/02/13/from-ports-to-prices-the-inflationary-effects-of-global-supply-chain-disruptions-573975", "IMF 연구 · 2026-02-13"]
      ]
    },
    {
      title: "AI 시대에 필요한 직장 기술",
      intro: "AI가 일부 업무를 빠르게 처리하면서 직장에서 필요한 기술도 달라지고 있습니다. AI가 모든 일자리를 곧바로 없앤다고 단정하기보다, 어떤 업무와 역량이 바뀌는지 이야기해 보세요.",
      questions: ["How is AI changing the way people work?", "What skills will workers need in the age of AI?", "Should companies help employees learn to use AI tools?"],
      idea: "AI는 반복 업무를 줄일 수 있지만, 결과를 확인하고 사람들과 협업하는 능력은 여전히 중요합니다. 회사가 직원에게 도구 사용과 정보 검증을 배울 기회를 제공해야 합니다.",
      answer: "AI is changing many tasks at work. It can summarize documents and help people finish routine work faster. However, I do not think we should trust every answer it gives. Workers still need to check facts, solve problems, and communicate with others. Companies should offer practical training so employees can use AI with confidence. In my view, the most important skill is learning how to work with new tools while keeping human judgment.",
      vocab: [["routine work", "반복적인 업무"], ["check facts", "사실을 확인하다"], ["practical training", "실무 교육"], ["human judgment", "사람의 판단"]],
      links: [
        ["ILO: 생성형 AI가 일자리·생산성·업무 방식에 미치는 영향", "https://www.ilo.org/publications/impact-genai-jobs-productivity-and-work-organization-review-empirical", "ILO 연구 요약 · 2026-06-01"],
        ["ILO: AI 시대에 달라지는 직장 기술", "https://www.ilo.org/publications/changing-landscape-skills-age-ai", "ILO 보고서 · 2026-08-13"],
        ["OECD: 국가별 직업 기술 부족 지도", "https://www.oecd.org/en/publications/mapping-skill-shortages-in-oecd-countries_735f9485-en.html", "OECD 보고서 · 2026-10-14"]
      ]
    },
    {
      title: "어린이를 위한 AI 대화 친구와 안전 규칙",
      intro: "어린이가 AI 챗봇과 친구처럼 대화하는 일이 늘면서, 도움이 되는 점과 안전을 위한 규칙을 어떻게 균형 있게 마련할지가 논의되고 있습니다. 뉴욕주는 미성년자와 대화하는 AI 동반자 기능에 관한 법을 통과시켰고, 2027년 1월 시행 예정입니다.",
      questions: ["What are some benefits of AI chatbots for children?", "What risks should parents think about?", "Should there be clear rules for AI chatbots that talk to children?"],
      idea: "AI 챗봇은 질문에 답하거나 공부를 도울 수 있지만, 아이가 실제 사람과의 대화를 줄이거나 잘못된 조언을 믿을 위험도 있습니다. 부모와 개발자, 정부가 연령에 맞는 보호 규칙을 마련하고 아이가 도움이 필요할 때 믿을 만한 어른에게 말하도록 해야 합니다.",
      answer: "AI chatbots can be useful for children. They can answer simple questions and help with homework. However, children may believe everything a chatbot says, even when it is wrong. They may also spend too much time talking to it instead of talking to people around them. I think parents should know how their children use these tools. Companies should make clear safety rules and protect children. AI can be helpful, but it should not replace real-life relationships or trusted adults.",
      vocab: [["AI companion", "AI 대화 친구·동반자"], ["safety rules", "안전 규칙"], ["real-life relationships", "실제 사람과의 관계"], ["trusted adult", "믿을 만한 어른"]],
      links: [
        ["AP: 뉴욕주, 어린이와 대화하는 AI 챗봇 안전 규칙 제정", "https://apnews.com/article/03a4e090a7df1532838a5cb6f93a23ba", "AP 보도 · 2026-10-28"],
        ["뉴욕주 상원: 미성년자 AI 동반자 챗봇 안전 법안", "https://www.nysenate.gov/legislation/bills/2025/S9051", "법안·주지사 서명 상태 · 2026-10-30 확인"],
        ["Nature Human Behaviour: AI 동반자와 심리적 안녕에 관한 연구", "https://www.nature.com/articles/s41562-026-02516-2", "학술 연구 · 2026-08-04"],
        ["Brookings: AI 동반자 챗봇의 공중보건 관점", "https://www.brookings.edu/articles/from-bans-to-recalls-a-public-health-framework-for-ai-companion-bots/", "정책 분석 · 2026-05-22"]
      ]
    },
    {
      title: "도시의 기후 대응과 건강",
      intro: "WHO의 COP31 브리핑은 기후변화가 건강에 이미 영향을 주고 있으며, 보건 체계의 회복력과 지역의 대비가 중요하다고 설명합니다. 도시가 그늘·녹지·걷기 좋은 길과 폭염 안내를 통해 주민 건강을 지키는 방법을 생각해 보세요.",
      questions: ["How can cities protect people's health during hot weather?", "Why are parks and public transportation important in a healthy city?", "What should local governments do to prepare for extreme weather?"],
      idea: "폭염과 이상기후가 건강에 미칠 수 있다는 점을 짧게 소개하고, 그늘과 녹지, 안전한 보행로, 알기 쉬운 경보 같은 실천을 예로 듭니다. 도시별 상황은 다르므로 한 가지 해결책이 모든 곳에 맞는다고 단정하지 않습니다.",
      answer: "Climate change can affect people's health, especially during very hot weather. I think cities should make it easier for people to stay safe. They can plant more trees, provide shaded places to rest, and share clear warnings before a heat wave. Good public transportation is also helpful because people may not need to walk long distances in the heat. In my neighborhood, I would like to see more shade near bus stops. Small local changes can make daily life safer and more comfortable.",
      vocab: [["heat wave", "폭염"], ["shaded places", "그늘진 장소"], ["share clear warnings", "명확한 경보를 알리다"], ["stay safe", "안전을 지키다"]],
      links: [
        ["WHO: COP31 기후·건강 브리핑", "https://www.who.int/publications/m/item/who-at-cop31--climate-and-health-briefing-and-key-messages", "WHO 브리핑 · 2026-11-03"],
        ["WHO: 도시의 기후·건강 행동 약속", "https://www.who.int/europe/news/item/07-10-2026-more-than-100-city-leaders-sign-cork-call-to-action-on-climate-and-health", "WHO 뉴스 · 2026-10-07"],
        ["WHO: 2026 Lancet Countdown 기후·건강 보고서 요약", "https://www.who.int/malaysia/news/detail-global/28-10-2026-climate-change-is-a-growing-health-emergency--lancet-countdown-warns", "WHO 보고서 소개 · 2026-10-28"]
      ]
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
      intro: "자주 가는 식당을 떠올리고 위치와 분위기, 즐겨 먹는 메뉴, 최근 방문에서 있었던 작은 일을 순서대로 말해 보세요. 특별한 사건보다 익숙한 경험을 또렷하게 설명하는 연습입니다.",
      questions: ["Describe a restaurant you like to visit.", "What do you usually order there, and why?", "Tell me about a recent time you ate there."],
      idea: "식당이 어디에 있고 어떤 분위기인지 말한 뒤, 늘 고르는 메뉴와 최근 방문 한 가지를 소개합니다. 기다렸던 일이나 가족과 나눈 대화처럼 쉬운 세부사항과 기분으로 마무리하세요.",
      answer: "I often go to a small Korean restaurant near my home with my family. It is casual and usually quite busy in the evening. I normally order grilled fish with rice and side dishes because it is simple and tasty. Last weekend, we went there after a walk. We had to wait for a table, so we talked about our day. The food came warm, and everyone enjoyed the meal. I like this restaurant because it feels comfortable and I know what to expect.",
      vocab: [["casual", "편안하고 격식 없는"], ["side dishes", "반찬"], ["wait for a table", "자리가 나기를 기다리다"], ["know what to expect", "무엇을 기대할지 알다"]],
      links: [
        ["CUH NHS: Eating out and takeaways", "https://www.cuh.nhs.uk/patient-information/eating-out-takeaways-and-alcohol/", "식당·포장 음식 관련 영어 읽을거리 · Cambridge University Hospitals NHS"],
        ["ACTFL: OPIc 공식 시험 안내", "https://www.actfl.org/assessments/postsecondary-assessments/oral-proficiency-interview-computer-opic", "말하기 시험 형식·평가 안내"]
      ]
    },
    {
      title: "동네 카페에서 쉬기",
      intro: "집이나 직장 근처에서 가 본 카페를 떠올리고, 분위기와 자주 고르는 음료, 최근 방문 때의 기분을 쉬운 문장으로 말해 보세요.",
      questions: ["Describe a café you like to visit.", "What do you usually order there?", "Tell me about a recent visit to a café."],
      idea: "카페의 위치와 조용하거나 활기찬 분위기를 묘사하고, 자주 마시는 음료와 함께 간 사람을 말합니다. 최근 방문에서 나눈 대화나 잠깐 쉬었던 경험과 기분을 덧붙이면 됩니다.",
      answer: "There is a small café near my home that I like. It is quiet in the afternoon, and the staff are friendly. I usually order an iced Americano, but sometimes I get a piece of cake too. Last Sunday, I went there with a family member after lunch. We talked about our week and stayed for about an hour. I felt relaxed when we left. I like this café because it is an easy place to take a short break.",
      vocab: [["near my home", "집 근처에"], ["order a drink", "음료를 주문하다"], ["take a short break", "잠깐 쉬다"], ["feel relaxed", "편안한 기분이 들다"]],
      links: [
        ["British Council LearnEnglish: 카페에서 주문하기", "https://learnenglish.britishcouncil.org/free-resources/listening/a1/ordering-cafe", "카페 주문 표현·쉬운 영어 연습"],
        ["British Council LearnEnglish: 친구에게 보내는 문자", "https://learnenglish.britishcouncil.org/free-resources/reading/a1/text-messages-friend", "카페에서 친구를 만나는 일상 대화 읽기"]
      ]
    },
    {
      title: "가족과 공원에 간 날",
      intro: "주말에 공원에 간 평범한 경험을 장소·활동·작은 사건·느낌 순서로 말해 보세요.",
      questions: ["Describe a park you often visit with your family.", "What do you usually do there?", "Tell me about a recent visit to that park."],
      idea: "공원이 집에서 얼마나 가까운지 소개합니다. 산책하거나 아이와 놀았던 최근 하루를 이야기하고, 그 시간이 왜 좋았는지 한 문장으로 마무리하세요.",
      answer: "There is a small park about ten minutes from my home. I often go there with my family on weekends. We usually walk along the path and sit on a bench for a while. Last Sunday, we brought a ball and played together. It was a little windy, so the ball rolled away once, and we all ran after it. We laughed a lot. I like this park because we can enjoy time together without making a big plan.",
      vocab: [["ten minutes from my home", "집에서 10분 거리"], ["walk along the path", "길을 따라 걷다"], ["roll away", "굴러가 버리다"], ["without making a big plan", "큰 계획 없이"]],
      links: [
        ["NHS: 걷기를 생활에 더하는 방법", "https://www.nhs.uk/live-well/exercise/walking-for-health/", "쉬운 영어 읽기 자료 · NHS"],
        ["ACTFL: OPIc 시험 형식과 평가 안내", "https://www.actfl.org/assessments/postsecondary-assessments/oral-proficiency-interview-computer-opic", "공식 시험 안내 · ACTFL"]
      ]
    },
    {
      title: "영화관에 간 날",
      intro: "영화를 보러 간 장소와 함께한 사람, 기억에 남는 장면과 기분을 쉬운 말로 이야기해 보세요.",
      questions: ["Do you enjoy watching movies at a theater?", "Tell me about the last time you went to a movie theater.", "What made that movie experience memorable?"],
      idea: "영화관 분위기를 한두 문장으로 묘사한 뒤, 최근 방문에서 있었던 작은 일과 느낀 점을 말합니다. 영화 줄거리 전체를 설명할 필요는 없습니다.",
      answer: "I like going to the movie theater because the big screen makes the movie more exciting. Last Saturday, I went with a friend to see a comedy. We arrived early, bought popcorn, and found our seats. The theater was quite crowded, but we had a good view. One funny scene made everyone laugh, and I felt relaxed after a busy week. I still watch movies at home, but going to the theater feels like a special outing.",
      vocab: [["big screen", "큰 화면"], ["arrive early", "일찍 도착하다"], ["have a good view", "잘 보이는 자리에 앉다"], ["special outing", "특별한 외출"]],
      query: "movie theater experience cinema family leisure"
    },
    {
      title: "아침에 하는 일과 준비",
      intro: "평소 아침에 하는 일을 순서대로 소개하고, 최근 달라진 점이나 기억에 남는 아침을 한 가지 덧붙여 보세요.",
      questions: ["What do you usually do in the morning?", "What is the busiest part of your morning?", "Tell me about a morning when something unexpected happened."],
      idea: "일어나는 시간과 준비 순서를 말하고, 아침에 있었던 작은 사건과 그때의 기분으로 마무리하면 편하게 답할 수 있습니다.",
      answer: "On weekdays, I usually get up around seven. First, I wash up and get dressed. Then I have a quick breakfast and check the weather before leaving home. A few days ago, I could not find my keys, so I had to look around the living room. They were in my jacket pocket. I felt relieved and left on time. My mornings are usually simple, and having a small routine helps me feel ready for the day.",
      vocab: [["get up", "일어나다"], ["get dressed", "옷을 입다"], ["look around", "주위를 둘러보다·찾아보다"], ["feel ready for the day", "하루를 시작할 준비가 되다"]],
      query: "morning routine daily habits breakfast"
    },
    {
      title: "가족과 공원에 간 날",
      intro: "자주 가는 공원의 모습과 가족과 함께한 평범한 하루를 떠올려 보세요. 실제 경험에 맞게 사람·활동·작은 사건을 바꿔 말하면 자연스럽습니다.",
      questions: ["Describe a park you often visit with your family.", "What do you usually do there?", "Tell me about a recent visit to that park."],
      idea: "공원이 집에서 얼마나 가까운지와 분위기를 소개한 뒤, 가족과 산책하거나 쉬었던 실제 경험 한 가지, 그때의 기분을 덧붙입니다.",
      answer: "There is a small park near my home, and I sometimes go there with my family on weekends. We usually walk along the path and sit on a bench for a while. Last Sunday, we took a short walk and talked about our week. The weather was nice, so we stayed longer than we planned. I felt relaxed after spending time outside with my family. I like this park because it is simple, peaceful, and close to home.",
      vocab: [["near my home", "집 근처에"], ["walk along the path", "길을 따라 걷다"], ["stay longer than planned", "예정보다 오래 머물다"], ["feel relaxed", "편안한 기분이 들다"]],
      links: [
        ["NHS: 건강을 위한 걷기", "https://www.nhs.uk/live-well/exercise/walking-for-health/", "걷기와 일상 활동에 관한 영어 읽을거리"],
        ["ACTFL: OPIc 시험 안내", "https://www.actfl.org/assessments/postsecondary-assessments/oral-proficiency-interview-computer-opic", "시험 형식·평가 안내"]
      ]
    }
  ];

  // Daily brief: replace only these two compact entries on the morning run.
  const daily = {
    current: {
      title: "불량 상품 교환 요청 역할극",
      intro: "새로 산 이어폰에서 소리가 한쪽만 나는 문제를 매장에 설명하고 교환을 요청하는 상황입니다. 실제 OPIc 연습용 역할극이며 특정 실제 출제문제는 아닙니다.",
      questions: ["You bought a pair of headphones, but only one side works. Call the store, explain what happened, and ask how you can exchange them."],
      idea: "이번 문항은 과거 경험 회상이 아니라 매장에 직접 전화하는 역할극입니다. 인사 → 전화한 이유 → 문제 설명 → 교환 가능 여부와 준비물 질문 → 감사 인사 순으로 실제 통화처럼 답하세요.",
      answer: "Hello, I'm calling about a pair of wireless headphones I bought at your store last Friday. I noticed that only the left side works, even after I charged them and checked the settings. Could I exchange them for a new pair? I still have the receipt and the original box. Is there anything else I need to bring, and would it be okay if I came by after work today? Great, I'll bring everything with me. Thank you for your help. I look forward to getting this sorted out.",
      vocab: [["I'm calling about…", "~에 관해 전화드렸어요"], ["Could I exchange them?", "교환할 수 있을까요?"], ["get this sorted out", "이 일을 해결하다"]]
    },
    life: {
      title: "평소 장보기 습관",
      intro: "평소 어디서 장을 보고 어떤 물건을 사는지 쉬운 문장으로 말해 보세요.",
      questions: ["Where do you usually go grocery shopping, and what do you normally buy?"],
      idea: "주로 가는 가게와 자주 사는 물건 두세 가지, 장을 보는 시간을 간단히 소개하고 그곳을 편하게 느끼는 이유를 덧붙입니다.",
      answer: "I usually go grocery shopping at a supermarket near my home. I buy fruit, vegetables, milk, and a few things for dinner. I often go on the weekend with my wife, so we can choose what we need together. The store is easy to get to, and it has a good selection. I try to make a short shopping list before I go. That helps me save time and avoid buying too many things.",
      vocab: [["go grocery shopping", "장을 보러 가다"], ["a good selection", "다양한 선택지"], ["make a shopping list", "장보기 목록을 만들다"]]
    }
  };
  const parts = new Intl.DateTimeFormat("en-CA", {timeZone: "Asia/Seoul", year: "numeric", month: "2-digit", day: "2-digit"}).formatToParts(new Date());
  const datePart = name => Number(parts.find(part => part.type === name).value);
  const today = Math.round((Date.UTC(datePart("year"), datePart("month") - 1, datePart("day")) - Date.UTC(2026, 9, 22)) / 86400000);
  const indexForDay = day => ((day % topics.length) + topics.length) % topics.length;
  const dateForDay = day => new Intl.DateTimeFormat("ko-KR", {timeZone: "Asia/Seoul", year: "numeric", month: "long", day: "numeric", weekday: "long"}).format(new Date(Date.UTC(2026, 9, 22 + day, 12)));
  const dateKeyForDay = day => new Date(Date.UTC(2026, 9, 22 + day, 12)).toISOString().slice(0, 10);
  // Full topic pairs, keyed by the date they were shown.
  const dailyHistory = {
    "2026-11-03": {current: topics[5], life: everydayTopics[5]},
    "2026-11-04": {current: topics[6], life: everydayTopics[6]},
    "2026-11-05": {current: topics[0], life: everydayTopics[0]},
    "2026-11-06": {current: topics[1], life: everydayTopics[1]},
    "2026-11-07": {current: topics[2], life: everydayTopics[2]},
    "2026-11-08": {
      current: {
        title: "COP31과 기후 대응",
        intro: "AP는 COP31을 앞두고 기후 약속의 실행, 화석연료 전환, 취약국 지원이 주요 과제라고 전했습니다.",
        questions: ["What should countries focus on at COP31?"],
        idea: "나라들이 기후 약속을 실제 행동으로 옮겨야 한다고 말해 보세요.",
        answer: "Countries should turn climate promises into real action. They can use more clean energy and help communities prepare for extreme weather. I think working together is important.",
        vocab: [["turn promises into action", "약속을 행동으로 옮기다"], ["clean energy", "청정에너지"], ["work together", "함께 협력하다"]],
        links: [["Leaders meet for climate talks after year of disasters, energy shocks", "https://apnews.com/article/cop31-turkey-climate-change-fossil-fuels-6ce625b0e3d4ed0ab093df4e5f9c86ad", "AP · 2026-11-06"]]
      },
      life: {
        title: "집에서 커피 마시기",
        intro: "집에서 커피를 마시는 평범한 습관을 짧게 말해 보세요.",
        questions: ["How do you usually enjoy coffee at home?"],
        idea: "언제 마시는지, 어떤 커피를 좋아하는지, 그때 기분을 말합니다.",
        answer: "I usually drink coffee at home in the morning. I make a simple cup and enjoy it at the kitchen table. It helps me feel ready for the day.",
        vocab: [["in the morning", "아침에"], ["make a cup of coffee", "커피 한 잔을 만들다"], ["feel ready for the day", "하루를 시작할 준비가 되다"]]
      }
    },
    "2026-11-09": {
      current: {
        title: "AI 안전을 평가하는 독립 기관",
        intro: "AP는 미국의 AI 안전 평가 조직이 백악관에 보고하게 될 가능성과 독립성 우려를 보도했습니다. AI를 평가할 때 전문성과 독립성을 어떻게 지킬지 생각해 보세요.",
        questions: ["Why should AI safety reviewers work independently?"],
        idea: "새 기술을 평가하는 사람은 장점과 위험을 솔직히 살펴야 한다고 말하고, 독립적인 검토가 신뢰를 높이는 이유를 덧붙이세요.",
        answer: "AI can be useful, but it may also create new risks. I think independent experts should check how these systems work. They should be able to share problems honestly, even when the results are uncomfortable. Clear rules can help protect the public. At the same time, reviewers should explain their findings in simple language. This can help people make informed decisions about AI.",
        vocab: [["independent experts", "독립적인 전문가들"], ["share problems honestly", "문제를 솔직히 알리다"], ["informed decisions", "정보에 근거한 결정"]],
        links: [["Staff at the US center for AI safety are reporting to the White House", "https://apnews.com/article/d3318eb2cf011df53e9ddb3e03d25f13", "AP · 2026-11-08"]]
      },
      life: {
        title: "퇴근 후 동네 산책",
        intro: "퇴근 후 가까운 곳을 걷는 평범한 일상을 말해 보세요.",
        questions: ["What do you usually see on a walk near your home?"],
        idea: "언제 누구와 걷는지, 산책 중 본 것과 기분을 차례로 말합니다.",
        answer: "I sometimes take a short walk near my home after work. I usually walk with my wife around the neighborhood. We see small shops and people walking their dogs. The fresh air helps me relax after a busy day. We do not walk for a long time, but it is a nice way to spend time together.",
        vocab: [["take a short walk", "짧게 산책하다"], ["around the neighborhood", "동네 주변을"], ["fresh air", "신선한 공기"]]
      }
    },
    "2026-11-10": {
      current: {
        title: "여행 중 계획이 바뀐 경험",
        intro: "오픽 AL에서 자주 연습하는 과거 경험 말하기 주제입니다. 예상치 못한 문제와 대처 방법, 그때의 감정을 구체적으로 이어 말해 보세요.",
        questions: ["Tell me about a trip when something did not go as planned. What happened, how did you handle it, and how did you feel afterward?"],
        idea: "여행 장소와 원래 계획을 먼저 설명하고, 일정이 틀어진 원인과 직접 취한 조치, 결과와 배운 점까지 시간 순서로 말합니다.",
        answer: "I'd like to talk about a family trip we took a while ago. We planned to visit a famous attraction in the morning, but heavy rain started on our way there. At first, we were disappointed because we had already bought tickets. I checked the weather and found a nearby indoor museum, so we changed our plan and spent a few hours there instead. By the time the rain stopped, we were already enjoying ourselves. Looking back, the change made the day more memorable, and I learned that it helps to have a flexible backup plan.",
        vocab: [["not go as planned", "계획대로 되지 않다"], ["change our plan", "계획을 바꾸다"], ["a backup plan", "대안·예비 계획"]]
      },
      life: {
        title: "주말 아침의 여유",
        intro: "주말 아침에 평소 어떻게 시간을 보내는지 간단히 말해 보세요.",
        questions: ["What do you usually do on a weekend morning?"],
        idea: "일어나는 시간, 아침에 하는 일, 주말 아침을 좋아하는 이유를 말합니다.",
        answer: "On weekend mornings, I usually get up a little later than on weekdays. I make coffee and have a simple breakfast at home. Sometimes I read the news or talk with my family. I like these quiet mornings because I can relax and start the day slowly.",
        vocab: [["get up a little later", "조금 늦게 일어나다"], ["a simple breakfast", "간단한 아침 식사"], ["start the day slowly", "하루를 여유롭게 시작하다"]]
      }
    },
    "2026-11-11": {
      current: {
        title: "식당 예약 문제 해결 역할극",
        intro: "식당에 도착했는데 예약이 확인되지 않는 상황을 정중하게 해결하는 연습입니다. 상황 설명과 대안 요청을 자연스럽게 이어 보세요.",
        questions: ["You arrive at a restaurant, but the staff cannot find your reservation. Explain the problem and ask them to help you find a solution."],
        idea: "예약한 시간과 이름을 차분히 말하고, 확인을 부탁한 뒤 대기나 다른 자리 같은 현실적인 대안을 요청합니다. 해결된 결과와 안도한 기분으로 마무리하세요.",
        answer: "Hi, I have a reservation for two at seven under the name Choi, but I don't see it on your list. Could you check once more, please? I booked it online yesterday, and I can show you the confirmation email. My family is waiting outside, but we don't mind waiting for a few minutes if the table isn't ready. Could you let us know how long it might take? Oh, you found it under a different spelling? That's great. Thank you for checking. We'll wait here until our table is ready.",
        vocab: [["under the name", "~라는 이름으로"], ["confirmation email", "예약 확인 이메일"], ["Could you check once more?", "한 번 더 확인해 주시겠어요?"]]
      },
      life: {
        title: "출근 전 아침 일상",
        intro: "출근하는 날 아침에 하는 일을 쉬운 순서로 짧게 설명해 보세요.",
        questions: ["What do you usually do before you leave for work in the morning?"],
        idea: "일어나서 준비하는 순서와 아침에 꼭 하는 일을 말하고, 그 습관이 왜 도움이 되는지 덧붙입니다.",
        answer: "On workdays, I usually get up around seven. I wash up, get dressed, and have a quick breakfast. Before I leave, I check the weather and make sure I have my keys. My routine is simple, but it helps me feel ready for work. I try to leave home on time so I don't have to rush.",
        vocab: [["get dressed", "옷을 입다"], ["make sure", "확인하다"], ["have to rush", "서둘러야 하다"]]
      }
    },
    "2026-11-12": {current: daily.current, life: daily.life}
  };
  const topicForDay = day => dailyHistory[dateKeyForDay(day)]?.current || daily.current;
  const everydayForDay = day => dailyHistory[dateKeyForDay(day)]?.life || daily.life;
  const title = document.getElementById("opic-today-title");
  if (title) {
    title.textContent = topicForDay(today).title;
    const lifeTitle = document.getElementById("opic-life-today-title");
    if (lifeTitle) lifeTitle.textContent = everydayForDay(today).title;
    const date = document.getElementById("opic-today-date");
    if (date) date.textContent = dateForDay(today);
  }
  const homeSummary = document.querySelector("#opic .panel p:last-of-type");
  if (homeSummary) homeSummary.textContent = "주제마다 질문 1개 · 짧은 영어 답변 · 핵심 표현 2~3개를 연습합니다. 시사 주제에만 원문 기사 링크가 있습니다.";

  const stockCallout = document.querySelector("#ideas .callout");
  if (stockCallout && !document.getElementById("daily-stock-outlook")) {
    const box = document.createElement("div");
    box.id = "daily-stock-outlook";
    box.className = "callout";
    box.innerHTML = '<strong>주식 전망</strong><p><b>국내 · “Fed rate hike fears mount as KOSPI battles to hold 5,200” · 머니투데이 · 2026-11-11</b><br>전망: 미국 금리·수익률과 대중 수출통제 우려가 부담이지만, CPI 충격이 제한적이어서 장중 하방은 비교적 견조할 수 있다는 증권사 분석. <a href="https://www.mt.co.kr/index.php/en/stock/2026/11/11/2026111108554749491" target="_blank" rel="noopener noreferrer">원문 ↗</a></p><p><b>해외 · “The Post-Election Opportunities in AI Stocks” · Morgan Stanley · 2026-11-11</b><br>전망: AI 관련 매도는 과도했다는 평가로 투자 사이클은 유지될 수 있지만, 정책·데이터센터 지연과 변동성 위험이 남아 있다는 견해. <a href="https://www.morganstanley.com/insights/articles/investing-in-ai-after-2026-midterms-selloff" target="_blank" rel="noopener noreferrer">원문 ↗</a></p><small>사실과 기관의 전망을 구분했으며 매매 추천이 아닙니다.</small>';
    stockCallout.before(box);
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
    topic.questions.slice(0, 1).forEach(question => { const li = document.createElement("li"); li.textContent = question; questions.append(li); });
    const vocab = document.getElementById(prefix + "-vocab");
    vocab.replaceChildren();
    topic.vocab.slice(0, 3).forEach(([word, meaning]) => addItem(vocab, word, meaning));
    const links = document.getElementById(prefix + "-links");
    links.replaceChildren();
    if (prefix === "opic-life") {
      setText(prefix + "-link-note", "");
    } else if (topic.links) {
      topic.links.forEach(([label, url, note]) => addItem(links, label, note, url));
      setText(prefix + "-link-note", "원문 기사 링크 · 발행일 확인");
    } else if (topic.query) {
      const query = encodeURIComponent(topic.query);
      addItem(links, "Google News 관련 기사 검색", "최신 기사 목록에서 발행일 확인", "https://news.google.com/search?q=" + query + "&hl=en-US&gl=US&ceid=US:en");
      addItem(links, "Reuters 관련 기사 검색", "Google에서 Reuters 보도 찾기", "https://www.google.com/search?q=" + encodeURIComponent("site:reuters.com " + topic.query));
      addItem(links, "BBC 관련 기사 검색", "Google에서 BBC 보도 찾기", "https://www.google.com/search?q=" + encodeURIComponent("site:bbc.com/news " + topic.query));
      setText(prefix + "-link-note", "검색 링크는 기사 자체가 아닙니다. 검색 결과의 출처·발행일을 확인하세요.");
    } else {
      setText(prefix + "-link-note", "");
    }
  }
  function render() {
    setText("opic-date", dateForDay(selectedDay) + (selectedDay === today ? " · 오늘" : ""));
    renderTopic("opic", topicForDay(selectedDay));
    renderTopic("opic-life", everydayForDay(selectedDay));
    const earliestSavedDay = Math.round((Date.UTC(2026, 10, 3) - Date.UTC(2026, 9, 22)) / 86400000);
    const prev = document.getElementById("opic-prev");
    const next = document.getElementById("opic-next");
    if (prev) prev.disabled = selectedDay <= earliestSavedDay;
    if (next) next.disabled = selectedDay >= today;
  }
  render();
  const prevButton = document.getElementById("opic-prev");
  const todayButton = document.getElementById("opic-today");
  const nextButton = document.getElementById("opic-next");
  if (prevButton) prevButton.addEventListener("click", () => { selectedDay -= 1; render(); });
  if (todayButton) todayButton.addEventListener("click", () => { selectedDay = today; render(); });
  if (nextButton) nextButton.addEventListener("click", () => { if (selectedDay < today) selectedDay += 1; render(); });
})();
