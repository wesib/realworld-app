import{g as e}from"../js/lib/call-thru.00f7427a.js";import{D as t,l as s,g as o,t as r}from"../js/lib/fun-events.5ba1262f.js";import{s as n,p as c,C as a,B as i,R as m,u as l}from"../js/wesib/wesib.698f6f57.js";import{_ as d}from"../js/helpers.920c7f83.js";import{n as p,a as h}from"../js/core/auth.9c82fb41.js";import{a as u}from"../js/core/api.75ae058d.js";import{b as f,c as g,i as b,S as j,O as C,a as _,N as x,P as y}from"../js/wesib/generic.0655e5c8.js";import{l as v,q as O,I as w,m as E,r as M,g as N,s as k,f as T}from"../js/lib/input-aspects.3610fdda.js";import{C as F}from"../js/core.f6946162.js";import{R as A,f as S,a as R}from"../js/core/loader.5d4e024f.js";import{c as $}from"../js/core/main.b23f36d7.js";import{A as I,a as D}from"../js/core/articles.530c016b.js";import{F as q,c as B,n as L,C as U}from"../js/follow-author.component.5b394cf5.js";import{e as H}from"../js/core/util.4298e8ae.js";import{C as P,a as Q}from"../js/core/comments.af54a03d.js";import{C as z,U as G,F as J}from"../js/core/input.9ae948cd.js";import{n as K,C as V,a as W}from"../js/current-article.10cd4166.js";import{A as X}from"../js/article-meta-components-support.feature.f2f8f3bd.js";class Y extends CustomEvent{}let Z=class{constructor(e){this._context=e,this.article=K,this.user=p,this.form={};const t=e.get(h),s=e.get(f);e.whenOn(e=>{t.user.tillOff(e)(e=>this.user=e).whenOff(()=>this.user=p),s.get(V).tillOff(e)(e=>this.article=e).whenOff(()=>this.article=K),s.get(g).tillOff(e)(e=>this.form=e).whenOff(()=>this.form={})})}render(){const e=this.articleComment;if(!e)return;const s=this._context.get(P),{document:o}=this._context.get(i),{author:r}=e,n=`profile/#/${encodeURIComponent(r.username)}`,c=r.image?'<img src="http://i.imgur.com/Qr71crq.jpg" class="comment-author-img" />':"",a=S(new Date(e.createdAt)),m=o.createDocumentFragment(),l=m.appendChild(o.createElement("div"));l.className="card-body";const d=l.appendChild(o.createElement("p"));d.className="card-text",d.innerText=e.body;const p=m.appendChild(o.createElement("div"));p.className="card-footer",p.innerHTML=`\n<a href="${n}" class="comment-author">${c}</a>\n<a href="${n}" class="comment-author">${H(r.username)}</a>\n<span class="date-posted">${a}</span>`;const{control:h}=this.form,{slug:f}=this.article;if(this.user.username===r.username&&h&&f){const r=p.appendChild(o.createElement("span"));r.className="mod-options";const n=r.appendChild(o.createElement("button"));n.type="button",n.className="btn btn-sm",n.innerHTML='<i class="ion-trash-a"></i>',v(n,{form:h}),new t(n).on("click").just(()=>{h.aspect(O).submit(()=>u(s.deleteComment(f,e.id))).then(()=>{this._context.dispatchEvent(new Y("conduit:comment",{bubbles:!0,detail:{removed:e.id}}))}).catch(e=>{e instanceof w?console.error("Failed to remove comment",...e.errors):console.error("Failed to remove comment",e)})})}return m}};d([n()],Z.prototype,"articleComment",void 0),d([c()],Z.prototype,"article",void 0),d([c()],Z.prototype,"user",void 0),d([A({comment:"COMMENT"})],Z.prototype,"render",null),Z=d([a(["article-comment",F])],Z);let ee=class{constructor(t){this._context=t,this.comments=[];const r=t.get(P),n=this._context.get(f);this._context.whenOn(c=>{this._context.on("conduit:comment")(({detail:{added:e,removed:t}})=>{this.comments=e?[e,...this.comments]:this.comments.filter(e=>e.id!==t)}),n.get(V).tillOff(c).thru_(t=>t.slug?s(r.articleComments(t.slug)):e)(e=>{this.response=e,e.ok&&(this.comments=e.body.comments)});const a=E({});o(a).needs(c),b(t,a)})}render(){const{document:e}=this._context.get(i),{contentRoot:t}=this._context,s=e.createRange();return s.setStartAfter(t.appendChild(e.createComment("[COMMENTS["))),s.setEndBefore(t.appendChild(e.createComment("]COMMENTS]"))),()=>{s.deleteContents();const{comments:t}=this;if(!t.length)return;const o=e.createDocumentFragment();t.forEach(t=>{o.appendChild(e.createElement("conduit-article-comment")).articleComment=t}),s.insertNode(o)}}};d([R({comment:"COMMENTS"})],ee.prototype,"response",void 0),d([c()],ee.prototype,"comments",void 0),d([m()],ee.prototype,"render",null),ee=d([a(["article-comments",F],{feature:{needs:[Z,Q,z]}})],ee);let te=class{constructor(e){this._context=e;const t=e.get(I),s=this._context.get(f);e.whenOn(o=>{o.whenOff(()=>this.content=void 0),s.get(V).tillOff(o)(s=>{s.slug?t.htmlContents(s).then(t=>{e.connected&&(this.content=t)}).catch(t=>{e.connected&&(this.content=void 0,console.error("Failed to parse article",t))}):this.content=void 0})})}render(){return this.content}};d([c()],te.prototype,"content",void 0),d([A({comment:"ARTICLE(content)"})],te.prototype,"render",null),te=d([a(["article-content",F])],te);let se=class{};se=d([a(["article-comment-text",F],G({select:"textarea",makeControl:({node:e,aspects:t})=>M(e.element,{aspects:t}).setup(N,e=>e.by(k()))}),j("text"))],se);let oe=class{constructor(e){this._context=e,this.article=K,this.user=p,this._commentService=e.get(P);const t=e.get(h),s=e.get(f);e.whenOn(e=>{t.user.tillOff(e)(e=>this.user=e).whenOff(()=>this.user=p),s.get(V).tillOff(e)(e=>this.article=e).whenOff(()=>this.article=K)})}render(){const{element:e}=this._context,t=e.querySelector(".comment-author-img");return()=>{this.user.email&&this.user.image?null==t||t.setAttribute("src",this.user.image):null==t||t.removeAttribute("src")}}submit({control:e}){const{article:t}=this;t.slug&&(e.aspect(T).markEdited(),e.aspect(O).submit(e=>u(this._commentService.addComment(t.slug,e.text))).then(t=>{e.it={text:""},e.aspect(T).markTouched(!1),e.aspect(O).reset(),this._context.dispatchEvent(new Y("conduit:comment",{bubbles:!0,detail:{added:t}}))}).catch(e=>{e instanceof w?console.error("Failed to comment",...e.errors):console.error("Failed to comment",e)}))}};d([c()],oe.prototype,"user",void 0),d([m()],oe.prototype,"render",null),d([C()],oe.prototype,"submit",null),oe=d([a(["new-article-comment",F],{feature:{needs:[se,Q]}},J({emptyModel:{text:""}}))],oe);let re=class{constructor(e){this._context=e,this._response=r();const t=e.get(I),s=e.get(x),o=this._context.get(f),n=(new W).byArticles(this._response.read.keep.thru_(e=>e&&e.ok?e.body:K)),c=B(this._response.read.keep.thru_(e=>e&&e.ok?e.body.author:L));o.provide({a:V,is:n}),o.provide({a:U,is:c}),e.whenOn(e=>{s.read.tillOff(e).consume(e=>{const s=decodeURIComponent(e.get(y).pathname.substring(1));return t.article(s)(e=>this.response=e)})})}get response(){return this._response.it}set response(e){this._response.it=e}render(){const{document:e}=this._context.get(i);return()=>{const{response:t}=this;t&&t.ok&&(e.getElementById("article:title").innerText=t.body.title)}}};d([c(),R()],re.prototype,"response",null),d([m({path:l("response")})],re.prototype,"render",null),re=d([a(["article",F],{feature:{needs:[ee,te,X,D,q,oe]}},_())],re),$.load(re);//# sourceMappingURL=main.a25ec9fd.js.map