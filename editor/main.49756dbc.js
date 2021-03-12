import{c as t}from"../js/core/main.9847b445.js";import{_ as e}from"../js/helpers.e1623395.js";import{w as s,c as r,x as o,v as i,m as a,b as n,u as c,I as l}from"../js/frontmeans/input-aspects.552a677b.js";import{y as d,s as p,c as m,k as u,i as h,U as j,e as f}from"../js/proc7ts/fun-events.0c993baf.js";import{S as b,k as y,i as v,O as g,N as S,j as w,P as _,d as k}from"../js/wesib/generic.36801613.js";import{C as q,S as x,R as C,n as L,B as U}from"../js/wesib/wesib.1ebc214d.js";import{C as A}from"../js/core.10059585.js";import{a as B}from"../js/core/api.e687a690.js";import{A as E,a as F}from"../js/core/articles.1a8d5347.js";import{b as I}from"../js/core/auth.d58e7713.js";import{F as O,a as P}from"../js/core/feed.ff2da7aa.js";import{s as R,C as D}from"../js/core/forms.c0daa8d3.js";import{M,i as N,a as T}from"../js/core/loader.430f4736.js";import{n as H}from"../js/current-article.228ecf92.js";import"../js/core/layout.f26065db.js";import"../js/frontmeans/namespace-aliaser.9467f14d.js";import"../js/frontmeans/dom-events.ba8d072f.js";import"../js/proc7ts/primitives.7b24aae7.js";import"../js/proc7ts/supply.9762ee6d.js";import"../js/frontmeans/render-scheduler.6f331202.js";import"../js/proc7ts/push-iterator.ccd51d52.js";import"../js/proc7ts/call-thru.f4f68410.js";import"../js/proc7ts/delta-set.d5d9e832.js";import"../js/proc7ts/context-values.5140e67e.js";import"../js/hatsy/http-header-value.851567fb.js";import"../js/proc7ts/workbench.dbc8e30b.js";import"../js/frontmeans/httongue.6b868a5b.js";import"../js/lib/dompurify.f5eadf9f.js";import"../js/lib/marked.9d494571.js";let z=class{constructor(t){t.whenSettled((({element:t})=>{this.body=y.by((e=>s(t.querySelector("textarea"),e).setup(r,(t=>t.by(o())))))}))}};e([b()],z.prototype,"body",void 0),z=e([q(["article-body",A])],z);let G=class{constructor(t){t.whenSettled((({element:t})=>{this.description=y.by((e=>s(t.querySelector("input"),e).setup(r,(t=>t.by(o())))))}))}};e([b()],G.prototype,"description",void 0),G=e([q(["article-description",A])],G);let J=class{constructor(t){this._context=t,this.tags=[],t.get(O).tags.do(d(t))(((...t)=>this.tags=t)).whenOff((()=>this.tags=[]));const e=t.get(L);t.whenSettled((({element:s})=>{e.whenDefined(M)((({elementDef:{tagName:t}})=>{this.tagList=y.by((e=>N(s.querySelector(t),e)))})).needs(t)}))}render(){const{document:t}=this._context.get(U),{element:e}=this._context,s=e.querySelector("datalist");return()=>{s.innerHTML="",this.tags.forEach((e=>{s.appendChild(t.createElement("option")).value=e+" "}))}}};e([x()],J.prototype,"tags",void 0),e([b()],J.prototype,"tagList",void 0),e([C()],J.prototype,"render",null),J=e([q(["article-tag-editor",A],{feature:{needs:[P,M]}})],J);let K=class{constructor(t){t.whenSettled((({element:t})=>{this.title=y.by((e=>s(t.querySelector("input"),e).setup(r,(t=>t.by(o())))))}))}};e([b()],K.prototype,"title",void 0),K=e([q(["article-title",A])],K);let Q=class{constructor(t){this._context=t,this.article=H,this._navigation=t.get(S),this._articleService=t.get(E);const e=t.get(I);t.supply.whenOff((()=>{this.loadStatus=void 0,this.article=H})),t.whenSettled((({element:t})=>{this.form=w.by((t=>i({title:"",description:"",body:"",tagList:[]},t)),(e=>a(t.querySelector("form"),e))),this.submitButton=R(t.querySelector("button"))})),t.whenConnected((()=>{this._navigation.read.do(p(t),m((t=>decodeURIComponent(t.get(_).pathname.substring(1)))),u((t=>h({user:e.requireUser,loaded:t?j(this._articleService.article(t),(()=>[])):f({ok:!0})}))))((({user:[t],loaded:[e]})=>{var s,r,o;if(!t.username)return void(this.loadStatus=t.failure?{ok:!1,errors:t.failure.errors}:void 0);if(!e)return void(this.loadStatus=void 0);if(!e.ok)return void(this.loadStatus={ok:!1,errors:e.errors});this.loadStatus=e,this.article=null!==(s=e.body)&&void 0!==s?s:H;const i=null===(r=this.form)||void 0===r?void 0:r.control;i&&(i.it=null!==(o=e.body)&&void 0!==o?o:{title:"",description:"",body:"",tagList:[]})})).needs(t)}))}render(){const{element:t}=this._context,e=t.querySelector("button");return()=>{e.innerText=this.article.slug?"Update Post":"Create Post"}}submit({control:t}){t.aspect(n).markEdited(),t.aspect(c).submit((t=>B(this.article.slug?this._articleService.updateArticle(this.article.slug,t):this._articleService.createArticle(t)))).then((t=>this._navigation.with(_,encodeURIComponent(t.slug)).open("article/"))).catch((t=>{t instanceof l?console.error("Failed to save article",...t.errors):console.error("Failed to save article",t)}))}};e([T()],Q.prototype,"loadStatus",void 0),e([x()],Q.prototype,"article",void 0),e([v()],Q.prototype,"form",void 0),e([b({form:{share:k,local:!0},name:""})],Q.prototype,"submitButton",void 0),e([C()],Q.prototype,"render",null),e([g()],Q.prototype,"submit",null),Q=e([q(["article-editor",A],{feature:{needs:[z,G,J,K,F,D,P]}})],Q),t.load(Q);//# sourceMappingURL=main.49756dbc.js.map
