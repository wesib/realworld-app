import{S as e}from"./proc7ts/context-values.91624d4c.js";import{e as o,j as t,m as r}from"./proc7ts/fun-events.26e814e4.js";import{S as s,R as n,C as a}from"./wesib/wesib.a2d60763.js";import{_ as u}from"./helpers.e1623395.js";import{a as i}from"./wesib/generic.fb9d31ab.js";import{C as l}from"./core.c152f8fe.js";import{e as c}from"./frontmeans/httongue.193345e9.js";import{U as m,a as f}from"./core/users.a3a98d5f.js";const h={},p=new e("current-user-profile",{byDefault:()=>h});function d(e){const s=o(t(e).do(r((e=>{if(null==e.username)return e;const o=e=>{s.it={...e,update:o}};return{...e,update:o}}))));return s}let w=class{constructor(e){this._context=e,this.author=h;const o=e.get(i),t=e.get(m);o.get(p)((e=>{this.author=e})),e.on("click")((()=>{const{author:e}=this;if(e.username){const o=!e.following;e.update({...e,following:o}),t.followUser(e.username,o)((o=>{this.author.username&&(o.ok?this.author.update(o.body):(this.author.update(e),console.error(`Failed to follow user ${e.username}`,o.errors)))}))}}))}render(){const{contentRoot:e,element:o}=this._context;return()=>{this.author.username?(o.className=this.author.following?"btn-secondary":"btn-outline-secondary",e.innerHTML=`<i class="ion-plus-round"></i> Follow ${c(this.author.username)}`):e.innerHTML=""}}};u([s()],w.prototype,"author",void 0),u([n()],w.prototype,"render",null),w=u([a(["follow-author-btn",l],{feature:{needs:f}})],w);export{p as C,w as F,d as c,h as n};//# sourceMappingURL=follow-author-btn.component.cb6bc7a7.js.map
