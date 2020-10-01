import{n as t,v as e}from"./primitives.e0fbf82a.js";import{i as s,N as n,c as r,b as i}from"./call-thru.3702f6af.js";const o=Symbol("after-event");function u(t){return o in t}const c=Symbol("events-supply");class h{constructor(e=t){this._off=s=>{this._whenOff=t=>t(s),this._off=t,e(s)},this._whenOff=t=>{const e=this._off;this._off=s=>{e(s),t(s)}}}get isOff(){return this._off===t}get[c](){return this}off(t){return this._off(t),this}whenOff(t){return this._whenOff(t),this}whenDone(){return new Promise(((t,e)=>this.whenOff((s=>void 0===s?t():e(s)))))}cuts(t){return f(t).needs(this),this}needs(t){return f(t).whenOff((t=>this._off(t))),this}}function f(t){return t[c]}function p(t){return new h(t)}function a(e){let s;return s="function"==typeof e?{supply:p(),receive(t,...s){e(...s)}}:{supply:e.supply||p(),receive(t,...s){this.supply.isOff||e.receive(t,...s)}},s.supply.whenOff((()=>s.receive=t)),s}function l(t){let e=function s(n){let r=t;const i=[];e=t=>i.push(t);try{for(;;){r=y(r,n);const t=i.shift();if(!t)break;n=t}}finally{e=s}};return(...t)=>e(t)}function y(t,e){const s=[];for(const n of t){const t=s.length;s.push(n);const r={onRecurrent(e){s[t]=a({supply:n.supply,receive(t,...s){e(...s)}})}};n.receive(r,...e)}return s}class d{constructor(){const t=this._rcs=new Set;this.send=l(t),this[c]=p((()=>{t.clear(),delete this._rcs}))}get size(){return this._rcs?this._rcs.size:0}on(t){const e=a(t),s=e.supply.needs(this),n=this._rcs;return n&&!s.isOff&&(n.add(e),s.whenOff((()=>n.delete(e)))),s}done(t){return f(this).off(t),this}}const _=Symbol("on-event");function v(t){return _ in t}class w extends h{get isOff(){return!0}off(){return this}whenOff(t){return t(),this}cuts(t){return f(t).off(),this}needs(){return this}}const O=new w;function g(){return O}function m(e){const s=a(e);let n=l([s]);return s.supply.whenOff((()=>n=t)),(...t)=>n(...t)}function b(t){return e=>{t.to({supply:e.supply,receive:(t,...s)=>{e.receive(t,...s),e.supply.off()}})}}function k(t){const e=new d;let s,n;return r=>{if(e.size||(n=[],s=p((()=>n=void 0)),t.to({supply:s,receive(t,...s){n&&(e.size?n=void 0:n.push(s)),e.send(...s)}})),r.supply.needs(s),e.on(r).whenOff((t=>{e.size||s.off(t)})),n){const t=m(r);n.forEach((e=>t(...e)))}}}function E(e,r){return i=>{const o=[];e.to({supply:i.supply,receive(e,...u){const c=(u,h)=>{const f=u>=r.length;++u;const a=o[u];if(a){const t=a.supply;return a.supply=h,[a.chain,t]}const l=u<r.length?r[u]:t,y={chain:{call(t,e){d(t(...e),e)},pass(t,e){d(t(e),[e])},skip(){y.supply.off()},onEvent(t,e){const s=p().needs(y.supply);e[_]().to({supply:s,receive(e,...n){d(t(...n),n,s)}})}},supply:h};return o[u]=y,[y.chain,g()];function d(t,r,o=y.supply){const[h,a]=c(u,p().needs(o));try{s(t)?t[n](h,l):f?i.receive(e,...r):h.pass(l,t)}finally{a.off()}}},[h,f]=c(0,p().needs(i.supply));try{h.call(r[0],u)}finally{f.off()}}})}}function F(t,e,s){return n=>{s?t.to({supply:p().needs(e).cuts(s),receive:n.receive.bind(n)}):(n.supply.needs(e),t.to(n))}}function j({supply:t}){t.off()}class x{constructor(t){this._on=t}get F(){return this.to.bind(this)}[_](){return this}to(t){if(!t)return this;const e=a(t),{supply:s}=e;return s.isOff||this._on(e),s}then(t,e){return function(t,e,s){return new Promise(((n,r)=>{b(t)({supply:p(s?t=>{try{n(s(t))}catch(t){r(t)}}:r),receive:e?(t,...s)=>{try{n(e(...s))}catch(t){r(t)}}:(t,e)=>n(e)})}))}(this,t,e)}once(t){return(this.once=z(b(this)).F)(t)}tillOff(t,e){return z(F(this,t,e))}consume(t){let e=g();const s=p((t=>e.off(t)));return this.to({supply:s,receive(s,...n){const r=e;try{e=f(t(...n)||g())}finally{e!==r&&r.off()}}}),s}share(){return z(k(this))}thru(...t){return this.thru_(...t).share()}thru_(...t){return z(E(this,t))}}function z(t){return new x(t)}function U(){throw new Error("No events to send")}class P extends x{constructor(t,e=U){super(t),this._rcn=0,this._or=e}get F(){return this.to.bind(this)}[o](){return this}to(e){if(!e)return this;let s=t;const n=a(e);if(n.supply.isOff)return n.supply;const r=p().needs(n.supply);let i=!1;return this._on({supply:r,receive:(t,...e)=>{i=!0,this._last=e,s(t,...e)}}),++this._rcn,r.isOff&&!i||(n.receive({onRecurrent(t){s=(e,...s)=>t(...s)}},...this._last||(this._last=this._or())),s=(t,...e)=>n.receive(t,...e)),r.whenOff((t=>{--this._rcn||(this._last=void 0),n.supply.off(t)})),r}once(t){return(this.once=R(b(this)).F)(t)}tillOff(t,e){return R(F(this,t,e))}share(){return R(k(this))}keepThru(...t){return this.keepThru_(...t).share()}keepThru_(...t){return R(E(this,t))}}function R(t,e){return new P(t,e)}function S(t,e){return R((e=>t[_]().to(e)),e)}function I(t,e){return u(t)?t[o]():S(t,e)}function N(e){const s=Object.keys(e);return R((function(n){const{supply:r}=n,i=m(n);let u=t;const c={};s.forEach((t=>{r.needs(e[t][o]().to(((...e)=>{c[t]=e,u()})).needs(r))})),r.isOff||(u=()=>i(c))}),(function(){const t={};return s.forEach((s=>I(e[s]).once(((...e)=>t[s]=e)))),[t]})).share()}function A(...e){return R((function(s){const{supply:n}=s,r=m(s);let i=t;const u=[];e.forEach(((t,e)=>{n.needs(t[o]().to(((...t)=>{u[e]=t,i()})).needs(n))})),n.isOff||(i=()=>r(...u))}),(function(){const t=[];return e.forEach((e=>I(e).once(((...e)=>t.push(e))))),t})).share()}function D(...s){return R(t,e(s))}function T(t){return r(((e,s)=>e.onEvent(s,I(t))))}class L extends d{on(t){return(this.on=z((t=>super.on(t))).F)(t)}[_](){return this.on()}}const q=z(j);function M(t){return v(t)?t[_]():t[o]()}function V(...t){return t.length?z((e=>{const{supply:s}=e;let n=t.length;const r=t=>{--n||s.off(t)},i=(t,...s)=>{e.receive(t,...s)};t.forEach((t=>M(t).to({supply:p(r).needs(s),receive:i})))})).share():q}function B(t){return z((e=>{const{supply:s}=e,n=m(e),r=p();let o=0;const u=M(t).tillOff(s,r).thru_((t=>(++o,i(t))));let c=[],h=1,f=0;r.whenOff((t=>{o||s.off(t)})),function(t){return z((e=>{const{supply:s}=e,n=m(e);let r=0;t[_]().to({supply:s,receive(t,e){const i=++r;Promise.resolve().then((()=>e)).then((t=>n(t,i)),(t=>s.off(t)))}})}))}(u).to({supply:s,receive(t,s,i){const u=i-h;if(c[u]=s,++f,f>u){let t;f===c.length?(t=c,c=[]):t=c.splice(0,u+1),h+=t.length,f-=t.length,o-=t.length,n(...t),!o&&r.isOff&&e.supply.needs(r)}}})}))}function C(t){let e=s=>{t.then((()=>e(s)),(()=>e(s)))};return t.then((t=>{e=function(t){return e=>{try{m(e)(t),e.supply.off()}catch(t){e.supply.off(t)}}}(t)})).catch((t=>{var s;s=t,e=({supply:t})=>t.off(s)})),z((t=>e(t)))}function G(t){return r(((e,s)=>e.onEvent(s,M(t))))}function H(t){return Array.isArray(t)?t:[t]}class J{constructor(t){this._drop=t,this.emitter=new L,this._nested=new Map,this.emitter.on(((t,e,s)=>{const n=t[0],r=this._nested.get(n);r&&r.emitter.send(t.slice(1),e,s)}))}on(t){const e=this.emitter.on(t);return p((t=>{e.off(t),this._dropIfEmpty()})).needs(e)}nest(t,e){const s=this._nested.get(t);if(s||e)return s;const n=new J((()=>this._remove(t)));return this._nested.set(t,n),n}done(t){for(const e of this._nested.values())e.done(t);this.emitter.done(t)}_remove(t){this._nested.delete(t),this._dropIfEmpty()}_dropIfEmpty(){!this._nested.size&&this.emitter.size<=1&&this._drop()}}class K{constructor(){this._root=new J(t)}on(t,e){return this._entry(t).on(e)}send(t,e,s){this._root.emitter.send(t,e,s)}done(t,e){const s=this._entry(t,!0);s&&s.done(e)}_entry(t,e){let s=this._root;for(const n of t){const t=s.nest(n,e);if(!t)return;s=t}return s}}class Q{constructor(t,e){this._trackers=t,this._path=e,this.update=(t,e,s)=>{this._trackers.send([...this._path,...H(t)],e,s)}}get _tracker(){return this}onUpdate(t){return(this.onUpdate=z((t=>this._trackers.on(this._path,t))).F)(t)}[_](){return this.onUpdate()}track(t){return(t=H(t)).length?new Q(this._trackers,[...this._path,...t]):this}done(t){this._trackers.done(this._path,t)}}class W{constructor(){this._tracker=new Q(new K,[])}onUpdate(t){return(this.onUpdate=this._tracker.onUpdate().F)(t)}[_](){return this.onUpdate()}get update(){return this._tracker.update}track(t){const e=this._tracker.track(t);return e===this._tracker?this:e}done(t){this._tracker.done(t)}}class X{constructor(){this._by=g()}read(t){return(this.read=R((t=>{return this.on({supply:(e=t).supply,receive(t,s){e.receive({onRecurrent(e){t.onRecurrent((t=>e(t)))}},s)}});var e}),(()=>[this.it])).F)(t)}[_](){return this.on()}[o](){return this.read()}by(t,e){const s=t=>(u(t)?t[o]():t[_]()).to((t=>this.it=t));if(this.byNone(),e){const n=t;this._by=M(n).consume(((...t)=>{const n=e(...t);if(n)return s(n)}))}else{const e=t;this._by=s(e)}return this._by.whenOff((()=>this._by=g())),this}byNone(t){return this._by.off(t),this}done(t){return f(this).off(t),this}}class Y extends X{constructor(t){super(),this._it=t,this._on=new L}get[c](){return f(this._on)}on(t){return(this.on=this._on.on().F)(t)}get it(){return this._it}set it(t){const e=this._it;e!==t&&(this._it=t,this._on.send(t,e))}}function Z(t){return new Y(t)}function $(t,e){return Z().by(t,e)}class tt extends x{get F(){return this.to.bind(this)}to(t,e){if(!t)return this;const s=a(t),{supply:n}=s;return n.isOff||this._on(s,e),n}once(t,e){return(this.once=et(b(this)).F)(t,e)}tillOff(t,e){return et(F(this,t,e))}capture(t,e){return(this.capture=et(((t,e)=>null==e?this.to(t,!0):"object"==typeof e&&null==e.capture?this.to(t,{...e,capture:!0}):this.to(t,e))).F)(t,e)}instead(t,e){return(this.instead=et(((t,e)=>{const s=a(t);return this.to({supply:s.supply,receive(t,e){e.preventDefault(),s.receive(t,e)}},e)})).F)(t,e)}just(t,e){return(this.just=et(((t,e)=>{const s=a(t);return this.to({supply:s.supply,receive(t,e){e.stopPropagation(),s.receive(t,e)}},e)})).F)(t,e)}last(t,e){return(this.last=et(((t,e)=>{const s=a(t);return this.to({supply:s.supply,receive(t,e){e.stopImmediatePropagation(),s.receive(t,e)}},e)})).F)(t,e)}passive(t,e){return(this.passive=et(((t,e)=>null==e?this.to(t,{passive:!0}):"boolean"==typeof e?this.to(t,{capture:e,passive:!0}):null==e.passive?this.to(t,{...e,passive:!0}):this.to(t,e))).F)(t,e)}}function et(t){return new tt(t)}var st;const nt={onRecurrent:t};class rt{constructor(t){this[st]=p(),this._target=t}on(t){return et(((e,s)=>{const{supply:n}=e;if(n.needs(f(this)),!n.isOff){const n=t=>e.receive(nt,t);this._target.addEventListener(t,n,s),e.supply.whenOff((()=>this._target.removeEventListener(t,n)))}}))}dispatch(t){return!f(this).isOff&&this._target.dispatchEvent(t)}done(t){return f(this).off(t),this}}st=c;export{o as A,rt as D,L as E,_ as O,W as S,X as V,D as a,T as b,$ as c,S as d,z as e,I as f,N as g,p as h,f as i,c as j,u as k,A as l,R as m,G as n,B as o,g as p,d as q,v as r,M as s,Z as t,C as u,H as v,V as w,a as x};//# sourceMappingURL=fun-events.b7373782.js.map
