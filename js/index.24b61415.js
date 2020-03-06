import{s as e,R as t,C as r,B as s,F as i}from"./wesib/wesib.1043e62e.js";import{_ as n}from"./helpers.920c7f83.js";import{P as o,c as a,a as c,d as l,b as d,N as h}from"./wesib/generic.8eaae636.js";import{C as u}from"./core.f6946162.js";import{f as p,R as f}from"./core/loader.ff943207.js";import{A as m,a as g}from"./core/articles.eae191d7.js";import{f as v}from"./core/feed.552b6854.js";import{C as b,n as x}from"./current-article.10cd4166.js";const C=new class extends o{create(e,t){const r=this.byDefault(e);return r.put(t),r}byDefault(e){return{get(){const{searchParams:t,pathname:r}=e.get(a),s=r.indexOf("/",1),i=decodeURIComponent(s<0?r.substring(1):r.substring(1,s));let n,o;return s>0&&"favorite"===r.substring(s+1)?o=i:n=i,{tag:t.get("tag")||void 0,author:n,favorited:o,limit:parseInt(t.get("limit")||"",10)||void 0,offset:parseInt(t.get("offset")||"",10)||void 0}},put(t){const{favorited:r,author:s=""}=t,i=new URL(e.get(a).href);i.pathname=r?`/${encodeURIComponent(r)}/favorite`:`/${encodeURIComponent(s)}`;const n=v(Object.assign(Object.assign({},t),{favorited:void 0,author:void 0})).toString();i.search=n?"?"+n:"",e.put(a,i)}}}};let w=class{constructor(e){this._context=e,this.article={};const t=e.get(d);e.whenOn(e=>{t.get(b).tillOff(e)(e=>this.article=e)})}render(){const e=this._context.get(h),{document:t}=this._context.get(s),{contentRoot:r}=this._context,i=t.createDocumentFragment(),n=i.appendChild(t.createElement("a")),o=i.appendChild(t.createElement("div"));o.className="info";const a=o.appendChild(t.createElement("a"));a.className="author";const c=o.appendChild(t.createElement("time"));return c.className="date",r.appendChild(i),()=>{var t,r;const s=this.article;let i="",o="",l="",d="",h="";if(s.slug){const{author:n}=s;i=(null===(r=null===(t=e.with(C,{author:n.username}).pretend("profile/"))||void 0===t?void 0:t.url)||void 0===r?void 0:r.href)||"",o=n.image?`<img src="${encodeURI(n.image)}"/>`:"",l=n.username,d=s.createdAt,h=p(new Date(s.createdAt))}n.href=i,n.innerHTML=o,a.href=i,a.innerText=l,c.innerText=h,d?c.setAttribute("datetime",d):c.removeAttribute("datetime")}}};n([e()],w.prototype,"article",void 0),n([t()],w.prototype,"render",null),w=n([r(["article-author",u],{feature:{needs:l}},c())],w);const O=[];let E=class{constructor(e){this._context=e,this.tags=O;const t=e.get(d);e.whenOn(e=>{t.get(b).tillOff(e)(e=>this.tags=e.slug?e.tagList:O).whenOff(()=>this.tags=[])})}render(){if(!this.tags.length)return;const{document:e}=this._context.get(s),t=e.createElement("ul");return this.tags.forEach(r=>{const s=t.appendChild(e.createElement("li")).appendChild(e.createElement("a"));s.href=`#/?tag=${encodeURIComponent(r)}`,s.innerText=r}),t}};n([e()],E.prototype,"tags",void 0),n([f()],E.prototype,"render",null),E=n([r(["article-tags",u],c())],E);class y extends CustomEvent{}let _=class{constructor(e){this._context=e,this.article=x;const t=e.get(m),r=e.get(d);e.whenOn(s=>{r.get(b).tillOff(s)(e=>this.article=e).whenOff(()=>this.article=x),e.on("click").just(()=>{this.article.slug&&function(r){if(!confirm("Are you sure you want to delete this article?"))return;t.deleteArticle(r).once(t=>{t.ok?e.dispatchEvent(new y("conduit:article",{bubbles:!0,detail:{removed:r}})):console.error("Failed to remove article",t.errors)})}(this.article.slug)})})}render(){const{article:e}=this;if(!e.slug)return;const{document:t}=this._context.get(s),r=t.createDocumentFragment();return r.appendChild(t.createElement("i")).className="ion-trash-a",r.append(" Delete Article"),r}};n([e()],_.prototype,"article",void 0),n([f()],_.prototype,"render",null),_=n([r(["delete-post-btn",u],{feature:{needs:g}})],_);let j=class{constructor(e){this._context=e,this.article=x;const t=e.get(h),r=e.get(d);e.whenOn(e=>{r.get(b).tillOff(e)(e=>this.article=e).whenOff(()=>this.article=x),this._context.on("click")(()=>{var e;this.article.slug&&(e=this.article.slug,t.with(a,encodeURIComponent(e)).open("editor/").catch(e=>console.error("Failed to edit article",e)))}).needs(e)})}render(){const{article:e}=this;if(!e.slug)return;const{document:t}=this._context.get(s),r=t.createDocumentFragment();return r.appendChild(t.createElement("i")).className="ion-edit",r.append(" Edit Article"),r}};n([e()],j.prototype,"article",void 0),n([f()],j.prototype,"render",null),j=n([r(["edit-post-btn",u],{feature:{needs:l}})],j);let A=class{constructor(e){this._context=e,this.article=x;const t=e.get(d),r=e.get(m);e.whenOn(e=>{t.get(b).tillOff(e)(e=>{this.article=e})}),e.on("click")(()=>{const{article:e}=this;if(e.slug){const t=!e.favorited;e.update(Object.assign(Object.assign({},e),{favorited:t})),r.likeArticle(e.slug,t)(t=>{this.article.slug&&(t.ok?this.article.update(t.body):(this.article.update(e),console.error(`Failed to like article ${e.slug}`,t.errors)))})}})}render(){const{contentRoot:e}=this._context,{document:t}=this._context.get(s),r=t.createElement("i");e.insertBefore(r,e.childNodes[0]);const i=e.appendChild(t.createElement("span"));return i.className="counter",()=>{r.className=this.article.slug&&this.article.favorited?"ion-heart":"ion-ios-heart-outline",i.innerText=this.article.slug&&this.article.favoritesCount?String(this.article.favoritesCount):"",e.className=this.article.slug&&this.article.favorited?"btn-success":"btn-outline-success"}}};n([e()],A.prototype,"article",void 0),n([t()],A.prototype,"render",null),A=n([r(["favorite-post-btn",u],{feature:{needs:g}})],A);let R=class{};R=n([i({needs:[w,E,_,j,A]})],R);export{R as A,_ as D,j as E,C as P};//# sourceMappingURL=index.24b61415.js.map
