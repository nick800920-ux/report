(function(){
  "use strict";
  const keys=["kospi","sp500","usdkrw"];
  const kst=new Intl.DateTimeFormat("ko-KR",{timeZone:"Asia/Seoul",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",hour12:false});
  const number=value=>Math.abs(value).toLocaleString("ko-KR",{minimumFractionDigits:2,maximumFractionDigits:2});
  function showChanges(card,quote,key){
    let box=card.querySelector(".market-changes");
    if(!box){box=document.createElement("div");box.className="market-changes";card.append(box)}
    box.replaceChildren();
    for(const [label,change] of [["전 거래일",quote.day_change],["전주",quote.week_change]]){
      const row=document.createElement("span");
      row.className="market-change";
      if(change&&Number.isFinite(change.amount)&&Number.isFinite(change.percent)&&change.baseline_date){
        row.classList.add(change.amount>0?"up":change.amount<0?"down":"flat");
        const sign=change.amount>0?"+":change.amount<0?"−":"";
        const unit=key==="usdkrw"?"원":"p";
        row.textContent=label+" "+sign+number(change.amount)+unit+" ("+sign+number(change.percent)+"%) · "+change.baseline_date.slice(5).replace("-", ".")+" 기준";
      }else{
        row.textContent=label+" 비교자료 없음";
      }
      box.append(row);
    }
  }
  async function updateMarket(){
    try{
      const response=await fetch("./data/market.json?v="+Date.now(),{cache:"no-store"});
      if(!response.ok)throw new Error("HTTP "+response.status);
      const data=await response.json();
      for(const key of keys){
        const card=document.querySelector('[data-market="'+key+'"]');
        const value=card.querySelector(".market-value");
        const stamp=card.querySelector(".market-time");
        const quote=data.quotes?.[key];
        const when=quote?.as_of?new Date(quote.as_of):null;
        if(!quote||!Number.isFinite(quote.value)||!when||Number.isNaN(when.getTime())){
          value.textContent="조회 불가";
          stamp.textContent="원문에서 확인해 주세요";
          card.querySelector(".market-changes")?.remove();
          continue;
        }
        const unit=document.createElement("span");
        unit.className="market-unit";
        unit.textContent=key==="usdkrw"?" 원":"";
        value.replaceChildren(document.createTextNode(quote.value.toLocaleString("ko-KR",{minimumFractionDigits:2,maximumFractionDigits:2})),unit);
        const age=(Date.now()-when.getTime())/3600000;
        stamp.textContent=(age>72?"오래된 자료 · ":"")+kst.format(when)+" KST 기준";
        showChanges(card,quote,key);
      }
    }catch{
      document.querySelectorAll(".market-time").forEach(x=>x.textContent="데이터 연결 실패 · 원문 확인");
    }
  }
  document.getElementById("reload").addEventListener("click",updateMarket);
  updateMarket();
})();
