import{n as t,d as s,a as e,b as n,f as r,c as i,v as o,g as a}from"./call-thru.3be1c170.js";import{b as c,i as u,o as h,m as l,f as p,c as d,d as _,e as f}from"./a-iterable.01fedd29.js";import{g,V as m,E as y,h as b,t as v,i as w,j as k,O as T,A as O,D as A,d as j,f as F,k as x,b as E,l as S,a as M,m as C,p as D,q as R}from"./fun-events.f47c7338.js";import{N as I,i as z,c as B,n as N}from"./namespace-aliaser.535f16ce.js";import{n as q}from"./render-scheduler.8e498d62.js";import{D as L}from"./delta-set.6d49064b.js";const P=Symbol("in-aspect"),V={instance:null,convertTo:s};function G(t,s,e,n,r){return void 0===n&&(n=e(t,r)),{instance:n,convertTo:n=>G(n,s,e,void 0,t),attachTo:n=>G(n,s,e,t.aspect(s)||e(n))}}function H(t,s,e=null){return G(t,s,o(null),e)}function J(t){return{instance:t,convertTo(){return this}}}const K=new I("https://surol.github.io/input-aspects/ns","inasp","input-aspects"),Q={applyTo:()=>J(N())},U={get[P](){return Q},to:t=>({applyAspect:s=>s===Q?J(t):void 0})},W={applyTo:()=>J(q)},X={get[P](){return W},to:t=>({applyAspect:s=>s===W?J(t):void 0})};function Y(t,...e){if(!t)return tt;const n=et(t);if(!e.length)return n;const r=l(e,et);return(t,e)=>{const i=n(t,e),o=p([[i],d(l(r,s=>s(t,e)),a)]),u=c(o,(t,s)=>s.applyAspect?e=>t(e)||s.applyAspect(e):t,s);return st(i)?{applyAspect:u}:{set:i.set.bind(i),get:i.get.bind(i),applyAspect:u}}}function Z(t){return t?(s=t,Array.isArray(s)?Y(...t):Y(t)):Y();var s}const $={applyAspect(){}};function tt(){return $}function st(t){return!t.set}function et(t){return"function"==typeof t?t:o(t)}class nt extends m{constructor(){super(...arguments),this._aspects=new Map}aspect(t){return this._aspect(t[P]).instance}setup(t,e=s){return P in t?e(this.aspect(t),this):t(this),this}convert(t,...s){return new rt(this,Y(t,...s))}_aspect(t){const s=this._aspects.get(t);if(s)return s;const e=this._applyAspect(t)||t.applyTo(this);return this._aspects.set(t,e),e}_applyAspect(t){}}class rt extends nt{constructor(t,s){super(),this._on=new y,this._supply=b().needs(t);let n,r=0;const i=s(t,this);let o,a,c;st(i)?(o=e,a=e,c=s=>{const e=t._aspect(s);return e.attachTo?e.attachTo(this):e.convertTo(this)}):(o=i.set,a=i.get,c=s=>t._aspect(s).convertTo(this)),this._applyAspect=t=>{var s;return(null===(s=i.applyAspect)||void 0===s?void 0:s.call(i,t))||c(t)},this._it=v([o(t.it),0]),w(this._it).needs(this._supply),this._it.on(([t],[s])=>{t!==s&&this._on.send(t,s)}).cuts(this._on),t.on(t=>{t!==n&&(this._it.it=[o(t),++r])}).cuts(this),this._it.on(([s,e])=>{if(e!==r){r=e,n=a(s);try{t.it=n}finally{n=void 0}}})}get[k](){return this._supply}get it(){return this._it.it[0]}set it(t){const[s,e]=this._it.it;t!==s&&(this._it.it=[t,e+1])}on(t){return(this.on=this._on.on().F)(t)}}class it extends nt{constructor(t){super(),this._control=t}get[k](){return this._supply||(this._supply=b().needs(this._control))}get it(){return this._control.it}set it(t){this._control.it=t}on(t){return(this.on=this._control.on().F)(t)}}class ot extends nt{constructor({aspects:t}){super(),this._aspectConversion=Z(t)(new it(this),this)}_applyAspect(t){return this._aspectConversion.applyAspect(t)||super._applyAspect(t)}}const at={applyTo:t=>H(t,ct)};class ct extends ot{static get[P](){return at}_applyAspect(t){return t===at?H(this,ct,this):super._applyAspect(t)}}const ut={applyTo:t=>J(new lt(t))};class ht{static get[P](){return ut}[T](){return this.on()}[O](){return this.read()}}class lt extends ht{constructor(t){super(),this._control=t,this._map=new Map,this._on=new y,w(this._on).needs(this._control)}add(t){const s=this._map.get(t);if(s)return s;const e=b(()=>{this._map.delete(t),this._on.send([],[t])});return this._map.set(t,e),this._on.send([t],[]),e.needs(this._control).needs(t.parent)}on(t){return(this.on=this._on.on().F)(t)}read(t){const s=()=>this._map.keys();return(this.read=j(this.on().thru(s),()=>[s()]).F)(t)}}const pt={applyTo:t=>H(t,dt)};class dt extends ot{static get[P](){return pt}_applyAspect(t){return t===pt?H(this,dt,this):super._applyAspect(t)}}const _t={applyTo:t=>G(t,ft,t=>new yt(t))};class ft{static get[P](){return _t}[T](){return this.on()}[O](){return this.read()}static hasData(t){return"off"!==t&&"-"!==t[0]}done(t){return this.own.done(t),this}}class gt extends m{constructor(t){super(),this._tracker=v(t?function(t){return null!=t.getAttribute("disabled")?"off":null!=t.getAttribute("readonly")?"ro":"on"}(t.element):"on")}get[k](){return w(this._tracker)}get it(){return this._tracker.it}set it(t){switch(t){case"off":case"ro":case"-on":case"-ro":break;default:t="on"}this._tracker.it=t}on(t){return(this.on=this._tracker.on().F)(t)}}class mt{constructor(){this._all=new Set,this._on=new y;const t=j(this._on.on().thru(()=>this._all),r(this._all));this.read=t.keepThru(t=>E(S(...t)),vt)}add(t){const s=b(()=>{this._all.delete(t),this._on.send()});return this._all.add(t),this._on.send(),s}}class yt extends ft{constructor(t){super(),this._control=t,this._derived=new mt;const s=t.aspect(dt);this.own=new gt(s),w(this.own).needs(t),this.derive(t.aspect(ht).read().keepThru_(bt)),s&&this.read(t=>function(t,s){switch(s){case"off":t.setAttribute("disabled","");break;case"ro":case"-ro":t.setAttribute("disabled",""),t.removeAttribute("disabled"),t.setAttribute("readonly","");break;default:t.setAttribute("disabled",""),t.removeAttribute("disabled"),t.setAttribute("readonly",""),t.removeAttribute("readonly")}}(s.element,t))}read(s){let e="on";return(this.read=j(g({derived:this._derived.read,own:this.own}).thru(({derived:[s],own:[r]})=>{let i;if("off"===r||"off"===s)i="off";else{let t=!1;"-"===r[0]&&(t=!0,r=r.substring(1)),"-"===s[0]&&(t=!0,s=s.substring(1)),i="ro"===s?"ro":r,t&&(i="-"+i)}return e===i?n():t(e=i)}),r(e)).F)(s)}on(s){let e="on";return(this.on=this.read().thru(s=>{const r=e;return r===s?n():t(e=s,r)}).F)(s)}derive(t){return this._derived.add(F(x(t)?t:t(this._control)).tillOff(this._control)).needs(this._control)}}function bt(s){const e=Array.from(s);if(!e.length)return t("on");const n=e.map(({parent:t})=>t.aspect(ft));return E(S(...n).keepThru_(vt))}function vt(...t){return wt(...p(t))}function wt(...t){let s=!1,e=!1;for(const n of t)switch(n){case"off":return"off";case"ro":s=!0;break;case"-on":e=!0;break;case"-ro":e=!0,s=!0}return e?s?"-ro":"-on":s?"ro":"on"}const kt={applyTo:s=>G(s,Tt,s=>g({value:s,mode:s.aspect(ft)}).keepThru(({value:[s],mode:[e]})=>ft.hasData(e)?t(s):t()))},Tt={get[P](){return kt}},Ot={applyTo:t=>H(t,At)};class At extends ct{static get[P](){return Ot}_applyAspect(t){return t===Ot?H(this,At,this):super._applyAspect(t)}}const jt={};class Ft{constructor(t){this._map=t}get(t){const s=this._map.get(t);return s&&s[0]}[Symbol.iterator](){return f(l(this._map.values(),([t])=>t))}entries(){return f(l(this._map.entries(),([t,[s]])=>[t,s]))}}class xt{constructor(t){this._controls=t,this._supply=b(),this._map=new Map}set(t,s,e,n){const r=this._map.get(t);let i;if(s){i=b();const o=this.newEntry(t,s,i);let a=!0;r&&(r[0]===s?a=!1:n.push([t,r])),a?(this.modify().set(t,o),e.push([t,o])):this._map.set(t,o)}else i=R(),r&&(n.push([t,r]),this.modify().delete(t));return r&&r[1].off(jt),i}newEntry(t,s,e){return[s,b(s=>{s!==jt&&this._controls.remove(t)}).needs(this._supply).needs(e).whenOff(t=>e.off(t===jt?void 0:t))]}modify(){if(this._shot){const t=new Map;u(this._map.entries(),([s,e])=>t.set(s,e)),this._shot=void 0,this._map=t}return this._map}snapshot(){return this._shot||(this._shot=new Ft(this._map))}clear(){const t=[],s=[];return u(this._map.keys(),e=>this.set(e,void 0,t,s)),s}}class Et extends class extends class{[T](){return this.on()}[O](){return this.read()}}{remove(t){this.set(t,void 0)}}{constructor(t){super(),this._group=t,this._updates=new y;this._map=new xt(this),this._map._supply.needs(t.read(t=>{this.read().once(s=>{const e=new Set;u(h(t),([t,n])=>{e.add(t);const r=s.get(t);r&&(r.it=n)}),u(s.entries(),([t,s])=>{e.has(t)||(s.it=void 0)})})}))}on(s){return(this.on=this._updates.on().thru((s,e)=>t(s.map(St),e.map(St))).F)(s)}read(t){return(this.read=j(this._updates.on().thru(()=>this._map.snapshot()),()=>[this._map.snapshot()]).F)(t)}set(t,s){const e=this._group,n=[],r=[];let i;return"object"==typeof t?(i=b(),u(h(t),([t,s])=>{this._map.set(t,s,n,r).needs(i)})):i=this._map.set(t,s,n,r),(n.length||r.length)&&(this._updates.send(n,r),n.length&&function(){let t;n.forEach(([s,[n,r]])=>{n.aspect(ht).add({parent:e}).needs(r).cuts(r);const i=n.it;if(t)t[s]=i;else{const n=e.it;n[s]!==i&&(t=Object.assign(Object.assign({},n),{[s]:i}))}}),t&&(e.it=t);n.forEach(([t,[s,n]])=>{s.read().tillOff(n).to(s=>{e.it[t]!==s&&(e.it=Object.assign(Object.assign({},e.it),{[t]:s}))}).cuts(n)})}()),i}clear(){const t=this._map.clear();t.length&&this._updates.send([],t)}}function St([t,[s]]){return[t,s]}class Mt extends At{constructor(t,s){super(s),this._model=v(t),this.controls=new Et(this),w(this).whenOff(()=>this.controls.clear())}get[k](){return w(this._model)}get it(){return this._model.it}set it(t){this._model.it=t}on(t){return(this.on=this._model.on().F)(t)}_applyAspect(t){return t===Tt[P]?{instance:(e=this,g({cs:e.controls,model:e,mode:e.aspect(ft)}).keepThru_(Ct)),convertTo:s}:super._applyAspect(t);var e}}function Ct({cs:[s],model:[e],mode:[n]}){if(!ft.hasData(n))return t();const r={};return u(s.entries(),([t,s])=>{r[t]=s.aspect(Tt)}),E(g(r).keepThru(t=>{const s=Object.assign({},e);return u(h(t),([t,[e]])=>{s[t]=e}),i(s)}))}function Dt(t,{aspects:s}={}){return new Mt(t,{aspects:s})}const Rt=M();function It(){return Rt}function zt(s){return x(s)?o(F(s)):"function"==typeof s?t=>F(s(t)):e=>e.read().keepThru(function(s,e){return()=>{const n=e.validate(s);return null==n?t():Array.isArray(n)?t(...n):t(n)}}(e,s))}const Bt={};class Nt{constructor(t){const n=new y,i=new Map,o=new Map;let a=s,c=s;this._messages=C(t=>{const h=F(n,r()).to(t).whenOff(()=>{a=s,c=s});c=(t,s)=>{const e=t.to((...s)=>{if(s.length)o.set(t,s);else if(!o.delete(t))return;a()}).needs(s).whenOff(e=>{e!==Bt&&s.off(e),o.delete(t)&&a()});h.whenOff(()=>e.off(Bt))},u(i.entries(),([t,s])=>c(t,s)),a=()=>{n.send(...p(o.values(),e))},o.size&&a()}).share().tillOff(t),this.from=s=>{const e=zt(s)(t),n=b(()=>{i.delete(e)});return i.set(e,n),c(e,n),n.needs(t)}}[O](){return this._messages}}const qt={applyTo:s=>G(s,Lt,(s,e)=>{const n=new Ht(s);if(e){const s=e.aspect(Lt);n.by(s.read().keepThru(s=>t(...s.messages())))}return n})};class Lt{static get[P](){return qt}[O](){return this.read()}}const Pt={get ok(){return!0},messages:()=>[],has:()=>!1,hasBut:()=>!1,[Symbol.iterator]:()=>[][Symbol.iterator]()};class Vt{constructor(t){this._byCode=new Map,this._all=[],u(t,t=>{let s=!1;u(h(t),([e,n])=>{if(n){s=!0;const n=this._byCode.get(e);n?n.push(t):this._byCode.set(e,[t])}}),s&&this._all.push(t)})}get ok(){return!this._all.length}messages(t){return null==t?this._all:this._byCode.get(t)||[]}has(t){return null==t||this._byCode.has(t)}hasBut(...t){return this._all.some(s=>t.every(t=>!s[t]))}[Symbol.iterator](){return this._all[Symbol.iterator]()}}function Gt(...t){return t.length?new Vt(t):Pt}class Ht extends Lt{constructor(t){super(),this._messages=new Nt(t);const s=t.aspect(ct);s&&this._messages.from(function(t){return t.controls.read().keepThru(Jt,Kt)}(s))}by(...t){return this._messages.from(function(...t){const s=t.length;return 1===s?t[0]:s?s=>{const e=new Nt(s);return t.forEach(t=>e.from(t)),e}:It}(...t))}read(t){return(this.read=F(this._messages).keepThru(Gt).F)(t)}}function Jt(t){return E(S(...l(t,t=>t.aspect(Lt))))}function Kt(...s){return t(...p(l(s,t=>t[0])))}function Qt(s){return s?s.read().keepThru(s=>s?t():{missing:"missing"}):Qt}const Ut={applyTo:t=>G(t,Yt,t=>new Zt(t))};class Wt extends Error{constructor(...t){super(),this.errors=Gt(...l(t,t=>t.submit?t:Object.assign(Object.assign({},t),{submit:!0})))}}class Xt extends Wt{constructor(t){super({submit:"rejected",rejected:t,[t]:!0})}}class Yt{static get[P](){return Ut}[O](){return this.read()}}class Zt extends Yt{constructor(s){super(),this._control=s,this._flags=v({submitted:!1,busy:!1}),this._errors=v([]),s.aspect(Lt).by(this._errors.read().keepThru(s=>t(...s)))}read(t){return(this.read=g({flags:this._flags,data:this._control.aspect(Tt),messages:this._control.aspect(Lt)}).tillOff(this._control).keepThru(({flags:[t],data:[s],messages:[e]})=>({ready:void 0!==s&&(e.ok||_(e,t=>t.submit)),submitted:t.submitted,busy:t.busy})).F)(t)}async submit(t){if(w(this._control).isOff)throw new Xt("noInput");if(this._flags.it.busy)throw new Xt("busy");const s=this,e=this._control;let n;this._flags.it=Object.assign(Object.assign({},this._flags.it),{submitted:!0,busy:!0});try{return this._errors.it.length&&(this._errors.it=[]),await t(await new Promise((t,n)=>{g({data:e.aspect(Tt),flags:s}).once(({data:[s],flags:[{ready:e}]})=>{e?t(s):n(new Xt("notReady"))})}),e)}catch(t){throw n=function(t){if(t instanceof Wt)return[...t.errors];return[{submit:t}]}(t),t}finally{this._flags.it=Object.assign(Object.assign({},this._flags.it),{busy:!1}),n&&(this._errors.it=n)}}reset(){const t=this._flags.it;t.submitted&&(this._flags.it=Object.assign(Object.assign({},t),{submitted:!1})),this._errors.it.length&&(this._errors.it=[])}}function $t(t,{notReady:s="on",invalid:e="on",busy:n="ro"}={}){return t.aspect(Yt).read().keepThru(t=>wt(t.busy?n:"on",t.ready?"on":t.submitted?e:s))}function ts({invalid:t="-on",ignore:s="submit"}={}){return e=>e.aspect(Lt).read().keepThru(e=>e.hasBut(..."string"==typeof s?[s]:s)?t:"on")}class ss extends dt{constructor(t,{aspects:s,get:e,set:n}){super({aspects:s}),this.element=t,this._input=new y;const r=this;this._get=e,this._set=n,this._value=this.it;const i=this._update=(t,s)=>o({value:t},s);function o(t,s){for(;;){let e;r._value=t.value,r._update=(s,n)=>{e=[Object.assign(Object.assign({},t),{value:s}),n]};try{r._input.send(t,s)}finally{r._update=i}if(!e)break;[t,s]=e}}this.events=new A(t),w(this.events).needs(this),this.listenForInput(t=>o(t,this._value))}get[k](){return w(this._input)}get it(){return this._get()}set it(t){const s=this.it;t!==s&&(this._set(t),this._update(this._get(),s))}input(t){return(this.input=j(this._input.on().thru(e),()=>[{value:this.it}]).F)(t)}on(s){return(this.on=this._input.on().thru(({value:s},e)=>s===e?n():t(s,e)).F)(s)}listenForInput(t){const s=s=>t({value:this.it,event:s});this.events.on("input").to(s),this.events.on("change").to(s)}}function es(t,{aspects:s}={}){return new ss(t,{get(){return this.element.value},set(t){this.element.value=t},aspects:s})}const ns={applyTo:t=>G(t,rs,t=>{const s=t.aspect(dt);return s&&new is(s)})};class rs extends m{static get[P](){return ns}}class is extends rs{constructor(t){super();const{element:e,events:n}=t,r=e.getRootNode?e.getRootNode():e.ownerDocument;this._it=v(!!r&&r.activeElement===e),w(this).needs(t),n.on("focus").to(()=>this._it.it=!0),n.on("blur").to(()=>this._it.it=!1),this.on({receive(t,n){t.onRecurrent(s),n?e.focus():e.blur()}})}get[k](){return w(this._it)}get it(){return this._it.it}set it(t){this._it.it=t}on(t){return(this.on=this._it.on().F)(t)}}const os={applyTo:t=>G(t,as,t=>{const s=t.aspect(ct);return null!=s?new hs(s):new us(t)})};class as{static get[P](){return os}[O](){return this.read()}}const cs={hasFocus:!1,touched:!1,edited:!1};class us extends as{constructor(t){super(),this._flags=v(cs),w(this._flags).needs(t),this._flags.by(function(t,s){const e=s.aspect(dt),n=s.aspect(rs);return g({hasFocus:n||M(!1),edited:e?e.input().keepThru(({event:t})=>!!t):M(!1)}).keepThru(({hasFocus:[s],edited:[e]})=>function(t,s,e){t=s?Object.assign(Object.assign({},t),{hasFocus:s,touched:!0}):Object.assign(Object.assign({},t),{hasFocus:s});e&&(t=Object.assign(Object.assign({},t),{edited:e,touched:!0}));return t}(t.it,s,e))}(this._flags,t))}read(t){return(this.read=this._flags.read().F)(t)}markTouched(t=!0){const s=this._flags.it;return t?s.touched||(this._flags.it=Object.assign(Object.assign({},s),{touched:t})):s.touched&&(this._flags.it=Object.assign(Object.assign({},s),{touched:s.hasFocus,edited:!1})),this}markEdited(t=!0){const s=this._flags.it;return t?s.edited||(this._flags.it=Object.assign(Object.assign({},s),{touched:!0,edited:t})):s.edited&&(this._flags.it=Object.assign(Object.assign({},s),{edited:t})),this}}class hs extends as{constructor(t){super(),this._container=t}read(t){return(this.read=(s=this._container,s.controls.read().tillOff(s).keepThru_(t=>E(S(...function(t){return l(t,t=>t.aspect(as))}(t))),ls)).F)(t);var s}markEdited(t){return this._container.controls.read().once(s=>u(s,s=>s.aspect(as).markEdited(t))),this}markTouched(t){return this._container.controls.read().once(s=>u(s,s=>s.aspect(as).markTouched(t))),this}}function ls(...t){const s={hasFocus:!1,touched:!1,edited:!1};return u(t,([{hasFocus:t,touched:e,edited:n}])=>{e&&(s.touched=!0),t&&(s.hasFocus=s.touched=!0),n&&(s.edited=s.touched=!0)}),s}function ps(t,e){const{form:n,aspects:r,modes:i}=e,o=new ss(t,{aspects:[Z(r)],get:s,set:s});return w(o).needs(n),o.aspect(ft).derive($t(n,i)),o}function ds(t,e){const{form:n,aspects:r,modes:{notReady:i="on",invalid:o="off",busy:a="off"}={}}=e,c=new ss(t,{aspects:[Z(r)],get:s,set:s});return w(c).needs(n),c.aspect(ft).derive($t(n,{notReady:i,invalid:o,busy:a})),c}const _s={applyTo(t){const s=t.aspect(dt);return s?J(s.element):V}},fs={get[P](){return _s},to:(t=null)=>({applyAspect:s=>s===_s?J(t):void 0})},gs={applyTo:t=>({instance:new vs(t),convertTo:s})};class ms{static get[P](){return gs}[O](){return this.read()}}const ys=Symbol("reason");function bs(t){return t&&"object"==typeof t&&ys in t}class vs extends ms{constructor(t){super(),this._control=t,this._sources=v([new Map]);const s=t.aspect(fs);s&&this.applyTo(s,this.schedule),w(t).whenOff(t=>this.done(t))}get schedule(){return this._schedule||(this._schedule=ks(this._control,this._control.aspect(fs)))}read(t){return(this.read=this._sources.read().tillOff(this._control).keepThru_(([t])=>E(S(...t.keys())),(...t)=>{const s={};return t.forEach(([t])=>ws(t,s)),s}).F)(t)}track(t){return(this.track=C(t=>{t.supply.needs(this._control);const s=new L,e=new D;let n=!1;return e.on(t),this.read(t=>{const r=new Set(s),i=[];u(d(h(t),([,t])=>!!t),([t])=>{r.delete(t)||i.push(t)}),(!n||i.length||r.size)&&(s.delta(i,r),n=!0,s.redelta((t,s)=>e.send(t,s)).undelta())})}).F)(t)}specs(t){return F(x(t)?t:t(this._control))}resolve(t){const s=this._control.aspect(U);return this.specs(t).keepThru((...t)=>{const e={};return t.forEach(t=>{z(t)?e[B.name(t,s)]=!0:ws(t,e)}),e})}add(t){const s=w(this._control);if(s.isOff)return s;const e=b(),n=C(s=>{const n=this.resolve(t).to({receive(t,...e){s.receive(t,...e)}});s.supply.whenOff(t=>{e.off({[ys]:t})}),e.needs(n).whenOff(t=>{bs(t)&&n.off(t[ys])})}).share(),[r]=this._sources.it;return r.set(n,e),e.whenOff(t=>{bs(t)||(r.delete(n),this._sources.it=[r])}),this._sources.it=[r],e.needs(s)}applyTo(t,s=ks(this._control,t)){const{classList:e}=t,n=new L,r=()=>{n.redelta((t,s)=>{e.remove(...s),e.add(...t)}).undelta()};return this.track((t,e)=>{n.delta(t,e),s(r)}).whenOff(()=>{n.size&&(n.clear(),s(r))})}done(t){return u(this._sources.it[0].values(),s=>s.off(t)),this._sources.done(t),this}}function ws(t,s){u(h(t),([t,e])=>{null!=e&&(s[t]=e)})}function ks(t,s){return t.aspect(X)({node:s})}const Ts=[["has-error",K]];function Os(t){return!t.ok}function As({mark:s,when:e}={}){let n,r;return n=e?Array.isArray(e)?e.length?t=>e.every(s=>t.has(s)):Os:t=>t.has(e):Os,r=s?Array.isArray(s)?s.length?s:Ts:[s]:Ts,s=>s.aspect(Lt).read().keepThru(s=>n(s)?t(...r):t())}function js({ns:s=K}={}){return e=>{const n=t=>[t,s];return g({md:e.aspect(ft),vl:e.aspect(Lt),st:e.aspect(as)}).keepThru(({md:[s],vl:[e],st:[{hasFocus:r,touched:i,edited:o}]})=>{const a=[];return ft.hasData(s)||a.push(n("disabled")),"ro"!==s&&"-ro"!==s||a.push(n("readonly")),e.ok||a.push(n("invalid")),e.has("missing")&&a.push(n("missing")),e.has("incomplete")&&a.push(n("incomplete")),r&&a.push(n("has-focus")),i&&a.push(n("touched")),o&&a.push(n("edited")),t(...a)})}}export{ss as A,Wt as I,ms as a,as as b,Lt as c,fs as d,js as e,ds as f,Dt as g,ft as h,As as i,ts as j,ps as k,nt as l,At as m,Y as n,U as o,X as p,Yt as q,es as r,Qt as s};//# sourceMappingURL=input-aspects.e48d1860.js.map
