import"../js/proc7ts/primitives.3596c309.js";import"../js/proc7ts/push-iterator.b943ed6f.js";import"../js/proc7ts/context-values.91624d4c.js";import"../js/frontmeans/namespace-aliaser.e08188c9.js";import"../js/proc7ts/fun-events.26e814e4.js";import"../js/proc7ts/workbench.47577449.js";import"../js/frontmeans/dom-events.272f64a1.js";import"../js/frontmeans/render-scheduler.78bb570f.js";import{C as s}from"../js/wesib/wesib.a2d60763.js";import{_ as o}from"../js/helpers.e1623395.js";import{b as e}from"../js/core/auth.81df9cb2.js";import{a as r}from"../js/core/api.a7ea7d29.js";import"../js/hatsy/http-header-value.0845e903.js";import{O as t,d as a,N as i}from"../js/wesib/generic.fb9d31ab.js";import"../js/proc7ts/delta-set.d5d9e832.js";import{b as m,q as p,I as j}from"../js/frontmeans/input-aspects.ed13f267.js";import{C as c}from"../js/core.c152f8fe.js";import"../js/core/loader.d22f956e.js";import"../js/core/layout.b9fbd9a2.js";import{c as n}from"../js/core/main.9ff13c21.js";import"../js/proc7ts/call-thru.f4f68410.js";import{F as f,C as d}from"../js/core/input.e4c44730.js";import{U as l}from"../js/user-email.component.04b4b971.js";import{U as u}from"../js/user-password.component.d8148ae9.js";let b=class{constructor(s){this._authService=s.get(e),this._navigation=s.get(i)}submit({control:s}){s.aspect(m).markEdited(),s.aspect(p).submit((s=>r(this._authService.login(s)))).then((()=>this._navigation.open("."))).catch((s=>{s instanceof j?console.error("Failed to login",...s.errors):console.error("Failed to login",s)}))}};o([t()],b.prototype,"submit",null),b=o([s(["login",c],{feature:{needs:[d,l,u]}},f({emptyModel:{email:"",password:""}}),a())],b),n.load(b);//# sourceMappingURL=main.b82b17fd.js.map
