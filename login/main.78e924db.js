import{C as s}from"../js/wesib/wesib.e063c4fa.js";import{_ as o}from"../js/helpers.920c7f83.js";import{a}from"../js/core/auth.54ec27a2.js";import{a as e}from"../js/core/api.494f1eea.js";import{O as t,a as i,N as r}from"../js/wesib/generic.2d4b9745.js";import{f as m,s as c,I as n}from"../js/lib/input-aspects.88ad3da2.js";import{C as p}from"../js/core.f6946162.js";import{c as l}from"../js/core/main.ebc63840.js";import{F as j,C as f}from"../js/core/input.c4d0583e.js";import{L as d,a as g}from"../js/login-password.component.81d0e468.js";let u=class{constructor(s){this._authService=s.get(a),this._navigation=s.get(r)}submit({control:s}){s.aspect(m).markEdited(),s.aspect(c).submit(s=>e(this._authService.login(s))).then(()=>this._navigation.open(".")).catch(s=>{s instanceof n?console.log("Failed to login",...s.errors):console.log("Failed to login",s)})}};o([t()],u.prototype,"submit",null),u=o([s(["login",p],{feature:{needs:[f,d,g]}},j({emptyModel:{email:"",password:""}}),i())],u),l.load(u);//# sourceMappingURL=main.78e924db.js.map
