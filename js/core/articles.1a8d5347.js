import{_ as t}from"../helpers.e1623395.js";import{B as e,F as s}from"../wesib/wesib.1ebc214d.js";import{S as i}from"../proc7ts/context-values.5140e67e.js";import{e as o}from"../proc7ts/fun-events.0c993baf.js";import{a}from"../proc7ts/primitives.7b24aae7.js";import{p as r}from"../lib/dompurify.f5eadf9f.js";import{m as n}from"../lib/marked.9d494571.js";import{A as c}from"./api.e687a690.js";import"../frontmeans/input-aspects.552a677b.js";const p=new i("article-service");class l{constructor(t){this._apiFetch=t.get(c);const s=t.get(e);this._purify=r(s);const{requestIdleCallback:i}=s;this._schedule=i?t=>i(t,{timeout:750}):t=>s.setTimeout(t)}article(t){if(!t)return o({ok:!1,errors:{article:["not found"]}});const e={path:`articles/${encodeURIComponent(t)}`,init:{method:"GET",headers:{Accept:"application/json"}},respondAs:"article"};return this._apiFetch(e)}async htmlContents(t){const e=await new Promise(((e,s)=>{this._schedule((()=>{n(t.body,((t,i)=>{null!=t?s(t):e(i)}))}))}));return this._purify.sanitize(e,{RETURN_DOM_FRAGMENT:!0,RETURN_DOM_IMPORT:!0})}likeArticle(t,e=!0){const s={path:`articles/${encodeURIComponent(t)}/favorite`,init:{method:e?"POST":"DELETE",headers:{Accept:"application/json"}},respondAs:"article",auth:!0};return this._apiFetch(s)}createArticle(t){const e={path:"articles",init:{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({article:t})},respondAs:"article",auth:!0};return this._apiFetch(e)}updateArticle(t,e){const s={path:`articles/${encodeURIComponent(t)}`,init:{method:"PUT",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({article:e})},respondAs:"article",auth:!0};return this._apiFetch(s)}deleteArticle(t){const e={path:`articles/${encodeURIComponent(t)}`,init:{method:"DELETE",headers:{Accept:"application/json"}},respondAs:a,auth:!0};return this._apiFetch(e)}}let h=class{};h=t([s({setup(t){t.provide({a:p,as:l})}})],h);export{p as A,h as a};//# sourceMappingURL=articles.1a8d5347.js.map
