import{n as t}from"../proc7ts/call-thru.7c911e58.js";import{o as e,a as s}from"../proc7ts/a-iterable.8530fe0e.js";import{F as n}from"../proc7ts/context-values.873a330b.js";import{g as o,b as i,f as r}from"../proc7ts/fun-events.52c596e5.js";import{a,B as l,D as u,A as c,R as d,C as p,c as h,d as m,S as v,e as f,t as b,F as _}from"../wesib/wesib.1dc70a8b.js";import{_ as g}from"../helpers.e1623395.js";import{a as x,I as y,C as k,b as w,c as j,D as C,F as E,U as T}from"../wesib/generic.14416616.js";import{D as A}from"../proc7ts/delta-set.d9ebb9ee.js";import{A as B,a as F,b as S,c as D,i as I,d as O,e as M,f as R,g as z,h as q,j as N,k as $,l as K}from"../proc7ts/input-aspects.2834ba67.js";import{C as L}from"../core.c852ba8c.js";const U=new n("api-error-generator",{byDefault:a(t=>{const s=t.get(l).document;return t=>{let n;for(const[o,i]of e(t)){n||(n=s.createElement("ul"),n.classList.add("error-messages"));const t=n;i.forEach(e=>{const n=s.createElement("li");n.innerText=`${o} ${e}`,t.appendChild(n)})}return n}})});class H extends CustomEvent{}const G=/\s$/;let J=(()=>{let t=class{constructor(t){this._context=t,this._values=new A}get input(){if(this._input)return this._input;const{element:t}=this._context;return this._input=t.querySelector("input"),this._input.onblur=this._input.onchange=this._handleBlur.bind(this),this._input.oninput=this._handleInput.bind(this),this._input.onkeydown=this._handleKeydown.bind(this),this._input}get datalist(){if(this._datalist)return this._datalist;const{element:t}=this._context;return this._datalist=t.querySelector("datalist"),this._datalist}get values(){return Array.from(this._values)}set values(t){this._values.clear(),this._values.delta(t||[])}get readonly(){return this.input.disabled||this.input.readOnly}setDisabled(t){null!=t?this.input.setAttribute("disabled",t):this.input.removeAttribute("disabled")}setReadonly(t){null!=t?this.input.setAttribute("readonly",t):this.input.removeAttribute("readonly")}render(){const{contentRoot:t,element:e}=this._context,{document:n}=this._context.get(l);t.innerHTML="<style>\n:host {\n  border: var(--multi-input-border, 1px solid #ddd);\n  display: block;\n  overflow: hidden;\n  padding: 5px;\n}\n/* NB use of pointer-events to only allow events from the \xd7 icon */\n::slotted(div.item) {\n  background-color: var(--multi-input-item-bg-color, #dedede);\n  border: var(--multi-input-item-border, 1px solid #ccc);\n  border-radius: 2px;\n  color: #222;\n  display: inline-block;\n  font-size: var(--multi-input-item-font-size, 14px);\n  margin: 5px;\n  padding: 2px 25px 2px 5px;\n  pointer-events: none;\n  position: relative;\n  top: -1px;\n}\n/* NB pointer-events: none above */\n::slotted(div.item:hover) {\n  background-color: #eee;\n  color: black;\n}\n::slotted(input) {\n  border: none;\n  font-size: var(--multi-input-input-font-size, 14px);\n  outline: none;\n  padding: 10px 10px 10px 5px;\n}\n</style>\n<slot></slot>",e.insertBefore(n.createComment("[ITEMS["),this.input);const o=e.insertBefore(n.createComment("]ITEMS]"),this.input),i=t=>{const e=t+" ";for(const t of s(this.datalist.options))if(t.value===e)return t},r=t=>{for(const n of s(e.querySelectorAll(".item")))if(n.textContent===t)return n};return()=>{this._values.redelta({add:t=>{var s;if(!r(t)){const s=n.createElement("div");s.className="item",s.textContent=t,s.onclick=()=>{this.readonly||this._delete(t)},e.insertBefore(s,o)}null===(s=i(t))||void 0===s||s.remove()},delete:t=>{var e;if(null===(e=r(t))||void 0===e||e.remove(),!i(t)){const e=n.createElement("option");e.value=t+" ",this.datalist.appendChild(e)}}}).undelta()}}_add(t,e=!1){(e||G.test(t))&&(t=t.trim())&&(this._values.add(t),this.input.value="",this._sendEvent())}_delete(t){this._values.delete(t),this._sendEvent()}_handleBlur(){const{value:t}=this.input;this.input.value="",this._add(t,!0)}_handleInput(){this._add(this.input.value)}_handleKeydown(t){if(this.input.value||"Backspace"!==t.key)this._add(this.input.value);else{const{values:t}=this;t.length&&this._delete(t[t.length-1])}}_sendEvent(){this._context.updateState(m("values"),this.values,this.values),this._context.dispatchEvent(new H("conduit:input",{bubbles:!0,detail:this.values}))}};return g([u()],t.prototype,"values",null),g([c("disabled")],t.prototype,"setDisabled",null),g([c("readonly")],t.prototype,"setReadonly",null),g([d()],t.prototype,"render",null),t=g([p(["multi-input",L]),h()],t),t})();class P extends B{constructor(t,{aspects:e}={}){super(t,{aspects:e,get:()=>t.values,set:e=>t.values=e})}listenForInput(t){this.events.on("conduit:input").to(e=>{t({event:e,value:e.detail})})}}function Q(t,{aspects:e}={}){return new P(t,{aspects:e})}function V({mark:e="is-invalid",when:s}={}){return n=>{const r=n.aspect(F);return o({status:n.aspect(S),validity:n.aspect(D)}).keepThru(({status:[{touched:n,hasFocus:o}],validity:[a]})=>{const l=a.has("incomplete")||a.has("missing");return!n||o&&l?t():i(r.specs(I({mark:e,when:s})))})}}const W={};let X=(()=>{let e=class{constructor(e){this._context=e,this.errors=W,e.get(x).get(y).thru_(({control:e})=>e?i(e.aspect(D).read().keepThru_(t=>t.messages("api").reduce((t,e)=>Object.assign(Object.assign({},t),e.api),W))):t(W)).to(t=>this.errors=t)}render(){const{contentRoot:t}=this._context;let e;return()=>{e&&(e.remove(),e=void 0),e=this._context.get(U)(this.errors),e&&t.append(e)}}};return g([v()],e.prototype,"errors",void 0),g([d()],e.prototype,"render",null),e=g([p(["api-errors",L])],e),e})(),Y=(()=>{let t=class{};return t=g([p(["in-error",L],f("code"),k(({control:{control:t},aspects:e,context:s})=>b(s,"code").read().keepThru_(t=>t?t.trim().split(/\s+/):[]).keepThru(n=>t.convert(O.to(s.element),e).setup(F,t=>{t.add(M()),t.add(V({when:n}))}))))],t),t})(),Z=(()=>{let t=class{};return t=g([_({needs:[X,Y]})],t),t})();function tt({emptyModel:t={},form:e={makeForm({node:e,aspects:s}){const n=z(t).setup(F,t=>t.add(M())).setup(q,t=>t.derive(N())),o=$(e.element,{form:n,aspects:s}).setup(F,t=>t.add(n.aspect(F)));return[n,o]}},button:s}={}){return p(E(e),function({select:t="button",pick:e={deep:!0,all:!0}}={}){return p({define(s){s.whenComponent(s=>{const n=s.get(w),i=s.get(x);s.whenConnected(()=>{o({form:i.get(j),button:n.select(t,e).first(),aspects:s.get(C)}).tillOff(s).consume(({form:[{control:t}],button:[e],aspects:[s]})=>t&&e&&R(e.element,{form:t,aspects:s}))})})}})}(s))}function et(e){return T(Object.assign(Object.assign({},e),{makeControl:s=>s.context.get(x).get(j).keepThru_(({form:n})=>{const o=e.makeControl(s);return o?o instanceof K?a(o):i(r(o).keepThru_((e,s)=>e?(a(e),s?t(e,s):t(e)):t())):t();function a(t){n&&t.aspect(q).derive(n.aspect(q));const e=t.aspect(F);return e.add(M()),e.add(V()),t}})}))}export{U as A,Z as C,tt as F,J as M,et as U,Q as i};//# sourceMappingURL=input.4b28550f.js.map
