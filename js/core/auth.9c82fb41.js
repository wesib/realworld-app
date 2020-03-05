import{g as t}from"../lib/call-thru.00f7427a.js";import{S as e,a as s}from"../lib/context-values.eef19512.js";import{t as i,n as o,k as n,d as r,D as a}from"../lib/fun-events.5ba1262f.js";import{B as u,F as h}from"../wesib/wesib.698f6f57.js";import{_ as c}from"../helpers.920c7f83.js";import{n as p,A as _}from"./api.75ae058d.js";const d=new e("auth-service");class l{static get[s](){return d}}const k={};class f extends l{constructor(e){super(),this._context=e,this._token=i(k);const s=e.get(u),h=s.localStorage;let c;this._auth=i(g(h.getItem("wesib-conduit:auth"))),this._token.by(this._auth.read.thru_(({token:e})=>this._token.it.token!==e?{token:e}:t)),this.user=this._auth.read.keep.thru(t=>{if(!t.token)return{failure:{ok:!1,errors:p()}};if(t.email){const e=i(t);return c=[t,e],o(e)}if(c){const[e,s]=c;if(e.token===t.token)return o(s);s.byNone()}const e=n(r(this.loadUser().thru_(t=>t.ok?t.body:{failure:t}),()=>[k]));return c=[t,e],o(e)}),this._auth.on((function({token:t}){t?h.setItem("wesib-conduit:auth",t):h.removeItem("wesib-conduit:auth")})),new a(s).on("storage")(({key:t,newValue:e})=>{if("wesib-conduit:auth"===t){const t=e||void 0;this._auth.it.token!==t&&(this._auth.it=g(t))}})}get token(){return this._token.read}get authentication(){return this._auth.read}login(t){return this._request("users/login",t)}register(t){return this._request("users",t)}loadUser(){return this._context.get(_)({path:"user",init:{method:"GET",headers:{Accept:"application/json"}},respondAs:"user",auth:!0}).thru_(t=>(t.ok&&this._setUserSettings(t.body),t))}updateSettings(t){return this._context.get(_)({path:"user",init:{method:"PUT",body:JSON.stringify({user:t}),headers:{Accept:"application/json","Content-Type":"application/json"}},respondAs:"user",auth:!0}).thru_(t=>(t.ok&&this._setUserSettings(t.body),t))}logout(){this._auth.it=k}_setUserSettings(t){this._auth.it=Object.assign(Object.assign({},t),{token:this._token.it.token||t.token})}_request(t,e){return this._context.get(_)({path:t,init:{method:"POST",body:JSON.stringify({user:e}),headers:{Accept:"application/json","Content-Type":"application/json"}},respondAs:"user",auth:!1}).thru_(t=>(t.ok?this._auth.it=t.body:!1===t.ok&&(this._auth.it={failure:t}),t))}}function g(t){return t?{token:t}:k}let b=class{};b=c([h({setup(t){t.provide({a:l,as:f})}})],b);const m={};export{d as A,l as a,b,m as n};//# sourceMappingURL=auth.9c82fb41.js.map