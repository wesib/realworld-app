import{e,n as t,b as n,d as s,j as r,c as o,i}from"../proc7ts/call-thru.7c911e58.js";import{b as a,h as c,i as u,m as h,c as l,f as d,a as f}from"../proc7ts/a-iterable.8530fe0e.js";import{a as p,b as m,C as g,c as y,d as w,F as b,e as _,g as v}from"../proc7ts/context-values.873a330b.js";import{t as x,m as C,a as k,g as O,b as D,l as S,V as T,h as R,i as j,j as E,v as A,u as P,D as F,e as q,w as B,S as N,A as K,x as M,r as V,E as $}from"../proc7ts/fun-events.52c596e5.js";import{n as z,N as U,i as L,h as Q}from"../proc7ts/namespace-aliaser.1d67b636.js";import{i as I,n as W}from"../proc7ts/render-scheduler.88834b66.js";const H=new p("bootstrap-context");class Z extends m{static get[g](){return H}}function G(e){return(t,n)=>{const s=t.get(Z);return t===s?e(s,n):s.get(n)}}function J(e){return Array.isArray(e)}class X{constructor(e){this.items=null==e?new Set:J(e)?new Set(e):new Set([e])}get value(){return this.items.size<2?c(this.items):Array.from(this.items)}[Symbol.iterator](){return this.items[Symbol.iterator]()}add(...e){return this.addAll(e)}addAll(e){return u(e,e=>this.items.add(e)),this}get size(){return this.items.size}merge(e){return J(e)?this.addAll(e):null!=e&&this.items.add(e),this}}function Y(e,t=(()=>!0)){const n=Object.getPrototypeOf(e.prototype);if(null==n)return;const s=n.constructor;return t(s)?s:Y(s,t)}function ee(e,t,n,s){const r=!n,o=s(n?function(e){if(function(e){return void 0===e.value&&void 0===e.writable}(e))return e;const t=Symbol("value"),n=e.value,s=Object.assign(Object.assign({},e),{writable:void 0,value:void 0,get(){return t in this?this[t]:n}});return e.writable&&(s.set=function(e){this[t]=e}),delete s.writable,delete s.value,s}(n):function(e,t){const n=Symbol(String(t)+":value"),s=e[t];return{configurable:!0,enumerable:!0,get(){return n in this?this[n]:s},set(e){this[n]=e}}}(e,t));if(!r||!o)return o;Object.defineProperty(e,t,o)}function te(e,t,n=((e,t)=>t)){return e?t?function(...s){return n(e.apply(this,s),t.apply(this,s))}:e:t}function ne(e){return e.nodeType===Node.ELEMENT_NODE}class se{constructor(e){this.symbol=e}own(e){return e.hasOwnProperty(this.symbol)?e[this.symbol]:void 0}of(e){const t=this.own(e),n=Y(e),s=n&&this.of(n);return t?s?this.merge([s,t]):t:s}define(e,t){const n=this.own(e),s=h(t,t=>this.meta(t,e)),r=this.merge(n?d([[n],s]):s);return Object.defineProperty(e,this.symbol,{configurable:!0,value:r}),e}}class re{constructor(){this.promise=new Promise((e,t)=>{this._resolve=e,this._reject=t})}resolve(e){this._resolve(e)}reject(e){this._reject(e)}}const oe=Symbol("feature-def");class ie extends se{constructor(){super(oe)}merge(e){return a(e,(e,t)=>({needs:new X(e.needs).merge(t.needs).value,has:new X(e.has).merge(t.has).value,setup:te(e.setup,t.setup),init:te(e.init,t.init)}),{})}meta(e,t){const n=e[oe];return null==n?e:this.meta("function"==typeof n?e[oe](t):n,t)}}const ae=new ie,ce={[oe]:()=>({})},ue={of:e=>ae.of(e)||{},for:(e,t)=>ae.meta(t,e),merge:(...e)=>ae.merge(e),all:(...e)=>a(e,(e,t)=>({[oe]:n=>ue.merge(ue.for(n,e),ue.for(n,t))}),ce),define:(e,...t)=>ae.define(e,t)};function he(...e){return t=>ue.define(t,...e)}const le=new p("feature-context");class de extends Z{static get[g](){return le}whenDefined(e){return this.get(Z).whenDefined(e)}load(e){return this.get(Z).load(e)}}class fe extends Error{constructor(e){super("Circular feature needs: "+e.reduce((e,[t,n,s])=>(e||t.name)+` ${n} ${s.name}`,"")),this.needs=e}}class pe{[K](){return this.read()}}const me=Symbol("component-def");class ge extends se{constructor(){super(me)}merge(e){return a(e,(e,t)=>Object.assign(Object.assign(Object.assign({},e),t),{setup:te(e.setup,t.setup),define:te(e.define,t.define),feature:e.feature?t.feature?ue.merge(e.feature,t.feature):e.feature:t.feature}),{})}meta(e,t){const n=e[me];return null!=n?this.meta("function"==typeof n?e[me](t):n,t):null!=e[oe]?{feature:ue.for(t,e)}:L(e)?{name:e}:e}}const ye=new ge,we={[me]:()=>({})},be={of:e=>ye.of(e)||{},for:(e,t)=>ye.meta(t,e),merge:(...e)=>ye.merge(e),all:(...e)=>a(e,(e,t)=>({[me]:n=>be.merge(be.for(n,e),be.for(n,t))}),we),define:(e,...t)=>ye.define(e,t)};function _e(...e){const t=t=>be.define(t,...e);return t[me]=()=>be.all(...e),t}const ve=new p("component-context"),xe=new p("component-event-dispatcher",{byDefault(e){const t=e.get(ve),n=new F(t.element);return j(n).needs(t),{dispatch:e=>n.dispatch(e),on:e=>n.on(e)}}}),Ce=new p("content-root",{byDefault:e=>e.get(ve).element});class ke extends w{constructor(){super("state-updater"),this.upKey=this.createUpKey(e=>e.insert(e.seed.keepThru((...t)=>{if(t.length){const e=t.reduce((e,t)=>te(t,e),s);return(t,n,s)=>e(M(t),n,s)}return e.hasFallback&&e.or?D(e.or):s})))}grow(e){let t;e.context.get(this.upKey,e.hasFallback?{or:null!=e.or?k(e.or):e.or}:void 0).to(e=>t=e).whenOff(()=>t=s),e.insert((e,n,s)=>t(e,n,s))}}const Oe=new ke,De=Symbol("component-context");class Se extends m{constructor(){super(),this.updateState=(e,t,n)=>{this.get(Oe)(e,t,n)}}static get[g](){return ve}static of(e){const t=e[De];if(!t)throw TypeError("No component context found in "+e);return t}get contentRoot(){return this.get(Ce)}on(e){return this.get(xe).on(e)}dispatchEvent(e){this.get(xe).dispatch(e)}}class Te extends Event{get context(){return Se.of(this.target)}}const Re=Symbol("anonymous-component-property");function je(t){const n=({get:e,set:n},s=Re,r)=>_e({[me](o){const i=t({type:o,key:s,readable:!0,writable:r,enumerable:!1,configurable:!1,get:t=>e(t,s),set:(e,t)=>n(e,t,s)});return i&&i.componentDef||{}}}),s=(e,t)=>n({get:(t,n)=>e(t,n)},t,!1),r=(e,n,s)=>ee(e,n,s,s=>{const{get:r,set:o}=s,i=e.constructor,{get:a,set:c,configurable:u,enumerable:h,componentDef:l={}}=t({type:i,key:n,readable:!!s.get,writable:!!s.set,enumerable:!!s.enumerable,configurable:!!s.configurable,get:r?e=>r.call(e):Ee(n),set:o?(e,t)=>o.call(e,t):Ae(n)})||{};be.define(i,l);const d=Object.assign(Object.assign({},s),{configurable:null!=u?u:s.configurable,enumerable:null!=h?h:s.enumerable});return(a||c)&&(d.get=a&&function(){return a(this,n)},d.set=c&&function(e){c(this,e,n)}),d});return r.With=(e,t)=>n(e,t,!0),r.By=s,r.As=(t,n)=>s(e(t),n),r.Bind=(e,t=Re)=>{const s=Symbol(String(t)+":accessor"),r=n=>{const r=n[s];if(r)return r;const o=e(n,t);return n[s]={get:o.get?o.get.bind(o):Ee(t),set:o.set?o.set.bind(o):Ae(t)}};return n({get:e=>r(e).get(),set:(e,t)=>r(e).set(t)},t,!0)},r}function Ee(e){return()=>{throw new TypeError(`"${String(e)}" is not readable`)}}function Ae(e){return()=>{throw new TypeError(`"${String(e)}" is not writable`)}}const Pe=new p("bootstrap-context-registry");class Fe extends y{constructor(){super(),this.provide({a:Fe,is:this}),this.values=this.newValues()}static get[g](){return Pe}static create(){return new Fe}}const qe=new p("component-context-registry",{byDefault:G(()=>new Be)});class Be extends y{static get[g](){return qe}}const Ne=new p("definition-context-registry",{byDefault:G(e=>new Ke(e))});class Ke extends y{static get[g](){return Ne}}const Me=Symbol("post-def-setup");function Ve(e){if(e.hasOwnProperty(Me))return e[Me];const s=x(),r=new $,o=s.read().thru(e=>e?t(e):n()),i=V(o,r),a=Y(e,e=>me in e);if(a){const e=Ve(a);i.to(t=>e.send(t))}const c={on:i,send(e){r.send(e)},setup(e){s.it=e}};return Object.defineProperty(e,Me,{value:c}),c}const $e=new p("window",{byDefault:()=>window}),ze=new p("bootstrap-root",{byDefault:e=>e.get($e).document.body}),Ue=new p("default-namespace-aliaser");class Le extends w{constructor(){super("default-render-scheduler"),this.upKey=this.createUpKey(e=>e.insert(e.seed.keepThru((...t)=>t.length?Qe(e.context,t[t.length-1]):e.hasFallback&&e.or?D(e.or):Qe(e.context,W))))}grow(e){let t;e.context.get(this.upKey,e.hasFallback?{or:null!=e.or?k(e.or):e.or}:void 0).to(n=>t=Qe(e.context,n)).whenOff(e=>t=_(e)),e.insert((...e)=>t(...e))}}function Qe(e,t){return(n={})=>t(Object.assign(Object.assign({},n),{window:n.window||e.get($e)}))}const Ie=new Le;class We extends w{constructor(){super("element-adapter"),this.upKey=this.createUpKey(e=>e.insert(e.seed.keepThru((...t)=>{const n=t.reduce((e,t)=>n=>e(n)||t(n),He);return n!==He?n:e.hasFallback&&e.or?D(e.or):He})))}grow(e){let t;e.context.get(this.upKey,e.hasFallback?{or:null!=e.or?k(e.or):e.or}:void 0).to(e=>t=e).whenOff(e=>t=_(e)),e.insert(e=>t(e))}}function He(e){return e[De]}const Ze=new We,Ge=new b("element-observer",{byDefault:G(e=>{const t=e.get(Ze);class n extends MutationObserver{constructor(e){super(n=>{n.forEach(e=>{u(f(e.removedNodes),e=>{var t;return null===(t=function(e){var t;return null===(t=e[De])||void 0===t?void 0:t.mount}(e))||void 0===t?void 0:t.checkConnected()}),u(l(f(e.addedNodes),ne),e=>{var n,s;return null===(s=null===(n=t(e))||void 0===n?void 0:n.mount)||void 0===s?void 0:s.checkConnected()})}),e(n,this)})}observe(e,t){super.observe(e,Object.assign(Object.assign({},t),{childList:!0}))}}return e=>new n(e)})});const Je=Symbol("definition-context");function Xe(e){if(!e.hasOwnProperty(Je))throw new TypeError("Component is not defined: "+e);return e[Je]}const Ye=new p("custom-elements",{byDefault:G((function(e){const t=e.get($e).customElements,n=e.get(Ue);return new class extends et{define(e,s){if(L(e))return void t.define(Q.name(e,n),s);const r=Xe(e),{name:o,extend:i}=r.elementDef;o?i&&i.name?t.define(Q.name(o,n),s,{extends:i.name}):t.define(Q.name(o,n),s):nt(e).resolve(void 0)}whenDefined(e){if(L(e))return t.whenDefined(Q.name(e,n));const s=Xe(e),{name:r}=s.elementDef;return r?t.whenDefined(Q.name(r,n)):nt(e).promise}}}))});class et{static get[g](){return Ye}}const tt=Symbol("component-resolver");function nt(e){return e.hasOwnProperty(tt)?e[tt]:e[tt]=new re}const st=new p("definition-context"),rt=new p("element-def",{byDefault(e){const t=e.get(st).componentType,{name:n,extend:s}=be.of(t),r={get type(){return s&&s.type||e.get($e).HTMLElement},get name(){return s&&s.name}};return{get name(){return n},get extend(){return r}}}});class ot extends m{static get[g](){return st}get elementDef(){return this.get(rt)}connectTo(e){const t=this.mountTo(e);return t.connect(),t}}class it extends Se{constructor(e,t){super(),this._definitionContext=e,this.element=t,this._status=x(0);const n=e._newComponentRegistry();n.provide({a:Se,is:this}),this.get=n.newValues().get}get componentType(){return this._definitionContext.componentType}get component(){return this._component()}get settled(){return this._status.it>=3&&!j(this).isOff}get connected(){return this._status.it>=4&&!j(this).isOff}get[E](){return j(this._status)}_component(){throw new TypeError("Component is not constructed yet. Consider to use a `whenReady()` callback")}whenReady(e){return(this.whenReady=this._status.read().thru_(e=>e?t(this):n()).once().F)(e)}settle(){2===this._status.it&&(this._status.it=3)}whenSettled(e){return(this.whenSettled=this._status.read().thru_(e=>e>=3?o(this):n()).once().F)(e)}whenConnected(e){return(this.whenConnected=this._status.read().thru_(e=>e>=4?o(this):n()).once().F)(e)}destroy(e){try{this._status.done(e)}finally{delete this.component[De],delete this.element[De],this._component=at,function(e){const{parentNode:t}=e;t&&t.removeChild(e)}(this.element)}}_createComponent(){const t=this._definitionContext._whenComponent;let n=0;this.element[De]=this,t.readNotifier.once(e=>n=e(this,n)),this.whenConnected(()=>{t.readNotifier.to({supply:R().needs(this),receive:(e,t)=>{n=t(this,n)}})}),this._definitionContext._elementBuilder.components.send(this);const s=function(e){const t=e.componentType,n=t.prototype,s=n[De];n[De]=e;try{const r=new t(e);return r[De]=e,r}finally{n[De]=s}}(this);return this._component=e(s),this._status.it=1,this}_connect(){this._status.it=4}_created(){this._status.it<2&&(this._status.it=2),this.whenConnected(()=>this.dispatchEvent(new Te("wesib:component",{bubbles:!0})))}}function at(){throw new TypeError("Component destroyed already")}class ct extends class{get component(){return this.context.component}get element(){return this.context.element}}{constructor(e){super(),this.context=e}get connected(){return this.context.connected}connect(){this.context._connect()}checkConnected(){const e=this.context.element,t=e.ownerDocument,n=null!=t&&t.contains(e);return n!==this.connected&&(n?this.connect():this.context.destroy()),n}}class ut extends it{constructor(e,t){super(e,t),this.mount=this.mount=new ct(this)}}class ht extends it{get mount(){}}class lt{constructor(){const e=x(0),t=new $;this.onCreated=q(n=>{const s=e.it+1;t.on({supply:n.supply,receive:(e,t,r)=>{r<s&&n.receive({onRecurrent(t){e.onRecurrent(e=>t(e))}},t)}}),++e.it}),this.readNotifier=e.read().keepThru_(e=>(n,s)=>(t.send(n,s),e))}}class dt extends ot{constructor(e,s,r){var o,i;super(),this._bsContext=e,this._elementBuilder=s,this.componentType=r,this._whenComponent=new lt,this._ready=x(!1),this._whenReady=this._ready.read().thru(e=>e?t():n()),this._def=be.of(r);const a=new Ke(e.get(Ke).seedIn(this));a.provide({a:ot,is:this}),this.get=a.newValues().get,this._perTypeRegistry=new Be(a.seedIn(this));const c=this.whenReady().F,u=this.whenComponent().F,h={get componentType(){return r},get whenReady(){return c},get whenComponent(){return u},perDefinition:e=>a.provide(e),perComponent:e=>this._perTypeRegistry.provide(e)};null===(i=(o=this._def).setup)||void 0===i||i.call(o,h),Ve(r).setup(h)}get elementType(){return this._elementType()}whenReady(t){return(this.whenReady=this._whenReady.thru_(e(this)).once().F)(t)}mountTo(e){if(e[De])throw new Error(`Element ${e} already bound to component`);const t=new ut(this,e);t._createComponent();const{mount:n}=t;return n.checkConnected(),t._created(),t.settle(),n}whenComponent(e){return(this.whenComponent=this._whenComponent.onCreated.F)(e)}perComponent(e){return this._perTypeRegistry.provide(e)}_newComponentRegistry(){return this._bsContext.get(Be).append(this._perTypeRegistry)}_elementType(){throw new Error("Custom element class is not constructed yet. Consider to use a `whenReady()` callback")}_define(){var t,n;null===(n=(t=this._def).define)||void 0===n||n.call(t,this),this._elementBuilder.definitions.send(this),this._elementType=e(function(e){const t=e.get(rt);class n extends t.extend.type{constructor(){super();const t=new ht(e,this);t._createComponent(),t._created()}connectedCallback(){var e;null===(e=super.connectedCallback)||void 0===e||e.call(this),this[De]._connect()}disconnectedCallback(){var e;this[De].destroy(),null===(e=super.disconnectedCallback)||void 0===e||e.call(this)}}return n}(this)),this.componentType[Je]=this,this._ready.it=!0}}const ft=new p("element-builder",{byDefault:G((function(e){return{definitions:new $,components:new $,buildElement(t){const n=new dt(e,this,t);return n._define(),n}}}))});const pt=e(s);class mt{constructor(e){this._context=e,this._definitionQueue=[],e.whenReady(()=>{this._definitionQueue.forEach(e=>e()),delete this._definitionQueue})}get customElements(){return this._context.get(et)}define(e){this._definitionQueue.push(()=>{const t=this._context.get(ft).buildElement(e);this.customElements.define(e,t.elementType)})}}class gt extends de{constructor(e,t){super(),this._bsContext=e,this._loader=t,this._unloader=function(){const e=[];let t=t=>{const n=t();return e.push(n),n};return{supply:R(()=>{t=pt,u(f(e).reverse(),e=>e()),e.length=0}),add:e=>t(e)}}();const n=new y(e);n.provide({a:de,is:this}),this.get=n.newValues().get,this._componentRegistry=new mt(this)}get feature(){return this._loader.request.feature}whenReady(e){return(this.whenReady=O({st:this._loader.state,bs:x().by(this._bsContext.whenReady())}).thru(({st:[e],bs:[t]})=>t&&e?o(this):n()).once().F)(e)}onDefinition(e){return(this.onDefinition=this._bsContext.get(ft).definitions.on().tillOff(this._unloader.supply).F)(e)}onComponent(e){return(this.onComponent=this._bsContext.get(ft).components.on().tillOff(this._unloader.supply).F)(e)}provide(e){return this._unloader.add(()=>this._bsContext.get(Fe).provide(e))}perDefinition(e){return this._unloader.add(()=>this._bsContext.get(Ke).provide(e))}perComponent(e){return this._unloader.add(()=>this._bsContext.get(Be).provide(e))}setupDefinition(e){return function(e,t){const{on:n}=Ve(e);return q(e=>{n.to({supply:e.supply.needs(t.supply),receive(n,s){const r=s.whenReady().tillOff(t.supply).F,o=s.whenComponent().tillOff(t.supply).F;e.receive(n,{get componentType(){return s.componentType},get whenReady(){return r},get whenComponent(){return o},perDefinition:e=>t.add(()=>s.perDefinition(e)),perComponent:e=>t.add(()=>s.perComponent(e))})}})})}(e,this._unloader)}define(e){this._componentRegistry.define(e)}}const yt=Symbol("feature-key");class wt extends w{static of(e){return e.hasOwnProperty(yt)?e[yt]:e[yt]=new wt(e)}get upKey(){return this}constructor(e){super("feature:"+e.name)}grow(e){var s,r;e.insert((s=e.context.get(Z),r=e.seed.keepThru(bt),C(e=>{let n,o=k(),i=Promise.resolve("idle");return O({clause:r,deps:_t(s,r)}).keepThru_(({clause:[e],deps:r})=>{if(!e)return t();const[a,,c]=e;if(a.feature===n)return D(o);if(n=a.feature,c!==n)return D(o=s.get(wt.of(n)).keepThru_(e=>(e.to(i),i=e.stage,e)));const u=new xt(s,a,r).to(i),h=k(u);return D(o=C(e=>h.to(e).whenOff(()=>{i=u.unload()})).share())}).to(e)}).keepThru(function(){let e=null;return s=>e===s?n():(e=s,s?t(s):t())}())))}}function bt(...e){let t,n=!1;for(const s of e)switch(s[1]){case"is":n=!0,t||(t=s);break;case"has":t=s;break;case"needs":n=!0}return n?t:void 0}function _t(e,n){return n.keepThru_(n=>{if(!n)return t();const[{def:s}]=n,r=new X(s.needs);return r.size?D(S(...h(r,t=>e.get(wt.of(t)))).keepThru_(vt)):t()})}function vt(...e){return t(...l(h(e,e=>e[0]),i))}class xt{constructor(e,t,n){this.bsContext=e,this.request=t,this.deps=n,this.state=x(!1),this.down=new Promise(e=>this._down=e),this._stage=Promise.resolve(new kt(this))}get stage(){return this._stage.then(e=>e.after)}get ready(){return this.state.it}to(e){const t=this._stage;return this._stage=e.then(e=>t.then(t=>t[e]())),this}async setup(){await(this._stage=this._stage.then(e=>e.setup()))}async init(){await(this._stage=this._stage.then(e=>e.init()))}async unload(){const e=this._stage;delete this._stage;const t=await e,n=await t.stop();return this._down(),n}}class Ct{constructor(e,t=(()=>Promise.resolve())){this.loader=e,this._stop=t}idle(){return Promise.resolve(this)}stop(){return this._stop().then(()=>this.after)}perDep(e){const{deps:t}=this.loader;return Promise.all(t.map(t=>e(t)))}}class kt extends Ct{get after(){return"idle"}async setup(){var e;await this.perDep(e=>e.setup());const{bsContext:t,request:{def:n}}=this.loader,s=new gt(t,this.loader),r=s._unloader.supply;return null===(e=n.setup)||void 0===e||e.call(n,s),new Ot(this.loader,s,()=>Promise.resolve(r.off()))}init(){return this.setup().then(e=>e.init())}}class Ot extends Ct{constructor(e,t,n){super(e,n),this._context=t}get after(){return"setup"}setup(){return Promise.resolve(this)}async init(){var e;await this.perDep(e=>e.init());const{request:{def:t}}=this.loader;return null===(e=t.init)||void 0===e||e.call(t,this._context),new Dt(this)}}class Dt extends Ct{get after(){return"init"}constructor(e){super(e.loader,()=>e.stop()),e.loader.state.it=!0}setup(){return Promise.resolve(this)}init(){return Promise.resolve(this)}}class St{constructor(e,t,n){this._requester=e,this.feature=t,this._revoke=n,this._uses=0,this.def=function(e){let t=ue.of(e);if(me in e){t=ue.merge(t,{init(t){t.define(e)}});const{feature:n}=be.of(e);n&&(t=ue.merge(t,n))}return t}(t)}request(e){const t=this._requester,{registry:n}=t,s=[this,"is",this.feature];this._revokeBy(n.provide({a:wt.of(this.feature),is:s}));for(const s of new X(this.def.has)){const r=[this,"has",s];this._revokeBy(n.provide({a:wt.of(s),is:r}));const o=t.request(s,[...e,r]);this._revokeBy(()=>o.unuse())}for(const s of new X(this.def.needs)){const r=[this,"needs",s],o=t.request(s,[...e,r]);this._revokeBy(()=>o.unuse()),this._revokeBy(n.provide({a:wt.of(s),is:r}))}return this._uses=1,this}reuse(e){if(!this._uses)throw new fe(e.map(([{feature:e},t,n])=>[e,t,n]));return++this._uses,this}unuse(){--this._uses||this._revoke()}_revokeBy(e){this._revoke=te(e,this._revoke)}}const Tt=new p("feature-requester",{byDefault:G(e=>new Rt(e))});class Rt{constructor(e){this._map=new Map,this.registry=e.get(Fe)}static get[g](){return Tt}request(e,t=[]){const n=this._map.get(e);if(n)return n.reuse(t);const s=new St(this,e,()=>this._map.delete(e));return this._map.set(e,s),s.request(t)}}const jt=Symbol("when-defined");function Et(...e){const s=Fe.create(),{bootstrapContext:r,complete:o}=function(e){const s=x(0),r=e.values;const o=new class extends Z{constructor(){super(),this.get=r.get,e.provide({a:Ue,by:z}),e.provide({a:Z,is:this})}whenDefined(e){return function(e,t){if(t.hasOwnProperty(jt))return t[jt];const n=B(Promise.resolve(e.whenReady()).then(()=>e.get(et).whenDefined(t)).then(()=>Xe(t)));return t[jt]=n}(this,e)}whenReady(e){return(this.whenReady=s.read().thru(e=>e?t(this):n()).once().F)(e)}load(e){const t=C(t=>{const n=o.get(Rt).request(e),s=x({status:{feature:e,ready:!1}});this.get(wt.of(e)).to({supply:t.supply,receive(e,t){const n=t;s.it={status:{feature:n.request.feature,ready:n.ready},down:n.down},n.ready||n.init().then(()=>{s.it={status:{feature:n.request.feature,ready:!0},down:n.down}}).catch(console.error)}}).whenOff(()=>{n.unuse()}),s.read(t)}).share();let n;const s=t.to(({down:e})=>{n=e});return new class extends pe{get down(){return n}read(e){return(this.read=t.tillOff(s).keepThru(e=>e.status).F)(e)}dismiss(e){return s.off(e),n}}}};return{bootstrapContext:o,complete(){s.it=1}}}(s),i=1===e.length?e[0]:(a=e,ue.define(class{},{needs:a}));var a;return r.get(Rt).request(i),r.get(wt.of(i)).to(e=>{e.init().then(o).catch(console.error)}),r}const At=Symbol("attribute");function Pt(e){return[At,e]}function Ft(e,t=!0){if(!1===t)return s;if(!0===t||"function"==typeof t){const n=Pt(e),s=!0===t?qt:t;return(e,t,r)=>s(e,n,t,r)}return(e,n,s)=>qt(e,t,n,s)}function qt(e,t,n,s){Se.of(e).updateState(t,n,s)}function Bt(e){let t;for(let n=0;n<e.length;++n){const s=e[n];s<="Z"&&s>="A"?(t||(t=e.substring(0,n)),t+="-"+s.toLowerCase()):t&&(t+=s)}return t||e}function Nt(e,t,n){let s,r;if("string"==typeof n)s=Bt(n),r=Ft(s);else{if(n&&n.name)s=Bt(n.name);else{if("string"!=typeof t)throw new TypeError(`Attribute name is required as property key is not a string: ${e.constructor.name}.prototype.${String(t)}`);s=Bt(t)}r=Ft(s,n&&n.updateState)}return{name:s,change:r}}const Kt=new p("attribute-registry",{byDefault:e=>new Mt(e.get(ot))});class Mt{constructor(e){this._context=e,this.attrs=new Map,e.whenReady(({elementType:e})=>this.define(e)),e.whenComponent(({mount:e})=>{e&&this.mount(e)})}declareAttribute({name:e,change:t}){this.attrs.set(e,te(this.attrs.get(e),t))}define(e){const{attrs:t}=this;t.size&&(Object.defineProperty(e,"observedAttributes",{configurable:!0,enumerable:!0,value:Vt(e,t.keys())}),Object.defineProperty(e.prototype,"attributeChangedCallback",{configurable:!0,enumerable:!0,value:$t(e,t)}))}mount(e){const t=e.element,{attrs:n}=this,s=Array.from(n.keys());s.length&&new(0,this._context.get($e).MutationObserver)(e=>e.forEach(e=>{const s=e.attributeName;return n.get(s)(Se.of(t).component,t.getAttribute(s),e.oldValue)})).observe(t,{attributes:!0,attributeFilter:s,attributeOldValue:!0})}}function Vt(e,t){const n=e.observedAttributes;return Array.from(J(n)?new X(n).addAll(t).items:t)}function $t(e,t){const n=e.prototype.attributeChangedCallback;return n?function(e,s,r){const o=t.get(e);o?o(Se.of(this).component,r,s):n.call(this,e,s,r)}:function(e,n,s){t.get(e)(Se.of(this).component,s,n)}}function zt(e){return je(({type:t,key:n})=>{const s=Nt(t.prototype,n,e),{name:r}=s;return{componentDef:{define(e){e.get(Kt).declareAttribute(s)}},get:e=>Se.of(e).element.getAttribute(r),set(e,t){const{element:n}=Se.of(e);null!=t?n.setAttribute(r,t):n.removeAttribute(r)}}})}function Ut(e){return je(({type:t,get:n,key:s})=>{const{name:r,change:o}=Nt(t.prototype,s,e);return{componentDef:{define(e){e.get(Kt).declareAttribute({name:r,change(e,t,s){n(e).call(e,t,s),o(e,t,s)}})}}}})}function Lt(...e){return _e({define(t){const n=t.get(Kt);for(const t of e)if("string"==typeof t){const e=Bt(t);n.declareAttribute({name:e,change:Ft(e)})}else for(const[e,s]of Object.entries(t)){const t=Bt(e);n.declareAttribute({name:t,change:Ft(t,s)})}}})}class Qt extends v{constructor(){super("component-state")}grow(e){const t=e.seed();let n;if(null!=t)n=t,e.insert(n);else{if(e.hasFallback)return;n=new Wt,j(e.context.get(Se)).whenOff(e=>n.done(e)),e.insert(n)}e.setup(({registry:e})=>{e.provide({a:Oe,is:n.update})})}}const It=new Qt;class Wt extends N{static get[g](){return It}}const Ht=Symbol("state-property");function Zt(e){return[Ht,e]}function Gt(e,t,n,s){n!==s&&Se.of(e).updateState(t,n,s)}function Jt({updateState:e}={}){return je(({get:t,set:n,key:s})=>{if(!1!==e){const r=n,o=function(e,t=!0){if(!0===t||"function"==typeof t){const n=Zt(e),s=!0===t?Gt:t;return(e,t,r)=>s(e,n,t,r)}return(e,n,s)=>{n!==s&&Se.of(e).updateState(t,n,s)}}(s,e);n=(e,n)=>{const s=t(e);r(e,n),o(e,n,s)}}return{get:t,set:n}})}var Xt;class Yt extends T{constructor(e,t,n){super(),this._context=e,this._name=t,this._path=n,this[Xt]=R()}get it(){return this._context.element.getAttribute(this._name)}set it(e){j(this).isOff||(null==e?this._context.element.removeAttribute(this._name):this._context.element.setAttribute(this._name,e))}on(e){return(this.on=this._context.get(Wt).track(this._path).onUpdate().thru((e,n,s)=>t(n,s)).tillOff(this).F)(e)}}function en(e,t,n=Pt(t)){return new Yt(e,t,n)}Xt=E;const tn=new p("dom-property-registry",{byDefault:e=>new nn(e.get(ot))});class nn{constructor(e){this.props=new Map,e.whenReady(({elementType:e})=>this.define(e)),e.whenComponent(({mount:e})=>{e&&this.mount(e)})}declareDomProperty({key:e,descriptor:t}){this.props.set(e,t)}define(e){const t=e.prototype;this.props.forEach((e,n)=>{Object.defineProperty(t,n,e)})}mount({element:e}){this.props.forEach((t,n)=>{Object.defineProperty(e,n,t)})}}const sn=Symbol("dom-property");function rn(e){return[sn,e]}function on(e,t,n,s){n!==s&&Se.of(e).updateState(t,n,s)}function an(e={}){return je(t=>{const{key:n,get:s}=t;let{set:r}=t;const o=function(e,{propertyKey:t=e.key,configurable:n=e.configurable,enumerable:s=e.enumerable,writable:r=e.writable}){const o=e.key;return{key:t,descriptor:{configurable:n,enumerable:s,get:function(){return Se.of(this).component[o]},set:r?function(e){Se.of(this).component[o]=e}:void 0}}}(t,e);if(!1!==e.updateState){const t=function(e,t=!0){if(!0===t||"function"==typeof t){const n=rn(e),s=!0===t?on:t;return(e,t,r)=>s(e,n,t,r)}return(e,n,s)=>{n!==s&&Se.of(e).updateState(t,n,s)}}(n,e.updateState),o=r;r=(e,n)=>{const r=s(e);o(e,n),t(e,n,r)}}return{componentDef:{define(e){e.get(tn).declareDomProperty(o)}},get:s,set:r}})}const cn=Symbol("render"),un={spec:(e,t)=>r(t,e),fulfill(e,t={}){const{on:n=t.on,error:s}=e;return{on:n,error:s?s.bind(e):t.error&&t.error.bind(t)}},trigger(e,s={}){const{on:r=[]}=s;if("object"==typeof r&&A(r))return P(r).tillOff(e);const o=e.get(Wt).track(r).onUpdate().tillOff(e);return Array.isArray(r)&&!r.length?o.thru_(e=>e[0]===cn?n:t()):o}};class hn{constructor(e){this._context=e,this._renders=new Set}renderBy(e,t={}){const n=un.spec(this._context,t),r=un.trigger(this._context,n),o=this._context.get(Ie)(Object.assign(Object.assign({},un.fulfill(n)),{node:this._context.element})),i="connected"===n.when;let a=1;const c=i?()=>this._context.connected&&l():()=>this._context.settled&&l(),u=r.to(c).needs(this._context).whenOff((function(){2===a&&o(s);a=-1}));(i?this._context.whenConnected():this._context.whenSettled()).to(()=>a&&l());const h=I();return this._renders.add(d),u.whenOff(()=>this._renders.delete(d));function l(){a=2,o(f)}function d(){h(f)}function f(t){if(a>0)for(a=0;;){const n=e(t);if(n===e||"function"!=typeof n)break;e=n}}}renderNow(){this._renders.forEach(e=>e())}}const ln=new p("element-render-ctl",{byDefault:e=>new hn(e.get(Se))});const dn=new p("element-render-scheduler",{byDefault:function(e){const t=e.get(ln);return(e={})=>{const n=x(s);return t.renderBy(e=>{n.it(e)},un.fulfill({on:n.on()},e)),e=>{n.it=t=>e(t)}}}});function fn(e){return je(({get:t})=>({componentDef:{define(n){n.whenComponent(n=>{n.whenReady(()=>{const{component:s}=n,r=t(s).bind(s);n.get(ln).renderBy(r,e)})})}}}))}const pn=new p("shadow-content-root");class mn extends Event{get shadowRoot(){return this.target.shadowRoot}}const gn=new b("shadow-root-builder",{byDefault:()=>yn});function yn(e,t){const n=function(e,t){const n=e.shadowRoot;if(n)return n;if("attachShadow"in e)return e.attachShadow(t);return}(e.element,t);return n&&(n[De]=e,e.whenConnected(()=>e.dispatchEvent(new mn("wesib:shadowAttached",{bubbles:!0})))),n}const wn={mode:"open"};function bn(e=wn){return _e({setup(t){t.perComponent({a:pn,by:t=>t.get(gn)(t,e)}),t.perComponent({a:Ce,by:e=>e.get(pn,{or:null})})}})}const _n=new U("https://wesib.github.io/ns","b","wesib");export{Ut as A,$e as B,_e as C,an as D,ln as E,he as F,fn as R,Jt as S,_n as W,G as a,Et as b,bn as c,rn as d,Lt as e,zt as f,je as g,Se as h,un as i,be as j,Ue as k,cn as l,oe as m,dn as n,X as o,Z as p,ze as q,De as r,Ze as s,en as t,ne as u,Ge as v,Wt as w,te as x,Zt as y};//# sourceMappingURL=wesib.1dc70a8b.js.map
