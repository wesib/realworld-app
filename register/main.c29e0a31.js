import{C as s}from"../js/wesib/wesib.cad21c89.js";import{_ as r}from"../js/helpers.920c7f83.js";import{a as e}from"../js/core/auth.85b976b9.js";import{a as o}from"../js/core/api.a856c881.js";import{O as a,a as t,N as i}from"../js/wesib/generic.8e8f15be.js";import{f as m,s as c,I as p}from"../js/lib/input-aspects.88ad3da2.js";import{C as n}from"../js/core.f6946162.js";import{c as j}from"../js/core/main.8dd7027f.js";import{F as f,C as d}from"../js/core/input.1fc6764c.js";import{U as l}from"../js/user-email.component.c6ad098c.js";import{U as u}from"../js/user-password.component.5298ca4d.js";import{U as b}from"../js/user-name.component.ad7dd27c.js";let h=class{constructor(s){this._authService=s.get(e),this._navigation=s.get(i)}submit({control:s}){s.aspect(m).markEdited(),s.aspect(c).submit(s=>o(this._authService.register(s))).then(()=>this._navigation.open(".")).catch(s=>{s instanceof p?console.error("Failed to register",...s.errors):console.error("Failed to register",s)})}};r([a()],h.prototype,"submit",null),h=r([s(["register",n],{feature:{needs:[d,l,b,u]}},f({emptyModel:{username:"",email:"",password:""}}),t())],h),j.load(h);//# sourceMappingURL=main.c29e0a31.js.map
