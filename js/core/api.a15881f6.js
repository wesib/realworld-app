import{n as e}from"../proc7ts/call-thru.6175ec26.js";import{S as t,F as r}from"../proc7ts/context-values.8b8de6a6.js";import{n as s,o as n}from"../proc7ts/fun-events.c05c6315.js";import{a as o}from"../wesib/wesib.6050980d.js";import{a}from"./auth.48adb381.js";import{H as u}from"../wesib/generic.c989db38.js";import{I as i}from"../proc7ts/input-aspects.460a0b06.js";const c=new t("api-root-url",{byDefault:()=>new URL("https://conduit.productionready.io/api/")}),p=new r("api-fetch",{byDefault:o((function(t){const r=t.get(u),o=t.get(c);return u=>{const{path:i,init:c,auth:p}=u,f=o.thru_(e=>new URL(i,e),e=>function(e,t={}){const r=new Request(e.href,Object.assign({mode:"cors"},t)),{headers:s}=r;return s.set("X-Requested-With","XMLHttpRequest"),r}(e,c)).thru_(r=>!1===p?e({request:r}):s(function(e,t,r){return e.get(a).token().keepThru_(({token:e,failure:s})=>e?(t.headers.set("Authorization","Token "+e),{request:t}):r?(s||(s={ok:!1,errors:{authentication:["absent"]}}),{failure:s}):{request:t})}(t,r,p)),t=>t.request?s(r(t.request).thru_(e=>({response:e}))):e({failure:t.failure}));return n(f.thru_(h)).thru_(([e,t])=>function({respondAs:e},t,r){if(!t.response)return t.failure;const{response:s}=t;if(s.ok)return{ok:!0,response:s,body:"function"==typeof e?e(r):r[e]};return{ok:!1,response:s,errors:r.errors||m(s)}}(u,e,t))}}))});function f(){return{authentication:["absent"]}}function h(e){return e.response?Promise.all([e,e.response.json()]).catch(t=>[{failure:{ok:!1,response:e.response,errors:e.response.ok?{api:["Failed to parse response: "+t]}:m(e.response)}}]):[e]}function m(e){return{HTTP:["ERROR "+e.status+(e.statusText?": "+e.statusText:"")]}}function l(e){return new Promise((t,r)=>{e.once(e=>{e.ok?t(e.body):r(new i({submit:"api",api:e.errors}))}).whenOff(e=>{r(e instanceof i?e:new i({submit:"cancel",cancel:e}))})})}export{p as A,l as a,f as n};//# sourceMappingURL=api.a15881f6.js.map
