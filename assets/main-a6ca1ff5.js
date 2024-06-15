import{a as d,i as p}from"./vendor-1c96f17f.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();d.defaults.headers["x-api-key"]="live_zVZLegicNQX58NrRr2a3UtQNLaAsu3u4YQWqDV3kak42qEhEeaTlUPvgEQMUxgbd";async function f(){const{data:s}=await d.get("https://api.thecatapi.com/v1/breeds");return s}async function h(s){const{data:o}=await d.get(`https://api.thecatapi.com/v1/images/search?breed_ids=${s}`);return o}const n=document.querySelector("#breeds"),i=document.querySelector(".card"),c=document.querySelector(".loader"),u=[],m=f();m.then(s=>{s.forEach(o=>{const r=document.createElement("option");r.value=o.id,r.textContent=o.name,u.push(r)}),n.append(...u),c.classList.add("hidden"),n.classList.remove("hidden")}).catch(s=>{p.error({title:"Error",message:"Bad operation"}),i.innerHTML='<h1 class="error-title">Sorry, but server dosent work, reload page</h1>',i.classList.remove("hidden"),c.classList.add("hidden")});n.addEventListener("change",s=>{i.innerHTML=`<div class="image-container">
  <span class="loader"></span>
  </div>
  `,i.classList.remove("hidden"),h(s.target.value).then(r=>{if(r==[])throw error;i.innerHTML=`<div class="image-container">
            <img src="${r[0].url}" alt="picture of ${r[0].breeds[0].name}">
        </div>
        <h2 class="title">${r[0].breeds[0].name}</h2>
        <p class="description">${r[0].breeds[0].description}</p>`}).catch(r=>{p.error({title:"Error",message:"Illegal operation"}),i.innerHTML='<h1 class="error-title">Sorry, but server dosent work, reload page</h1>',i.classList.remove("hidden"),c.classList.add("hidden")})});
//# sourceMappingURL=main-a6ca1ff5.js.map
