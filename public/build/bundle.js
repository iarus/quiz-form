function t(){}const e=t=>t;function n(t,e){for(const n in e)t[n]=e[n];return t}function r(t){return t()}function o(){return Object.create(null)}function s(t){t.forEach(r)}function a(t){return"function"==typeof t}function i(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function u(t,e,n,r){if(t){const o=c(t,e,n,r);return t[0](o)}}function c(t,e,r,o){return t[1]&&o?n(r.ctx.slice(),t[1](o(e))):r.ctx}function l(t,e,n,r,o,s,a){const i=function(t,e,n,r){if(t[2]&&r){const o=t[2](r(n));if(void 0===e.dirty)return o;if("object"==typeof o){const t=[],n=Math.max(e.dirty.length,o.length);for(let r=0;r<n;r+=1)t[r]=e.dirty[r]|o[r];return t}return e.dirty|o}return e.dirty}(e,r,o,s);if(i){const o=c(e,n,r,a);t.p(o,i)}}function f(t){const e={};for(const n in t)"$"!==n[0]&&(e[n]=t[n]);return e}function d(e){return e&&a(e.destroy)?e.destroy:t}const h="undefined"!=typeof window;let p=h?()=>window.performance.now():()=>Date.now(),m=h?t=>requestAnimationFrame(t):t;const g=new Set;function b(t){g.forEach((e=>{e.c(t)||(g.delete(e),e.f())})),0!==g.size&&m(b)}function $(t){let e;return 0===g.size&&m(b),{promise:new Promise((n=>{g.add(e={c:t,f:n})})),abort(){g.delete(e)}}}function v(t,e){t.appendChild(e)}function y(t,e,n){t.insertBefore(e,n||null)}function w(t){t.parentNode.removeChild(t)}function _(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function k(t){return document.createElement(t)}function x(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function E(t){return document.createTextNode(t)}function q(){return E(" ")}function A(){return E("")}function C(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function S(t){return function(e){return e.preventDefault(),t.call(this,e)}}function T(t){return function(e){e.target===this&&t.call(this,e)}}function j(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function O(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function z(t,e){t.value=null==e?"":e}function N(t,e,n,r){t.style.setProperty(e,n,r?"important":"")}function P(t,e){const n=document.createEvent("CustomEvent");return n.initCustomEvent(t,!1,!1,e),n}const R=new Set;let B,D=0;function M(t,e,n,r,o,s,a,i=0){const u=16.666/r;let c="{\n";for(let t=0;t<=1;t+=u){const r=e+(n-e)*s(t);c+=100*t+`%{${a(r,1-r)}}\n`}const l=c+`100% {${a(n,1-n)}}\n}`,f=`__svelte_${function(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}(l)}_${i}`,d=t.ownerDocument;R.add(d);const h=d.__svelte_stylesheet||(d.__svelte_stylesheet=d.head.appendChild(k("style")).sheet),p=d.__svelte_rules||(d.__svelte_rules={});p[f]||(p[f]=!0,h.insertRule(`@keyframes ${f} ${l}`,h.cssRules.length));const m=t.style.animation||"";return t.style.animation=`${m?`${m}, `:""}${f} ${r}ms linear ${o}ms 1 both`,D+=1,f}function F(t,e){const n=(t.style.animation||"").split(", "),r=n.filter(e?t=>t.indexOf(e)<0:t=>-1===t.indexOf("__svelte")),o=n.length-r.length;o&&(t.style.animation=r.join(", "),D-=o,D||m((()=>{D||(R.forEach((t=>{const e=t.__svelte_stylesheet;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.__svelte_rules={}})),R.clear())})))}function L(t){B=t}function X(){if(!B)throw new Error("Function called outside component initialization");return B}function G(t){X().$$.on_destroy.push(t)}function H(){const t=X();return(e,n)=>{const r=t.$$.callbacks[e];if(r){const o=P(e,n);r.slice().forEach((e=>{e.call(t,o)}))}}}function I(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach((t=>t(e)))}const J=[],K=[],Q=[],U=[],V=Promise.resolve();let W=!1;function Y(){W||(W=!0,V.then(ot))}function Z(){return Y(),V}function tt(t){Q.push(t)}function et(t){U.push(t)}let nt=!1;const rt=new Set;function ot(){if(!nt){nt=!0;do{for(let t=0;t<J.length;t+=1){const e=J[t];L(e),st(e.$$)}for(L(null),J.length=0;K.length;)K.pop()();for(let t=0;t<Q.length;t+=1){const e=Q[t];rt.has(e)||(rt.add(e),e())}Q.length=0}while(J.length);for(;U.length;)U.pop()();W=!1,nt=!1,rt.clear()}}function st(t){if(null!==t.fragment){t.update(),s(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(tt)}}let at;function it(){return at||(at=Promise.resolve(),at.then((()=>{at=null}))),at}function ut(t,e,n){t.dispatchEvent(P(`${e?"intro":"outro"}${n}`))}const ct=new Set;let lt;function ft(){lt={r:0,c:[],p:lt}}function dt(){lt.r||s(lt.c),lt=lt.p}function ht(t,e){t&&t.i&&(ct.delete(t),t.i(e))}function pt(t,e,n,r){if(t&&t.o){if(ct.has(t))return;ct.add(t),lt.c.push((()=>{ct.delete(t),r&&(n&&t.d(1),r())})),t.o(e)}}const mt={duration:0};function gt(n,r,o){let s,i,u=r(n,o),c=!1,l=0;function f(){s&&F(n,s)}function d(){const{delay:r=0,duration:o=300,easing:a=e,tick:d=t,css:h}=u||mt;h&&(s=M(n,0,1,o,r,a,h,l++)),d(0,1);const m=p()+r,g=m+o;i&&i.abort(),c=!0,tt((()=>ut(n,!0,"start"))),i=$((t=>{if(c){if(t>=g)return d(1,0),ut(n,!0,"end"),f(),c=!1;if(t>=m){const e=a((t-m)/o);d(e,1-e)}}return c}))}let h=!1;return{start(){h||(F(n),a(u)?(u=u(),it().then(d)):d())},invalidate(){h=!1},end(){c&&(f(),c=!1)}}}function bt(n,r,o,i){let u=r(n,o),c=i?0:1,l=null,f=null,d=null;function h(){d&&F(n,d)}function m(t,e){const n=t.b-c;return e*=Math.abs(n),{a:c,b:t.b,d:n,duration:e,start:t.start,end:t.start+e,group:t.group}}function g(r){const{delay:o=0,duration:a=300,easing:i=e,tick:g=t,css:b}=u||mt,v={start:p()+o,b:r};r||(v.group=lt,lt.r+=1),l||f?f=v:(b&&(h(),d=M(n,c,r,a,o,i,b)),r&&g(0,1),l=m(v,a),tt((()=>ut(n,r,"start"))),$((t=>{if(f&&t>f.start&&(l=m(f,a),f=null,ut(n,l.b,"start"),b&&(h(),d=M(n,c,l.b,l.duration,0,i,u.css))),l)if(t>=l.end)g(c=l.b,1-c),ut(n,l.b,"end"),f||(l.b?h():--l.group.r||s(l.group.c)),l=null;else if(t>=l.start){const e=t-l.start;c=l.a+l.d*i(e/l.duration),g(c,1-c)}return!(!l&&!f)})))}return{run(t){a(u)?it().then((()=>{u=u(),g(t)})):g(t)},end(){h(),l=f=null}}}const $t="undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:global;function vt(t,e,n){const r=t.$$.props[e];void 0!==r&&(t.$$.bound[r]=n,n(t.$$.ctx[r]))}function yt(t){t&&t.c()}function wt(t,e,n,o){const{fragment:i,on_mount:u,on_destroy:c,after_update:l}=t.$$;i&&i.m(e,n),o||tt((()=>{const e=u.map(r).filter(a);c?c.push(...e):s(e),t.$$.on_mount=[]})),l.forEach(tt)}function _t(t,e){const n=t.$$;null!==n.fragment&&(s(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function kt(e,n,r,a,i,u,c=[-1]){const l=B;L(e);const f=e.$$={fragment:null,ctx:null,props:u,update:t,not_equal:i,bound:o(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(l?l.$$.context:[]),callbacks:o(),dirty:c,skip_bound:!1};let d=!1;if(f.ctx=r?r(e,n.props||{},((t,n,...r)=>{const o=r.length?r[0]:n;return f.ctx&&i(f.ctx[t],f.ctx[t]=o)&&(!f.skip_bound&&f.bound[t]&&f.bound[t](o),d&&function(t,e){-1===t.$$.dirty[0]&&(J.push(t),Y(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}(e,t)),n})):[],f.update(),d=!0,s(f.before_update),f.fragment=!!a&&a(f.ctx),n.target){if(n.hydrate){const t=function(t){return Array.from(t.childNodes)}(n.target);f.fragment&&f.fragment.l(t),t.forEach(w)}else f.fragment&&f.fragment.c();n.intro&&ht(e.$$.fragment),wt(e,n.target,n.anchor,n.customElement),ot()}L(l)}class xt{$destroy(){_t(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}var Et=[],qt=[];function At(t,e){if(t&&"undefined"!=typeof document){var n,r=!0===e.prepend?"prepend":"append",o=!0===e.singleTag,s="string"==typeof e.container?document.querySelector(e.container):document.getElementsByTagName("head")[0];if(o){var a=Et.indexOf(s);-1===a&&(a=Et.push(s)-1,qt[a]={}),n=qt[a]&&qt[a][r]?qt[a][r]:qt[a][r]=i()}else n=i();65279===t.charCodeAt(0)&&(t=t.substring(1)),n.styleSheet?n.styleSheet.cssText+=t:n.appendChild(document.createTextNode(t))}function i(){var t=document.createElement("style");if(t.setAttribute("type","text/css"),e.attributes)for(var n=Object.keys(e.attributes),o=0;o<n.length;o++)t.setAttribute(n[o],e.attributes[n[o]]);var a="prepend"===r?"afterbegin":"beforeend";return s.insertAdjacentElement(a,t),t}}function Ct(e){let n,r;return{c(){n=x("svg"),r=x("circle"),j(r,"class","path svelte-177urog"),j(r,"cx","25"),j(r,"cy","25"),j(r,"r","20"),j(r,"fill","none"),j(r,"stroke-width","5"),j(n,"class","spinner svelte-177urog"),j(n,"viewBox","0 0 50 50")},m(t,e){y(t,n,e),v(n,r)},p:t,i:t,o:t,d(t){t&&w(n)}}}At(".spinner.svelte-177urog.svelte-177urog{width:100%;height:100%;-webkit-animation:svelte-177urog-rotate 2s linear infinite;animation:svelte-177urog-rotate 2s linear infinite}.spinner.svelte-177urog .path.svelte-177urog{stroke:currentColor;stroke-linecap:round;-webkit-animation:svelte-177urog-dash 1.5s ease-in-out infinite;animation:svelte-177urog-dash 1.5s ease-in-out infinite}@-webkit-keyframes svelte-177urog-rotate{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes svelte-177urog-rotate{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes svelte-177urog-dash{0%{stroke-dasharray:1, 150;stroke-dashoffset:0}50%{stroke-dasharray:90, 150;stroke-dashoffset:-35}100%{stroke-dasharray:90, 150;stroke-dashoffset:-124}}@keyframes svelte-177urog-dash{0%{stroke-dasharray:1, 150;stroke-dashoffset:0}50%{stroke-dasharray:90, 150;stroke-dashoffset:-35}100%{stroke-dasharray:90, 150;stroke-dashoffset:-124}}",{});class St extends xt{constructor(t){super(),kt(this,t,null,Ct,i,{})}}function Tt(t){let e,n,r;return n=new St({}),{c(){e=k("span"),yt(n.$$.fragment),j(e,"class","spinner svelte-uqhv8p")},m(t,o){y(t,e,o),wt(n,e,null),r=!0},i(t){r||(ht(n.$$.fragment,t),r=!0)},o(t){pt(n.$$.fragment,t),r=!1},d(t){t&&w(e),_t(n)}}}function jt(e){let n,r,o;return{c(){n=k("p"),n.textContent="Ошибка при загрузке формы, попробуйте повторить позже.",j(n,"class","loading-error svelte-uqhv8p")},m(t,s){y(t,n,s),r||(o=C(n,"click",e[5]),r=!0)},p:t,d(t){t&&w(n),r=!1,o()}}}function Ot(t){let e,n,r,o,s,a,i,u,c,l,f,d=t[0]&&Tt(),h=t[1]&&jt(t);function p(e){t[6](e)}var m=t[2];function g(t){let e={open:!0};return void 0!==t[3]&&(e.show=t[3]),{props:e}}return m&&(i=new m(g(t)),K.push((()=>vt(i,"show",p)))),{c(){e=k("div"),n=k("button"),r=E("Калькулятор подбора септика\n\n    "),d&&d.c(),s=q(),h&&h.c(),a=q(),i&&yt(i.$$.fragment),n.disabled=t[0],j(n,"class",o="btn btn-loader "+(t[0]?"__loading":"")+" svelte-uqhv8p"),j(e,"class","root svelte-uqhv8p")},m(o,u){y(o,e,u),v(e,n),v(n,r),d&&d.m(n,null),v(e,s),h&&h.m(e,null),v(e,a),i&&wt(i,e,null),c=!0,l||(f=C(n,"click",t[4]),l=!0)},p(t,[r]){t[0]?d?1&r&&ht(d,1):(d=Tt(),d.c(),ht(d,1),d.m(n,null)):d&&(ft(),pt(d,1,1,(()=>{d=null})),dt()),(!c||1&r)&&(n.disabled=t[0]),(!c||1&r&&o!==(o="btn btn-loader "+(t[0]?"__loading":"")+" svelte-uqhv8p"))&&j(n,"class",o),t[1]?h?h.p(t,r):(h=jt(t),h.c(),h.m(e,a)):h&&(h.d(1),h=null);const s={};if(!u&&8&r&&(u=!0,s.show=t[3],et((()=>u=!1))),m!==(m=t[2])){if(i){ft();const t=i;pt(t.$$.fragment,1,0,(()=>{_t(t,1)})),dt()}m?(i=new m(g(t)),K.push((()=>vt(i,"show",p))),yt(i.$$.fragment),ht(i.$$.fragment,1),wt(i,e,null)):i=null}else m&&i.$set(s)},i(t){c||(ht(d),i&&ht(i.$$.fragment,t),c=!0)},o(t){pt(d),i&&pt(i.$$.fragment,t),c=!1},d(t){t&&w(e),d&&d.d(),h&&h.d(),i&&_t(i),l=!1,f()}}}function zt(t,e,n){let r,o,s,a=!1,i=!1;function u(){n(1,i=!1),clearTimeout(r)}return[a,i,o,s,function(){o?s():(n(0,a=!0),u(),import("./chunk-25d0b2e2.js").finally((()=>{n(0,a=!1)})).then((t=>{n(2,o=t.default)})).catch((()=>{n(1,i=!0),r=setTimeout(u,1e4)})))},u,function(t){s=t,n(3,s)}]}At(".root.svelte-uqhv8p{position:relative;z-index:0}.btn-loader.svelte-uqhv8p{position:relative;z-index:0}.btn-loader.__loading.svelte-uqhv8p{color:transparent}.spinner.svelte-uqhv8p{position:absolute;color:rgba(255, 255, 255, 0.85);width:2em;height:2em;top:calc(50% - 1em);left:calc(50% - 1em)}.loading-error.svelte-uqhv8p{cursor:pointer;position:absolute;text-transform:none;line-height:1.6;top:calc(100% + 0.5rem);left:50%;width:100%;max-width:280px;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);margin:0;color:#fff;background:#ff4444;font-size:0.8rem;text-align:center;padding:0.8rem 1rem;-webkit-box-shadow:0 1rem 1rem rgba(0, 0, 0, 0.1);box-shadow:0 1rem 1rem rgba(0, 0, 0, 0.1);border-radius:0.2rem}.loading-error.svelte-uqhv8p::before{content:'';position:absolute;bottom:100%;left:50%;margin:0 0 0 -0.3rem;border:0.3rem solid transparent;border-top:none;border-bottom-color:#ff4444}",{});new class extends xt{constructor(t){super(),kt(this,t,zt,Ot,i,{})}}({target:document.querySelector("#target")});export{s as A,I as B,K as C,et as D,ft as E,dt as F,_ as G,H,vt as I,tt as J,gt as K,z as L,G as M,S as N,A as O,d as P,bt as Q,$t as R,xt as S,kt as a,q as b,E as c,j as d,k as e,y as f,v as g,O as h,e as i,t as j,w as k,n as l,f as m,At as n,yt as o,wt as p,ht as q,pt as r,i as s,Z as t,_t as u,u as v,N as w,C as x,T as y,l as z};