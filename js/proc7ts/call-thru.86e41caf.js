function n(n){return n}function t(){}function u(n){return null!=n}function r(n){return()=>n}function s(n){let t=()=>(t=r(n()))();return()=>t()}function o(...n){return()=>n}const c=Symbol("next-call");function a(n){const t=()=>t;return t[c]=(t,u)=>n(t,u),t}function f(n){return"function"==typeof n&&c in n}function e(n){return a((t,u)=>t.pass(u,n))}function i(...n){return a((t,u)=>t.call(u,n))}function l(n){return a((t,u)=>{for(const r of n)t.pass(u,r)})}const p=a(n=>n.skip());export{c as N,n as a,p as b,e as c,t as d,a as e,o as f,u as g,l as h,f as i,s as l,i as n,r as v};//# sourceMappingURL=call-thru.86e41caf.js.map
