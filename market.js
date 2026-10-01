(function(){
  "use strict";
  const keys=["kospi","sp500","usdkrw"];
  const kst=new Intl.DateTimeFormat("ko-KR",{timeZone:"Asia/Seoul",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",hour12:false});
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
          continue;
        }
        const unit=document.createElement("span");
        unit.className="market-unit";
        unit.textContent=key==="usdkrw"?" 원":"";
        value.replaceChildren(document.createTextNode(quote.value.toLocaleString("ko-KR",{minimumFractionDigits:2,maximumFractionDigits:2})),unit);
        const age=(Date.now()-when.getTime())/3600000;
        stamp.textContent=(age>72?"오래된 자료 · ":"")+kst.format(when)+" KST 기준";
      }
    }catch{
      document.querySelectorAll(".market-time").forEach(x=>x.textContent="데이터 연결 실패 · 원문 확인");
    }
  }
  document.getElementById("reload").addEventListener("click",updateMarket);
  updateMarket();
})();
