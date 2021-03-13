import{_ as t}from"../helpers.e1623395.js";import{B as e,F as s}from"../wesib/wesib.c496f508.js";import{a as i}from"../proc7ts/context-values.24d38e04.js";import{b as o}from"../proc7ts/fun-events.3257bf57.js";import{a as r}from"../proc7ts/primitives.38e5298b.js";import{p as a}from"../lib/dompurify.f5eadf9f.js";import{m as n}from"../lib/marked.9d494571.js";import{A as c}from"./api.51544e65.js";import"../frontmeans/input-aspects.f8acf040.js";const p=new i("article-service");class l{constructor(t){this._apiFetch=t.get(c);const s=t.get(e);this._purify=a(s);const{requestIdleCallback:i}=s;this._schedule=i?t=>i(t,{timeout:750}):t=>s.setTimeout(t)}article(t){if(!t)return o({ok:!1,errors:{article:["not found"]}});const e={path:`articles/${encodeURIComponent(t)}`,init:{method:"GET",headers:{Accept:"application/json"}},respondAs:"article"};return this._apiFetch(e)}async htmlContents(t){const e=await new Promise(((e,s)=>{this._schedule((()=>{n(t.body,((t,i)=>{null!=t?s(t):e(i)}))}))}));return this._purify.sanitize(e,{RETURN_DOM_FRAGMENT:!0,RETURN_DOM_IMPORT:!0})}likeArticle(t,e=!0){const s={path:`articles/${encodeURIComponent(t)}/favorite`,init:{method:e?"POST":"DELETE",headers:{Accept:"application/json"}},respondAs:"article",auth:!0};return this._apiFetch(s)}createArticle(t){const e={path:"articles",init:{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({article:t})},respondAs:"article",auth:!0};return this._apiFetch(e)}updateArticle(t,e){const s={path:`articles/${encodeURIComponent(t)}`,init:{method:"PUT",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({article:e})},respondAs:"article",auth:!0};return this._apiFetch(s)}deleteArticle(t){const e={path:`articles/${encodeURIComponent(t)}`,init:{method:"DELETE",headers:{Accept:"application/json"}},respondAs:r,auth:!0};return this._apiFetch(e)}}let h=class{};h=t([s({setup(t){t.provide({a:p,as:l})}})],h);export{p as A,h as a};//# sourceMappingURL=articles.101ad419.js.map
