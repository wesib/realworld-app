import{C as s}from"../js/wesib/wesib.c03111fd.js";import{_ as e}from"../js/helpers.920c7f83.js";import{a}from"../js/core/auth.f95221bc.js";import{a as r}from"../js/core/api.90fa1651.js";import{S as t,O as o,a as i,N as m}from"../js/wesib/generic.7ab3ed7c.js";import{q as c,g as n,r as p,f as l,s as j,I as f}from"../js/lib/input-aspects.88ad3da2.js";import{C as d}from"../js/core.f6946162.js";import{c as u}from"../js/core/main.cf584391.js";import{U as g,F as b,C as h}from"../js/core/input.5459c5de.js";import{L as w,a as _}from"../js/login-password.component.9852860b.js";let v=class{};v=e([s(["register-username",d],g({makeControl:({node:s,aspects:e})=>c(s.element,{aspects:e}).setup(n,s=>s.by(p()))}),t("username"))],v);let C=class{constructor(s){this._authService=s.get(a),this._navigation=s.get(m)}submit({control:s}){s.aspect(l).markEdited(),s.aspect(j).submit(s=>r(this._authService.register(s))).then(()=>this._navigation.open(".")).catch(s=>{s instanceof f?console.log("Failed to register",...s.errors):console.log("Failed to register",s)})}};e([o()],C.prototype,"submit",null),C=e([s(["register",d],{feature:{needs:[h,w,_,v]}},b({emptyModel:{username:"",email:"",password:""}}),i())],C),u.load(C);//# sourceMappingURL=main.183032f5.js.map
