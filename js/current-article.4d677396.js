import{S as t}from"./lib/context-values.10677615.js";import{V as s,t as i,j as e,i as r,s as a}from"./lib/fun-events.f47c7338.js";const n={},c=new t("current-article",{byDefault:()=>n});class u extends s{constructor(){super(...arguments),this._it=i(n)}get[e](){return r(this._it)}get it(){return this._it.it}set it(t){this._it.it=t}on(t){return(this.on=this._it.on().F)(t)}set(t){this.it=this.cast(t)}byArticles(t){return this.by(a(t).thru_(t=>this.cast(t)))}cast(t){return t.slug?Object.assign(Object.assign({},t),{update:t=>this.set(t)}):n}}export{c as C,u as a,n};//# sourceMappingURL=current-article.4d677396.js.map
