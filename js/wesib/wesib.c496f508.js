import{a as e,j as t,C as n,h as o,F as s,l as r,f as i,g as c,m as a}from"../proc7ts/context-values.24d38e04.js";import{n as u,N as d,i as h,h as l}from"../frontmeans/namespace-aliaser.9467f14d.js";import{v as p,o as f,t as m,Q as y,A as g,R as w,f as b,I as _,i as v,d as x,S as C,T as S,c as R,b as D,U as k,g as E,E as T,P as O,u as j,a as A,m as N,W as P}from"../proc7ts/fun-events.3257bf57.js";import{v as B,m as F,g as K,n as $,t as M,h as V,j as L,k as U,s as W,o as q,a as z,p as H}from"../proc7ts/primitives.38e5298b.js";import{S as I}from"../proc7ts/supply.9762ee6d.js";import{W as Q,a as G}from"../proc7ts/workbench.31425b55.js";import{D as J}from"../frontmeans/dom-events.1d1a7091.js";import{i as X,n as Y}from"../frontmeans/render-scheduler.6f331202.js";import{i as Z,a as ee,f as te}from"../proc7ts/push-iterator.c8328864.js";import{h as ne}from"../frontmeans/httongue.6b868a5b.js";const oe=new e("bootstrap-context");class se extends t{static get[n](){return oe}}function re(e){return(t,n)=>{const o=t.get(se);return t===o?e(o,n):o.get(n)}}function ie(e){return e.nodeType===Node.ELEMENT_NODE}class ce{constructor(e){this.symbol=e}own(e,t){return e.hasOwnProperty(this.symbol)?Reflect.get(e,this.symbol,t):void 0}of(e,t=e){const n=this.own(e,t),o=q(e),s=o&&this.of(o,t);return n?s?this.merge([s,n]):n:s}define(e,t){const n=this.own(e),o=t.map((t=>this.meta(t,e))),s=this.merge(n?[n,...o]:o);return Object.defineProperty(e,this.symbol,{configurable:!0,value:s}),e}}function ae(e){const{parentNode:t}=e;return t&&ie(t)&&t||e.getRootNode().host||null}function ue(e,t,n,o){const s=t&&t.bind(e),r=o&&o.bind(n);return r?s?async(...e)=>{await s(...e),await r(...e)}:r:s}const de=Symbol("feature-def");class he extends ce{constructor(){super(de)}merge(e){return e.reduce(((e,t)=>({needs:L(U(W(e.needs),t.needs)),has:L(U(W(e.has),t.has)),setup:ue(e,e.setup,t,t.setup),init:ue(e,e.init,t,t.init)})),{})}meta(e,t){const n=e[de];return null==n?e:this.meta("function"==typeof n?e[de](t):n,t)}}const le=new he,pe={[de]:()=>({})},fe={of:e=>le.of(e)||{},for:(e,t)=>le.meta(t,e),merge:(...e)=>le.merge(e),all:(...e)=>e.reduce(((e,t)=>({[de]:n=>fe.merge(fe.for(n,e),fe.for(n,t))})),pe),define:(e,...t)=>le.define(e,t)};function me(...e){return t=>fe.define(t,...e)}const ye=new e("feature-context");class ge extends se{static get[n](){return ye}whenDefined(e){return this.get(se).whenDefined(e)}load(e,t){return this.get(se).load(e,t?(new I).needs(this).needs(t):this)}}const we=new e("bootstrap-workbench",{byDefault:re((()=>new Q))}),be=new G("feature setup"),_e=new G("feature init",{after:be}),ve=new G("component definition",{after:_e}),xe=Symbol("component-def");class Ce extends ce{constructor(){super(xe)}merge(e){return e.reduce(((e,t)=>({...e,...t,setup:F(e.setup,t.setup),define:F(e.define,t.define),feature:e.feature?t.feature?fe.merge(e.feature,t.feature):e.feature:t.feature})),{})}meta(e,t){const n=e[xe];return null!=n?this.meta("function"==typeof n?e[xe](t):n,t):null!=e[de]?{feature:fe.for(t,e)}:h(e)?{name:e}:e}}const Se=new Ce,Re={[xe]:()=>({})},De={of:e=>Se.of(e)||{},for:(e,t)=>Se.meta(t,e),merge:(...e)=>Se.merge(e),all:(...e)=>e.reduce(((e,t)=>({[xe]:n=>De.merge(De.for(n,e),De.for(n,t))})),Re),define:(e,...t)=>Se.define(e,t)};function ke(...e){const t=t=>De.define(t,...e);return t[xe]=()=>De.all(...e),t}const Ee=new e("component-context"),Te=new e("component-event-dispatcher",{byDefault(e){const t=e.get(Ee),n=new J(t.element);return n.supply.needs(t),{dispatch:e=>n.dispatch(e),on:e=>n.on(e)}}}),Oe=new e("content-root",{byDefault:e=>e.get(Ee).element});class je extends i{constructor(){super("state-updater"),this.upKey=this.createUpKey((e=>e.insert(e.seed.do(R(((...t)=>{if(t.length){const e=t.reduce(((e,t)=>F(t,e)),$);return D(((t,n,o)=>e(k(t),n,o)))}return e.hasFallback&&e.or?e.or:D($)}))))))}grow(e){let t;e.context.get(this.upKey,e.hasFallback?{or:null!=e.or?D(e.or):e.or}:void 0)((e=>t=e)).whenOff((()=>t=$)),e.insert(((e,n,o)=>t(e,n,o)))}}const Ae=new je,Ne=Symbol("component-context");class Pe extends t{constructor(){super(),this.updateState=(e,t,n)=>{this.get(Ae)(e,t,n)}}static get[n](){return Ee}static of(e){if("function"!=typeof e[Ne])throw new TypeError(`No component context found in ${String(e)}`);return e[Ne]()}get contentRoot(){return this.get(Oe)}on(e){return this.get(Te).on(e)}dispatchEvent(e){this.get(Te).dispatch(e)}}const Be=Symbol("component-slot"),Fe={of(e){const t=e[Be];return t||(e[Be]=new Ke)}};class Ke{constructor(){this._ctx=m(),this.whenReady=this._ctx.read.do(x((e=>e&&e.whenReady)),f)}get context(){return this._ctx.it}get read(){return this._ctx.read}[g](){return this._ctx.read}bind(e){this._ctx.it=e}unbind(){this._ctx.it=void 0}}class $e extends Event{get context(){return Fe.of(this.target).context}}const Me=Symbol("anonymous-component-property");function Ve(...e){const t=(t,n=Me,o)=>ke({[xe](s){const r=function(e,{get:t,set:n},o,s){return r=>{const i=r({type:e,key:o,readable:!0,writable:s,enumerable:!1,configurable:!1,get:e=>t(e,o),set:(e,t)=>n(e,t,o)});return i&&i.componentDef||{}}}(s,t,n,o);return De.all(...e.map(r))}}),n=(e,n)=>t({get:(t,n)=>e(t,n)},n,!1),o=(t,n,o)=>{const s=function(e,t){return(n,o)=>{const{get:s,set:r}=n,i=e.constructor,{get:c,set:a,configurable:u,enumerable:d,componentDef:h={}}=o({type:i,key:t,readable:!!n.get,writable:!!n.set,enumerable:!!n.enumerable,configurable:!!n.configurable,get:s?e=>s.call(e):Le(t),set:r?(e,t)=>r.call(e,t):Ue(t)})||{};De.define(i,h);const l={...n,configurable:null!=u?u:n.configurable,enumerable:null!=d?d:n.enumerable};return(c||a)&&(l.get=c&&function(){return c(this,t)},l.set=a&&function(e){a(this,e,t)}),l}}(t,n);return function(e,t,n,o){const s=!n,r=o(n?M(n):V(e,t));if(!s||!r)return r;Object.defineProperty(e,t,r)}(t,n,o,(t=>e.reduce(s,t)))};return o.With=(e,n)=>t(e,n,!0),o.By=n,o.As=(e,t)=>n(B(e),t),o.Bind=(e,n=Me)=>{const o=Symbol(`${String(n)}:accessor`),s=t=>{const s=t[o];if(s)return s;const r=e(t,n);return t[o]={get:r.get?r.get.bind(r):Le(n),set:r.set?r.set.bind(r):Ue(n)}};return t({get:e=>s(e).get(),set:(e,t)=>s(e).set(t)},n,!0)},o}function Le(e){return()=>{throw new TypeError(`"${String(e)}" is not readable`)}}function Ue(e){return()=>{throw new TypeError(`"${String(e)}" is not writable`)}}const We=new e("bootstrap-context-registry");class qe extends o{constructor(){super(),this.provide({a:qe,is:this}),this.values=this.newValues()}static get[n](){return We}static create(){return new qe}}const ze=new e("per-component-registry",{byDefault:re((()=>new He))});class He extends o{}const Ie=new e("per-definition-registry",{byDefault:re((e=>new Qe(e)))});class Qe extends o{}const Ge=Symbol("post-def-setup");function Je(e){if(e.hasOwnProperty(Ge))return e[Ge];const t=m(),n=new T,o=t.read.do(y(z)),s=O(o,n),r=q(e,(e=>xe in e));if(r){const e=Je(r);s((t=>e.send(t)))}const i={on:s,send(e){n.send(e)},setup(e){t.it=e}};return Object.defineProperty(e,Ge,{value:i}),i}const Xe=new e("window",{byDefault:()=>window}),Ye=new e("default-namespace-aliaser");class Ze extends i{constructor(){super("default-render-scheduler"),this.upKey=this.createUpKey((e=>e.insert(e.seed.do(R(((...t)=>t.length?D(et(e.context,t[t.length-1])):e.hasFallback&&e.or?e.or:D(et(e.context,Y))))))))}grow(e){let t;e.context.get(this.upKey,e.hasFallback?{or:null!=e.or?D(e.or):e.or}:void 0)((n=>t=et(e.context,n))).whenOff((e=>t=c(e))),e.insert(((...e)=>t(...e)))}}function et(e,t){return(n={})=>t({...n,window:n.window||e.get(Xe)})}const tt=new Ze;class nt extends i{constructor(){super("element-adapter"),this.upKey=this.createUpKey((e=>e.insert(e.seed.do(R(((...t)=>{if(0===t.length)return e.hasFallback&&e.or?e.or:D(ot);const n=e.context.get(Ye),o=new Map;for(const e of t){const t=l.name(e.to,n).toLowerCase(),s=o.get(t)||ot;o.set(t,(t=>{const n=s(t);return n||(e.bind(t),ot(t))}))}return D((e=>(o.get(e.tagName.toLowerCase())||ot)(e)))}))))))}grow(e){let t;e.context.get(this.upKey,e.hasFallback?{or:null!=e.or?D(e.or):e.or}:void 0)((e=>t=e)).whenOff((e=>t=c(e))),e.insert((e=>t(e)))}}function ot(e){const t=e[Be];return t&&t.context}const st=new nt,rt=new s("element-observer",{byDefault:re((e=>{const t=e.get(st);class n extends MutationObserver{constructor(e){super((n=>{n.forEach((e=>{Z(ee(e.removedNodes),(e=>{var t;return null===(t=function(e){var t,n;return null===(n=null===(t=e[Be])||void 0===t?void 0:t.context)||void 0===n?void 0:n.mount}(e))||void 0===t?void 0:t.checkConnected()})),Z(te(e.addedNodes,ie),(e=>{var n,o;return null===(o=null===(n=t(e))||void 0===n?void 0:n.mount)||void 0===o?void 0:o.checkConnected()}))})),e(n,this)}))}observe(e,t){super.observe(e,{...t,childList:!0})}}return e=>new n(e)}))});const it=Symbol("definition-context");function ct(e){if(!e.hasOwnProperty(it))throw new TypeError(`Component is not defined: ${e}`);return e[it]}const at=new e("custom-elements",{byDefault:re((function(e){const t=e.get(Xe).customElements,n=e.get(Ye);return new class extends ut{define(e,o){if(h(e))return void t.define(l.name(e,n),o);const s=ct(e),{tagName:r,extend:i}=s.elementDef;r?i&&i.name?t.define(r,o,{extends:i.name}):t.define(r,o):ht(e).resolve(void 0)}whenDefined(e){if(h(e))return t.whenDefined(l.name(e,n));const o=ct(e),{name:s}=o.elementDef;return s?t.whenDefined(l.name(s,n)):ht(e).promise()}}}))});class ut{static get[n](){return at}}const dt=Symbol("component-resolver");function ht(e){return e.hasOwnProperty(dt)?e[dt]:e[dt]=H()}const lt=new e("definition-context"),pt=new e("element-def",{byDefault(e){const t=e.get(lt).componentType,{name:n,extend:o}=De.of(t);let s;const r={get type(){return o&&o.type||e.get(Xe).HTMLElement},get name(){return o&&o.name}};return{get name(){return n},get tagName(){return s||n&&(s=l.name(n,e.get(Ye)))},get extend(){return r}}}});class ft extends t{static get[n](){return lt}get elementDef(){return this.get(pt)}connectTo(e){const t=this.mountTo(e);return t.connect(),t}}const mt=Symbol("newComponent");function yt(e){const t=e.componentType;return t[mt]||(t[mt]=function(e){const t=Symbol("component-context");let n;return e.prototype[Ne]=function(){return this[t]||(this[t]=n)},function(e){const o=n;n=e;try{const s=new this(e);return s[t]=e,s}finally{n=o}}}(t)),t[mt](e)}class gt{constructor(e){this._ctx=e,this._val=m(0),this._canSettle=0}get supply(){return this._val.supply}read(){return(this.read=B(this._val.read.do(N(B(this._ctx)))))()}isReady(){return!!this._val.it&&!this._val.supply.isOff}onceReady(){return(this.onceReady=B(this.read().do(wt((({ready:e})=>e)))))()}whenReady(){return(this.whenReady=B(this.onceReady().do(f)))()}isSettled(){return this._val.it>=2&&!this._val.supply.isOff}onceSettled(){return(this.onceSettled=B(this.read().do(wt((({settled:e})=>e)))))()}whenSettled(){return(this.whenSettled=B(this.onceSettled().do(f)))()}isConnected(){return this._val.it>=3&&!this._val.supply.isOff}onceConnected(){return(this.onceConnected=B(this.read().do(P((({connected:e})=>e)))))()}whenConnected(){return(this.whenConnected=B(this.onceConnected().do(f)))()}ready(){this._val.it=1}settle(){this._canSettle&&this._val.it<2&&(this._val.it=2)}connect(){this._val.it=3}create(){this._canSettle=1}}function wt(e){return t=>E((n=>{let o=!1;t({supply:n.supply,receive(t,s){const r=e(s);r&&!o&&(o=r,n.receive(t,s))}})}))}class bt extends Pe{constructor(e,t){super(),this._definitionContext=e,this.element=t;const n=e._newComponentRegistry();n.provide({a:Pe,is:this}),this.get=n.newValues().get,this._status=new gt(this)}get componentType(){return this._definitionContext.componentType}get component(){return this._component()}get supply(){return this._status.supply}get ready(){return this._status.isReady()}get onceReady(){return this._status.onceReady()}get whenReady(){return this._status.whenReady()}get settled(){return this._status.isSettled()}get onceSettled(){return this._status.onceSettled()}get whenSettled(){return this._status.whenSettled()}get connected(){return this._status.isConnected()}get onceConnected(){return this._status.onceConnected()}get whenConnected(){return this._status.whenConnected()}get readStatus(){return this._status.read()}_component(){throw new TypeError("Component is not constructed yet. Consider to use a `whenReady()` callback")}settle(){this._status.settle()}destroy(e){try{this._status.supply.off(e)}finally{delete this.component[Ne],this._component=_t,Fe.of(this.element).unbind(),function(e){const{parentNode:t}=e;t&&t.removeChild(e)}(this.element)}}_createComponent(){const e=this._definitionContext._whenComponent;let t=0;Fe.of(this.element).bind(this),e.readNotifier.do(f)((e=>t=e(this,t))),this.whenConnected((()=>{e.readNotifier({supply:(new I).needs(this),receive:(e,n)=>{t=n(this,t)}})})),this._definitionContext._elementBuilder.components.send(this);const n=yt(this);return this._component=B(n),this._status.ready(),this}_connect(){this._status.connect()}_created(){this._status.create(),this.whenConnected((()=>this.dispatchEvent(new $e("wesib:component",{bubbles:!0}))))}}function _t(){throw new TypeError("Component destroyed already")}class vt extends class{get component(){return this.context.component}get element(){return this.context.element}}{constructor(e){super(),this.context=e}get connected(){return this.context.connected}connect(){this.context._connect()}checkConnected(){const e=this.context.element,t=e.ownerDocument,n=null!=t&&t.contains(e);return n!==this.connected&&(n?this.connect():this.context.destroy()),n}}class xt extends bt{constructor(e,t){super(e,t),this.mount=this.mount=new vt(this)}}class Ct extends bt{get mount(){}}class St{constructor(){const e=m(0),t=new T;this.onCreated=E((n=>{const o=e.it+1;t.on({supply:n.supply,receive:(e,t,s)=>{s<o&&n.receive({onRecurrent(t){e.onRecurrent((e=>t(e)))}},t)}}),++e.it})),this.readNotifier=e.read.do(N((e=>(n,o)=>(t.send(n,o),e))))}}class Rt extends ft{constructor(e,t,n){var o,s;super(),this._bsContext=e,this._elementBuilder=t,this.componentType=n,this._whenComponent=new St,this._ready=m(!1),this._whenReady=this._ready.read.do(j(((e,t)=>t&&e()))),this._def=De.of(n);const r=new Qe(e.get(Ie).seeds());r.provide({a:ft,is:this}),this.get=r.newValues().get;const i=e.get(ze).append((e=>this.get(e)));this._perComponentRegistry=new He(i.seeds()),this.whenReady=this._whenReady.do(A(B(this)),f);const c={get componentType(){return n},whenReady:this.whenReady,whenComponent:this.whenComponent,perDefinition:e=>r.provide(e),perComponent:e=>this._perComponentRegistry.provide(e)};null===(s=(o=this._def).setup)||void 0===s||s.call(o,c),Je(n).setup(c)}get elementType(){return this._elementType()}get whenComponent(){return this._whenComponent.onCreated}mountTo(e){if(Fe.of(e).context)throw new Error(`Element ${String(e)} already bound to component`);const t=new xt(this,e);t._createComponent();const{mount:n}=t;return n.checkConnected(),t._created(),t.settle(),n}perComponent(e){return this._perComponentRegistry.provide(e)}_newComponentRegistry(){return new He(this._perComponentRegistry.seeds())}_elementType(){throw new Error("Custom element class is not constructed yet. Consider to use a `whenReady()` callback")}_define(){var e,t;null===(t=(e=this._def).define)||void 0===t||t.call(e,this),this._elementBuilder.definitions.send(this),this._elementType=B(function(e){const t=e.get(pt);class n extends t.extend.type{constructor(){super();const t=new Ct(e,this);t._createComponent(),t._created()}connectedCallback(){var e;null===(e=super.connectedCallback)||void 0===e||e.call(this),Fe.of(this).context._connect()}disconnectedCallback(){var e;Fe.of(this).context.destroy(),null===(e=super.disconnectedCallback)||void 0===e||e.call(this)}}return n}(this)),this.componentType[it]=this,this._ready.it=!0}}const Dt=new e("element-builder",{byDefault:re((function(e){return{definitions:new T,components:new T,buildElement(t){const n=new Rt(e,this,t);return n._define(),n}}}))});class kt{constructor(e){this._setup=e,this._components=void 0}define(e){this._components?this._components.push(e):(this._components=[e],this._defineAll(this._components))}_defineAll(e){const t=this._setup.get(we).work(ve).run((()=>{const t=this._setup.get(ut),n=this._setup.get(Dt);e.forEach((e=>{const o=n.buildElement(e);t.define(e,o.elementType)})),this._components=void 0}));this._setup.initBy(B(t))}}class Et extends ge{constructor(e,t){super(),this.feature=e,this._setup=t,this._bsContext=t.get(se);const n=t.get(t.module),s=new o(this._bsContext);s.provide({a:ge,is:this}),this.get=s.newValues().get,this.whenReady=n.read.do(p((({ready:e})=>e&&this)),f),this._componentRegistry=new kt(this._setup)}get supply(){return this._setup.supply}get onDefinition(){return this._onDefinition||(this._onDefinition=this._setup.get(Dt).definitions.on.do(_(this)))}get onComponent(){return this._onComponent||(this._onComponent=this._setup.get(Dt).components.on.do(_(this)))}provide(e){return this._bsContext.get(qe).provide(e).needs(this)}perDefinition(e){return this._bsContext.get(Ie).provide(e).needs(this)}perComponent(e){return this._bsContext.get(ze).provide(e).needs(this)}setupDefinition(e){return function(e,t){const{on:n}=Je(e);return E((e=>{n({supply:e.supply.needs(t),receive(n,o){const s=o.whenReady.do(_(t)),r=o.whenComponent.do(_(t));e.receive(n,{get componentType(){return o.componentType},get whenReady(){return s},get whenComponent(){return r},perDefinition:e=>o.perDefinition(e).needs(t),perComponent:e=>o.perComponent(e).needs(t)})}})}))}(e,this.supply)}define(e){this._componentRegistry.define(e)}}const Tt=Symbol("feature-module");class Ot extends r{constructor(e){super(e.name,function(e){const t=function(e){let t=fe.of(e);if(xe in e){t=fe.merge(t,{init(t){t.define(e)}});const{feature:n}=De.of(e);n&&(t=fe.merge(t,n))}return t}(e),n=[],o=[];for(const e of W(t.has))n.push(Ot.of(e));for(const e of W(t.needs))o.push(Ot.of(e));return{needs:o,has:n,async setup(n){var o;const s=n.get(we),r=new Et(e,n);if(t.init){const e=s.work(_e).run((async()=>{await t.init(r)}));n.initBy(B(e))}await(null===(o=t.setup)||void 0===o?void 0:o.call(t,r))}}}(e)),this.feature=e}static of(e){return Object.prototype.hasOwnProperty.call(e,Tt)?e[Tt]:e[Tt]=new Ot(e)}async setup(e){const t=e.get(we);await t.work(be).run((()=>super.setup(e)))}}const jt=Symbol("when-defined");function At(...e){const t=qe.create(),{bootstrapContext:n,complete:o}=function(e){const t=m(0),n=e.values;class o extends se{constructor(){super(),this.get=n.get,this.whenReady=t.read.do(y((e=>!!e&&this)),f),e.provide({a:Ye,by:u}),e.provide({a:se,is:this})}whenDefined(e){return function(e,t){if(t.hasOwnProperty(jt))return t[jt];const n=C(Promise.resolve(e.whenReady).then((()=>e.get(ut).whenDefined(t))).then((()=>ct(t))));return t[jt]=n}(this,e)}load(t,n){const o=Ot.of(t),s=e.provide(o);n?s.needs(n):n=s;const r=function(e,t){const n=m({feature:e,ready:!1});return t.read((({module:e,ready:t})=>{const o=e.feature,s=n.it;s&&s.feature===o&&s.ready===t||(n.it={feature:o,ready:t})})).needs(t),n.supply.needs(t),n.read}(t,this.get(o).use(n));return{read:r,whenReady:r.do(p((e=>e.ready&&e)),f),[g]:B(r),supply:s}}}return{bootstrapContext:new o,complete(){t.it=1}}}(t),s=1===e.length?e[0]:(r=e,fe.define(class{},{needs:r}));var r;return n.load(s).read.do(p((({ready:e})=>e)),f).then(o).catch(console.error),n}const Nt=Symbol("attribute");function Pt(e,t=!0){if(!1===t)return $;if(!0===t||"function"==typeof t){const n=function(e){return[Nt,e]}(e),o=!0===t?Bt:t;return(e,t,s)=>o(e,n,t,s)}return(e,n,o)=>Bt(e,t,n,o)}function Bt(e,t,n,o){Pe.of(e).updateState(t,n,o)}function Ft(e,t,n){let o,s;if("string"==typeof n)o=ne(n),s=Pt(o);else{if(n&&n.name)o=ne(n.name);else{if("string"!=typeof t)throw new TypeError(`Attribute name is required as property key is not a string: ${e.constructor.name}.prototype.${String(t)}`);o=ne(t)}s=Pt(o,n&&n.updateState)}return{name:o,change:s}}const Kt=new e("attribute-registry",{byDefault:e=>new $t(e.get(ft))});class $t{constructor(e){this._context=e,this.attrs=new Map,e.whenReady((({elementType:e})=>this.define(e))),e.whenComponent((({mount:e})=>{e&&this.mount(e)}))}declareAttribute({name:e,change:t}){this.attrs.set(e,F(this.attrs.get(e),t))}define(e){const{attrs:t}=this;t.size&&(Object.defineProperty(e,"observedAttributes",{configurable:!0,enumerable:!0,value:Mt(e,[...t.keys()])}),Object.defineProperty(e.prototype,"attributeChangedCallback",{configurable:!0,enumerable:!0,value:Vt(e,t)}))}mount(e){const{element:t}=e,{attrs:n}=this,o=[...n.keys()];if(!o.length)return;new(0,this._context.get(Xe).MutationObserver)((o=>o.forEach((o=>{const s=o.attributeName;return n.get(s)(e.context.component,t.getAttribute(s),o.oldValue)})))).observe(t,{attributes:!0,attributeFilter:o,attributeOldValue:!0})}}function Mt(e,t){const n=e.observedAttributes;if(Array.isArray(n)){const e=new Set(n);t.forEach((t=>e.add(t))),t=[...e]}return t}function Vt(e,t){const n=e.prototype.attributeChangedCallback;return n?function(e,o,s){const r=t.get(e);r?Fe.of(this).whenReady((({component:e})=>r(e,s,o))):n.call(this,e,o,s)}:function(e,n,o){Fe.of(this).whenReady((({component:s})=>{t.get(e)(s,o,n)}))}}function Lt(e){return Ve((({type:t,key:n,set:o})=>{const{name:s,change:r}=Ft(t.prototype,n,e);return{componentDef:{define(e){e.get(Kt).declareAttribute({name:s,change(e,t,n){o(e,t),r(e,t,n)}})}},get:e=>Pe.of(e).element.getAttribute(s),set(e,t){const{element:n}=Pe.of(e);null!=t?n.setAttribute(s,t):n.removeAttribute(s),o(e,t)}}}))}function Ut(e){return Ve((({type:t,get:n,key:o})=>{const{name:s,change:r}=Ft(t.prototype,o,e);return{componentDef:{define(e){e.get(Kt).declareAttribute({name:s,change(e,t,o){n(e).call(e,t,o),r(e,t,o)}})}}}}))}class Wt extends a{constructor(){super("component-state")}grow(e){const t=e.seed();let n;if(null!=t)n=t,e.insert(n);else{if(e.hasFallback)return;n=new zt,e.context.get(Pe).supply.whenOff((e=>n.done(e))),e.insert(n)}e.setup((({registry:e})=>{e.provide({a:Ae,is:n.update})}))}}const qt=new Wt;class zt extends S{static get[n](){return qt}}const Ht=Symbol("state-property");function It(e){return[Ht,e]}function Qt(e,t,n,o){n!==o&&Pe.of(e).updateState(t,n,o)}function Gt({updateState:e}={}){return Ve((({get:t,set:n,key:o})=>{if(!1!==e){const s=n,r=function(e,t=!0){if(!0===t||"function"==typeof t){const n=It(e),o=!0===t?Qt:t;return(e,t,s)=>o(e,n,t,s)}return(e,n,o)=>{n!==o&&Pe.of(e).updateState(t,n,o)}}(o,e);n=(e,n)=>{const o=t(e);s(e,n),r(e,n,o)}}return{get:t,set:n}}))}const Jt=new e("dom-property-registry",{byDefault:e=>new Xt(e.get(ft))});class Xt{constructor(e){this.props=new Map,e.whenReady((({elementType:e})=>this.define(e))),e.whenComponent((({mount:e})=>{e&&this.mount(e)}))}declareDomProperty({key:e,descriptor:t}){this.props.set(e,t)}define(e){const t=e.prototype;this.props.forEach(((e,n)=>{Object.defineProperty(t,n,e)}))}mount({element:e}){this.props.forEach(((t,n)=>{Object.defineProperty(e,n,t)}))}}const Yt=Symbol("dom-property");function Zt(e){return[Yt,e]}function en(e,t,n,o){n!==o&&Pe.of(e).updateState(t,n,o)}function tn(e={}){return Ve((t=>{const{key:n,get:o}=t;let{set:s}=t;const r=function(e,{propertyKey:t=e.key,configurable:n=e.configurable,enumerable:o=e.enumerable,writable:s=e.writable}){const r=e.key;return{key:t,descriptor:{configurable:n,enumerable:o,get:function(){var e;return null===(e=Fe.of(this).context)||void 0===e?void 0:e.component[r]},set:s?function(e){Fe.of(this).whenReady((({component:t})=>t[r]=e))}:void 0}}}(t,e);if(!1!==e.updateState){const t=function(e,t=!0){if(!0===t||"function"==typeof t){const n=Zt(e),o=!0===t?en:t;return(e,t,s)=>o(e,n,t,s)}return(e,n,o)=>{n!==o&&Pe.of(e).updateState(t,n,o)}}(n,e.updateState),r=s;s=(e,n)=>{const s=o(e);r(e,n),t(e,n,s)}}return{componentDef:{define(e){e.get(Jt).declareDomProperty(r)}},get:o,set:s}}))}const nn=Symbol("render"),on={spec:(e,t)=>K(t,e),fulfill(e,t={}){const{on:n=t.on,error:o}=e;return{on:n,error:o?o.bind(e):t.error&&t.error.bind(t)}},trigger(e,t={}){const{on:n=[]}=t;if(("object"==typeof n||"function"==typeof n)&&w(n))return b(n).do(_(e));const o=e.get(zt).track(n).onUpdate.do(_(e));return Array.isArray(n)&&!n.length?o.do(v(((e,t)=>t[0]!==nn&&e()))):o}};class sn{constructor(e){this._context=e,this._renders=new Set}renderBy(e,t={}){const n=on.spec(this._context,t),o=on.trigger(this._context,n),s=this._context.get(tt)({...on.fulfill(n),node:this._context.element}),r="connected"===n.when;let i=1;const c=o(r?()=>this._context.connected&&u():()=>this._context.settled&&u()).needs(this._context).whenOff((function(){2===i&&s($);i=-1}));(r?this._context.whenConnected:this._context.whenSettled)((()=>i&&u()));const a=X();return this._renders.add(d),c.whenOff((()=>this._renders.delete(d)));function u(){i=2,s(h)}function d(){a(h)}function h(t){if(i>0)for(i=0;;){const n=e(t);if(n===e||"function"!=typeof n)break;e=n}}}renderNow(){this._renders.forEach((e=>e()))}}const rn=new e("element-render-ctl",{byDefault:e=>new sn(e.get(Pe))});const cn=new e("element-render-scheduler",{byDefault:function(e){const t=e.get(rn);return(e={})=>{const n=m($);return t.renderBy((e=>{n.it(e)}),on.fulfill({on:n.on},e)),e=>{n.it=t=>e(t)}}}});function an(e){return Ve((({get:t})=>({componentDef:{define(n){n.whenComponent((n=>{n.whenReady((()=>{const{component:o}=n,s=t(o).bind(o);n.get(rn).renderBy(s,e)}))}))}}})))}const un=new e("shadow-content-root");class dn extends Event{get shadowRoot(){return this.target.shadowRoot}}const hn=new s("shadow-root-builder",{byDefault:()=>ln});function ln(e,t){const n=function(e,t){const n=e.shadowRoot;if(n)return n;if("attachShadow"in e)return e.attachShadow(t);return}(e.element,t);return n&&e.whenConnected((()=>e.dispatchEvent(new dn("wesib:shadowAttached",{bubbles:!0})))),n}const pn={mode:"open"};function fn(e=pn){return ke({setup(t){t.perComponent({a:un,by:t=>t.get(hn)(t,e)}),t.perComponent({a:Oe,by:e=>e.get(un,{or:null})})}})}const mn=new d("https://wesib.github.io/ns","b","wesib");export{Lt as A,Xe as B,ke as C,tn as D,cn as E,me as F,an as R,Gt as S,mn as W,re as a,At as b,Ve as c,Pe as d,on as e,De as f,nn as g,Ut as h,fn as i,Zt as j,Ye as k,se as l,de as m,Be as n,st as o,ae as p,Fe as q,rt as r,ie as s,zt as t,It as u};//# sourceMappingURL=wesib.c496f508.js.map
