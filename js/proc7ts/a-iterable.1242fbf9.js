import{a as n,d as t,i as r,N as o}from"./call-thru.505a1d44.js";function e(n){return n[Symbol.iterator]()}function u(n){return function*(){yield*n}()}function f(n,t){const r={[Symbol.iterator]:n};if(!t)return r;const o=r;return o.reverse=t,o}function s(n,t){for(const r of n)t(r)}function i(n){return!!e(n).next().done}function c(n,t){for(const r of n)if(!t(r))return!1;return!0}function a(n){return e(n).next().value}function l(n,t,r){let o=r;for(const r of n)o=t(o,r);return o}function y(n,t){return f((function*(){for(const r of n)t(r)&&(yield r)}))}function d(t,r=n){return f((function*(){for(const n of t)yield*r(n)}))}function h(n,t){return f((function*(){for(const r of n)yield t(r)}))}function m(e,...u){let f=[];const s=n=>{const e=n>=u.length,i=++n<u.length?u[n]:t,c=(t,u)=>{r(t)?t[o](s(n),i):e?f.push([u]):s(n).pass(i,t)};return{call(n,t){c(n(...t),t)},pass(n,t){c(n(t),t)},skip(){},iterate(n,t){f.push({*[Symbol.iterator](){for(const r of t){const t=f,o=[];try{f=o,c(n(r),r)}finally{f=t}for(const n of o)yield*n}}})}}};return s(0).iterate(u[0],e),d(f,n)}function p(n){return f((function*(){for(let t=0;t<n.length;++t)yield n[t]}),()=>function(n){return f((function*(){for(let t=n.length-1;t>=0;--t)yield n[t]}))}(n))}const b={*[Symbol.iterator](){},reverse(){return this}};function g(){return b}function v(n){const t=function(n){return p(Reflect.ownKeys(n))}(n);function r(t){return h(t,t=>[t,n[t]])}return f(()=>e(r(t)),()=>r(t.reverse()))}export{p as a,l as b,y as c,c as d,u as e,d as f,e as g,a as h,s as i,g as j,i as k,h as m,v as o,m as t};//# sourceMappingURL=a-iterable.1242fbf9.js.map
