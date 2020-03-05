import{n as e}from"./lib/call-thru.00f7427a.js";import{d as t,a as s,S as r}from"./lib/context-values.eef19512.js";import{e as a,t as n,l as i}from"./lib/fun-events.5ba1262f.js";import{p as o,r as c,C as l,B as d,i as p,R as u,l as f,o as h,d as g}from"./wesib/wesib.c27beefd.js";import{_ as m}from"./helpers.920c7f83.js";import{n as b,a as C}from"./core/auth.9a3c67b8.js";import{P as v,c as w,a as _,b as y,N as j}from"./wesib/generic.e7a7b809.js";import{C as x}from"./core.f6946162.js";import{R as E,b as O,a as P}from"./core/loader.ba3f37d3.js";import{f as q,F as R,a as D,b as A}from"./core/feed.97566213.js";import{A as I}from"./index.d0b675e7.js";import{a as N,C as S}from"./current-article.10cd4166.js";const k=new class extends v{create(e,t){const s=this.byDefault(e);return s.put(t),s}byDefault(e){return{get(){const{searchParams:t,pathname:s}=e.get(w);return{feed:"/personal-feed"===s?s:void 0,tag:t.get("tag")||void 0,limit:parseInt(t.get("limit")||"",10)||void 0,offset:parseInt(t.get("offset")||"",10)||void 0}},put(t){const{feed:s}=t,r=new URL(e.get(w).href);r.pathname="/personal-feed"===s?s:"";const a=q(t).toString();r.search=a?"?"+a:"",e.put(w,r)}}}};let F=class{constructor(e){this._context=e,this._article=new N,this.user=b;const t=e.get(C),s=e.get(y);e.whenOn(e=>{t.user.tillOff(e)(e=>this.user=e).whenOff(()=>this.user=b);const r=s.provide({a:S,is:this._article});e.whenOff(r)})}get article(){return this._article.it}set article(e){this._article.set(e)}postMeta(){if(!this.article.slug)return;const{author:e}=this.article,{document:t}=this._context.get(d),s=t.createDocumentFragment(),r=s.appendChild(t.createElement("div"));r.className="post-meta",r.appendChild(t.createElement("conduit-article-author")),this.user.username===e.username?(r.appendChild(t.createElement("conduit-edit-post-btn")).tabIndex=0,r.appendChild(t.createElement("conduit-delete-post-btn")).tabIndex=0):r.appendChild(t.createElement("conduit-favorite-post-btn")).tabIndex=0;const a=s.appendChild(t.createElement("a"));return a.className="preview-link",a.setAttribute("href",`article/#/${encodeURIComponent(this.article.slug)}`),a.appendChild(t.createElement("h1")).innerText=this.article.title,a.appendChild(t.createElement("p")).innerText=this.article.description,a.appendChild(t.createElement("span")).innerText="Read more...",s}};m([o()],F.prototype,"user",void 0),m([c({propertyKey:"feedArticle"})],F.prototype,"article",null),m([E()],F.prototype,"postMeta",null),F=m([l(["article-preview",x],{feature:{needs:[I]}},_({href(e){let t=e.target;for(;;){const e=t.getAttribute("href");if(null!=e)return e;const{parentNode:s}=t;if(!s||!p(s))return;t=s}}}))],F);const M=new t("feed-article-list",{byDefault:()=>({articles:[],articlesCount:0})});let T=class{constructor(e){this._context=e,this.articles={articles:[],articlesCount:0};const t=e.get(y);e.whenOn(e=>{t.get(M).tillOff(e)(e=>this.articles=e)})}render(){const e=this._context.get(d).document,t=e.createRange();return t.selectNodeContents(this._context.contentRoot),()=>{if(t.deleteContents(),!this.articles.articlesCount)return;const s=e.createDocumentFragment();this.articles.articles.forEach(t=>{s.appendChild(e.createElement("conduit-article-preview")).feedArticle=t}),t.insertNode(s)}}};m([o()],T.prototype,"articles",void 0),m([u()],T.prototype,"render",null),T=m([l(["article-list",x],{feature:{needs:F}})],T);const B=new t("feed-request-page-param",{byDefault:()=>k});let U=class{constructor(e){this._feedPaging={};const t=e.get(y),s=e.get(j);e.whenOn(e=>{a({param:t.get(B),page:s,list:t.get(M)}).tillOff(e)(({param:[e],page:[t],list:[{articlesCount:r}]})=>{const a=t.get(e),{limit:n=20,offset:i=0}=a;this.feedPaging={totalPages:Math.ceil(r/n),currentPage:Math.floor(i/n),pageHref(t){var r;return(null===(r=s.with(e,Object.assign(Object.assign({},a),{offset:n*t})).pretend())||void 0===r?void 0:r.url.href)||""}}})})}get feedPaging(){return this._feedPaging}set feedPaging(e){this._feedPaging=e}};m([O()],U.prototype,"feedPaging",null),U=m([l(["feed-pager",x])],U);const $=new r("render-feed-state"),H=Symbol("render-feed-state");class K{constructor(e,t){this.response=n(),this._request=n({});const s=e.get(D);this.response.on((s,r)=>e.updateState(t,s,r)),e.get(y).provide({a:M,is:this.response.read.keep.thru_(e=>(null==e?void 0:e.ok)?e.body:{articles:[],articlesCount:0})}),e.whenOn(t=>{this._request.read.tillOff(t).thru_(e=>(this.response.it=void 0,i(s.articles(e))))(e=>this.response.it=e),e.on("conduit:article")(()=>this._request.it=Object.assign({},this._request.it))})}static get[s](){return $}get request(){return this._request.it}set request(e){const t=this.request;A(e,t)||(this._request.it=e)}}function L({requestParam:t}={}){return f(({get:s,set:r,key:a})=>{const n=[H,a];return{componentDef:h.all({feature:{needs:[T,U,R]},define(e){e.perComponent({a:K,by:e=>new K(e,n)}),t&&e.whenComponent(e=>{e.get(y).provide({a:B,is:t})})}},P({path:n,offline:!0,comment:`FEED(${String(a)})`}).By((function(e){return g.of(e).get(K).response.it}),a),u({path:n,offline:!0}).As((function(){const t=g.of(this),{contentRoot:s}=t,r=t.get(d).document;return s.appendChild(r.createElement("conduit-article-list")),s.appendChild(r.createElement("conduit-feed-pager")),e}),a)),get:s,set(e,t){r(e,t),g.of(e).get(K).request=t}}})}export{k as P,L as R};//# sourceMappingURL=render-feed.decorator.53a1ab8a.js.map
