import{c as e}from"../js/core/main.9847b445.js";import{_ as s}from"../js/helpers.e1623395.js";import{i as t,s as r,g as o,c as a,m as i,y as n,q as p}from"../js/proc7ts/fun-events.0c993baf.js";import{H as c,A as m,m as j,N as f,C as d,h as l}from"../js/wesib/generic.36801613.js";import{C as u,S as h,R as b,B as g}from"../js/wesib/wesib.1ebc214d.js";import{C as v}from"../js/core.10059585.js";import{n as y}from"../js/core/api.e687a690.js";import"../js/frontmeans/input-aspects.552a677b.js";import{a as w}from"../js/core/loader.430f4736.js";import{U as k,a as C}from"../js/core/users.915439be.js";import{n as _,C as q,F as x,c as B}from"../js/follow-author-btn.component.7a866a4d.js";import{P as E}from"../js/article-buttons-support.feature.68c57cb6.js";import{R as I}from"../js/render-feed.decorator.7cc257b7.js";import"../js/core/auth.d58e7713.js";import"../js/proc7ts/context-values.5140e67e.js";import"../js/proc7ts/primitives.7b24aae7.js";import"../js/proc7ts/push-iterator.ccd51d52.js";import"../js/proc7ts/call-thru.f4f68410.js";import"../js/proc7ts/supply.9762ee6d.js";import"../js/frontmeans/dom-events.ba8d072f.js";import"../js/core/layout.f26065db.js";import"../js/frontmeans/namespace-aliaser.9467f14d.js";import"../js/hatsy/http-header-value.851567fb.js";import"../js/proc7ts/workbench.dbc8e30b.js";import"../js/frontmeans/render-scheduler.6f331202.js";import"../js/frontmeans/httongue.6b868a5b.js";import"../js/proc7ts/delta-set.d5d9e832.js";import"../js/core/feed.ff2da7aa.js";import"../js/current-article.228ecf92.js";import"../js/core/articles.1a8d5347.js";import"../js/lib/dompurify.f5eadf9f.js";import"../js/lib/marked.9d494571.js";import"../js/core/util.509be545.js";const P=/#\/.+\/favorite$/;let A=class{constructor(e){const s=e.get(f);e.whenConnected((()=>{t({page:s,links:e.get(d).select("a",{all:!0,deep:!0})}).do(r(e))((({page:[e],links:[t]})=>{for(const r of t){const t=r.element,o=e.get(E),a=o.author||o.favorited;let i;i=P.test(t.href)?{favorited:a}:{author:a};const n=s.with(E,i).pretend();if(n){const e=n.url.href;if(t.href!==e){const s=t.cloneNode(!0);s.href=e,t.replaceWith(s)}}}}))}))}};A=s([u(["user-feed-toggle",v],{feature:{needs:j}},m({active:"active"}),c())],A);let N=class{constructor(e){this.request={};const s=e.get(f);e.whenConnected((()=>{s.read.do(r(e))((e=>{this.request=e.get(E)}))}))}};s([I({requestParam:E})],N.prototype,"request",void 0),N=s([u(["user-feed",v])],N);let R=class{constructor(e){this._context=e,this.profile=_;e.get(l).get(q)((e=>this.profile=e))}render(){const{document:e}=this._context.get(g);return()=>{var s;const{profile:t}=this;null===(s=e.getElementById("user:image"))||void 0===s||s.setAttribute("src",t.username&&t.image||"");const r=e.getElementById("user:username");r&&(r.innerText=t.username||"");const o=e.getElementById("user:bio");o&&(o.innerText=t.username&&t.bio||"")}}};s([h()],R.prototype,"profile",void 0),s([b()],R.prototype,"render",null),R=s([u(["user-info",v],{feature:{needs:x}})],R);let T=class{constructor(e){this._response=o();const s=e.get(k),t=e.get(f),r=e.get(l),c=B(this._response.read.do(a((e=>e&&e.ok?e.body:_))));r.provide({a:q,is:c.read}),e.whenConnected((()=>{t.read.do(i((e=>{const s=e.get(E);return s.author||s.favorited})),n(e),p((e=>{if(e){if(!this.response||!this.response.ok||this.response.body.username!==e)return s.userProfile(e)((e=>this.response=e))}else this.response={ok:!1,errors:y()}})))}))}get response(){return this._response.it}set response(e){this._response.it=e}};s([w()],T.prototype,"response",null),T=s([u(["profile",v],{feature:{needs:[N,A,R,C]}})],T),e.load(T);//# sourceMappingURL=main.62ae7181.js.map
