import{S as t,R as e,C as r,B as s,F as o}from"./wesib/wesib.7b25387e.js";import{_ as i}from"./helpers.e1623395.js";import{f as a,P as n,d as c,g as l,a as d,N as u}from"./wesib/generic.69a57111.js";import{C as h}from"./core.21bb0d86.js";import{f as p,R as m}from"./core/loader.cc6fc823.js";import{A as f,a as g}from"./core/articles.8ffe47eb.js";import{f as v}from"./core/feed.9dafe1f9.js";import{C as b,n as x}from"./current-article.faae2888.js";const C=new class extends a{create(t,e){const r=this.byDefault(t);return r.put(e),r}byDefault(t){return{get(){const{searchParams:e,pathname:r}=t.get(n),s=r.indexOf("/",1),o=decodeURIComponent(s<0?r.substring(1):r.substring(1,s));let i,a;return s>0&&"favorite"===r.substr(s+1)?a=o:i=o,{tag:e.get("tag")||void 0,author:i,favorited:a,limit:parseInt(e.get("limit")||"",10)||void 0,offset:parseInt(e.get("offset")||"",10)||void 0}},put(e){const{favorited:r,author:s=""}=e,o=new URL(t.get(n).href);o.pathname=r?`/${encodeURIComponent(r)}/favorite`:`/${encodeURIComponent(s)}`;const i=v({...e,favorited:void 0,author:void 0}).toString();o.search=i?"?"+i:"",t.put(n,o)}}}};let E=class{constructor(t){this._context=t,this.article={};t.get(d).get(b).to((t=>this.article=t))}render(){const t=this._context.get(u),{document:e}=this._context.get(s),{contentRoot:r}=this._context,o=e.createDocumentFragment(),i=o.appendChild(e.createElement("a")),a=o.appendChild(e.createElement("div"));a.className="info";const n=a.appendChild(e.createElement("a"));n.className="author";const c=a.appendChild(e.createElement("time"));return c.className="date",r.appendChild(o),()=>{var e,r;const s=this.article;let o="",a="",l="",d="",u="";if(s.slug){const{author:i}=s;o=(null===(r=null===(e=t.with(C,{author:i.username}).pretend("profile/"))||void 0===e?void 0:e.url)||void 0===r?void 0:r.href)||"",a=i.image?`<img src="${encodeURI(i.image)}"/>`:"",l=i.username,d=s.createdAt,u=p(new Date(s.createdAt))}i.href=o,i.innerHTML=a,n.href=o,n.innerText=l,c.innerText=u,d?c.setAttribute("datetime",d):c.removeAttribute("datetime")}}};i([t()],E.prototype,"article",void 0),i([e()],E.prototype,"render",null),E=i([r(["article-author",h],{feature:{needs:l}},c())],E);const y=[];let _=class{constructor(t){this._context=t,this.tags=y;t.get(d).get(b).to((t=>this.tags=t.slug?t.tagList:y)).whenOff((()=>this.tags=[]))}render(){if(!this.tags.length)return;const{document:t}=this._context.get(s),e=t.createElement("ul");return this.tags.forEach((r=>{const s=e.appendChild(t.createElement("li")).appendChild(t.createElement("a"));s.href=`#/?tag=${encodeURIComponent(r)}`,s.innerText=r})),e}};i([t()],_.prototype,"tags",void 0),i([m()],_.prototype,"render",null),_=i([r(["article-tags",h],c())],_);class w extends CustomEvent{}let A=class{constructor(t){this._context=t,this.article=x;const e=t.get(f);t.get(d).get(b).to((t=>this.article=t)).whenOff((()=>this.article=x)),t.on("click").just((()=>{this.article.slug&&function(r){if(!confirm("Are you sure you want to delete this article?"))return;e.deleteArticle(r).once((e=>{e.ok?t.dispatchEvent(new w("conduit:article",{bubbles:!0,detail:{removed:r}})):console.error("Failed to remove article",e.errors)}))}(this.article.slug)}))}render(){const{article:t}=this;if(!t.slug)return;const{document:e}=this._context.get(s),r=e.createDocumentFragment();return r.appendChild(e.createElement("i")).className="ion-trash-a",r.append(" Delete Article"),r}};i([t()],A.prototype,"article",void 0),i([m()],A.prototype,"render",null),A=i([r(["delete-post-btn",h],{feature:{needs:g}})],A);let R=class{constructor(t){this._context=t,this.article=x;const e=t.get(u);t.get(d).get(b).to((t=>this.article=t)).whenOff((()=>this.article=x)),this._context.on("click").to((()=>{var t;this.article.slug&&(t=this.article.slug,e.with(n,encodeURIComponent(t)).open("editor/").catch((t=>console.error("Failed to edit article",t))))}))}render(){const{article:t}=this;if(!t.slug)return;const{document:e}=this._context.get(s),r=e.createDocumentFragment();return r.appendChild(e.createElement("i")).className="ion-edit",r.append(" Edit Article"),r}};i([t()],R.prototype,"article",void 0),i([m()],R.prototype,"render",null),R=i([r(["edit-post-btn",h],{feature:{needs:l}})],R);let N=class{constructor(t){this._context=t,this.article=x;const e=t.get(d),r=t.get(f);e.get(b).to((t=>{this.article=t})),t.on("click").to((()=>{const{article:t}=this;if(t.slug){const e=!t.favorited;t.update({...t,favorited:e}),r.likeArticle(t.slug,e).to((e=>{this.article.slug&&(e.ok?this.article.update(e.body):(this.article.update(t),console.error(`Failed to like article ${t.slug}`,e.errors)))}))}}))}render(){const{contentRoot:t,element:e}=this._context,{document:r}=this._context.get(s),o=r.createElement("i");t.insertBefore(o,t.childNodes[0]);const i=t.appendChild(r.createElement("span"));return i.className="counter",()=>{o.className=this.article.slug&&this.article.favorited?"ion-heart":"ion-ios-heart-outline",i.innerText=this.article.slug&&this.article.favoritesCount?String(this.article.favoritesCount):"",e.className=this.article.slug&&this.article.favorited?"btn-success":"btn-outline-success"}}};i([t()],N.prototype,"article",void 0),i([e()],N.prototype,"render",null),N=i([r(["favorite-post-btn",h],{feature:{needs:g}})],N);let j=class{};j=i([o({needs:[E,_,A,R,N]})],j);export{j as A,A as D,R as E,C as P};//# sourceMappingURL=article-buttons-support.feature.901e4d01.js.map
