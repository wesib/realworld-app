import{C as s}from"../js/wesib/wesib.5a50f1b5.js";import{_ as o}from"../js/helpers.e1623395.js";import{b as e}from"../js/core/auth.33eb0dd2.js";import{a as r}from"../js/core/api.e062ba10.js";import{O as t,e as a,N as i}from"../js/wesib/generic.e2a57dd1.js";import{b as m,q as c,I as n}from"../js/proc7ts/input-aspects.50499af4.js";import{C as p}from"../js/core.c852ba8c.js";import{F as j,C as l}from"../js/core/input.dd6f29b8.js";import{c as d}from"../js/core/main.16ec9d81.js";import{U as f}from"../js/user-email.component.7f2b99be.js";import{U as b}from"../js/user-password.component.1edd6216.js";let u=(()=>{let d=class{constructor(s){this._authService=s.get(e),this._navigation=s.get(i)}submit({control:s}){s.aspect(m).markEdited(),s.aspect(c).submit(s=>r(this._authService.login(s))).then(()=>this._navigation.open(".")).catch(s=>{s instanceof n?console.error("Failed to login",...s.errors):console.error("Failed to login",s)})}};return o([t()],d.prototype,"submit",null),d=o([s(["login",p],{feature:{needs:[l,f,b]}},j({emptyModel:{email:"",password:""}}),a())],d),d})();d.load(u);//# sourceMappingURL=main.c8ed9218.js.map
