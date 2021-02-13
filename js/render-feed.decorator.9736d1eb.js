import{S as e,C as t,a as s}from"./proc7ts/context-values.20584faa.js";import{s as r,i as n,t as a,m as i,d as o,E as c}from"./proc7ts/fun-events.2a5b87d8.js";import{n as l}from"./proc7ts/primitives.d6f0dd1c.js";import{f as d,P as p,d as u,a as f,N as h}from"./wesib/generic.2dcf3479.js";import{S as m,D as g,C as b,B as C,v as _,R as v,d as x,f as w,g as y,e as E,h as j}from"./wesib/wesib.8c9ee002.js";import{f as q,n as P,F as D,a as R,b as A}from"./core/feed.aabbc2ee.js";import{R as I,b as N,a as S}from"./core/loader.9029aa45.js";import{_ as F}from"./helpers.e1623395.js";import{C as M}from"./core.10059585.js";import{r as k}from"./core/util.ed5e3b67.js";import{n as T,b as B}from"./core/auth.97776b50.js";import{A as O}from"./article-buttons-support.feature.24f619fe.js";import{a as U,C as $}from"./current-article.5d42c2d4.js";const H=new class extends d{create(e,t){const s=this.byDefault(e);return s.put(t),s}byDefault(e){return{get(){const{searchParams:t,pathname:s}=e.get(p);return{feed:"/personal-feed"===s?s:void 0,tag:t.get("tag")||void 0,limit:parseInt(t.get("limit")||"",10)||void 0,offset:parseInt(t.get("offset")||"",10)||void 0}},put(t){const{feed:s}=t,r=new URL(e.get(p).href);r.pathname="/personal-feed"===s?s:"";const n=q(t).toString();r.search=n?"?"+n:"",e.put(p,r)}}}};let K=class{constructor(e){this._context=e,this._article=new U,this.user=T;const t=e.get(B),s=e.get(f);t.user.do(r(e))((e=>this.user=e)).whenOff((()=>this.user=T)),s.provide({a:$,is:this._article.read})}get article(){return this._article.it}set article(e){this._article.set(e)}postMeta(){if(!this.article.slug)return;const{author:e}=this.article,{document:t}=this._context.get(C),s=t.createDocumentFragment(),r=s.appendChild(t.createElement("div"));r.className="post-meta";const n=r.appendChild(t.createElement("conduit-article-author"));if(k(n,this._context),this.user.username===e.username){const e=r.appendChild(t.createElement("conduit-edit-post-btn"));e.tabIndex=0,k(e,this._context);const s=r.appendChild(t.createElement("conduit-delete-post-btn"));s.tabIndex=0,k(s,this._context)}else{const e=r.appendChild(t.createElement("conduit-favorite-post-btn"));e.tabIndex=0,k(e,this._context)}const a=s.appendChild(t.createElement("a"));a.className="preview-link",a.setAttribute("href",`article/#/${encodeURIComponent(this.article.slug)}`);a.appendChild(t.createElement("h1")).innerText=this.article.title;a.appendChild(t.createElement("p")).innerText=this.article.description;a.appendChild(t.createElement("span")).innerText="Read more...";const i=a.appendChild(t.createElement("conduit-article-tags"));return k(i,this._context),s}};F([m()],K.prototype,"user",void 0),F([g({propertyKey:"feedArticle"})],K.prototype,"article",null),F([I()],K.prototype,"postMeta",null),K=F([b(["article-preview",M],{feature:{needs:[O]}},u({href(e){let t=e.target;for(;;){const e=t.getAttribute("href");if(null!=e)return e;const{parentNode:s}=t;if(!s||!_(s))return;t=s}}}))],K);const L=new e("feed-article-list",{byDefault:()=>P});let z=class{constructor(e){this._context=e,this.articles=P;e.get(f).get(L)((e=>this.articles=e)).whenOff((()=>this.articles=P))}render(){const e=this._context.get(C).document,t=e.createRange();return t.selectNodeContents(this._context.contentRoot),()=>{if(t.deleteContents(),!this.articles.articlesCount)return;const s=e.createDocumentFragment();this.articles.articles.forEach((t=>{const r=s.appendChild(e.createElement("conduit-article-preview"));r.feedArticle=t,k(r,this._context)})),t.insertNode(s)}}};F([m()],z.prototype,"articles",void 0),F([v()],z.prototype,"render",null),z=F([b(["article-list",M],{feature:{needs:K}})],z);const G=new e("feed-request-page-param",{byDefault:()=>H});let J=class{constructor(e){this._feedPaging={};const t=e.get(f),s=e.get(h);e.whenConnected((()=>{n({param:t.get(G),page:s,list:t.get(L)}).do(r(e))((({param:[e],page:[t],list:[{articlesCount:r}]})=>{const n=t.get(e),{limit:a=20,offset:i=0}=n;this.feedPaging={totalPages:Math.ceil(r/a),currentPage:Math.floor(i/a),pageHref(t){var r;return(null===(r=s.with(e,{...n,offset:a*t}).pretend())||void 0===r?void 0:r.url.href)||""}}}))}))}get feedPaging(){return this._feedPaging}set feedPaging(e){this._feedPaging=e}};F([N()],J.prototype,"feedPaging",null),J=F([b(["feed-pager",M])],J);const Q=new s("render-feed-state"),V=Symbol("render-feed-state");class W{constructor(e,t){this.response=a(),this._request=a({}),e.supply.cuts(this._request);const s=e.get(R);this.response.on(((s,r)=>e.updateState(t,s,r))),e.get(f).provide({a:L,is:this.response.read.do(i((e=>(null==e?void 0:e.ok)?e.body:{articles:[],articlesCount:0})))}),this._request.read.do(o((t=>{this.response.it=void 0;const r=new c;return e.supply.cuts(r),s.articles(t)((e=>r.send(e))).needs(e),r.on})))((e=>this.response.it=e)),e.on("conduit:article")((()=>this._request.it={...this._request.it}))}static get[t](){return Q}get request(){return this._request.it}set request(e){const t=this.request;A(e,t)||(this._request.it=e)}}function X(e={}){const{requestParam:t,render:s}=e;return x((({get:e,set:r,key:n})=>{const a=[j,V,n],i=w.fulfill({on:a},s);return{componentDef:y.all({feature:{needs:[z,J,D]},define(e){e.perComponent({a:W,by:e=>new W(e,a)}),t&&e.whenComponent((e=>{e.get(f).provide({a:G,is:t})}))}},S({render:i,comment:`FEED(${String(n)})`}).By((function(e){return E.of(e).get(W).response.it}),n),v(i).As((function(){const e=E.of(this),{contentRoot:t}=e,s=e.get(C).document;return t.appendChild(s.createElement("conduit-article-list")),t.appendChild(s.createElement("conduit-feed-pager")),l}),n)),get:e,set(e,t){r(e,t),E.of(e).get(W).request=t}}}))}export{H as P,X as R};//# sourceMappingURL=render-feed.decorator.9736d1eb.js.map
