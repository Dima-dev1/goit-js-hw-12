import{a as b,S,i}from"./assets/vendor-DcHCnVjq.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function a(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(e){if(e.ep)return;e.ep=!0;const s=a(e);fetch(e.href,s)}})();const q="55703948-c546e5c147a26a7a75ec99e21",E="https://pixabay.com/api/";async function d(o,t){return(await b.get(E,{params:{key:q,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:t}})).data}const u=document.querySelector(".gallery"),f=document.querySelector(".loader"),p=document.querySelector(".load-more-btn"),M=new S(".gallery a",{captionsData:"alt",captionDelay:250});function m(o){const t=o.map(({webformatURL:a,largeImageURL:r,tags:e,likes:s,views:c,comments:w,downloads:P})=>`
      <li class="gallery-item">
        <a href="${r}">
          <img src="${a}" alt="${e}" />
        </a>
        <div class="info">
  <div class="info-item">
    <span class="info-title">Likes</span>
    <span class="info-value">${s}</span>
  </div>
  <div class="info-item">
    <span class="info-title">Views</span>
    <span class="info-value">${c}</span>
  </div>
  <div class="info-item">
    <span class="info-title">Comments</span>
    <span class="info-value">${w}</span>
  </div>
  <div class="info-item">
    <span class="info-title">Downloads</span>
    <span class="info-value">${P}</span>
  </div>
</div>
      </li>
    `).join("");u.insertAdjacentHTML("beforeend",t),M.refresh()}function R(){u.innerHTML=""}function h(){f.classList.remove("is-hidden")}function g(){f.classList.add("is-hidden")}function y(){p.classList.remove("is-hidden")}function v(){p.classList.add("is-hidden")}const B=document.querySelector(".form"),$=document.querySelector(".load-more-btn");let l="",n=1;const L=15;B.addEventListener("submit",async o=>{o.preventDefault();const t=o.target.elements["search-text"].value.trim();if(!t){i.warning({message:"Please enter a search query!",position:"topRight"});return}l=t,n=1,R(),v(),h();try{const a=await d(l,n);if(a.hits.length===0){i.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}m(a.hits);const r=Math.ceil(a.totalHits/L);n<r?y():i.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})}catch{i.error({message:"Something went wrong. Please try again later.",position:"topRight"})}finally{g()}});$.addEventListener("click",async()=>{n+=1,v(),h();try{const o=await d(l,n);m(o.hits);const t=document.querySelector(".gallery-item");if(t){const r=t.getBoundingClientRect().height;window.scrollBy({top:r*2,behavior:"smooth"})}const a=Math.ceil(o.totalHits/L);n<a?y():i.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})}catch{i.error({message:"Something went wrong. Please try again later.",position:"topRight"})}finally{g()}});
//# sourceMappingURL=index.js.map
