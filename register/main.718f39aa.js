import{C as s}from"../js/wesib/wesib.1043e62e.js";import{_ as e}from"../js/helpers.920c7f83.js";import{a as r}from"../js/core/auth.d50771f1.js";import{a as o}from"../js/core/api.5c106641.js";import{O as a,a as t,N as i}from"../js/wesib/generic.8eaae636.js";import{k as m,f as c,I as p}from"../js/lib/input-aspects.bb07caa0.js";import{C as n}from"../js/core.f6946162.js";import{c as j}from"../js/core/main.c1c022c8.js";import{F as f,C as l}from"../js/core/input.0f0e7482.js";import{U as u}from"../js/user-email.component.33b64e8b.js";import{U as b}from"../js/user-password.component.27255a84.js";import{U as d}from"../js/user-name.component.f59af36a.js";let h=class{constructor(s){this._authService=s.get(r),this._navigation=s.get(i)}submit({control:s}){s.aspect(m).markEdited(),s.aspect(c).submit(s=>o(this._authService.register(s))).then(()=>this._navigation.open(".")).catch(s=>{s instanceof p?console.error("Failed to register",...s.errors):console.error("Failed to register",s)})}};e([a()],h.prototype,"submit",null),h=e([s(["register",n],{feature:{needs:[l,u,d,b]}},f({emptyModel:{username:"",email:"",password:""}}),t())],h),j.load(h);//# sourceMappingURL=main.718f39aa.js.map
