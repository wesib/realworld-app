import{S as t}from"./proc7ts/context-values.d3464e6e.js";import{c as e,f as o}from"./proc7ts/fun-events.f641f321.js";import{S as r,R as s,C as n}from"./wesib/wesib.3e2b94f7.js";import{_ as a}from"./helpers.e1623395.js";import{a as u}from"./wesib/generic.a8985d00.js";import{C as i}from"./core.714cbb7b.js";import{U as l,a as c}from"./core/users.21ac9823.js";import{e as f}from"./core/util.39d1da21.js";const m={},h=new t("current-user-profile",{byDefault:()=>m});function p(t){const r=e(o(t).keepThru_(t=>{if(null==t.username)return t;const e=t=>{r.it={...t,update:e}};return{...t,update:e}}));return r}let d=(()=>{let t=class{constructor(t){this._context=t,this.author=m;const e=t.get(u),o=t.get(l);e.get(h).to(t=>{this.author=t}),t.on("click").to(()=>{const{author:t}=this;if(t.username){const e=!t.following;t.update({...t,following:e}),o.followUser(t.username,e).to(e=>{this.author.username&&(e.ok?this.author.update(e.body):(this.author.update(t),console.error("Failed to follow user "+t.username,e.errors)))})}})}render(){const{contentRoot:t,element:e}=this._context;return()=>{this.author.username?(e.className=this.author.following?"btn-secondary":"btn-outline-secondary",t.innerHTML='<i class="ion-plus-round"></i> Follow '+f(this.author.username)):t.innerHTML=""}}};return a([r()],t.prototype,"author",void 0),a([s()],t.prototype,"render",null),t=a([n(["follow-author-btn",i],{feature:{needs:c}})],t),t})();export{h as C,d as F,p as c,m as n};//# sourceMappingURL=follow-author-btn.component.e1c10841.js.map
