import{C as s}from"../js/_wesib/wesib.6bf655a7.js";import{_ as e}from"../js/helpers.920c7f83.js";import{a as o}from"../js/_common/auth.e5cbd92f.js";import{a}from"../js/_common/api.44da948d.js";import{S as t,O as r,a as i,N as m}from"../js/_wesib/generic.69e1c9fe.js";import{q as c,g as n,r as p,f,s as l,I as j}from"../js/_lib_/input-aspects.cc17fcb1.js";import{C as d}from"../js/_common/index.e13c2fd6.js";import{c as u}from"../js/_common/main.cc9f0a0d.js";import{U as g,F as _,C as b}from"../js/_common/input.8e7d6929.js";import{LoginEmailComponent as h,LoginPasswordComponent as v}from"../login/main.b819327f.js";let w=class{};w=e([s(["register-username",d],g({makeControl:({node:s,aspects:e})=>c(s.element,{aspects:e}).setup(n,s=>s.by(p()))}),t("username"))],w);let C=class{constructor(s){this._authService=s.get(o),this._navigation=s.get(m)}submit({control:s}){s.aspect(f).markEdited(),s.aspect(l).submit(s=>a(this._authService.register(s))).then(()=>this._navigation.open(".")).catch(s=>{s instanceof j?console.log("Failed to register",...s.errors):console.log("Failed to register",s)})}};e([r()],C.prototype,"submit",null),C=e([s(["register",d],{feature:{needs:[b,h,v,w]}},_({emptyModel:{username:"",email:"",password:""}}),i())],C),u.load(C);//# sourceMappingURL=main.d882d5c0.js.map
