import{C as s}from"../js/wesib/wesib.6050980d.js";import{_ as r}from"../js/helpers.920c7f83.js";import{b as e}from"../js/core/auth.48adb381.js";import{a as o}from"../js/core/api.a15881f6.js";import{O as a,e as t,N as i}from"../js/wesib/generic.c989db38.js";import{b as m,q as c,I as p}from"../js/proc7ts/input-aspects.460a0b06.js";import{C as n}from"../js/core.c852ba8c.js";import{F as j,C as f}from"../js/core/input.3e542abd.js";import{c as b}from"../js/core/main.0b0a30c6.js";import{U as u}from"../js/user-email.component.a7ac4a13.js";import{U as l}from"../js/user-password.component.0b02af64.js";import{U as d}from"../js/user-name.component.c6a60861.js";let h=class{constructor(s){this._authService=s.get(e),this._navigation=s.get(i)}submit({control:s}){s.aspect(m).markEdited(),s.aspect(c).submit(s=>o(this._authService.register(s))).then(()=>this._navigation.open(".")).catch(s=>{s instanceof p?console.error("Failed to register",...s.errors):console.error("Failed to register",s)})}};r([a()],h.prototype,"submit",null),h=r([s(["register",n],{feature:{needs:[f,u,d,l]}},j({emptyModel:{username:"",email:"",password:""}}),t())],h),b.load(h);//# sourceMappingURL=main.f0154c00.js.map
