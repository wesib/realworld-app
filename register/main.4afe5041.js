import"../js/proc7ts/primitives.ada6e792.js";import"../js/proc7ts/push-iterator.b943ed6f.js";import"../js/proc7ts/context-values.bb33d989.js";import"../js/frontmeans/namespace-aliaser.e08188c9.js";import"../js/proc7ts/fun-events.3d56e7e0.js";import"../js/proc7ts/workbench.76998d65.js";import"../js/frontmeans/dom-events.455a522c.js";import"../js/frontmeans/render-scheduler.78bb570f.js";import{C as s}from"../js/wesib/wesib.d37f8f56.js";import{_ as e}from"../js/helpers.e1623395.js";import{b as r}from"../js/core/auth.6f2f0035.js";import{a as o}from"../js/core/api.ed0ebd36.js";import"../js/hatsy/http-header-value.0845e903.js";import{O as t,d as a,N as i}from"../js/wesib/generic.e7546d13.js";import"../js/proc7ts/delta-set.d5d9e832.js";import{b as m,q as p,I as j}from"../js/frontmeans/input-aspects.a0d328af.js";import{C as c}from"../js/core.c152f8fe.js";import"../js/core/loader.eb91057d.js";import"../js/core/layout.46834408.js";import{c as n}from"../js/core/main.b8ff4c81.js";import"../js/proc7ts/call-thru.f4f68410.js";import{F as f,C as d}from"../js/core/input.3c2cc3e0.js";import{U as l}from"../js/user-email.component.f99a0168.js";import{U as u}from"../js/user-password.component.4db5992e.js";import{U as b}from"../js/user-name.component.1b5fdb6d.js";let h=class{constructor(s){this._authService=s.get(r),this._navigation=s.get(i)}submit({control:s}){s.aspect(m).markEdited(),s.aspect(p).submit((s=>o(this._authService.register(s)))).then((()=>this._navigation.open("."))).catch((s=>{s instanceof j?console.error("Failed to register",...s.errors):console.error("Failed to register",s)}))}};e([t()],h.prototype,"submit",null),h=e([s(["register",c],{feature:{needs:[d,l,b,u]}},f({emptyModel:{username:"",email:"",password:""}}),a())],h),n.load(h);//# sourceMappingURL=main.4afe5041.js.map
