import{t as e}from"../js/lib/fun-events.a21352be.js";import{c as s}from"../js/lib/namespace-aliaser.535f16ce.js";import{o as t,R as o,C as r,B as n,a as i}from"../js/wesib/wesib.84ff8eb8.js";import{_ as a}from"../js/helpers.920c7f83.js";import{b as m,N as c,P as p}from"../js/wesib/generic.643f46dc.js";import{C as l}from"../js/common.74dd5bad.js";import{c as u}from"../js/common/main.55e12d02.js";import{A as d}from"../js/common/input.297b22b9.js";import{n as f,C as h,F as j}from"../js/follow-author.component.2c606173.js";import{U as b,a as g}from"../js/common/users.9b34e47a.js";let _=class{constructor(e){this._context=e,this.profile=f,e.get(m).get(h)(e=>this.profile=e)}render(){const{document:e}=this._context.get(n);return()=>{var s;const{profile:t}=this;null===(s=e.getElementById("user:image"))||void 0===s||s.setAttribute("src",t.username&&t.image||"");const o=e.getElementById("user:username");o&&(o.innerText=t.username||"");const r=e.getElementById("user:bio");r&&(r.innerText=t.username&&t.bio||"")}}};a([t()],_.prototype,"profile",void 0),a([o()],_.prototype,"render",null),_=a([r(["user-info",l],{feature:{needs:j}})],_);let v=class{constructor(s){this._context=s,this._response=e();const t=s.get(b),o=s.get(c);s.get(m).provide({a:h,is:this._response.read.keep.thru_(e=>e&&e.ok?e.body:f)}),s.whenOn(e=>{o.read.thru_(e=>e.get(p).pathname.substring(1)).tillOff(e).consume(e=>{if(e)return t.userProfile(e)(e=>this.response=e);this._response.it=void 0})})}get response(){return this._response.it}set response(e){this._response.it=e}render(){const e=s.name(["visible",l],this._context.get(i)),t=this._context.get(d),{element:o,contentRoot:r}=this._context,{document:a}=this._context.get(n);let m;return()=>{const{response:e}=this;e?e.ok?(c(),p(!0)):function({errors:e}){c(),p(!1),m=t(e),m&&r.appendChild(m)}(e):(p(!1),m||(m=r.appendChild(a.createElement("conduit-loader"))))};function c(){m&&(m.remove(),m=void 0)}function p(s){s?o.classList.add(e):o.classList.remove(e)}}};a([t()],v.prototype,"response",null),a([o()],v.prototype,"render",null),v=a([r(["profile",l],{feature:{needs:[_,g]}})],v),u.load(v);//# sourceMappingURL=main.59415c77.js.map
