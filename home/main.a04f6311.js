import{n as e}from"../js/lib/call-thru.00f7427a.js";import{e as t}from"../js/lib/fun-events.a21352be.js";import{p as s,R as o,C as a,B as r}from"../js/wesib/wesib.e063c4fa.js";import{_ as n}from"../js/helpers.920c7f83.js";import{a as c}from"../js/core/auth.e4fdf66e.js";import{a as i,N as f,A as d,d as l}from"../js/wesib/generic.2d4b9745.js";import{C as h}from"../js/core.f6946162.js";import{L as p}from"../js/core/loader.0815288f.js";import{c as g}from"../js/core/main.8b67d358.js";import{a as m,F as j}from"../js/core/feed.dc3f6a2d.js";import{P as u,R as b}from"../js/render-feed.decorator.e7e6b773.js";let w=class{constructor(e){this._context=e,this.tags=[];const t=this._context.get(m),s=this._context.get(f);e.whenOn(e=>{s.read.tillOff(e)(e=>this.page=e),t.tags().tillOff(e)((...e)=>this.tags=e)})}render(){const{document:e}=this._context.get(r),t=e.createRange(),{contentRoot:s}=this._context;return t.selectNodeContents(s),t.setStartAfter(s.childNodes[s.childNodes.length-1]),()=>{if(t.deleteContents(),!this.page)return;const s=this._context.get(f),o=e.createDocumentFragment(),a=this.page.get(u);this.tags.forEach(t=>{const r=s.with(u,Object.assign(Object.assign({},a),{tag:t,offset:0})).pretend();if(r){const s=o.appendChild(e.createElement("a"));s.href=r.url.href,s.innerText=t}}),t.insertNode(o)}}};n([s()],w.prototype,"tags",void 0),n([s()],w.prototype,"page",void 0),n([o()],w.prototype,"render",null),w=n([a(["feed-tags",h],i())],w);let O=class{constructor(s){const{document:o}=s.get(r),a=s.get(f),n=s.get(c);s.whenOn(s=>{t({auth:n.authentication,page:a}).tillOff(s)(({auth:[{token:t}],page:[s]})=>{const{url:r}=s,n=new URL(o.baseURI);if(r.pathname!==n.pathname)return;const{feed:c}=s.get(u);"/personal-feed"===c&&(t||a.with(u,{}).replace().catch(e))})})}};O=n([a(["feed-toggle",h],d({active:"active"}),i())],O);let x=class{constructor(e){this.request={};const t=e.get(f);e.whenOn(e=>{t.read.tillOff(e)(e=>{this.request=e.get(u)})})}};n([b()],x.prototype,"request",void 0),x=n([a(["feed",h])],x);let _=class{};_=n([a(["home",h],{feature:{needs:[j,x,w,O,p,l]}})],_),g.load(_);//# sourceMappingURL=main.a04f6311.js.map
