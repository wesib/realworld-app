import{S as o}from"./proc7ts/context-values.be8ff8e3.js";import{c as t,f as e}from"./proc7ts/fun-events.b7373782.js";import{S as r,R as s,C as n}from"./wesib/wesib.8dbf8db7.js";import{_ as a}from"./helpers.e1623395.js";import{a as u}from"./wesib/generic.ccc72a37.js";import{C as i}from"./core.714cbb7b.js";import{U as c,a as l}from"./core/users.ec831716.js";import{e as f}from"./core/util.0d7cdcb4.js";const m={},h=new o("current-user-profile",{byDefault:()=>m});function p(o){const r=t(e(o).keepThru_((o=>{if(null==o.username)return o;const t=o=>{r.it={...o,update:t}};return{...o,update:t}})));return r}let d=class{constructor(o){this._context=o,this.author=m;const t=o.get(u),e=o.get(c);t.get(h).to((o=>{this.author=o})),o.on("click").to((()=>{const{author:o}=this;if(o.username){const t=!o.following;o.update({...o,following:t}),e.followUser(o.username,t).to((t=>{this.author.username&&(t.ok?this.author.update(t.body):(this.author.update(o),console.error("Failed to follow user "+o.username,t.errors)))}))}}))}render(){const{contentRoot:o,element:t}=this._context;return()=>{this.author.username?(t.className=this.author.following?"btn-secondary":"btn-outline-secondary",o.innerHTML='<i class="ion-plus-round"></i> Follow '+f(this.author.username)):o.innerHTML=""}}};a([r()],d.prototype,"author",void 0),a([s()],d.prototype,"render",null),d=a([n(["follow-author-btn",i],{feature:{needs:l}})],d);export{h as C,d as F,p as c,m as n};//# sourceMappingURL=follow-author-btn.component.a2d40d42.js.map
