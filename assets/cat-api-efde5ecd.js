import{a as d,i as l}from"./vendor-ae6d56ab.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))u(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&u(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function u(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();d.defaults.headers["x-api-key"]="live_zVZLegicNQX58NrRr2a3UtQNLaAsu3u4YQWqDV3kak42qEhEeaTlUPvgEQMUxgbd";const c=document.querySelector("#breeds"),o=document.querySelector(".card"),i=document.querySelector(".loader");async function h(){try{return(await d.get("https://api.thecatapi.com/v1/breeds")).data}catch{l.error({title:"Error",message:"Bad operation"}),o.innerHTML='<h1 class="error-title">Sorry, but server dosent work, reload page</h1>',o.classList.remove("hidden"),i.classList.add("hidden")}}async function f(a){try{return(await d.get(`https://api.thecatapi.com/v1/images/search?breed_ids=${a}`)).data}catch{l.error({title:"Error",message:"Illegal operation"}),o.innerHTML='<h1 class="error-title">Sorry, but server dosent work, reload page</h1>',o.classList.remove("hidden"),i.classList.add("hidden")}}const p=[],m=h();m.then(a=>{a.forEach(s=>{const r=document.createElement("option");r.value=s.id,r.textContent=s.name,p.push(r)}),c.append(...p),i.classList.add("hidden"),c.classList.remove("hidden")});c.addEventListener("change",a=>{o.innerHTML=`<div class="image-container">
  <span class="loader"></span>
  </div>
  `,o.classList.remove("hidden"),f(a.target.value).then(r=>{if(r==[])throw error;o.innerHTML=`<div class="image-container">
            <img src="${r[0].url}" alt="picture of ${r[0].breeds[0].name}">
        </div>
        <h2 class="title">${r[0].breeds[0].name}</h2>
        <p class="description">${r[0].breeds[0].description}</p>`}).catch(r=>{l.error({title:"Error",message:"Illegal operation"}),o.innerHTML='<h1 class="error-title">Sorry, but server dosent work, reload page</h1>',o.classList.remove("hidden"),i.classList.add("hidden")})});
//# sourceMappingURL=cat-api-efde5ecd.js.map