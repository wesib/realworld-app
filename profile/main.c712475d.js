import{g as e,t as s}from"../js/proc7ts/fun-events.c05c6315.js";import{C as t,S as r,R as o,B as n}from"../js/wesib/wesib.6050980d.js";import{_ as a}from"../js/helpers.920c7f83.js";import{n as i}from"../js/core/api.a15881f6.js";import{e as c,A as f,g as p,N as l,b as u,a as d}from"../js/wesib/generic.c989db38.js";import{C as m}from"../js/core.c852ba8c.js";import{a as h}from"../js/core/loader.2dfceac7.js";import{P as g}from"../js/article-buttons-support.feature.2c43e165.js";import{R as j}from"../js/render-feed.decorator.9036ca5a.js";import{c as b}from"../js/core/main.0b0a30c6.js";import{n as v,C as y,F as _,c as w}from"../js/follow-author-btn.component.ed5f6475.js";import{U as k,a as C}from"../js/core/users.1d9794de.js";const q=/#\/.+\/favorite$/;let x=class{constructor(s){const t=s.get(l);s.whenConnected(()=>{e({page:t,links:s.get(u).select("a",{all:!0,deep:!0})}).tillOff(s).to(({page:[e],links:[s]})=>{for(const r of s){const s=r.element,o=e.get(g),n=o.author||o.favorited;let a;a=q.test(s.href)?{favorited:n}:{author:n};const i=t.with(g,a).pretend();if(i){const e=i.url.href;if(s.href!==e){const t=s.cloneNode(!0);t.href=e,s.replaceWith(t)}}}})})}};x=a([t(["user-feed-toggle",m],{feature:{needs:p}},f({active:"active"}),c())],x);let B=class{constructor(e){this.request={};const s=e.get(l);e.whenConnected(()=>{s.read().tillOff(e).to(e=>{this.request=e.get(g)})})}};a([j({requestParam:g})],B.prototype,"request",void 0),B=a([t(["user-feed",m])],B);let E=class{constructor(e){this._context=e,this.profile=v,e.get(d).get(y).to(e=>this.profile=e)}render(){const{document:e}=this._context.get(n);return()=>{var s;const{profile:t}=this;null===(s=e.getElementById("user:image"))||void 0===s||s.setAttribute("src",t.username&&t.image||"");const r=e.getElementById("user:username");r&&(r.innerText=t.username||"");const o=e.getElementById("user:bio");o&&(o.innerText=t.username&&t.bio||"")}}};a([r()],E.prototype,"profile",void 0),a([o()],E.prototype,"render",null),E=a([t(["user-info",m],{feature:{needs:_}})],E);let I=class{constructor(e){this._response=s();const t=e.get(k),r=e.get(l),o=e.get(d),n=w(this._response.read().keepThru_(e=>e&&e.ok?e.body:v));o.provide({a:y,is:n}),e.whenConnected(()=>{r.read().thru_(e=>{const s=e.get(g);return s.author||s.favorited}).tillOff(e).consume(e=>{if(e){if(!this.response||!this.response.ok||this.response.body.username!==e)return t.userProfile(e).to(e=>this.response=e)}else this.response={ok:!1,errors:i()}})})}get response(){return this._response.it}set response(e){this._response.it=e}};a([h()],I.prototype,"response",null),I=a([t(["profile",m],{feature:{needs:[B,x,E,C]}})],I),b.load(I);//# sourceMappingURL=main.c712475d.js.map