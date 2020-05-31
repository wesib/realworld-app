import{n as t,v as e,a as s,i as n,g as r}from"./primitives.f8acf1f5.js";import{b as i,a as o,n as a}from"./call-thru.7f76a0d9.js";import{m as c,c as u,f as h,b as l,i as p,o as d,g as _,h as f}from"./a-iterable.3b78dc26.js";import{V as m,r as y,j as g,d as v,k as b,E as w,g as k,O as T,A,e as F,D as x,f as O,a as j,x as E,i as S,c as M,h as C,v as D,w as R}from"./fun-events.c2220af5.js";import{N as I,i as z,c as B,n as N}from"./namespace-aliaser.b34c0889.js";import{n as q}from"./render-scheduler.f464fdbf.js";import{D as L}from"./delta-set.96431edd.js";const P=Symbol("in-aspect"),V={instance:null,convertTo:t};function G(t,e,s,n,r){return void 0===n&&(n=s(t,r)),{instance:n,convertTo:n=>G(n,e,s,void 0,t),attachTo:n=>G(n,e,s,t.aspect(e)||s(n))}}function H(t,s,n=null){return G(t,s,e(null),n)}function J(t){return{instance:t,convertTo(){return this}}}const K=new I("https://surol.github.io/input-aspects/ns","inasp","input-aspects"),Q={applyTo:()=>J(N())},U={get[P](){return Q},to:t=>({applyAspect:e=>e===Q?J(t):void 0})},W={applyTo:()=>J(q)},X={get[P](){return W},to:t=>({applyAspect:e=>e===W?J(t):void 0})};function Y(e,...s){if(!e)return tt;const r=st(e);if(!s.length)return r;const i=c(s,st);return(e,s)=>{const o=r(e,s),a=u([[o],h(c(i,t=>t(e,s)),n)]),p=l(a,(t,e)=>e.applyAspect?s=>t(s)||e.applyAspect(s):t,t);return et(o)?{applyAspect:p}:{set:o.set.bind(o),get:o.get.bind(o),applyAspect:p}}}function Z(t){return t?(e=t,Array.isArray(e)?Y(...t):Y(t)):Y();var e}const $={applyAspect(){}};function tt(){return $}function et(t){return!t.set}function st(t){return"function"==typeof t?t:e(t)}class nt extends m{constructor(){super(...arguments),this._aspects=new Map}aspect(t){return this._aspect(t[P]).instance}setup(e,s=t){return P in e?s(this.aspect(e),this):e(this),this}convert(t,...e){return new rt(this,Y(t,...e))}_aspect(t){const e=this._aspects.get(t);if(e)return e;const s=this._applyAspect(t)||t.applyTo(this);return this._aspects.set(t,s),s}_applyAspect(t){}}class rt extends nt{constructor(t,e){super(),this._on=new y,this._supply=g().needs(t);let n,r=0;const i=e(t,this);let o,a,c;et(i)?(o=s,a=s,c=e=>{const s=t._aspect(e);return s.attachTo?s.attachTo(this):s.convertTo(this)}):(o=i.set,a=i.get,c=e=>t._aspect(e).convertTo(this)),this._applyAspect=t=>{var e;return(null===(e=i.applyAspect)||void 0===e?void 0:e.call(i,t))||c(t)},this._it=v([o(t.it),0]),b(this._it).needs(this._supply),this._it.on(([t],[e])=>{t!==e&&this._on.send(t,e)}).cuts(this._on),t.on(t=>{t!==n&&(this._it.it=[o(t),++r])}).cuts(this),this._it.on(([e,s])=>{if(s!==r){r=s,n=a(e);try{t.it=n}finally{n=void 0}}})}get[w](){return this._supply}get it(){return this._it.it[0]}set it(t){const[e,s]=this._it.it;t!==e&&(this._it.it=[t,s+1])}on(t){return(this.on=this._on.on().F)(t)}}class it extends nt{constructor(t){super(),this._control=t}get[w](){return this._supply||(this._supply=g().needs(this._control))}get it(){return this._control.it}set it(t){this._control.it=t}on(t){return(this.on=this._control.on().F)(t)}}class ot extends nt{constructor({aspects:t}){super(),this._aspectConversion=Z(t)(new it(this),this)}_applyAspect(t){return this._aspectConversion.applyAspect(t)||super._applyAspect(t)}}const at={applyTo:t=>H(t,ct)};class ct extends ot{static get[P](){return at}_applyAspect(t){return t===at?H(this,ct,this):super._applyAspect(t)}}class ut{[T](){return this.on()}[A](){return this.read()}}const ht={applyTo:t=>J(new pt(t))};class lt{static get[P](){return ht}[T](){return this.on()}[A](){return this.read()}}class pt extends lt{constructor(t){super(),this._control=t,this._map=new Map,this._on=new y,b(this._on).needs(this._control)}add(t){const e=this._map.get(t);if(e)return e;const s=g(()=>{this._map.delete(t),this._on.send([],[t])});return this._map.set(t,s),this._on.send([t],[]),s.needs(this._control).needs(t.parent)}on(t){return(this.on=this._on.on().F)(t)}read(t){const e=()=>this._map.keys();return(this.read=O(this.on().thru(e),()=>[e()]).F)(t)}}const dt={applyTo:t=>H(t,_t)};class _t extends ot{static get[P](){return dt}_applyAspect(t){return t===dt?H(this,_t,this):super._applyAspect(t)}}const ft={applyTo:t=>G(t,mt,t=>new vt(t))};class mt{static get[P](){return ft}[T](){return this.on()}[A](){return this.read()}static hasData(t){return"off"!==t&&"-"!==t[0]}done(t){return this.own.done(t),this}}class yt extends m{constructor(t){super(),this._tracker=v(t?function(t){return null!=t.getAttribute("disabled")?"off":null!=t.getAttribute("readonly")?"ro":"on"}(t.element):"on")}get[w](){return b(this._tracker)}get it(){return this._tracker.it}set it(t){switch(t){case"off":case"ro":case"-on":case"-ro":break;default:t="on"}this._tracker.it=t}on(t){return(this.on=this._tracker.on().F)(t)}}class gt{constructor(){this._all=new Set,this._on=new y;const t=O(this._on.on().thru(()=>this._all),r(this._all));this.read=t.keepThru(t=>F(S(...t)),wt)}add(t){const e=g(()=>{this._all.delete(t),this._on.send()});return this._all.add(t),this._on.send(),e}}class vt extends mt{constructor(t){super(),this._control=t,this._derived=new gt;const e=t.aspect(_t);this.own=new yt(e),b(this.own).needs(t),this.derive(t.aspect(lt).read().keepThru_(bt)),e&&this.read(t=>function(t,e){switch(e){case"off":t.setAttribute("disabled","");break;case"ro":case"-ro":t.setAttribute("disabled",""),t.removeAttribute("disabled"),t.setAttribute("readonly","");break;default:t.setAttribute("disabled",""),t.removeAttribute("disabled"),t.setAttribute("readonly",""),t.removeAttribute("readonly")}}(e.element,t))}read(t){let e="on";return(this.read=O(k({derived:this._derived.read,own:this.own}).thru(({derived:[t],own:[s]})=>{let n;if("off"===s||"off"===t)n="off";else{let e=!1;"-"===s[0]&&(e=!0,s=s.substring(1)),"-"===t[0]&&(e=!0,t=t.substring(1)),n="ro"===t?"ro":s,e&&(n="-"+n)}return e===n?a():i(e=n)}),r(e)).F)(t)}on(t){let e="on";return(this.on=this.read().thru(t=>{const s=e;return s===t?a():i(e=t,s)}).F)(t)}derive(t){return this._derived.add(j(E(t)?t:t(this._control)).tillOff(this._control)).needs(this._control)}}function bt(t){const e=Array.from(t);if(!e.length)return i("on");const s=e.map(({parent:t})=>t.aspect(mt));return F(S(...s).keepThru_(wt))}function wt(...t){return kt(...u(t))}function kt(...t){let e=!1,s=!1;for(const n of t)switch(n){case"off":return"off";case"ro":e=!0;break;case"-on":s=!0;break;case"-ro":s=!0,e=!0}return s?e?"-ro":"-on":e?"ro":"on"}const Tt={applyTo:t=>G(t,At,t=>k({value:t,mode:t.aspect(mt)}).keepThru(({value:[t],mode:[e]})=>mt.hasData(e)?i(t):i()))},At={get[P](){return Tt}},Ft={applyTo:t=>H(t,xt)};class xt extends ct{static get[P](){return Ft}_applyAspect(t){return t===Ft?H(this,xt,this):super._applyAspect(t)}}class Ot extends ut{remove(t){this.set(t,void 0)}}const jt={};class Et{constructor(t){this._map=t}get(t){const e=this._map.get(t);return e&&e[0]}[Symbol.iterator](){return f(c(this._map.values(),([t])=>t))}entries(){return f(c(this._map.entries(),([t,[e]])=>[t,e]))}}class St{constructor(t){this._controls=t,this._supply=g(),this._map=new Map}set(t,e,s,n){const r=this._map.get(t);let i;if(e){i=g();const o=this.newEntry(t,e,i);let a=!0;r&&(r[0]===e?a=!1:n.push([t,r])),a?(this.modify().set(t,o),s.push([t,o])):this._map.set(t,o)}else i=D(),r&&(n.push([t,r]),this.modify().delete(t));return r&&r[1].off(jt),i}newEntry(t,e,s){return[e,g(e=>{e!==jt&&this._controls.remove(t)}).needs(this._supply).needs(s).whenOff(t=>s.off(t===jt?void 0:t))]}modify(){if(this._shot){const t=new Map;p(this._map.entries(),([e,s])=>t.set(e,s)),this._shot=void 0,this._map=t}return this._map}snapshot(){return this._shot||(this._shot=new Et(this._map))}clear(){const t=[],e=[];return p(this._map.keys(),s=>this.set(s,void 0,t,e)),e}}class Mt extends Ot{constructor(t){super(),this._group=t,this._updates=new y;this._map=new St(this),this._map._supply.needs(t.read(t=>{this.read().once(e=>{const s=new Set;p(d(t),([t,n])=>{s.add(t);const r=e.get(t);r&&(r.it=n)}),p(e.entries(),([t,e])=>{s.has(t)||(e.it=void 0)})})}))}on(t){return(this.on=this._updates.on().thru((t,e)=>i(t.map(Ct),e.map(Ct))).F)(t)}read(t){return(this.read=O(this._updates.on().thru(()=>this._map.snapshot()),()=>[this._map.snapshot()]).F)(t)}set(t,e){const s=this._group,n=[],r=[];let i;return"object"==typeof t?(i=g(),p(d(t),([t,e])=>{this._map.set(t,e,n,r).needs(i)})):i=this._map.set(t,e,n,r),(n.length||r.length)&&(this._updates.send(n,r),n.length&&function(){let t;n.forEach(e=>{const[n,[r,i]]=e;r.aspect(lt).add({parent:s}).needs(i).cuts(i);const o=r.it;if(t)t[n]=o;else{const e=s.it;e[n]!==o&&(t={...e,[n]:o})}}),t&&(s.it=t);n.forEach(t=>{const[e,[n,r]]=t;n.read().tillOff(r).to(t=>{s.it[e]!==t&&(s.it={...s.it,[e]:t})}).cuts(r)})}()),i}clear(){const t=this._map.clear();t.length&&this._updates.send([],t)}}function Ct([t,[e]]){return[t,e]}class Dt extends xt{constructor(t,e){super(e),this._model=v(t),this.controls=new Mt(this),b(this).whenOff(()=>this.controls.clear())}get[w](){return b(this._model)}get it(){return this._model.it}set it(t){this._model.it=t}on(t){return(this.on=this._model.on().F)(t)}_applyAspect(e){return e===At[P]?{instance:(s=this,k({cs:s.controls,model:s,mode:s.aspect(mt)}).keepThru_(Rt)),convertTo:t}:super._applyAspect(e);var s}}function Rt({cs:[t],model:[e],mode:[s]}){if(!mt.hasData(s))return i();const n={};return p(t.entries(),([t,e])=>{n[t]=e.aspect(At)}),F(k(n).keepThru(t=>{const s={...e};return p(d(t),t=>{const[e,[n]]=t;s[e]=n}),o(s)}))}function It(t,{aspects:e}={}){return new Dt(t,{aspects:e})}const zt=M();function Bt(){return zt}function Nt(t){return E(t)?e(j(t)):"function"==typeof t?e=>j(t(e)):e=>e.read().keepThru(function(t,e){return()=>{const s=e.validate(t);return null==s?i():Array.isArray(s)?i(...s):i(s)}}(e,t))}const qt={};class Lt{constructor(e){const n=new y,i=new Map,o=new Map;let a=t,c=t;this._messages=C(e=>{const h=j(n,r()).to(e).whenOff(()=>{a=t,c=t});c=(t,e)=>{const s=t.to((...e)=>{if(e.length)o.set(t,e);else if(!o.delete(t))return;a()}).needs(e).whenOff(s=>{s!==qt&&e.off(s),o.delete(t)&&a()});h.whenOff(()=>s.off(qt))},p(i.entries(),([t,e])=>c(t,e)),a=()=>{n.send(...u(o.values(),s))},o.size&&a()}).share().tillOff(e),this.from=t=>{const s=Nt(t)(e),n=g(()=>{i.delete(s)});return i.set(s,n),c(s,n),n.needs(e)}}[A](){return this._messages}}const Pt={applyTo:t=>G(t,Vt,(t,e)=>{const s=new Kt(t);if(e){const t=e.aspect(Vt);s.by(t.read().keepThru(t=>i(...t.messages())))}return s})};class Vt{static get[P](){return Pt}[A](){return this.read()}}const Gt={get ok(){return!0},messages:()=>[],has:()=>!1,hasBut:()=>!1,[Symbol.iterator]:()=>[][Symbol.iterator]()};class Ht{constructor(t){this._byCode=new Map,this._all=[],p(t,t=>{let e=!1;p(d(t),([s,n])=>{if(n){e=!0;const n=this._byCode.get(s);n?n.push(t):this._byCode.set(s,[t])}}),e&&this._all.push(t)})}get ok(){return!this._all.length}messages(t){return null==t?this._all:this._byCode.get(t)||[]}has(t){return null==t||this._byCode.has(t)}hasBut(...t){return this._all.some(e=>t.every(t=>!e[t]))}[Symbol.iterator](){return this._all[Symbol.iterator]()}}function Jt(...t){return t.length?new Ht(t):Gt}class Kt extends Vt{constructor(t){super(),this._messages=new Lt(t);const e=t.aspect(ct);e&&this._messages.from(function(t){return t.controls.read().keepThru(Qt,Ut)}(e))}by(...t){return this._messages.from(function(...t){const e=t.length;return 1===e?t[0]:e?e=>{const s=new Lt(e);return t.forEach(t=>s.from(t)),s}:Bt}(...t))}read(t){return(this.read=j(this._messages).keepThru(Jt).F)(t)}}function Qt(t){return F(S(...c(t,t=>t.aspect(Vt))))}function Ut(...t){return i(...u(c(t,t=>t[0])))}function Wt(t){return t?t.read().keepThru(t=>t?i():{missing:"missing"}):Wt}const Xt={applyTo:t=>G(t,$t,t=>new te(t))};class Yt extends Error{constructor(...t){super(),this.errors=Jt(...c(t,t=>t.submit?t:{...t,submit:!0}))}}class Zt extends Yt{constructor(t){super({submit:"rejected",rejected:t,[t]:!0})}}class $t{static get[P](){return Xt}[A](){return this.read()}}class te extends $t{constructor(t){super(),this._control=t,this._flags=v({submitted:!1,busy:!1}),this._errors=v([]);t.aspect(Vt).by(this._errors.read().keepThru(t=>i(...t)))}read(t){return(this.read=k({flags:this._flags,data:this._control.aspect(At),messages:this._control.aspect(Vt)}).tillOff(this._control).keepThru(({flags:[t],data:[e],messages:[s]})=>({ready:void 0!==e&&(s.ok||_(s,t=>t.submit)),submitted:t.submitted,busy:t.busy})).F)(t)}async submit(t){if(b(this._control).isOff)throw new Zt("noInput");if(this._flags.it.busy)throw new Zt("busy");const e=this,s=this._control;let n;this._flags.it={...this._flags.it,submitted:!0,busy:!0};try{return this._errors.it.length&&(this._errors.it=[]),await t(await new Promise((t,n)=>{k({data:s.aspect(At),flags:e}).once(({data:[e],flags:[{ready:s}]})=>{s?t(e):n(new Zt("notReady"))})}),s)}catch(t){throw n=function(t){if(t instanceof Yt)return[...t.errors];return[{submit:t}]}(t),t}finally{this._flags.it={...this._flags.it,busy:!1},n&&(this._errors.it=n)}}reset(){const t=this._flags.it;t.submitted&&(this._flags.it={...t,submitted:!1}),this._errors.it.length&&(this._errors.it=[])}}function ee(t,{notReady:e="on",invalid:s="on",busy:n="ro"}={}){return t.aspect($t).read().keepThru(t=>kt(t.busy?n:"on",t.ready?"on":t.submitted?s:e))}function se({invalid:t="-on",ignore:e="submit"}={}){return s=>s.aspect(Vt).read().keepThru(s=>s.hasBut(..."string"==typeof e?[e]:e)?t:"on")}class ne extends _t{constructor(t,{aspects:e,get:s,set:n}){super({aspects:e}),this.element=t,this._input=new y;const r=this;this._get=s,this._set=n,this._value=this.it;const i=this._update=(t,e)=>o({value:t},e);function o(t,e){for(;;){let s;r._value=t.value,r._update=(e,n)=>{s=[{...t,value:e},n]};try{r._input.send(t,e)}finally{r._update=i}if(!s)break;[t,e]=s}}this.events=new x(t),b(this.events).needs(this),this.listenForInput(t=>o(t,this._value))}get[w](){return b(this._input)}get it(){return this._get()}set it(t){const e=this.it;t!==e&&(this._set(t),this._update(this._get(),e))}input(t){return(this.input=O(this._input.on().thru(s),()=>[{value:this.it}]).F)(t)}on(t){return(this.on=this._input.on().thru(({value:t},e)=>t===e?a():i(t,e)).F)(t)}listenForInput(t){const e=e=>t({value:this.it,event:e});this.events.on("input").to(e),this.events.on("change").to(e)}}function re(t,{aspects:e}={}){return new ne(t,{get(){return this.element.value},set(t){this.element.value=t},aspects:e})}const ie={applyTo:t=>G(t,oe,t=>{const e=t.aspect(_t);return e&&new ae(e)})};class oe extends m{static get[P](){return ie}}class ae extends oe{constructor(e){super();const{element:s,events:n}=e,r=s.getRootNode?s.getRootNode():s.ownerDocument;this._it=v(r.activeElement===s),b(this).needs(e),n.on("focus").to(()=>this._it.it=!0),n.on("blur").to(()=>this._it.it=!1),this.on({receive(e,n){e.onRecurrent(t),n?s.focus():s.blur()}})}get[w](){return b(this._it)}get it(){return this._it.it}set it(t){this._it.it=t}on(t){return(this.on=this._it.on().F)(t)}}const ce={applyTo:t=>G(t,ue,t=>{const e=t.aspect(ct);return null!=e?new pe(e):new le(t)})};class ue{static get[P](){return ce}[A](){return this.read()}}const he={hasFocus:!1,touched:!1,edited:!1};class le extends ue{constructor(t){super(),this._flags=v(he),b(this._flags).needs(t),this._flags.by(function(t,e){const s=e.aspect(_t),n=e.aspect(oe);return k({hasFocus:n||M(!1),edited:s?s.input().keepThru(({event:t})=>!!t):M(!1)}).keepThru(({hasFocus:[e],edited:[s]})=>function(t,e,s){t=e?{...t,hasFocus:e,touched:!0}:{...t,hasFocus:e};s&&(t={...t,edited:s,touched:!0});return t}(t.it,e,s))}(this._flags,t))}read(t){return(this.read=this._flags.read().F)(t)}markTouched(t=!0){const e=this._flags.it;return t?e.touched||(this._flags.it={...e,touched:t}):e.touched&&(this._flags.it={...e,touched:e.hasFocus,edited:!1}),this}markEdited(t=!0){const e=this._flags.it;return t?e.edited||(this._flags.it={...e,touched:!0,edited:t}):e.edited&&(this._flags.it={...e,edited:t}),this}}class pe extends ue{constructor(t){super(),this._container=t}read(t){return(this.read=(e=this._container,e.controls.read().tillOff(e).keepThru_(t=>F(S(...function(t){return c(t,t=>t.aspect(ue))}(t))),de)).F)(t);var e}markEdited(t){return this._container.controls.read().once(e=>p(e,e=>e.aspect(ue).markEdited(t))),this}markTouched(t){return this._container.controls.read().once(e=>p(e,e=>e.aspect(ue).markTouched(t))),this}}function de(...t){const e={hasFocus:!1,touched:!1,edited:!1};return p(t,([{hasFocus:t,touched:s,edited:n}])=>{s&&(e.touched=!0),t&&(e.hasFocus=e.touched=!0),n&&(e.edited=e.touched=!0)}),e}function _e(e,s){const{form:n,aspects:r,modes:i}=s,o=new ne(e,{aspects:[Z(r)],get:t,set:t});return b(o).needs(n),o.aspect(mt).derive(ee(n,i)),o}function fe(e,s){const{form:n,aspects:r,modes:{notReady:i="on",invalid:o="off",busy:a="off"}={}}=s,c=new ne(e,{aspects:[Z(r)],get:t,set:t});return b(c).needs(n),c.aspect(mt).derive(ee(n,{notReady:i,invalid:o,busy:a})),c}const me={applyTo(t){const e=t.aspect(_t);return e?J(e.element):V}},ye={get[P](){return me},to:(t=null)=>({applyAspect:e=>e===me?J(t):void 0})},ge={applyTo:e=>({instance:new ke(e),convertTo:t})};class ve{static get[P](){return ge}[A](){return this.read()}}const be=Symbol("reason");function we(t){return t&&"object"==typeof t&&be in t}class ke extends ve{constructor(t){super(),this._control=t,this._sources=v([new Map]);const e=t.aspect(ye);e&&this.applyTo(e,this.schedule),b(t).whenOff(t=>this.done(t))}get schedule(){return this._schedule||(this._schedule=Ae(this._control,this._control.aspect(ye)))}read(t){return(this.read=this._sources.read().tillOff(this._control).keepThru_(([t])=>F(S(...t.keys())),(...t)=>{const e={};return t.forEach(([t])=>Te(t,e)),e}).F)(t)}track(t){return(this.track=C(t=>{t.supply.needs(this._control);const e=new L,s=new R;let n=!1;return s.on(t),this.read(t=>{const r=new Set(e),i=[];p(h(d(t),([,t])=>!!t),([t])=>{r.delete(t)||i.push(t)}),(!n||i.length||r.size)&&(e.delta(i,r),n=!0,e.redelta((t,e)=>s.send(t,e)).undelta())})}).F)(t)}specs(t){return j(E(t)?t:t(this._control))}resolve(t){const e=this._control.aspect(U);return this.specs(t).keepThru((...t)=>{const s={};return t.forEach(t=>{z(t)?s[B.name(t,e)]=!0:Te(t,s)}),s})}add(t){const e=b(this._control);if(e.isOff)return e;const s=g(),n=C(e=>{const n=this.resolve(t).to({receive(t,...s){e.receive(t,...s)}});e.supply.whenOff(t=>{s.off({[be]:t})}),s.needs(n).whenOff(t=>{we(t)&&n.off(t[be])})}).share(),[r]=this._sources.it;return r.set(n,s),s.whenOff(t=>{we(t)||(r.delete(n),this._sources.it=[r])}),this._sources.it=[r],s.needs(e)}applyTo(t,e=Ae(this._control,t)){const{classList:s}=t,n=new L,r=()=>{n.redelta((t,e)=>{s.remove(...e),s.add(...t)}).undelta()};return this.track((t,s)=>{n.delta(t,s),e(r)}).whenOff(()=>{n.size&&(n.clear(),e(r))})}done(t){return p(this._sources.it[0].values(),e=>e.off(t)),this._sources.done(t),this}}function Te(t,e){p(d(t),([t,s])=>{null!=s&&(e[t]=s)})}function Ae(t,e){return t.aspect(X)({node:e})}const Fe=[["has-error",K]];function xe(t){return!t.ok}function Oe({mark:t,when:e}={}){let s,n;return s=e?Array.isArray(e)?e.length?t=>e.every(e=>t.has(e)):xe:t=>t.has(e):xe,n=t?Array.isArray(t)?t.length?t:Fe:[t]:Fe,t=>t.aspect(Vt).read().keepThru(t=>s(t)?i(...n):i())}function je({ns:t=K}={}){return e=>{const s=e=>[e,t];return k({md:e.aspect(mt),vl:e.aspect(Vt),st:e.aspect(ue)}).keepThru(({md:[t],vl:[e],st:[{hasFocus:n,touched:r,edited:o}]})=>{const a=[];return mt.hasData(t)||a.push(s("disabled")),"ro"!==t&&"-ro"!==t||a.push(s("readonly")),e.ok||a.push(s("invalid")),e.has("missing")&&a.push(s("missing")),e.has("incomplete")&&a.push(s("incomplete")),n&&a.push(s("has-focus")),r&&a.push(s("touched")),o&&a.push(s("edited")),i(...a)})}}export{ne as A,Yt as I,ve as a,ue as b,Vt as c,ye as d,je as e,fe as f,It as g,mt as h,Oe as i,se as j,_e as k,nt as l,xt as m,Y as n,U as o,X as p,$t as q,re as r,Wt as s};//# sourceMappingURL=input-aspects.8d791286.js.map
