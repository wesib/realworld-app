function t(t){return function(t){return Array.isArray(t)}(t)?t:null!=t?[t]:[]}function n(t){return()=>t}function e(...t){return()=>t}function r(t){let e=()=>(e=n(t()))();return()=>e()}function s(t,...n){return"function"==typeof t?t(...n):t}function u(t){const n=Array.from(t),{length:e}=n;if(e)return 1===e?n[0]:n}function i(t){return n=t,Array.isArray(n)?new Set(t):null!=t?new Set([t]):new Set;var n}function f(t,n){var e;return e=n,Array.isArray(e)?n.forEach((n=>t.add(n))):null!=n&&t.add(n),t}function o(t,n=(()=>!0)){const e=Object.getPrototypeOf(t.prototype);if(null==e)return;const r=e.constructor;return n(r)?r:o(r,n)}function c(t){return t}function a(t,n,e=((t,n)=>n)){return t?n?function(...r){return e(t.apply(this,r),n.apply(this,r))}:t:n}function h(){}function l(){let t,n,e=r((()=>new Promise(((e,r)=>{t=e,n=r}))));const s=s=>{e=r(s),t=h,n=h};return t=t=>{s((()=>Promise.resolve(t)))},n=t=>{s((()=>Promise.reject(t)))},{resolve(n){t(n)},reject(t){n(t)},promise:()=>e()}}function w(t,n){const e=Symbol(`${String(n)}:value`),r=t[n];return{configurable:!0,enumerable:!0,get(){return e in this?this[e]:r},set(t){this[e]=t}}}function d(t){if(function(t){return void 0===t.value&&void 0===t.writable}(t))return t;const n=Symbol("value"),e=t.value,r={...t,writable:void 0,value:void 0,get(){return n in this?this[n]:e}};return t.writable&&(r.set=function(t){this[n]=t}),delete r.writable,delete r.value,r}const p=Symbol("SupplyState"),y={isOff:!1,off(t,n){t[p]=v(n)},whenOff(t,n){t[p]=g(n)}},O={isOff:!0,off:b,whenOff(t,n){n()}};function v(t){return void 0===t?O:{isOff:!0,off:b,whenOff(n,e){e(t)}}}function b(t,n){}function g(t){return{isOff:!1,off(n,e){n[p]=v(e),t(e)},whenOff(n,e){const r=t;t=t=>{r(t),e(t)}}}}class m{constructor(t){this[p]=t?g(t):y}get supply(){return this}get isOff(){return this[p].isOff}off(t){return this[p].off(this,t),this}whenOff(t){return this[p].whenOff(this,t),this}whenDone(){return new Promise(((t,n)=>this.whenOff((e=>void 0===e?t():n(e)))))}cuts(t){return t.supply.needs(this),this}needs(t){return t.supply.whenOff((t=>this.off(t))),this}as(t){return this.needs(t).cuts(t)}}class S extends m{get isOff(){return!1}off(t){return this}whenOff(t){return this}cuts(t){return this}needs(t){return this}}const A=new S;function P(){return A}function j(t){return t===A}class x extends m{get isOff(){return!0}off(){return this}whenOff(t){return t(),this}cuts(t){return t.supply.off(),this}needs(t){return this}}const k=new x;function q(){return k}function D(t){return null!=t}function E(t){return void 0!==t}export{m as S,c as a,e as b,q as c,t as d,j as e,s as f,w as g,u as h,D as i,f as j,o as k,l,a as m,h as n,P as o,r as p,E as q,i as s,d as t,n as v};//# sourceMappingURL=primitives.d6f0dd1c.js.map
