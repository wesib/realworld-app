const e={by(e={}){let t;return{get node(){return e.node},get window(){return t||(t=e.window||e.node&&((s=e.node).ownerDocument||s).defaultView||window);var s},error(...t){e&&e.error?e.error(...t):console.error(...t)}}}};const t=Symbol("render-q");class s{constructor(e,t){this.q=e,this.schedule=this.doSchedule,this.ref=t||[this,this]}static by(e,r){return e[t]||(e[t]=new s(e,r))}add(e){this.q.add(e)}doSchedule(e){this.schedule=()=>{};const t=[],s={get config(){return e},postpone(e){t.unshift(e)}};this.q.schedule((()=>{const e=this.reset();e.suspend(),this.exec(s),this.ref[1]=this.ref[0],t.forEach((e=>this.q.add(e))),s.postpone=e=>this.q.post(e),this.exec(s),e.resume()}))}exec(e){for(;;){const t=this.q.pull();if(!t)break;t(e)}}reset(){return this.ref[0]=s.by(this.q.reset(),this.ref)}suspend(){this.schedule=e=>{this.scheduled=e,this.schedule=()=>{}}}resume(){this.scheduled?this.doSchedule(this.scheduled):this.schedule=this.doSchedule}}function r(t){return r=>{const n=e.by(r),o=s.by(t.newQueue(n)).ref;let c=[];return e=>{const[t,,s]=c,[r,u]=o;let h=t||u;if(t===u&&!s||t===r)c[1]=e;else{const t=c=[h=s?r:u,e];h.add((e=>{t[2]=!0;try{t[1]({get config(){return n},postpone(t){e.postpone(t)}})}catch(e){n.error(e)}}))}h.schedule(n)}}}const n={by({schedule:e,replace:t=(()=>{})}){const s=[];return{schedule:e,add(e){s.push(e)},post(e){s.unshift(e)},pull:()=>s.shift(),reset(){const s=n.by({schedule:e,replace:t});return t(s),s}}}},o=new WeakMap,c=t=>{const s=e.by(t);return e=>{const t=[],r={get config(){return s},postpone(e){t.push(e)}};for(n(e);;){const e=t.pop();if(!e)break;n(e)}function n(e){try{e(r)}catch(e){s.error(e)}}}};let u=r({newQueue({window:e}){const t=o.get(e);if(t)return t;const s=n.by({schedule:t=>e.requestAnimationFrame(t),replace:t=>o.set(e,t)});return o.set(e,s),s}});function h(e){return u(e)}export{c as i,h as n};//# sourceMappingURL=render-scheduler.f464fdbf.js.map
