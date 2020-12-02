import{n as t,v as s,a as e,i as n,b as r,c as i}from"../proc7ts/primitives.90941b78.js";import{b as o,f as a,c,i as u,o as h,d as l,e as p,P as d,a as _,m as f,g as m,h as g,j as y,k as v,l as b,n as w}from"../proc7ts/push-iterator.e3c0f3f1.js";import{n as k,b as T,a as A}from"../proc7ts/call-thru.104a1934.js";import{V as F,E as x,h as O,t as j,i as E,j as M,g as S,O as C,A as D,b as R,D as I,d as z,f as B,k as N,l as q,a as P,m as L,p as V,q as G}from"../proc7ts/fun-events.751f4123.js";import{N as H,i as J,c as K,n as Q}from"./namespace-aliaser.54a2e6c0.js";import{n as U}from"./render-scheduler.c6ad5452.js";import{D as W}from"../proc7ts/delta-set.9ee1ffba.js";const X=Symbol("in-aspect"),Y={instance:null,convertTo:t};function Z(t,s,e,n,r){return void 0===n&&(n=e(t,r)),{instance:n,convertTo:n=>Z(n,s,e,void 0,t),attachTo:n=>Z(n,s,e,t.aspect(s)||e(n))}}function $(t,e,n=null){return Z(t,e,s(null),n)}function tt(t){return{instance:t,convertTo(){return this}}}const st=new H("https://surol.github.io/input-aspects/ns","inasp","input-aspects"),et={applyTo:()=>tt(Q())},nt={get[X](){return et},to:t=>({applyAspect:s=>s===et?tt(t):void 0})},rt={applyTo:()=>tt(U)},it={get[X](){return rt},to:t=>({applyAspect:s=>s===rt?tt(t):void 0})};function ot(s,...e){if(!s)return ut;const r=ht(s);if(!e.length)return r;const i=e.map(ht);return(s,e)=>{const u=r(s,e),h=o([u],a(i.map((t=>t(s,e))),n)),l=c(h,((t,s)=>s.applyAspect?e=>t(e)||s.applyAspect(e):t),t);return function(t){return!t.set}(u)?{applyAspect:l}:{set:u.set.bind(u),get:u.get.bind(u),applyAspect:l}}}function at(t){return t?(s=t,Array.isArray(s)?ot(...t):ot(t)):ot();var s}const ct={applyAspect(){}};function ut(){return ct}function ht(t){return"function"==typeof t?t:s(t)}class lt extends F{constructor(){super(...arguments),this._aspects=new Map}aspect(t){return this._aspect(t[X]).instance}setup(s,e=t){return X in s?e(this.aspect(s),this):s(this),this}convert(t,...s){return new pt(this,ot(t,...s))}_aspect(t){const s=this._aspects.get(t);if(s)return s;const e=this._applyAspect(t)||t.applyTo(this);return this._aspects.set(t,e),e}_applyAspect(t){}}class pt extends lt{constructor(t,s){super(),this._on=new x,this._supply=O().needs(t);let n,r=0;const i=s(t,this);let o,a,c;!function(t){return!t.set}(i)?(o=i.set,a=i.get,c=s=>t._aspect(s).convertTo(this)):(o=e,a=e,c=s=>{const e=t._aspect(s);return e.attachTo?e.attachTo(this):e.convertTo(this)}),this._applyAspect=t=>{var s;return(null===(s=i.applyAspect)||void 0===s?void 0:s.call(i,t))||c(t)},this._it=j([o(t.it),0]),E(this._it).needs(this._supply),this._it.on((([t],[s])=>{t!==s&&this._on.send(t,s)})).cuts(this._on),t.on((t=>{t!==n&&(this._it.it=[o(t),++r])})).cuts(this),this._it.on((([s,e])=>{if(e!==r){r=e,n=a(s);try{t.it=n}finally{n=void 0}}}))}get[M](){return this._supply}get it(){return this._it.it[0]}set it(t){const[s,e]=this._it.it;t!==s&&(this._it.it=[t,e+1])}on(t){return(this.on=this._on.on().F)(t)}}class dt extends lt{constructor(t){super(),this._control=t}get[M](){return this._supply||(this._supply=O().needs(this._control))}get it(){return this._control.it}set it(t){this._control.it=t}on(t){return(this.on=this._control.on().F)(t)}}class _t extends lt{constructor({aspects:t}){super(),this._aspectConversion=at(t)(new dt(this),this)}_applyAspect(t){return this._aspectConversion.applyAspect(t)||super._applyAspect(t)}}const ft={applyTo:t=>$(t,mt)};class mt extends _t{static get[X](){return ft}_applyAspect(t){return t===ft?$(this,mt,this):super._applyAspect(t)}}class gt{[C](){return this.on()}[D](){return this.read()}}const yt={applyTo:t=>tt(new bt(t))};class vt{static get[X](){return yt}[C](){return this.on()}[D](){return this.read()}}class bt extends vt{constructor(t){super(),this._control=t,this._map=new Map,this._on=new x,E(this._on).needs(this._control)}add(t){const s=this._map.get(t);if(s)return s;const e=O((()=>{this._map.delete(t),this._on.send([],[t])}));return this._map.set(t,e),this._on.send([t],[]),e.needs(this._control).needs(t.parent)}on(t){return(this.on=this._on.on().F)(t)}read(t){const s=()=>this._map.keys();return(this.read=z(this.on().thru(s),(()=>[s()])).F)(t)}}const wt={applyTo:t=>$(t,kt)};class kt extends _t{static get[X](){return wt}_applyAspect(t){return t===wt?$(this,kt,this):super._applyAspect(t)}}const Tt={applyTo:t=>Z(t,At,(t=>new Ot(t)))};class At{static get[X](){return Tt}[C](){return this.on()}[D](){return this.read()}static hasData(t){return"off"!==t&&"-"!==t[0]}done(t){return this.own.done(t),this}}class Ft extends F{constructor(t){super(),this._tracker=j(t?function(t){return null!=t.getAttribute("disabled")?"off":null!=t.getAttribute("readonly")?"ro":"on"}(t.element):"on")}get[M](){return E(this._tracker)}get it(){return this._tracker.it}set it(t){switch(t){case"off":case"ro":case"-on":case"-ro":break;default:t="on"}this._tracker.it=t}on(t){return(this.on=this._tracker.on().F)(t)}}class xt{constructor(){this._all=new Set,this._on=new x;const t=z(this._on.on().thru((()=>this._all)),r(this._all));this.read=t.keepThru((t=>R(q(...t))),Et)}add(t){const s=O((()=>{this._all.delete(t),this._on.send()}));return this._all.add(t),this._on.send(),s}}class Ot extends At{constructor(t){super(),this._control=t,this._derived=new xt;const s=t.aspect(kt);this.own=new Ft(s),E(this.own).needs(t),this.derive(t.aspect(vt).read().keepThru_(jt)),s&&this.read((t=>function(t,s){switch(s){case"off":t.setAttribute("disabled","");break;case"ro":case"-ro":t.setAttribute("disabled",""),t.removeAttribute("disabled"),t.setAttribute("readonly","");break;default:t.setAttribute("disabled",""),t.removeAttribute("disabled"),t.setAttribute("readonly",""),t.removeAttribute("readonly")}}(s.element,t)))}read(t){let s="on";return(this.read=z(S({derived:this._derived.read,own:this.own}).thru((({derived:[t],own:[e]})=>{let n;if("off"===e||"off"===t)n="off";else{let s=!1;"-"===e[0]&&(s=!0,e=e.substring(1)),"-"===t[0]&&(s=!0,t=t.substring(1)),n="ro"===t?"ro":e,s&&(n="-"+n)}return s===n?A():k(s=n)})),r(s)).F)(t)}on(t){let s="on";return(this.on=this.read().thru((t=>{const e=s;return e===t?A():k(s=t,e)})).F)(t)}derive(t){return this._derived.add(B(N(t)?t:t(this._control)).tillOff(this._control)).needs(this._control)}}function jt(t){const s=l(t);if(!s.length)return k("on");const e=s.map((({parent:t})=>t.aspect(At)));return R(q(...e).keepThru_(Et))}function Et(...t){return Mt(...o(...t))}function Mt(...t){let s=!1,e=!1;for(const n of t)switch(n){case"off":return"off";case"ro":s=!0;break;case"-on":e=!0;break;case"-ro":e=!0,s=!0}return e?s?"-ro":"-on":s?"ro":"on"}const St={applyTo:t=>Z(t,Ct,(t=>S({value:t,mode:t.aspect(At)}).keepThru((({value:[t],mode:[s]})=>At.hasData(s)?k(t):k()))))},Ct={get[X](){return St}},Dt={applyTo:t=>$(t,Rt)};class Rt extends mt{static get[X](){return Dt}_applyAspect(t){return t===Dt?$(this,Rt,this):super._applyAspect(t)}}class It extends gt{remove(t){this.set(t,void 0)}}const zt={};class Bt{constructor(t){this._map=t,this._it=f(v((()=>this._map.values())),(([t])=>t)),this._entriesIt=f(this._map,(([t,[s]])=>[t,s]))}get(t){const s=this._map.get(t);return s&&s[0]}[Symbol.iterator](){return this[d]()}[d](t){return this._it[d](t)}entries(){return b(this._entriesIt)}}class Nt{constructor(t){this._controls=t,this._supply=O(),this._map=new Map}set(t,s,e,n){const r=this._map.get(t);let i;if(s){i=O();const o=this.newEntry(t,s,i);let a=!0;r&&(r[0]===s?a=!1:n.push([t,r])),a?(this.modify().set(t,o),e.push([t,o])):this._map.set(t,o)}else i=V(),r&&(n.push([t,r]),this.modify().delete(t));return r&&r[1].off(zt),i}newEntry(t,s,e){return[s,O((s=>{s!==zt&&this._controls.remove(t)})).needs(this._supply).needs(e).whenOff((t=>e.off(t===zt?void 0:t)))]}modify(){if(this._shot){const t=new Map;u(this._map.entries(),(([s,e])=>t.set(s,e))),this._shot=void 0,this._map=t}return this._map}snapshot(){return this._shot||(this._shot=new Bt(this._map))}clear(){const t=[],s=[];return u(this._map.keys(),(e=>this.set(e,void 0,t,s))),s}}class qt extends It{constructor(t){super(),this._group=t,this._updates=new x;this._map=new Nt(this),this._map._supply.needs(t.read((t=>{this.read().once((s=>{const e=new Set;u(h(t),(([t,n])=>{e.add(t);const r=s.get(t);r&&(r.it=n)})),u(s.entries(),(([t,s])=>{e.has(t)||(s.it=void 0)}))}))})))}on(t){return(this.on=this._updates.on().thru(((t,s)=>k(t.map(Pt),s.map(Pt)))).F)(t)}read(t){return(this.read=z(this._updates.on().thru((()=>this._map.snapshot())),(()=>[this._map.snapshot()])).F)(t)}set(t,s){const e=this._group,n=[],r=[];let i;return"object"==typeof t?(i=O(),u(h(t),(([t,s])=>{this._map.set(t,s,n,r).needs(i)}))):i=this._map.set(t,s,n,r),(n.length||r.length)&&(this._updates.send(n,r),n.length&&function(){let t;n.forEach((s=>{const[n,[r,i]]=s;r.aspect(vt).add({parent:e}).needs(i).cuts(i);const o=r.it;if(t)t[n]=o;else{const s=e.it;s[n]!==o&&(t={...s,[n]:o})}})),t&&(e.it=t);n.forEach((t=>{const[s,[n,r]]=t;n.read().tillOff(r).to((t=>{e.it[s]!==t&&(e.it={...e.it,[s]:t})})).cuts(r)}))}()),i}clear(){const t=this._map.clear();t.length&&this._updates.send([],t)}}function Pt([t,[s]]){return[t,s]}class Lt extends Rt{constructor(t,s){super(s),this._model=j(t),this.controls=new qt(this),E(this).whenOff((()=>this.controls.clear()))}get[M](){return E(this._model)}get it(){return this._model.it}set it(t){this._model.it=t}on(t){return(this.on=this._model.on().F)(t)}_applyAspect(s){return s===Ct[X]?{instance:(e=this,S({cs:e.controls,model:e,mode:e.aspect(At)}).keepThru_(Vt)),convertTo:t}:super._applyAspect(s);var e}}function Vt({cs:[t],model:[s],mode:[e]}){if(!At.hasData(e))return k();const n={};return u(t.entries(),(([t,s])=>{n[t]=s.aspect(Ct)})),R(S(n).keepThru((t=>{const e={...s};return u(h(t),(t=>{const[s,[n]]=t;e[s]=n})),T(e)})))}function Gt(t,{aspects:s}={}){return new Lt(t,{aspects:s})}const Ht=P();function Jt(){return Ht}function Kt(t){return N(t)?s(B(t)):"function"==typeof t?s=>B(t(s)):s=>s.read().keepThru(function(t,s){return()=>{const e=s.validate(t);return null==e?k():Array.isArray(e)?k(...e):k(e)}}(s,t))}const Qt={};class Ut{constructor(s){const e=new x,n=new Map,i=new Map;let o=t,a=t;this._messages=L((s=>{const c=B(e,r()).to(s).whenOff((()=>{o=t,a=t}));a=(t,s)=>{const e=t.to(((...s)=>{if(s.length)i.set(t,s);else if(!i.delete(t))return;o()})).needs(s).whenOff((e=>{e!==Qt&&s.off(e),i.delete(t)&&o()}));c.whenOff((()=>e.off(Qt)))},u(n.entries(),(([t,s])=>a(t,s))),o=()=>{e.send(...w(i.values()))},i.size&&o()})).share().tillOff(s),this.from=t=>{const e=Kt(t)(s),r=O((()=>{n.delete(e)}));return n.set(e,r),a(e,r),r.needs(s)}}[D](){return this._messages}}const Wt={applyTo:t=>Z(t,Xt,((t,s)=>{const e=new ts(t);if(s){const t=s.aspect(Xt);e.by(t.read().keepThru((t=>k(...t.messages()))))}return e}))};class Xt{static get[X](){return Wt}[D](){return this.read()}}const Yt={get ok(){return!0},messages:()=>[],has:()=>!1,hasBut:()=>!1,[Symbol.iterator]:()=>p(),[d]:t=>p()};class Zt{constructor(t){this._byCode=new Map,this._all=[],this._it=_(this._all),t.forEach((t=>{let s=!1;u(h(t),(([e,n])=>{if(n){s=!0;const n=this._byCode.get(e);n?n.push(t):this._byCode.set(e,[t])}})),s&&this._all.push(t)}))}get ok(){return!this._all.length}messages(t){return null==t?this._all:this._byCode.get(t)||[]}has(t){return null==t||this._byCode.has(t)}hasBut(...t){return this._all.some((s=>t.every((t=>!s[t]))))}[Symbol.iterator](){return this[d]()}[d](t){return this._it[d](t)}}function $t(...t){return t.length?new Zt(t):Yt}class ts extends Xt{constructor(t){super(),this._messages=new Ut(t);const s=t.aspect(mt);s&&this._messages.from(function(t){return t.controls.read().keepThru(ss,es)}(s))}by(...t){return this._messages.from(function(...t){const s=t.length;return 1===s?t[0]:s?s=>{const e=new Ut(s);return t.forEach((t=>e.from(t))),e}:Jt}(...t))}read(t){return(this.read=B(this._messages).keepThru($t).F)(t)}}function ss(t){return R(q(...f(t,(t=>t.aspect(Xt)))))}function es(...t){return k(...m(t,(([t])=>t)))}function ns(t){return t?t.read().keepThru((t=>t?k():{missing:"missing"})):ns}const rs={applyTo:t=>Z(t,as,(t=>new cs(t)))};class is extends Error{constructor(...t){super(),this.errors=$t(...t.map((t=>t.submit?t:{...t,submit:!0})))}}class os extends is{constructor(t){super({submit:"rejected",rejected:t,[t]:!0})}}class as{static get[X](){return rs}[D](){return this.read()}}class cs extends as{constructor(t){super(),this._control=t,this._flags=j({submitted:!1,busy:!1}),this._errors=j([]);t.aspect(Xt).by(this._errors.read().keepThru((t=>k(...t))))}read(t){return(this.read=S({flags:this._flags,data:this._control.aspect(Ct),messages:this._control.aspect(Xt)}).tillOff(this._control).keepThru((({flags:[t],data:[s],messages:[e]})=>({ready:void 0!==s&&(e.ok||g(e,(t=>t.submit))),submitted:t.submitted,busy:t.busy}))).F)(t)}async submit(t){if(E(this._control).isOff)throw new os("noInput");if(this._flags.it.busy)throw new os("busy");const s=this,e=this._control;let n;this._flags.it={...this._flags.it,submitted:!0,busy:!0};try{return this._errors.it.length&&(this._errors.it=[]),await t(await new Promise(((t,n)=>{S({data:e.aspect(Ct),flags:s}).once((({data:[s],flags:[{ready:e}]})=>{e?t(s):n(new os("notReady"))}))})),e)}catch(t){throw n=function(t){if(t instanceof is)return[...t.errors];return[{submit:t}]}(t),t}finally{this._flags.it={...this._flags.it,busy:!1},n&&(this._errors.it=n)}}reset(){const t=this._flags.it;t.submitted&&(this._flags.it={...t,submitted:!1}),this._errors.it.length&&(this._errors.it=[])}}function us(t,{notReady:s="on",invalid:e="on",busy:n="ro"}={}){return t.aspect(as).read().keepThru((t=>Mt(t.busy?n:"on",t.ready?"on":t.submitted?e:s)))}function hs({invalid:t="-on",ignore:s="submit"}={}){return e=>e.aspect(Xt).read().keepThru((e=>e.hasBut(..."string"==typeof s?[s]:s)?t:"on"))}class ls extends kt{constructor(t,{aspects:s,get:e,set:n}){super({aspects:s}),this.element=t,this._input=new x;const r=this;this._get=e,this._set=n,this._value=this.it;const i=this._update=(t,s)=>o({value:t},s);function o(t,s){for(;;){let e;r._value=t.value,r._update=(s,n)=>{e=[{...t,value:s},n]};try{r._input.send(t,s)}finally{r._update=i}if(!e)break;[t,s]=e}}this.events=new I(t),E(this.events).needs(this),this.listenForInput((t=>o(t,this._value)))}get[M](){return E(this._input)}get it(){return this._get()}set it(t){const s=this.it;t!==s&&(this._set(t),this._update(this._get(),s))}input(t){return(this.input=z(this._input.on().thru(e),(()=>[{value:this.it}])).F)(t)}on(t){return(this.on=this._input.on().thru((({value:t},s)=>t===s?A():k(t,s))).F)(t)}listenForInput(t){const s=s=>t({value:this.it,event:s});this.events.on("input").to(s),this.events.on("change").to(s)}}function ps(t,{aspects:s}={}){return new ls(t,{get(){return this.element.value},set(t){this.element.value=t},aspects:s})}const ds={applyTo:t=>Z(t,_s,(t=>{const s=t.aspect(kt);return s&&new fs(s)}))};class _s extends F{static get[X](){return ds}}class fs extends _s{constructor(s){super();const{element:e,events:n}=s,r=e.getRootNode?e.getRootNode():e.ownerDocument;this._it=j(r.activeElement===e),E(this).needs(s),n.on("focus").to((()=>this._it.it=!0)),n.on("blur").to((()=>this._it.it=!1)),this.on({receive(s,n){s.onRecurrent(t),n?e.focus():e.blur()}})}get[M](){return E(this._it)}get it(){return this._it.it}set it(t){this._it.it=t}on(t){return(this.on=this._it.on().F)(t)}}const ms={applyTo:t=>Z(t,gs,(t=>{const s=t.aspect(mt);return null!=s?new bs(s):new vs(t)}))};class gs{static get[X](){return ms}[D](){return this.read()}}const ys={hasFocus:!1,touched:!1,edited:!1};class vs extends gs{constructor(t){super(),this._flags=j(ys),E(this._flags).needs(t),this._flags.by(function(t,s){const e=s.aspect(kt),n=s.aspect(_s);return S({hasFocus:n||P(!1),edited:e?e.input().keepThru((({event:t})=>!!t)):P(!1)}).keepThru((({hasFocus:[s],edited:[e]})=>function(t,s,e){t=s?{...t,hasFocus:s,touched:!0}:{...t,hasFocus:s};e&&(t={...t,edited:e,touched:!0});return t}(t.it,s,e)))}(this._flags,t))}read(t){return(this.read=this._flags.read().F)(t)}markTouched(t=!0){const s=this._flags.it;return t?s.touched||(this._flags.it={...s,touched:t}):s.touched&&(this._flags.it={...s,touched:s.hasFocus,edited:!1}),this}markEdited(t=!0){const s=this._flags.it;return t?s.edited||(this._flags.it={...s,touched:!0,edited:t}):s.edited&&(this._flags.it={...s,edited:t}),this}}class bs extends gs{constructor(t){super(),this._container=t}read(t){return(this.read=(s=this._container,s.controls.read().tillOff(s).keepThru_((t=>R(q(...function(t){return f(t,(t=>t.aspect(gs)))}(t)))),ws)).F)(t);var s}markEdited(t){return this._container.controls.read().once((s=>u(s,(s=>s.aspect(gs).markEdited(t))))),this}markTouched(t){return this._container.controls.read().once((s=>u(s,(s=>s.aspect(gs).markTouched(t))))),this}}function ws(...t){const s={hasFocus:!1,touched:!1,edited:!1};return u(t,(([{hasFocus:t,touched:e,edited:n}])=>{e&&(s.touched=!0),t&&(s.hasFocus=s.touched=!0),n&&(s.edited=s.touched=!0)})),s}function ks(s,e){const{form:n,aspects:r,modes:i}=e,o=new ls(s,{aspects:[at(r)],get:t,set:t});return E(o).needs(n),o.aspect(At).derive(us(n,i)),o}function Ts(s,e){const{form:n,aspects:r,modes:{notReady:i="on",invalid:o="off",busy:a="off"}={}}=e,c=new ls(s,{aspects:[at(r)],get:t,set:t});return E(c).needs(n),c.aspect(At).derive(us(n,{notReady:i,invalid:o,busy:a})),c}const As={applyTo(t){const s=t.aspect(kt);return s?tt(s.element):Y}},Fs={get[X](){return As},to:(t=null)=>({applyAspect:s=>s===As?tt(t):void 0})},xs={applyTo:s=>({instance:new Ms(s),convertTo:t})};class Os{static get[X](){return xs}[D](){return this.read()}}const js=Symbol("reason");function Es(t){return t&&"object"==typeof t&&js in t}class Ms extends Os{constructor(t){super(),this._control=t,this._sources=j([new Map]);const s=t.aspect(Fs);s&&this.applyTo(s,this.schedule),E(t).whenOff((t=>this.done(t)))}get schedule(){return this._schedule||(this._schedule=Cs(this._control,this._control.aspect(Fs)))}read(t){return(this.read=this._sources.read().tillOff(this._control).keepThru_((([t])=>R(q(...t.keys()))),((...t)=>{const s={};return t.forEach((([t])=>Ss(t,s))),s})).F)(t)}track(t){return(this.track=L((t=>{t.supply.needs(this._control);const s=new W,e=new G;let n=!1;return e.on(t),this.read((t=>{const r=new Set(s),i=[];u(y(h(t),(([,t])=>!!t)),(([t])=>{r.delete(t)||i.push(t)})),(!n||i.length||r.size)&&(s.delta(i,r),n=!0,s.redelta(((t,s)=>e.send(t,s))).undelta())}))})).F)(t)}specs(t){return B(N(t)?t:t(this._control))}resolve(t){const s=this._control.aspect(nt);return this.specs(t).keepThru(((...t)=>{const e={};return t.forEach((t=>{J(t)?e[K.name(t,s)]=!0:Ss(t,e)})),e}))}add(t){const s=E(this._control);if(s.isOff)return s;const e=O(),n=L((s=>{const n=this.resolve(t).to({receive(t,...e){s.receive(t,...e)}});s.supply.whenOff((t=>{e.off({[js]:t})})),e.needs(n).whenOff((t=>{Es(t)&&n.off(t[js])}))})).share(),[r]=this._sources.it;return r.set(n,e),e.whenOff((t=>{Es(t)||(r.delete(n),this._sources.it=[r])})),this._sources.it=[r],e.needs(s)}applyTo(t,s=Cs(this._control,t)){const{classList:e}=t,n=new W,r=()=>{n.redelta(((t,s)=>{e.remove(...s),e.add(...t)})).undelta()};return this.track(((t,e)=>{n.delta(t,e),s(r)})).whenOff((()=>{n.size&&(n.clear(),s(r))}))}done(t){return u(this._sources.it[0].values(),(s=>s.off(t))),this._sources.done(t),this}}function Ss(t,s){u(h(t),(([t,e])=>{null!=e&&(s[t]=e)}))}function Cs(t,s){return t.aspect(it)({node:s})}function Ds({mark:t,when:s}={}){let e;return e=s?Array.isArray(s)?s.length?t=>s.every((s=>t.has(s))):Rs:t=>t.has(s):Rs,s=>s.aspect(Xt).read().keepThru((s=>e(s)?k(...function(t){if(!t)return Is;const s=i(t);return s.length?s:Is}(t)):k()))}function Rs(t){return!t.ok}const Is=[["has-error",st]];function zs({ns:t=st}={}){return s=>{const e=s=>[s,t];return S({md:s.aspect(At),vl:s.aspect(Xt),st:s.aspect(gs)}).keepThru((({md:[t],vl:[s],st:[{hasFocus:n,touched:r,edited:i}]})=>{const o=[];return At.hasData(t)||o.push(e("disabled")),"ro"!==t&&"-ro"!==t||o.push(e("readonly")),s.ok||o.push(e("invalid")),s.has("missing")&&o.push(e("missing")),s.has("incomplete")&&o.push(e("incomplete")),n&&o.push(e("has-focus")),r&&o.push(e("touched")),i&&o.push(e("edited")),k(...o)}))}}export{ls as A,is as I,Os as a,gs as b,Xt as c,Fs as d,zs as e,Ts as f,Gt as g,At as h,Ds as i,hs as j,ks as k,lt as l,Rt as m,ot as n,it as o,nt as p,as as q,ps as r,ns as s};//# sourceMappingURL=input-aspects.8b5674f5.js.map
