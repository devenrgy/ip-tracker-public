(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(e){if(e.ep)return;e.ep=!0;const n=o(e);fetch(e.href,n)}})();function d(t){return/^(?:[0-9]{1,3}\.){3}[0-9]{1,3}$/.test(t)}async function a(t){return(await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=at_w7Uaebyyr5GKgLFx86tAD8lj8PVQ4&ipAddress=${t}`)).json()}async function u(){return await(await fetch("https://api.ipify.org?format=json")).json()}function l({ip:t,location:{region:r,timezone:o,country:s},isp:e}){return`<li class="border-r border-gray-300">
            <p class="mb-2 uppercase text-xs text-gray-400 font-semibold tracking-widest">IP ADDRESS</p>
            <p class="text-xl font-medium tracking-tight">${t}</p>
          </li>
          <li class="border-r border-gray-300">
            <p class="mb-2 uppercase text-xs text-gray-400 font-semibold tracking-widest">LOCATION</p>
            <p class="text-xl font-medium tracking-tight">${r} ${s}</p>
          </li>
          <li class="border-r border-gray-300">
            <p class="mb-2 uppercase text-xs text-gray-400 font-semibold tracking-widest">TIMEZONE</p>
            <p class="text-xl font-medium tracking-tight">${o}</p>
          </li>
          <li>
            <p class="mb-2 uppercase text-xs text-gray-400 font-semibold tracking-widest">ISP</p>
            <p class="text-xl font-medium tracking-tight">${e}</p>
          </li>`}document.querySelector("#app").innerHTML=`
  <div class="wrapper">
    <header class="header">
      <div class="container">
        <h1 class="text-3xl text-center pt-6 font-medium mb-6">IP Address Tracker</h1>
        
        <form id="form" action="" class="w-full h-14 mb-6 flex max-w-xl mx-auto">
          <input class="w-5/6 h-full rounded-l-lg text-black outline-0 text-2xl px-6" type="text" placeholder="Enter any IP address">
          <button class="bg-black hover:bg-indigo-800 ease-in-out duration-300 cursor-pointer w-1/6 h-full outline-0 rounded-r-lg flex justify-center items-center">
          <svg width="13" height="20" viewBox="0 0 13 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 2L10.5091 10.2909L2 18.5818" stroke="white" stroke-width="3"/>
            </svg></button>
        </form>
        
        <ul id="info" class="grid-cols-1 z-10 relative max-w-6xl mx-auto md:translate-y-1/2 md:grid-cols-4 rounded-lg grid py-7 bg-white text-black text-center gap-y-3 md:gap-y-6">
          
        </ul>
      </div>
    </header>
    <main>
      <div id="map" class="h-full"></div>
    </main>
  </div>  
`;const p=document.getElementById("form");p.addEventListener("submit",t=>{t.preventDefault();const r=t.target[0].value;d(r)?(a(r).then(s=>{const e=document.getElementById("info");e.innerHTML=l(s),c(s)}),t.target[0].placeholder="Enter any IP address"):t.target[0].placeholder="Invalid IP address",t.target[0].value=""});document.addEventListener("DOMContentLoaded",()=>{u().then(({ip:t})=>{a(t).then(o=>{const s=document.getElementById("info");s.innerHTML=l(o),c(o)})})});async function c({location:{lat:t,lng:r}}){const{Map:o}=await google.maps.importLibrary("maps"),s=new o(document.getElementById("map"),{center:{lat:t,lng:r},zoom:8,disableDefaultUI:!0});new google.maps.Marker({position:{lat:t,lng:r},map:s,title:"You are here 😀"})}
