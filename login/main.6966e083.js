import{C as s}from"../js/wesib/wesib.698f6f57.js";import{_ as o}from"../js/helpers.920c7f83.js";import{a as e}from"../js/core/auth.9c82fb41.js";import{a}from"../js/core/api.75ae058d.js";import{O as r,a as t,N as i}from"../js/wesib/generic.0655e5c8.js";import{f as m,q as c,I as n}from"../js/lib/input-aspects.3610fdda.js";import{C as p}from"../js/core.f6946162.js";import{c as f}from"../js/core/main.b23f36d7.js";import{F as j,C as l}from"../js/core/input.9ae948cd.js";import{U as d}from"../js/user-email.component.a1e6e14c.js";import{U as u}from"../js/user-password.component.e59afaba.js";let b=class{constructor(s){this._authService=s.get(e),this._navigation=s.get(i)}submit({control:s}){s.aspect(m).markEdited(),s.aspect(c).submit(s=>a(this._authService.login(s))).then(()=>this._navigation.open(".")).catch(s=>{s instanceof n?console.error("Failed to login",...s.errors):console.error("Failed to login",s)})}};o([r()],b.prototype,"submit",null),b=o([s(["login",p],{feature:{needs:[l,d,u]}},j({emptyModel:{email:"",password:""}}),t())],b),f.load(b);//# sourceMappingURL=main.6966e083.js.map