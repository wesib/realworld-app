import{n as e,s as t,v as n,i as r,b as s,m as o}from"../proc7ts/primitives.90941b78.js";import{m as i,i as a,a as c,d as u,f as h,n as l,h as d,j as p,p as f,P as g,g as m,k as _,l as w}from"../proc7ts/push-iterator.e3c0f3f1.js";import{b,C as y,a as v,c as x,F as k,d as S,e as C,S as R,f as U}from"../proc7ts/context-values.de0fa082.js";import{n as O,a as L,d as D,b as E}from"../proc7ts/call-thru.104a1934.js";import{h as A,b as F,l as T,j as N,i as M,O as P,A as q,a as I,f as j,m as K,t as $,D as z,e as B,r as W,o as H,s as V,E as J,d as G,V as Q,u as X,p as Y,q as Z,g as ee}from"../proc7ts/fun-events.751f4123.js";import{c as te,h as ne}from"../proc7ts/namespace-aliaser.16afa07c.js";import{C as re,B as se,m as oe,e as ie,n as ae,o as ce,l as ue,p as he,q as le,a as de,W as pe,r as fe,s as ge,u as me,v as _e,k as we,d as be}from"./wesib.7b25387e.js";import{l as ye,m as ve,n as xe,o as ke,p as Se}from"../proc7ts/input-aspects.9c95a66e.js";function Ce({$:e="raw",n:t,t:n,v:r,x:s=[],p:o={},pl:i=[]}){return t&&(o[t]={$:e,n:t,v:r,x:[],p:{},pl:[]}),{$:e,n:t,t:n,v:r,x:s,p:o,pl:i}}function Re({p:e,pl:t},n){const r=n.n||n.v,s=e[r];(!s||!s.n&&n.n)&&(e[r]=n),t.push(n)}const Ue=()=>!1,Oe=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), \d\d (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) \d\d\d\d \d\d:\d\d:\d\d GMT/;function Le({dateTime:e}){return e?De:Ue}function De(e,t){return e.s=e.s.substring(e.i),e.i=0,!!Oe.test(e.s)&&(t(e.s.substring(e.i,e.i+=29)),!0)}function Ee({delimiterOf:e}){return t=>{const n=t.s[t.i];return t.d=e(n),n}}function Ae(e,{named:t=!0,tagged:n=!0,extra:r=!0,next:s=Ee(e)}={}){const o=function({delimiterOf:e}){return(t,n)=>{if(!(262144&e(t.s[t.i])))return!1;let r="";for(++t.i;t.i<t.s.length;){const n=t.s[t.i++];if(524288&e(n))break;r+=n}return n(r),!0}}(e),i=Le(e),a=function({delimiterOf:e}){return(t,n)=>{let r="";for(++t.i;t.i<t.s.length;++t.i){const s=t.s[t.i];if("\\"===s){r+=t.s[++t.i]||s}else{if(65536&e(s))return++t.i,void n(r);r+=s}}n(r)}}(e),c=r?Ae(e,{next:s,tagged:!1,named:!1,extra:!1}):Ue;return(e,r)=>{let u,h,l,d="",p="raw";for(;e.i<e.s.length;){const r=s(e);if(e.d){if(12&e.d)break;if(null==h){if(16&e.d){h=d?"":r,++e.i;continue}if(65536&e.d){!n&&d||a(e,(e=>{d?(p="tagged-string",u=d):p="quoted-string",d="",h=e}));break}if(!d&&o(e,(e=>{p="angle-bracketed-string",h=e})))break;h=d,d=""}else{if(65536&e.d){!n&&h||a(e,(e=>{h?(p="tagged-string",u=h):p="quoted-string",h=e}));break}if(!h&&o(e,(e=>{p="angle-bracketed-string",h=e})))break}}if(null==h){if(!d&&i(e,(e=>h=e))){p="date-time";break}t?d+=r:h=r}else{if(!h&&i(e,(e=>h=e))){p="date-time";break}h+=r}++e.i}if(null==h){if(!d)return!1;l=Ce({$:p,v:d})}else l=Ce({$:p,n:d||void 0,t:u,v:h});for(;c(e,(e=>l.x.push(e))););return r(l),!0}}function Fe({delimiterOf:e}){return t=>{let n=t.s[t.i];return"\\"!==n?(t.d=e(n),n):(++t.i,t.i<t.s.length?(n=t.s[t.i],t.d=e(n)?1:0):t.d=1,n)}}function Te({delimiterOf:e}){return t=>{const n=t.i;do{const n=t.s[t.i];if(!(2&e(n)))break;t.i++}while(t.i<t.s.length);return t.i!==n}}function Ne(e,t={}){const{delimiterOf:n}=e,r=Te(e),s=Ae(e,{...t,tagged:!1});return(e,t)=>!!(8&n(e.s[e.i]))&&(++e.i,r(e),s(e,t))}const Me={" ":7,"\t":7,",":5,";":9,'"':65569,"\\":33,"<":262145,">":524289,"=":17,"(":1,")":1,"/":1,":":1,"?":1,"@":1,"[":1,"]":1,"{":1,"}":1};function Pe({delimit:e,dateTime:t}={}){const n=e?{...Me,...e}:Me;return{dateTime:t,delimiterOf:e=>n[e]||(e>="\0"&&e<=" "||"\x7f"===e?1:0)}}const qe=Pe(),Ie=Pe({delimit:{":":17,"(":131105,")":37," ":3,"\t":3,"=":1,",":1}});function je(e){const t=e?Pe(e):qe,n=function(e){const{delimiterOf:t}=e,n=Te(e);return e=>!!(4&t(e.s[e.i]))&&(e.i++,n(e),!0)}(t),r=Ne(t),s=Ae(t),o=(null==e?void 0:e.comments)?function(e){const{delimiterOf:t}=e,n=Te(e),r={next:Fe(e)},s=Ae(e,r),o=Ne(e,r);return(e,r)=>{if(!(131072&t(e.s[e.i])))return!1;let i;for(++e.i;n(e)||o(e,(e=>{i||(i=Ce({$:"raw",v:""})),Re(i,e)}))||s(e,(e=>i=e)););return++e.i,r(i||Ce({$:"raw",v:""})),!0}}(Ie):Ue;return e=>{const t=[],i={i:0,s:e};for(;i.i<i.s.length&&(n(i)||r(i,(e=>{t.length||t.push(Ce({$:"raw",v:""})),Re(t[t.length-1],e)}))||o(i,(e=>t.push(e)))||s(i,(e=>t.push(e)))););return t}}const Ke=je();function $e(e){if(!e)return'""';const{delimiterOf:t}=qe;let n,r=!1;for(let s=0;s<e.length;++s){const o=e[s],i=t(o);i?(32&i&&(n||(n=e.substring(0,s)),n+="\\"+o),r=!0):n&&(n+=o)}return r?`"${n||e}"`:e}class ze extends S{constructor(e){super(e),this.upKey=this.createUpKey((e=>e.insert(e.seed.keepThru(((...t)=>t.length?E(function(e){return(t,n)=>{const r=(n,s)=>{const o=e[n];return o?V(o(((e=s)=>r(n+1,e)),s)):t(s)};return r(0,n)}}(t)):e.hasFallback&&e.or?F(e.or):Be)))))}grow(e){let t;e.context.get(this.upKey,e.hasFallback?{or:null!=e.or?I(e.or):e.or}:void 0).to((e=>t=e)).whenOff((e=>t=C(e))),e.insert(((e,n)=>t(e,n)))}}function Be(e,t){return e(t)}const We=new ze("http-fetch-agent"),He={};const Ve=new k("http-fetch",{byDefault:de((function(e){const t=e.get(se),n=e.get(We);return(e,t)=>n(r,new Request(e,t));function r(e){return B((n=>{const r=new J;let s;if("AbortController"in t){const o=new t.AbortController,{signal:i}=o;s=A((e=>{e===He&&o.abort()})),n.supply.whenOff((()=>s.off(He))).needs(s),r.on({supply:s,receive(e,t){n.receive(e,t)}});const a=e.signal;a&&(new z(a).on("abort").once((()=>o.abort())),a.aborted&&o.abort()),e=new Request(e,{signal:i})}else s=r.on(n);t.fetch(e).then((e=>{r.send(e),s.off()})).catch((e=>s.off(e)))}))}}))});const Je=new v("hierarchy-root",{byDefault:e=>{const t=e.get(fe);return new z(t).on("wesib:component").to((({context:e})=>e.get(Qe).issue())),$()}}),Ge=new v("hierarchy-updates",{byDefault:e=>new Qe(e.get(ie))});class Qe{constructor(e){const t=new J,n=e.get(ae).get(Je);this.on=t.on(),this.send=()=>t.send(e),this.issue=()=>{const t=Xe(e);t?t[0].get(Qe).send():n.it=e}}static get[y](){return Ge}}function Xe(e){const t=e.get(ae).get(fe);let{element:n}=e,r=!0;if(n!==t)for(;;){const e=n.parentNode;if(!e)return;const s=e[he];if(s)return[s,r];if(e===t)return;r=!1,n=e}}const Ye=new v("hierarchy-context",{byDefault:e=>new et(e.get(ie))});class Ze extends b{static get[y](){return Ye}get[N](){return M(this.context)}}class et extends Ze{constructor(t){super(),this.context=t;const n=this._parent=$();t.whenConnected(e).cuts(n);const r=this._registry=(s=this.up(),new x((e=>function(e){return"upKey"in e}(e)?s.keepThru((t=>t?F(t.get(e)):O())):void 0)));var s;this.get=r.newValues().get}provide(e){const t=this._registry.provide(e);return M(this).whenOff(t),t}up(e){return(this.up=K((e=>{const{supply:t}=e;t.needs(this);const n=$();n.by(this._parent),t.cuts(n);const r=A().needs(t),s=A().needs(t),o=()=>{const e=Xe(this.context);if(e){const[t,o]=e;n.it=t.get(Ze),r.off(),o&&s.off()}else n.it=void 0};this.context.get(ae).get(Je).read({supply:r,receive:()=>this.context.connected&&o()}),n.read().tillOff(s).consume((e=>e&&e.context.get(Qe).on.to(o))),n.read(e),this.context.whenConnected({supply:A().needs(t),receive:o})})).share().F)(e)}inside(e){return this._parent.it=e&&e.get(Ze),this}}class tt{[P](){return this.onUpdate()}[q](){return this.read()}}const nt={subtree:!0};function rt(e,t,n,o,{deep:l,all:d}){const m=new J,b=l?nt:void 0;let y,v=new Set;const x=l?st:c;"string"==typeof n?y=n:e.whenDefined(n).then((({elementDef:{name:t}})=>{if(t&&(y=ne.name(t,e.get(ue)),m.size)){const e=C();if(e.size){const t=u(p(i(e,(e=>o(e))),r));t.length&&m.send(t,[])}}})).catch(console.error),d||t.addEventListener("wesib:component",(e=>{const t=e.target;if(v.has(t)){const e=o(t);m.send([e],[])}}));const k=p(i(_((function(){return w(m.size?v:C())})),(e=>o(e))),r);class S extends tt{onUpdate(n){const r=e.get(ge)(R);return(this.onUpdate=B((e=>{const n=!m.size,s=m.on(e);return n&&(C(),r.observe(t,b)),s.whenOff((()=>{m.size||(r.disconnect(),v.clear())}))})).F)(n)}read(e){return(this.read=G(this.onUpdate().thru((()=>this)),s(this)).F)(e)}track(e){const t=this.onUpdate();return(this.track=K((e=>{const n=new J;n.on(e),n.send(u(this),[]),t.to(e)})).F)(e)}first(e){return(this.first=j(this.read()).keepThru((e=>E(f(e)))).F)(e)}[Symbol.iterator](){return this[g]()}[g](e){return k[g](e)}}return new S;function C(){const e=function(){const e=y;if(!e)return new Set;if(l)return new Set(c(t.querySelectorAll(e)));return new Set(h(t.children,(t=>t.matches(e))))}();return m.size&&(v=e),e}function R(e){const t=[],n=[];e.forEach((e=>{a(p(i(x(e.removedNodes),O),r),(e=>n.push(e))),a(p(i(x(e.addedNodes),U),r),(e=>t.push(e)))})),(t.length||n.length)&&m.send(t,n)}function U(e){if(me(e))return y&&e.matches(y)&&!v.has(e)?(v.add(e),o(e)):void 0}function O(e){if(me(e)&&v.delete(e))return o(e,!0)}}function st(e){return m(e,(e=>c([e,...st(e.childNodes)])))}class ot{constructor(e,t){this._bs=e,this.element=t,this._emitters=new Map}get observer(){if(this._observer)return this._observer;const e=this._bs.get(se).MutationObserver;return this._observer=new e((e=>this._update(e)))}observe(e,t){const n=this,r=this.observer,s=this._emitter(e),o=W(t),i=s.on({supply:A((()=>{this._emitters.delete(e),r.disconnect(),this._emitters.size?a():this._observer=void 0})).needs(o.supply),receive:(e,t,n)=>o.receive(e,t,n)});return r.disconnect(),a(),i;function a(){n._update(r.takeRecords()),r.observe(n.element,{attributes:!0,attributeOldValue:!0,attributeFilter:[...n._emitters.keys()]})}}_update(e){e.forEach((e=>{const t=e.attributeName,n=this._emitters.get(t);n&&n.send(this.element.getAttribute(t),e.oldValue)}))}_emitter(e){const t=new J;return this._emitters.set(e,t),t}}class it extends Q{constructor(e,t){super(),this._observer=e,this._name=t,this._updates=new J}get[N](){return M(this._updates)}get it(){return this._observer.element.getAttribute(this._name)}set it(e){null!=e?this._observer.element.setAttribute(this._name,e):this._observer.element.removeAttribute(this._name)}on(e){let t=Y();return(this.on=B((e=>{this._updates.size||(t=this._observer.observe(this._name,((e,t)=>this._updates.send(e,t)))),e.supply.needs(t),this._updates.on(e).whenOff((e=>{this._updates.size||t.off(e)}))})).F)(e)}}class at{constructor(e,t){this._attrs=new Map,this._observer=new ot(e,t)}get(e){const t=this._attrs.get(e);if(t)return t;const n=new it(this._observer,e);return this._attrs.set(e,n),n}}class ct extends Q{constructor(e,t){super(),this._element=e,this._updates=new J,this._key=t}get[N](){return M(this._updates)}get it(){return this._element[this._key]}set it(e){this._element[this._key]=e}on(e){return(this.on=this._updates.on().F)(e)}bind(e){e.get(_e).track(we(this._key)).onUpdate().to({supply:M(this),receive:(e,t,n,r)=>this._updates.send(n,r)})}}class ut{constructor(e){this._element=e,this._props=new Map}bind(e){this._context=e,this._props.forEach((t=>t.bind(e)))}get(e){const t=this._props.get(e);if(t)return t;const n=new ct(this._element,e);return this._context&&n.bind(this._context),this._props.set(e,n),n}}const ht=Symbol("element-node");class lt{constructor(e,t){this._bs=e,this.element=t,this._attrs=new at(e,t),this._props=new ut(t),t[ht]=this;const n=t[he];n?this._bind(n):t.addEventListener("wesib:component",(e=>this._bind(e.context)))}get context(){return this.element[he]}get parent(){const e=this.element.parentNode;return e&&dt(this._bs,e)}select(e,t){return function(e,t,n,r={}){if(r.all)return rt(e,t,n,((t,n)=>dt(e,t,n)),r);const s=e.get(le);return rt(e,t,n,((t,n)=>s(t)&&dt(e,t,n)),r)}(this._bs,this.element,e,t)}attribute(e){return this._attrs.get(e)}property(e){return this._props.get(e)}_bind(e){this._props.bind(e)}}function dt(e,t,n){const r=t[ht];return r||n?r:new lt(e,t)}const pt=new v("component-node",{byDefault:e=>dt(e.get(ae),e.get(ie).element)});function ft(e){return new URL(e.hash.substring(1),e.origin)}function gt(e,t){if(t.origin!==e.origin||t.username)return new URL(`#${t}`,e);const{pathname:n,search:r,hash:s}=t,o=new URL("",e);return o.hash=r||s||n.length>1?n+r+s:r+s,o}const mt=Symbol("page-param");class _t{get[mt](){return this}byDefault(e,t){}}class wt extends _t{create(e,t){let n;const r={get:()=>n,put(t){n="string"==typeof t?new URL(t,e.url.origin):t}};return r.put(t),r}}const bt=new wt;class yt extends _t{create(e,t){const n={get:()=>e.get(bt)||ft(e.url),put(t){e.put(bt,t)}};return n.put(t),n}byDefault(e){return this.create(e,null)}}const vt=new yt;class xt extends S{constructor(e){super(e),this.upKey=this.createUpKey((e=>{const{document:t}=e.context.get(se);e.insert(e.seed.keepThru(((...n)=>n.length?function(e,r,s,o){return i(0,o);function i(o,a){const c=n[o];if(!c)return e(a);c((({url:e=a.url,title:n=a.title,data:r=a.data}=a)=>i(o+1,{url:new URL(String(e),t.baseURI),title:n,data:r,get visited(){return a.visited},get current(){return a.current},get:e=>a.get(e),put(e,t){a.put(e,t)}})),r,s,a)}}:e.hasFallback&&e.or?F(e.or):kt)))}))}grow(e){let t;e.context.get(this.upKey,e.hasFallback?{or:null!=e.or?I(e.or):e.or}:void 0).to((e=>t=e)).whenOff((e=>t=C(e))),e.insert(((e,n,r,s)=>t(e,n,r,s)))}}function kt(e,t,n,r){e(r)}const St=new xt("navigation-agent"),Ct={setup(e){e.provide({a:St,is:Ut})}};class Rt{static get[ce](){return Ct}}function Ut(e,t,n,r){const s=r.get(bt);s?e({url:gt(r.url,s)}):e()}class Ot extends b{}const Lt=new v("nav-history",{byDefault:de((e=>new Et(e)))});function Dt(e){return null==e||"object"!=typeof e?{data:e}:e["wesib:navigation:data"]}class Et{constructor(e){this._context=e,this._entries=new Map,this._lastId=0;const t=e.get(se);this._document=t.document,this._location=t.location,this._history=t.history,this._uid=btoa(String(Math.random()))}static get[y](){return Lt}init(){const{data:e}=Dt(this._history.state),t=this.newEntry({url:new URL(this._location.href),data:e,title:this._document.title});return this._entries.set(t.id,t),t.schedule((()=>{t.enter("init"),this._history.replaceState(this._historyState(t),"")})),t}newEntry(e){return new At(this._context,++this._lastId,e)}open(e,t){const{page:{title:n="",url:r}}=e;this._history.pushState(this._historyState(e),n,r.href),this._enter("open",e,t)}_enter(e,t,n){const r=n.it;this._entries.set(t.id,t);try{for(let e=r.next;e;e=e.next)this._forget(e)}finally{t.prev=r,r.next=t,t.schedule((()=>{try{r.leave()}finally{t.enter(e)}})),n.it=t}}replace(e,t){const n=t.it,{page:{title:r="",url:s}}=e;this._history.replaceState(this._historyState(e),r,s.href),this._entries.set(e.id,e);const o=n.prev;o&&(e.prev=o,o.next=e),e.schedule((()=>{try{n.leave()}finally{try{this._forget(n)}finally{e.enter("replace")}}})),t.it=e}popState(e,t){const{state:n}=e;if(null==n)return null==this._history.state?this._changeHash(t):void 0;const r=t.it,{uid:s,data:o,id:i}=Dt(n);let a;const c=s===this._uid&&null!=i?this._entries.get(i):void 0;return c?a=c:(a=this.newEntry({url:new URL(this._location.href),data:o,title:this._document.title}),r.transfer(a,"return"),this._entries.set(a.id,a),this._history.replaceState(this._historyState(a),"")),a.schedule((()=>{try{r.leave()}finally{a.enter("return")}})),t.it=a,a}hashChange(e){if(null==this._history.state)return this._changeHash(e)}update(e,t){const n=e.it,r=new At(this._context,++this._lastId,{...n.page,url:t},n);return this._entries.set(r.id,r),this._history.replaceState(this._historyState(r),"",t.href),this._entries.delete(n.id),e.it=r}_changeHash(e){const t=e.it,n=this.newEntry({url:new URL(this._location.href),data:null,title:this._document.title});try{t.transfer(n,"enter")}finally{this._history.replaceState(this._historyState(n),""),this._enter("enter",n,e)}return n}_forget(e){this._entries.delete(e.id),e.forget()}_historyState({id:e,page:{data:t}}){return{"wesib:navigation:data":{uid:this._uid,id:e,data:t}}}}class At{constructor(t,n,r,s){this._bsContext=t,this.id=n,this._status=0,this._update=e,this._params=s?s._params:new Map;const o=this;this.page={get url(){return r.url},get title(){return r.title},get data(){return r.data},get visited(){return!!o._status},get current(){return 2===o._status},get:e=>o.get(e),put(e,t){o.put(e,t)}}}get(e){const t=e[mt],n=this._params.get(t);if(n)return n.get();const r=t.byDefault(this.page,this._newContext());return r&&this._init(t,r)}put(e,t){const n=e[mt],r=this._params.get(n);return r?(r.put(t),r.get()):this._init(n,n.create(this.page,t,this._newContext()))}_newContext(){const e=new x(this._bsContext);return new class extends Ot{constructor(){super(...arguments),this.get=e.newValues().get}}}_init(e,t){return this._params.set(e,t),this.page.current&&t.enter&&t.enter(this.page,"init"),t.get()}transfer(e,t){a(this._params.entries(),(([n,r])=>{if(r.transfer){const s=r.transfer(e.page,t);s&&e._params.set(n,s)}}))}stay(e){a(this._params.values(),(t=>t.stay&&t.stay(e)))}enter(e){this._status=2,a(this._params.values(),(t=>t.enter&&t.enter(this.page,e)))}leave(){this._status=1,a(this._params.values(),(e=>e.leave&&e.leave()))}forget(){a(this._params.values(),(e=>e.forget&&e.forget())),this._params.clear()}schedule(e){this._update=e}apply(){const t=this._update;this._update=e,t()}}class Ft extends Event{constructor(e,t){super(e,{...t,cancelable:!1}),this.when=t.when,this.to=t.to}}class Tt extends Event{constructor(e,t){super(e,{...t,cancelable:!0}),this.when=t.when,this.from=t.from,this.to=t.to}}class Nt extends Event{constructor(e,t){super(e,{...t,cancelable:!0}),this.from=t.from,this.to=t.to,this.reason=t.reason}get when(){return"stay"}}const Mt=new v("navigation",{byDefault:de((function(t){const n=t.get(se),{document:r,history:s}=n,i=new z(n),a=t.get(Et),c=t.get(St),u=$(a.init());u.read((e=>e.apply()));let h=Promise.resolve();i.on("popstate").to((e=>{const t=a.popState(e,u);t&&i.dispatch(new Ft("wesib:enterPage",{when:null!=e.state?"return":"enter",to:t.page}))})),i.on("hashchange").to((()=>{const e=a.hashChange(u);e&&i.dispatch(new Ft("wesib:enterPage",{when:"enter",to:e.page}))}));return new class extends Pt{get page(){return u.it.page}get length(){return s.length}onEnter(e){return(this.onEnter=i.on("wesib:enterPage").F)(e)}onLeave(e){return(this.onLeave=i.on("wesib:leavePage").F)(e)}onStay(e){return(this.onStay=i.on("wesib:stayOnPage").F)(e)}on(e){return(this.on=X(this.onEnter(),this.onLeave(),this.onStay()).F)(e)}read(e){return(this.read=u.read().keepThru((e=>e.page)).F)(e)}go(e){s.go(e)}open(e){return f("pre-open","open",e)}replace(e){return f("pre-replace","replace",e)}update(e){return a.update(u,d(e)).page}with(e,t){return l((n=>n.put(e,t)))}};function l(e){return{with:(t,n)=>l(o(e,(e=>e.put(t,n)))),open:t=>f("pre-open","open",t,e),replace:t=>f("pre-replace","replace",t,e),pretend(t,n=((e,t)=>t)){let r;"function"==typeof t?(n=t,r=void 0):r=t;const s=p(r),o=u.it,i=g("pretend",o,s,e);try{return m("pretend",o,s,i)?n(o.page,i.page):void 0}finally{i.stay(u.it.page)}}}}function d(e){return"string"==typeof e?new URL(e,r.baseURI):e||u.it.page.url}function p(e){return null==e||"string"==typeof e||e instanceof URL?{url:d(e)}:e.url instanceof URL?e:{...e,url:d(e.url)}}function f(t,n,r,s=e){const o=p(r),c=h=h.then(l,l);return c;function l(){let e;try{const r=function(){if(h!==c)return d();const e=u.it,n=g(t,e,o,s),r=new Tt("wesib:leavePage",{when:t,from:e.page,to:n.page});if(!i.dispatch(r)||h!==c||!m(t,e,o,n))return d(n);return n}();return r?(e=r,a[n](e,u),i.dispatch(new Ft("wesib:enterPage",{when:n,to:e.page})),e.page):r}catch(t){throw d(e,t),t}}function d(e,t){return e&&e.stay(u.it.page),i.dispatch(new Nt("wesib:stayOnPage",{from:u.it.page,to:o,reason:t})),null}}function g(e,t,n,r){const s=a.newEntry(n);try{t.transfer(s,e),r(s.page)}catch(e){throw s.stay(u.it.page),e}return s}function m(e,t,n,r){let s=!1;return c((({url:e,data:t,title:r})=>{s=!0,n.url=e,n.data=t,n.title=r}),e,t.page,r.page),s}}))});class Pt{static get[y](){return Mt}[P](){return this.on()}[q](){return this.read()}back(){this.go(-1)}forward(){this.go(1)}reload(){this.go()}}function qt(t={}){const{select:n="a",pick:r={all:!0,deep:!0}}=t;return re({define(s){s.whenComponent((s=>{const o=function(t,n){const r=t.get(oe),{render:s,active:o=Bt}=n,i=te.name(o,t.get(ue)),a=n.activate?n.activate.bind(n):e,c=(e,{node:t})=>{const{element:n}=t,{classList:r}=n;e?r.add(i):r.remove(i)};return e=>{const{element:t}=e.node,n=t[zt]||(t[zt]=r(s)),o=t=>{n((()=>c(t,e))),a(t,e)};let i;return o(!0),{supply(){const e=i=A((()=>{i===e&&o(!1)}));return e}}}}(s,t),a=function(e){if(!e.weigh)return It;return t=>{const n=e.weigh(t);if("number"==typeof n)return I(t.node,n);let r=j(n).keepThru_((e=>O(t.node,e)));return K((e=>{r.to({supply:A().needs(e.supply).whenOff((()=>{r=I(t.node,0),r.to(e)})),receive:e.receive.bind(e)})}))}}(t),c=s.get(Pt),u=s.get(pt);s.whenConnected((()=>{let e=new Map;c.read().tillOff(s).consume((t=>u.select(n,r).read().keepThru_((e=>F(T(...i(e,(e=>a({node:e,context:s,page:t}))))))).consume(((...n)=>{const r=function(e){let t=0,n=[];return e.forEach((([e,r])=>{r>t?(t=r,n=[e]):r===t&&n.push(e)})),n}(n),i=new Map,a=A();return r.forEach((n=>{let r;const c=e.get(n);c?(i.set(n,c),r=c):(r=o({node:n,context:s,page:t}),i.set(n,r)),r.supply().needs(a)})),e=i,a}))))}))}))}})}function It({node:e,page:t}){const{element:n}=e,r=n.getAttribute("href");if(null==r)return I(e,-1);const s=new URL(r,n.ownerDocument.baseURI);return I(e,jt(s,t.url))}function jt(e,t){if(e.origin!==t.origin)return-1;const n=Kt(e),r=Kt(t);if(e.hash){if(n!==r)return-1;const s=$t(e,t);return s<0||$t(t,e)<0?-1:e.pathname.length+s+jt(ft(e),ft(t))}const s=$t(e,t);return s?s<0||n!==r?-1:e.pathname.length+s:r.startsWith(n)?e.pathname.length:-1}function Kt(e){const t=e.pathname;return t.endsWith("/")?t:t+"/"}function $t({searchParams:e},{searchParams:t}){let n=0;return e.forEach(((e,r)=>{(function(e){return e.startsWith("__")&&e.endsWith("__")})(r)||n>=0&&(t.getAll(r).includes(e)?n+=1:n=-1)})),n}const zt=Symbol("nav-link-render-schedule"),Bt=["active",pe];function Wt(e={}){const n=e.handle?e.handle.bind(e):function(e){const t=e.href?e.href.bind(e):Ht;return({event:e,page:n,navigation:r})=>{const s=t(e);if(null==s)return;const o=e.target,i=n.url,a=new URL(s,o.ownerDocument.baseURI);a.origin===i.origin&&(e.preventDefault(),i.href!==a.href&&r.open(s).catch(console.error))}}(e),r=t(e.event||"click");return re({define(e){e.whenComponent((e=>{e.whenConnected((()=>{const t=e.get(Pt);for(const s of r)e.on(s).to((r=>{t.read().once((s=>n({event:r,page:s,context:e,navigation:t})))}))}))}))}})}function Ht(e){return e.target.getAttribute("href")}function Vt(e,t,n,r=Jt){let s;"function"==typeof n?(r=n,s=null):s=n||null;const o=t.ownerDocument;if(me(e)){const n=o.createElement(e.tagName.toLowerCase());return e.getAttributeNames().forEach((t=>n.setAttribute(t,e.getAttribute(t)))),r(e,n),t.insertBefore(n,s),n}const i=o.importNode(e,!1);return t.insertBefore(i,s),i}function Jt(e,t){a(c(e.childNodes),(e=>Vt(e,t)))}function Gt(e){let t;return n=>{const r=function(e){return new URL("",e.url).href}(n);if(t){if(t.url===r)return t.on;t.sup.off()}let s;const o=A().whenOff((()=>{t=void 0,s=void 0})),i=B((t=>{if(!s){const t=e(n),r=$(),i=t.to((e=>{r.it=e})).whenOff((e=>{null!=e&&o.off(e)}));o.cuts(i).cuts(r),s={on:r.read().thru_((e=>e?O(e):L())),num:0}}const r=s;return++r.num,r.on.tillOff(o).to(t).whenOff((e=>{--r.num||Promise.resolve().then((()=>{r.num||r!==s||o.off(e)})).catch(console.error)}))}));return t={url:r,on:i,sup:o},i}}class Qt extends Error{}const Xt=new class extends _t{create(t,n){return{get:()=>n,put:e}}};class Yt{constructor(e,t){this._navigation=e,this._loader=t,this._map=new Map,this._requests=l(_((()=>this._map.values())))}get fragments(){const e=[];return d(this._requests,(t=>!!t.fragment&&(e.push(t.fragment),!0)))?e:[]}handle(){const e=this,t=A();let n=Y();return{get(){},put(t){e._add(t)},transfer(t,n){if("pretend"===n)return;const r=e._transfer();return t.put(Xt,r),r.handle()},enter(r,s){if("init"===s)return;n=A().needs(t);const o=B((t=>{const s=new J,o=s.on(t);return e._loader(r).tillOff(n).to((e=>s.send(e))).whenOff((e=>{void 0===e||e instanceof Qt||s.send({ok:!1,page:r,error:e})})),o})).share();a(e._requests,(({fragment:e,receiver:t})=>function(e,t){return t?e.thru_((e=>e.ok?{...e,fragment:(null!=t.tag?e.document.getElementsByTagName(t.tag)[0]:e.document.getElementById(t.id))||void 0}:e)):e}(o,e).to({supply:A().needs(t.supply),receive(e,n){t.receive(e,n)}})))},leave(){n.off(new Qt("page left"))},stay(){t.off(new Qt("navigation cancelled"))},forget(){t.off(new Qt("page forgotten"))}}}_add(e){const t={...e,receiver:W(e.receiver)},{supply:n}=t.receiver,r=this._map.get(n);r?r.push(t):(this._map.set(n,[t]),n.whenOff((()=>this._map.delete(n))))}_transfer(){const e=new Yt(this._navigation,this._loader);for(const[t,n]of this._map.entries())e._map.set(t,n.slice());return e}}const Zt=new ze("page-load-agent"),en=new k("page-load-url",{byDefault:n(e)}),tn=new v("page-loader",{byDefault:de((function(e){const t=e.get(se),n=e.get(Ve),r=e.get(en),s=e.get(Zt),o=new t.DOMParser;return e=>{const t=new URL(e.url.href);r(t);const i=new Request(t.href,{mode:"same-origin",credentials:"same-origin",headers:new Headers({Accept:"text/html"})});return B((e=>s(a,i).to(e)));function a(r){return function(e,t){var n;const r=null===(n=e.get(Xt))||void 0===n?void 0:n.fragments;r&&r.length&&t.headers.set("Accept-Fragment",r.reduce(((e,t)=>(e?e+", ":"")+(null!=t.tag?"tag="+$e(t.tag):"id="+$e(t.id))),""))}(e,r),B((s=>{const i=new Z;i.on(s),i.send({page:e}),H(n(r).thru_((e=>Promise.all([e,e.text()])))).thru_(((...e)=>D(e)),(([n,r])=>{if(!n.ok)return{ok:!1,page:e,response:n,error:n.status};try{return{ok:!0,page:e,response:n,document:nn(o,t,n,r)}}catch(t){return{ok:!1,page:e,response:n,error:t}}})).to(s)}))}}}))});function nn(e,t,n,r){const s=e.parseFromString(r,Ke(n.headers.get("Content-Type")||"text/html")[0].v);if(s.head){const e=s.head.querySelector("base");if(e)e.href=new URL(e.getAttribute("href"),t).href;else{const e=s.createElement("base");e.href=t.href,s.head.appendChild(e)}}return s}class rn extends _t{create(e,t,n){const r=new Yt(n.get(Pt),Gt(n.get(tn))),s=r.handle();return e.put(Xt,r),s.put(t),s}}const sn=new rn,on=new v("page-cache-buster",{byDefault:de((e=>new an(e)))});class an{constructor(e){const t=cn(e.get(se).document);if(t){const n=e.get(Pt);this.urlModifier=I((e=>e.searchParams.set("__wesib_app_rev__",t))),this.agent=I(((e,r)=>e(new Request(r.url,r)).thru_((e=>{if(e.ok){const r=cn(e.document);if(r&&r!==t){const t=new URL(e.page.url.href);t.searchParams.set("__wesib_app_rev__",r),n.update(t),n.reload()}}return e}))))}else this.urlModifier=I(),this.agent=I()}static get[y](){return on}}function cn(e){var t;return null===(t=e.querySelector("meta[name=wesib-app-rev]"))||void 0===t?void 0:t.getAttribute("content")}function un(e){const t=e.get(se).document;return e=>e().thru_((e=>{if(e.ok){const n=new Set(i(hn(t,t.scripts),(([e])=>e)));a(p(hn(e.document,e.document.querySelectorAll("script")),(([e])=>!n.has(e))),(([e,r])=>{Vt(r,t.head,((t,n)=>n.src=e)),n.add(e)}))}return e}))}function hn(e,t){return i(h(t,(({src:e})=>!!e)),(t=>[new URL(t.src,e.baseURI).href,t]))}function ln(e){const t=e.get(se).document;return e=>e().thru_((e=>{if(!e.ok)return e;const n=e.document.querySelectorAll("link[rel=stylesheet]");if(!n.length)return e;let r=t.head,s=null;const o=t.querySelectorAll("link[rel=stylesheet]"),i=new Map,u=o.item(0);return u&&(r=u.parentNode,s=u,a(c(o),(e=>i.set(new URL(e.href,t.baseURI).href,e)))),a(c(n),(e=>{const n=new URL(e.href,t.baseURI).href,o=i.get(n);o?(f(i.keys())===n?(r=o.parentNode,s=o.nextSibling):r.insertBefore(o,s),i.delete(n)):Vt(e,r,s,((e,t)=>t.href=n))})),a(i.values(),(e=>e.parentNode.removeChild(e))),e}))}function dn(e){const t=e.get(se).document;return e=>e().thru_((e=>{if(e.ok){const n=e.document.getElementsByTagName("title").item(0);n&&n.textContent&&(t.title=n.textContent)}return e}))}const pn={setup(e){e.provide({a:en,by:e=>e.urlModifier,with:[an]}),e.provide({a:Zt,by:e=>e.agent,with:[an]}),e.provide({a:Zt,by:un}),e.provide({a:Zt,by:ln}),e.provide({a:Zt,by:dn})}};class fn{static get[ce](){return pn}}function gn(t={}){const r=t.onResponse?t.onResponse.bind(t):e,s=t.contentKey?t.contentKey.bind(t):mn;return re({feature:{needs:[fn]},define(e){e.whenComponent((e=>{const{fragment:o,render:i}=t,a=e.get(se).document,c=e.get(oe)(i),u=e.get(Pt);let h,l=s(u.page);h=o?n(o):()=>{const{element:{id:t,tagName:n}}=e;return t?{id:t}:{tag:n}},e.whenConnected((()=>{const t=a.createRange();t.selectNodeContents(e.contentRoot),u.read().once((n=>{n.put(sn,{fragment:h(),receiver:{supply:A().needs(e),receive:(n,o)=>function(n){const o=s(n.page);if(o===l)return;if(!n.ok)return void c((()=>r({context:e,range:t,response:n})));l=o,c((()=>{t.deleteContents();const s=a.createDocumentFragment(),{fragment:o}=n;o&&(Jt(o,s),t.insertNode(s)),r({context:e,range:t,response:n})}))}(o)}})}))}))}))}})}function mn({url:e}){return new URL("",e).href}class _n extends S{get upKey(){return this}constructor(){super("default-in-aspects")}grow(e){const t=e.context.get(ue),n=e.context.get(oe);e.insert(e.seed.keepThru(((...e)=>xe(...e,ke.to(n),Se.to(t)))).tillOff(e.context.get(U)))}}const wn=new _n,bn=new R("input-from-control",{byDefault:()=>({})});function yn(e,t){const n=e.get(Ze).provide({a:bn,by:()=>({root:e,control:t})});return A(n).needs(e).needs(t)}function vn(e){return re({define(t){t.whenComponent((t=>{const{up:n}=t.get(Ze);ee({parent:n().keepThru_((e=>e?F(e.get(bn)):E({}))),aspects:t.get(wn)}).keepThru_((({parent:[n],aspects:[r]})=>{if(n.control){const s=e({control:n,context:t,aspects:r});if(s)return s instanceof ye?O(s):F(s)}return O()})).consume(((e,n)=>{if(!e)return;const r=yn(t,e);return(n||M(e)).needs(r),r}))}))}})}const xn=new R("input-to-form",{byDefault:()=>({})});function kn(e){const{select:t="form",pick:n={deep:!0,all:!0}}=e;return re({define(r){r.whenComponent((r=>{const s=r.get(pt);r.whenConnected((()=>{ee({node:s.select(t,n).first(),aspects:r.get(wn)}).keepThru((({node:[t],aspects:[n]})=>{if(!t)return O();const s=e.makeForm({node:t,context:r,aspects:n});return s?Array.isArray(s)?O(...s):F(s):O()})).consume(((e,t,n)=>{if(!e)return;const s=function(e,t,n){const r=e.get(Ze),s=r.provide({a:xn,by:()=>({root:e,control:t,form:n})});return r.provide({a:bn,via:xn}),A(s).needs(e).needs(t).needs(n)}(r,e,t);return n?n.needs(s):s.cuts(t).cuts(e),s}))}))}))}})}function Sn(e={}){const{cancel:t=!0}=e;return be((({get:e})=>({componentDef:{define(n){n.whenComponent((n=>{n.whenConnected((()=>{const r=n.get(Ze),{component:s}=n;r.get(xn).consume((r=>{if(!r.control)return;const o=new z(r.form.element);M(o).needs(n);const i=o.on("submit");return(t?i.instead():i).to((t=>e(s).call(s,r,t)))}))}))}))}}})))}function Cn(e){const t="string"==typeof e?n(I(e)):t=>{const n=e(t);return"string"==typeof n?I(n):n};return re({define(e){e.whenComponent((e=>{const n=e.get(Ze);ee({group:n.up().keepThru_((e=>e?F(e.get(bn)):E({})),(({control:e})=>e&&e.aspect(ve))),control:n.get(bn),name:t(e)}).consume((({group:[e],control:[{control:t}],name:[n]})=>{if(null!=n&&e&&t&&e!==t)return e.controls.set(n,t)}))}))}})}function Rn(e){const{select:t="input",pick:n={deep:!0,all:!0}}=e;return re({define(r){r.whenComponent((r=>{const s=r.get(pt);r.whenConnected((()=>{ee({node:s.select(t,n).first(),aspects:r.get(wn)}).keepThru((({node:[t],aspects:[n]})=>{if(!t)return O();const s=e.makeControl({node:t,context:r,aspects:n});return s?s instanceof ye?O(s):F(s):O()})).consume(((e,t)=>{if(!e)return;const n=yn(r,e);return(t||M(e)).needs(n),n}))}))}))}})}export{qt as A,vn as C,wn as D,kn as F,Ve as H,bn as I,Pt as N,Sn as O,vt as P,Cn as S,Rn as U,Ze as a,pt as b,xn as c,Wt as d,gn as e,_t as f,Rt as g,yn as i};//# sourceMappingURL=generic.69a57111.js.map
