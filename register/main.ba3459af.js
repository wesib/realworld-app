import{C as s}from"../js/wesib/wesib.8dbf8db7.js";import{_ as e}from"../js/helpers.e1623395.js";import{b as r}from"../js/core/auth.5a2634aa.js";import{a as o}from"../js/core/api.f51c1783.js";import{O as t,d as a,N as i}from"../js/wesib/generic.ccc72a37.js";import{b as m,q as c,I as p}from"../js/proc7ts/input-aspects.755a593b.js";import{C as n}from"../js/core.714cbb7b.js";import{c as j}from"../js/core/main.0d93d5fa.js";import{F as f,C as b}from"../js/core/input.6be1ce17.js";import{U as d}from"../js/user-email.component.5562ade5.js";import{U as u}from"../js/user-password.component.10413124.js";import{U as l}from"../js/user-name.component.b54a2ce5.js";let h=class{constructor(s){this._authService=s.get(r),this._navigation=s.get(i)}submit({control:s}){s.aspect(m).markEdited(),s.aspect(c).submit((s=>o(this._authService.register(s)))).then((()=>this._navigation.open("."))).catch((s=>{s instanceof p?console.error("Failed to register",...s.errors):console.error("Failed to register",s)}))}};e([t()],h.prototype,"submit",null),h=e([s(["register",n],{feature:{needs:[b,d,l,u]}},f({emptyModel:{username:"",email:"",password:""}}),a())],h),j.load(h);//# sourceMappingURL=main.ba3459af.js.map