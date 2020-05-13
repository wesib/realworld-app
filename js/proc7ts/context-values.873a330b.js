import{d as e,e as t,l as s,c as n,n as r}from"./call-thru.7c911e58.js";import{m as i,a as o,f as u}from"./a-iterable.8530fe0e.js";import{a as c,b as a,m as l,j as h,t as d,l as f,k as p,f as y}from"./fun-events.52c596e5.js";const g=Symbol("context-key");class b{constructor(e){this.name=e}get[g](){return this}toString(){return`ContextKey(${this.name})`}}class w extends b{constructor(e){super(e.name+":seed")}get seedKey(){return this}grow(e){const{seeder:t,seed:s}=e;t.isEmpty(s)&&e.hasFallback||e.insert(s)}}class x extends Error{constructor(e,t="There is no value with key "+e){super(t),this.key=e}}function _(e){if(function(e){return"by"in e}(e)){if(!m(e))return e;const{a:t,by:s,with:n}=e;return{a:t,by:e=>s(...n.map(t=>e.get(t)))}}if(function(e){return"is"in e}(e)){const{a:s,is:n}=e;return{a:s,by:t(n)}}if(function(e){return"via"in e}(e)){const{a:t,via:s}=e;return{a:t,by:e=>e.get(s)}}if(function(e){return"as"in e}(e)){if(function(e){return!("a"in e)}(e)&&(e=function(e){return Object.assign(Object.assign({},e),{a:e.as})}(e)),!m(e)){const{as:t}=e;return{a:e.a,by:e=>new t(e)}}const{as:t,with:s}=e;return{a:e.a,by:e=>new t(...s.map(t=>e.get(t)))}}throw new TypeError("Malformed context value specifier: "+JSON.stringify(e))}function m(e){return"with"in e}class v{}class K{constructor(t){this._seeds=new Map,this._initial=null==t?e:"function"==typeof t?t:e=>t.get(e)}provide(e){const{a:{[g]:{seedKey:t}},by:s}=_(e),[n]=this._seeding(t);return n.provide(s)}_seeding(e){const t=this._seeds.get(e);if(t)return t;const s=e.seeder(),n=[s,t=>s.seed(t,this._initial(e,t))];return this._seeds.set(e,n),n}seed(e,t){const[,s]=this._seeding(t);return s(e)}seedIn(e,t){return this.newValues(t).get.bind(e)}newValues(t=!0){if(!t&&this._nonCachedValues)return this._nonCachedValues;const s=new Map,n=this;class r extends v{get({[g]:r},i){const o=s.get(r);if(null!=o)return o;const[u,c]=function(t,s,r={}){const[i,o]=function(e,t){const{seedKey:s}=t,[r,i]=n._seeding(s);if(s!==t)return[r,e.get(s)];return[r,i(e)]}(t,s);let u;const c="or"in r;let a=e;const l={context:t,key:s,seeder:i,seed:o,hasFallback:c,get or(){return r.or},insert(e){u=e},fillBy:e=>(e(l),u),setup(e){const t=a;a=s=>{t(s),e(s)}}};if(s.grow(l),null!=u)return[u,a];if(!c)throw new x(s);return[r.or]}(this,r,i);return t&&c&&(s.set(r,u),c({key:r,context:this,registry:n})),u}}return t?new r:this._nonCachedValues=new r}append(e){return new K((t,s)=>{const[n,r]=this._seeding(t);return n.combine(r(s),e.seed(s,t),s)})}}class k{constructor(){this._providers=[]}provide(e){return this._providers.unshift(e),()=>{const t=this._providers.lastIndexOf(e);t>=0&&this._providers.splice(t,1)}}seed(t,n){const{length:r}=this._providers;if(!r)return n||e;const i=e=>s(e.bind(void 0,t));if(!n&&1===r)return i(this._providers[0]);const o=this._providers.map(i);return n&&o.push(n),D(o)}isEmpty(e){return null==e()}combine(t,s){return t===e?s:s===e?t:D([s,t])}}function D(e){return s(()=>{for(const t of e){const e=t();if(null!=e)return e}})}class F extends w{seeder(){return new k}}class O extends b{constructor(e,{seedKey:t}={}){super(e),this.seedKey=t||new F(this)}}class j extends O{constructor(t,{seedKey:s,byDefault:n=e}={}){super(t,{seedKey:s}),this.byDefault=n}grow(e){const t=e.seed();null!=t?e.insert(t):e.hasFallback||e.insert(this.byDefault(e.context,this))}}function T(e){return()=>{throw null!=e?e:new TypeError("Context destroyed")}}class C extends O{constructor(){super("context-supply")}grow(e){e.insert(e.seed()||(e.hasFallback?e.or:null)||e.context[h])}}const E=new C;class V{constructor(){this._providers=d([])}provide(e){return this._providers.it=[...this._providers.it,e],()=>{const t=this._providers.it,s=t.indexOf(e);s>=0&&(this._providers.it=t.slice(0,s).concat(t.slice(s+1)))}}seed(e,t=c()){return this.combine(t,function(e,t){return t.read().keepThru(t=>t.length?a(f(...i(i(o(t),t=>t(e)),S))):r(),M)}(e,this._providers))}isEmpty(){return!1}combine(e,t){return f(e,t).keepThru(M)}}function S(e){return null==e?c():function(e){return("object"==typeof e||"function"==typeof e)&&p(e)}(e)?y(e):c(e)}function M(...e){return r(...u(e))}class B extends w{get upKey(){return this}seeder(){return new V}}class I extends b{constructor(e,t){super(e.name+":up"),this._key=e,this.grow=e=>{const s=e.fillBy(t);if(s){const t=e.context.get(E,{or:null});t&&e.insert(s.tillOff(t))}}}get seedKey(){return this._key.seedKey}}class U extends b{constructor(e,{seedKey:t}={}){super(e),this.seedKey=t||new B(this)}createUpKey(e){return new I(this,e)}}class J extends U{constructor(t,{seedKey:s,byDefault:n=e}={}){super(t,s),this.byDefault=(e,t)=>n(e,t)||(()=>{throw new x(this)}),this.upKey=this.createUpKey(e=>{e.insert(e.seed.keepThru((...t)=>t.length?t[t.length-1]:e.hasFallback&&e.or?a(e.or):a(c(this.byDefault(e.context,this)))))})}grow(e){let t;e.context.get(this.upKey,e.hasFallback?{or:null!=e.or?c(e.or):e.or}:void 0).to(e=>t=e).whenOff(e=>t=T(e)),e.insert((...e)=>t(...e))}}class N extends U{constructor(t,{seedKey:s,byDefault:n=e}={}){super(t,s),this.byDefault=n}get upKey(){return this}grow(e){const t=e.seed.keepThru((...t)=>{if(t.length)return n(t[t.length-1]);let s;if(e.hasFallback)s=e.or;else{const t=this.byDefault(e.context,this);s=t&&c(t)}return a(null!=s?s:l(()=>{throw new x(this)}))}),s=e.context.get(E,{or:null});e.insert(s?t.tillOff(s):t)}}export{g as C,J as F,N as S,j as a,v as b,K as c,U as d,T as e,E as f,O as g};//# sourceMappingURL=context-values.873a330b.js.map
