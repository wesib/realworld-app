const n=Symbol("next-call");function t(t){const s=()=>s;return s[n]=(n,s)=>t(n,s),s}function s(t){return"function"==typeof t&&n in t}function o(n){return t(((t,s)=>t.pass(s,n)))}function c(...n){return t(((t,s)=>t.call(s,n)))}function a(n){return t(((t,s)=>{for(const o of n)t.pass(s,o)}))}const r=t((n=>n.skip()));export{n as N,r as a,o as b,t as c,a as d,s as i,c as n};//# sourceMappingURL=call-thru.3702f6af.js.map
