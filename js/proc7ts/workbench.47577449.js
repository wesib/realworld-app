import{n as t,v as s,S as e,o as r}from"./primitives.3596c309.js";class n extends TypeError{constructor(t,s,e,r=t.workName(s)+(void 0!==e?` already terminated (${e})`:" already done")){super(r),this.workload=t,this.work=s,this.reason=e}}class o{constructor(t,s){this.name=t,this.allocator=s}workName(t){return`The work of ${this.name}`}toString(){return`Workload(${this.name})`}}class a{constructor(t){this._allotment=t,this._queues=new Map}runAfter(t,s){let e=this._queues.get(t);return e||(e=new i(this._allotment),this._queues.set(t,e)),e.enqueue(s)}}class i{constructor(t){this._allotment=t,this._tasks=[]}enqueue(t){return new Promise((s=>{const e={task:t,run:()=>{s(this._allotment.run(t).finally((()=>{this._tasks.shift(),this._runNext()})))}};this._tasks.push(e),1===this._tasks.length&&this._runNext()}))}_runNext(){const[t]=this._tasks;t&&t.run()}}class h extends o{constructor(){super("ordering",{start:t=>new a(t)})}}h.$=new h;class l extends o{constructor(t,s={}){super(t,{start(t){const{workbench:e,workload:r,supply:n}=t,o=new c(t,s);return{workbench:e,stage:r,supply:n,async run(t){return await o.run(this,t)}}}})}workName(t){return`The ${this.name} stage`}toString(){return`WorkStage(${this.name})`}}class c{constructor(t,s){this.allotment=t,this.allocator=s,this._whenTaskDone=Promise.resolve();const{supply:e}=t;this._whenAllDone=new Promise((t=>this._end=t)).then((()=>e.off())).catch((t=>e.off(t))),e.whenOff((s=>{void 0===s?this._end():this._end(Promise.reject(s)),this.run=(e,r)=>Promise.reject(new n(t.workload,e,s))}))}run(t,s){const e=this._start(t).then((()=>this.allotment.run(s)));return this._addTask(e),e}_addTask(s){const e=this._whenTaskDone=Promise.all([this._whenTaskDone,s.catch(t)]);e.finally((()=>{e===this._whenTaskDone&&this._end(e)}))}_start(t){let e=this._awaitDeps();return this.allocator.start&&(e=e.then((async()=>{await this.allocator.start(t)}))),this._start=s(e),this._addTask(e),e}_awaitDeps(){const s=[],e=e=>{s.push(new Promise((s=>{this.allotment.workbench.work(h.$).runAfter(e,(()=>(s(),this._whenAllDone))).catch(t)})))},{after:r}=this.allocator;return r&&e(r),e(this.allotment.workload),Promise.all(s)}}const u=Symbol("Workbench.impl");class w{constructor(t,s){this.workbench=t,this._works=new Map;const{supply:o=r(),run:a}=s;this.supply=new e((t=>{this.work=s=>{throw new n(s,void 0,t,"The workbench is stopped")}})).needs(o).cuts(o),this._run=a?a.bind(s):k}work(s){if(this._works.has(s))return this._works.get(s);let r=t;const o=async(t,e)=>{const n=await this._run(e,t,s);return r(),n},a=(new e).needs(this.supply);let i,h,l;const c=new Promise((t=>{i=e=>(h=e,this._works.set(s,e),l=async t=>await o(e,t),t(e),e)}));return l=async t=>await o(await c,t),a.whenOff((t=>{l=r=()=>{throw new n(s,h,t)},this._works.delete(s)})),i(s.allocator.start({workbench:this.workbench,workload:s,supply:a,run:async t=>await l(t)}))}}async function k(t,s,e){return await t()}class _{constructor(t={}){this[u]=new w(this,t)}get supply(){return this[u].supply}work(t){return this[u].work(t)}}export{_ as W,l as a};//# sourceMappingURL=workbench.47577449.js.map