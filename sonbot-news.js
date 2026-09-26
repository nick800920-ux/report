(() => {
  const box=document.querySelector('[data-news-section]');
  if(!box)return;
  const key=box.dataset.newsSection;
  const update=document.querySelector('[data-news-updated]');
  const fmt=new Intl.DateTimeFormat('ko-KR',{timeZone:'Asia/Seoul',month:'numeric',day:'numeric',hour:'2-digit',minute:'2-digit'});
  function empty(){box.replaceChildren();const div=document.createElement('div');div.className='empty';div.textContent='표시할 기사가 없습니다. 아래 공식 사이트에서 직접 확인하세요.';box.append(div)}
  fetch('./data/news.json?v='+Date.now(),{cache:'no-store'}).then(r=>{if(!r.ok)throw Error(r.status);return r.json()}).then(data=>{
    box.replaceChildren();let count=0;
    for(const item of data.sections?.[key]?.items||[]){
      let url;try{url=new URL(item.url)}catch{continue}if(url.protocol!=='https:')continue;
      const a=document.createElement('a');a.className='newsitem';a.href=url.href;a.target='_blank';a.rel='noopener noreferrer';
      const title=document.createElement('strong');title.textContent=item.title||'제목 없음';
      const meta=document.createElement('small');let time='';try{time=fmt.format(new Date(item.published_at))}catch{}meta.textContent=(item.source||'기사')+(time?' · '+time:'');
      a.append(title,meta);box.append(a);count++;
    }
    if(!count)empty();
    if(update&&data.generated_at){const date=new Date(data.generated_at);if(!Number.isNaN(date.getTime()))update.textContent='기사 목록 갱신: '+new Intl.DateTimeFormat('ko-KR',{timeZone:'Asia/Seoul',dateStyle:'medium',timeStyle:'short'}).format(date)+' · 경기·기술 사실은 원문에서 확인하세요.'}
  }).catch(empty);
})();
