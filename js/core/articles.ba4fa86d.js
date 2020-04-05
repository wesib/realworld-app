import{a as t}from"../proc7ts/call-thru.ea70618a.js";import{a as e}from"../proc7ts/context-values.ec10addc.js";import{a as s}from"../proc7ts/fun-events.6f8cd792.js";import{B as i,F as a}from"../wesib/wesib.b26c9eb2.js";import{_ as o}from"../helpers.920c7f83.js";import{A as r}from"./api.a4379be1.js";import{D as c}from"../lib/dompurify.32df67e7.js";import{m as n}from"../lib/marked.faf5676c.js";const p=new e("article-service");class l{constructor(t){this._apiFetch=t.get(r);const e=t.get(i);this._purify=c(e),e.requestIdleCallback?this._schedule=t=>e.requestIdleCallback(t,{timeout:750}):this._schedule=t=>e.setTimeout(t)}article(t){if(!t)return s({ok:!1,errors:{article:["not found"]}});const e={path:`articles/${encodeURIComponent(t)}`,init:{method:"GET",headers:{Accept:"application/json"}},respondAs:"article"};return this._apiFetch(e)}async htmlContents(t){const e=await new Promise((e,s)=>{this._schedule(()=>{n(t.body,(t,i)=>{null!=t?s(t):e(i)})})});return this._purify.sanitize(e,{RETURN_DOM_FRAGMENT:!0,RETURN_DOM_IMPORT:!0})}likeArticle(t,e=!0){const s={path:`articles/${encodeURIComponent(t)}/favorite`,init:{method:e?"POST":"DELETE",headers:{Accept:"application/json"}},respondAs:"article",auth:!0};return this._apiFetch(s)}createArticle(t){const e={path:"articles",init:{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({article:t})},respondAs:"article",auth:!0};return this._apiFetch(e)}updateArticle(t,e){const s={path:`articles/${encodeURIComponent(t)}`,init:{method:"PUT",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({article:e})},respondAs:"article",auth:!0};return this._apiFetch(s)}deleteArticle(e){const s={path:`articles/${encodeURIComponent(e)}`,init:{method:"DELETE",headers:{Accept:"application/json"}},respondAs:t,auth:!0};return this._apiFetch(s)}}let h=class{};h=o([a({setup(t){t.provide({a:p,as:l})}})],h);export{p as A,h as a};//# sourceMappingURL=articles.ba4fa86d.js.map
