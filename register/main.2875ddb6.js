import{C as s}from"../js/wesib/wesib.c03111fd.js";import{_ as e}from"../js/helpers.920c7f83.js";import{a}from"../js/common/auth.a2e83e51.js";import{a as o}from"../js/common/api.ecc86aa4.js";import{S as t,O as r,a as i,N as m}from"../js/wesib/generic.7ab3ed7c.js";import{q as n,g as c,r as p,f as l,s as j,I as d}from"../js/lib/input-aspects.88ad3da2.js";import{C as f}from"../js/common.74dd5bad.js";import{c as u}from"../js/common/main.83398623.js";import{U as g,F as b,C as h}from"../js/common/input.0c0819f3.js";import{L as w,a as _}from"../js/login-password.component.96b49b30.js";let v=class{};v=e([s(["register-username",f],g({makeControl:({node:s,aspects:e})=>n(s.element,{aspects:e}).setup(c,s=>s.by(p()))}),t("username"))],v);let C=class{constructor(s){this._authService=s.get(a),this._navigation=s.get(m)}submit({control:s}){s.aspect(l).markEdited(),s.aspect(j).submit(s=>o(this._authService.register(s))).then(()=>this._navigation.open(".")).catch(s=>{s instanceof d?console.log("Failed to register",...s.errors):console.log("Failed to register",s)})}};e([r()],C.prototype,"submit",null),C=e([s(["register",f],{feature:{needs:[h,w,_,v]}},b({emptyModel:{username:"",email:"",password:""}}),i())],C),u.load(C);//# sourceMappingURL=main.2875ddb6.js.map
