import{n as e,m as t,v as n,s,i as r,d as o,t as i,f as a,e as c,g as u,h}from"../proc7ts/primitives.90941b78.js";import{i as d,a as l,f}from"../proc7ts/push-iterator.e3c0f3f1.js";import{a as p,b as m,C as g,c as y,d as w,F as b,e as _,g as v}from"../proc7ts/context-values.de0fa082.js";import{n as x,a as C,b as k}from"../proc7ts/call-thru.104a1934.js";import{t as D,m as T,a as S,g as O,b as R,l as E,V as P,h as F,i as A,j,v as q,s as B,D as N,e as K,w as $,S as M,A as V,x as U,u as L,E as Q}from"../proc7ts/fun-events.751f4123.js";import{n as z,N as W,i as H,h as Z}from"../frontmeans/namespace-aliaser.54a2e6c0.js";import{i as G,n as I}from"../frontmeans/render-scheduler.c6ad5452.js";const J=new p("bootstrap-context");class X extends m{static get[g](){return J}}function Y(e){return(t,n)=>{const s=t.get(X);return t===s?e(s,n):s.get(n)}}function ee(e){return e.nodeType===Node.ELEMENT_NODE}class te{constructor(e){this.symbol=e}own(e){return e.hasOwnProperty(this.symbol)?e[this.symbol]:void 0}of(e){const t=this.own(e),n=h(e),s=n&&this.of(n);return t?s?this.merge([s,t]):t:s}define(e,t){const n=this.own(e),s=t.map((t=>this.meta(t,e))),r=this.merge(n?[n,...s]:s);return Object.defineProperty(e,this.symbol,{configurable:!0,value:r}),e}}class ne{constructor(){this.promise=new Promise(((e,t)=>{this._resolve=e,this._reject=t}))}resolve(e){this._resolve(e)}reject(e){this._reject(e)}}const se=Symbol("feature-def");class re extends te{constructor(){super(se)}merge(e){return e.reduce(((e,n)=>({needs:c(u(s(e.needs),n.needs)),has:c(u(s(e.has),n.has)),setup:t(e.setup,n.setup),init:t(e.init,n.init)})),{})}meta(e,t){const n=e[se];return null==n?e:this.meta("function"==typeof n?e[se](t):n,t)}}const oe=new re,ie={[se]:()=>({})},ae={of:e=>oe.of(e)||{},for:(e,t)=>oe.meta(t,e),merge:(...e)=>oe.merge(e),all:(...e)=>e.reduce(((e,t)=>({[se]:n=>ae.merge(ae.for(n,e),ae.for(n,t))})),ie),define:(e,...t)=>oe.define(e,t)};function ce(...e){return t=>ae.define(t,...e)}const ue=new p("feature-context");class he extends X{static get[g](){return ue}whenDefined(e){return this.get(X).whenDefined(e)}load(e){return this.get(X).load(e)}}class de extends Error{constructor(e){super("Circular feature needs: "+e.reduce(((e,[t,n,s])=>(e||t.name)+` ${n} ${s.name}`),"")),this.needs=e}}class le{[V](){return this.read()}}const fe=Symbol("component-def");class pe extends te{constructor(){super(fe)}merge(e){return e.reduce(((e,n)=>({...e,...n,setup:t(e.setup,n.setup),define:t(e.define,n.define),feature:e.feature?n.feature?ae.merge(e.feature,n.feature):e.feature:n.feature})),{})}meta(e,t){const n=e[fe];return null!=n?this.meta("function"==typeof n?e[fe](t):n,t):null!=e[se]?{feature:ae.for(t,e)}:H(e)?{name:e}:e}}const me=new pe,ge={[fe]:()=>({})},ye={of:e=>me.of(e)||{},for:(e,t)=>me.meta(t,e),merge:(...e)=>me.merge(e),all:(...e)=>e.reduce(((e,t)=>({[fe]:n=>ye.merge(ye.for(n,e),ye.for(n,t))})),ge),define:(e,...t)=>me.define(e,t)};function we(...e){const t=t=>ye.define(t,...e);return t[fe]=()=>ye.all(...e),t}const be=new p("component-context"),_e=new p("component-event-dispatcher",{byDefault(e){const t=e.get(be),n=new N(t.element);return A(n).needs(t),{dispatch:e=>n.dispatch(e),on:e=>n.on(e)}}}),ve=new p("content-root",{byDefault:e=>e.get(be).element});class xe extends w{constructor(){super("state-updater"),this.upKey=this.createUpKey((n=>n.insert(n.seed.keepThru(((...s)=>{if(s.length){const n=s.reduce(((e,n)=>t(n,e)),e);return(e,t,s)=>n(U(e),t,s)}return n.hasFallback&&n.or?R(n.or):e})))))}grow(t){let n;t.context.get(this.upKey,t.hasFallback?{or:null!=t.or?S(t.or):t.or}:void 0).to((e=>n=e)).whenOff((()=>n=e)),t.insert(((e,t,s)=>n(e,t,s)))}}const Ce=new xe,ke=Symbol("component-context");class De extends m{constructor(){super(),this.updateState=(e,t,n)=>{this.get(Ce)(e,t,n)}}static get[g](){return be}static of(e){const t=e[ke];if(!t)throw TypeError(`No component context found in ${String(e)}`);return t}get contentRoot(){return this.get(ve)}on(e){return this.get(_e).on(e)}dispatchEvent(e){this.get(_e).dispatch(e)}}class Te extends Event{get context(){return De.of(this.target)}}const Se=Symbol("anonymous-component-property");function Oe(e){const t=({get:t,set:n},s=Se,r)=>we({[fe](o){const i=e({type:o,key:s,readable:!0,writable:r,enumerable:!1,configurable:!1,get:e=>t(e,s),set:(e,t)=>n(e,t,s)});return i&&i.componentDef||{}}}),s=(e,n)=>t({get:(t,n)=>e(t,n)},n,!1),r=(t,n,s)=>function(e,t,n,s){const r=!n,o=s(n?i(n):a(e,t));if(!r||!o)return o;Object.defineProperty(e,t,o)}(t,n,s,(s=>{const{get:r,set:o}=s,i=t.constructor,{get:a,set:c,configurable:u,enumerable:h,componentDef:d={}}=e({type:i,key:n,readable:!!s.get,writable:!!s.set,enumerable:!!s.enumerable,configurable:!!s.configurable,get:r?e=>r.call(e):Re(n),set:o?(e,t)=>o.call(e,t):Ee(n)})||{};ye.define(i,d);const l={...s,configurable:null!=u?u:s.configurable,enumerable:null!=h?h:s.enumerable};return(a||c)&&(l.get=a&&function(){return a(this,n)},l.set=c&&function(e){c(this,e,n)}),l}));return r.With=(e,n)=>t(e,n,!0),r.By=s,r.As=(e,t)=>s(n(e),t),r.Bind=(e,n=Se)=>{const s=Symbol(`${String(n)}:accessor`),r=t=>{const r=t[s];if(r)return r;const o=e(t,n);return t[s]={get:o.get?o.get.bind(o):Re(n),set:o.set?o.set.bind(o):Ee(n)}};return t({get:e=>r(e).get(),set:(e,t)=>r(e).set(t)},n,!0)},r}function Re(e){return()=>{throw new TypeError(`"${String(e)}" is not readable`)}}function Ee(e){return()=>{throw new TypeError(`"${String(e)}" is not writable`)}}const Pe=new p("bootstrap-context-registry");class Fe extends y{constructor(){super(),this.provide({a:Fe,is:this}),this.values=this.newValues()}static get[g](){return Pe}static create(){return new Fe}}const Ae=new p("per-component-registry",{byDefault:Y((()=>new je))});class je extends y{}const qe=new p("per-definition-registry",{byDefault:Y((e=>new Be(e)))});class Be extends y{}const Ne=Symbol("post-def-setup");function Ke(e){if(e.hasOwnProperty(Ne))return e[Ne];const t=D(),n=new Q,s=t.read().thru((e=>e?x(e):C())),r=L(s,n),o=h(e,(e=>fe in e));if(o){const e=Ke(o);r.to((t=>e.send(t)))}const i={on:r,send(e){n.send(e)},setup(e){t.it=e}};return Object.defineProperty(e,Ne,{value:i}),i}const $e=new p("window",{byDefault:()=>window}),Me=new p("bootstrap-root",{byDefault:e=>e.get($e).document.body}),Ve=new p("default-namespace-aliaser");class Ue extends w{constructor(){super("default-render-scheduler"),this.upKey=this.createUpKey((e=>e.insert(e.seed.keepThru(((...t)=>t.length?Le(e.context,t[t.length-1]):e.hasFallback&&e.or?R(e.or):Le(e.context,I))))))}grow(e){let t;e.context.get(this.upKey,e.hasFallback?{or:null!=e.or?S(e.or):e.or}:void 0).to((n=>t=Le(e.context,n))).whenOff((e=>t=_(e))),e.insert(((...e)=>t(...e)))}}function Le(e,t){return(n={})=>t({...n,window:n.window||e.get($e)})}const Qe=new Ue;class ze extends w{constructor(){super("element-adapter"),this.upKey=this.createUpKey((e=>e.insert(e.seed.keepThru(((...t)=>{const n=t.reduce(((e,t)=>n=>e(n)||t(n)),We);return n!==We?n:e.hasFallback&&e.or?R(e.or):We})))))}grow(e){let t;e.context.get(this.upKey,e.hasFallback?{or:null!=e.or?S(e.or):e.or}:void 0).to((e=>t=e)).whenOff((e=>t=_(e))),e.insert((e=>t(e)))}}function We(e){return e[ke]}const He=new ze,Ze=new b("element-observer",{byDefault:Y((e=>{const t=e.get(He);class n extends MutationObserver{constructor(e){super((n=>{n.forEach((e=>{d(l(e.removedNodes),(e=>{var t;return null===(t=function(e){var t;return null===(t=e[ke])||void 0===t?void 0:t.mount}(e))||void 0===t?void 0:t.checkConnected()})),d(f(e.addedNodes,ee),(e=>{var n,s;return null===(s=null===(n=t(e))||void 0===n?void 0:n.mount)||void 0===s?void 0:s.checkConnected()}))})),e(n,this)}))}observe(e,t){super.observe(e,{...t,childList:!0})}}return e=>new n(e)}))});const Ge=Symbol("definition-context");function Ie(e){if(!e.hasOwnProperty(Ge))throw new TypeError(`Component is not defined: ${e}`);return e[Ge]}const Je=new p("custom-elements",{byDefault:Y((function(e){const t=e.get($e).customElements,n=e.get(Ve);return new class extends Xe{define(e,s){if(H(e))return void t.define(Z.name(e,n),s);const r=Ie(e),{name:o,extend:i}=r.elementDef;o?i&&i.name?t.define(Z.name(o,n),s,{extends:i.name}):t.define(Z.name(o,n),s):et(e).resolve(void 0)}whenDefined(e){if(H(e))return t.whenDefined(Z.name(e,n));const s=Ie(e),{name:r}=s.elementDef;return r?t.whenDefined(Z.name(r,n)):et(e).promise}}}))});class Xe{static get[g](){return Je}}const Ye=Symbol("component-resolver");function et(e){return e.hasOwnProperty(Ye)?e[Ye]:e[Ye]=new ne}const tt=new p("definition-context"),nt=new p("element-def",{byDefault(e){const t=e.get(tt).componentType,{name:n,extend:s}=ye.of(t),r={get type(){return s&&s.type||e.get($e).HTMLElement},get name(){return s&&s.name}};return{get name(){return n},get extend(){return r}}}});class st extends m{static get[g](){return tt}get elementDef(){return this.get(nt)}connectTo(e){const t=this.mountTo(e);return t.connect(),t}}class rt extends De{constructor(e,t){super(),this._definitionContext=e,this.element=t,this._status=D(0);const n=e._newComponentRegistry();n.provide({a:De,is:this}),this.get=n.newValues().get}get componentType(){return this._definitionContext.componentType}get component(){return this._component()}get settled(){return this._status.it>=3&&!A(this).isOff}get connected(){return this._status.it>=4&&!A(this).isOff}get[j](){return A(this._status)}_component(){throw new TypeError("Component is not constructed yet. Consider to use a `whenReady()` callback")}whenReady(e){return(this.whenReady=this._status.read().thru_((e=>e?x(this):C())).once().F)(e)}settle(){2===this._status.it&&(this._status.it=3)}whenSettled(e){return(this.whenSettled=this._status.read().thru_((e=>e>=3?k(this):C())).once().F)(e)}whenConnected(e){return(this.whenConnected=this._status.read().thru_((e=>e>=4?k(this):C())).once().F)(e)}destroy(e){try{this._status.done(e)}finally{delete this.component[ke],delete this.element[ke],this._component=ot,function(e){const{parentNode:t}=e;t&&t.removeChild(e)}(this.element)}}_createComponent(){const e=this._definitionContext._whenComponent;let t=0;this.element[ke]=this,e.readNotifier.once((e=>t=e(this,t))),this.whenConnected((()=>{e.readNotifier.to({supply:F().needs(this),receive:(e,n)=>{t=n(this,t)}})})),this._definitionContext._elementBuilder.components.send(this);const s=function(e){const t=e.componentType,n=t.prototype,s=n[ke];n[ke]=e;try{const r=new t(e);return r[ke]=e,r}finally{n[ke]=s}}(this);return this._component=n(s),this._status.it=1,this}_connect(){this._status.it=4}_created(){this._status.it<2&&(this._status.it=2),this.whenConnected((()=>this.dispatchEvent(new Te("wesib:component",{bubbles:!0}))))}}function ot(){throw new TypeError("Component destroyed already")}class it extends class{get component(){return this.context.component}get element(){return this.context.element}}{constructor(e){super(),this.context=e}get connected(){return this.context.connected}connect(){this.context._connect()}checkConnected(){const e=this.context.element,t=e.ownerDocument,n=null!=t&&t.contains(e);return n!==this.connected&&(n?this.connect():this.context.destroy()),n}}class at extends rt{constructor(e,t){super(e,t),this.mount=this.mount=new it(this)}}class ct extends rt{get mount(){}}class ut{constructor(){const e=D(0),t=new Q;this.onCreated=K((n=>{const s=e.it+1;t.on({supply:n.supply,receive:(e,t,r)=>{r<s&&n.receive({onRecurrent(t){e.onRecurrent((e=>t(e)))}},t)}}),++e.it})),this.readNotifier=e.read().keepThru_((e=>(n,s)=>(t.send(n,s),e)))}}class ht extends st{constructor(e,t,n){var s,r;super(),this._bsContext=e,this._elementBuilder=t,this.componentType=n,this._whenComponent=new ut,this._ready=D(!1),this._whenReady=this._ready.read().thru((e=>e?x():C())),this._def=ye.of(n);const o=new Be(e.get(qe).seeds());o.provide({a:st,is:this}),this.get=o.newValues().get;const i=e.get(Ae).append((e=>this.get(e)));this._perComponentRegistry=new je(i.seeds());const a=this.whenReady().F,c=this.whenComponent().F,u={get componentType(){return n},get whenReady(){return a},get whenComponent(){return c},perDefinition:e=>o.provide(e),perComponent:e=>this._perComponentRegistry.provide(e)};null===(r=(s=this._def).setup)||void 0===r||r.call(s,u),Ke(n).setup(u)}get elementType(){return this._elementType()}whenReady(e){return(this.whenReady=this._whenReady.thru_(n(this)).once().F)(e)}mountTo(e){if(e[ke])throw new Error(`Element ${String(e)} already bound to component`);const t=new at(this,e);t._createComponent();const{mount:n}=t;return n.checkConnected(),t._created(),t.settle(),n}whenComponent(e){return(this.whenComponent=this._whenComponent.onCreated.F)(e)}perComponent(e){return this._perComponentRegistry.provide(e)}_newComponentRegistry(){return new je(this._perComponentRegistry.seeds())}_elementType(){throw new Error("Custom element class is not constructed yet. Consider to use a `whenReady()` callback")}_define(){var e,t;null===(t=(e=this._def).define)||void 0===t||t.call(e,this),this._elementBuilder.definitions.send(this),this._elementType=n(function(e){const t=e.get(nt);class n extends t.extend.type{constructor(){super();const t=new ct(e,this);t._createComponent(),t._created()}connectedCallback(){var e;null===(e=super.connectedCallback)||void 0===e||e.call(this),this[ke]._connect()}disconnectedCallback(){var e;this[ke].destroy(),null===(e=super.disconnectedCallback)||void 0===e||e.call(this)}}return n}(this)),this.componentType[Ge]=this,this._ready.it=!0}}const dt=new p("element-builder",{byDefault:Y((function(e){return{definitions:new Q,components:new Q,buildElement(t){const n=new ht(e,this,t);return n._define(),n}}}))});const lt=n(e);class ft{constructor(e){this._context=e,this._definitionQueue=[],e.whenReady((()=>{this._definitionQueue.forEach((e=>e())),delete this._definitionQueue}))}get customElements(){return this._context.get(Xe)}define(e){this._definitionQueue.push((()=>{const t=this._context.get(dt).buildElement(e);this.customElements.define(e,t.elementType)}))}}class pt extends he{constructor(e,t){super(),this._bsContext=e,this._loader=t,this._unloader=function(){const e=[];let t=t=>{const n=t();return e.unshift(n),n};return{supply:F((()=>{t=lt,e.forEach((e=>e())),e.length=0})),add:e=>t(e)}}();const n=new y(e);n.provide({a:he,is:this}),this.get=n.newValues().get,this._componentRegistry=new ft(this)}get feature(){return this._loader.request.feature}whenReady(e){return(this.whenReady=O({st:this._loader.state,bs:D().by(this._bsContext.whenReady())}).thru((({st:[e],bs:[t]})=>t&&e?k(this):C())).once().F)(e)}onDefinition(e){return(this.onDefinition=this._bsContext.get(dt).definitions.on().tillOff(this._unloader.supply).F)(e)}onComponent(e){return(this.onComponent=this._bsContext.get(dt).components.on().tillOff(this._unloader.supply).F)(e)}provide(e){return this._unloader.add((()=>this._bsContext.get(Fe).provide(e)))}perDefinition(e){return this._unloader.add((()=>this._bsContext.get(qe).provide(e)))}perComponent(e){return this._unloader.add((()=>this._bsContext.get(Ae).provide(e)))}setupDefinition(e){return function(e,t){const{on:n}=Ke(e);return K((e=>{n.to({supply:e.supply.needs(t.supply),receive(n,s){const r=s.whenReady().tillOff(t.supply).F,o=s.whenComponent().tillOff(t.supply).F;e.receive(n,{get componentType(){return s.componentType},get whenReady(){return r},get whenComponent(){return o},perDefinition:e=>t.add((()=>s.perDefinition(e))),perComponent:e=>t.add((()=>s.perComponent(e)))})}})}))}(e,this._unloader)}define(e){this._componentRegistry.define(e)}}const mt=Symbol("feature-key");class gt extends w{static of(e){return e.hasOwnProperty(mt)?e[mt]:e[mt]=new gt(e)}get upKey(){return this}constructor(e){super(`feature:${e.name}`)}grow(e){var t,n;e.insert((t=e.context.get(X),n=e.seed.keepThru(yt),T((e=>{let s,r=S(),o=Promise.resolve("idle");return O({clause:n,deps:wt(t,n)}).keepThru_((({clause:[e],deps:n})=>{if(!e)return x();const[i,,a]=e;if(i.feature===s)return R(r);if(s=i.feature,a!==s)return R(r=t.get(gt.of(s)).keepThru_((e=>(e.to(o),o=e.stage,e))));const c=new _t(t,i,n).to(o),u=S(c);return R(r=T((e=>u.to(e).whenOff((()=>{o=c.unload()})))).share())})).to(e)})).keepThru(function(){let e=null;return t=>e===t?C():(e=t,t?x(t):x())}())))}}function yt(...e){let t,n=!1;for(const s of e)switch(s[1]){case"is":n=!0,t||(t=s);break;case"has":t=s;break;case"needs":n=!0}return n?t:void 0}function wt(e,t){return t.keepThru_((t=>{if(!t)return x();const[{def:n}]=t,r=s(n.needs);return r.size?R(E(...[...r].map((t=>e.get(gt.of(t))))).keepThru_(bt)):x()}))}function bt(...e){return x(...e.map((([e])=>e)).filter(r))}class _t{constructor(e,t,n){this.bsContext=e,this.request=t,this.deps=n,this.state=D(!1),this.down=new Promise((e=>this._down=e)),this._stage=Promise.resolve(new xt(this))}get stage(){return this._stage.then((e=>e.after))}get ready(){return this.state.it}to(e){const t=this._stage;return this._stage=e.then((e=>t.then((t=>t[e]())))),this}async setup(){await(this._stage=this._stage.then((e=>e.setup())))}async init(){await(this._stage=this._stage.then((e=>e.init())))}async unload(){const e=this._stage;delete this._stage;const t=await e,n=await t.stop();return this._down(),n}}class vt{constructor(e,t=(()=>Promise.resolve())){this.loader=e,this._stop=t}idle(){return Promise.resolve(this)}stop(){return this._stop().then((()=>this.after))}perDep(e){const{deps:t}=this.loader;return Promise.all(t.map((t=>e(t))))}}class xt extends vt{get after(){return"idle"}async setup(){var e;await this.perDep((e=>e.setup()));const{bsContext:t,request:{def:n}}=this.loader,s=new pt(t,this.loader),r=s._unloader.supply;return null===(e=n.setup)||void 0===e||e.call(n,s),new Ct(this.loader,s,(()=>Promise.resolve(r.off())))}init(){return this.setup().then((e=>e.init()))}}class Ct extends vt{constructor(e,t,n){super(e,n),this._context=t}get after(){return"setup"}setup(){return Promise.resolve(this)}async init(){var e;await this.perDep((e=>e.init()));const{request:{def:t}}=this.loader;return null===(e=t.init)||void 0===e||e.call(t,this._context),new kt(this)}}class kt extends vt{get after(){return"init"}constructor(e){super(e.loader,(()=>e.stop())),e.loader.state.it=!0}setup(){return Promise.resolve(this)}init(){return Promise.resolve(this)}}class Dt{constructor(e,t,n){this._requester=e,this.feature=t,this._revoke=n,this._uses=0,this.def=function(e){let t=ae.of(e);if(fe in e){t=ae.merge(t,{init(t){t.define(e)}});const{feature:n}=ye.of(e);n&&(t=ae.merge(t,n))}return t}(t)}request(e){const t=this._requester,{registry:n}=t,r=[this,"is",this.feature];this._revokeBy(n.provide({a:gt.of(this.feature),is:r}));for(const r of s(this.def.has)){const s=[this,"has",r];this._revokeBy(n.provide({a:gt.of(r),is:s}));const o=t.request(r,[...e,s]);this._revokeBy((()=>o.unuse()))}for(const r of s(this.def.needs)){const s=[this,"needs",r],o=t.request(r,[...e,s]);this._revokeBy((()=>o.unuse())),this._revokeBy(n.provide({a:gt.of(r),is:s}))}return this._uses=1,this}reuse(e){if(!this._uses)throw new de(e.map((([{feature:e},t,n])=>[e,t,n])));return++this._uses,this}unuse(){--this._uses||this._revoke()}_revokeBy(e){this._revoke=t(e,this._revoke)}}const Tt=new p("feature-requester",{byDefault:Y((e=>new St(e)))});class St{constructor(e){this._map=new Map,this.registry=e.get(Fe)}static get[g](){return Tt}request(e,t=[]){const n=this._map.get(e);if(n)return n.reuse(t);const s=new Dt(this,e,(()=>this._map.delete(e)));return this._map.set(e,s),s.request(t)}}const Ot=Symbol("when-defined");function Rt(...e){const t=Fe.create(),{bootstrapContext:n,complete:s}=function(e){const t=D(0),n=e.values;class s extends X{constructor(){super(),this.get=n.get,e.provide({a:Ve,by:z}),e.provide({a:X,is:this})}whenDefined(e){return function(e,t){if(t.hasOwnProperty(Ot))return t[Ot];const n=$(Promise.resolve(e.whenReady()).then((()=>e.get(Xe).whenDefined(t))).then((()=>Ie(t))));return t[Ot]=n}(this,e)}whenReady(e){return(this.whenReady=t.read().thru((e=>e?x(this):C())).once().F)(e)}load(e){const t=T((t=>{const n=r.get(St).request(e),s=D({status:{feature:e,ready:!1}});this.get(gt.of(e)).to({supply:t.supply,receive(e,t){const n=t;s.it={status:{feature:n.request.feature,ready:n.ready},down:n.down},n.ready||n.init().then((()=>{s.it={status:{feature:n.request.feature,ready:!0},down:n.down}})).catch(console.error)}}).whenOff((()=>{n.unuse()})),s.read(t)})).share();let n;const s=t.to((({down:e})=>{n=e}));class o extends le{get down(){return n}read(e){return(this.read=t.tillOff(s).keepThru((e=>e.status)).F)(e)}dismiss(e){return s.off(e),n}}return new o}}const r=new s;return{bootstrapContext:r,complete(){t.it=1}}}(t),r=1===e.length?e[0]:(o=e,ae.define(class{},{needs:o}));var o;return n.get(St).request(r),n.get(gt.of(r)).to((e=>{e.init().then(s).catch(console.error)})),n}const Et=Symbol("attribute");function Pt(e){return[Et,e]}function Ft(t,n=!0){if(!1===n)return e;if(!0===n||"function"==typeof n){const e=Pt(t),s=!0===n?At:n;return(t,n,r)=>s(t,e,n,r)}return(e,t,s)=>At(e,n,t,s)}function At(e,t,n,s){De.of(e).updateState(t,n,s)}function jt(e){let t;for(let n=0;n<e.length;++n){const s=e[n];s<="Z"&&s>="A"?(t||(t=e.substring(0,n)),t+="-"+s.toLowerCase()):t&&(t+=s)}return t||e}function qt(e,t,n){let s,r;if("string"==typeof n)s=jt(n),r=Ft(s);else{if(n&&n.name)s=jt(n.name);else{if("string"!=typeof t)throw new TypeError(`Attribute name is required as property key is not a string: ${e.constructor.name}.prototype.${String(t)}`);s=jt(t)}r=Ft(s,n&&n.updateState)}return{name:s,change:r}}const Bt=new p("attribute-registry",{byDefault:e=>new Nt(e.get(st))});class Nt{constructor(e){this._context=e,this.attrs=new Map,e.whenReady((({elementType:e})=>this.define(e))),e.whenComponent((({mount:e})=>{e&&this.mount(e)}))}declareAttribute({name:e,change:n}){this.attrs.set(e,t(this.attrs.get(e),n))}define(e){const{attrs:t}=this;t.size&&(Object.defineProperty(e,"observedAttributes",{configurable:!0,enumerable:!0,value:Kt(e,[...t.keys()])}),Object.defineProperty(e.prototype,"attributeChangedCallback",{configurable:!0,enumerable:!0,value:$t(e,t)}))}mount(e){const{element:t}=e,{attrs:n}=this,s=[...n.keys()];if(!s.length)return;new(0,this._context.get($e).MutationObserver)((e=>e.forEach((e=>{const s=e.attributeName;return n.get(s)(De.of(t).component,t.getAttribute(s),e.oldValue)})))).observe(t,{attributes:!0,attributeFilter:s,attributeOldValue:!0})}}function Kt(e,t){const n=e.observedAttributes;if(Array.isArray(n)){const e=new Set(n);t.forEach((t=>e.add(t))),t=[...e]}return t}function $t(e,t){const n=e.prototype.attributeChangedCallback;return n?function(e,s,r){const o=t.get(e);o?o(De.of(this).component,r,s):n.call(this,e,s,r)}:function(e,n,s){t.get(e)(De.of(this).component,s,n)}}function Mt(e){return Oe((({type:t,key:n})=>{const s=qt(t.prototype,n,e),{name:r}=s;return{componentDef:{define(e){e.get(Bt).declareAttribute(s)}},get:e=>De.of(e).element.getAttribute(r),set(e,t){const{element:n}=De.of(e);null!=t?n.setAttribute(r,t):n.removeAttribute(r)}}}))}function Vt(e){return Oe((({type:t,get:n,key:s})=>{const{name:r,change:o}=qt(t.prototype,s,e);return{componentDef:{define(e){e.get(Bt).declareAttribute({name:r,change(e,t,s){n(e).call(e,t,s),o(e,t,s)}})}}}}))}function Ut(...e){return we({define(t){const n=t.get(Bt);for(const t of e)if("string"==typeof t){const e=jt(t);n.declareAttribute({name:e,change:Ft(e)})}else for(const[e,s]of Object.entries(t)){const t=jt(e);n.declareAttribute({name:t,change:Ft(t,s)})}}})}class Lt extends v{constructor(){super("component-state")}grow(e){const t=e.seed();let n;if(null!=t)n=t,e.insert(n);else{if(e.hasFallback)return;n=new zt,A(e.context.get(De)).whenOff((e=>n.done(e))),e.insert(n)}e.setup((({registry:e})=>{e.provide({a:Ce,is:n.update})}))}}const Qt=new Lt;class zt extends M{static get[g](){return Qt}}const Wt=Symbol("state-property");function Ht(e){return[Wt,e]}function Zt(e,t,n,s){n!==s&&De.of(e).updateState(t,n,s)}function Gt({updateState:e}={}){return Oe((({get:t,set:n,key:s})=>{if(!1!==e){const r=n,o=function(e,t=!0){if(!0===t||"function"==typeof t){const n=Ht(e),s=!0===t?Zt:t;return(e,t,r)=>s(e,n,t,r)}return(e,n,s)=>{n!==s&&De.of(e).updateState(t,n,s)}}(s,e);n=(e,n)=>{const s=t(e);r(e,n),o(e,n,s)}}return{get:t,set:n}}))}var It;class Jt extends P{constructor(e,t,n){super(),this._context=e,this._name=t,this._path=n,this[It]=F()}get it(){return this._context.element.getAttribute(this._name)}set it(e){A(this).isOff||(null==e?this._context.element.removeAttribute(this._name):this._context.element.setAttribute(this._name,e))}on(e){return(this.on=this._context.get(zt).track(this._path).onUpdate().thru(((e,t,n)=>x(t,n))).tillOff(this).F)(e)}}function Xt(e,t,n=Pt(t)){return new Jt(e,t,n)}It=j;const Yt=new p("dom-property-registry",{byDefault:e=>new en(e.get(st))});class en{constructor(e){this.props=new Map,e.whenReady((({elementType:e})=>this.define(e))),e.whenComponent((({mount:e})=>{e&&this.mount(e)}))}declareDomProperty({key:e,descriptor:t}){this.props.set(e,t)}define(e){const t=e.prototype;this.props.forEach(((e,n)=>{Object.defineProperty(t,n,e)}))}mount({element:e}){this.props.forEach(((t,n)=>{Object.defineProperty(e,n,t)}))}}const tn=Symbol("dom-property");function nn(e){return[tn,e]}function sn(e,t,n,s){n!==s&&De.of(e).updateState(t,n,s)}function rn(e={}){return Oe((t=>{const{key:n,get:s}=t;let{set:r}=t;const o=function(e,{propertyKey:t=e.key,configurable:n=e.configurable,enumerable:s=e.enumerable,writable:r=e.writable}){const o=e.key;return{key:t,descriptor:{configurable:n,enumerable:s,get:function(){return De.of(this).component[o]},set:r?function(e){De.of(this).component[o]=e}:void 0}}}(t,e);if(!1!==e.updateState){const t=function(e,t=!0){if(!0===t||"function"==typeof t){const n=nn(e),s=!0===t?sn:t;return(e,t,r)=>s(e,n,t,r)}return(e,n,s)=>{n!==s&&De.of(e).updateState(t,n,s)}}(n,e.updateState),o=r;r=(e,n)=>{const r=s(e);o(e,n),t(e,n,r)}}return{componentDef:{define(e){e.get(Yt).declareDomProperty(o)}},get:s,set:r}}))}const on=Symbol("render"),an={spec:(e,t)=>o(t,e),fulfill(e,t={}){const{on:n=t.on,error:s}=e;return{on:n,error:s?s.bind(e):t.error&&t.error.bind(t)}},trigger(e,t={}){const{on:n=[]}=t;if("object"==typeof n&&q(n))return B(n).tillOff(e);const s=e.get(zt).track(n).onUpdate().tillOff(e);return Array.isArray(n)&&!n.length?s.thru_((e=>e[0]===on?C:x())):s}};class cn{constructor(e){this._context=e,this._renders=new Set}renderBy(t,n={}){const s=an.spec(this._context,n),r=an.trigger(this._context,s),o=this._context.get(Qe)({...an.fulfill(s),node:this._context.element}),i="connected"===s.when;let a=1;const c=i?()=>this._context.connected&&d():()=>this._context.settled&&d(),u=r.to(c).needs(this._context).whenOff((function(){2===a&&o(e);a=-1}));(i?this._context.whenConnected():this._context.whenSettled()).to((()=>a&&d()));const h=G();return this._renders.add(l),u.whenOff((()=>this._renders.delete(l)));function d(){a=2,o(f)}function l(){h(f)}function f(e){if(a>0)for(a=0;;){const n=t(e);if(n===t||"function"!=typeof n)break;t=n}}}renderNow(){this._renders.forEach((e=>e()))}}const un=new p("element-render-ctl",{byDefault:e=>new cn(e.get(De))});const hn=new p("element-render-scheduler",{byDefault:function(t){const n=t.get(un);return(t={})=>{const s=D(e);return n.renderBy((e=>{s.it(e)}),an.fulfill({on:s.on()},t)),e=>{s.it=t=>e(t)}}}});function dn(e){return Oe((({get:t})=>({componentDef:{define(n){n.whenComponent((n=>{n.whenReady((()=>{const{component:s}=n,r=t(s).bind(s);n.get(un).renderBy(r,e)}))}))}}})))}const ln=new p("shadow-content-root");class fn extends Event{get shadowRoot(){return this.target.shadowRoot}}const pn=new b("shadow-root-builder",{byDefault:()=>mn});function mn(e,t){const n=function(e,t){const n=e.shadowRoot;if(n)return n;if("attachShadow"in e)return e.attachShadow(t);return}(e.element,t);return n&&(n[ke]=e,e.whenConnected((()=>e.dispatchEvent(new fn("wesib:shadowAttached",{bubbles:!0}))))),n}const gn={mode:"open"};function yn(e=gn){return we({setup(t){t.perComponent({a:ln,by:t=>t.get(pn)(t,e)}),t.perComponent({a:ve,by:e=>e.get(ln,{or:null})})}})}const wn=new W("https://wesib.github.io/ns","b","wesib");export{Ut as A,$e as B,we as C,rn as D,un as E,ce as F,dn as R,Gt as S,wn as W,Y as a,Rt as b,Mt as c,Oe as d,De as e,an as f,ye as g,on as h,Vt as i,yn as j,nn as k,Ve as l,hn as m,X as n,se as o,ke as p,He as q,Me as r,Ze as s,Xt as t,ee as u,zt as v,Ht as w};//# sourceMappingURL=wesib.fd49a6cd.js.map
