import{o as m,M as d,l as b,N as y,av as g,aw as T}from"./index-59s5irdc.js";function C(e){return g()?(T(e),!0):!1}function l(e){return typeof e=="function"?e():b(e)}const D=typeof window!="undefined"&&typeof document!="undefined";typeof WorkerGlobalScope!="undefined"&&globalThis instanceof WorkerGlobalScope;const S=Object.prototype.toString,P=e=>S.call(e)==="[object Object]",f=()=>{};function h(e,o){function n(...t){return new Promise((i,r)=>{Promise.resolve(e(()=>o.apply(this,t),{fn:o,thisArg:this,args:t})).then(i).catch(r)})}return n}function j(e,o={}){let n,t,i=f;const r=c=>{clearTimeout(c),i(),i=f};return c=>{const a=l(e),s=l(o.maxWait);return n&&r(n),a<=0||s!==void 0&&s<=0?(t&&(r(t),t=null),Promise.resolve(c())):new Promise((u,p)=>{i=o.rejectOnCancel?p:u,s&&!t&&(t=setTimeout(()=>{n&&r(n),t=null,u(c())},s)),n=setTimeout(()=>{t&&r(t),t=null,u(c())},a)})}}function w(e){return y()}function W(e,o=200,n={}){return h(j(o,n),e)}function F(e,o=!0,n){w()?m(e,n):o?e():d(e)}export{l as a,D as b,C as c,P as i,f as n,F as t,W as u};