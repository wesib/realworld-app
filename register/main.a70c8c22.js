import{C as s}from"../js/wesib/wesib.7b25387e.js";import{_ as e}from"../js/helpers.e1623395.js";import{b as r}from"../js/core/auth.94824694.js";import{a as o}from"../js/core/api.2eceae9c.js";import{O as t,d as a,N as i}from"../js/wesib/generic.69a57111.js";import{b as m,q as c,I as p}from"../js/proc7ts/input-aspects.9c95a66e.js";import{C as n}from"../js/core.21bb0d86.js";import{c as j}from"../js/core/main.18a67af6.js";import{F as f,C as b}from"../js/core/input.3bfe5363.js";import{U as u}from"../js/user-email.component.4dfaaaff.js";import{U as l}from"../js/user-password.component.97b41c6b.js";import{U as d}from"../js/user-name.component.f3ccbde7.js";let h=class{constructor(s){this._authService=s.get(r),this._navigation=s.get(i)}submit({control:s}){s.aspect(m).markEdited(),s.aspect(c).submit((s=>o(this._authService.register(s)))).then((()=>this._navigation.open("."))).catch((s=>{s instanceof p?console.error("Failed to register",...s.errors):console.error("Failed to register",s)}))}};e([t()],h.prototype,"submit",null),h=e([s(["register",n],{feature:{needs:[b,u,d,l]}},f({emptyModel:{username:"",email:"",password:""}}),a())],h),j.load(h);//# sourceMappingURL=main.a70c8c22.js.map
