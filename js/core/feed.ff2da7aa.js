import{_ as t}from"../helpers.e1623395.js";import{F as s}from"../wesib/wesib.1ebc214d.js";import{S as e}from"../proc7ts/context-values.5140e67e.js";import{o as a,m as r,t as o,a as i,b as c}from"../proc7ts/fun-events.0c993baf.js";import{a as p}from"../proc7ts/primitives.7b24aae7.js";import{A as n}from"./api.e687a690.js";import"../frontmeans/input-aspects.552a677b.js";import"../proc7ts/workbench.dbc8e30b.js";import{n as f}from"../proc7ts/call-thru.f4f68410.js";import{i as d,t as h}from"../proc7ts/push-iterator.ccd51d52.js";const m=["feed","tag","author","favorited","limit","offset"];function l(t,s){return m.every((e=>t[e]===s[e]))}function u(t){const s=new URLSearchParams;return d(h(m,(t=>"feed"!==t?t:f),(s=>{const e=t[s];return e?[s,String(e)]:f})),(([t,e])=>s.set(t,e))),s}const b={articles:[],articlesCount:0},j=new e("feed-service"),g={"/personal-feed":{path:"articles/feed",auth:!0},"/global-feed":{path:"articles"}};class v{constructor(t){let s;this._apiFetch=t.get(n),this.tags=a((t=>{if(!s){const t={path:"tags",init:{method:"GET",headers:{Accept:"application/json"}},respondAs:"tags",auth:!1},e=this._apiFetch(t).do(r((t=>t.ok?t.body:(console.error("Failed to load tags",t.errors),[])))),a=o(i(e,(()=>[])));s=a.read.do(c(((t,s)=>s&&t(...s))))}s(t)}))}articles(t){const{path:s,auth:e}=g[t.feed||"/global-feed"],a={path:`${s}?${u(t)}`,init:{method:"GET",headers:{Accept:"application/json"}},auth:e,respondAs:p};return this._apiFetch(a)}}let F=class{};F=t([s({setup(t){t.provide({a:j,as:v})}})],F);export{j as F,F as a,l as b,u as f,b as n};//# sourceMappingURL=feed.ff2da7aa.js.map
