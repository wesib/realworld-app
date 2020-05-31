import{n as e,s as t,v as n,i as r,g as s,m as o}from"../proc7ts/primitives.f8acf1f5.js";import{b as i,n as a,c,a as u}from"../proc7ts/call-thru.7f76a0d9.js";import{m as h,i as l,a as d,f,d as p,c as g,b as m,e as _}from"../proc7ts/a-iterable.3b78dc26.js";import{b as w,C as b,S as y,c as v,F as x,d as k,e as S,a as C,g as R}from"../proc7ts/context-values.7886ab40.js";import{j as U,e as O,i as A,E as L,k as D,O as E,A as F,c as T,a as N,h as M,d as P,D as q,o as I,u as j,b as K,m as z,r as $,f as B,V as W,q as H,v as V,w as J,g as G}from"../proc7ts/fun-events.c2220af5.js";import{c as Q,h as X}from"../proc7ts/namespace-aliaser.b34c0889.js";import{C as Y,B as Z,m as ee,d as te,n as ne,o as re,j as se,p as oe,q as ie,a as ae,W as ce,r as ue,s as he,u as le,v as de,g as fe,c as pe}from"./wesib.e7f21d38.js";import{l as ge,m as me,n as _e,o as we,p as be}from"../proc7ts/input-aspects.8d791286.js";function ye({$:e,n:t,t:n,v:r,x:s=[],p:o={},pl:i=[]}){return{$:e,n:t,t:n,v:r,x:s,p:o,pl:i}}function ve({p:e,pl:t},n){const r=n.n||n.v,s=e[r];(!s||!s.n&&n.n)&&(e[r]=n),t.push(n)}const xe=()=>!1,ke=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), \d\d (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) \d\d\d\d \d\d:\d\d:\d\d GMT/;function Se({dateTime:e}){return e?Ce:xe}function Ce(e,t){return e.s=e.s.substring(e.i),e.i=0,!!ke.test(e.s)&&(t(e.s.substring(e.i,e.i+=29)),!0)}function Re({delimiterOf:e}){return t=>{const n=t.s[t.i];return t.d=e(n),n}}function Ue(e,{named:t=!0,tagged:n=!0,extra:r=!0,next:s=Re(e)}={}){const o=function({delimiterOf:e}){return(t,n)=>{if(!(262144&e(t.s[t.i])))return!1;let r="";for(++t.i;t.i<t.s.length;){const n=t.s[t.i++];if(524288&e(n))break;r+=n}return n(r),!0}}(e),i=Se(e),a=function({delimiterOf:e}){return(t,n)=>{let r="";for(++t.i;t.i<t.s.length;++t.i){const s=t.s[t.i];if("\\"===s){const e=t.s[++t.i];r+=e||s}else{if(65536&e(s))return++t.i,void n(r);r+=s}}n(r)}}(e),c=r?Ue(e,{next:s,tagged:!1,named:!1,extra:!1}):xe;return(e,r)=>{let u,h,l,d="",f="raw";for(;e.i<e.s.length;){const r=s(e);if(e.d){if(12&e.d)break;if(null==h){if(16&e.d){h=d?"":r,++e.i;continue}if(65536&e.d){!n&&d||a(e,e=>{d?(f="tagged-string",u=d):f="quoted-string",d="",h=e});break}if(!d&&o(e,e=>{f="angle-bracketed-string",h=e}))break;h=d,d=""}else{if(65536&e.d){!n&&h||a(e,e=>{h?(f="tagged-string",u=h):f="quoted-string",h=e});break}if(!h&&o(e,e=>{f="angle-bracketed-string",h=e}))break}}if(null==h){if(!d&&i(e,e=>h=e)){f="date-time";break}t?d+=r:h=r}else{if(!h&&i(e,e=>h=e)){f="date-time";break}h+=r}++e.i}if(null==h){if(!d)return!1;l=ye({$:f,v:d})}else l=ye({$:f,n:d||void 0,t:u,v:h});for(;c(e,e=>l.x.push(e)););return r(l),!0}}function Oe({delimiterOf:e}){return t=>{let n=t.s[t.i];return"\\"!==n?(t.d=e(n),n):(++t.i,t.i<t.s.length?(n=t.s[t.i],t.d=e(n)?1:0):t.d=1,n)}}function Ae({delimiterOf:e}){return t=>{const n=t.i;do{const n=t.s[t.i];if(!(2&e(n)))break;t.i++}while(t.i<t.s.length);return t.i!==n}}function Le(e,t={}){const{delimiterOf:n}=e,r=Ae(e),s=Ue(e,{...t,tagged:!1});return(e,t)=>!!(8&n(e.s[e.i]))&&(++e.i,r(e),s(e,t))}const De={" ":7,"\t":7,",":5,";":9,'"':65569,"\\":33,"<":262145,">":524289,"=":17,"(":1,")":1,"/":1,":":1,"?":1,"@":1,"[":1,"]":1,"{":1,"}":1};function Ee({delimit:e,dateTime:t}={}){const n=e?{...De,...e}:De;return{dateTime:t,delimiterOf:e=>n[e]||(e>="\0"&&e<=" "||"\x7f"===e?1:0)}}const Fe=Ee(),Te=Ee({delimit:{":":17,"(":131105,")":37," ":3,"\t":3,"=":1,",":1}});function Ne(e){const t=e?Ee(e):Fe,n=function(e){const{delimiterOf:t}=e,n=Ae(e);return e=>!!(4&t(e.s[e.i]))&&(e.i++,n(e),!0)}(t),r=Le(t),s=Ue(t),o=(null==e?void 0:e.comments)?function(e){const{delimiterOf:t}=e,n=Ae(e),r={next:Oe(e)},s=Ue(e,r),o=Le(e,r);return(e,r)=>{if(!(131072&t(e.s[e.i])))return!1;let i;for(++e.i;n(e)||o(e,e=>{i||(i=ye({$:"raw",v:""})),ve(i,e)})||s(e,e=>i=e););return++e.i,r(i||ye({$:"raw",v:""})),!0}}(Te):xe;return e=>{const t=[],i={i:0,s:e};for(;i.i<i.s.length&&(n(i)||r(i,e=>{t.length||t.push(ye({$:"raw",v:""})),ve(t[t.length-1],e)})||o(i,e=>t.push(e))||s(i,e=>t.push(e))););return t}}const Me=Ne();function Pe(e){if(!e)return'""';const{delimiterOf:t}=Fe;let n,r=!1;for(let s=0;s<e.length;++s){const o=e[s],i=t(o);i?(32&i&&(n||(n=e.substring(0,s)),n+="\\"+o),r=!0):n&&(n+=o)}return r?`"${n||e}"`:e}class qe extends k{constructor(e){super(e),this.upKey=this.createUpKey(e=>e.insert(e.seed.keepThru((...t)=>t.length?u(function(e){return(t,n)=>{const r=(n,s)=>{const o=e[n];return o?z(o((e=s)=>r(n+1,e),s)):t(s)};return r(0,n)}}(t)):e.hasFallback&&e.or?O(e.or):Ie)))}grow(e){let t;e.context.get(this.upKey,e.hasFallback?{or:null!=e.or?T(e.or):e.or}:void 0).to(e=>t=e).whenOff(e=>t=S(e)),e.insert((e,n)=>t(e,n))}}function Ie(e,t){return e(t)}const je=new qe("http-fetch-agent"),Ke={};const ze=new x("http-fetch",{byDefault:ae((function(e){const t=e.get(Z),n=e.get(je);return(e,t)=>n(r,new Request(e,t));function r(e){return I(n=>{const r=new $;let s;if("AbortController"in t){const o=new t.AbortController,{signal:i}=o;s=U(e=>{e===Ke&&o.abort()}),n.supply.whenOff(()=>s.off(Ke)).needs(s),r.on({supply:s,receive(e,t){n.receive(e,t)}});const a=e.signal;a&&(new q(a).on("abort").once(()=>o.abort()),a.aborted&&o.abort()),e=new Request(e,{signal:i})}else s=r.on(n);t.fetch(e).then(e=>{r.send(e),s.off()}).catch(e=>s.off(e))})}}))});const $e=new y("hierarchy-root",{byDefault:e=>{const t=e.get(ue);return new q(t).on("wesib:component").to(({context:e})=>e.get(We).issue()),P()}}),Be=new y("hierarchy-updates",{byDefault:e=>new We(e.get(te))});class We{constructor(e){const t=new $,n=e.get(ne).get($e);this.on=t.on(),this.send=()=>t.send(e),this.issue=()=>{const t=He(e);t?t[0].get(We).send():n.it=e}}static get[b](){return Be}}function He(e){const t=e.get(ne).get(ue);let{element:n}=e,r=!0;if(n!==t)for(;;){const e=n.parentNode;if(!e)return;const s=e[oe];if(s)return[s,r];if(e===t)return;r=!1,n=e}}const Ve=new y("hierarchy-context",{byDefault:e=>new Ge(e.get(te))});class Je extends w{static get[b](){return Ve}get[L](){return D(this.context)}}class Ge extends Je{constructor(t){super(),this.context=t;const n=this._parent=P();t.whenConnected(e).cuts(n);const r=this._registry=(s=this.up(),new v(e=>function(e){return"upKey"in e}(e)?s.keepThru(t=>t?O(t.get(e)):i()):void 0));var s;this.get=r.newValues().get}provide(e){const t=this._registry.provide(e);return D(this).whenOff(t),t}up(e){return(this.up=M(e=>{const{supply:t}=e;t.needs(this);const n=P();n.by(this._parent),t.cuts(n);const r=U().needs(t),s=U().needs(t),o=()=>{const e=He(this.context);if(e){const[t,o]=e;n.it=t.get(Je),r.off(),o&&s.off()}else n.it=void 0};this.context.get(ne).get($e).read({supply:r,receive:()=>this.context.connected&&o()}),n.read().tillOff(s).consume(e=>e&&e.context.get(We).on.to(o)),n.read(e),this.context.whenConnected({supply:U().needs(t),receive:o})}).share().F)(e)}inside(e){return this._parent.it=e&&e.get(Je),this}}class Qe{[E](){return this.onUpdate()}[F](){return this.read()}}const Xe={subtree:!0};function Ye(e,t,n,o,{deep:i,all:a}){const c=new $,g=i?Xe:void 0;let m,w,b=new Set;const y=i?Ze:d;"string"==typeof n?w=n:e.whenDefined(n).then(({elementDef:{name:t}})=>{if(m=void 0,t&&(w=X.name(t,e.get(se)),c.size)){const e=x();if(e.size){const t=Array.from(f(h(e,e=>o(e)),r));t.length&&c.send(t,[])}}}).catch(console.error),a||t.addEventListener("wesib:component",e=>{const t=e.target;if(b.has(t)){const e=o(t);c.send([e],[])}});class v extends Qe{onUpdate(n){const r=e.get(le)(k);return(this.onUpdate=I(e=>{const n=!c.size,s=c.on(e);return n&&(x(),r.observe(t,g)),s.whenOff(()=>{c.size||(r.disconnect(),m=void 0,b.clear())})}).F)(n)}read(e){return(this.read=B(this.onUpdate().thru(()=>this),s(this)).F)(e)}track(e){const t=this.onUpdate();return(this.track=M(e=>{const n=new $;n.on(e),n.send(Array.from(this),[]),t.to(e)}).F)(e)}first(e){return(this.first=N(this.read()).keepThru(e=>u(_(e))).F)(e)}[Symbol.iterator](){return p(m||(m=f(h(c.size?b:x(),e=>o(e)),r)))}}return new v;function x(){m=void 0;const e=function(){const e=w;if(!e)return new Set;if(i)return new Set(d(t.querySelectorAll(e)));return new Set(f(d(t.children),t=>t.matches(e)))}();return c.size&&(b=e),e}function k(e){const t=[],n=[];e.forEach(e=>{l(f(h(y(e.removedNodes),C),r),e=>n.push(e)),l(f(h(y(e.addedNodes),S),r),e=>t.push(e))}),(t.length||n.length)&&c.send(t,n)}function S(e){if(he(e))return w&&e.matches(w)&&!b.has(e)?(b.add(e),o(e)):void 0}function C(e){if(he(e)&&b.delete(e))return o(e,!0)}}function Ze(e){return g(d(e),e=>[e,...Ze(e.childNodes)])}class et{constructor(e,t){this._bs=e,this.element=t,this._emitters=new Map}get observer(){if(this._observer)return this._observer;const e=this._bs.get(Z).MutationObserver;return this._observer=new e(e=>this._update(e))}observe(e,t){const n=this,r=this.observer,s=this._emitter(e),o=j(t),i=s.on({supply:U(()=>{this._emitters.delete(e),r.disconnect(),this._emitters.size?a():this._observer=void 0}).needs(o.supply),receive:(e,t,n)=>o.receive(e,t,n)});return r.disconnect(),a(),i;function a(){n._update(r.takeRecords()),r.observe(n.element,{attributes:!0,attributeOldValue:!0,attributeFilter:Array.from(n._emitters.keys())})}}_update(e){e.forEach(e=>{const t=e.attributeName,n=this._emitters.get(t);n&&n.send(this.element.getAttribute(t),e.oldValue)})}_emitter(e){const t=new $;return this._emitters.set(e,t),t}}class tt extends W{constructor(e,t){super(),this._observer=e,this._name=t,this._updates=new $}get[L](){return D(this._updates)}get it(){return this._observer.element.getAttribute(this._name)}set it(e){null!=e?this._observer.element.setAttribute(this._name,e):this._observer.element.removeAttribute(this._name)}on(e){let t=V();return(this.on=I(e=>{this._updates.size||(t=this._observer.observe(this._name,(e,t)=>this._updates.send(e,t))),e.supply.needs(t),this._updates.on(e).whenOff(e=>{this._updates.size||t.off(e)})}).F)(e)}}class nt{constructor(e,t){this._attrs=new Map,this._observer=new et(e,t)}get(e){const t=this._attrs.get(e);if(t)return t;const n=new tt(this._observer,e);return this._attrs.set(e,n),n}}class rt extends W{constructor(e,t){super(),this._element=e,this._key=t,this._updates=new $}get[L](){return D(this._updates)}get it(){return this._element[this._key]}set it(e){this._element[this._key]=e}on(e){return(this.on=this._updates.on().F)(e)}bind(e){e.get(de).track(fe(this._key)).onUpdate().to({supply:D(this),receive:(e,t,n,r)=>this._updates.send(n,r)})}}class st{constructor(e){this._element=e,this._props=new Map}bind(e){this._context=e,this._props.forEach(t=>t.bind(e))}get(e){const t=this._props.get(e);if(t)return t;const n=new rt(this._element,e);return this._context&&n.bind(this._context),this._props.set(e,n),n}}const ot=Symbol("element-node");class it{constructor(e,t){this._bs=e,this.element=t,this._attrs=new nt(e,t),this._props=new st(t),t[ot]=this;const n=t[oe];n?this._bind(n):t.addEventListener("wesib:component",e=>this._bind(e.context))}get context(){return this.element[oe]}get parent(){const e=this.element.parentNode;return e&&at(this._bs,e)}select(e,t){return function(e,t,n,r={}){if(r.all)return Ye(e,t,n,(t,n)=>at(e,t,n),r);const s=e.get(ie);return Ye(e,t,n,(t,n)=>s(t)&&at(e,t,n),r)}(this._bs,this.element,e,t)}attribute(e){return this._attrs.get(e)}property(e){return this._props.get(e)}_bind(e){this._props.bind(e)}}function at(e,t,n){const r=t[ot];return r||n?r:new it(e,t)}const ct=new y("component-node",{byDefault:e=>at(e.get(ne),e.get(te).element)});function ut(e){return new URL(e.hash.substring(1),e.origin)}function ht(e,t){if(t.origin!==e.origin||t.username)return new URL("#"+t,e);const{pathname:n,search:r,hash:s}=t,o=new URL("",e);return o.hash=r||s||n.length>1?n+r+s:r+s,o}const lt=Symbol("page-param");class dt{get[lt](){return this}byDefault(e,t){}}class ft extends dt{create(e,t){let n;const r={get:()=>n,put(t){n="string"==typeof t?new URL(t,e.url.origin):t}};return r.put(t),r}}const pt=new ft;class gt extends dt{create(e,t){const n={get:()=>e.get(pt)||ut(e.url),put(t){e.put(pt,t)}};return n.put(t),n}byDefault(e){return this.create(e,null)}}const mt=new gt;class _t extends k{constructor(e){super(e),this.upKey=this.createUpKey(e=>{const{document:t}=e.context.get(Z);e.insert(e.seed.keepThru((...n)=>n.length?function(e,r,s,o){return function o(i,a){const c=n[i];if(!c)return e(a);c(({url:e=a.url,title:n=a.title,data:r=a.data}=a)=>o(i+1,{url:new URL(String(e),t.baseURI),title:n,data:r,get visited(){return a.visited},get current(){return a.current},get:e=>a.get(e),put(e,t){a.put(e,t)}}),r,s,a)}(0,o)}:e.hasFallback&&e.or?O(e.or):wt))})}grow(e){let t;e.context.get(this.upKey,e.hasFallback?{or:null!=e.or?T(e.or):e.or}:void 0).to(e=>t=e).whenOff(e=>t=S(e)),e.insert((e,n,r,s)=>t(e,n,r,s))}}function wt(e,t,n,r){e(r)}const bt=new _t("navigation-agent"),yt={setup(e){e.provide({a:bt,is:xt})}};class vt{static get[re](){return yt}}function xt(e,t,n,r){const s=r.get(pt);s?e({url:ht(r.url,s)}):e()}class kt extends w{}const St=new y("nav-history",{byDefault:ae(e=>new Rt(e))});function Ct(e){return null==e||"object"!=typeof e?{data:e}:e["wesib:navigation:data"]}class Rt{constructor(e){this._context=e,this._entries=new Map,this._lastId=0;const t=e.get(Z);this._document=t.document,this._location=t.location,this._history=t.history,this._uid=btoa(String(Math.random()))}static get[b](){return St}init(){const{data:e}=Ct(this._history.state),t=this.newEntry({url:new URL(this._location.href),data:e,title:this._document.title});return this._entries.set(t.id,t),t.schedule(()=>{t.enter("init"),this._history.replaceState(this._historyState(t),"")}),t}newEntry(e){return new Ut(this._context,++this._lastId,e)}open(e,t){const{page:{title:n="",url:r}}=e;this._history.pushState(this._historyState(e),n,r.href),this._enter("open",e,t)}_enter(e,t,n){const r=n.it;this._entries.set(t.id,t);try{for(let e=r.next;e;e=e.next)this._forget(e)}finally{t.prev=r,r.next=t,t.schedule(()=>{try{r.leave()}finally{t.enter(e)}}),n.it=t}}replace(e,t){const n=t.it,{page:{title:r="",url:s}}=e;this._history.replaceState(this._historyState(e),r,s.href),this._entries.set(e.id,e);const o=n.prev;o&&(e.prev=o,o.next=e),e.schedule(()=>{try{n.leave()}finally{try{this._forget(n)}finally{e.enter("replace")}}}),t.it=e}popState(e,t){const{state:n}=e;if(null==n)return null==this._history.state?this._changeHash(t):void 0;const r=t.it,{uid:s,data:o,id:i}=Ct(n);let a;const c=s===this._uid&&null!=i?this._entries.get(i):void 0;return c?a=c:(a=this.newEntry({url:new URL(this._location.href),data:o,title:this._document.title}),r.transfer(a,"return"),this._entries.set(a.id,a),this._history.replaceState(this._historyState(a),"")),a.schedule(()=>{try{r.leave()}finally{a.enter("return")}}),t.it=a,a}hashChange(e){if(null==this._history.state)return this._changeHash(e)}update(e,t){const n=e.it,r=new Ut(this._context,++this._lastId,{...n.page,url:t},n);return this._entries.set(r.id,r),this._history.replaceState(this._historyState(r),"",t.href),this._entries.delete(n.id),e.it=r}_changeHash(e){const t=e.it,n=this.newEntry({url:new URL(this._location.href),data:null,title:this._document.title});try{t.transfer(n,"enter")}finally{this._history.replaceState(this._historyState(n),""),this._enter("enter",n,e)}return n}_forget(e){this._entries.delete(e.id),e.forget()}_historyState({id:e,page:{data:t}}){return{"wesib:navigation:data":{uid:this._uid,id:e,data:t}}}}class Ut{constructor(t,n,r,s){this._bsContext=t,this.id=n,this._status=0,this._update=e,this._params=s?s._params:new Map;const o=this;this.page={get url(){return r.url},get title(){return r.title},get data(){return r.data},get visited(){return!!o._status},get current(){return 2===o._status},get:e=>o.get(e),put(e,t){o.put(e,t)}}}get(e){const t=e[lt],n=this._params.get(t);if(n)return n.get();const r=t.byDefault(this.page,this._newContext());return r&&this._init(t,r)}put(e,t){const n=e[lt],r=this._params.get(n);return r?(r.put(t),r.get()):this._init(n,n.create(this.page,t,this._newContext()))}_newContext(){const e=new v(this._bsContext);return new class extends kt{constructor(){super(...arguments),this.get=e.newValues().get}}}_init(e,t){return this._params.set(e,t),this.page.current&&t.enter&&t.enter(this.page,"init"),t.get()}transfer(e,t){l(this._params.entries(),([n,r])=>{if(r.transfer){const s=r.transfer(e.page,t);s&&e._params.set(n,s)}})}stay(e){l(this._params.values(),t=>t.stay&&t.stay(e))}enter(e){this._status=2,l(this._params.values(),t=>t.enter&&t.enter(this.page,e))}leave(){this._status=1,l(this._params.values(),e=>e.leave&&e.leave())}forget(){l(this._params.values(),e=>e.forget&&e.forget()),this._params.clear()}schedule(e){this._update=e}apply(){const t=this._update;this._update=e,t()}}class Ot extends Event{constructor(e,t){super(e,{...t,cancelable:!1}),this.when=t.when,this.to=t.to}}class At extends Event{constructor(e,t){super(e,{...t,cancelable:!0}),this.when=t.when,this.from=t.from,this.to=t.to}}class Lt extends Event{constructor(e,t){super(e,{...t,cancelable:!0}),this.from=t.from,this.to=t.to,this.reason=t.reason}get when(){return"stay"}}const Dt=new y("navigation",{byDefault:ae((function(t){const n=t.get(Z),{document:r,history:s}=n,i=new q(n),a=t.get(Rt),c=t.get(bt),u=P(a.init());u.read(e=>e.apply());let h=Promise.resolve();i.on("popstate").to(e=>{const t=a.popState(e,u);t&&i.dispatch(new Ot("wesib:enterPage",{when:null!=e.state?"return":"enter",to:t.page}))}),i.on("hashchange").to(()=>{const e=a.hashChange(u);e&&i.dispatch(new Ot("wesib:enterPage",{when:"enter",to:e.page}))});return new class extends Et{get page(){return u.it.page}get length(){return s.length}onEnter(e){return(this.onEnter=i.on("wesib:enterPage").F)(e)}onLeave(e){return(this.onLeave=i.on("wesib:leavePage").F)(e)}onStay(e){return(this.onStay=i.on("wesib:stayOnPage").F)(e)}on(e){return(this.on=H(this.onEnter(),this.onLeave(),this.onStay()).F)(e)}read(e){return(this.read=u.read().keepThru(e=>e.page).F)(e)}go(e){s.go(e)}open(e){return f("pre-open","open",e)}replace(e){return f("pre-replace","replace",e)}update(e){return a.update(u,l(e)).page}with(e,t){return function e(t){return{with:(n,r)=>e(o(t,e=>e.put(n,r))),open:e=>f("pre-open","open",e,t),replace:e=>f("pre-replace","replace",e,t),pretend(e,n=((e,t)=>t)){let r;"function"==typeof e?(n=e,r=void 0):r=e;const s=d(r),o=u.it,i=p("pretend",o,s,t);try{return g("pretend",o,s,i)?n(o.page,i.page):void 0}finally{i.stay(u.it.page)}}}}(n=>n.put(e,t))}};function l(e){return"string"==typeof e?new URL(e,r.baseURI):e||u.it.page.url}function d(e){return null==e||"string"==typeof e||e instanceof URL?{url:l(e)}:e.url instanceof URL?e:{...e,url:l(e.url)}}function f(t,n,r,s=e){const o=d(r),c=h=h.then(l,l);return c;function l(){let e=void 0;try{const r=function(){if(h!==c)return f();const e=u.it,n=p(t,e,o,s),r=new At("wesib:leavePage",{when:t,from:e.page,to:n.page});if(!i.dispatch(r)||h!==c||!g(t,e,o,n))return f(n);return n}();return r?(e=r,a[n](e,u),i.dispatch(new Ot("wesib:enterPage",{when:n,to:e.page})),e.page):r}catch(t){throw f(e,t),t}}function f(e,t){return e&&e.stay(u.it.page),i.dispatch(new Lt("wesib:stayOnPage",{from:u.it.page,to:o,reason:t})),null}}function p(e,t,n,r){const s=a.newEntry(n);try{t.transfer(s,e),r(s.page)}catch(e){throw s.stay(u.it.page),e}return s}function g(e,t,n,r){let s=!1;return c(({url:e,data:t,title:r})=>{s=!0,n.url=e,n.data=t,n.title=r},e,t.page,r.page),s}}))});class Et{static get[b](){return Dt}[E](){return this.on()}[F](){return this.read()}back(){this.go(-1)}forward(){this.go(1)}reload(){this.go()}}function Ft(t={}){const{select:n="a",pick:r={all:!0,deep:!0}}=t;return Y({define(s){s.whenComponent(s=>{const o=function(t,n){const r=t.get(ee),{render:s,active:o=qt}=n,i=Q.name(o,t.get(se)),a=n.activate?n.activate.bind(n):e;return e=>{const{element:t}=e.node,n=t[Pt]||(t[Pt]=r(s)),o=t=>{n(()=>((e,{node:t})=>{const{element:n}=t,{classList:r}=n;e?r.add(i):r.remove(i)})(t,e)),a(t,e)};let c;return o(!0),{supply(){const e=c=U(()=>{c===e&&o(!1)});return e}}}}(s,t),a=function(e){if(!e.weigh)return Tt;return t=>{const n=e.weigh(t);if("number"==typeof n)return T(t.node,n);let r=N(n).keepThru_(e=>i(t.node,e));return M(e=>{r.to({supply:U().needs(e.supply).whenOff(()=>{r=T(t.node,0),r.to(e)}),receive:e.receive.bind(e)})})}}(t),c=s.get(Et),u=s.get(ct);s.whenConnected(()=>{let e=new Map;c.read().tillOff(s).consume(t=>u.select(n,r).read().keepThru_(e=>O(A(...h(e,e=>a({node:e,context:s,page:t}))))).consume((...n)=>{const r=function(e){let t=0,n=[];return e.forEach(([e,r])=>{r>t?(t=r,n=[e]):r===t&&n.push(e)}),n}(n),i=new Map,a=U();return r.forEach(n=>{let r;const c=e.get(n);c?(i.set(n,c),r=c):(r=o({node:n,context:s,page:t}),i.set(n,r)),r.supply().needs(a)}),e=i,a}))})})}})}function Tt({node:e,page:t}){const{element:n}=e,r=n.getAttribute("href");if(null==r)return T(e,-1);const s=new URL(r,n.ownerDocument.baseURI);return T(e,function e(t,n){if(t.origin!==n.origin)return-1;const r=Nt(t),s=Nt(n);if(t.hash){if(r!==s)return-1;const o=Mt(t,n);return o<0||Mt(n,t)<0?-1:t.pathname.length+o+e(ut(t),ut(n))}const o=Mt(t,n);if(o)return o<0||r!==s?-1:t.pathname.length+o;if(!s.startsWith(r))return-1;return t.pathname.length}(s,t.url))}function Nt(e){const t=e.pathname;return t.endsWith("/")?t:t+"/"}function Mt({searchParams:e},{searchParams:t}){let n=0;return e.forEach((r,s)=>{if(!function(e){return e.startsWith("__")&&e.endsWith("__")}(s)){const r=new Set(t.getAll(s));n>=0&&(e.getAll(s).every(e=>r.has(e))?n+=1:n=-1)}}),n}const Pt=Symbol("nav-link-render-schedule"),qt=["active",ce];function It(e={}){const n=e.handle?e.handle.bind(e):function(e){const t=e.href?e.href.bind(e):jt;return({event:e,page:n,navigation:r})=>{const s=t(e);if(null==s)return;const o=e.target,i=n.url,a=new URL(s,o.ownerDocument.baseURI);a.origin===i.origin&&(e.preventDefault(),i.href!==a.href&&r.open(s).catch(console.error))}}(e),r=t(e.event||"click");return Y({define(e){e.whenComponent(e=>{e.whenConnected(()=>{const t=e.get(Et);for(const s of r)e.on(s).to(r=>{t.read().once(s=>n({event:r,page:s,context:e,navigation:t}))})})})}})}function jt(e){return e.target.getAttribute("href")}function Kt(e,t,n,r=zt){let s;"function"==typeof n?(r=n,s=null):s=n||null;const o=t.ownerDocument;if(he(e)){const n=o.createElement(e.tagName.toLowerCase());return e.getAttributeNames().forEach(t=>n.setAttribute(t,e.getAttribute(t))),r(e,n),t.insertBefore(n,s),n}const i=o.importNode(e,!1);return t.insertBefore(i,s),i}function zt(e,t){l(d(e.childNodes),e=>Kt(e,t))}function $t(e){let t;return n=>{const r=function(e){return new URL("",e.url).href}(n);if(t){if(t.url===r)return t.on;t.sup.off()}let s;const o=U().whenOff(()=>{t=void 0,s=void 0}),c=I(t=>{if(!s){const t=e(n),r=P(),c=t.to(e=>{r.it=e}).whenOff(e=>{null!=e&&o.off(e)});o.cuts(c).cuts(r),s={on:r.read().thru_(e=>e?i(e):a()),num:0}}const r=s;return++r.num,r.on.tillOff(o).to(t).whenOff(e=>{--r.num||Promise.resolve().then(()=>{r.num||r!==s||o.off(e)}).catch(console.error)})});return t={url:r,on:c,sup:o},c}}class Bt extends Error{}const Wt=new class extends dt{create(t,n){return{get:()=>n,put:e}}};class Ht{constructor(e,t){this._navigation=e,this._loader=t,this._map=new Map}get fragments(){const e=[];for(const t of this){if(!t.fragment)return[];e.push(t.fragment)}return e}[Symbol.iterator](){return p(g(this._map.values()))}handle(){const e=this,t=U();let n=V();return{get(){},put(t){e._add(t)},transfer(t,n){if("pretend"===n)return;const r=e._transfer();return t.put(Wt,r),r.handle()},enter(r,s){if("init"===s)return;n=U().needs(t);const o=I(t=>{const s=new $,o=s.on(t);return e._loader(r).tillOff(n).to(e=>s.send(e)).whenOff(e=>{void 0===e||e instanceof Bt||s.send({ok:!1,page:r,error:e})}),o}).share();l(e,({fragment:e,receiver:t})=>function(e,t){return t?e.thru_(e=>e.ok?{...e,fragment:(null!=t.tag?e.document.getElementsByTagName(t.tag)[0]:e.document.getElementById(t.id))||void 0}:e):e}(o,e).to({supply:U().needs(t.supply),receive(e,n){t.receive(e,n)}}))},leave(){n.off(new Bt("page left"))},stay(){t.off(new Bt("navigation cancelled"))},forget(){t.off(new Bt("page forgotten"))}}}_add(e){const t={...e,receiver:j(e.receiver)},{supply:n}=t.receiver,r=this._map.get(n);r?r.push(t):(this._map.set(n,[t]),n.whenOff(()=>this._map.delete(n)))}_transfer(){const e=new Ht(this._navigation,this._loader);for(const[t,n]of this._map.entries())e._map.set(t,Array.from(n));return e}}const Vt=new qe("page-load-agent"),Jt=new x("page-load-url",{byDefault:n(e)}),Gt=new y("page-loader",{byDefault:ae((function(e){const t=e.get(Z),n=e.get(ze),r=e.get(Jt),s=e.get(Vt),o=new t.DOMParser;return e=>{const t=new URL(e.url.href);r(t);const i=new Request(t.href,{mode:"same-origin",credentials:"same-origin",headers:new Headers({Accept:"text/html"})});return I(e=>s(a,i).to(e));function a(r){return function(e,t){var n;const r=null===(n=e.get(Wt))||void 0===n?void 0:n.fragments;r&&r.length&&t.headers.set("Accept-Fragment",m(r,(e,t)=>(e?e+", ":"")+(null!=t.tag?"tag="+Pe(t.tag):"id="+Pe(t.id)),""))}(e,r),I(s=>{const i=new J;i.on(s),i.send({page:e}),K(n(r).thru_(e=>Promise.all([e,e.text()]))).thru_((...e)=>c(e),([n,r])=>{if(!n.ok)return{ok:!1,page:e,response:n,error:n.status};try{return{ok:!0,page:e,response:n,document:Qt(o,t,n,r)}}catch(t){return{ok:!1,page:e,response:n,error:t}}}).to(s)})}}}))});function Qt(e,t,n,r){const s=e.parseFromString(r,Me(n.headers.get("Content-Type")||"text/html")[0].v);if(s.head){const e=s.head.querySelector("base");if(e)e.href=new URL(e.getAttribute("href"),t).href;else{const e=s.createElement("base");e.href=t.href,s.head.appendChild(e)}}return s}class Xt extends dt{create(e,t,n){const r=new Ht(n.get(Et),$t(n.get(Gt))),s=r.handle();return e.put(Wt,r),s.put(t),s}}const Yt=new Xt,Zt=new y("page-cache-buster",{byDefault:ae(e=>new en(e))});class en{constructor(e){const t=tn(e.get(Z).document);if(t){const n=e.get(Et);this.urlModifier=T(e=>e.searchParams.set("__wesib_app_rev__",t)),this.agent=T((e,r)=>e(new Request(r.url,r)).thru_(e=>{if(e.ok){const r=tn(e.document);if(r&&r!==t){const t=new URL(e.page.url.href);t.searchParams.set("__wesib_app_rev__",r),n.update(t),n.reload()}}return e}))}else this.urlModifier=T(),this.agent=T()}static get[b](){return Zt}}function tn(e){var t;return null===(t=e.querySelector("meta[name=wesib-app-rev]"))||void 0===t?void 0:t.getAttribute("content")}function nn(e){const t=e.get(Z).document;return e=>e().thru_(e=>{if(e.ok){const n=new Set(h(rn(t,d(t.scripts)),([e])=>e));l(f(rn(e.document,d(e.document.querySelectorAll("script"))),([e])=>!n.has(e)),([e,r])=>{Kt(r,t.head,(t,n)=>n.src=e),n.add(e)})}return e})}function rn(e,t){return h(f(t,e=>!!e.src),t=>[new URL(t.src,e.baseURI).href,t])}function sn(e){const t=e.get(Z).document;return e=>e().thru_(e=>{if(!e.ok)return e;const n=e.document.querySelectorAll("link[rel=stylesheet]");if(!n.length)return e;let r=t.head,s=null;const o=t.querySelectorAll("link[rel=stylesheet]"),i=new Map,a=o.item(0);return a&&(r=a.parentNode,s=a,l(d(o),e=>i.set(new URL(e.href,t.baseURI).href,e))),l(d(n),e=>{const n=new URL(e.href,t.baseURI).href,o=i.get(n);o?(_(i.keys())===n?(r=o.parentNode,s=o.nextSibling):r.insertBefore(o,s),i.delete(n)):Kt(e,r,s,(e,t)=>t.href=n)}),l(i.values(),e=>e.parentNode.removeChild(e)),e})}function on(e){const t=e.get(Z).document;return e=>e().thru_(e=>{if(e.ok){const n=e.document.getElementsByTagName("title").item(0);n&&n.textContent&&(t.title=n.textContent)}return e})}const an={setup(e){e.provide({a:Jt,by:e=>e.urlModifier,with:[en]}),e.provide({a:Vt,by:e=>e.agent,with:[en]}),e.provide({a:Vt,by:nn}),e.provide({a:Vt,by:sn}),e.provide({a:Vt,by:on})}};class cn{static get[re](){return an}}function un(t={}){const r=t.onResponse?t.onResponse.bind(t):e,s=t.contentKey?t.contentKey.bind(t):hn;return Y({feature:{needs:[cn]},define(e){e.whenComponent(e=>{const{fragment:o,render:i}=t,a=e.get(Z).document,c=e.get(ee)(i),u=e.get(Et);let h,l=s(u.page);h=o?n(o):()=>{const{element:{id:t,tagName:n}}=e;return t?{id:t}:{tag:n}},e.whenConnected(()=>{const t=a.createRange();t.selectNodeContents(e.contentRoot),u.read().once(n=>{n.put(Yt,{fragment:h(),receiver:{supply:U().needs(e),receive:(n,o)=>function(n){const o=s(n.page);if(o===l)return;if(!n.ok)return void c(()=>r({context:e,range:t,response:n}));l=o,c(()=>{t.deleteContents();const s=a.createDocumentFragment(),{fragment:o}=n;o&&(zt(o,s),t.insertNode(s)),r({context:e,range:t,response:n})})}(o)}})})})})}})}function hn({url:e}){return new URL("",e).href}class ln extends k{get upKey(){return this}constructor(){super("default-in-aspects")}grow(e){const t=e.context.get(se),n=e.context.get(ee);e.insert(e.seed.keepThru((...e)=>_e(...e,be.to(n),we.to(t))).tillOff(e.context.get(R)))}}const dn=new ln,fn=new C("input-from-control",{byDefault:()=>({})});function pn(e,t){const n=e.get(Je).provide({a:fn,by:()=>({root:e,control:t})});return U(n).needs(e).needs(t)}function gn(e){return Y({define(t){t.whenComponent(t=>{const{up:n}=t.get(Je);G({parent:n().keepThru_(e=>e?O(e.get(fn)):u({})),aspects:t.get(dn)}).keepThru_(({parent:[n],aspects:[r]})=>{if(n.control){const s=e({control:n,context:t,aspects:r});if(s)return s instanceof ge?i(s):O(s)}return i()}).consume((e,n)=>{if(!e)return;const r=pn(t,e);return(n||D(e)).needs(r),r})})}})}const mn=new C("input-to-form",{byDefault:()=>({})});function _n(e){const{select:t="form",pick:n={deep:!0,all:!0}}=e;return Y({define(r){r.whenComponent(r=>{const s=r.get(ct);r.whenConnected(()=>{G({node:s.select(t,n).first(),aspects:r.get(dn)}).keepThru(({node:[t],aspects:[n]})=>{if(!t)return i();const s=e.makeForm({node:t,context:r,aspects:n});return s?Array.isArray(s)?i(...s):O(s):i()}).consume((e,t,n)=>{if(!e)return;const s=function(e,t,n){const r=e.get(Je),s=r.provide({a:mn,by:()=>({root:e,control:t,form:n})});return r.provide({a:fn,via:mn}),U(s).needs(e).needs(t).needs(n)}(r,e,t);return n?n.needs(s):s.cuts(t).cuts(e),s})})})}})}function wn(e={}){const{cancel:t=!0}=e;return pe(({get:e})=>({componentDef:{define(n){n.whenComponent(n=>{n.whenConnected(()=>{const r=n.get(Je),{component:s}=n;r.get(mn).consume(r=>{if(!r.control)return;const o=new q(r.form.element);D(o).needs(n);const i=o.on("submit");return(t?i.instead():i).to(t=>e(s).call(s,r,t))})})})}}}))}function bn(e){const t="string"==typeof e?n(T(e)):t=>{const n=e(t);return"string"==typeof n?T(n):n};return Y({define(e){e.whenComponent(e=>{const n=e.get(Je);G({group:n.up().keepThru_(e=>e?O(e.get(fn)):u({}),({control:e})=>e&&e.aspect(me)),control:n.get(fn),name:t(e)}).consume(({group:[e],control:[{control:t}],name:[n]})=>{if(null!=n&&e&&t&&e!==t)return e.controls.set(n,t)})})}})}function yn(e){const{select:t="input",pick:n={deep:!0,all:!0}}=e;return Y({define(r){r.whenComponent(r=>{const s=r.get(ct);r.whenConnected(()=>{G({node:s.select(t,n).first(),aspects:r.get(dn)}).keepThru(({node:[t],aspects:[n]})=>{if(!t)return i();const s=e.makeControl({node:t,context:r,aspects:n});return s?s instanceof ge?i(s):O(s):i()}).consume((e,t)=>{if(!e)return;const n=pn(r,e);return(t||D(e)).needs(n),n})})})}})}export{Ft as A,gn as C,dn as D,_n as F,ze as H,fn as I,Et as N,wn as O,mt as P,bn as S,yn as U,Je as a,ct as b,mn as c,un as d,It as e,dt as f,vt as g,pn as i};//# sourceMappingURL=generic.178f9189.js.map
