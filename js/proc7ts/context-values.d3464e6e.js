import{d as e,v as t,l as s,c as n,n as r}from"./call-thru.e7e5dff6.js";import{m as i,a as o,f as u}from"./a-iterable.fa56751f.js";import{a as c,b as a,m as l,j as h,t as d,l as f,k as p,f as y}from"./fun-events.f641f321.js";const g=Symbol("context-key");class w{constructor(e){this.name=e}get[g](){return this}toString(){return`ContextKey(${this.name})`}}class b extends w{constructor(e){super(e.name+":seed")}get seedKey(){return this}grow(e){const{seeder:t,seed:s}=e;t.isEmpty(s)&&e.hasFallback||e.insert(s)}}class x extends Error{constructor(e,t="There is no value with key "+e){super(t),this.key=e}}function _(e){return"with"in e}class v{}class m{constructor(t){this._seeds=new Map,this._initial=null==t?e:"function"==typeof t?t:e=>t.get(e)}provide(e){const{a:{[g]:{seedKey:s}},by:n}=function(e){if(function(e){return"by"in e}(e)){if(!_(e))return e;const{a:t,by:s,with:n}=e;return{a:t,by:e=>s(...n.map(t=>e.get(t)))}}if(function(e){return"is"in e}(e)){const{a:s,is:n}=e;return{a:s,by:t(n)}}if(function(e){return"via"in e}(e)){const{a:t,via:s}=e;return{a:t,by:e=>e.get(s)}}if(function(e){return"as"in e}(e)){if(function(e){return!("a"in e)}(e)&&(e=function(e){return{...e,a:e.as}}(e)),!_(e)){const{as:t}=e;return{a:e.a,by:e=>new t(e)}}const{as:t,with:s}=e;return{a:e.a,by:e=>new t(...s.map(t=>e.get(t)))}}throw new TypeError("Malformed context value specifier: "+JSON.stringify(e))}(e),[r]=this._seeding(s);return r.provide(n)}_seeding(e){const t=this._seeds.get(e);if(t)return t;const s=e.seeder(),n=[s,t=>s.seed(t,this._initial(e,t))];return this._seeds.set(e,n),n}seed(e,t){const[,s]=this._seeding(t);return s(e)}seedIn(e,t){return this.newValues(t).get.bind(e)}newValues(t=!0){if(!t&&this._nonCachedValues)return this._nonCachedValues;const s=new Map,n=this;class r extends v{get({[g]:r},i){const o=s.get(r);if(null!=o)return o;const[u,c]=function(t,s,r={}){const[i,o]=function(e,t){const{seedKey:s}=t,[r,i]=n._seeding(s);if(s!==t)return[r,e.get(s)];return[r,i(e)]}(t,s);let u;const c="or"in r;let a=e;const l={context:t,key:s,seeder:i,seed:o,hasFallback:c,get or(){return r.or},insert(e){u=e},fillBy:e=>(e(l),u),setup(e){const t=a;a=s=>{t(s),e(s)}}};if(s.grow(l),null!=u)return[u,a];if(!c)throw new x(s);return[r.or]}(this,r,i);return t&&c&&(s.set(r,u),c({key:r,context:this,registry:n})),u}}return t?new r:this._nonCachedValues=new r}append(e){return new m((t,s)=>{const[n,r]=this._seeding(t);return n.combine(r(s),e.seed(s,t),s)})}}class K{constructor(){this._providers=[]}provide(e){return this._providers.unshift(e),()=>{const t=this._providers.lastIndexOf(e);t>=0&&this._providers.splice(t,1)}}seed(t,n){const{length:r}=this._providers;if(!r)return n||e;const i=e=>s(e.bind(void 0,t));if(!n&&1===r)return i(this._providers[0]);const o=this._providers.map(i);return n&&o.push(n),k(o)}isEmpty(e){return null==e()}combine(t,s){return t===e?s:s===e?t:k([s,t])}}function k(e){return s(()=>{for(const t of e){const e=t();if(null!=e)return e}})}class D extends b{seeder(){return new K}}class F extends w{constructor(e,{seedKey:t}={}){super(e),this.seedKey=t||new D(this)}}class T extends F{constructor(t,{seedKey:s,byDefault:n=e}={}){super(t,{seedKey:s}),this.byDefault=n}grow(e){const t=e.seed();null!=t?e.insert(t):e.hasFallback||e.insert(this.byDefault(e.context,this))}}function C(e){return()=>{throw null!=e?e:new TypeError("Context destroyed")}}class E extends F{constructor(){super("context-supply")}grow(e){e.insert(e.seed()||(e.hasFallback?e.or:null)||e.context[h])}}const O=new E;class j{constructor(){this._providers=d([])}provide(e){return this._providers.it=[...this._providers.it,e],()=>{const t=this._providers.it,s=t.indexOf(e);s>=0&&(this._providers.it=t.slice(0,s).concat(t.slice(s+1)))}}seed(e,t=c()){return this.combine(t,function(e,t){return t.read().keepThru(t=>t.length?a(f(...i(i(o(t),t=>t(e)),V))):r(),S)}(e,this._providers))}isEmpty(){return!1}combine(e,t){return f(e,t).keepThru(S)}}function V(e){return null==e?c():function(e){return("object"==typeof e||"function"==typeof e)&&p(e)}(e)?y(e):c(e)}function S(...e){return r(...u(e))}class M extends b{get upKey(){return this}seeder(){return new j}}class B extends w{constructor(e,t){super(e.name+":up"),this._key=e,this.grow=e=>{const s=e.fillBy(t);if(s){const t=e.context.get(O,{or:null});t&&e.insert(s.tillOff(t))}}}get seedKey(){return this._key.seedKey}}class I extends w{constructor(e,{seedKey:t}={}){super(e),this.seedKey=t||new M(this)}createUpKey(e){return new B(this,e)}}class U extends I{constructor(t,{seedKey:s,byDefault:n=e}={}){super(t,s),this.byDefault=(e,t)=>n(e,t)||(()=>{throw new x(this)}),this.upKey=this.createUpKey(e=>{e.insert(e.seed.keepThru((...t)=>t.length?t[t.length-1]:e.hasFallback&&e.or?a(e.or):a(c(this.byDefault(e.context,this)))))})}grow(e){let t;e.context.get(this.upKey,e.hasFallback?{or:null!=e.or?c(e.or):e.or}:void 0).to(e=>t=e).whenOff(e=>t=C(e)),e.insert((...e)=>t(...e))}}class J extends I{constructor(t,{seedKey:s,byDefault:n=e}={}){super(t,s),this.byDefault=n}get upKey(){return this}grow(e){const t=e.seed.keepThru((...t)=>{if(t.length)return n(t[t.length-1]);let s;if(e.hasFallback)s=e.or;else{const t=this.byDefault(e.context,this);s=t&&c(t)}return a(null!=s?s:l(()=>{throw new x(this)}))}),s=e.context.get(O,{or:null});e.insert(s?t.tillOff(s):t)}}export{g as C,U as F,J as S,T as a,v as b,m as c,I as d,C as e,F as f,O as g};//# sourceMappingURL=context-values.d3464e6e.js.map
