import{a as t}from"../lib/call-thru.00f7427a.js";import{S as e}from"../lib/context-values.eef19512.js";import{B as i,F as s}from"../wesib/wesib.698f6f57.js";import{_ as a}from"../helpers.920c7f83.js";import{A as o}from"./api.75ae058d.js";import{m as r}from"../lib/marked.8e5d3ae9.js";import{D as c}from"../lib/dompurify.780c3c3d.js";const n=new e("article-service");class p{constructor(t){this._apiFetch=t.get(o);const e=t.get(i);this._purify=c(e),e.requestIdleCallback?this._schedule=t=>e.requestIdleCallback(t,{timeout:750}):this._schedule=t=>e.setTimeout(t)}article(t){const e={path:`articles/${encodeURIComponent(t)}`,init:{method:"GET",headers:{Accept:"application/json"}},respondAs:"article"};return this._apiFetch(e)}async htmlContents(t){const e=await new Promise((e,i)=>{this._schedule(()=>{r(t.body,(t,s)=>{null!=t?i(t):e(s)})})});return this._purify.sanitize(e,{RETURN_DOM_FRAGMENT:!0,RETURN_DOM_IMPORT:!0})}likeArticle(t,e=!0){const i={path:`articles/${encodeURIComponent(t)}/favorite`,init:{method:e?"POST":"DELETE",headers:{Accept:"application/json"}},respondAs:"article",auth:!0};return this._apiFetch(i)}createArticle(t){const e={path:"articles",init:{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({article:t})},respondAs:"article",auth:!0};return this._apiFetch(e)}updateArticle(t,e){const i={path:`articles/${encodeURIComponent(t)}`,init:{method:"PUT",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({article:e})},respondAs:"article",auth:!0};return this._apiFetch(i)}deleteArticle(e){const i={path:`articles/${encodeURIComponent(e)}`,init:{method:"DELETE",headers:{Accept:"application/json"}},respondAs:t,auth:!0};return this._apiFetch(i)}}let l=class{};l=a([s({setup(t){t.provide({a:n,as:p})}})],l);export{n as A,l as a};//# sourceMappingURL=articles.530c016b.js.map