import{c as e}from"../js/lib/namespace-aliaser.535f16ce.js";import{C as s,p as t,R as a,c as o}from"../js/wesib/wesib.cad21c89.js";import{_ as r}from"../js/helpers.920c7f83.js";import{a as i}from"../js/core/auth.85b976b9.js";import{a as c}from"../js/core/api.a856c881.js";import{S as n,O as m,b as p,e as d}from"../js/wesib/generic.8e8f15be.js";import{q as l,j as u,n as j,f,s as h,I as b}from"../js/lib/input-aspects.88ad3da2.js";import{C as g}from"../js/core.f6946162.js";import{a as v}from"../js/core/loader.d8c7b04b.js";import{c as _}from"../js/core/main.8dd7027f.js";import{U as S,F as U,C as w}from"../js/core/input.1fc6764c.js";import{U as x}from"../js/user-email.component.c6ad098c.js";import{U as y}from"../js/user-name.component.ad7dd27c.js";let C=class{};C=r([s(["change-password",g],S({makeControl({node:e,aspects:s}){const t=l(e.element,{aspects:s}),a=t.convert({get:e=>e||"",set:e=>e||void 0},s,u.to(e.element));return t.aspect(j).derive(a.aspect(j)),a}}),n("password"))],C);let k=class{};k=r([s(["user-bio",g],S({select:"textarea",makeControl:({node:e,aspects:s})=>l(e.element,{aspects:s})}),n("bio"))],k);let F=class{};F=r([s(["user-image",g],S({makeControl:({node:e,aspects:s})=>l(e.element,{aspects:s})}),n("image"))],F);const O=["updated",g];let L=class{constructor(e){this._context=e,this.updated=!1,this._authService=e.get(i),this._context.whenOn(e=>{this._authService.loadUser().tillOff(e)(e=>{this.loadStatus=e,e&&e.ok&&this.setUser(e.body)})})}submit({control:e}){this.updated=!1,e.aspect(f).markEdited(),e.aspect(h).submit(e=>c(this._authService.updateSettings(e))).then(e=>{this.setUser(e),this.updated=!0}).catch(e=>{e instanceof b?console.error("Failed to update user settings",...e.errors):console.error("Failed to update user settings",e)})}render(){const{element:s}=this._context,t=e.name(O,this._context.get(o));return()=>{this.updated?s.classList.add(t):s.classList.remove(t)}}setUser({username:e,email:s,bio:t,image:a}){this._context.get(p).get(d).once(o=>{o.control&&(o.control.it={username:e,email:s,bio:t,image:a})})}};r([t()],L.prototype,"updated",void 0),r([v({comment:"settings"})],L.prototype,"loadStatus",void 0),r([m()],L.prototype,"submit",null),r([a()],L.prototype,"render",null),L=r([s(["settings",g],{feature:{needs:[C,w,k,x,F,y]}},U({emptyModel:{email:"",username:""}}))],L),_.load(L);//# sourceMappingURL=main.1f5796d9.js.map
