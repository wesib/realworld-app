import{ac as s,aq as e,ah as a,ar as t,ag as o,as as r,a9 as i}from"../js/lib.722ff502.js";import{C as n,S as m,O as c,j as l,N as g}from"../js/wesib.828181c2.js";import{U as p,C as u,g as d,A as h,h as f,c as j}from"../js/common.d13eb97a.js";import{LoginEmailComponent as b,LoginPasswordComponent as v}from"../login/main.76e9878d.js";let _=class{};_=s([n(["register-username",u],p({makeControl:({node:s,aspects:o})=>e(s.element,{aspects:o}).setup(a,s=>s.by(t()))}),m("username"))],_);let y=class{constructor(s){this._authService=s.get(h),this._navigation=s.get(g)}submit({control:s}){s.aspect(o).markEdited(),s.aspect(r).submit(s=>f(this._authService.register(s))).then(()=>this._navigation.open(".")).catch(s=>{s instanceof i?console.log("Failed to register",...s.errors):console.log("Failed to register",s)})}};s([c()],y.prototype,"submit",null),y=s([n(["register",u],{feature:{needs:[b,v,_]}},d({emptyModel:{username:"",email:"",password:""}}),l())],y),j.load(y);//# sourceMappingURL=main.2b186a63.js.map
