import"../js/proc7ts/fun-events.1cfe5573.js";import{c as e}from"../js/proc7ts/namespace-aliaser.1d67b636.js";import{C as s,S as t,R as a,k as o}from"../js/wesib/wesib.156124a1.js";import{_ as r}from"../js/helpers.920c7f83.js";import{b as i}from"../js/core/auth.3716a53c.js";import{a as c}from"../js/core/api.d0f496f7.js";import{S as m,O as n,a as p,d}from"../js/wesib/generic.b5c5f449.js";import{r as l,d as u,h as j,b as f,q as h,I as b}from"../js/proc7ts/input-aspects.cfc99431.js";import{C as g}from"../js/core.c852ba8c.js";import{a as v}from"../js/core/loader.c8c55104.js";import{U as S,F as _,C as U}from"../js/core/input.90816ae4.js";import{c as k}from"../js/core/main.66c4e538.js";import{U as y}from"../js/user-email.component.7519b4e2.js";import{U as C}from"../js/user-name.component.f8bbadc3.js";let w=class{};w=r([s(["change-password",g],S({makeControl({node:e,aspects:s}){const t=l(e.element,{aspects:s}),a=t.convert({get:e=>e||"",set:e=>e||void 0},s,u.to(e.element));return t.aspect(j).derive(a.aspect(j)),a}}),m("password"))],w);let x=class{};x=r([s(["user-bio",g],S({select:"textarea",makeControl:({node:e,aspects:s})=>l(e.element,{aspects:s})}),m("bio"))],x);let F=class{};F=r([s(["user-image",g],S({makeControl:({node:e,aspects:s})=>l(e.element,{aspects:s})}),m("image"))],F);const L=["updated",g];let O=class{constructor(e){this._context=e,this.updated=!1,this._authService=e.get(i),this._authService.loadUser().tillOff(e).to(e=>{this.loadStatus=e,e&&e.ok&&this.setUser(e.body)})}submit({control:e}){this.updated=!1,e.aspect(f).markEdited(),e.aspect(h).submit(e=>c(this._authService.updateSettings(e))).then(e=>{this.setUser(e),this.updated=!0}).catch(e=>{e instanceof b?console.error("Failed to update user settings",...e.errors):console.error("Failed to update user settings",e)})}render(){const{element:s}=this._context,t=e.name(L,this._context.get(o));return()=>{this.updated?s.classList.add(t):s.classList.remove(t)}}setUser({username:e,email:s,bio:t,image:a}){this._context.get(p).get(d).once(o=>{o.control&&(o.control.it={username:e,email:s,bio:t,image:a})})}};r([t()],O.prototype,"updated",void 0),r([v({comment:"settings"})],O.prototype,"loadStatus",void 0),r([n()],O.prototype,"submit",null),r([a()],O.prototype,"render",null),O=r([s(["settings",g],{feature:{needs:[w,U,x,y,F,C]}},_({emptyModel:{email:"",username:""}}))],O),k.load(O);//# sourceMappingURL=main.8c32d571.js.map
