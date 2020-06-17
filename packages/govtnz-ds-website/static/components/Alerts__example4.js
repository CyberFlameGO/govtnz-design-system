!function(e){var t={};function a(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=e,a.c=t,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=5)}([function(e,t){e.exports=React},function(e,t){e.exports=ReactDOM},function(e,t,a){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var r=n(a(0)),l={info:"g-alert--info",warning:"g-alert--warning",success:"g-alert--success",error:"g-alert--error"};t.default=function(e){var t=e.mode,a=e.level,n=e.children,o=e.headingId;return r.default.createElement(r.default.Fragment,null,"live"===t?r.default.createElement(r.default.Fragment,null,"info"===a?r.default.createElement(r.default.Fragment,null,r.default.createElement("div",{"aria-atomic":"true","aria-live":"polite",role:"note"},void 0!==n?r.default.createElement(r.default.Fragment,null,r.default.createElement("div",{className:"g-alert"+(void 0!==l[a]?" "+l[a]:"")},void 0!==n?n:r.default.createElement(r.default.Fragment,null," Example alert content "),r.default.createElement("svg",{"aria-hidden":"true",className:"g-alert__icon",focusable:"false",height:"32",viewBox:"0 0 32 32",width:"32"},r.default.createElement("path",{d:"M4.686 4.686c6.248-6.248 16.38-6.248 22.628 0 6.248 6.248 6.248 16.38 0 22.628-6.248 6.248-16.38 6.248-22.628 0-6.248-6.248-6.248-16.38 0-22.628zM16 14c-1.105 0-2 .895-2 2v8c0 1.105.895 2 2 2s2-.895 2-2v-8c0-1.105-.895-2-2-2zm-.003-8c-1.042.002-2 .727-1.997 2.015.002 1.265.962 1.987 2.003 1.985 1.042-.002 2-.727 1.997-1.992-.002-1.288-.962-2.01-2.003-2.008z"})))):"")):""):"","live"===t?r.default.createElement(r.default.Fragment,null,"warning"===a?r.default.createElement(r.default.Fragment,null,r.default.createElement("div",{"aria-atomic":"true","aria-live":"polite",role:"note"},void 0!==n?r.default.createElement(r.default.Fragment,null,r.default.createElement("div",{className:"g-alert"+(void 0!==l[a]?" "+l[a]:"")},void 0!==n?n:r.default.createElement(r.default.Fragment,null," Example alert content "),r.default.createElement("svg",{"aria-hidden":"true",className:"g-alert__icon",focusable:"false",height:"30",viewBox:"0 0 32 30",width:"32"},r.default.createElement("path",{d:"M16.035 0c.746 0 1.424.387 1.778.995l13.95 26.233c.333.58.314 1.289-.05 1.851-.364.57-1.013.921-1.72.921H2.016c-.707 0-1.366-.349-1.73-.92-.362-.563-.383-1.273-.048-1.852L14.267.995C14.611.387 15.287 0 16.035 0zm-.006 22.938c-1.02 0-1.848.8-1.816 1.752 0 .92.86 1.691 1.847 1.691 1.019 0 1.847-.772 1.847-1.721-.031-.95-.86-1.722-1.878-1.722zm.477-14.015c-.892-.208-1.783.207-2.165.98-.127.266-.16.563-.128.8.063.86.095 1.722.159 2.583.096 1.366.159 2.701.255 4.037.03.415.03.831.063 1.247.033.742.606 1.276 1.37 1.276.732 0 1.337-.534 1.37-1.217.095-2.048.223-4.126.35-6.204l.096-1.662c.063-.86-.51-1.633-1.37-1.84z"})))):"")):""):"","live"===t?r.default.createElement(r.default.Fragment,null,"success"===a?r.default.createElement(r.default.Fragment,null,r.default.createElement("div",{"aria-atomic":"true","aria-live":"polite",role:"note"},void 0!==n?r.default.createElement(r.default.Fragment,null,r.default.createElement("div",{className:"g-alert"+(void 0!==l[a]?" "+l[a]:"")},void 0!==n?n:r.default.createElement(r.default.Fragment,null," Example alert content "),r.default.createElement("svg",{"aria-hidden":"true",className:"g-alert__icon",focusable:"false",height:"32",viewBox:"0 0 32 32",width:"32"},r.default.createElement("path",{d:"M4.686 4.686c6.248-6.248 16.38-6.248 22.628 0 6.248 6.248 6.248 16.38 0 22.628-6.248 6.248-16.38 6.248-22.628 0-6.248-6.248-6.248-16.38 0-22.628zm15.047 7.004c-.96.878-5.696 5.559-5.996 5.735-.78-.703-2.039-1.99-2.878-2.809-.84-.76-1.379-.117-2.398.936-1.14 1.112 0 1.697 1.619 3.277l2.938 2.867c1.08.936 1.979-.468 3.417-1.814l5.877-5.792c1.858-1.756 2.278-1.756.779-3.16-1.32-1.346-1.26-1.346-3.358.76z"})))):"")):""):"","live"===t?r.default.createElement(r.default.Fragment,null,"error"===a?r.default.createElement(r.default.Fragment,null,r.default.createElement("div",{"aria-atomic":"true","aria-live":"polite",role:"note"},void 0!==n?r.default.createElement(r.default.Fragment,null,r.default.createElement("div",{className:"g-alert"+(void 0!==l[a]?" "+l[a]:"")},void 0!==n?n:r.default.createElement(r.default.Fragment,null," Example alert content "),r.default.createElement("svg",{"aria-hidden":"true",className:"g-alert__icon",focusable:"false",height:"32",viewBox:"0 0 32 32",width:"32"},r.default.createElement("path",{d:"M27.314 27.314c6.248-6.248 6.248-16.38 0-22.628-6.248-6.248-16.38-6.248-22.628 0-6.248 6.248-6.248 16.38 0 22.628 6.248 6.248 16.38 6.248 22.628 0zM14.21 7.175c.405-.878 1.35-1.35 2.297-1.114.911.236 1.52 1.114 1.452 2.093l-.102 1.892c-.134 2.364-.27 4.728-.372 7.058-.034.777-.675 1.385-1.452 1.385-.81 0-1.418-.608-1.453-1.452-.034-.473-.034-.946-.067-1.419-.101-1.52-.169-3.04-.27-4.593-.068-.98-.102-1.96-.17-2.938-.032-.27.002-.609.137-.912zM16 21.873c1.08 0 1.959.879 1.992 1.96 0 1.08-.879 1.959-1.96 1.959-1.047 0-1.958-.88-1.958-1.925-.033-1.082.845-1.994 1.926-1.994z"})))):"")):""):"","live"!==t?r.default.createElement(r.default.Fragment,null,"info"===a?r.default.createElement(r.default.Fragment,null,r.default.createElement("div",{"aria-labelledby":o,role:"note"},r.default.createElement("div",{className:"g-alert"+(void 0!==l[a]?" "+l[a]:"")},void 0!==n?n:r.default.createElement(r.default.Fragment,null," Example alert content "),r.default.createElement("svg",{"aria-hidden":"true",className:"g-alert__icon",focusable:"false",height:"32",viewBox:"0 0 32 32",width:"32"},r.default.createElement("path",{d:"M4.686 4.686c6.248-6.248 16.38-6.248 22.628 0 6.248 6.248 6.248 16.38 0 22.628-6.248 6.248-16.38 6.248-22.628 0-6.248-6.248-6.248-16.38 0-22.628zM16 14c-1.105 0-2 .895-2 2v8c0 1.105.895 2 2 2s2-.895 2-2v-8c0-1.105-.895-2-2-2zm-.003-8c-1.042.002-2 .727-1.997 2.015.002 1.265.962 1.987 2.003 1.985 1.042-.002 2-.727 1.997-1.992-.002-1.288-.962-2.01-2.003-2.008z"}))))):""):"","live"!==t?r.default.createElement(r.default.Fragment,null,"warning"===a?r.default.createElement(r.default.Fragment,null,r.default.createElement("div",{"aria-labelledby":o,role:"note"},r.default.createElement("div",{className:"g-alert"+(void 0!==l[a]?" "+l[a]:"")},void 0!==n?n:r.default.createElement(r.default.Fragment,null," Example alert content "),r.default.createElement("svg",{"aria-hidden":"true",className:"g-alert__icon",focusable:"false",height:"30",viewBox:"0 0 32 30",width:"32"},r.default.createElement("path",{d:"M16.035 0c.746 0 1.424.387 1.778.995l13.95 26.233c.333.58.314 1.289-.05 1.851-.364.57-1.013.921-1.72.921H2.016c-.707 0-1.366-.349-1.73-.92-.362-.563-.383-1.273-.048-1.852L14.267.995C14.611.387 15.287 0 16.035 0zm-.006 22.938c-1.02 0-1.848.8-1.816 1.752 0 .92.86 1.691 1.847 1.691 1.019 0 1.847-.772 1.847-1.721-.031-.95-.86-1.722-1.878-1.722zm.477-14.015c-.892-.208-1.783.207-2.165.98-.127.266-.16.563-.128.8.063.86.095 1.722.159 2.583.096 1.366.159 2.701.255 4.037.03.415.03.831.063 1.247.033.742.606 1.276 1.37 1.276.732 0 1.337-.534 1.37-1.217.095-2.048.223-4.126.35-6.204l.096-1.662c.063-.86-.51-1.633-1.37-1.84z"}))))):""):"","live"!==t?r.default.createElement(r.default.Fragment,null,"success"===a?r.default.createElement(r.default.Fragment,null,r.default.createElement("div",{"aria-labelledby":o,role:"note",tabIndex:-1},r.default.createElement("div",{className:"g-alert"+(void 0!==l[a]?" "+l[a]:"")},void 0!==n?n:r.default.createElement(r.default.Fragment,null," Example alert content "),r.default.createElement("svg",{"aria-hidden":"true",className:"g-alert__icon",focusable:"false",height:"32",viewBox:"0 0 32 32",width:"32"},r.default.createElement("path",{d:"M4.686 4.686c6.248-6.248 16.38-6.248 22.628 0 6.248 6.248 6.248 16.38 0 22.628-6.248 6.248-16.38 6.248-22.628 0-6.248-6.248-6.248-16.38 0-22.628zm15.047 7.004c-.96.878-5.696 5.559-5.996 5.735-.78-.703-2.039-1.99-2.878-2.809-.84-.76-1.379-.117-2.398.936-1.14 1.112 0 1.697 1.619 3.277l2.938 2.867c1.08.936 1.979-.468 3.417-1.814l5.877-5.792c1.858-1.756 2.278-1.756.779-3.16-1.32-1.346-1.26-1.346-3.358.76z"}))))):""):"","live"!==t?r.default.createElement(r.default.Fragment,null,"error"===a?r.default.createElement(r.default.Fragment,null,r.default.createElement("div",{"aria-labelledby":o,role:"note",tabIndex:-1},r.default.createElement("div",{className:"g-alert"+(void 0!==l[a]?" "+l[a]:"")},void 0!==n?n:r.default.createElement(r.default.Fragment,null," Example alert content "),r.default.createElement("svg",{"aria-hidden":"true",className:"g-alert__icon",focusable:"false",height:"32",viewBox:"0 0 32 32",width:"32"},r.default.createElement("path",{d:"M27.314 27.314c6.248-6.248 6.248-16.38 0-22.628-6.248-6.248-16.38-6.248-22.628 0-6.248 6.248-6.248 16.38 0 22.628 6.248 6.248 16.38 6.248 22.628 0zM14.21 7.175c.405-.878 1.35-1.35 2.297-1.114.911.236 1.52 1.114 1.452 2.093l-.102 1.892c-.134 2.364-.27 4.728-.372 7.058-.034.777-.675 1.385-1.452 1.385-.81 0-1.418-.608-1.453-1.452-.034-.473-.034-.946-.067-1.419-.101-1.52-.169-3.04-.27-4.593-.068-.98-.102-1.96-.17-2.938-.032-.27.002-.609.137-.912zM16 21.873c1.08 0 1.959.879 1.992 1.96 0 1.08-.879 1.959-1.96 1.959-1.047 0-1.958-.88-1.958-1.925-.033-1.082.845-1.994 1.926-1.994z"}))))):""):"")}},function(e,t,a){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var r=n(a(0)),l={xlarge:"g-heading-xl",large:"g-heading-l",medium:"g-heading-m",small:"g-heading-s",xsmall:"g-heading-xs",xxsmall:"g-heading-xxs"};t.default=function(e){var t=e.styleSize,a=e.marginBottom8,n=e.marginBottom0,o=e.id,u=e.children;return r.default.createElement("h2",{className:"g-heading"+(void 0!==l[t]?" "+l[t]:"")+(a?" g-heading-mb-8":"")+(n?" g-heading-mb-0":""),id:o},void 0!==u?u:r.default.createElement(r.default.Fragment,null,"Example text"))}},function(e,t,a){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var r=n(a(0)),l={styleSize:{large:"g-body-l",medium:"g-body-m",small:"g-body-s","x-small":"g-body-xs"}};t.default=function(e){var t=e.styleSize,a=e.children;return r.default.createElement("p",{className:void 0!==l.styleSize[t]?l.styleSize[t]:""},void 0!==a?a:r.default.createElement(r.default.Fragment,null,"Example text"))}},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(1),o=a.n(l),u=a(2),c=a.n(u),i=a(3),d=a.n(i),f=a(4),s=a.n(f);function m(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var a=[],n=!0,r=!1,l=void 0;try{for(var o,u=e[Symbol.iterator]();!(n=(o=u.next()).done)&&(a.push(o.value),!t||a.length!==t);n=!0);}catch(e){r=!0,l=e}finally{try{n||null==u.return||u.return()}finally{if(r)throw l}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return g(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return g(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function g(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}function v(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?v(Object(a),!0).forEach((function(t){h(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):v(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function h(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e){return(b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function y(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function E(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _(e,t,a){return t&&E(e.prototype,t),a&&E(e,a),e}function O(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&x(e,t)}function x(e,t){return(x=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function w(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=S(e);if(t){var r=S(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return j(this,a)}}function j(e,t){return!t||"object"!==b(t)&&"function"!=typeof t?F(e):t}function F(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function S(e){return(S=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function z(){return(z=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var M=function(e){var t=e.children;return r.a.createElement(n.Fragment,null,t)},P=function(e){return r.a.createElement(M,z({title:"Example: Alerts (static)"},k({})),r.a.createElement(N,z({Component:c.a,level:"success",headingId:"heading3"},k({})),r.a.createElement(d.a,z({id:"heading3"},k({})),"Success: Your account has been activated"),r.a.createElement(s.a,k({}),"You can now access all features of the service.")))},C=r.a.createContext(void 0),N=(n.Component,r.a.Component,function(e){O(a,e);var t=w(a);function a(e){var n;return y(this,a),(n=t.call(this,e)).state={isChecked:!1,id:"id".concat(e.headingId.replace(/[^a-zA-Z0-9]/g,""))},n.toggle=n.toggle.bind(F(n)),n}return _(a,[{key:"toggle",value:function(){var e=this.state.isChecked;this.setState({isChecked:!e})}},{key:"render",value:function(){var e=this.props,t=e.mode,a=e.level,l=e.Component,o=this.state,u=o.isChecked,c=o.id;return"live"===t?r.a.createElement(n.Fragment,null,r.a.createElement("button",{type:"button","aria-controls":c,"aria-expanded":u,onClick:this.toggle,className:"g-button g-button--secondary"},"Toggle live ",a," alert"),r.a.createElement("div",{id:c},u?r.a.createElement(l,z({key:"".concat(c,"_alert")},this.props)):r.a.createElement(l,z({key:"".concat(c,"_alert")},this.props,{children:void 0})))):r.a.createElement(l,this.props)}}]),a}(r.a.Component)),k=function(e){var t=m(Object(n.useState)(e&&e.value),2),a=t[0],r=t[1],l=m(Object(n.useState)(e&&e.value2),2),o=l[0],u=l[1],c=m(Object(n.useState)(e&&e.value3),2),i=c[0],d=c[1];return{value:a,value2:o,value3:i,onChange:function(e){return r(e.target.value)},onChange2:function(e){return u(e.target.value)},onChange3:function(e){return d(e.target.value)}}};document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelector("#root");e?o.a.hydrate(r.a.createElement(P,null),e,window.afterRender):console.error("Couldn't find app mount point ","#root")}))}]);