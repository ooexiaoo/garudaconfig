"use strict";function o(e,...t){return e.reduce((r,c,s)=>{let n=t[s],d=n!==void 0?JSON.stringify(n):"";return r+c+d},"")}process.once("document-start",()=>{let e=document.createElement("script"),t="monkey-patch-xmlhttprequest";e.id=t,e.textContent="try{"+"\"use strict\";function l(r,e){let t=Object.keys(e).map(n=>w(r,n,e[n]));return t.length===1?t[0]:function(){t.forEach(n=>n())}}function w(r,e,t){let n=r[e],o=r.hasOwnProperty(e),s=t(n);return n&&Object.setPrototypeOf(s,n),Object.setPrototypeOf(a,s),r[e]=a,i;function a(...p){return s===n&&r[e]===a&&i(),s.apply(this,p)}function i(){r[e]===a&&(o?r[e]=n:delete r[e]),s!==n&&(s=n,Object.setPrototypeOf(a,n||Function))}}var f=()=>({emit(r,...e){for(let t=0,n=this.events[r]||[],o=n.length;t<o;t++)n[t](...e)},events:{},on(r,e){return(this.events[r]||=[]).push(e),()=>{this.events[r]=this.events[r]?.filter(t=>e!==t)}}});function m(){let r=f();return r.once=function(t,n){let o=this.on(t,(...s)=>{o(),n(...s)});return o},r}var u=class{#n=[];#e=!1;async load(){if(!this.#e){this.#e=!0,await this.onload();for(let e of this.#t)await e.load()}}async onload(){}async unload(){if(!this.#e)return;this.#e=!1;let e;for(;e=this.#n.pop();)await e();let t;for(;t=this.#t.pop();)await t.unload();await this.onunload()}async onunload(){}register(e){this.#n.push(e)}registerInterval(e,t){let n=setInterval(e,t);this.register(()=>clearInterval(n))}registerDomEvent(e,t,n,o){e.addEventListener(t,n,o),this.register(()=>e.removeEventListener(t,n,o))}#t=[];async addChild(e){return this.#t.push(e),this.#e&&await e.load(),e}async removeChild(e){let t=this.#t.indexOf(e);return t!==-1&&(this.#t.splice(t,1),e.unload()),e}};var L=()=>{},d=L;var c=class extends u{constructor(t){super();this.filter=t}event=m();respCache=new Map;stop=d;async getRequest(t,n=1e4){if(this.respCache.size>0){if(!t){let[o]=this.respCache.values();return o}for(let[o,s]of this.respCache)if(t(new URL(o)))return s}return new Promise((o,s)=>{let a=this.event.on(\"request\",(p,y)=>{t&&!t(p)||(a(),window.clearTimeout(i),o(y))}),i=window.setTimeout(()=>{a(),s(new Error(\"XHR timeout\"))},n)})}async onload(){let t=this;this.stop=l(XMLHttpRequest.prototype,{open:n=>function(o,s){let a=new URL(s,window.location.href);return t.filter(a,o)&&g(this).then(i=>{t.respCache.set(a.href,i),t.event.emit(\"request\",a,i)}),n.apply(this,arguments)}})}async onunload(){this.stop(),this.respCache.clear()}};function g(r){return new Promise((e,t)=>{let n=()=>{try{if(r.status<200||r.status>=400){t(new Error(\"Request failed: \"+r.status));return}e(r.responseText)}catch(s){t(s)}r.removeEventListener(\"error\",o)},o=()=>{t(new Error(\"XHR error\")),r.removeEventListener(\"load\",n)};r.addEventListener(\"load\",n,{once:!0}),r.addEventListener(\"error\",o,{once:!0})})}var v=/codecs=\"?av01\\./;function h(){let r=[l(HTMLMediaElement.prototype,{canPlayType:e=>function(n){return v.test(n)?\"\":e.call(this,n)}}),l(window.MediaSource,{isTypeSupported:e=>function(n){return v.test(n)?!1:e.call(this,n)}})];return()=>r.forEach(e=>e())}var E=(r=>{if(!r)throw new Error(\"env var BILI_REQ_STORE not inited\");return r})(\"Hui7kzXGQ8EA\");h();if(location.hostname.includes(\"bilibili.com\")){let r=[{hostname:\"api.bilibili.com\",pathname:\"/x/player/v2\"},{hostname:\"api.bilibili.com\",pathname:\"/x/player/wbi/v2\"}].map(n=>new URLPattern(n)),e=new c(n=>r.some(o=>o.test(n)));e.load(),window[E]=e;let t;(i=>(i[i.default=0]=\"default\",i[i.hevc=1]=\"hevc\",i[i.avc=2]=\"avc\",i[i.av1=3]=\"av1\"))(t||={}),localStorage.setItem(\"recommend_auto_play\",\"close\"),localStorage.setItem(\"bpx_player_profile\",JSON.stringify({media:{autoplay:!1}})),localStorage.setItem(\"bilibili_player_codec_prefer_type\",JSON.stringify(1))}\n"+"}finally{"+o`document.getElementById(${t})?.remove();`+"}",document.documentElement.prepend(e)});
