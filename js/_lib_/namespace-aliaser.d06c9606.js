class s{name(s,t){if("string"==typeof s)return s;const[n,e]=s;return e.name(t(e),n,this)}}class t extends s{applyAlias(s,t){return`${t}-${s}`}}const n=new t,e=new t;class r extends s{applyAlias(s,t){return`${s}@${t}`}}const a=new r;class i{constructor(s,...t){this.url=s,this.aliases=t}get alias(){return this.aliases[0]||"ns"}name(s,t,e=n){return e.applyAlias(t,s,this)}}function o(s){return"string"==typeof s||function(s){return Array.isArray(s)&&2===s.length&&"string"==typeof s[0]&&s[1]instanceof i}(s)}function c(){const s=new Map,t=new Map;return function(n){const e=s.get(n.url);if(e)return e;const r=n.alias;let a=0;for(const e of[r,...n.aliases]){const r=t.get(e);if(!r)return s.set(n.url,e),t.set(e,1),e;a||(a=r)}const i=r+ ++a;return s.set(n.url,i),t.set(r,a),i}}export{i as N,a as c,e as h,o as i,c as n};//# sourceMappingURL=namespace-aliaser.d06c9606.js.map
