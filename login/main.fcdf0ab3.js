import{C as s}from"../js/wesib/wesib.8dbf8db7.js";import{_ as o}from"../js/helpers.e1623395.js";import{b as r}from"../js/core/auth.5a2634aa.js";import{a as e}from"../js/core/api.f51c1783.js";import{O as a,d as t,N as i}from"../js/wesib/generic.ccc72a37.js";import{b as m,q as c,I as p}from"../js/proc7ts/input-aspects.755a593b.js";import{C as n}from"../js/core.714cbb7b.js";import{c as j}from"../js/core/main.0d93d5fa.js";import{F as l,C as f}from"../js/core/input.6be1ce17.js";import{U as b}from"../js/user-email.component.5562ade5.js";import{U as d}from"../js/user-password.component.10413124.js";let u=class{constructor(s){this._authService=s.get(r),this._navigation=s.get(i)}submit({control:s}){s.aspect(m).markEdited(),s.aspect(c).submit((s=>e(this._authService.login(s)))).then((()=>this._navigation.open("."))).catch((s=>{s instanceof p?console.error("Failed to login",...s.errors):console.error("Failed to login",s)}))}};o([a()],u.prototype,"submit",null),u=o([s(["login",n],{feature:{needs:[f,b,d]}},l({emptyModel:{email:"",password:""}}),t())],u),j.load(u);//# sourceMappingURL=main.fcdf0ab3.js.map
