!function(e){var t={};function r(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=4)}([function(e,t){e.exports=React},function(e,t,r){"use strict";var n=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});var a=n(r(0));t.default=function(e){var t=e.ariaCurrent,r=e.href,n=e.rel,o=e.target,u=e.children;return a.createElement("li",{className:"g-main-nav__item"},a.createElement("a",{"aria-current":t||"",href:r,rel:n,target:o},void 0!==u?u:a.createElement(a.Fragment,null," Example item text ")))}},function(e,t){e.exports=ReactDOM},function(e,t,r){"use strict";var n=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});var a=n(r(0));t.default=function(e){var t=e.children;return a.createElement("nav",{"aria-label":"Main",className:"g-main-nav",role:"navigation"},a.createElement("ul",null,void 0!==t?t:a.createElement(a.Fragment,null," MainNavItem components go here ")))}},function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),o=r(2),u=r.n(o),l=r(3),i=r.n(l),c=r(1),f=r.n(c);function v(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var r=[],n=!0,a=!1,o=void 0;try{for(var u,l=e[Symbol.iterator]();!(n=(u=l.next()).done)&&(r.push(u.value),!t||r.length!==t);n=!0);}catch(e){a=!0,o=e}finally{try{n||null==l.return||l.return()}finally{if(a)throw o}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var d=function(e){var t=e.children;return a.a.createElement(n.Fragment,null,t)},m=function(e){return a.a.createElement(d,s({title:"Example: MainNav"},p({})),a.a.createElement(i.a,p({}),a.a.createElement(f.a,s({href:"/"},p({})),"Home"),a.a.createElement(f.a,s({href:"/about"},p({})),"About"),a.a.createElement(f.a,s({href:"/contact"},p({})),"Contact")))},p=function(e){var t=v(Object(n.useState)(e&&e.value),2),r=t[0],a=t[1],o=v(Object(n.useState)(e&&e.value2),2),u=o[0],l=o[1],i=v(Object(n.useState)(e&&e.value3),2),c=i[0],f=i[1];return{value:r,value2:u,value3:c,onChange:function(e){return a(e.target.value)},onChange2:function(e){return l(e.target.value)},onChange3:function(e){return f(e.target.value)}}};document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelector("#root");e?u.a.hydrate(a.a.createElement(m,null),e,window.afterRender):console.error("Couldn't find app mount point ","#root")}))}]);