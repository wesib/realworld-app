import{n as e}from"../js/proc7ts/primitives.90941b78.js";import"../js/proc7ts/push-iterator.e3c0f3f1.js";import"../js/proc7ts/context-values.de0fa082.js";import"../js/proc7ts/call-thru.104a1934.js";import{g as t}from"../js/proc7ts/fun-events.751f4123.js";import"../js/frontmeans/namespace-aliaser.54a2e6c0.js";import"../js/frontmeans/render-scheduler.c6ad5452.js";import{S as s,R as r,C as o,B as a}from"../js/wesib/wesib.fd49a6cd.js";import{_ as n}from"../js/helpers.e1623395.js";import{b as i}from"../js/core/auth.2372f198.js";import"../js/core/api.850f8641.js";import{d as c,N as p,A as f,g as d}from"../js/wesib/generic.1df87fc1.js";import"../js/proc7ts/delta-set.9ee1ffba.js";import"../js/frontmeans/input-aspects.8b5674f5.js";import{C as m}from"../js/core.bba16f1a.js";import{L as l}from"../js/core/loader.46a2a88b.js";import"../js/core/layout.2906fa88.js";import{c as h}from"../js/core/main.e6d61b54.js";import"../js/core/articles.aa6b0084.js";import"../js/lib/dompurify.0d835c13.js";import"../js/lib/marked.55574563.js";import{a as j,F as u}from"../js/core/feed.e63c551e.js";import"../js/article-buttons-support.feature.8243e24d.js";import"../js/current-article.faae2888.js";import{P as g,R as b}from"../js/render-feed.decorator.e95904f1.js";import"../js/core/util.0e2fc110.js";let C=class{constructor(e){this._context=e,this.tags=[];const t=this._context.get(j),s=this._context.get(p);e.whenConnected((()=>{s.read().tillOff(e).to((e=>this.page=e)),t.tags().tillOff(e).to(((...e)=>this.tags=e))}))}render(){const{document:e}=this._context.get(a),t=e.createRange(),{contentRoot:s}=this._context;return t.selectNodeContents(s),t.setStartAfter(s.childNodes[s.childNodes.length-1]),()=>{if(t.deleteContents(),!this.page)return;const s=this._context.get(p),r=e.createDocumentFragment(),o=this.page.get(g);this.tags.forEach((t=>{const a=s.with(g,{...o,tag:t,feed:void 0,offset:0}).pretend();if(a){const s=r.appendChild(e.createElement("a"));s.href=a.url.href,s.innerText=t}})),t.insertNode(r)}}};n([s()],C.prototype,"tags",void 0),n([s()],C.prototype,"page",void 0),n([r()],C.prototype,"render",null),C=n([o(["feed-tags",m],c())],C);let x=class{constructor(s){this._context=s,this.request={};const{document:r}=s.get(a),o=s.get(p),n=s.get(i);s.whenConnected((()=>{t({auth:n.authentication(),page:o}).tillOff(s).to((({auth:[{token:t}],page:[s]})=>{const{url:a}=s,n=new URL(r.baseURI);if(a.pathname!==n.pathname)return;const i=this.request=s.get(g),{feed:c}=i;"/personal-feed"===c&&(t||o.with(g,{}).replace().catch(e))}))}))}render(){const e=this._context.get(p),{document:t}=this._context.get(a),{element:s}=this._context,r=s.querySelector("ul"),o=t.createRange();return o.setStartAfter(r.appendChild(t.createComment("[TAG["))),o.setEndBefore(r.appendChild(t.createComment("]TAG]"))),()=>{o.deleteContents();const{tag:s}=this.request;if(!s)return;const r=e.with(g,{tag:s}).pretend();if(!r)return;const a=t.createElement("li");a.className="nav-item";const n=a.appendChild(t.createElement("a"));n.className="nav-link",n.innerText=`#${s}`,n.setAttribute("href",r.url.hash),o.insertNode(a)}}};n([s()],x.prototype,"request",void 0),n([r()],x.prototype,"render",null),x=n([o(["feed-toggle",m],f({active:"active"}),c())],x);let v=class{constructor(e){this.request={};const t=e.get(p);e.whenConnected((()=>{t.read().tillOff(e).to((e=>{this.request=e.get(g)}))}))}};n([b()],v.prototype,"request",void 0),v=n([o(["feed",m])],v);let _=class{};_=n([o(["home",m],{feature:{needs:[u,v,C,x,l,d]}})],_),h.load(_);//# sourceMappingURL=main.c16f944f.js.map
