var d=(o,r,n)=>new Promise((s,t)=>{var i=e=>{try{a(n.next(e))}catch(c){t(c)}},l=e=>{try{a(n.throw(e))}catch(c){t(c)}},a=e=>e.done?s(e.value):Promise.resolve(e.value).then(i,l);a((n=n.apply(o,r)).next())});import{t as w,u as m,v as p,w as h,x as f}from"./index-1b959967.js";import"./frappe-ui-02049d65.js";/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const v=()=>{const o=window;o.addEventListener("statusTap",()=>{w(()=>{const r=o.innerWidth,n=o.innerHeight,s=document.elementFromPoint(r/2,n/2);if(!s)return;const t=m(s);t&&new Promise(i=>p(t,i)).then(()=>{h(()=>d(void 0,null,function*(){t.style.setProperty("--overflow","hidden"),yield f(t,300),t.style.removeProperty("--overflow")}))})})})};export{v as startStatusTap};
//# sourceMappingURL=status-tap-f5da01aa.js.map
