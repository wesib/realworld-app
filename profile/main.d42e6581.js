import"../js/proc7ts/primitives.e781e476.js";import"../js/proc7ts/push-iterator.f6f3343e.js";import"../js/proc7ts/context-values.69c73302.js";import"../js/frontmeans/namespace-aliaser.e08188c9.js";import{j as e,s,t,m as r,a as o,G as a,n as i}from"../js/proc7ts/fun-events.f7c44dc9.js";import"../js/core/auth.e0c9460a.js";import"../js/frontmeans/render-scheduler.78bb570f.js";import{C as n,S as c,R as p,B as f}from"../js/wesib/wesib.acbfb4f5.js";import{_ as m}from"../js/helpers.e1623395.js";import{n as j}from"../js/core/api.f9177210.js";import{d,A as l,g as u,N as h,b,a as g}from"../js/wesib/generic.5b4ac940.js";import"../js/proc7ts/delta-set.d5d9e832.js";import"../js/frontmeans/input-aspects.a58ff15b.js";import{C as v}from"../js/core.c152f8fe.js";import{a as y}from"../js/core/loader.57d9ca02.js";import"../js/core/layout.3dca3b65.js";import{c as w}from"../js/core/main.e75f4f7e.js";import"../js/core/articles.34c878ba.js";import"../js/lib/dompurify.f5eadf9f.js";import"../js/lib/marked.5b76e7a8.js";import{n as _,C as k,F as C,c as x}from"../js/follow-author-btn.component.f7e7bfe7.js";import"../js/frontmeans/httongue.193345e9.js";import{U as q,a as B}from"../js/core/users.ea939982.js";import"../js/proc7ts/call-thru.f4f68410.js";import"../js/core/feed.9db6d3c0.js";import{P as E}from"../js/article-buttons-support.feature.dff83677.js";import"../js/current-article.2a3b7c3c.js";import{R as I}from"../js/render-feed.decorator.c59c4554.js";import"../js/core/util.db2cfcdd.js";const P=/#\/.+\/favorite$/;let A=class{constructor(t){const r=t.get(h);t.whenConnected((()=>{e({page:r,links:t.get(b).select("a",{all:!0,deep:!0})}).do(s(t))((({page:[e],links:[s]})=>{for(const t of s){const s=t.element,o=e.get(E),a=o.author||o.favorited;let i;i=P.test(s.href)?{favorited:a}:{author:a};const n=r.with(E,i).pretend();if(n){const e=n.url.href;if(s.href!==e){const t=s.cloneNode(!0);t.href=e,s.replaceWith(t)}}}}))}))}};A=m([n(["user-feed-toggle",v],{feature:{needs:u}},l({active:"active"}),d())],A);let N=class{constructor(e){this.request={};const t=e.get(h);e.whenConnected((()=>{t.read.do(s(e))((e=>{this.request=e.get(E)}))}))}};m([I({requestParam:E})],N.prototype,"request",void 0),N=m([n(["user-feed",v])],N);let R=class{constructor(e){this._context=e,this.profile=_;e.get(g).get(k)((e=>this.profile=e))}render(){const{document:e}=this._context.get(f);return()=>{var s;const{profile:t}=this;null===(s=e.getElementById("user:image"))||void 0===s||s.setAttribute("src",t.username&&t.image||"");const r=e.getElementById("user:username");r&&(r.innerText=t.username||"");const o=e.getElementById("user:bio");o&&(o.innerText=t.username&&t.bio||"")}}};m([c()],R.prototype,"profile",void 0),m([p()],R.prototype,"render",null),R=m([n(["user-info",v],{feature:{needs:C}})],R);let T=class{constructor(e){this._response=t();const s=e.get(q),n=e.get(h),c=e.get(g),p=x(this._response.read.do(r((e=>e&&e.ok?e.body:_))));c.provide({a:k,is:p}),e.whenConnected((()=>{n.read.do(o((e=>{const s=e.get(E);return s.author||s.favorited})),a(e),i((e=>{if(e){if(!this.response||!this.response.ok||this.response.body.username!==e)return s.userProfile(e)((e=>this.response=e))}else this.response={ok:!1,errors:j()}})))}))}get response(){return this._response.it}set response(e){this._response.it=e}};m([y()],T.prototype,"response",null),T=m([n(["profile",v],{feature:{needs:[N,A,R,B]}})],T),w.load(T);//# sourceMappingURL=main.d42e6581.js.map
