import{c as s}from"../js/core/main.0c31cba3.js";import{_ as e}from"../js/helpers.e1623395.js";import{v as r,m as t,b as o,u as a,I as i}from"../js/frontmeans/input-aspects.e72f213f.js";import{i as m,S as p,O as c,g as j,N as n,j as f,c as u}from"../js/wesib/generic.e05bd5a6.js";import{C as l}from"../js/wesib/wesib.289eabae.js";import{C as d}from"../js/core.10059585.js";import{a as b}from"../js/core/api.48f5edea.js";import{b as h}from"../js/core/auth.98c2c25d.js";import{C as v,s as g}from"../js/core/forms.76ba4659.js";import{U as y}from"../js/user-email.component.9841c5f6.js";import{U as w}from"../js/user-name.component.74cf3510.js";import{U as S}from"../js/user-password.component.70f2edb4.js";import"../js/core/layout.53939d89.js";import"../js/frontmeans/namespace-aliaser.9467f14d.js";import"../js/proc7ts/fun-events.8f536596.js";import"../js/proc7ts/primitives.38e5298b.js";import"../js/proc7ts/supply.9762ee6d.js";import"../js/core/loader.6a8fc6bd.js";import"../js/proc7ts/workbench.31425b55.js";import"../js/proc7ts/context-values.cc32b8c5.js";import"../js/proc7ts/push-iterator.039597c5.js";import"../js/proc7ts/call-thru.f4f68410.js";import"../js/proc7ts/delta-set.d5d9e832.js";import"../js/frontmeans/dom-events.bc847677.js";import"../js/frontmeans/render-scheduler.6f331202.js";import"../js/hatsy/http-header-value.851567fb.js";import"../js/frontmeans/httongue.6b868a5b.js";let _=class{constructor(s){this._authService=s.get(h),this._navigation=s.get(n),s.whenSettled((({element:s})=>{this.form=f.by((s=>r({username:"",email:"",password:""},s)),(e=>t(s.querySelector("form"),e))),this.submitButton=g(s.querySelector("button"))}))}submit({control:s}){s.aspect(o).markEdited(),s.aspect(a).submit((s=>b(this._authService.register(s)))).then((()=>this._navigation.open("."))).catch((s=>{s instanceof i?console.error("Failed to register",...s.errors):console.error("Failed to register",s)}))}};e([m()],_.prototype,"form",void 0),e([p({form:{share:u,local:!0},name:""})],_.prototype,"submitButton",void 0),e([c()],_.prototype,"submit",null),_=e([l(["register",d],{feature:{needs:[v,y,w,S]}},j())],_),s.load(_);//# sourceMappingURL=main.fa7fc61c.js.map
