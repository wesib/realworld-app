import{i as n,N as t}from"./call-thru.3702f6af.js";const r=Symbol("push-iterator");function e(n){return!!n[r]}function o(n){return n[Symbol.iterator]()}function u(n){return{[Symbol.iterator]:i,[r]:n}}function i(){return this[r]()}function f(n,t){return!n[r](t).isOver()}function s(n){let t=!1,e=r=>{r&&!n(r)&&(t=!0,e=h)};return{[Symbol.iterator]:c,[r](n){return e(n),this},next:l,isOver:()=>t}}function c(){return this}function l(){for(;;){let n;const t=!f(this,(t=>(n={value:t},!0)));if(n)return n;if(t)return{done:!0}}}function a(){return{done:!0}}function h(n){}const v={[Symbol.iterator]:c,[r](n){return this},next:()=>({done:!0}),isOver:()=>!0};function y(n,t){return n[r](t)}function b(n){return t=>{let e=0;const o=t=>{if(e>=n.length)return!1;for(;;){const r=t(n[e++]);if(e>=n.length||!1===r)return!1;if(!0===r)return!0}};if(t&&!o(t))return v;let u=!1,i=n=>{n&&!o(n)&&(u=!0,i=h,f=a)},f=()=>e<n.length?{value:n[e++]}:(u=!0,i=h,f=a,{done:!0});return{[Symbol.iterator]:c,[r](n){return i(n),this},next:()=>f(),isOver:()=>u}}}function p(n){return u(b(n))}function d(n,t){if(e(n))return f(n,t);const r=o(n);if(e(r))return f(r,t);for(;;){const n=r.next();if(n.done)return!1;const e=t(n.value);if("boolean"==typeof e)return e}}function g(n,t){d(n,(n=>{t(n)}))}const x=n=>n;function O(n,t=x){if(e(n))return m(n,t);const r=o(n);return e(r)?m(r,t):Array.from(n,t)}function m(n,t){const r=[];return f(n,(n=>{r.push(t(n))})),r}function S(n,t){let r=!0;return d(n,(n=>{if(r=!!t(n),!r)return!1})),r}function A(n){if(e(n))return j(n);const t=o(n);return e(t)?j(t):function(n){const t=n.next();return t.done?void 0:t.value}(t)}function j(n){let t;return f(n,(n=>(t=n,!1))),t}function k(n,t){let e=!1,o=n=>{(e=!!n&&!t(n))&&(o=h,u=a)},u=()=>{const t=n.next();return t.done&&(e=!0,o=h,u=a),t};return{[Symbol.iterator]:c,[r](n){return o(n),this},next:()=>u(),isOver:()=>e}}function w(n){return t=>{for(;;){const r=n.next();if(r.done)return!1;const e=t(r.value);if("boolean"==typeof e)return e}}}function K(n,t){return e(n)?y(n,t):Array.isArray(n)?function(n,t){return n.length?b(n)(t):v}(n,t):function(n,t){const r=o(n);if(e(r))return y(r,t);const u=w(r);return u(t)?k(r,u):v}(n,t)}function N(n,t,r){let e=r;return d(n,(n=>{e=t(e,n)})),e}function P(){return v}function R(n){return u(function(n){return t=>{const o=n();if(e(o))return o[r](t);const u=w(o);return t&&!u(t)?P():k(o,u)}}(n))}function q(...n){return n.length>1?u(function(n){return t=>{let r=0,e=n[0];const o=t=>{for(;;){let o;const u=K(e,(n=>o=t(n)));if(u.isOver()){if(++r>=n.length)return!1;e=n[r]}else e=u;if("boolean"==typeof o)return o}};return t&&!o(t)?P():s(o)}}(n)):n.length?(t=n[0],Array.isArray(t)?p(t):R((()=>o(t)))):P();var t}function z(n){return u(function(n){return t=>{if(t)return t(n),P();let e=!1;return{[Symbol.iterator]:c,[r](t){return e?P():t?(e=!0,t(n),P()):this},next:()=>e?{done:e}:(e=!0,{value:n}),isOver:()=>e}}}(n))}function B(n,t){return u(function(n,t){return e=>{let o=0;const u=r=>{for(;;){if(o>=n.length)return!1;const e=n[o++];if(t(e)){const n=r(e);if("boolean"==typeof n)return n}}};if(e&&!u(e))return P();let i=!1,f=n=>{n&&!u(n)&&(i=!0,f=h,s=a)},s=()=>{for(;;){if(o>=n.length)return i=!0,f=h,s=a,{done:!0};const r=n[o++];if(t(r))return{value:r}}};return{[Symbol.iterator]:c,[r](n){return f(n),this},next:()=>s(),isOver:()=>i}}}(n,t))}function C(n,t){return u((r=>{const u=e(n)?D(n,t):function(n,t){const r=o(n);if(e(r))return D(r,t);return n=>{for(;;){const e=r.next();if(e.done)return!1;const o=e.value;if(t(o)){const t=n(o);if("boolean"==typeof t)return t}}}}(n,t);return r&&!u(r)?P():s(u)}))}function D(n,t){return r=>{const e=y(n,(n=>{if(t(n))return r(n)}));return n=e,!e.isOver()}}const E=n=>n;function F(n,t=E){return u(function(n,t){return r=>{let e,o=0;const u=r=>{if(o>=n.length)return!1;for(e||(e=t(n[o]));;){let u;const i=K(e,(n=>u=r(n)));if(i.isOver()){if(++o>=n.length)return!1;e=t(n[o])}else e=i;if("boolean"==typeof u)return u}};return r&&!u(r)?P():s(u)}}(n,t))}function G(n,t=E){return u((r=>{const u=e(n)?H(n,t):function(n,t){const r=o(n);if(e(r))return H(r,t);let u;return n=>{for(;;){if(!u){const n=r.next();if(n.done)return!1;u=t(n.value)}let e;const o=K(u,(t=>e=n(t)));if(u=o.isOver()?void 0:o,"boolean"==typeof e)return e}}}(n,t);return r&&!u(r)?P():s(u)}))}function H(n,t){let r,e=!1;return o=>{for(;;){for(;!r;){const o=y(n,(n=>(r=t(n),!0)));if(n=o,o.isOver()){if(!r)return!1;e=!0}}let u;const i=K(r,(n=>u=o(n)));if(i.isOver()){if(r=void 0,e)return!1}else r=i;if("boolean"==typeof u)return u}}}function I(n,t){return u((r=>{const u=e(n)?J(n,t):function(n,t){const r=o(n);if(e(r))return J(r,t);return n=>{for(;;){const e=r.next();if(e.done)return!1;const o=n(t(e.value));if("boolean"==typeof o)return o}}}(n,t);return r&&!u(r)?P():s(u)}))}function J(n,t){return r=>{const e=y(n,(n=>r(t(n))));return n=e,!e.isOver()}}function L(n){return I(function(n){return p(Reflect.ownKeys(n))}(n),(t=>[t,n[t]]))}function M(r,...e){const o=(r,u)=>{const i=u>=e.length,f=++u<e.length?e[u]:()=>{},s=(r,e,s)=>{n(e)?e[t](o(r,u),f):i?r.push(z(s)):o(r,u).pass(f,e)};return{call(n,t){s(r,n(...t),t)},pass(n,t){s(r,n(t),t)},skip(){},iterate(n,t){r.push(G(t,(t=>{const r=[];return s(r,n(t),t),F(r)})))}}},u=[];return o(u,0).iterate(e[0],r),F(u)}export{r as P,p as a,q as b,N as c,O as d,P as e,B as f,F as g,S as h,g as i,C as j,R as k,o as l,I as m,G as n,L as o,A as p,M as t};//# sourceMappingURL=push-iterator.38276a56.js.map
