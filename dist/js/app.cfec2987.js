(function(e){function t(t){for(var r,a,u=t[0],f=t[1],i=t[2],l=0,s=[];l<u.length;l++)a=u[l],Object.prototype.hasOwnProperty.call(c,a)&&c[a]&&s.push(c[a][0]),c[a]=0;for(r in f)Object.prototype.hasOwnProperty.call(f,r)&&(e[r]=f[r]);d&&d(t);while(s.length)s.shift()();return o.push.apply(o,i||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,a=1;a<n.length;a++){var f=n[a];0!==c[f]&&(r=!1)}r&&(o.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},c={app:0},o=[];function a(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-2d0d63f1":"8fd71a01","chunk-741f5406":"a9e3f32f","chunk-2d0e9d43":"609f809b","chunk-2d210c47":"4c153165","chunk-47cfa345":"441f6ebd","chunk-5fc6a914":"3633f032","chunk-b241cc72":"1f8081cc"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n=c[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=c[e]=[t,r]}));t.push(n[2]=r);var o,f=document.createElement("script");f.charset="utf-8",f.timeout=120,u.nc&&f.setAttribute("nonce",u.nc),f.src=a(e);var i=new Error;o=function(t){f.onerror=f.onload=null,clearTimeout(l);var n=c[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;i.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",i.name="ChunkLoadError",i.type=r,i.request=o,n[1](i)}c[e]=void 0}};var l=setTimeout((function(){o({type:"timeout",target:f})}),12e4);f.onerror=f.onload=o,document.head.appendChild(f)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/",u.oe=function(e){throw console.error(e),e};var f=window["webpackJsonp"]=window["webpackJsonp"]||[],i=f.push.bind(f);f.push=t,f=f.slice();for(var l=0;l<f.length;l++)t(f[l]);var d=i;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),c={id:"nav"},o=Object(r["f"])("Home"),a=Object(r["f"])(" | "),u=Object(r["f"])("Contact"),f=Object(r["f"])(" | "),i=Object(r["f"])("Info"),l=Object(r["f"])(" | "),d=Object(r["f"])("Dashboard"),s=Object(r["f"])(" | "),b=Object(r["f"])("Stats");function p(e,t,n,p,h,j){var m=Object(r["w"])("router-link"),O=Object(r["w"])("router-view");return Object(r["p"])(),Object(r["d"])(r["a"],null,[Object(r["g"])("div",c,[Object(r["g"])(m,{to:"/"},{default:Object(r["E"])((function(){return[o]})),_:1}),a,Object(r["g"])(m,{to:"/contact"},{default:Object(r["E"])((function(){return[u]})),_:1}),f,Object(r["g"])(m,{to:"/info"},{default:Object(r["E"])((function(){return[i]})),_:1}),l,Object(r["g"])(m,{to:"/dashboard"},{default:Object(r["E"])((function(){return[d]})),_:1}),s,Object(r["g"])(m,{to:"/stats"},{default:Object(r["E"])((function(){return[b]})),_:1})]),Object(r["g"])(O)],64)}n("64be");const h={};h.render=p;var j=h,m=(n("d3b7"),n("8c4f")),O={class:"home"};function v(e,t,n,c,o,a){var u=Object(r["w"])("HelloWorld");return Object(r["p"])(),Object(r["d"])("div",O,[Object(r["g"])(u,{msg:"Welcome to Covid19 website"})])}var g=Object(r["G"])("data-v-43f48a4c");Object(r["s"])("data-v-43f48a4c");var k={class:"hello"};Object(r["q"])();var y=g((function(e,t,n,c,o,a){return Object(r["p"])(),Object(r["d"])("div",k,[Object(r["g"])("h1",null,Object(r["y"])(n.msg),1)])})),w={name:"HelloWorld",props:{msg:String}};n("ffd7");w.render=y,w.__scopeId="data-v-43f48a4c";var _=w,P={name:"Home",components:{HelloWorld:_}};P.render=v;var E=P,S=[{path:"/",name:"Home",component:E},{path:"/contact",name:"Contact",component:function(){return Promise.all([n.e("chunk-741f5406"),n.e("chunk-2d210c47")]).then(n.bind(null,"b8fa"))}},{path:"/info",name:"Info",component:function(){return Promise.all([n.e("chunk-741f5406"),n.e("chunk-47cfa345")]).then(n.bind(null,"2469"))}},{path:"/dashboard",name:"Dashboard",component:function(){return n.e("chunk-2d0d63f1").then(n.bind(null,"7277"))},children:[{path:"/dashboard/hospital",name:"Hospital",component:function(){return Promise.all([n.e("chunk-741f5406"),n.e("chunk-2d0e9d43")]).then(n.bind(null,"8ecc"))}},{path:"/dashboard/medical_college",name:"Medical_College",component:function(){return Promise.all([n.e("chunk-741f5406"),n.e("chunk-5fc6a914")]).then(n.bind(null,"a6c0"))}},{path:"",redirect:"/dashboard/hospital"}]},{path:"/stats",name:"Stats",component:function(){return Promise.all([n.e("chunk-741f5406"),n.e("chunk-b241cc72")]).then(n.bind(null,"ed93"))}}],H=Object(m["a"])({history:Object(m["b"])("/"),routes:S}),x=H;Object(r["c"])(j).use(x).mount("#app")},"64be":function(e,t,n){"use strict";n("c894")},c894:function(e,t,n){},f540:function(e,t,n){},ffd7:function(e,t,n){"use strict";n("f540")}});
//# sourceMappingURL=app.cfec2987.js.map