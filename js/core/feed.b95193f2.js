import{g as t,a as s,d as e,e as a}from"../lib/call-thru.00f7427a.js";import{e as r,t as o}from"../lib/a-iterable.a3fddd20.js";import{S as i}from"../lib/context-values.956fc686.js";import{o as c,s as n,d as p}from"../lib/fun-events.a21352be.js";import{F as f}from"../wesib/wesib.b48306cb.js";import{_ as h}from"../helpers.920c7f83.js";import{A as l}from"./api.4cbb7920.js";const d=["feed","tag","author","favorited","limit","offset"];function u(t,s){return d.every(e=>t[e]===s[e])}function m(s){const e=new URLSearchParams;return r(o(d,s=>"feed"!==s?s:t,e=>{const a=s[e];return a?[e,String(a)]:t}),([t,s])=>e.set(t,s)),e}const b=new i("feed-service"),g={"/personal-feed":{path:"articles/feed",auth:!0},"/global-feed":{path:"articles"}};class j{constructor(t){this._apiFetch=t.get(l)}articles(t){const{path:e,auth:a}=g[t.feed||"/global-feed"],r={path:`${e}?${m(t)}`,init:{method:"GET",headers:{Accept:"application/json"}},auth:a,respondAs:s};return this._apiFetch(r)}tags(){if(this._tags)return this._tags;let s;return this._tags=c(r=>{if(!s){const r={path:"tags",init:{method:"GET",headers:{Accept:"application/json"}},respondAs:"tags",auth:!1},o=this._apiFetch(r).thru_(s=>s.ok?e(s.body):!1===s.ok?(console.log("Failed to load tags",s.errors),e([])):t),i=n(p(o,()=>[]));s=i.read.thru_(s=>s?a(...s):t)}s(r)})}}let _=class{};_=h([f({setup(t){t.provide({a:b,as:j})}})],_);export{_ as F,b as a,u as b,m as f};//# sourceMappingURL=feed.b95193f2.js.map
