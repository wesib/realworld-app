import{d as s}from"./lib/context-values.956fc686.js";import{s as t,d as o}from"./lib/fun-events.a21352be.js";import{o as e,R as r,C as n}from"./wesib/wesib.c03111fd.js";import{_ as a}from"./helpers.920c7f83.js";import{b as i}from"./wesib/generic.7ab3ed7c.js";import{C as u}from"./common.74dd5bad.js";import{U as c,a as l}from"./common/users.9af65e5d.js";import{e as m}from"./common/util.36d20bba.js";const f={},h=new s("current-user-profile",{byDefault:()=>f});function d(s){const e=t(o(s).keep.thru_(s=>{if(null==s.username)return s;const t=s=>{e.it=Object.assign(Object.assign({},s),{update:t})};return Object.assign(Object.assign({},s),{update:t})}));return e}let p=class{constructor(s){this._context=s,this.author=f;const t=s.get(i),o=s.get(c);s.whenOn(s=>{t.get(h).tillOff(s)(s=>{this.author=s})}),s.on("click")(()=>{const{author:s}=this;if(s.username){const t=!s.following;s.update(Object.assign(Object.assign({},s),{following:t})),o.followUser(s.username,t)(t=>{this.author.username&&(t.ok?this.author.update(t.body):(this.author.update(s),console.error(`Failed to follow user ${s.username}`,t.errors)))})}})}render(){const{contentRoot:s}=this._context;return()=>{this.author.username?(s.className=this.author.following?"btn-secondary":"btn-outline-secondary",s.innerHTML=`<i class="ion-plus-round"></i> Follow ${m(this.author.username)}`):s.innerHTML=""}}};a([e()],p.prototype,"author",void 0),a([r()],p.prototype,"render",null),p=a([n(["follow-author",u],{feature:{needs:l}})],p);export{h as C,p as F,d as c,f as n};//# sourceMappingURL=follow-author.component.749d5572.js.map
