import"../proc7ts/fun-events.1cfe5573.js";import{c as e}from"../proc7ts/namespace-aliaser.1d67b636.js";import{f as t,R as o,C as n,B as r,g as s,h as a,i as c,j as i,k as d,l}from"../wesib/wesib.156124a1.js";import{_ as m}from"../helpers.920c7f83.js";import{C as f}from"../core.c852ba8c.js";import{A as p}from"./input.90816ae4.js";let u=class{constructor(e){this._context=e}render(){const{document:e}=this._context.get(r),t=e.createRange();return t.selectNodeContents(this._context.contentRoot),()=>{t.deleteContents(),null!=this.loadError&&t.insertNode(e.createTextNode(this.loadError))}}};function h(e={}){return s(({get:t,key:n})=>{const{comment:s=String(n),render:c}=e;return{componentDef:o(c).As((function(){const e=a.of(this),{document:o}=e.get(r),{contentRoot:n}=e,c=n.appendChild(o.createComment(`[${s}[`)),i=n.appendChild(o.createComment(`]${s}]`)),d=o.createRange();return d.setStartAfter(c),d.setEndBefore(i),()=>{d.deleteContents();const e=t(this).call(this);if(e)if("string"==typeof e){const t=o.createElement("template");t.innerHTML=e,d.insertNode(t.content)}else d.insertNode(e)}}),n)}})}m([t("load-error")],u.prototype,"loadError",void 0),m([o()],u.prototype,"render",null),u=m([n(["loader",f])],u);const g=Symbol("load-status"),C=["loaded",f];function R(t={}){return s(({get:n,set:r,key:s})=>{const{render:m={},loaded:f=C,comment:R=String(s)}=t,E=[l,g,s];let j;const A=c.fulfill({on:E},m);return{componentDef:i.all({feature:{needs:u},define(t){j=e.name(f,t.get(d)),m.on&&t.whenComponent(e=>{c.trigger(e,m).to(()=>e.updateState(E,"new","old"))})}},o(A).As((function(){const{element:e}=a.of(this);return t=>{const o=n(this);o&&o.ok?t.postpone(()=>{e.classList.add(j)}):e.classList.remove(j)}}),s),h({render:A,comment:`LOADER(${R})`}).As((function(){return n(this)?void 0:document.createElement("conduit-loader")}),s),h({render:A,comment:`ERRORS(${R})`}).As((function(){const e=n(this);return e&&!e.ok?a.of(this).get(p)(e.errors):void 0}),s)),get:n,set(e,t){const o=n(e);r(e,t),a.of(e).updateState(E,t,o)}}})}export{u as L,h as R,R as a};//# sourceMappingURL=loader.c8c55104.js.map
