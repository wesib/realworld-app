import{e,n as t,g as n,b as s,h as r,d as o,c as i}from"../_lib_/call-thru.7c5feeee.js";import{e as a,a as c,g as u,f as h,c as l,m as p,d,h as f,A as g}from"../_lib_/a-iterable.f330c6da.js";import{C as m,a as _,F as w,S as b,b as y,c as v,d as x}from"../_lib_/context-values.49ce4d52.js";import{n as k,c as O,a as S,d as R,b as U,f as C,t as A,O as D,A as L,o as E,h as j,D as N,j as P,m as M,p as I,l as q,q as K,r as z,V as B,E as F,g as H,e as V}from"../_lib_/fun-events.d1b80992.js";import{c as T,h as W}from"../_lib_/namespace-aliaser.d06c9606.js";import{C as G,D as J,a as Q,A as X,B as Y,b as Z,c as $,d as ee,e as te,f as ne,g as se,S as re,W as oe,i as ie,E as ae,h as ce,j as ue,k as he,m as le,l as pe}from"./wesib.6bf655a7.js";import{h as de,a as fe}from"../_lib_/http-header-value.38fffe0a.js";import{a as ge,b as me,i as _e,c as we,d as be}from"../_lib_/input-aspects.cc17fcb1.js";class ye extends v{constructor(e){super(e),this.upKey=this.createUpKey(e=>e.seed.keep.thru((...t)=>{if(t.length)return o(function(e){return(t,n)=>{const s=(n,r)=>{const o=e[n];return o?K(o((e=r)=>s(n+1,e),r)):t(r)};return s(0,n)}}(t));const n=()=>S(ve);return k(e.byDefault(n)||n())}))}grow(e){let t;return e.context.get(this.upKey,"or"in e?{or:null!=e.or?S(e.or):e.or}:void 0)(e=>t=e),(e,n)=>t(e,n)}}function ve(e,t){return e(t)}const xe=new ye("http-fetch-agent"),ke={};const Oe=new w("http-fetch",{byDefault:Z((function(e){const t=e.get(Y),n=e.get(xe);return(e,t)=>n(s,new Request(e,t));function s(e){return E(n=>{const s=new j;let r;if("AbortController"in t){const o=new t.AbortController,{signal:i}=o;r=C(e=>{e===ke&&o.abort()}),n.supply.whenOff(()=>r.off(ke)).needs(r),s.on({supply:r,receive(e,t){n.receive(e,t)}});const a=e.signal;a&&(new N(a).on("abort").once(()=>o.abort()),a.aborted&&o.abort()),e=new Request(e,{signal:i})}else r=s.on(n);t.fetch(e).then(e=>{s.send(e),r.off()}).catch(e=>r.off(e))})}}))});const Se=new b("hierarchy-root",{byDefault:e=>{const t=e.get(ne);return new N(t).on("wesib:component")(({context:e})=>e.get(Ue).issue()),A()}}),Re=new b("hierarchy-updates",{byDefault:e=>new Ue(e.get($))});class Ue{constructor(e){const t=new j,n=e.get(ee).get(Se);this.on=t.on,this.send=()=>t.send(e),this.issue=()=>{const t=Ce(e);t?t[0].get(Ue).send():n.it=e}}static get[_](){return Re}}function Ce(e){const t=e.get(ee).get(ne);let n=e.element,s=!0;if(n!==t)for(;;){const e=n.parentNode;if(!e)return;const r=e[se];if(r)return[r,s];if(e===t)return;s=!1,n=e}}const Ae=new b("hierarchy-context",{byDefault:t=>function(t){const n=t.get(ee).get(Se),s=U(e=>{const s=A(),r=C().needs(e.supply),o=C().needs(e.supply),i=()=>{const e=Ce(t);if(e){const[t,n]=e;s.it=t.get(De),r.off(),n&&o.off()}else s.it=void 0};n.read({supply:r,receive:()=>t.connected&&i()}),s.read.consume(e=>e&&e.context.get(Ue).on(i)).needs(o),s.read(e),t.whenOn({supply:e.supply,receive:(e,n)=>{i(),n.whenOff(()=>{Promise.resolve().then(()=>t.connected||(s.it=void 0))})}})}).share(),r=function(t){return new y(n=>t.keep.thru(t=>t?k(t.get(n)):e()))}(s),o=r.newValues();return new class extends De{constructor(){super(...arguments),this.get=o.get}get context(){return t}get up(){return s}provide(e){return r.provide(e)}}}(t.get($))});class De extends m{static get[_](){return Ae}}const Le=new b("component-node");class Ee extends g{get[D](){return this.onUpdate}get[L](){return this.read}}const je={subtree:!0};function Ne(t,n,s,r,{deep:h,all:l}){const m=new j,_=h?je:void 0;let w,b,y=new Set;"string"==typeof s?b=s:t.whenDefined(s).then(({elementDef:{name:e}})=>{if(w=void 0,e&&(b=W.name(e,t.get(Q)),m.size)){const e=L();if(e.size){const t=Array.from(d(p(e,e=>r(e)),i));t.length&&m.send(t,[])}}});const v=t.get(ce)((function(e){const t=[],n=[];e.forEach(e=>{a(d(p(c(e.removedNodes),P),i),e=>n.push(e)),a(d(p(c(e.addedNodes),N),i),e=>t.push(e))}),(t.length||n.length)&&m.send(t,n)}));let x;const k=E(e=>{const t=!m.size,s=m.on(e);return t&&(L(),v.observe(n,_)),C(e=>{s.off(e),m.size||v.disconnect()}).needs(s)}),O=U(k.thru(()=>x),()=>[x]),S=k.thru((t,n)=>e(g.of(t),g.of(n))),A=U(e=>{const t=new j;t.on(e),t.send(x,g.of([])),S(e)}),D=R(O).keep.thru(e=>o(f(e)));l||n.addEventListener("wesib:component",e=>{const t=e.target;if(y.has(t)){const e=r(t);m.send([e],[])}});return x=new class extends Ee{get onUpdate(){return k}get read(){return O}get track(){return A}get first(){return D}[Symbol.iterator](){return u(w||(w=d(p(m.size?y:L(),e=>r(e)),i)))}};function L(){return w=void 0,y=function(){const e=b;if(!e)return new Set;if(h)return new Set(c(n.querySelectorAll(e)));return new Set(d(c(n.children),t=>t.matches(e)))}()}function N(e){if(ie(e))return b&&e.matches(b)&&!y.has(e)?(y.add(e),r(e)):void 0}function P(e){if(ie(e)&&y.delete(e))return r(e,!0)}}class Pe{constructor(e,t){this._bs=e,this.element=t,this._emitters=new Map}get observer(){if(this._observer)return this._observer;const e=this._bs.get(Y).MutationObserver;return this._observer=new e(e=>this._update(e))}observe(e,t){const n=this,s=this.observer,r=this._emitter(e),o=M(t),i=r.on({supply:C(()=>{this._emitters.delete(e),s.disconnect(),this._emitters.size?a():this._observer=void 0}).needs(o.supply),receive:(e,t,n)=>o.receive(e,t,n)});return s.disconnect(),a(),i;function a(){n._update(s.takeRecords()),s.observe(n.element,{attributes:!0,attributeOldValue:!0,attributeFilter:Array.from(n._emitters.keys())})}}_update(e){e.forEach(e=>{const t=e.attributeName,n=this._emitters.get(t);n&&n.send(this.element.getAttribute(t),e.oldValue)})}_emitter(e){const t=new j;return this._emitters.set(e,t),t}}class Me extends B{constructor(e,t){super(),this._observer=e,this._name=t,this._updates=new j;let n=z();this.on=E(e=>{this._updates.size||(n=this._observer.observe(t,(e,t)=>this._updates.send(e,t))),e.supply.needs(n),this._updates.on(e).whenOff(e=>{this._updates.size||n.off(e)})})}get[F](){return H(this._updates)}get it(){return this._observer.element.getAttribute(this._name)}set it(e){this._observer.element.setAttribute(this._name,e)}}class Ie{constructor(e,t){this._attrs=new Map,this._observer=new Pe(e,t)}get(e){const t=this._attrs.get(e);if(t)return t;const n=new Me(this._observer,e);return this._attrs.set(e,n),n}}class qe extends B{constructor(e,t){super(),this._element=e,this._key=t,this._updates=new j,this._supply=C()}get on(){return this._updates.on}get[F](){return this._supply}get it(){return this._element[this._key]}set it(e){this._element[this._key]=e}done(e){return this._supply.off(e),this}bind(e){const t=H(this),n=e.get(ue).track(he(this._key));t.needs(n.onUpdate({supply:C().whenOff(e=>this._updates.done(e)),receive:(e,t,n,s)=>this._updates.send(n,s)}).needs(t))}}class Ke{constructor(e){this._element=e,this._props=new Map}bind(e){this._context=e,this._props.forEach(t=>t.bind(e))}get(e){const t=this._props.get(e);if(t)return t;const n=new qe(this._element,e);return this._context&&n.bind(this._context),this._props.set(e,n),n}}const ze=Symbol("element-node");class Be{constructor(e,t){this._bs=e,this.element=t,this._attrs=new Ie(e,t),this._props=new Ke(t),t[ze]=this;const n=t[se];n?this._bind(n):t.addEventListener("wesib:component",e=>this._bind(e.context))}get context(){return this.element[se]}get parent(){const e=this.element.parentNode;return e&&Fe(this._bs,e)}select(e,t){return function(e,t,n,s={}){if(s.all)return Ne(e,t,n,(t,n)=>Fe(e,t,n),s);const r=e.get(ae);return Ne(e,t,n,(t,n)=>r(t)&&Fe(e,t,n),s)}(this._bs,this.element,e,t)}attribute(e){return this._attrs.get(e)}property(e){return this._props.get(e)}_bind(e){this._props.bind(e)}}function Fe(e,t,n){const s=t[ze];return s||n?s:new Be(e,t)}const He={needs:re,setup(e){e.perComponent({a:Le,by:e=>Fe(e.get(ee),e.element)})}};class Ve{static get[te](){return He}}const Te=new b("navigation");class We{static get[_](){return Te}get[D](){return this.on}get[L](){return this.read}back(){this.go(-1)}forward(){this.go(1)}reload(){this.go()}}const Ge=Symbol("page-param");class Je{get[Ge](){return this}byDefault(e,t){}}class Qe extends m{}const Xe=new b("nav-history",{byDefault:Z(e=>new Ze(e))});function Ye(e){return null==e||"object"!=typeof e?{data:e}:e["wesib:navigation:data"]}class Ze{constructor(e){this._context=e,this._entries=new Map,this._lastId=0;const t=e.get(Y);this._document=t.document,this._location=t.location,this._history=t.history,this._uid=btoa(String(Math.random()))}static get[_](){return Xe}init(){const{data:e}=Ye(this._history.state),t=this.newEntry({url:new URL(this._location.href),data:e,title:this._document.title});return this._entries.set(t.id,t),t.schedule(()=>{t.enter("init"),this._history.replaceState(this._historyState(t),"")}),t}newEntry(e){return new $e(this._context,++this._lastId,e)}open(e,t){const{page:{title:n="",url:s}}=e;this._history.pushState(this._historyState(e),n,s.href),this._enter("open",e,t)}_enter(e,t,n){const s=n.it;this._entries.set(t.id,t);try{for(let e=s.next;e;e=e.next)this._forget(e)}finally{t.prev=s,s.next=t,t.schedule(()=>{try{s.leave()}finally{t.enter(e)}}),n.it=t}}replace(e,t){const n=t.it,{page:{title:s="",url:r}}=e;this._history.replaceState(this._historyState(e),s,r.href),this._entries.set(e.id,e);const o=n.prev;o&&(e.prev=o,o.next=e),e.schedule(()=>{try{n.leave()}finally{try{this._forget(n)}finally{e.enter("replace")}}}),t.it=e}popState(e,t){const{state:n}=e;if(null==n)return null==this._history.state?this._changeHash(t):void 0;const s=t.it,{uid:r,data:o,id:i}=Ye(n);let a;const c=r===this._uid&&null!=i?this._entries.get(i):void 0;return c?a=c:(a=this.newEntry({url:new URL(this._location.href),data:o,title:this._document.title}),s.transfer(a,"return"),this._entries.set(a.id,a),this._history.replaceState(this._historyState(a),"")),a.schedule(()=>{try{s.leave()}finally{a.enter("return")}}),t.it=a,a}hashChange(e){if(null==this._history.state)return this._changeHash(e)}update(e,t){const n=e.it,s=new $e(this._context,++this._lastId,Object.assign(Object.assign({},n.page),{url:t}),n);return this._entries.set(s.id,s),this._history.replaceState(this._historyState(s),"",t.href),this._entries.delete(n.id),e.it=s}_changeHash(e){const t=e.it,n=this.newEntry({url:new URL(this._location.href),data:null,title:this._document.title});try{t.transfer(n,"enter")}finally{this._history.replaceState(this._historyState(n),""),this._enter("enter",n,e)}return n}_forget(e){this._entries.delete(e.id),e.forget()}_historyState({id:e,page:{data:t}}){return{"wesib:navigation:data":{uid:this._uid,id:e,data:t}}}}class $e{constructor(e,n,s,r){this._bsContext=e,this.id=n,this._status=0,this._update=t,this._params=r?r._params:new Map;const o=this;this.page={get url(){return s.url},get title(){return s.title},get data(){return s.data},get visited(){return!!o._status},get current(){return 2===o._status},get:e=>o.get(e),put(e,t){o.put(e,t)}}}get(e){const t=e[Ge],n=this._params.get(t);if(n)return n.get();const s=t.byDefault(this.page,this._newContext());return s&&this._init(t,s)}put(e,t){const n=e[Ge],s=this._params.get(n);return s?(s.put(t),s.get()):this._init(n,n.create(this.page,t,this._newContext()))}_newContext(){const e=new y(this._bsContext);return new class extends Qe{constructor(){super(...arguments),this.get=e.newValues().get}}}_init(e,t){return this._params.set(e,t),this.page.current&&t.enter&&t.enter(this.page,"init"),t.get()}transfer(e,t){a(this._params.entries(),([n,s])=>{if(s.transfer){const r=s.transfer(e.page,t);r&&e._params.set(n,r)}})}stay(e){a(this._params.values(),t=>t.stay&&t.stay(e))}enter(e){this._status=2,a(this._params.values(),t=>t.enter&&t.enter(this.page,e))}leave(){this._status=1,a(this._params.values(),e=>e.leave&&e.leave())}forget(){a(this._params.values(),e=>e.forget&&e.forget()),this._params.clear()}schedule(e){this._update=e}apply(){const e=this._update;this._update=t,e()}}class et extends v{constructor(e){super(e),this.upKey=this.createUpKey(e=>{const{document:t}=e.context.get(Y);return e.seed.keep.thru((...n)=>{if(n.length)return o((function(e,s,r,o){return function o(i,a){const c=n[i];if(!c)return e(a);c(({url:e=a.url,title:n=a.title,data:s=a.data}=a)=>o(i+1,{url:new URL(String(e),t.baseURI),title:n,data:s,get visited(){return a.visited},get current(){return a.current},get:e=>a.get(e),put(e,t){a.put(e,t)}}),s,r,a)}(0,o)}));const s=()=>S(tt);return k(e.byDefault(s)||s())})})}grow(e){let t;return e.context.get(this.upKey,"or"in e?{or:null!=e.or?S(e.or):e.or}:void 0)(e=>t=e),(e,n,s,r)=>t(e,n,s,r)}}function tt(e,t,n,s){e(s)}const nt=new et("navigation-agent");class st extends Event{constructor(e,t){super(e,Object.assign(Object.assign({},t),{cancelable:!1})),this.when=t.when,this.to=t.to}}class rt extends Event{constructor(e,t){super(e,Object.assign(Object.assign({},t),{cancelable:!0})),this.when=t.when,this.from=t.from,this.to=t.to}}class ot extends Event{constructor(e,t){super(e,Object.assign(Object.assign({},t),{cancelable:!0})),this.from=t.from,this.to=t.to,this.reason=t.reason}get when(){return"stay"}}function it(e){const n=e.get(Y),{document:s,history:r}=n,o=new N(n),i=e.get(Ze),a=e.get(nt),c=o.on("wesib:enterPage"),u=o.on("wesib:leavePage"),h=o.on("wesib:stayOnPage"),l=P(c,u,h),p=A(i.init());p.read(e=>e.apply());const d=p.read.keep.thru(e=>e.page);let f=Promise.resolve();o.on("popstate")(e=>{const t=i.popState(e,p);t&&o.dispatch(new st("wesib:enterPage",{when:null!=e.state?"return":"enter",to:t.page}))}),o.on("hashchange")(()=>{const e=i.hashChange(p);e&&o.dispatch(new st("wesib:enterPage",{when:"enter",to:e.page}))});return new class extends We{get page(){return p.it.page}get length(){return r.length}get onEnter(){return c}get onLeave(){return u}get onStay(){return h}get on(){return l}get read(){return d}go(e){r.go(e)}open(e){return _("pre-open","open",e)}replace(e){return _("pre-replace","replace",e)}update(e){return i.update(p,g(e)).page}with(e,t){return function e(t){return{with:(n,s)=>e(le(t,e=>e.put(n,s))),open:e=>_("pre-open","open",e,t),replace:e=>_("pre-replace","replace",e,t),pretend(e,n=((e,t)=>t)){let s;"function"==typeof e?(n=e,s=void 0):s=e;const r=m(s),o=p.it,i=w("pretend",o,r,t);try{return b("pretend",o,r,i)?n(o.page,i.page):void 0}finally{i.stay(p.it.page)}}}}(n=>n.put(e,t))}};function g(e){return"string"==typeof e?new URL(e,s.baseURI):e||p.it.page.url}function m(e){return null==e||"string"==typeof e||e instanceof URL?{url:g(e)}:e.url instanceof URL?e:Object.assign(Object.assign({},e),{url:g(e.url)})}function _(e,n,s,r=t){const a=m(s),c=f=f.then(u,u);return c;function u(){let t=void 0;try{const s=function(){if(f!==c)return h();const t=p.it,n=w(e,t,a,r),s=new rt("wesib:leavePage",{when:e,from:t.page,to:n.page});if(!o.dispatch(s)||f!==c||!b(e,t,a,n))return h(n);return n}();return s?(t=s,i[n](t,p),o.dispatch(new st("wesib:enterPage",{when:n,to:t.page})),t.page):s}catch(e){throw h(t,e),e}}function h(e,t){return e&&e.stay(p.it.page),o.dispatch(new ot("wesib:stayOnPage",{from:p.it.page,to:a,reason:t})),null}}function w(e,t,n,s){const r=i.newEntry(n);try{t.transfer(r,e),s(r.page)}catch(e){throw r.stay(p.it.page),e}return r}function b(e,t,n,s){let r=!1;return a(({url:e,data:t,title:s})=>{r=!0,n.url=e,n.data=t,n.title=s},e,t.page,s.page),r}}const at={setup(e){e.provide({a:We,by:it})}};class ct{static get[te](){return at}}const ut={supply:t};function ht(n={}){const{select:s="a",pick:r={all:!0,deep:!0}}=n;return G({feature:{needs:[Ve,ct]},define(o){o.whenComponent(o=>{const i=function(e,n){const s=e.get(J),{active:r=mt}=n,o=T.name(r,e.get(Q)),i=n.activate?n.activate.bind(n):t;return e=>{const{element:t}=e.node,n=t[gt]||(t[gt]=s({node:t})),r=t=>{n(()=>((e,{node:t})=>{const n=t.element,{classList:s}=n;e?s.add(o):s.remove(o)})(t,e)),i(t,e)};let a;return r(!0),{node:e.node,supply(){const e=a=C(()=>{a===e&&r(!1)});return e}}}}(o,n),a=function(t){if(!t.weigh)return lt;return n=>{const s=t.weigh(n);if("number"==typeof s)return S(n.node,s);let r=R(s).keep.thru_(t=>e(n.node,t));return U(e=>{r({supply:C().needs(e.supply).whenOff(()=>{r=S(n.node,0),r(e)}),receive:e.receive.bind(e)})})}}(n),c=o.get(We),u=o.get(Le);o.whenOn(e=>{let t=ut;c.read.consume(e=>u.select(s,r).read.keep.thru_(t=>k(O(...t.map(t=>a({node:t,context:o,page:e}))))).consume((...n)=>{const s=function(e){let t,n=0;return e.forEach(([e,s])=>{s>n&&(n=s,t=e)}),t}(n);return s?s!==t.node&&(t=i({node:s,context:o,page:e})):t=ut,t.supply()})).needs(e)})})}})}function lt({node:e,page:t}){const n=e.element,s=n.getAttribute("href");if(null==s)return S(e,-1);const r=new URL(s,n.ownerDocument.baseURI);return S(e,function e(t,n){if(t.origin!==n.origin)return-1;const s=pt(t),r=pt(n);if(t.hash)return s!==r?-1:ft(t,n)<0||ft(n,t)<0?-1:e(dt(t),dt(n));const o=ft(t,n);if(o)return o<0?-1:s!==r?-1:o;if(!r.startsWith(s))return-1;return t.pathname.length}(r,t.url))}function pt(e){const t=e.pathname;return t.endsWith("/")?t:t+"/"}function dt(e){let{hash:t}=e;return t=t.substring(1),"/"!==t[0]&&(t="/"+t),new URL(t,e)}function ft({searchParams:e},{searchParams:t}){let n=0;return e.forEach((s,r)=>{const o=new Set(t.getAll(r));n>=0&&(e.getAll(r).every(e=>o.has(e))?n+=1:n=-1)}),n}const gt=Symbol("nav-link-render-schedule"),mt=["active",oe];function _t(e={}){const t=e.handle?e.handle.bind(e):function(e){const t=e.href?e.href.bind(e):wt;return({event:e,page:n,navigation:s})=>{const r=t(e);if(null==r)return;const o=e.target,i=n.url,a=new URL(r,o.ownerDocument.baseURI);a.origin===i.origin&&(e.preventDefault(),i.href!==a.href&&s.open(r))}}(e),n=new X(e.event||"click");return G({feature:{needs:ct},define(e){e.whenComponent(e=>{e.whenOn(s=>{const r=e.get(We);n.forEach(n=>{e.on(n)(n=>r.read.once(s=>t({event:n,page:s,context:e,navigation:r}))).needs(s)})})})}})}function wt(e){return e.target.getAttribute("href")}function bt(e,t){if(t.origin!==e.origin||t.username)return new URL("#"+t,e);const{pathname:n,search:s,hash:r}=t,o=new URL("",e);return o.hash=s||r||n.length>1?n+s+r:s+r,o}class yt extends Je{create(e,t){let n;const s={get:()=>n,put(t){n="string"==typeof t?new URL(t,e.url.origin):t}};return s.put(t),s}}const vt=new yt;class xt extends Je{create(e,t){const n={get(){return e.get(vt)||(t=e.url,new URL(t.hash.substring(1),t.origin));var t},put(t){e.put(vt,t)}};return n.put(t),n}byDefault(e){return this.create(e,null)}}const kt=new xt,Ot={needs:ct,setup(e){e.provide({a:nt,is:Rt})}};class St{static get[te](){return Ot}}function Rt(e,t,n,s){const r=s.get(vt);r?e({url:bt(s.url,r)}):e()}function Ut(e,t,n,s=Ct){let r;"function"==typeof n?(s=n,r=null):r=n||null;const o=t.ownerDocument;if(ie(e)){const n=o.createElement(e.tagName.toLowerCase());return e.getAttributeNames().forEach(t=>n.setAttribute(t,e.getAttribute(t))),s(e,n),t.insertBefore(n,r),n}const i=o.importNode(e,!1);return t.insertBefore(i,r),i}function Ct(e,t){a(c(e.childNodes),e=>Ut(e,t))}function At(t){let s;return r=>{const o=function(e){return new URL("",e.url).href}(r);if(s){if(s.url===o)return s.on;s.sup.off()}let i;const a=C().whenOff(()=>{s=void 0,i=void 0}),c=E(s=>{if(!i){const s=t(r),o=A(),c=s(e=>{o.it=e}).whenOff(e=>{null!=e&&a.off(e)});a.whenOff(e=>{c.off(e),o.done(e)}),i={on:o.read.thru_(t=>t?e(t):n()),num:0}}const o=i;return++o.num,o.on(s).needs(a).whenOff(e=>{--o.num||Promise.resolve().then(()=>{o.num||o!==i||a.off(e)})})});return s={url:o,on:c,sup:a},c}}class Dt extends Error{}const Lt=new class extends Je{create(e,n){return{get:()=>n,put:t}}};class Et{constructor(e,t){this._navigation=e,this._loader=t,this._map=new Map}get fragments(){const e=[];for(const t of this){if(!t.fragment)return[];e.push(t.fragment)}return e}[Symbol.iterator](){return u(h(this._map.values()))}handle(){const e=this,t=C();let n=z();return{get(){},put(t){e._add(t)},transfer(t,n){if("pretend"===n)return;const s=e._transfer();return t.put(Lt,s),s.handle()},enter(s,r){if("init"===r)return;n=C().needs(t);const o=E(t=>{const r=new j,o=r.on(t);return e._loader(s)(e=>r.send(e)).whenOff(e=>{void 0===e||e instanceof Dt||r.send({ok:!1,page:s,error:e})}).needs(n),o}).share();a(e,({fragment:e,receiver:t})=>function(e,t){return t?e.thru_(e=>e.ok?Object.assign(Object.assign({},e),{fragment:(null!=t.tag?e.document.getElementsByTagName(t.tag)[0]:e.document.getElementById(t.id))||void 0}):e):e}(o,e)({supply:C().needs(t.supply),receive(e,n){t.receive(e,n)}}))},leave(){n.off(new Dt("page left"))},stay(){t.off(new Dt("navigation cancelled"))},forget(){t.off(new Dt("page forgotten"))}}}_add(e){const t=Object.assign(Object.assign({},e),{receiver:M(e.receiver)}),{supply:n}=t.receiver,s=this._map.get(n);s?s.push(t):(this._map.set(n,[t]),n.whenOff(()=>this._map.delete(n)))}_transfer(){const e=new Et(this._navigation,this._loader);for(const[t,n]of this._map.entries())e._map.set(t,Array.from(n));return e}}const jt=new ye("page-load-agent"),Nt=new w("page-load-url",{byDefault:s(t)}),Pt=new b("page-loader",{byDefault:Z((function(e){const t=e.get(Y),n=e.get(Oe),s=e.get(Nt),o=e.get(jt),i=new t.DOMParser;return e=>{const t=new URL(e.url.href);s(t);const a=new Request(t.href,{mode:"same-origin",credentials:"same-origin",headers:new Headers({Accept:"text/html"})});return E(e=>o(c,a)(e));function c(s){return function(e,t){var n;const s=null===(n=e.get(Lt))||void 0===n?void 0:n.fragments;s&&s.length&&t.headers.set("Accept-Fragment",l(s,(e,t)=>(e?e+", ":"")+(null!=t.tag?"tag="+de(t.tag):"id="+de(t.id)),""))}(e,s),E(o=>{const a=new I;a.on(o),a.send({page:e}),q(n(s).thru_(e=>Promise.all([e,e.text()]))).thru_((...e)=>r(e),([n,s])=>{if(!n.ok)return{ok:!1,page:e,response:n,error:n.status};try{return{ok:!0,page:e,response:n,document:Mt(i,t,n,s)}}catch(t){return{ok:!1,page:e,response:n,error:t}}})(o)})}}}))});function Mt(e,t,n,s){const r=e.parseFromString(s,fe(n.headers.get("Content-Type")||"text/html")[0].v);if(r.head){const e=r.head.querySelector("base");if(e)e.href=new URL(e.getAttribute("href"),t).href;else{const e=r.createElement("base");e.href=t.href,r.head.appendChild(e)}}return r}class It extends Je{create(e,t,n){const s=new Et(n.get(We),At(n.get(Pt))),r=s.handle();return e.put(Lt,s),r.put(t),r}}const qt=new It,Kt=new b("page-cache-buster",{byDefault:Z(e=>new zt(e))});class zt{constructor(e){const t=Bt(e.get(Y).document);if(t){const n=e.get(We);this.urlModifier=S(e=>e.searchParams.set("__wesib_app_rev__",t)),this.agent=S((e,s)=>e(new Request(s.url,s)).thru_(e=>{if(e.ok){const s=Bt(e.document);if(s&&s!==t){const t=new URL(e.page.url.href);t.searchParams.set("__wesib_app_rev__",s),n.update(t),n.reload()}}return e}))}else this.urlModifier=S(),this.agent=S()}static get[_](){return Kt}}function Bt(e){var t;return null===(t=e.querySelector("meta[name=wesib-app-rev]"))||void 0===t?void 0:t.getAttribute("content")}function Ft(e){const t=e.get(Y).document;return e=>e().thru_(e=>{if(e.ok){const n=new Set(p(Ht(t,c(t.scripts)),([e])=>e));a(d(Ht(e.document,c(e.document.querySelectorAll("script"))),([e])=>!n.has(e)),([e,s])=>{Ut(s,t.head,(t,n)=>n.src=e),n.add(e)})}return e})}function Ht(e,t){return p(d(t,e=>!!e.src),t=>[new URL(t.src,e.baseURI).href,t])}function Vt(e){const t=e.get(Y).document;return e=>e().thru_(e=>{if(!e.ok)return e;const n=e.document.querySelectorAll("link[rel=stylesheet]");if(!n.length)return e;let s=t.head,r=null;const o=t.querySelectorAll("link[rel=stylesheet]"),i=new Map,u=o.item(0);return u&&(s=u.parentNode,r=u,a(c(o),e=>i.set(new URL(e.href,t.baseURI).href,e))),a(c(n),e=>{const n=new URL(e.href,t.baseURI).href,o=i.get(n);o?(f(i.keys())===n?(s=o.parentNode,r=o.nextSibling):s.insertBefore(o,r),i.delete(n)):Ut(e,s,r,(e,t)=>t.href=n)}),a(i.values(),e=>e.parentNode.removeChild(e)),e})}function Tt(e){const t=e.get(Y).document;return e=>e().thru_(e=>{if(e.ok){const n=e.document.getElementsByTagName("title").item(0);n&&n.textContent&&(t.title=n.textContent)}return e})}const Wt={needs:ct,setup(e){e.provide({a:Nt,by:e=>e.urlModifier,with:[zt]}),e.provide({a:jt,by:e=>e.agent,with:[zt]}),e.provide({a:jt,by:Ft}),e.provide({a:jt,by:Vt}),e.provide({a:jt,by:Tt})}};class Gt{static get[te](){return Wt}}function Jt(e={}){const n=e.onResponse?e.onResponse.bind(e):t,s=e.contentKey?e.contentKey.bind(e):Qt;return G({feature:{needs:Gt},define(t){t.whenComponent(t=>{const r=t.get(Y).document,o=t.get(J)(),i=t.get(We);let a=s(i.page);const c=()=>{const{fragment:n}=e;if(n)return n;const{element:{id:s,tagName:r}}=t;return s?{id:s}:{tag:r}};t.whenOn(e=>{const u=r.createRange();u.selectNodeContents(t.contentRoot),i.read.once(i=>{i.put(qt,{fragment:c(),receiver:{supply:e,receive:(e,i)=>function(e){const i=s(e.page);if(i===a)return;if(!e.ok)return void o(()=>n({context:t,range:u,response:e}));a=i,o(()=>{u.deleteContents();const s=r.createDocumentFragment(),{fragment:o}=e;o&&(Ct(o,s),u.insertNode(s)),n({context:t,range:u,response:e})})}(i)}})})})})}})}function Qt({url:e}){return new URL("",e).href}class Xt extends v{get upKey(){return this}constructor(){super("default-in-aspects")}grow(e){const t=e.context.get(Q);return V({scheduler:e.context.get(J[_].upKey),fns:e.seed}).keep.thru(({scheduler:[e],fns:n})=>_e(...n,be.to(e),we.to(t)))}}const Yt=new Xt,Zt=new x("input-from-control",{byDefault:()=>({})});function $t(e,t){const n=e.get(De).provide({a:Zt,by:()=>({root:e,control:t})});return C(n).needs(t)}function en(t){return G({define(n){n.whenComponent(n=>{const{up:s}=n.get(De);V({parent:s.keep.thru_(e=>e?k(e.get(Zt)):o({})),aspects:n.get(Yt)}).keep.thru_(({parent:[s],aspects:[r]})=>{if(s.control){const o=t({control:s,context:n,aspects:r});if(o)return o instanceof ge?e(o):k(o)}return e()}).consume((e,t)=>{if(!e)return;const s=$t(n,e);return(t||H(e)).needs(s),s})})}})}const tn=new x("input-to-form",{byDefault:()=>({})});function nn(t){const{select:n="form",pick:s={deep:!0,all:!0}}=t;return G({feature:{needs:Ve},define(r){r.whenComponent(r=>{const o=r.get(Le);r.whenOn(i=>{V({node:o.select(n,s).first,aspects:r.get(Yt)}).keep.thru(({node:[n],aspects:[s]})=>{if(!n)return e();const o=t.makeForm({node:n,context:r,aspects:s});return o?Array.isArray(o)?e(...o):k(o):e()}).tillOff(i).consume((e,t,n)=>{if(!e)return;const s=function(e,t,n){const s=e.get(De),r=s.provide({a:tn,by:()=>({root:e,control:t,form:n})});return s.provide({a:Zt,via:tn}),C(r).needs(t).needs(n)}(r,e,t);return n?n.needs(s):(H(t).needs(s),H(e).needs(s)),s})})})}})}function sn(e={}){const{cancel:t=!0}=e;return pe(({get:e})=>({componentDef:{define(n){n.whenComponent(n=>{n.whenOn(s=>{const r=n.get(De),{component:o}=n;r.get(tn).consume(n=>{if(!n.control)return;const r=new N(n.form.element);H(r).needs(s);const i=r.on("submit");return(t?i.instead:i)(t=>e(o).call(o,n,t))})})})}}}))}function rn(e){const t="string"==typeof e?s(S(e)):t=>{const n=e(t);return"string"==typeof n?S(n):n};return G({define(e){e.whenComponent(e=>{const n=e.get(De);V({group:n.up.keep.thru_(e=>e?k(e.get(Zt)):o({}),({control:e})=>e&&e.aspect(me)),control:n.get(Zt),name:t(e)}).consume(({group:[e],control:[{control:t}],name:[n]})=>{if(null!=n&&e&&t&&e!==t)return e.controls.set(n,t)})})}})}function on(t){const{select:n="input",pick:s={deep:!0,all:!0}}=t;return G({feature:{needs:Ve},define(r){r.whenComponent(r=>{const o=r.get(Le);r.whenOn(i=>{V({node:o.select(n,s).first,aspects:r.get(Yt)}).keep.thru(({node:[n],aspects:[s]})=>{if(!n)return e();const o=t.makeControl({node:n,context:r,aspects:s});return o?o instanceof ge?e(o):k(o):e()}).tillOff(i).consume((e,t)=>{if(!e)return;const n=$t(r,e);return(t||H(e)).needs(n),n})})})}})}export{ht as A,en as C,Yt as D,nn as F,Oe as H,Jt as I,We as N,sn as O,Je as P,rn as S,on as U,_t as a,kt as b,De as c,St as d,tn as e,Ve as f,Le as g};//# sourceMappingURL=generic.69e1c9fe.js.map
