import{c as e}from"../lib/namespace-aliaser.535f16ce.js";import{C as t,B as s,o as a,R as o,a as r,F as n}from"../wesib/wesib.5eadef04.js";import{_ as i}from"../helpers.920c7f83.js";import{a as c}from"./auth.924b8fbd.js";import{I as d,A as l,a as m}from"../wesib/generic.28627b52.js";import{C as f}from"../common.74dd5bad.js";import{L as u}from"../generic/loader.40ed27d5.js";let h=class{};h=i([t(["main",f],{feature:{needs:u}},d({onResponse({context:e,response:t,range:a}){if(!t.ok){a.deleteContents();const{document:o}=e.get(s),r=o.createElement("conduit-loader");null!=t.ok&&r.setAttribute("load-error",`Error. ${String(t.error)}`),a.insertNode(r)}}}))],h);let p=class{};p=i([t(["navbar",f],m(),l({active:"active"}))],p);const b=["authenticated",f],g=["not-authenticated",f];let j=class{constructor(e){this._context=e,this.auth={},e.whenOn(t=>{e.get(c).authentication.tillOff(t)(e=>{this.auth=e})})}render(){const t=this._context.get(r),s=e.name(b,t),a=e.name(g,t),{classList:o}=this._context.element;return()=>{this.auth.token?(o.remove(a),o.add(s)):(o.remove(s),o.add(a))}}};i([a()],j.prototype,"auth",void 0),i([o()],j.prototype,"render",null),j=i([t({name:["container",f],feature:{needs:[h,p]}})],j);let v=class{};v=i([t(["footer",f],m())],v);let x=class{};x=i([n({needs:[j,v]})],x);export{x as C};//# sourceMappingURL=layout.68439057.js.map
