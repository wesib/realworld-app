import{C as s}from"../js/wesib/wesib.d8a927dd.js";import{_ as r}from"../js/helpers.e1623395.js";import{b as e}from"../js/core/auth.cd430625.js";import{a as o}from"../js/core/api.0f4960fa.js";import{O as t,e as a,N as i}from"../js/wesib/generic.4d2c6788.js";import{b as m,q as c,I as p}from"../js/proc7ts/input-aspects.352068d9.js";import{C as n}from"../js/core.714cbb7b.js";import{F as j,C as f}from"../js/core/input.b5d7b961.js";import{c as d}from"../js/core/main.3e023644.js";import{U as u}from"../js/user-email.component.4ccb6fac.js";import{U as l}from"../js/user-password.component.30aa0606.js";import{U as b}from"../js/user-name.component.a5723f80.js";let h=(()=>{let d=class{constructor(s){this._authService=s.get(e),this._navigation=s.get(i)}submit({control:s}){s.aspect(m).markEdited(),s.aspect(c).submit(s=>o(this._authService.register(s))).then(()=>this._navigation.open(".")).catch(s=>{s instanceof p?console.error("Failed to register",...s.errors):console.error("Failed to register",s)})}};return r([t()],d.prototype,"submit",null),d=r([s(["register",n],{feature:{needs:[f,u,b,l]}},j({emptyModel:{username:"",email:"",password:""}}),a())],d),d})();d.load(h);//# sourceMappingURL=main.88fb4f65.js.map
