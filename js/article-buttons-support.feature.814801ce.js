import{S as t,R as e,C as r,B as s,F as o}from"./wesib/wesib.3bdcccfe.js";import{_ as n}from"./helpers.920c7f83.js";import{g as a,P as i,f as c,h as l,a as d,N as u}from"./wesib/generic.6c2cdd2b.js";import{C as h}from"./core.c852ba8c.js";import{R as m}from"./core/loader.200fc290.js";import{A as p,a as g}from"./core/articles.0838ddd8.js";import{f}from"./core/feed.7f124a84.js";import{C as v,n as b}from"./current-article.3de1eaaf.js";const x=new Intl.DateTimeFormat("en-US",{month:"long",day:"numeric"}),C=new Intl.DateTimeFormat("en-US",{year:"numeric",month:"long",day:"numeric"});function y(t){return((new Date).getFullYear()===t.getFullYear()?x:C).format(t)}const w=new class extends a{create(t,e){const r=this.byDefault(t);return r.put(e),r}byDefault(t){return{get(){const{searchParams:e,pathname:r}=t.get(i),s=r.indexOf("/",1),o=decodeURIComponent(s<0?r.substring(1):r.substring(1,s));let n,a;return s>0&&"favorite"===r.substring(s+1)?a=o:n=o,{tag:e.get("tag")||void 0,author:n,favorited:a,limit:parseInt(e.get("limit")||"",10)||void 0,offset:parseInt(e.get("offset")||"",10)||void 0}},put(e){const{favorited:r,author:s=""}=e,o=new URL(t.get(i).href);o.pathname=r?`/${encodeURIComponent(r)}/favorite`:`/${encodeURIComponent(s)}`;const n=f(Object.assign(Object.assign({},e),{favorited:void 0,author:void 0})).toString();o.search=n?"?"+n:"",t.put(i,o)}}}};let E=class{constructor(t){this._context=t,this.article={},t.get(d).get(v).to(t=>this.article=t)}render(){const t=this._context.get(u),{document:e}=this._context.get(s),{contentRoot:r}=this._context,o=e.createDocumentFragment(),n=o.appendChild(e.createElement("a")),a=o.appendChild(e.createElement("div"));a.className="info";const i=a.appendChild(e.createElement("a"));i.className="author";const c=a.appendChild(e.createElement("time"));return c.className="date",r.appendChild(o),()=>{var e,r;const s=this.article;let o="",a="",l="",d="",u="";if(s.slug){const{author:n}=s;o=(null===(r=null===(e=t.with(w,{author:n.username}).pretend("profile/"))||void 0===e?void 0:e.url)||void 0===r?void 0:r.href)||"",a=n.image?`<img src="${encodeURI(n.image)}"/>`:"",l=n.username,d=s.createdAt,u=y(new Date(s.createdAt))}n.href=o,n.innerHTML=a,i.href=o,i.innerText=l,c.innerText=u,d?c.setAttribute("datetime",d):c.removeAttribute("datetime")}}};n([t()],E.prototype,"article",void 0),n([e()],E.prototype,"render",null),E=n([r(["article-author",h],{feature:{needs:l}},c())],E);const _=[];let j=class{constructor(t){this._context=t,this.tags=_,t.get(d).get(v).to(t=>this.tags=t.slug?t.tagList:_).whenOff(()=>this.tags=[])}render(){if(!this.tags.length)return;const{document:t}=this._context.get(s),e=t.createElement("ul");return this.tags.forEach(r=>{const s=e.appendChild(t.createElement("li")).appendChild(t.createElement("a"));s.href=`#/?tag=${encodeURIComponent(r)}`,s.innerText=r}),e}};n([t()],j.prototype,"tags",void 0),n([m()],j.prototype,"render",null),j=n([r(["article-tags",h],c())],j);class A extends CustomEvent{}let D=class{constructor(t){this._context=t,this.article=b;const e=t.get(p);t.get(d).get(v).to(t=>this.article=t).whenOff(()=>this.article=b),t.on("click").just(()=>{this.article.slug&&function(r){if(!confirm("Are you sure you want to delete this article?"))return;e.deleteArticle(r).once(e=>{e.ok?t.dispatchEvent(new A("conduit:article",{bubbles:!0,detail:{removed:r}})):console.error("Failed to remove article",e.errors)})}(this.article.slug)})}render(){const{article:t}=this;if(!t.slug)return;const{document:e}=this._context.get(s),r=e.createDocumentFragment();return r.appendChild(e.createElement("i")).className="ion-trash-a",r.append(" Delete Article"),r}};n([t()],D.prototype,"article",void 0),n([m()],D.prototype,"render",null),D=n([r(["delete-post-btn",h],{feature:{needs:g}})],D);let F=class{constructor(t){this._context=t,this.article=b;const e=t.get(u);t.get(d).get(v).to(t=>this.article=t).whenOff(()=>this.article=b),this._context.on("click").to(()=>{var t;this.article.slug&&(t=this.article.slug,e.with(i,encodeURIComponent(t)).open("editor/").catch(t=>console.error("Failed to edit article",t)))})}render(){const{article:t}=this;if(!t.slug)return;const{document:e}=this._context.get(s),r=e.createDocumentFragment();return r.appendChild(e.createElement("i")).className="ion-edit",r.append(" Edit Article"),r}};n([t()],F.prototype,"article",void 0),n([m()],F.prototype,"render",null),F=n([r(["edit-post-btn",h],{feature:{needs:l}})],F);let R=class{constructor(t){this._context=t,this.article=b;const e=t.get(d),r=t.get(p);e.get(v).to(t=>{this.article=t}),t.on("click").to(()=>{const{article:t}=this;if(t.slug){const e=!t.favorited;t.update(Object.assign(Object.assign({},t),{favorited:e})),r.likeArticle(t.slug,e).to(e=>{this.article.slug&&(e.ok?this.article.update(e.body):(this.article.update(t),console.error(`Failed to like article ${t.slug}`,e.errors)))})}})}render(){const{contentRoot:t}=this._context,{document:e}=this._context.get(s),r=e.createElement("i");t.insertBefore(r,t.childNodes[0]);const o=t.appendChild(e.createElement("span"));return o.className="counter",()=>{r.className=this.article.slug&&this.article.favorited?"ion-heart":"ion-ios-heart-outline",o.innerText=this.article.slug&&this.article.favoritesCount?String(this.article.favoritesCount):"",t.className=this.article.slug&&this.article.favorited?"btn-success":"btn-outline-success"}}};n([t()],R.prototype,"article",void 0),n([e()],R.prototype,"render",null),R=n([r(["favorite-post-btn",h],{feature:{needs:g}})],R);let I=class{};I=n([o({needs:[E,j,D,F,R]})],I);export{I as A,D,F as E,w as P,y as f};//# sourceMappingURL=article-buttons-support.feature.814801ce.js.map
