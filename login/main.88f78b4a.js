import{C as s}from"../js/wesib/wesib.04aa6345.js";import{_ as o}from"../js/helpers.920c7f83.js";import{b as e}from"../js/core/auth.fc194b6b.js";import{a as r}from"../js/core/api.b40cf721.js";import{O as t,f as a,N as i}from"../js/wesib/generic.2be6e6cd.js";import{b as c,q as m,I as p}from"../js/proc7ts/input-aspects.56cb8264.js";import{C as n}from"../js/core.c852ba8c.js";import{F as j,C as f}from"../js/core/input.5ef8063d.js";import{c as l}from"../js/core/main.7406b7f4.js";import{U as b}from"../js/user-email.component.9ee91ff1.js";import{U as u}from"../js/user-password.component.ce01bd29.js";let d=class{constructor(s){this._authService=s.get(e),this._navigation=s.get(i)}submit({control:s}){s.aspect(c).markEdited(),s.aspect(m).submit(s=>r(this._authService.login(s))).then(()=>this._navigation.open(".")).catch(s=>{s instanceof p?console.error("Failed to login",...s.errors):console.error("Failed to login",s)})}};o([t()],d.prototype,"submit",null),d=o([s(["login",n],{feature:{needs:[f,b,u]}},j({emptyModel:{email:"",password:""}}),a())],d),l.load(d);//# sourceMappingURL=main.88f78b4a.js.map
