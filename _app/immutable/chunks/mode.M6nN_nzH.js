import{h as g}from"./scheduler.GPr2abLr.js";import{d as S,w as l}from"./index.aWJ_Dz7C.js";let y,p;function k(e){if(typeof document>"u")return;clearTimeout(y),clearTimeout(p);const n=document.createElement("style"),o=document.createTextNode(`* {
     -webkit-transition: none !important;
     -moz-transition: none !important;
     -o-transition: none !important;
     -ms-transition: none !important;
     transition: none !important;
  }`);n.appendChild(o);const t=()=>document.head.appendChild(n),i=()=>document.head.removeChild(n);if(typeof window.getComputedStyle<"u"){t(),e(),window.getComputedStyle(n).opacity,i();return}if(typeof window.requestAnimationFrame<"u"){t(),e(),window.requestAnimationFrame(i);return}t(),y=window.setTimeout(()=>{e(),p=window.setTimeout(i,120)},120)}function v(e){return e.filter(n=>n.length>0)}const E={getItem:e=>null,setItem:(e,n)=>{}},u=typeof document<"u",T=["dark","light","system"],I=l("mode-watcher-mode"),V=l("mode-watcher-theme"),w=C(),A=x(),_=l(void 0),L=D(),M=l(!0),q=l([]),z=l([]),K=F(),B=P();function C(){const e="system",n=u?localStorage:E,o=n.getItem(i());let t=b(o)?o:e;function i(){return g(I)}const{subscribe:a,set:s}=l(t,()=>{if(!u)return;const r=d=>{if(d.key!==i())return;const f=d.newValue;b(f)?s(t=f):s(t=e)};return addEventListener("storage",r),()=>removeEventListener("storage",r)});function c(r){s(t=r),n.setItem(i(),t)}return{subscribe:a,set:c}}function D(){const e=u?localStorage:E,n=e.getItem(t());let o=n??"";function t(){return g(V)}const{subscribe:i,set:a}=l(o,()=>{if(!u)return;const c=r=>{if(r.key!==t())return;const d=r.newValue;a(d===null?o="":o=d)};return addEventListener("storage",c),()=>removeEventListener("storage",c)});function s(c){a(o=c),e.setItem(t(),o)}return{subscribe:i,set:s}}function x(){let n=!0;const{subscribe:o,set:t}=l(void 0,()=>{if(!u)return;const s=r=>{n&&t(r.matches?"light":"dark")},c=window.matchMedia("(prefers-color-scheme: light)");return c.addEventListener("change",s),()=>c.removeEventListener("change",s)});function i(){if(!u)return;const s=window.matchMedia("(prefers-color-scheme: light)");t(s.matches?"light":"dark")}function a(s){n=s}return{subscribe:o,query:i,tracking:a}}function F(){const{subscribe:e}=S([w,A,_,M,q,z],([n,o,t,i,a,s])=>{if(!u)return;const c=n==="system"?o:n,r=v(a),d=v(s);function f(){const m=document.documentElement,h=document.querySelector('meta[name="theme-color"]');c==="light"?(r.length&&m.classList.remove(...r),d.length&&m.classList.add(...d),m.style.colorScheme="light",h&&t&&h.setAttribute("content",t.light)):(d.length&&m.classList.remove(...d),r.length&&m.classList.add(...r),m.style.colorScheme="dark",h&&t&&h.setAttribute("content",t.dark))}return i?k(f):f(),c});return{subscribe:e}}function P(){const{subscribe:e}=S([L,M],([n,o])=>{if(!u)return;function t(){document.documentElement.setAttribute("data-theme",n)}return o?k(t):t(),n});return{subscribe:e}}function b(e){return typeof e!="string"?!1:T.includes(e)}function U(){w.set(g(K)==="dark"?"light":"dark")}function G(e){w.set(e)}function H(e){L.set(e)}function J(e){return e}function N({defaultMode:e,themeColors:n,darkClassNames:o=["dark"],lightClassNames:t=[],defaultTheme:i=""}){const a=document.documentElement,s=localStorage.getItem("mode-watcher-mode")||e,c=localStorage.getItem("mode-watcher-theme")||i,r=s==="light"||s==="system"&&window.matchMedia("(prefers-color-scheme: light)").matches;if(r?(o.length&&a.classList.remove(...o),t.length&&a.classList.add(...t)):(t.length&&a.classList.remove(...t),o.length&&a.classList.add(...o)),a.style.colorScheme=r?"light":"dark",n){const d=document.querySelector('meta[name="theme-color"]');d&&d.setAttribute("content",s==="light"?n.light:n.dark)}c&&(a.setAttribute("data-theme",c),localStorage.setItem("mode-watcher-theme",c)),localStorage.setItem("mode-watcher-mode",s)}export{B as a,G as b,H as c,K as d,M as e,_ as f,q as g,J as h,b as i,N as j,U as k,z as l,I as m,A as s,V as t};
