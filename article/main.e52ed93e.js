import{a as t}from"../js/proc7ts/call-thru.3c1511df.js";import{D as e,n as s,i as o,t as r}from"../js/proc7ts/fun-events.14fbfae8.js";import{S as n,C as c,B as a,D as i,R as m,w as l}from"../js/wesib/wesib.ee41dcb9.js";import{_ as d}from"../js/helpers.e1623395.js";import{n as p,b as h}from"../js/core/auth.e885cffb.js";import{a as u}from"../js/core/api.051b94c3.js";import{a as f,I as g,i as b,S as j,O as C,d as x,N as y,P as _}from"../js/wesib/generic.02b8caaf.js";import{f as v,q as E,I as O,g as w,r as T,c as F,s as M,b as N}from"../js/proc7ts/input-aspects.5328dddc.js";import{C as k}from"../js/core.b7e43300.js";import{R as I,f as S,a as A}from"../js/core/loader.a83c93b0.js";import{c as D}from"../js/core/main.c1030649.js";import{A as R}from"../js/core/articles.4e4b211d.js";import{F as $,c as q,n as B,C as L}from"../js/follow-author-btn.component.c53ee60c.js";import{e as U}from"../js/hatsy/hten.dd7fdc57.js";import{A as H,D as P,E as Q}from"../js/article-buttons-support.feature.75e9971f.js";import{n as z,C as G,a as J}from"../js/current-article.7ee3e487.js";import{C as K,a as V}from"../js/core/comments.1cbe8937.js";import{C as W,U as X,F as Y}from"../js/core/input.d0dd574f.js";let Z=class{constructor(t){this._context=t,this.user=p,this.article=z;const e=t.get(h),s=t.get(f);e.user().tillOff(t).to((t=>this.user=t)).whenOff((()=>this.user=p)),s.get(G).tillOff(t).to((t=>this.article=t)).whenOff((()=>this.article=z))}render(){const{document:t}=this._context.get(a),e=t.createDocumentFragment();if(this.article.slug&&this.article.author.username===this.user.username){e.appendChild(t.createElement("conduit-edit-post-btn")).tabIndex=0;e.appendChild(t.createElement("conduit-delete-post-btn")).tabIndex=0}else{e.appendChild(t.createElement("conduit-follow-author-btn")).tabIndex=0;const s=e.appendChild(t.createElement("conduit-favorite-post-btn"));s.innerText="Favorite Post",s.tabIndex=0}return e}};d([n()],Z.prototype,"user",void 0),d([n()],Z.prototype,"article",void 0),d([I()],Z.prototype,"render",null),Z=d([c(["article-actions",k],{feature:{needs:[H,P,Q]}})],Z);class tt extends CustomEvent{}let et=class{constructor(t){this._context=t,this.article=z,this.user=p,this.form={};const e=t.get(h),s=t.get(f);e.user().tillOff(t).to((t=>this.user=t)).whenOff((()=>this.user=p)),s.get(G).tillOff(t).to((t=>this.article=t)).whenOff((()=>this.article=z)),s.get(g).tillOff(t).to((t=>this.form=t)).whenOff((()=>this.form={}))}render(){const t=this.articleComment;if(!t)return;const s=this._context.get(K),{document:o}=this._context.get(a),{author:r}=t,n="profile/#/"+encodeURIComponent(r.username),c=r.image?'<img src="http://i.imgur.com/Qr71crq.jpg" class="comment-author-img" />':"",i=S(new Date(t.createdAt)),m=o.createDocumentFragment(),l=m.appendChild(o.createElement("div"));l.className="card-body";const d=l.appendChild(o.createElement("p"));d.className="card-text",d.innerText=t.body;const p=m.appendChild(o.createElement("div"));p.className="card-footer",p.innerHTML=`\n<a href="${n}" class="comment-author">${c}</a>\n<a href="${n}" class="comment-author">${U(r.username)}</a>\n<span class="date-posted">${i}</span>`;const{control:h}=this.form,{slug:f}=this.article;if(this.user.username===r.username&&h&&f){const r=p.appendChild(o.createElement("span"));r.className="mod-options";const n=r.appendChild(o.createElement("button"));n.type="button",n.className="btn btn-sm",n.innerHTML='<i class="ion-trash-a"></i>',v(n,{form:h}),new e(n).on("click").just((()=>{h.aspect(E).submit((()=>u(s.deleteComment(f,t.id)))).then((()=>{this._context.dispatchEvent(new tt("conduit:comment",{bubbles:!0,detail:{removed:t.id}}))})).catch((t=>{t instanceof O?console.error("Failed to remove comment",...t.errors):console.error("Failed to remove comment",t)}))}))}return m}};d([i()],et.prototype,"articleComment",void 0),d([n()],et.prototype,"article",void 0),d([n()],et.prototype,"user",void 0),d([I({comment:"COMMENT"})],et.prototype,"render",null),et=d([c(["article-comment",k])],et);let st=class{constructor(e){this._context=e,this.comments=[];const r=e.get(K),n=this._context.get(f);this._context.on("conduit:comment").to((({detail:{added:t,removed:e}})=>{this.comments=t?[t,...this.comments]:this.comments.filter((t=>t.id!==e))}));let c=z;n.get(G).tillOff(e).thru_((e=>e.slug&&e.slug!==c.slug?(c=e,s(r.articleComments(e.slug))):t)).to((t=>{this.response=t,t.ok&&(this.comments=t.body.comments)}));const a=w({});o(a).needs(e),b(e,a)}render(){const{document:t}=this._context.get(a),{contentRoot:e}=this._context,s=t.createRange();return s.setStartAfter(e.appendChild(t.createComment("[COMMENTS["))),s.setEndBefore(e.appendChild(t.createComment("]COMMENTS]"))),()=>{s.deleteContents();const{comments:e}=this;if(!e.length)return;const o=t.createDocumentFragment();e.forEach((e=>{o.appendChild(t.createElement("conduit-article-comment")).articleComment=e})),s.insertNode(o)}}};d([A({comment:"COMMENTS"})],st.prototype,"response",void 0),d([n()],st.prototype,"comments",void 0),d([m()],st.prototype,"render",null),st=d([c(["article-comments",k],{feature:{needs:[et,V,W]}})],st);let ot=class{constructor(t){this._context=t;const e=t.get(R),s=this._context.get(f);o(t).whenOff((()=>this.content=void 0)),s.get(G).tillOff(t).to((s=>{s.slug?e.htmlContents(s).then((e=>{t.connected&&(this.content=e)})).catch((e=>{t.connected&&(this.content=void 0,console.error("Failed to parse article",e))})):this.content=void 0}))}render(){return this.content}};d([n()],ot.prototype,"content",void 0),d([I({comment:"ARTICLE(content)"})],ot.prototype,"render",null),ot=d([c(["article-content",k])],ot);let rt=class{};rt=d([c(["article-comment-text",k],X({select:"textarea",makeControl:({node:t,aspects:e})=>T(t.element,{aspects:e}).setup(F,(t=>t.by(M())))}),j("text"))],rt);let nt=class{constructor(t){this._context=t,this.article=z,this.user=p,this._commentService=t.get(K);const e=t.get(h),s=t.get(f);e.user().tillOff(t).to((t=>this.user=t)).whenOff((()=>this.user=p)),s.get(G).to((t=>this.article=t)).whenOff((()=>this.article=z))}render(){const{element:t}=this._context,e=t.querySelector(".comment-author-img");return()=>{this.user.email&&this.user.image?null==e||e.setAttribute("src",this.user.image):null==e||e.removeAttribute("src")}}submit({control:t}){const{article:e}=this;e.slug&&(t.aspect(N).markEdited(),t.aspect(E).submit((t=>u(this._commentService.addComment(e.slug,t.text)))).then((e=>{t.it={text:""},t.aspect(N).markTouched(!1),t.aspect(E).reset(),this._context.dispatchEvent(new tt("conduit:comment",{bubbles:!0,detail:{added:e}}))})).catch((t=>{t instanceof O?console.error("Failed to comment",...t.errors):console.error("Failed to comment",t)})))}};d([n()],nt.prototype,"user",void 0),d([m()],nt.prototype,"render",null),d([C()],nt.prototype,"submit",null),nt=d([c(["new-article-comment",k],{feature:{needs:[rt,V]}},Y({emptyModel:{text:""}}))],nt);let ct=class{constructor(t){this._context=t,this._response=r();const e=t.get(R),s=t.get(y),o=this._context.get(f),n=(new J).byArticles(this._response.read().keepThru_((t=>t&&t.ok?t.body:z))),c=q(this._response.read().keepThru_((t=>t&&t.ok?t.body.author:B)));o.provide({a:G,is:n}),o.provide({a:L,is:c}),t.whenConnected((()=>{s.read().tillOff(t).consume((t=>{const s=decodeURIComponent(t.get(_).pathname.substring(1));return e.article(s).to((t=>this.response=t))})),t.on("conduit:article").just((()=>{s.open("").catch(console.error)}))}))}get response(){return this._response.it}set response(t){this._response.it=t}render(){const{document:t}=this._context.get(a);return()=>{const{response:e}=this;e&&e.ok&&(t.getElementById("article:title").innerText=e.body.title)}}};d([n(),A()],ct.prototype,"response",null),d([m({on:l("response")})],ct.prototype,"render",null),ct=d([c(["article",k],{feature:{needs:[st,ot,H,Z,$,nt]}},x())],ct),D.load(ct);//# sourceMappingURL=main.e52ed93e.js.map
