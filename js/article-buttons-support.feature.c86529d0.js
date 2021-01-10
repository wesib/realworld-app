import{o as e}from"./proc7ts/fun-events.26e814e4.js";import{s as t}from"./frontmeans/dom-events.272f64a1.js";import{S as r,R as s,C as o,B as i,F as a}from"./wesib/wesib.a2d60763.js";import{_ as n}from"./helpers.e1623395.js";import{f as c,P as l,d,g as u,a as h,N as p}from"./wesib/generic.fb9d31ab.js";import{C as m}from"./core.c152f8fe.js";import{f,R as g}from"./core/loader.d22f956e.js";import{A as v,a as b}from"./core/articles.34a938a1.js";import{f as x}from"./core/feed.298d7830.js";import{C,n as E}from"./current-article.c9b2c40d.js";const y=new class extends c{create(e,t){const r=this.byDefault(e);return r.put(t),r}byDefault(e){return{get(){const{searchParams:t,pathname:r}=e.get(l),s=r.indexOf("/",1),o=decodeURIComponent(s<0?r.substring(1):r.substring(1,s));let i,a;return s>0&&"favorite"===r.substr(s+1)?a=o:i=o,{tag:t.get("tag")||void 0,author:i,favorited:a,limit:parseInt(t.get("limit")||"",10)||void 0,offset:parseInt(t.get("offset")||"",10)||void 0}},put(t){const{favorited:r,author:s=""}=t,o=new URL(e.get(l).href);o.pathname=r?`/${encodeURIComponent(r)}/favorite`:`/${encodeURIComponent(s)}`;const i=x({...t,favorited:void 0,author:void 0}).toString();o.search=i?"?"+i:"",e.put(l,o)}}}};let _=class{constructor(e){this._context=e,this.article={};e.get(h).get(C)((e=>this.article=e))}render(){const e=this._context.get(p),{document:t}=this._context.get(i),{contentRoot:r}=this._context,s=t.createDocumentFragment(),o=s.appendChild(t.createElement("a")),a=s.appendChild(t.createElement("div"));a.className="info";const n=a.appendChild(t.createElement("a"));n.className="author";const c=a.appendChild(t.createElement("time"));return c.className="date",r.appendChild(s),()=>{var t,r;const s=this.article;let i="",a="",l="",d="",u="";if(s.slug){const{author:o}=s;i=(null===(r=null===(t=e.with(y,{author:o.username}).pretend("profile/"))||void 0===t?void 0:t.url)||void 0===r?void 0:r.href)||"",a=o.image?`<img src="${encodeURI(o.image)}"/>`:"",l=o.username,d=s.createdAt,u=f(new Date(s.createdAt))}o.href=i,o.innerHTML=a,n.href=i,n.innerText=l,c.innerText=u,d?c.setAttribute("datetime",d):c.removeAttribute("datetime")}}};n([r()],_.prototype,"article",void 0),n([s()],_.prototype,"render",null),_=n([o(["article-author",m],{feature:{needs:u}},d())],_);const w=[];let A=class{constructor(e){this._context=e,this.tags=w;e.get(h).get(C)((e=>this.tags=e.slug?e.tagList:w)).whenOff((()=>this.tags=[]))}render(){if(!this.tags.length)return;const{document:e}=this._context.get(i),t=e.createElement("ul");return this.tags.forEach((r=>{const s=t.appendChild(e.createElement("li")).appendChild(e.createElement("a"));s.href=`#/?tag=${encodeURIComponent(r)}`,s.innerText=r})),t}};n([r()],A.prototype,"tags",void 0),n([g()],A.prototype,"render",null),A=n([o(["article-tags",m],d())],A);class R extends CustomEvent{}let j=class{constructor(r){this._context=r,this.article=E;const s=r.get(v);r.get(h).get(C)((e=>this.article=e)).whenOff((()=>this.article=E)),r.on("click").do(t)((()=>{this.article.slug&&function(t){if(!confirm("Are you sure you want to delete this article?"))return;s.deleteArticle(t).do(e)((e=>{e.ok?r.dispatchEvent(new R("conduit:article",{bubbles:!0,detail:{removed:t}})):console.error("Failed to remove article",e.errors)}))}(this.article.slug)}))}render(){const{article:e}=this;if(!e.slug)return;const{document:t}=this._context.get(i),r=t.createDocumentFragment();return r.appendChild(t.createElement("i")).className="ion-trash-a",r.append(" Delete Article"),r}};n([r()],j.prototype,"article",void 0),n([g()],j.prototype,"render",null),j=n([o(["delete-post-btn",m],{feature:{needs:b}})],j);let N=class{constructor(e){this._context=e,this.article=E;const t=e.get(p);e.get(h).get(C)((e=>this.article=e)).whenOff((()=>this.article=E)),this._context.on("click")((()=>{var e;this.article.slug&&(e=this.article.slug,t.with(l,encodeURIComponent(e)).open("editor/").catch((e=>console.error("Failed to edit article",e))))}))}render(){const{article:e}=this;if(!e.slug)return;const{document:t}=this._context.get(i),r=t.createDocumentFragment();return r.appendChild(t.createElement("i")).className="ion-edit",r.append(" Edit Article"),r}};n([r()],N.prototype,"article",void 0),n([g()],N.prototype,"render",null),N=n([o(["edit-post-btn",m],{feature:{needs:u}})],N);let D=class{constructor(e){this._context=e,this.article=E;const t=e.get(h),r=e.get(v);t.get(C)((e=>{this.article=e})),e.on("click")((()=>{const{article:e}=this;if(e.slug){const t=!e.favorited;e.update({...e,favorited:t}),r.likeArticle(e.slug,t)((t=>{this.article.slug&&(t.ok?this.article.update(t.body):(this.article.update(e),console.error(`Failed to like article ${e.slug}`,t.errors)))}))}}))}render(){const{contentRoot:e,element:t}=this._context,{document:r}=this._context.get(i),s=r.createElement("i");e.insertBefore(s,e.childNodes[0]);const o=e.appendChild(r.createElement("span"));return o.className="counter",()=>{s.className=this.article.slug&&this.article.favorited?"ion-heart":"ion-ios-heart-outline",o.innerText=this.article.slug&&this.article.favoritesCount?String(this.article.favoritesCount):"",t.className=this.article.slug&&this.article.favorited?"btn-success":"btn-outline-success"}}};n([r()],D.prototype,"article",void 0),n([s()],D.prototype,"render",null),D=n([o(["favorite-post-btn",m],{feature:{needs:b}})],D);let I=class{};I=n([a({needs:[_,A,j,N,D]})],I);export{I as A,j as D,N as E,y as P};//# sourceMappingURL=article-buttons-support.feature.c86529d0.js.map
