import{a as e}from"../proc7ts/context-values.8b8de6a6.js";import"../proc7ts/fun-events.c05c6315.js";import{F as s}from"../wesib/wesib.6050980d.js";import{_ as o}from"../helpers.920c7f83.js";import{A as t}from"./api.a15881f6.js";const r=new e("user-service");class p{constructor(e){this._fetch=e.get(t)}userProfile(e){const s={path:"profiles/"+encodeURIComponent(e),init:{method:"GET",headers:{Accept:"application/json"}},respondAs:"profile"};return this._fetch(s)}followUser(e,s){const o={path:"profiles/"+encodeURIComponent(e)+"/follow",init:{method:s?"POST":"DELETE",headers:{Accept:"application/json"}},respondAs:"profile",auth:!0};return this._fetch(o)}}let i=class{};i=o([s({setup(e){e.provide({a:r,as:p})}})],i);export{r as U,i as a};//# sourceMappingURL=users.1d9794de.js.map