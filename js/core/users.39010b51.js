import{a as e}from"../proc7ts/context-values.c9a10e7b.js";import"../proc7ts/fun-events.52028069.js";import{F as s}from"../wesib/wesib.5a50f1b5.js";import{_ as o}from"../helpers.e1623395.js";import{A as t}from"./api.e062ba10.js";const r=new e("user-service");class p{constructor(e){this._fetch=e.get(t)}userProfile(e){const s={path:"profiles/"+encodeURIComponent(e),init:{method:"GET",headers:{Accept:"application/json"}},respondAs:"profile"};return this._fetch(s)}followUser(e,s){const o={path:"profiles/"+encodeURIComponent(e)+"/follow",init:{method:s?"POST":"DELETE",headers:{Accept:"application/json"}},respondAs:"profile",auth:!0};return this._fetch(o)}}let a=(()=>{let e=class{};return e=o([s({setup(e){e.provide({a:r,as:p})}})],e),e})();export{r as U,a};//# sourceMappingURL=users.39010b51.js.map
