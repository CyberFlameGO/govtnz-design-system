!function(e){var t={};function n(a){if(t[a])return t[a].exports;var r=t[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(a,r,function(t){return e[t]}.bind(null,r));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([function(e,t){e.exports=React},function(e,t){e.exports=ReactDOM},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(1),i=n.n(l),c=function(e){var t=e.children;return a.createElement("span",{className:"g-caption-xl"},void 0!==t?t:a.createElement(a.Fragment,null,"Example text"))},o={styleSize:{xlarge:"g-heading-xl",large:"g-heading-l",medium:"g-heading-m",small:"g-heading-s",xsmall:"g-heading-xs",xxsmall:"g-heading-xxs"}},m=function(e){var t=e.styleSize,n=e.marginBottom8,r=e.id,l=e.children;return a.createElement("h1",{className:"".concat(void 0!==o.styleSize[t]?o.styleSize[t]:"").concat(n?" g-heading-mb-8":""),id:r},void 0!==l?l:a.createElement(a.Fragment,null,"Example text"))},u=function(e){var t=e.children;return a.createElement("span",{className:"g-caption-l"},void 0!==t?t:a.createElement(a.Fragment,null,"Example text"))},g={styleSize:{xlarge:"g-heading-xl",large:"g-heading-l",medium:"g-heading-m",small:"g-heading-s",xsmall:"g-heading-xs",xxsmall:"g-heading-xxs"}},d=function(e){var t=e.styleSize,n=e.marginBottom8,r=e.id,l=e.children;return a.createElement("h2",{className:"".concat(void 0!==g.styleSize[t]?g.styleSize[t]:"").concat(n?" g-heading-mb-8":""),id:r},void 0!==l?l:a.createElement(a.Fragment,null,"Example text"))},s=function(e){var t=e.children;return a.createElement("span",{className:"g-caption-m"},void 0!==t?t:a.createElement(a.Fragment,null,"Example text"))},x={styleSize:{xlarge:"g-heading-xl",large:"g-heading-l",medium:"g-heading-m",small:"g-heading-s",xsmall:"g-heading-xs",xxsmall:"g-heading-xxs"}},f=function(e){var t=e.styleSize,n=e.marginBottom8,r=e.id,l=e.children;return a.createElement("h3",{className:"".concat(void 0!==x.styleSize[t]?x.styleSize[t]:"").concat(n?" g-heading-mb-8":""),id:r},void 0!==l?l:a.createElement(a.Fragment,null,"Example text"))};function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var h=function(e){var t=e.children;return r.a.createElement(a.Fragment,null,t)},v=function(e){var t=e.children;return r.a.createElement(a.Fragment,null,t)},E=function(e){return r.a.createElement(v,{},r.a.createElement(h,{},r.a.createElement(c,{},"caption-xl"),r.a.createElement(m,p({},{},{styleSize:"xlarge"}),"g-heading-xl")),r.a.createElement(h,{},r.a.createElement(u,{},"caption-l"),r.a.createElement(d,p({},{},{styleSize:"large"}),"g-heading-l")),r.a.createElement(h,{},r.a.createElement(s,{},"caption-m"),r.a.createElement(f,p({},{},{styleSize:"medium"}),"g-heading-m")))};document.addEventListener("DOMContentLoaded",function(){var e=document.querySelector("#root");e?i.a.render(r.a.createElement(E,null),e):console.error("Couldn't find app mount point ","#root")})}]);