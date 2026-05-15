import{a as P,S as b,i}from"./assets/vendor-DcHCnVjq.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const S="55703948-c546e5c147a26a7a75ec99e21",E="https://pixabay.com/api/";async function d(o,s){return(await P.get(E,{params:{key:S,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:s}})).data}const u=document.querySelector(".gallery"),f=document.querySelector(".loader"),p=document.querySelector(".load-more-btn"),q=new b(".gallery a",{captionsData:"alt",captionDelay:250});function m(o){const s=o.map(({webformatURL:a,largeImageURL:r,tags:e,likes:t,views:c,comments:L,downloads:w})=>`
      <li class="gallery-item">
        <a href="${r}">
          <img src="${a}" alt="${e}" />
        </a>
        <div class="info">
  <div class="info-item">
    <span class="info-title">Likes</span>
    <span class="info-value">${t}</span>
  </div>
  <div class="info-item">
    <span class="info-title">Views</span>
    <span class="info-value">${c}</span>
  </div>
  <div class="info-item">
    <span class="info-title">Comments</span>
    <span class="info-value">${L}</span>
  </div>
  <div class="info-item">
    <span class="info-title">Downloads</span>
    <span class="info-value">${w}</span>
  </div>
</div>
      </li>
    `).join("");u.insertAdjacentHTML("beforeend",s),q.refresh()}function M(){u.innerHTML=""}function h(){f.classList.remove("is-hidden")}function g(){f.classList.add("is-hidden")}function R(){p.classList.remove("is-hidden")}function y(){p.classList.add("is-hidden")}const B=document.querySelector(".form"),$=document.querySelector(".load-more-btn");let l="",n=1;const v=15;B.addEventListener("submit",async o=>{o.preventDefault();const s=o.target.elements["search-text"].value.trim();if(!s){i.warning({message:"Please enter a search query!",position:"topRight"});return}l=s,n=1,M(),y(),h();try{const a=await d(l,n);if(a.hits.length===0){i.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}m(a.hits);const r=Math.ceil(a.totalHits/v);n<r?R():i.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})}catch{i.error({message:"Something went wrong. Please try again later.",position:"topRight"})}finally{g()}});$.addEventListener("click",async()=>{n+=1,h();try{const o=await d(l,n);m(o.hits);const a=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:a*2,behavior:"smooth"});const r=Math.ceil(o.totalHits/v);n>=r&&(y(),i.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}))}catch{i.error({message:"Something went wrong. Please try again later.",position:"topRight"})}finally{g()}});
//# sourceMappingURL=index.js.map
