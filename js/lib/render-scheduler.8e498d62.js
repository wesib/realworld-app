const e={by(e={}){let t;return{get node(){return e.node},get window(){return t||(t=e.window||e.node&&((s=e.node).ownerDocument||s).defaultView||window);var s},error(...t){e&&e.error?e.error(...t):console.error(...t)}}}};const t=Symbol("render-q");class s{constructor(e,t){this.q=e,this.schedule=this.doSchedule,this.ref=t||[this,this]}static by(e,r){return e[t]||(e[t]=new s(e,r))}add(e){this.q.add(e)}doSchedule(e){this.schedule=()=>{};const t=[],s={get config(){return e},postpone(e){t.push(e)}};this.q.schedule(()=>{const e=this.reset();e.suspend(),this.exec(s),this.ref[1]=this.ref[0],t.forEach(s.postpone=e=>this.q.add(e)),this.exec(s),e.resume()})}exec(e){for(;;){const t=this.q.pull();if(!t)break;t(e)}}reset(){return this.ref[0]=s.by(this.q.reset(),this.ref)}suspend(){this.schedule=e=>{this.scheduled=e,this.schedule=()=>{}}}resume(){this.scheduled?this.doSchedule(this.scheduled):this.schedule=this.doSchedule}}function r(t){return r=>{const n=e.by(r),o=s.by(t.newQueue(n)).ref;let c=[];return e=>{const[t,,s]=c,[r,h]=o;let u=t||h;if(t===h&&!s||t===r)c[1]=e;else{const t=c=[u=s?r:h,e];u.add(e=>{t[2]=!0;try{t[1]({get config(){return n},postpone(t){e.postpone(t)}})}catch(e){n.error(e)}})}u.schedule(n)}}}const n={by({schedule:e,replace:t=(()=>{})}){const s=[];return{schedule:e,add(e){s.push(e)},pull:()=>s.shift(),reset(){const s=n.by({schedule:e,replace:t});return t(s),s}}}},o=new WeakMap;let c=r({newQueue({window:e}){const t=o.get(e);if(t)return t;const s=n.by({schedule:t=>e.requestAnimationFrame(t),replace:t=>o.set(e,t)});return o.set(e,s),s}});function h(e){return c(e)}export{h as n};//# sourceMappingURL=render-scheduler.8e498d62.js.map
