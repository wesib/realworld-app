import{e}from"../lib/call-thru.00f7427a.js";import{A as t,j as s}from"../lib/a-iterable.a3fddd20.js";import{F as r}from"../lib/context-values.956fc686.js";import{e as a,n as o,d as n}from"../lib/fun-events.a21352be.js";import{b as c,B as i,p,R as l,C as u,t as m,u as d,F as f}from"../wesib/wesib.e063c4fa.js";import{_ as h}from"../helpers.920c7f83.js";import{b,e as g,C as j,f as k,g as v,D as w,F as _,U as x}from"../wesib/generic.2d4b9745.js";import{e as C,f as y,g as F,h as O,j as E,k as D,l as R,m as U,n as $,o as A,p as B,a as L}from"../lib/input-aspects.88ad3da2.js";import{C as M}from"../core.f6946162.js";function T({mark:t="is-invalid",when:s}={}){return r=>{const n=r.aspect(C);return a({status:r.aspect(y),validity:r.aspect(F)}).keep.thru(({status:[{touched:r,hasFocus:a}],validity:[c]})=>{const i=c.has("incomplete")||c.has("missing");return!r||a&&i?e():o(n.specs(O({mark:t,when:s})))})}}const q=new r("api-error-generator",{byDefault:c(e=>{const r=e.get(i).document;return e=>{let a;return t.from(s(e)).forEach(([e,t])=>{a||(a=r.createElement("ul"),a.classList.add("error-messages"));const s=a;t.forEach(t=>{const a=r.createElement("li");a.innerText=`${e} ${t}`,s.appendChild(a)})}),a}})}),z={};let G=class{constructor(t){this._context=t,this.errors=z,t.get(b).get(g).thru_(({control:t})=>t?o(t.aspect(F).read.keep.thru_(e=>e.messages("api").reduce((e,t)=>Object.assign(Object.assign({},e),t.api),z))):e(z))(e=>this.errors=e)}render(){const{contentRoot:e}=this._context;let t;return()=>{t&&(t.remove(),t=void 0),t=this._context.get(q)(this.errors),t&&e.append(t)}}};h([p()],G.prototype,"errors",void 0),h([l()],G.prototype,"render",null),G=h([u(["api-errors",M])],G);let H=class{};H=h([u(["in-error",M],m("code"),j(({control:{control:e},aspects:t,context:s})=>d(s,"code").read.keep.thru_(e=>e?e.trim().split(/\s+/):[]).keep.thru(r=>e.convert(E.to(s.element),t).setup(C,e=>{e.add(D()),e.add(T({when:r}))}))))],H);let I=class{};function J({emptyModel:e={},form:t={makeForm({node:t,aspects:s}){const r=U(e).setup(C,e=>e.add(D())).setup($,e=>e.derive(A())),a=B(t.element,{form:r,aspects:s}).setup(C,e=>e.add(r.aspect(C)));return[r,a]}},button:s}={}){return u(_(t),function({select:e="button",pick:t={deep:!0,all:!0}}={}){return u({feature:{needs:k},define(s){s.whenComponent(s=>{const r=s.get(v),o=s.get(b);s.whenOn(n=>{a({form:o.get(g),button:r.select(e,t).first,aspects:s.get(w)}).tillOff(n).consume(({form:[{control:e}],button:[t],aspects:[s]})=>e&&t&&R(t.element,{form:e,aspects:s}))})})}})}(s))}function K(t){return x(Object.assign(Object.assign({},t),{makeControl:s=>s.context.get(b).get(g).keep.thru_(({form:r})=>{const a=t.makeControl(s);return a?a instanceof L?c(a):o(n(a).keep.thru_((t,s)=>t?(c(t),s?e(t,s):e(t)):e())):e();function c(e){r&&e.aspect($).derive(r.aspect($));const t=e.aspect(C);return t.add(D()),t.add(T()),e}})}))}I=h([f({needs:[G,H]})],I);export{I as C,J as F,K as U};//# sourceMappingURL=input.c4d0583e.js.map
