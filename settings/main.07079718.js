import"../js/proc7ts/primitives.3596c309.js";import"../js/proc7ts/push-iterator.b943ed6f.js";import"../js/proc7ts/context-values.91624d4c.js";import{c as s}from"../js/frontmeans/namespace-aliaser.e08188c9.js";import{F as e,x as t}from"../js/proc7ts/fun-events.26e814e4.js";import"../js/proc7ts/workbench.47577449.js";import"../js/frontmeans/dom-events.272f64a1.js";import"../js/frontmeans/render-scheduler.78bb570f.js";import{C as o,S as r,R as a,l as i}from"../js/wesib/wesib.a2d60763.js";import{_ as m}from"../js/helpers.e1623395.js";import{b as c}from"../js/core/auth.81df9cb2.js";import{a as p}from"../js/core/api.a7ea7d29.js";import"../js/hatsy/http-header-value.0845e903.js";import{S as n,O as d,a as l,c as j}from"../js/wesib/generic.fb9d31ab.js";import"../js/proc7ts/delta-set.d5d9e832.js";import{r as u,d as f,h,b,q as g,I as v}from"../js/frontmeans/input-aspects.ed13f267.js";import{C as y}from"../js/core.c152f8fe.js";import{a as S}from"../js/core/loader.d22f956e.js";import"../js/core/layout.b9fbd9a2.js";import{c as _}from"../js/core/main.9ff13c21.js";import"../js/proc7ts/call-thru.f4f68410.js";import{U as x,F as U,C as k}from"../js/core/input.e4c44730.js";import{U as w}from"../js/user-email.component.04b4b971.js";import{U as C}from"../js/user-name.component.30beac59.js";let F=class{};F=m([o(["change-password",y],x({makeControl({node:s,aspects:e}){const t=u(s.element,{aspects:e}),o=t.convert({get:s=>s||"",set:s=>s||void 0},e,f.to(s.element));return t.aspect(h).derive(o.aspect(h)),o}}),n("password"))],F);let L=class{};L=m([o(["user-bio",y],x({select:"textarea",makeControl:({node:s,aspects:e})=>u(s.element,{aspects:e})}),n("bio"))],L);let q=class{};q=m([o(["user-image",y],x({makeControl:({node:s,aspects:e})=>u(s.element,{aspects:e})}),n("image"))],q);const E=["updated",y];let I=class{constructor(s){this._context=s,this.updated=!1,this._authService=s.get(c),this._authService.loadUser().do(e(s))((s=>{this.loadStatus=s,s&&s.ok&&this.setUser(s.body)}))}submit({control:s}){this.updated=!1,s.aspect(b).markEdited(),s.aspect(g).submit((s=>p(this._authService.updateSettings(s)))).then((s=>{this.setUser(s),this.updated=!0})).catch((s=>{s instanceof v?console.error("Failed to update user settings",...s.errors):console.error("Failed to update user settings",s)}))}render(){const{element:e}=this._context,t=s.name(E,this._context.get(i));return()=>{this.updated?e.classList.add(t):e.classList.remove(t)}}setUser({username:s,email:e,bio:o,image:r}){this._context.get(l).get(j).do(t)((t=>{t.control&&(t.control.it={username:s,email:e,bio:o,image:r})}))}};m([r()],I.prototype,"updated",void 0),m([S({comment:"settings"})],I.prototype,"loadStatus",void 0),m([d()],I.prototype,"submit",null),m([a()],I.prototype,"render",null),I=m([o(["settings",y],{feature:{needs:[F,k,L,w,q,C]}},U({emptyModel:{email:"",username:""}}))],I),_.load(I);//# sourceMappingURL=main.07079718.js.map