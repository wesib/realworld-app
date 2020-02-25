import{e}from"../lib/call-thru.00f7427a.js";import{d as t,F as s}from"../lib/context-values.d686e0c8.js";import{k as r,l as n}from"../lib/fun-events.a21352be.js";import{b as o}from"../wesib/wesib.5eadef04.js";import{A as i}from"./auth.924b8fbd.js";import{H as a}from"../wesib/generic.28627b52.js";import{I as u}from"../lib/input-aspects.517f5412.js";const c=new t("api-root-url",{byDefault:()=>new URL("https://conduit.productionready.io/api/")}),p=new s("api-fetch",{byDefault:o((function(t){const s=t.get(a),o=t.get(c);return a=>{const{path:u,init:c,auth:p}=a,b=o.thru_(e=>new URL(u,e),e=>function(e,t={}){const s=new Request(e.href,Object.assign({mode:"cors"},t)),{headers:r}=s;return r.set("X-Requested-With","XMLHttpRequest"),s}(e,c)).thru_(s=>!1===p?e({request:s}):r(function(e,t,s){return e.get(i).authentication.keep.thru_(({token:e,failure:r})=>e?(t.headers.set("Authorization",`Token ${e}`),{request:t}):s?(r||(r={ok:!1,errors:{api:["Not authenticated"]}}),{failure:r}):{request:t})}(t,s,p)),t=>t.request?r(s(t.request).thru_(e=>({response:e}))):e({failure:t.failure}));return n(b.thru_(f)).thru_(([e,t])=>function({respondAs:e},t,s){if(!t.response)return t.failure;const{response:r}=t;if(r.ok)return{ok:!0,response:r,body:"function"==typeof e?e(s):s[e]};return{ok:!1,response:r,errors:s.errors||{http:[r.statusText?`${r.status}: ${r.statusText}`:`ERROR ${r.status}`]}}}(a,e,t))}}))});function f(e){return e.response?Promise.all([e,e.response.json()]).catch(t=>[{failure:{ok:!1,response:e.response,errors:{api:[`Failed to parse response: ${t}`]}}}]):[e]}new s("api-submitter",{byDefault:o((function(e){const t=e.get(p);return e=>{const{init:s={}}=e,{method:r="POST",headers:n={}}=s;return o=>{const i=Object.assign(Object.assign({},e),{init:Object.assign(Object.assign({},s),{method:r,body:JSON.stringify(o),headers:Object.assign(Object.assign({},n),{Accept:"application/json","Content-Type":"application/json"})})});return b(t(i))}}}))});function b(e){return new Promise((t,s)=>{e.once(e=>{e.ok?t(e.body):s(new u({submit:"api",api:e.errors}))}).whenOff(e=>{s(e instanceof u?e:new u({submit:"cancel",cancel:e}))})})}export{p as A,b as a};//# sourceMappingURL=api.689b3fef.js.map
