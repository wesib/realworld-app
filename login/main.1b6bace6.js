import{C as s}from"../js/wesib/wesib.c27beefd.js";import{_ as o}from"../js/helpers.920c7f83.js";import{a as e}from"../js/core/auth.9a3c67b8.js";import{a as r}from"../js/core/api.a23e84e5.js";import{O as a,a as t,N as i}from"../js/wesib/generic.e7a7b809.js";import{k as m,f as c,I as n}from"../js/lib/input-aspects.61d8d5b5.js";import{C as p}from"../js/core.f6946162.js";import{c as j}from"../js/core/main.3e01346b.js";import{F as f,C as l}from"../js/core/input.dae7d5fd.js";import{U as d}from"../js/user-email.component.17c90b40.js";import{U as b}from"../js/user-password.component.31ef8370.js";let u=class{constructor(s){this._authService=s.get(e),this._navigation=s.get(i)}submit({control:s}){s.aspect(m).markEdited(),s.aspect(c).submit(s=>r(this._authService.login(s))).then(()=>this._navigation.open(".")).catch(s=>{s instanceof n?console.error("Failed to login",...s.errors):console.error("Failed to login",s)})}};o([a()],u.prototype,"submit",null),u=o([s(["login",p],{feature:{needs:[l,d,b]}},f({emptyModel:{email:"",password:""}}),t())],u),j.load(u);//# sourceMappingURL=main.1b6bace6.js.map
