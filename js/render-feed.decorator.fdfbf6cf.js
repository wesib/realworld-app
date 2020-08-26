import{n as e}from"./proc7ts/primitives.e0fbf82a.js";import{S as t,C as s,a as r}from"./proc7ts/context-values.019377b8.js";import{g as n,t as a,i,n as o}from"./proc7ts/fun-events.b7373782.js";import{S as c,D as l,C as p,B as d,s as u,R as f,d as h,f as m,g,e as b,h as _}from"./wesib/wesib.2061c30d.js";import{_ as C}from"./helpers.e1623395.js";import{n as v,b as x}from"./core/auth.16af802e.js";import{f as w,P as y,d as E,a as j,N as q}from"./wesib/generic.5a91af9a.js";import{C as P}from"./core.714cbb7b.js";import{R as D,b as R,a as A}from"./core/loader.46440e5c.js";import{r as I}from"./core/util.91facf72.js";import{f as N,n as S,F as k,a as F,b as M}from"./core/feed.a4bb9422.js";import{A as O}from"./article-buttons-support.feature.f74378f4.js";import{a as T,C as B}from"./current-article.dd749b9f.js";const U=new class extends w{create(e,t){const s=this.byDefault(e);return s.put(t),s}byDefault(e){return{get(){const{searchParams:t,pathname:s}=e.get(y);return{feed:"/personal-feed"===s?s:void 0,tag:t.get("tag")||void 0,limit:parseInt(t.get("limit")||"",10)||void 0,offset:parseInt(t.get("offset")||"",10)||void 0}},put(t){const{feed:s}=t,r=new URL(e.get(y).href);r.pathname="/personal-feed"===s?s:"";const n=N(t).toString();r.search=n?"?"+n:"",e.put(y,r)}}}};let H=class{constructor(e){this._context=e,this._article=new T,this.user=v;const t=e.get(x),s=e.get(j);t.user().tillOff(e).to(e=>this.user=e).whenOff(()=>this.user=v),s.provide({a:B,is:this._article})}get article(){return this._article.it}set article(e){this._article.set(e)}postMeta(){if(!this.article.slug)return;const{author:e}=this.article,{document:t}=this._context.get(d),s=t.createDocumentFragment(),r=s.appendChild(t.createElement("div"));r.className="post-meta";const n=r.appendChild(t.createElement("conduit-article-author"));if(I(n,this._context),this.user.username===e.username){const e=r.appendChild(t.createElement("conduit-edit-post-btn"));e.tabIndex=0,I(e,this._context);const s=r.appendChild(t.createElement("conduit-delete-post-btn"));s.tabIndex=0,I(s,this._context)}else{const e=r.appendChild(t.createElement("conduit-favorite-post-btn"));e.tabIndex=0,I(e,this._context)}const a=s.appendChild(t.createElement("a"));a.className="preview-link",a.setAttribute("href","article/#/"+encodeURIComponent(this.article.slug));a.appendChild(t.createElement("h1")).innerText=this.article.title;a.appendChild(t.createElement("p")).innerText=this.article.description;a.appendChild(t.createElement("span")).innerText="Read more...";const i=a.appendChild(t.createElement("conduit-article-tags"));return I(i,this._context),s}};C([c()],H.prototype,"user",void 0),C([l({propertyKey:"feedArticle"})],H.prototype,"article",null),C([D()],H.prototype,"postMeta",null),H=C([p(["article-preview",P],{feature:{needs:[O]}},E({href(e){let t=e.target;for(;;){const e=t.getAttribute("href");if(null!=e)return e;const{parentNode:s}=t;if(!s||!u(s))return;t=s}}}))],H);const K=new t("feed-article-list",{byDefault:()=>S});let L=class{constructor(e){this._context=e,this.articles=S;e.get(j).get(K).to(e=>this.articles=e).whenOff(()=>this.articles=S)}render(){const e=this._context.get(d).document,t=e.createRange();return t.selectNodeContents(this._context.contentRoot),()=>{if(t.deleteContents(),!this.articles.articlesCount)return;const s=e.createDocumentFragment();this.articles.articles.forEach(t=>{const r=s.appendChild(e.createElement("conduit-article-preview"));r.feedArticle=t,I(r,this._context)}),t.insertNode(s)}}};C([c()],L.prototype,"articles",void 0),C([f()],L.prototype,"render",null),L=C([p(["article-list",P],{feature:{needs:H}})],L);const $=new t("feed-request-page-param",{byDefault:()=>U});let z=class{constructor(e){this._feedPaging={};const t=e.get(j),s=e.get(q);e.whenConnected(()=>{n({param:t.get($),page:s,list:t.get(K)}).tillOff(e).to(({param:[e],page:[t],list:[{articlesCount:r}]})=>{const n=t.get(e),{limit:a=20,offset:i=0}=n;this.feedPaging={totalPages:Math.ceil(r/a),currentPage:Math.floor(i/a),pageHref(t){var r;return(null===(r=s.with(e,{...n,offset:a*t}).pretend())||void 0===r?void 0:r.url.href)||""}}})})}get feedPaging(){return this._feedPaging}set feedPaging(e){this._feedPaging=e}};C([R()],z.prototype,"feedPaging",null),z=C([p(["feed-pager",P])],z);const G=new r("render-feed-state"),J=Symbol("render-feed-state");class Q{constructor(e,t){this.response=a(),this._request=a({}),i(e).cuts(this._request);const s=e.get(F);this.response.on((s,r)=>e.updateState(t,s,r)),e.get(j).provide({a:K,is:this.response.read().keepThru_(e=>(null==e?void 0:e.ok)?e.body:{articles:[],articlesCount:0})}),this._request.read().thru_(e=>(this.response.it=void 0,o(s.articles(e)))).to(e=>this.response.it=e),e.on("conduit:article").to(()=>this._request.it={...this._request.it})}static get[s](){return G}get request(){return this._request.it}set request(e){const t=this.request;M(e,t)||(this._request.it=e)}}function V(t={}){const{requestParam:s,render:r}=t;return h(({get:t,set:n,key:a})=>{const i=[_,J,a],o=m.fulfill({on:i},r);return{componentDef:g.all({feature:{needs:[L,z,k]},define(e){e.perComponent({a:Q,by:e=>new Q(e,i)}),s&&e.whenComponent(e=>{e.get(j).provide({a:$,is:s})})}},A({render:o,comment:`FEED(${String(a)})`}).By((function(e){return b.of(e).get(Q).response.it}),a),f(o).As((function(){const t=b.of(this),{contentRoot:s}=t,r=t.get(d).document;return s.appendChild(r.createElement("conduit-article-list")),s.appendChild(r.createElement("conduit-feed-pager")),e}),a)),get:t,set(e,t){n(e,t),b.of(e).get(Q).request=t}}})}export{U as P,V as R};//# sourceMappingURL=render-feed.decorator.fdfbf6cf.js.map
