import{n as e,d as t,v as n,f as r,b as s,h as o,c as i,g as a}from"../proc7ts/call-thru.e704f478.js";import{m as c,i as u,a as h,b as l,g as d,f,c as p,h as g}from"../proc7ts/a-iterable.d92124ef.js";import{b as m,C as _,a as w,c as b,F as y,d as v,e as x,S as k,f as S}from"../proc7ts/context-values.fcd8ebea.js";import{h as C,b as R,l as U,j as O,i as A,O as L,A as D,a as E,f as F,m as T,t as N,D as M,e as P,r as q,o as I,s as K,E as j,d as z,V as $,u as B,p as W,q as H,g as V}from"../proc7ts/fun-events.8bfc632f.js";import{c as J,h as G}from"../proc7ts/namespace-aliaser.b34c0889.js";import{C as Q,B as X,m as Y,h as Z,n as ee,o as te,k as ne,p as re,q as se,r as oe,a as ie,W as ae,s as ce,u as ue,v as he,w as le,d as de,x as fe,g as pe}from"./wesib.4a501e1a.js";import{l as ge,m as me,n as _e,o as we,p as be}from"../proc7ts/input-aspects.75fdf860.js";function ye({$:e,n:t,t:n,v:r,x:s=[],p:o={},pl:i=[]}){return{$:e,n:t,t:n,v:r,x:s,p:o,pl:i}}function ve({p:e,pl:t},n){const r=n.n||n.v,s=e[r];(!s||!s.n&&n.n)&&(e[r]=n),t.push(n)}const xe=()=>!1,ke=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), \d\d (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) \d\d\d\d \d\d:\d\d:\d\d GMT/;function Se({dateTime:e}){return e?Ce:xe}function Ce(e,t){return e.s=e.s.substring(e.i),e.i=0,!!ke.test(e.s)&&(t(e.s.substring(e.i,e.i+=29)),!0)}function Re({delimiterOf:e}){return t=>{const n=t.s[t.i];return t.d=e(n),n}}function Ue(e,{named:t=!0,tagged:n=!0,extra:r=!0,next:s=Re(e)}={}){const o=function({delimiterOf:e}){return(t,n)=>{if(!(262144&e(t.s[t.i])))return!1;let r="";for(++t.i;t.i<t.s.length;){const n=t.s[t.i++];if(524288&e(n))break;r+=n}return n(r),!0}}(e),i=Se(e),a=function({delimiterOf:e}){return(t,n)=>{let r="";for(++t.i;t.i<t.s.length;++t.i){const s=t.s[t.i];if("\\"===s){const e=t.s[++t.i];r+=e||s}else{if(65536&e(s))return++t.i,void n(r);r+=s}}n(r)}}(e),c=r?Ue(e,{next:s,tagged:!1,named:!1,extra:!1}):xe;return(e,r)=>{let u,h,l,d="",f="raw";for(;e.i<e.s.length;){const r=s(e);if(e.d){if(12&e.d)break;if(null==h){if(16&e.d){h=d?"":r,++e.i;continue}if(65536&e.d){!n&&d||a(e,e=>{d?(f="tagged-string",u=d):f="quoted-string",d="",h=e});break}if(!d&&o(e,e=>{f="angle-bracketed-string",h=e}))break;h=d,d=""}else{if(65536&e.d){!n&&h||a(e,e=>{h?(f="tagged-string",u=h):f="quoted-string",h=e});break}if(!h&&o(e,e=>{f="angle-bracketed-string",h=e}))break}}if(null==h){if(!d&&i(e,e=>h=e)){f="date-time";break}t?d+=r:h=r}else{if(!h&&i(e,e=>h=e)){f="date-time";break}h+=r}++e.i}if(null==h){if(!d)return!1;l=ye({$:f,v:d})}else l=ye({$:f,n:d||void 0,t:u,v:h});for(;c(e,e=>l.x.push(e)););return r(l),!0}}function Oe({delimiterOf:e}){return t=>{let n=t.s[t.i];return"\\"!==n?(t.d=e(n),n):(++t.i,t.i<t.s.length?(n=t.s[t.i],t.d=e(n)?1:0):t.d=1,n)}}function Ae({delimiterOf:e}){return t=>{const n=t.i;do{const n=t.s[t.i];if(!(2&e(n)))break;t.i++}while(t.i<t.s.length);return t.i!==n}}function Le(e,t={}){const{delimiterOf:n}=e,r=Ae(e),s=Ue(e,{...t,tagged:!1});return(e,t)=>!!(8&n(e.s[e.i]))&&(++e.i,r(e),s(e,t))}const De={" ":7,"\t":7,",":5,";":9,'"':65569,"\\":33,"<":262145,">":524289,"=":17,"(":1,")":1,"/":1,":":1,"?":1,"@":1,"[":1,"]":1,"{":1,"}":1};function Ee({delimit:e,dateTime:t}={}){const n=e?{...De,...e}:De;return{dateTime:t,delimiterOf:e=>n[e]||(e>="\0"&&e<=" "||"\x7f"===e?1:0)}}const Fe=Ee(),Te=Ee({delimit:{":":17,"(":131105,")":37," ":3,"\t":3,"=":1,",":1}});function Ne(e){const t=e?Ee(e):Fe,n=function(e){const{delimiterOf:t}=e,n=Ae(e);return e=>!!(4&t(e.s[e.i]))&&(e.i++,n(e),!0)}(t),r=Le(t),s=Ue(t),o=(null==e?void 0:e.comments)?function(e){const{delimiterOf:t}=e,n=Ae(e),r={next:Oe(e)},s=Ue(e,r),o=Le(e,r);return(e,r)=>{if(!(131072&t(e.s[e.i])))return!1;let i;for(++e.i;n(e)||o(e,e=>{i||(i=ye({$:"raw",v:""})),ve(i,e)})||s(e,e=>i=e););return++e.i,r(i||ye({$:"raw",v:""})),!0}}(Te):xe;return e=>{const t=[],i={i:0,s:e};for(;i.i<i.s.length&&(n(i)||r(i,e=>{t.length||t.push(ye({$:"raw",v:""})),ve(t[t.length-1],e)})||o(i,e=>t.push(e))||s(i,e=>t.push(e))););return t}}const Me=Ne();function Pe(e){if(!e)return'""';const{delimiterOf:t}=Fe;let n,r=!1;for(let s=0;s<e.length;++s){const o=e[s],i=t(o);i?(32&i&&(n||(n=e.substring(0,s)),n+="\\"+o),r=!0):n&&(n+=o)}return r?`"${n||e}"`:e}class qe extends v{constructor(e){super(e),this.upKey=this.createUpKey(e=>e.insert(e.seed.keepThru((...t)=>t.length?i(function(e){return(t,n)=>{const r=(n,s)=>{const o=e[n];return o?K(o((e=s)=>r(n+1,e),s)):t(s)};return r(0,n)}}(t)):e.hasFallback&&e.or?R(e.or):Ie)))}grow(e){let t;e.context.get(this.upKey,e.hasFallback?{or:null!=e.or?E(e.or):e.or}:void 0).to(e=>t=e).whenOff(e=>t=x(e)),e.insert((e,n)=>t(e,n))}}function Ie(e,t){return e(t)}const Ke=new qe("http-fetch-agent"),je={};const ze=new y("http-fetch",{byDefault:ie((function(e){const t=e.get(X),n=e.get(Ke);return(e,t)=>n(r,new Request(e,t));function r(e){return P(n=>{const r=new j;let s;if("AbortController"in t){const o=new t.AbortController,{signal:i}=o;s=C(e=>{e===je&&o.abort()}),n.supply.whenOff(()=>s.off(je)).needs(s),r.on({supply:s,receive(e,t){n.receive(e,t)}});const a=e.signal;a&&(new M(a).on("abort").once(()=>o.abort()),a.aborted&&o.abort()),e=new Request(e,{signal:i})}else s=r.on(n);t.fetch(e).then(e=>{r.send(e),s.off()}).catch(e=>s.off(e))})}}))});const $e=new w("hierarchy-root",{byDefault:e=>{const t=e.get(ce);return new M(t).on("wesib:component").to(({context:e})=>e.get(We).issue()),N()}}),Be=new w("hierarchy-updates",{byDefault:e=>new We(e.get(Z))});class We{constructor(e){const t=new j,n=e.get(ee).get($e);this.on=t.on(),this.send=()=>t.send(e),this.issue=()=>{const t=He(e);t?t[0].get(We).send():n.it=e}}static get[_](){return Be}}function He(e){const t=e.get(ee).get(ce);let{element:n}=e,r=!0;if(n!==t)for(;;){const e=n.parentNode;if(!e)return;const s=e[se];if(s)return[s,r];if(e===t)return;r=!1,n=e}}const Ve=new w("hierarchy-context",{byDefault:e=>new Ge(e.get(Z))});class Je extends m{static get[_](){return Ve}get[O](){return A(this.context)}}class Ge extends Je{constructor(n){super(),this.context=n;const r=this._parent=N();n.whenConnected(t).cuts(r);const s=this._registry=(o=this.up(),new b(t=>function(e){return"upKey"in e}(t)?o.keepThru(n=>n?R(n.get(t)):e()):void 0));var o;this.get=s.newValues().get}provide(e){const t=this._registry.provide(e);return A(this).whenOff(t),t}up(e){return(this.up=T(e=>{const{supply:t}=e;t.needs(this);const n=N();n.by(this._parent),t.cuts(n);const r=C().needs(t),s=C().needs(t),o=()=>{const e=He(this.context);if(e){const[t,o]=e;n.it=t.get(Je),r.off(),o&&s.off()}else n.it=void 0};this.context.get(ee).get($e).read({supply:r,receive:()=>this.context.connected&&o()}),n.read().tillOff(s).consume(e=>e&&e.context.get(We).on.to(o)),n.read(e),this.context.whenConnected({supply:C().needs(t),receive:o})}).share().F)(e)}inside(e){return this._parent.it=e&&e.get(Je),this}}class Qe{[L](){return this.onUpdate()}[D](){return this.read()}}const Xe={subtree:!0};function Ye(e,t,n,s,{deep:o,all:f}){const p=new j,m=o?Xe:void 0;let _,w,b=new Set;const y=o?Ze:h;"string"==typeof n?w=n:e.whenDefined(n).then(({elementDef:{name:t}})=>{if(_=void 0,t&&(w=G.name(t,e.get(ne)),p.size)){const e=x();if(e.size){const t=Array.from(l(c(e,e=>s(e)),r));t.length&&p.send(t,[])}}}).catch(console.error),f||t.addEventListener("wesib:component",e=>{const t=e.target;if(b.has(t)){const e=s(t);p.send([e],[])}});class v extends Qe{onUpdate(n){const r=e.get(he)(k);return(this.onUpdate=P(e=>{const n=!p.size,s=p.on(e);return n&&(x(),r.observe(t,m)),s.whenOff(()=>{p.size||(r.disconnect(),_=void 0,b.clear())})}).F)(n)}read(e){return(this.read=z(this.onUpdate().thru(()=>this),a(this)).F)(e)}track(e){const t=this.onUpdate();return(this.track=T(e=>{const n=new j;n.on(e),n.send(Array.from(this),[]),t.to(e)}).F)(e)}first(e){return(this.first=F(this.read()).keepThru(e=>i(g(e))).F)(e)}[Symbol.iterator](){return d(_||(_=l(c(p.size?b:x(),e=>s(e)),r)))}}return new v;function x(){_=void 0;const e=function(){const e=w;if(!e)return new Set;if(o)return new Set(h(t.querySelectorAll(e)));return new Set(l(h(t.children),t=>t.matches(e)))}();return p.size&&(b=e),e}function k(e){const t=[],n=[];e.forEach(e=>{u(l(c(y(e.removedNodes),C),r),e=>n.push(e)),u(l(c(y(e.addedNodes),S),r),e=>t.push(e))}),(t.length||n.length)&&p.send(t,n)}function S(e){if(ue(e))return w&&e.matches(w)&&!b.has(e)?(b.add(e),s(e)):void 0}function C(e){if(ue(e)&&b.delete(e))return s(e,!0)}}function Ze(e){return f(h(e),e=>[e,...Ze(e.childNodes)])}class et{constructor(e,t){this._bs=e,this.element=t,this._emitters=new Map}get observer(){if(this._observer)return this._observer;const e=this._bs.get(X).MutationObserver;return this._observer=new e(e=>this._update(e))}observe(e,t){const n=this,r=this.observer,s=this._emitter(e),o=q(t),i=s.on({supply:C(()=>{this._emitters.delete(e),r.disconnect(),this._emitters.size?a():this._observer=void 0}).needs(o.supply),receive:(e,t,n)=>o.receive(e,t,n)});return r.disconnect(),a(),i;function a(){n._update(r.takeRecords()),r.observe(n.element,{attributes:!0,attributeOldValue:!0,attributeFilter:Array.from(n._emitters.keys())})}}_update(e){e.forEach(e=>{const t=e.attributeName,n=this._emitters.get(t);n&&n.send(this.element.getAttribute(t),e.oldValue)})}_emitter(e){const t=new j;return this._emitters.set(e,t),t}}class tt extends ${constructor(e,t){super(),this._observer=e,this._name=t,this._updates=new j}get[O](){return A(this._updates)}get it(){return this._observer.element.getAttribute(this._name)}set it(e){null!=e?this._observer.element.setAttribute(this._name,e):this._observer.element.removeAttribute(this._name)}on(e){let t=W();return(this.on=P(e=>{this._updates.size||(t=this._observer.observe(this._name,(e,t)=>this._updates.send(e,t))),e.supply.needs(t),this._updates.on(e).whenOff(e=>{this._updates.size||t.off(e)})}).F)(e)}}class nt{constructor(e,t){this._attrs=new Map,this._observer=new et(e,t)}get(e){const t=this._attrs.get(e);if(t)return t;const n=new tt(this._observer,e);return this._attrs.set(e,n),n}}class rt extends ${constructor(e,t){super(),this._element=e,this._key=t,this._updates=new j}get[O](){return A(this._updates)}get it(){return this._element[this._key]}set it(e){this._element[this._key]=e}on(e){return(this.on=this._updates.on().F)(e)}bind(e){e.get(le).track(de(this._key)).onUpdate().to({supply:A(this),receive:(e,t,n,r)=>this._updates.send(n,r)})}}class st{constructor(e){this._element=e,this._props=new Map}bind(e){this._context=e,this._props.forEach(t=>t.bind(e))}get(e){const t=this._props.get(e);if(t)return t;const n=new rt(this._element,e);return this._context&&n.bind(this._context),this._props.set(e,n),n}}const ot=Symbol("element-node");class it{constructor(e,t){this._bs=e,this.element=t,this._attrs=new nt(e,t),this._props=new st(t),t[ot]=this;const n=t[se];n?this._bind(n):t.addEventListener("wesib:component",e=>this._bind(e.context))}get context(){return this.element[se]}get parent(){const e=this.element.parentNode;return e&&at(this._bs,e)}select(e,t){return function(e,t,n,r={}){if(r.all)return Ye(e,t,n,(t,n)=>at(e,t,n),r);const s=e.get(oe);return Ye(e,t,n,(t,n)=>s(t)&&at(e,t,n),r)}(this._bs,this.element,e,t)}attribute(e){return this._attrs.get(e)}property(e){return this._props.get(e)}_bind(e){this._props.bind(e)}}function at(e,t,n){const r=t[ot];return r||n?r:new it(e,t)}const ct=new w("component-node",{byDefault:e=>at(e.get(ee),e.get(Z).element)});function ut(e){return new URL(e.hash.substring(1),e.origin)}function ht(e,t){if(t.origin!==e.origin||t.username)return new URL("#"+t,e);const{pathname:n,search:r,hash:s}=t,o=new URL("",e);return o.hash=r||s||n.length>1?n+r+s:r+s,o}const lt=Symbol("page-param");class dt{get[lt](){return this}byDefault(e,t){}}class ft extends dt{create(e,t){let n;const r={get:()=>n,put(t){n="string"==typeof t?new URL(t,e.url.origin):t}};return r.put(t),r}}const pt=new ft;class gt extends dt{create(e,t){const n={get:()=>e.get(pt)||ut(e.url),put(t){e.put(pt,t)}};return n.put(t),n}byDefault(e){return this.create(e,null)}}const mt=new gt;class _t extends v{constructor(e){super(e),this.upKey=this.createUpKey(e=>{const{document:t}=e.context.get(X);e.insert(e.seed.keepThru((...n)=>n.length?function(e,r,s,o){return function o(i,a){const c=n[i];if(!c)return e(a);c(({url:e=a.url,title:n=a.title,data:r=a.data}=a)=>o(i+1,{url:new URL(String(e),t.baseURI),title:n,data:r,get visited(){return a.visited},get current(){return a.current},get:e=>a.get(e),put(e,t){a.put(e,t)}}),r,s,a)}(0,o)}:e.hasFallback&&e.or?R(e.or):wt))})}grow(e){let t;e.context.get(this.upKey,e.hasFallback?{or:null!=e.or?E(e.or):e.or}:void 0).to(e=>t=e).whenOff(e=>t=x(e)),e.insert((e,n,r,s)=>t(e,n,r,s))}}function wt(e,t,n,r){e(r)}const bt=new _t("navigation-agent"),yt={setup(e){e.provide({a:bt,is:xt})}};class vt{static get[te](){return yt}}function xt(e,t,n,r){const s=r.get(pt);s?e({url:ht(r.url,s)}):e()}class kt extends m{}const St=new w("nav-history",{byDefault:ie(e=>new Rt(e))});function Ct(e){return null==e||"object"!=typeof e?{data:e}:e["wesib:navigation:data"]}class Rt{constructor(e){this._context=e,this._entries=new Map,this._lastId=0;const t=e.get(X);this._document=t.document,this._location=t.location,this._history=t.history,this._uid=btoa(String(Math.random()))}static get[_](){return St}init(){const{data:e}=Ct(this._history.state),t=this.newEntry({url:new URL(this._location.href),data:e,title:this._document.title});return this._entries.set(t.id,t),t.schedule(()=>{t.enter("init"),this._history.replaceState(this._historyState(t),"")}),t}newEntry(e){return new Ut(this._context,++this._lastId,e)}open(e,t){const{page:{title:n="",url:r}}=e;this._history.pushState(this._historyState(e),n,r.href),this._enter("open",e,t)}_enter(e,t,n){const r=n.it;this._entries.set(t.id,t);try{for(let e=r.next;e;e=e.next)this._forget(e)}finally{t.prev=r,r.next=t,t.schedule(()=>{try{r.leave()}finally{t.enter(e)}}),n.it=t}}replace(e,t){const n=t.it,{page:{title:r="",url:s}}=e;this._history.replaceState(this._historyState(e),r,s.href),this._entries.set(e.id,e);const o=n.prev;o&&(e.prev=o,o.next=e),e.schedule(()=>{try{n.leave()}finally{try{this._forget(n)}finally{e.enter("replace")}}}),t.it=e}popState(e,t){const{state:n}=e;if(null==n)return null==this._history.state?this._changeHash(t):void 0;const r=t.it,{uid:s,data:o,id:i}=Ct(n);let a;const c=s===this._uid&&null!=i?this._entries.get(i):void 0;return c?a=c:(a=this.newEntry({url:new URL(this._location.href),data:o,title:this._document.title}),r.transfer(a,"return"),this._entries.set(a.id,a),this._history.replaceState(this._historyState(a),"")),a.schedule(()=>{try{r.leave()}finally{a.enter("return")}}),t.it=a,a}hashChange(e){if(null==this._history.state)return this._changeHash(e)}update(e,t){const n=e.it,r=new Ut(this._context,++this._lastId,{...n.page,url:t},n);return this._entries.set(r.id,r),this._history.replaceState(this._historyState(r),"",t.href),this._entries.delete(n.id),e.it=r}_changeHash(e){const t=e.it,n=this.newEntry({url:new URL(this._location.href),data:null,title:this._document.title});try{t.transfer(n,"enter")}finally{this._history.replaceState(this._historyState(n),""),this._enter("enter",n,e)}return n}_forget(e){this._entries.delete(e.id),e.forget()}_historyState({id:e,page:{data:t}}){return{"wesib:navigation:data":{uid:this._uid,id:e,data:t}}}}class Ut{constructor(e,n,r,s){this._bsContext=e,this.id=n,this._status=0,this._update=t,this._params=s?s._params:new Map;const o=this;this.page={get url(){return r.url},get title(){return r.title},get data(){return r.data},get visited(){return!!o._status},get current(){return 2===o._status},get:e=>o.get(e),put(e,t){o.put(e,t)}}}get(e){const t=e[lt],n=this._params.get(t);if(n)return n.get();const r=t.byDefault(this.page,this._newContext());return r&&this._init(t,r)}put(e,t){const n=e[lt],r=this._params.get(n);return r?(r.put(t),r.get()):this._init(n,n.create(this.page,t,this._newContext()))}_newContext(){const e=new b(this._bsContext);return new class extends kt{constructor(){super(...arguments),this.get=e.newValues().get}}}_init(e,t){return this._params.set(e,t),this.page.current&&t.enter&&t.enter(this.page,"init"),t.get()}transfer(e,t){u(this._params.entries(),([n,r])=>{if(r.transfer){const s=r.transfer(e.page,t);s&&e._params.set(n,s)}})}stay(e){u(this._params.values(),t=>t.stay&&t.stay(e))}enter(e){this._status=2,u(this._params.values(),t=>t.enter&&t.enter(this.page,e))}leave(){this._status=1,u(this._params.values(),e=>e.leave&&e.leave())}forget(){u(this._params.values(),e=>e.forget&&e.forget()),this._params.clear()}schedule(e){this._update=e}apply(){const e=this._update;this._update=t,e()}}class Ot extends Event{constructor(e,t){super(e,{...t,cancelable:!1}),this.when=t.when,this.to=t.to}}class At extends Event{constructor(e,t){super(e,{...t,cancelable:!0}),this.when=t.when,this.from=t.from,this.to=t.to}}class Lt extends Event{constructor(e,t){super(e,{...t,cancelable:!0}),this.from=t.from,this.to=t.to,this.reason=t.reason}get when(){return"stay"}}const Dt=new w("navigation",{byDefault:ie((function(e){const n=e.get(X),{document:r,history:s}=n,o=new M(n),i=e.get(Rt),a=e.get(bt),c=N(i.init());c.read(e=>e.apply());let u=Promise.resolve();o.on("popstate").to(e=>{const t=i.popState(e,c);t&&o.dispatch(new Ot("wesib:enterPage",{when:null!=e.state?"return":"enter",to:t.page}))}),o.on("hashchange").to(()=>{const e=i.hashChange(c);e&&o.dispatch(new Ot("wesib:enterPage",{when:"enter",to:e.page}))});return new class extends Et{get page(){return c.it.page}get length(){return s.length}onEnter(e){return(this.onEnter=o.on("wesib:enterPage").F)(e)}onLeave(e){return(this.onLeave=o.on("wesib:leavePage").F)(e)}onStay(e){return(this.onStay=o.on("wesib:stayOnPage").F)(e)}on(e){return(this.on=B(this.onEnter(),this.onLeave(),this.onStay()).F)(e)}read(e){return(this.read=c.read().keepThru(e=>e.page).F)(e)}go(e){s.go(e)}open(e){return d("pre-open","open",e)}replace(e){return d("pre-replace","replace",e)}update(e){return i.update(c,h(e)).page}with(e,t){return function e(t){return{with:(n,r)=>e(fe(t,e=>e.put(n,r))),open:e=>d("pre-open","open",e,t),replace:e=>d("pre-replace","replace",e,t),pretend(e,n=((e,t)=>t)){let r;"function"==typeof e?(n=e,r=void 0):r=e;const s=l(r),o=c.it,i=f("pretend",o,s,t);try{return p("pretend",o,s,i)?n(o.page,i.page):void 0}finally{i.stay(c.it.page)}}}}(n=>n.put(e,t))}};function h(e){return"string"==typeof e?new URL(e,r.baseURI):e||c.it.page.url}function l(e){return null==e||"string"==typeof e||e instanceof URL?{url:h(e)}:e.url instanceof URL?e:{...e,url:h(e.url)}}function d(e,n,r,s=t){const a=l(r),h=u=u.then(d,d);return h;function d(){let t=void 0;try{const r=function(){if(u!==h)return g();const t=c.it,n=f(e,t,a,s),r=new At("wesib:leavePage",{when:e,from:t.page,to:n.page});if(!o.dispatch(r)||u!==h||!p(e,t,a,n))return g(n);return n}();return r?(t=r,i[n](t,c),o.dispatch(new Ot("wesib:enterPage",{when:n,to:t.page})),t.page):r}catch(e){throw g(t,e),e}}function g(e,t){return e&&e.stay(c.it.page),o.dispatch(new Lt("wesib:stayOnPage",{from:c.it.page,to:a,reason:t})),null}}function f(e,t,n,r){const s=i.newEntry(n);try{t.transfer(s,e),r(s.page)}catch(e){throw s.stay(c.it.page),e}return s}function p(e,t,n,r){let s=!1;return a(({url:e,data:t,title:r})=>{s=!0,n.url=e,n.data=t,n.title=r},e,t.page,r.page),s}}))});class Et{static get[_](){return Dt}[L](){return this.on()}[D](){return this.read()}back(){this.go(-1)}forward(){this.go(1)}reload(){this.go()}}function Ft(n={}){const{select:r="a",pick:s={all:!0,deep:!0}}=n;return Q({define(o){o.whenComponent(o=>{const i=function(e,n){const r=e.get(Y),{render:s,active:o=qt}=n,i=J.name(o,e.get(ne)),a=n.activate?n.activate.bind(n):t;return e=>{const{element:t}=e.node,n=t[Pt]||(t[Pt]=r(s)),o=t=>{n(()=>((e,{node:t})=>{const{element:n}=t,{classList:r}=n;e?r.add(i):r.remove(i)})(t,e)),a(t,e)};let c;return o(!0),{supply(){const e=c=C(()=>{c===e&&o(!1)});return e}}}}(o,n),a=function(t){if(!t.weigh)return Tt;return n=>{const r=t.weigh(n);if("number"==typeof r)return E(n.node,r);let s=F(r).keepThru_(t=>e(n.node,t));return T(e=>{s.to({supply:C().needs(e.supply).whenOff(()=>{s=E(n.node,0),s.to(e)}),receive:e.receive.bind(e)})})}}(n),u=o.get(Et),h=o.get(ct);o.whenConnected(()=>{let e=new Map;u.read().tillOff(o).consume(t=>h.select(r,s).read().keepThru_(e=>R(U(...c(e,e=>a({node:e,context:o,page:t}))))).consume((...n)=>{const r=function(e){let t=0,n=[];return e.forEach(([e,r])=>{r>t?(t=r,n=[e]):r===t&&n.push(e)}),n}(n),s=new Map,a=C();return r.forEach(n=>{let r;const c=e.get(n);c?(s.set(n,c),r=c):(r=i({node:n,context:o,page:t}),s.set(n,r)),r.supply().needs(a)}),e=s,a}))})})}})}function Tt({node:e,page:t}){const{element:n}=e,r=n.getAttribute("href");if(null==r)return E(e,-1);const s=new URL(r,n.ownerDocument.baseURI);return E(e,function e(t,n){if(t.origin!==n.origin)return-1;const r=Nt(t),s=Nt(n);if(t.hash){if(r!==s)return-1;const o=Mt(t,n);return o<0||Mt(n,t)<0?-1:t.pathname.length+o+e(ut(t),ut(n))}const o=Mt(t,n);if(o)return o<0||r!==s?-1:t.pathname.length+o;if(!s.startsWith(r))return-1;return t.pathname.length}(s,t.url))}function Nt(e){const t=e.pathname;return t.endsWith("/")?t:t+"/"}function Mt({searchParams:e},{searchParams:t}){let n=0;return e.forEach((r,s)=>{if(!function(e){return e.startsWith("__")&&e.endsWith("__")}(s)){const r=new Set(t.getAll(s));n>=0&&(e.getAll(s).every(e=>r.has(e))?n+=1:n=-1)}}),n}const Pt=Symbol("nav-link-render-schedule"),qt=["active",ae];function It(e={}){const t=e.handle?e.handle.bind(e):function(e){const t=e.href?e.href.bind(e):Kt;return({event:e,page:n,navigation:r})=>{const s=t(e);if(null==s)return;const o=e.target,i=n.url,a=new URL(s,o.ownerDocument.baseURI);a.origin===i.origin&&(e.preventDefault(),i.href!==a.href&&r.open(s).catch(console.error))}}(e),n=new re(e.event||"click");return Q({define(e){e.whenComponent(e=>{e.whenConnected(()=>{const r=e.get(Et);for(const s of n)e.on(s).to(n=>{r.read().once(s=>t({event:n,page:s,context:e,navigation:r}))})})})}})}function Kt(e){return e.target.getAttribute("href")}function jt(e,t,n,r=zt){let s;"function"==typeof n?(r=n,s=null):s=n||null;const o=t.ownerDocument;if(ue(e)){const n=o.createElement(e.tagName.toLowerCase());return e.getAttributeNames().forEach(t=>n.setAttribute(t,e.getAttribute(t))),r(e,n),t.insertBefore(n,s),n}const i=o.importNode(e,!1);return t.insertBefore(i,s),i}function zt(e,t){u(h(e.childNodes),e=>jt(e,t))}function $t(t){let n;return r=>{const o=function(e){return new URL("",e.url).href}(r);if(n){if(n.url===o)return n.on;n.sup.off()}let i;const a=C().whenOff(()=>{n=void 0,i=void 0}),c=P(n=>{if(!i){const n=t(r),o=N(),c=n.to(e=>{o.it=e}).whenOff(e=>{null!=e&&a.off(e)});a.cuts(c).cuts(o),i={on:o.read().thru_(t=>t?e(t):s()),num:0}}const o=i;return++o.num,o.on.tillOff(a).to(n).whenOff(e=>{--o.num||Promise.resolve().then(()=>{o.num||o!==i||a.off(e)}).catch(console.error)})});return n={url:o,on:c,sup:a},c}}class Bt extends Error{}const Wt=new class extends dt{create(e,n){return{get:()=>n,put:t}}};class Ht{constructor(e,t){this._navigation=e,this._loader=t,this._map=new Map}get fragments(){const e=[];for(const t of this){if(!t.fragment)return[];e.push(t.fragment)}return e}[Symbol.iterator](){return d(f(this._map.values()))}handle(){const e=this,t=C();let n=W();return{get(){},put(t){e._add(t)},transfer(t,n){if("pretend"===n)return;const r=e._transfer();return t.put(Wt,r),r.handle()},enter(r,s){if("init"===s)return;n=C().needs(t);const o=P(t=>{const s=new j,o=s.on(t);return e._loader(r).tillOff(n).to(e=>s.send(e)).whenOff(e=>{void 0===e||e instanceof Bt||s.send({ok:!1,page:r,error:e})}),o}).share();u(e,({fragment:e,receiver:t})=>function(e,t){return t?e.thru_(e=>e.ok?{...e,fragment:(null!=t.tag?e.document.getElementsByTagName(t.tag)[0]:e.document.getElementById(t.id))||void 0}:e):e}(o,e).to({supply:C().needs(t.supply),receive(e,n){t.receive(e,n)}}))},leave(){n.off(new Bt("page left"))},stay(){t.off(new Bt("navigation cancelled"))},forget(){t.off(new Bt("page forgotten"))}}}_add(e){const t={...e,receiver:q(e.receiver)},{supply:n}=t.receiver,r=this._map.get(n);r?r.push(t):(this._map.set(n,[t]),n.whenOff(()=>this._map.delete(n)))}_transfer(){const e=new Ht(this._navigation,this._loader);for(const[t,n]of this._map.entries())e._map.set(t,Array.from(n));return e}}const Vt=new qe("page-load-agent"),Jt=new y("page-load-url",{byDefault:n(t)}),Gt=new w("page-loader",{byDefault:ie((function(e){const t=e.get(X),n=e.get(ze),r=e.get(Jt),s=e.get(Vt),i=new t.DOMParser;return e=>{const t=new URL(e.url.href);r(t);const a=new Request(t.href,{mode:"same-origin",credentials:"same-origin",headers:new Headers({Accept:"text/html"})});return P(e=>s(c,a).to(e));function c(r){return function(e,t){var n;const r=null===(n=e.get(Wt))||void 0===n?void 0:n.fragments;r&&r.length&&t.headers.set("Accept-Fragment",p(r,(e,t)=>(e?e+", ":"")+(null!=t.tag?"tag="+Pe(t.tag):"id="+Pe(t.id)),""))}(e,r),P(s=>{const a=new H;a.on(s),a.send({page:e}),I(n(r).thru_(e=>Promise.all([e,e.text()]))).thru_((...e)=>o(e),([n,r])=>{if(!n.ok)return{ok:!1,page:e,response:n,error:n.status};try{return{ok:!0,page:e,response:n,document:Qt(i,t,n,r)}}catch(t){return{ok:!1,page:e,response:n,error:t}}}).to(s)})}}}))});function Qt(e,t,n,r){const s=e.parseFromString(r,Me(n.headers.get("Content-Type")||"text/html")[0].v);if(s.head){const e=s.head.querySelector("base");if(e)e.href=new URL(e.getAttribute("href"),t).href;else{const e=s.createElement("base");e.href=t.href,s.head.appendChild(e)}}return s}class Xt extends dt{create(e,t,n){const r=new Ht(n.get(Et),$t(n.get(Gt))),s=r.handle();return e.put(Wt,r),s.put(t),s}}const Yt=new Xt,Zt=new w("page-cache-buster",{byDefault:ie(e=>new en(e))});class en{constructor(e){const t=tn(e.get(X).document);if(t){const n=e.get(Et);this.urlModifier=E(e=>e.searchParams.set("__wesib_app_rev__",t)),this.agent=E((e,r)=>e(new Request(r.url,r)).thru_(e=>{if(e.ok){const r=tn(e.document);if(r&&r!==t){const t=new URL(e.page.url.href);t.searchParams.set("__wesib_app_rev__",r),n.update(t),n.reload()}}return e}))}else this.urlModifier=E(),this.agent=E()}static get[_](){return Zt}}function tn(e){var t;return null===(t=e.querySelector("meta[name=wesib-app-rev]"))||void 0===t?void 0:t.getAttribute("content")}function nn(e){const t=e.get(X).document;return e=>e().thru_(e=>{if(e.ok){const n=new Set(c(rn(t,h(t.scripts)),([e])=>e));u(l(rn(e.document,h(e.document.querySelectorAll("script"))),([e])=>!n.has(e)),([e,r])=>{jt(r,t.head,(t,n)=>n.src=e),n.add(e)})}return e})}function rn(e,t){return c(l(t,e=>!!e.src),t=>[new URL(t.src,e.baseURI).href,t])}function sn(e){const t=e.get(X).document;return e=>e().thru_(e=>{if(!e.ok)return e;const n=e.document.querySelectorAll("link[rel=stylesheet]");if(!n.length)return e;let r=t.head,s=null;const o=t.querySelectorAll("link[rel=stylesheet]"),i=new Map,a=o.item(0);return a&&(r=a.parentNode,s=a,u(h(o),e=>i.set(new URL(e.href,t.baseURI).href,e))),u(h(n),e=>{const n=new URL(e.href,t.baseURI).href,o=i.get(n);o?(g(i.keys())===n?(r=o.parentNode,s=o.nextSibling):r.insertBefore(o,s),i.delete(n)):jt(e,r,s,(e,t)=>t.href=n)}),u(i.values(),e=>e.parentNode.removeChild(e)),e})}function on(e){const t=e.get(X).document;return e=>e().thru_(e=>{if(e.ok){const n=e.document.getElementsByTagName("title").item(0);n&&n.textContent&&(t.title=n.textContent)}return e})}const an={setup(e){e.provide({a:Jt,by:e=>e.urlModifier,with:[en]}),e.provide({a:Vt,by:e=>e.agent,with:[en]}),e.provide({a:Vt,by:nn}),e.provide({a:Vt,by:sn}),e.provide({a:Vt,by:on})}};class cn{static get[te](){return an}}function un(e={}){const r=e.onResponse?e.onResponse.bind(e):t,s=e.contentKey?e.contentKey.bind(e):hn;return Q({feature:{needs:[cn]},define(t){t.whenComponent(t=>{const{fragment:o,render:i}=e,a=t.get(X).document,c=t.get(Y)(i),u=t.get(Et);let h,l=s(u.page);h=o?n(o):()=>{const{element:{id:e,tagName:n}}=t;return e?{id:e}:{tag:n}},t.whenConnected(()=>{const e=a.createRange();e.selectNodeContents(t.contentRoot),u.read().once(n=>{n.put(Yt,{fragment:h(),receiver:{supply:C().needs(t),receive:(n,o)=>function(n){const o=s(n.page);if(o===l)return;if(!n.ok)return void c(()=>r({context:t,range:e,response:n}));l=o,c(()=>{e.deleteContents();const s=a.createDocumentFragment(),{fragment:o}=n;o&&(zt(o,s),e.insertNode(s)),r({context:t,range:e,response:n})})}(o)}})})})})}})}function hn({url:e}){return new URL("",e).href}class ln extends v{get upKey(){return this}constructor(){super("default-in-aspects")}grow(e){const t=e.context.get(ne),n=e.context.get(Y);e.insert(e.seed.keepThru((...e)=>_e(...e,be.to(n),we.to(t))).tillOff(e.context.get(S)))}}const dn=new ln,fn=new k("input-from-control",{byDefault:()=>({})});function pn(e,t){const n=e.get(Je).provide({a:fn,by:()=>({root:e,control:t})});return C(n).needs(e).needs(t)}function gn(t){return Q({define(n){n.whenComponent(n=>{const{up:r}=n.get(Je);V({parent:r().keepThru_(e=>e?R(e.get(fn)):i({})),aspects:n.get(dn)}).keepThru_(({parent:[r],aspects:[s]})=>{if(r.control){const o=t({control:r,context:n,aspects:s});if(o)return o instanceof ge?e(o):R(o)}return e()}).consume((e,t)=>{if(!e)return;const r=pn(n,e);return(t||A(e)).needs(r),r})})}})}const mn=new k("input-to-form",{byDefault:()=>({})});function _n(t){const{select:n="form",pick:r={deep:!0,all:!0}}=t;return Q({define(s){s.whenComponent(s=>{const o=s.get(ct);s.whenConnected(()=>{V({node:o.select(n,r).first(),aspects:s.get(dn)}).keepThru(({node:[n],aspects:[r]})=>{if(!n)return e();const o=t.makeForm({node:n,context:s,aspects:r});return o?Array.isArray(o)?e(...o):R(o):e()}).consume((e,t,n)=>{if(!e)return;const r=function(e,t,n){const r=e.get(Je),s=r.provide({a:mn,by:()=>({root:e,control:t,form:n})});return r.provide({a:fn,via:mn}),C(s).needs(e).needs(t).needs(n)}(s,e,t);return n?n.needs(r):r.cuts(t).cuts(e),r})})})}})}function wn(e={}){const{cancel:t=!0}=e;return pe(({get:e})=>({componentDef:{define(n){n.whenComponent(n=>{n.whenConnected(()=>{const r=n.get(Je),{component:s}=n;r.get(mn).consume(r=>{if(!r.control)return;const o=new M(r.form.element);A(o).needs(n);const i=o.on("submit");return(t?i.instead():i).to(t=>e(s).call(s,r,t))})})})}}}))}function bn(e){const t="string"==typeof e?n(E(e)):t=>{const n=e(t);return"string"==typeof n?E(n):n};return Q({define(e){e.whenComponent(e=>{const n=e.get(Je);V({group:n.up().keepThru_(e=>e?R(e.get(fn)):i({}),({control:e})=>e&&e.aspect(me)),control:n.get(fn),name:t(e)}).consume(({group:[e],control:[{control:t}],name:[n]})=>{if(null!=n&&e&&t&&e!==t)return e.controls.set(n,t)})})}})}function yn(t){const{select:n="input",pick:r={deep:!0,all:!0}}=t;return Q({define(s){s.whenComponent(s=>{const o=s.get(ct);s.whenConnected(()=>{V({node:o.select(n,r).first(),aspects:s.get(dn)}).keepThru(({node:[n],aspects:[r]})=>{if(!n)return e();const o=t.makeControl({node:n,context:s,aspects:r});return o?o instanceof ge?e(o):R(o):e()}).consume((e,t)=>{if(!e)return;const n=pn(s,e);return(t||A(e)).needs(n),n})})})}})}export{Ft as A,gn as C,dn as D,_n as F,ze as H,fn as I,Et as N,wn as O,mt as P,bn as S,yn as U,Je as a,ct as b,mn as c,un as d,It as e,dt as f,vt as g,pn as i};//# sourceMappingURL=generic.d0f646b2.js.map
