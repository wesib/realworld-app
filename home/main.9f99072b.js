import{n as e}from"../js/proc7ts/primitives.ada6e792.js";import"../js/proc7ts/push-iterator.b943ed6f.js";import"../js/proc7ts/context-values.bb33d989.js";import"../js/frontmeans/namespace-aliaser.e08188c9.js";import{s as t,F as s,i as r}from"../js/proc7ts/fun-events.3d56e7e0.js";import"../js/proc7ts/workbench.76998d65.js";import"../js/frontmeans/dom-events.455a522c.js";import"../js/frontmeans/render-scheduler.78bb570f.js";import{S as o,R as a,C as n,B as i}from"../js/wesib/wesib.342b4a6e.js";import{_ as c}from"../js/helpers.e1623395.js";import{b as p}from"../js/core/auth.d699f70e.js";import"../js/core/api.de086b78.js";import"../js/hatsy/http-header-value.0845e903.js";import{d,N as m,A as f,g as j}from"../js/wesib/generic.d6a04d49.js";import"../js/proc7ts/delta-set.d5d9e832.js";import"../js/frontmeans/input-aspects.a0d328af.js";import{C as h}from"../js/core.c152f8fe.js";import{L as l}from"../js/core/loader.25ba884e.js";import"../js/core/layout.35fd1c35.js";import{c as u}from"../js/core/main.84fa5aef.js";import"../js/core/articles.01e06e4f.js";import"../js/lib/dompurify.f5eadf9f.js";import"../js/lib/marked.5b76e7a8.js";import"../js/proc7ts/call-thru.f4f68410.js";import{a as g,F as b}from"../js/core/feed.fc7f3dbd.js";import"../js/article-buttons-support.feature.8559e11a.js";import"../js/current-article.611ea08f.js";import{P as v,R as C}from"../js/render-feed.decorator.37682068.js";import"../js/core/util.eae4c306.js";let x=class{constructor(e){this._context=e,this.tags=[];const r=this._context.get(g),o=this._context.get(m);e.whenConnected((()=>{o.read.do(t(e))((e=>this.page=e)),r.tags.do(s(e))(((...e)=>this.tags=e))}))}render(){const{document:e}=this._context.get(i),t=e.createRange(),{contentRoot:s}=this._context;return t.selectNodeContents(s),t.setStartAfter(s.childNodes[s.childNodes.length-1]),()=>{if(t.deleteContents(),!this.page)return;const s=this._context.get(m),r=e.createDocumentFragment(),o=this.page.get(v);this.tags.forEach((t=>{const a=s.with(v,{...o,tag:t,feed:void 0,offset:0}).pretend();if(a){const s=r.appendChild(e.createElement("a"));s.href=a.url.href,s.innerText=t}})),t.insertNode(r)}}};c([o()],x.prototype,"tags",void 0),c([o()],x.prototype,"page",void 0),c([a()],x.prototype,"render",null),x=c([n(["feed-tags",h],d())],x);let w=class{constructor(s){this._context=s,this.request={};const{document:o}=s.get(i),a=s.get(m),n=s.get(p);s.whenConnected((()=>{r({auth:n.authentication,page:a}).do(t(s))((({auth:[{token:t}],page:[s]})=>{const{url:r}=s,n=new URL(o.baseURI);if(r.pathname!==n.pathname)return;const i=this.request=s.get(v),{feed:c}=i;"/personal-feed"===c&&(t||a.with(v,{}).replace().catch(e))}))}))}render(){const e=this._context.get(m),{document:t}=this._context.get(i),{element:s}=this._context,r=s.querySelector("ul"),o=t.createRange();return o.setStartAfter(r.appendChild(t.createComment("[TAG["))),o.setEndBefore(r.appendChild(t.createComment("]TAG]"))),()=>{o.deleteContents();const{tag:s}=this.request;if(!s)return;const r=e.with(v,{tag:s}).pretend();if(!r)return;const a=t.createElement("li");a.className="nav-item";const n=a.appendChild(t.createElement("a"));n.className="nav-link",n.innerText=`#${s}`,n.setAttribute("href",r.url.hash),o.insertNode(a)}}};c([o()],w.prototype,"request",void 0),c([a()],w.prototype,"render",null),w=c([n(["feed-toggle",h],f({active:"active"}),d())],w);let _=class{constructor(e){this.request={};const s=e.get(m);e.whenConnected((()=>{s.read.do(t(e))((e=>{this.request=e.get(v)}))}))}};c([C()],_.prototype,"request",void 0),_=c([n(["feed",h])],_);let y=class{};y=c([n(["home",h],{feature:{needs:[b,_,x,w,l,j]}})],y),u.load(y);//# sourceMappingURL=main.9f99072b.js.map
