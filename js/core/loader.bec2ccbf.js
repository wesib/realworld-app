import"../proc7ts/fun-events.cf42a1d4.js";import{c as e}from"../proc7ts/namespace-aliaser.b34c0889.js";import{f as t,R as o,C as n,B as r,g as s,h as a,i as c,j as i,k as d,l}from"../wesib/wesib.d8a927dd.js";import{_ as m}from"../helpers.e1623395.js";import{C as u}from"../core.714cbb7b.js";import{A as f}from"./input.b5d7b961.js";let p=(()=>{let e=class{constructor(e){this._context=e}render(){const{document:e}=this._context.get(r),t=e.createRange();return t.selectNodeContents(this._context.contentRoot),()=>{t.deleteContents(),null!=this.loadError&&t.insertNode(e.createTextNode(this.loadError))}}};return m([t("load-error")],e.prototype,"loadError",void 0),m([o()],e.prototype,"render",null),e=m([n(["loader",u])],e),e})();function h(e={}){return s(({get:t,key:n})=>{const{comment:s=String(n),render:c}=e;return{componentDef:o(c).As((function(){const e=a.of(this),{document:o}=e.get(r),{contentRoot:n}=e,c=n.appendChild(o.createComment(`[${s}[`)),i=n.appendChild(o.createComment(`]${s}]`)),d=o.createRange();return d.setStartAfter(c),d.setEndBefore(i),()=>{d.deleteContents();const e=t(this).call(this);if(e)if("string"==typeof e){const t=o.createElement("template");t.innerHTML=e,d.insertNode(t.content)}else d.insertNode(e)}}),n)}})}const g=Symbol("load-status"),C=["loaded",u];function R(t={}){return s(({get:n,set:r,key:s})=>{const{render:m={},loaded:u=C,comment:R=String(s)}=t,b=[l,g,s];let E;const j=c.fulfill({on:b},m);return{componentDef:i.all({feature:{needs:p},define(t){E=e.name(u,t.get(d)),m.on&&t.whenComponent(e=>{c.trigger(e,m).to(()=>e.updateState(b,"new","old"))})}},o(j).As((function(){const{element:e}=a.of(this);return t=>{const o=n(this);o&&o.ok?t.postpone(()=>{e.classList.add(E)}):e.classList.remove(E)}}),s),h({render:j,comment:`LOADER(${R})`}).As((function(){return n(this)?void 0:document.createElement("conduit-loader")}),s),h({render:j,comment:`ERRORS(${R})`}).As((function(){const e=n(this);return e&&!e.ok?a.of(this).get(f)(e.errors):void 0}),s)),get:n,set(e,t){const o=n(e);r(e,t),a.of(e).updateState(b,t,o)}}})}export{p as L,h as R,R as a};//# sourceMappingURL=loader.bec2ccbf.js.map
