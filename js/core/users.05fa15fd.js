import{a as e}from"../proc7ts/context-values.bb33d989.js";import"../proc7ts/workbench.76998d65.js";import{F as s}from"../wesib/wesib.d37f8f56.js";import{_ as o}from"../helpers.e1623395.js";import{A as t}from"./api.ed0ebd36.js";const r=new e("user-service");class p{constructor(e){this._fetch=e.get(t)}userProfile(e){const s={path:"profiles/"+encodeURIComponent(e),init:{method:"GET",headers:{Accept:"application/json"}},respondAs:"profile"};return this._fetch(s)}followUser(e,s){const o={path:"profiles/"+encodeURIComponent(e)+"/follow",init:{method:s?"POST":"DELETE",headers:{Accept:"application/json"}},respondAs:"profile",auth:!0};return this._fetch(o)}}let i=class{};i=o([s({setup(e){e.provide({a:r,as:p})}})],i);export{r as U,i as a};//# sourceMappingURL=users.05fa15fd.js.map
