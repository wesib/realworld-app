import{c as t}from"../js/core/main.34ec5e59.js";import{_ as e}from"../js/helpers.e1623395.js";import{w as s,c as r,x as o,v as i,m as a,b as n,u as c,I as l}from"../js/frontmeans/input-aspects.f8acf040.js";import{I as d,s as p,m,l as u,j as h,D as f,b as j}from"../js/proc7ts/fun-events.3257bf57.js";import{S as b,j as y,h as v,O as g,N as S,i as w,P as _,c as q}from"../js/wesib/generic.daf122de.js";import{C as x,S as C,R as k,l as L,B as I}from"../js/wesib/wesib.c496f508.js";import{C as U}from"../js/core.10059585.js";import{a as A}from"../js/core/api.51544e65.js";import{A as B,a as D}from"../js/core/articles.101ad419.js";import{b as E}from"../js/core/auth.3f3b4c69.js";import{F,a as O,n as P}from"../js/core/feed.d56f0914.js";import{s as R,C as M}from"../js/core/forms.d987144f.js";import{M as N,i as T,a as H}from"../js/core/loader.b1c22415.js";import"../js/core/layout.43733f82.js";import"../js/frontmeans/namespace-aliaser.9467f14d.js";import"../js/frontmeans/dom-events.1d1a7091.js";import"../js/proc7ts/primitives.38e5298b.js";import"../js/proc7ts/supply.9762ee6d.js";import"../js/frontmeans/render-scheduler.6f331202.js";import"../js/proc7ts/push-iterator.c8328864.js";import"../js/proc7ts/call-thru.f4f68410.js";import"../js/proc7ts/delta-set.d5d9e832.js";import"../js/proc7ts/context-values.24d38e04.js";import"../js/hatsy/http-header-value.851567fb.js";import"../js/proc7ts/workbench.31425b55.js";import"../js/frontmeans/httongue.6b868a5b.js";import"../js/lib/dompurify.f5eadf9f.js";import"../js/lib/marked.9d494571.js";let z=class{constructor(t){t.whenSettled((({element:t})=>{this.body=y.by((e=>s(t.querySelector("textarea"),e).setup(r,(t=>t.by(o())))))}))}};e([b()],z.prototype,"body",void 0),z=e([x(["article-body",U])],z);let G=class{constructor(t){t.whenSettled((({element:t})=>{this.description=y.by((e=>s(t.querySelector("input"),e).setup(r,(t=>t.by(o())))))}))}};e([b()],G.prototype,"description",void 0),G=e([x(["article-description",U])],G);let J=class{constructor(t){this._context=t,this.tags=[],t.get(F).tags.do(d(t))(((...t)=>this.tags=t)).whenOff((()=>this.tags=[]));const e=t.get(L);t.whenSettled((({element:s})=>{e.whenDefined(N)((({elementDef:{tagName:t}})=>{this.tagList=y.by((e=>T(s.querySelector(t),e)))})).needs(t)}))}render(){const{document:t}=this._context.get(I),{element:e}=this._context,s=e.querySelector("datalist");return()=>{s.innerHTML="",this.tags.forEach((e=>{s.appendChild(t.createElement("option")).value=e+" "}))}}};e([C()],J.prototype,"tags",void 0),e([b()],J.prototype,"tagList",void 0),e([k()],J.prototype,"render",null),J=e([x(["article-tag-editor",U],{feature:{needs:[O,N]}})],J);let K=class{constructor(t){t.whenSettled((({element:t})=>{this.title=y.by((e=>s(t.querySelector("input"),e).setup(r,(t=>t.by(o())))))}))}};e([b()],K.prototype,"title",void 0),K=e([x(["article-title",U])],K);let Q=class{constructor(t){this._context=t,this.article=P,this._navigation=t.get(S),this._articleService=t.get(B);const e=t.get(E);t.supply.whenOff((()=>{this.loadStatus=void 0,this.article=P})),t.whenSettled((({element:t})=>{this.form=w.by((t=>i({title:"",description:"",body:"",tagList:[]},t)),(e=>a(t.querySelector("form"),e))),this.submitButton=R(t.querySelector("button"))})),t.whenConnected((()=>{this._navigation.read.do(p(t),m((t=>decodeURIComponent(t.get(_).pathname.substring(1)))),u((t=>h({user:e.requireUser,loaded:t?f(this._articleService.article(t),(()=>[])):j({ok:!0})}))))((({user:[t],loaded:[e]})=>{var s,r,o;if(!t.username)return void(this.loadStatus=t.failure?{ok:!1,errors:t.failure.errors}:void 0);if(!e)return void(this.loadStatus=void 0);if(!e.ok)return void(this.loadStatus={ok:!1,errors:e.errors});this.loadStatus=e,this.article=null!==(s=e.body)&&void 0!==s?s:P;const i=null===(r=this.form)||void 0===r?void 0:r.control;i&&(i.it=null!==(o=e.body)&&void 0!==o?o:{title:"",description:"",body:"",tagList:[]})})).needs(t)}))}render(){const{element:t}=this._context,e=t.querySelector("button");return()=>{e.innerText=this.article.slug?"Update Post":"Create Post"}}submit({control:t}){t.aspect(n).markEdited(),t.aspect(c).submit((t=>A(this.article.slug?this._articleService.updateArticle(this.article.slug,t):this._articleService.createArticle(t)))).then((t=>this._navigation.with(_,encodeURIComponent(t.slug)).open("article/"))).catch((t=>{t instanceof l?console.error("Failed to save article",...t.errors):console.error("Failed to save article",t)}))}};e([H()],Q.prototype,"loadStatus",void 0),e([C()],Q.prototype,"article",void 0),e([v()],Q.prototype,"form",void 0),e([b({form:{share:q,local:!0},name:""})],Q.prototype,"submitButton",void 0),e([k()],Q.prototype,"render",null),e([g()],Q.prototype,"submit",null),Q=e([x(["article-editor",U],{feature:{needs:[z,G,J,K,D,M,O]}})],Q),t.load(Q);//# sourceMappingURL=main.a015c15a.js.map
