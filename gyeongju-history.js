(function(){
  "use strict";
  // Historical facts: official Gyeongju City, the Gyeongju National Museum and UNESCO.
  // Photos: Wikimedia Commons file pages; credit and licence are shown in each popup.
  const places={
    daereungwon:{title:"대릉원·천마총",era:"신라의 무덤 이야기",image:"https://thumb.wikimedia.org/wikipedia/commons/thumb/1/14/Daereungwon_Tomb_Complex.jpg/960px-Daereungwon_Tomb_Complex.jpg",photo:"https://commons.wikimedia.org/wiki/File:Daereungwon_Tomb_Complex.jpg",credit:"Bernard Gagnon · CC0",intro:"잔디 언덕처럼 보이는 것은 신라 시대 사람들의 무덤이에요. 대릉원에는 왕과 귀족의 무덤이 모여 있어요.",points:["천마총에서는 말안장 옆에 달던 장식판에 그린 ‘천마도’가 발견됐어요.","천마총 안에서는 신라 무덤의 구조와 발견된 유물의 모습을 살펴볼 수 있어요."],find:"둥근 무덤을 보며 ‘왜 흙을 높이 쌓았을까?’ 생각해 보세요.",question:"천마총의 이름에 ‘천마’가 들어간 까닭은?",answer:"무덤에서 하늘을 나는 말처럼 보이는 그림 ‘천마도’가 나왔기 때문이에요.",source:"https://www.gyeongju.go.kr/tour_bak/page.do?mnu_uid=4186"},
    cheomseongdae:{title:"첨성대",era:"선덕여왕 시대의 하늘",image:"https://thumb.wikimedia.org/wikipedia/commons/thumb/9/97/Cheomseongdae_Observatory_01.jpg/960px-Cheomseongdae_Observatory_01.jpg",photo:"https://commons.wikimedia.org/wiki/File:Cheomseongdae_Observatory_01.jpg",credit:"Bernard Gagnon · CC0",intro:"첨성대는 신라 선덕여왕 때 세운 것으로 전해지는 천문 관측 유산이에요. 옛사람들도 해와 별, 계절의 변화를 중요하게 살폈답니다.",points:["술병처럼 둥근 몸통 위에 네모난 꼭대기 돌이 놓여 있어요.","정확히 어떤 방식으로 관측했는지는 지금도 연구하고 있어요. 돌의 수에 담긴 뜻도 확정된 사실로 외우기보다 여러 해석 중 하나로 살펴보세요."],find:"아래쪽과 위쪽의 모양이 어떻게 다른지 찾아보세요.",question:"첨성대는 어느 여왕의 시대에 세워졌을까요?",answer:"선덕여왕 시대에 세워진 것으로 알려져 있어요.",source:"https://www.gyeongju.go.kr/tour/page.do?area_uid=47&cmd=2&code_uid=1012&mnu_uid=4716"},
    donggung:{title:"동궁과 월지",era:"신라 왕자의 궁궐과 연못",image:"https://thumb.wikimedia.org/wikipedia/commons/thumb/7/71/Donggung_Palace_%26_Wolji_Pond%2C_Gyeongju_-_Donggung2687.jpg/960px-Donggung_Palace_%26_Wolji_Pond%2C_Gyeongju_-_Donggung2687.jpg",photo:"https://commons.wikimedia.org/wiki/File:Donggung_Palace_%26_Wolji_Pond,_Gyeongju_-_Donggung2687.jpg",credit:"lumoplank · CC0",intro:"동궁은 신라 왕자가 머물던 궁궐이고, 월지는 궁궐 곁에 만든 연못이에요. 왕실의 잔치에도 쓰였어요.",points:["『삼국사기』에는 문무왕 14년(674)에 연못을 만들었다는 기록이 있어요.","지금 보이는 건물 일부는 옛 터를 조사한 뒤 복원한 모습이에요."],find:"연못에 비친 건물 모습과 실제 건물을 비교해 보세요.",question:"월지는 자연 호수였을까요, 사람이 만든 연못이었을까요?",answer:"사람이 만든 연못이에요. 신라 왕궁의 공간이었답니다.",source:"https://www.gyeongju.go.kr/tour_bak/page.do?mnu_uid=2533"},
    bulguksa:{title:"불국사",era:"돌로 표현한 부처님의 나라",image:"https://thumb.wikimedia.org/wikipedia/commons/thumb/5/51/Geungnakjeon%2C_Bulguksa_01.jpg/960px-Geungnakjeon%2C_Bulguksa_01.jpg",photo:"https://commons.wikimedia.org/wiki/File:Geungnakjeon,_Bulguksa_01.jpg",credit:"Bernard Gagnon · CC0",intro:"불국사는 통일신라 사람들이 불교의 이상 세계를 건축으로 표현한 절이에요. 8세기 신라의 뛰어난 석조 기술을 볼 수 있답니다.",points:["석가탑과 다보탑은 같은 자리에 서 있지만 생김새가 달라요.","불국사와 석굴암은 함께 유네스코 세계유산에 올랐어요."],find:"석가탑과 다보탑 중 어느 탑이 더 단순하고, 어느 탑이 더 화려한지 비교해 보세요.",question:"불국사의 서로 다른 두 탑 이름은?",answer:"석가탑과 다보탑이에요.",source:"https://whc.unesco.org/en/list/736"},
    seokguram:{title:"석굴암",era:"돌로 만든 특별한 불상 공간",image:"https://thumb.wikimedia.org/wikipedia/commons/thumb/4/45/Seokguram_Grotto_01.jpg/960px-Seokguram_Grotto_01.jpg",photo:"https://commons.wikimedia.org/wiki/File:Seokguram_Grotto_01.jpg",credit:"Bernard Gagnon · CC0",intro:"석굴암은 자연 동굴이 아니라 돌을 다듬고 쌓아 만든 인공 석굴이에요. 가운데에는 큰 본존불이 자리해요.",points:["둥근 천장과 벽에 돌을 정교하게 맞춘 기술이 돋보여요.","불국사와 함께 1995년에 유네스코 세계유산으로 지정됐어요."],find:"입구에서 안쪽으로 들어갈수록 공간의 모양이 어떻게 바뀌는지 안내도를 보며 찾아보세요.",question:"석굴암은 자연 동굴일까요, 사람이 만든 석굴일까요?",answer:"사람이 돌을 다듬어 만든 인공 석굴이에요.",source:"https://whc.unesco.org/en/list/736"},
    museum:{title:"국립경주박물관",era:"유물로 읽는 신라 역사",image:"https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c0/Gyeongju_National_Museum.jpg/960px-Gyeongju_National_Museum.jpg",photo:"https://commons.wikimedia.org/wiki/File:Gyeongju_National_Museum.jpg",credit:"Seaton1456 · CC BY-SA 3.0",intro:"박물관은 경주에서 발견된 신라 유물을 모아 보존하고 보여주는 곳이에요. 유물은 옛사람들의 생활을 알려 주는 실제 증거랍니다.",points:["무덤에서 나온 장신구, 절에서 쓰던 불교 미술품 등 다양한 유물을 비교해 보세요.","‘누가, 언제, 무엇에 썼을까?’ 세 가지 질문을 하면 전시가 더 재미있어져요."],find:"마음에 드는 유물 하나를 골라 이름과 쓰임을 기록해 보세요.",question:"역사를 공부할 때 유물이 중요한 까닭은?",answer:"옛사람들이 남긴 실제 물건이라 당시 생활을 짐작할 단서를 주기 때문이에요.",source:"https://gyeongju.museum.go.kr/kor/html/sub01/0101.html"},
    woljeonggyo:{title:"월정교",era:"왕궁 남쪽을 잇던 신라의 다리",image:"https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5b/Woljeonggyo_Bridge_01.jpg/960px-Woljeonggyo_Bridge_01.jpg",photo:"https://commons.wikimedia.org/wiki/File:Woljeonggyo_Bridge_01.jpg",credit:"Bernard Gagnon · CC0",intro:"월정교는 신라 왕궁 남쪽의 강을 건너던 다리예요. 『삼국사기』에는 경덕왕 19년(760)에 다리를 놓았다는 기록이 있어요.",points:["지금 보는 다리는 옛 다리의 흔적을 조사해 2008~2018년에 복원한 모습이에요.","다리 위에 지붕과 문루가 있는 점을 살펴보세요."],find:"오늘의 평범한 다리와 무엇이 다른지 세 가지를 찾아보세요.",question:"지금 보이는 월정교는 신라 때 모습 그대로 남은 다리일까요?",answer:"아니에요. 옛 기록과 발굴 자료를 바탕으로 복원한 다리예요.",source:"https://www.gyeongju.go.kr/tour/page.do?chaNo=3325&cmd=2&mnu_uid=4798"}
  };
  const dialog=document.createElement("dialog");dialog.className="history-dialog";dialog.setAttribute("aria-label","경주 유적지 역사 설명");
  dialog.innerHTML='<div class="history-dialog-inner"><button type="button" class="history-dialog-close" aria-label="역사 설명 닫기">×</button><img alt=""><div class="history-photo-error">사진을 불러오지 못했습니다. 사진 출처 링크에서 볼 수 있습니다.</div><div class="history-dialog-body"><div class="history-dialog-kicker">초등학생을 위한 경주 역사</div><h2></h2><p class="history-intro"></p><ul class="history-points"></ul><p class="history-find"></p><details><summary class="history-question"></summary><p class="history-answer"></p></details><div class="history-sources">역사 자료: <a class="history-source" target="_blank" rel="noopener noreferrer">공식 설명</a> · 사진: <a class="history-photo" target="_blank" rel="noopener noreferrer">Wikimedia Commons</a> (<span class="history-credit"></span>)</div></div></div>';
  document.body.append(dialog);
  const image=dialog.querySelector("img"),error=dialog.querySelector(".history-photo-error");let lastButton=null;
  image.addEventListener("error",()=>{image.hidden=true;error.classList.add("is-visible")});
  dialog.querySelector(".history-dialog-close").addEventListener("click",()=>dialog.close());
  dialog.addEventListener("click",event=>{if(event.target===dialog)dialog.close()});
  dialog.addEventListener("close",()=>{if(lastButton?.isConnected)lastButton.focus()});
  document.addEventListener("click",event=>{
    const button=event.target.closest(".history-open[data-history]");if(!button)return;
    const place=places[button.dataset.history];if(!place)return;lastButton=button;
    dialog.querySelector(".history-dialog-kicker").textContent="초등학생을 위한 경주 역사 · "+place.era;
    dialog.querySelector("h2").textContent=place.title;
    dialog.querySelector(".history-intro").textContent=place.intro;
    dialog.querySelector(".history-points").replaceChildren(...place.points.map(point=>{const li=document.createElement("li");li.textContent=point;return li}));
    dialog.querySelector(".history-find").textContent="🔎 현장에서 찾아봐요: "+place.find;
    dialog.querySelector(".history-question").textContent="❓ 생각 퀴즈: "+place.question+" (정답 보기)";
    dialog.querySelector(".history-answer").textContent=place.answer;
    dialog.querySelector("details").open=false;
    dialog.querySelector(".history-source").href=place.source;
    dialog.querySelector(".history-photo").href=place.photo;
    dialog.querySelector(".history-credit").textContent=place.credit;
    error.classList.remove("is-visible");image.hidden=false;image.alt=place.title+" 사진";image.src=place.image;
    dialog.showModal();dialog.querySelector(".history-dialog-close").focus();
  });
})();
