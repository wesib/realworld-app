import{n as e}from"../js/lib/call-thru.00f7427a.js";import{e as t}from"../js/lib/fun-events.5ba1262f.js";import{p as s,R as r,C as o,B as a}from"../js/wesib/wesib.c27beefd.js";import{_ as n}from"../js/helpers.920c7f83.js";import{a as i}from"../js/core/auth.9a3c67b8.js";import{a as c,N as l,A as d,d as h}from"../js/wesib/generic.e7a7b809.js";import{C as f}from"../js/core.f6946162.js";import{L as p}from"../js/core/loader.ba3f37d3.js";import{c as m}from"../js/core/main.3e01346b.js";import{a as g,F as u}from"../js/core/feed.97566213.js";import{P as j,R as b}from"../js/render-feed.decorator.53a1ab8a.js";let x=class{constructor(e){this._context=e,this.tags=[];const t=this._context.get(g),s=this._context.get(l);e.whenOn(e=>{s.read.tillOff(e)(e=>this.page=e),t.tags().tillOff(e)((...e)=>this.tags=e)})}render(){const{document:e}=this._context.get(a),t=e.createRange(),{contentRoot:s}=this._context;return t.selectNodeContents(s),t.setStartAfter(s.childNodes[s.childNodes.length-1]),()=>{if(t.deleteContents(),!this.page)return;const s=this._context.get(l),r=e.createDocumentFragment(),o=this.page.get(j);this.tags.forEach(t=>{const a=s.with(j,Object.assign(Object.assign({},o),{tag:t,feed:void 0,offset:0})).pretend();if(a){const s=r.appendChild(e.createElement("a"));s.href=a.url.href,s.innerText=t}}),t.insertNode(r)}}};n([s()],x.prototype,"tags",void 0),n([s()],x.prototype,"page",void 0),n([r()],x.prototype,"render",null),x=n([o(["feed-tags",f],c())],x);let C=class{constructor(s){this._context=s,this.request={};const{document:r}=s.get(a),o=s.get(l),n=s.get(i);s.whenOn(s=>{t({auth:n.authentication,page:o}).tillOff(s)(({auth:[{token:t}],page:[s]})=>{const{url:a}=s,n=new URL(r.baseURI);if(a.pathname!==n.pathname)return;const i=this.request=s.get(j),{feed:c}=i;"/personal-feed"===c&&(t||o.with(j,{}).replace().catch(e))})})}render(){const e=this._context.get(l),{document:t}=this._context.get(a),{element:s}=this._context,r=s.querySelector("ul"),o=t.createRange();return o.setStartAfter(r.appendChild(t.createComment("[TAG["))),o.setEndBefore(r.appendChild(t.createComment("]TAG]"))),()=>{o.deleteContents();const{tag:s}=this.request;if(!s)return;const r=e.with(j,{tag:s}).pretend();if(!r)return;const a=t.createElement("li");a.className="nav-item";const n=a.appendChild(t.createElement("a"));n.className="nav-link",n.innerText=`#${s}`,n.setAttribute("href",r.url.hash),o.insertNode(a)}}};n([s()],C.prototype,"request",void 0),n([r()],C.prototype,"render",null),C=n([o(["feed-toggle",f],d({active:"active"}),c())],C);let _=class{constructor(e){this.request={};const t=e.get(l);e.whenOn(e=>{t.read.tillOff(e)(e=>{this.request=e.get(j)})})}};n([b()],_.prototype,"request",void 0),_=n([o(["feed",f])],_);let v=class{};v=n([o(["home",f],{feature:{needs:[u,_,x,C,p,h]}})],v),m.load(v);//# sourceMappingURL=main.8ee4ad49.js.map
