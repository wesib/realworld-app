import{d as e,v as t,e as s,l as r,i as n,c as i,n as o}from"./call-thru.6175ec26.js";import{j as c,f as u,c as a,m as l,k as h,a as d}from"./a-iterable.2c8cebc4.js";import{a as f,b as p,m as y,j as b,t as g,l as w,k as x,f as _}from"./fun-events.c05c6315.js";const v=Symbol("context-key");class m{constructor(e){this.name=e}get[v](){return this}toString(){return`ContextKey(${this.name})`}}class K extends m{constructor(e){super(e.name+":seed")}get seedKey(){return this}grow(e){const{seeder:t,seed:s}=e;t.isEmpty(s)&&e.hasFallback||e.insert(s)}}class k extends Error{constructor(e,t="There is no value with key "+e){super(t),this.key=e}}function D(e){if(function(e){return"by"in e}(e)){if(!F(e))return e;const{a:t,by:s,with:r}=e;return{a:t,by:e=>s(...r.map(t=>e.get(t)))}}if(function(e){return"is"in e}(e)){const{a:t,is:r}=e;return{a:t,by:s(r)}}if(function(e){return"via"in e}(e)){const{a:t,via:s}=e;return{a:t,by:e=>e.get(s)}}if(function(e){return"as"in e}(e)){if(function(e){return!("a"in e)}(e)&&(e=function(e){return Object.assign(Object.assign({},e),{a:e.as})}(e)),!F(e)){const{as:t}=e;return{a:e.a,by:e=>new t(e)}}const{as:t,with:s}=e;return{a:e.a,by:e=>new t(...s.map(t=>e.get(t)))}}throw new TypeError("Malformed context value specifier: "+JSON.stringify(e))}function F(e){return"with"in e}class O{}class j{constructor(t){this._seeds=new Map,this._initial=null==t?e:"function"==typeof t?t:e=>t.get(e)}provide(e){const{a:{[v]:{seedKey:t}},by:s}=D(e),[r]=this._seeding(t);return r.provide(s)}_seeding(e){const t=this._seeds.get(e);if(t)return t;const s=e.seeder(),r=[s,t=>s.seed(t,this._initial(e,t))];return this._seeds.set(e,r),r}seed(e,t){const[,s]=this._seeding(t);return s(e)}seedIn(e,t){return this.newValues(t).get.bind(e)}newValues(t=!0){if(!t&&this._nonCachedValues)return this._nonCachedValues;const s=new Map,r=this;class n extends O{get({[v]:n},i){const o=s.get(n);if(null!=o)return o;const[c,u]=function(t,s,n={}){const[i,o]=function(e,t){const{seedKey:s}=t,[n,i]=r._seeding(s);if(s!==t)return[n,e.get(s)];return[n,i(e)]}(t,s);let c;const u="or"in n;let a=e;const l={context:t,key:s,seeder:i,seed:o,hasFallback:u,get or(){return n.or},insert(e){c=e},fillBy:e=>(e(l),c),setup(e){const t=a;a=s=>{t(s),e(s)}}};if(s.grow(l),null!=c)return[c,a];if(!u)throw new k(s);return[n.or]}(this,n,i);return t&&u&&(s.set(n,c),u({key:n,context:this,registry:r})),c}}return t?new n:this._nonCachedValues=new n}append(e){return new j((t,s)=>{const[r,n]=this._seeding(t);return r.combine(n(s),e.seed(s,t),s)})}}class E{constructor(){this._providers=[]}provide(e){return this._providers.push(e),()=>{const t=this._providers.indexOf(e);t>=0&&this._providers.splice(t,1)}}seed(e,t=c()){return u([t,V(e,this._providers)])}isEmpty(e){return h(e)}combine(e,t){return u([e,t])}}class T extends K{seeder(){return new E}}class C extends m{constructor(e,{seedKey:t}={}){super(e),this.seedKey=t||new T(this)}}function V(e,t){return a(l(t.map(t=>r(t.bind(void 0,e))),e=>e()),n)}class M extends C{constructor(e,{seedKey:s,byDefault:r=t()}={}){super(e,s),this.byDefault=r}grow(e){const t=Array.from(e.seed);if(t.length)e.insert(t);else if(!e.hasFallback){const t=this.byDefault(e.context,this);t&&e.insert(Array.from(t))}}}class S{constructor(){this._providers=[]}provide(e){return this._providers.unshift(e),()=>{const t=this._providers.lastIndexOf(e);t>=0&&this._providers.splice(t,1)}}seed(t,s){const{length:n}=this._providers;if(!n)return s||e;const i=e=>r(e.bind(void 0,t));if(!s&&1===n)return i(this._providers[0]);const o=this._providers.map(i);return s&&o.push(s),A(o)}isEmpty(e){return null==e()}combine(t,s){return t===e?s:s===e?t:A([s,t])}}function A(e){return r(()=>{for(const t of e){const e=t();if(null!=e)return e}})}class B extends K{seeder(){return new S}}class I extends m{constructor(e,{seedKey:t}={}){super(e),this.seedKey=t||new B(this)}}class U extends I{constructor(t,{seedKey:s,byDefault:r=e}={}){super(t,{seedKey:s}),this.byDefault=r}grow(e){const t=e.seed();null!=t?e.insert(t):e.hasFallback||e.insert(this.byDefault(e.context,this))}}function J(e){return()=>{throw null!=e?e:new TypeError("Context destroyed")}}class N extends I{constructor(){super("context-supply")}grow(e){e.insert(e.seed()||(e.hasFallback?e.or:null)||e.context[b])}}const $=new N;class q{constructor(){this._providers=g([])}provide(e){return this._providers.it=[...this._providers.it,e],()=>{const t=this._providers.it,s=t.indexOf(e);s>=0&&(this._providers.it=t.slice(0,s).concat(t.slice(s+1)))}}seed(e,t=f()){return this.combine(t,function(e,t){return t.read().keepThru(t=>t.length?p(w(...l(l(d(t),t=>t(e)),z))):o(),G)}(e,this._providers))}isEmpty(){return!1}combine(e,t){return w(e,t).keepThru(G)}}function z(e){return null==e?f():function(e){return("object"==typeof e||"function"==typeof e)&&x(e)}(e)?_(e):f(e)}function G(...e){return o(...u(e))}class H extends K{get upKey(){return this}seeder(){return new q}}class L extends m{constructor(e,t){super(e.name+":up"),this._key=e,this.grow=e=>{const s=e.fillBy(t);if(s){const t=e.context.get($,{or:null});t&&e.insert(s.tillOff(t))}}}get seedKey(){return this._key.seedKey}}class P extends m{constructor(e,{seedKey:t}={}){super(e),this.seedKey=t||new H(this)}createUpKey(e){return new L(this,e)}}class Q extends P{constructor(t,{seedKey:s,byDefault:r=e}={}){super(t,s),this.byDefault=(e,t)=>r(e,t)||(()=>{throw new k(this)}),this.upKey=this.createUpKey(e=>{e.insert(e.seed.keepThru((...t)=>t.length?t[t.length-1]:e.hasFallback&&e.or?p(e.or):p(f(this.byDefault(e.context,this)))))})}grow(e){let t;e.context.get(this.upKey,e.hasFallback?{or:null!=e.or?f(e.or):e.or}:void 0).to(e=>t=e).whenOff(e=>t=J(e)),e.insert((...e)=>t(...e))}}class R extends P{constructor(t,{seedKey:s,byDefault:r=e}={}){super(t,s),this.byDefault=r}get upKey(){return this}grow(e){const t=e.seed.keepThru((...t)=>{if(t.length)return i(t[t.length-1]);let s;if(e.hasFallback)s=e.or;else{const t=this.byDefault(e.context,this);s=t&&f(t)}return p(null!=s?s:y(()=>{throw new k(this)}))}),s=e.context.get($,{or:null});e.insert(s?t.tillOff(s):t)}}export{v as C,Q as F,M,R as S,U as a,O as b,j as c,P as d,J as e,I as f,$ as g};//# sourceMappingURL=context-values.8b8de6a6.js.map
