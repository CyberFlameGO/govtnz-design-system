!function(e){var t={};function r(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=6)}([function(e,t){e.exports=React},function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=n(r(0));t.default=function(e){var t=e.errorId,r=e.id,n=e.hintId,o=e.required,l=e.disabled,u=e.readOnly,i=e.autoFocus,c=e.name,d=e.value,f=e.checked,s=e.onChange,m=e.ref,p=e.label,b=e.hint,g=e.error;return a.default.createElement("div",{className:"g-checkboxes__item"+(t?" g-form-group--error":"")},a.default.createElement("input",{"aria-describedby":n,className:"g-checkboxes__input",id:r,type:"checkbox",required:o,disabled:void 0!==l?"true"===l.toString():void 0,readOnly:u,autoFocus:i,name:c,value:d,checked:f,onChange:s,ref:m}),a.default.createElement("label",{className:"g-checkboxes__label",htmlFor:r},void 0!==p?p:a.default.createElement(a.default.Fragment,null,"Label text")),n?a.default.createElement(a.default.Fragment,null,a.default.createElement("div",{className:"g-checkboxes__hint",id:n},void 0!==b?b:a.default.createElement(a.default.Fragment,null,"Hint text"))):"",t?a.default.createElement(a.default.Fragment,null,a.default.createElement("div",{className:"g-error-message",id:t},a.default.createElement("span",{className:"g-visually-hidden"},"Error:"),void 0!==g?g:a.default.createElement(a.default.Fragment,null,"Error text"))):"")}},function(e,t){e.exports=ReactDOM},function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=n(r(0));t.default=function(e){var t=e.errorId,r=e.hintId,n=e.legend,o=e.hint,l=e.error,u=e.children;return a.default.createElement("div",{className:"g-fieldsetBlock-form-group"+(t?" g-fieldsetBlock-form-group--error":"")},a.default.createElement("fieldset",{"aria-describedby":void 0!==r||void 0!==t?(r||"")+(t?" "+t:""):void 0,className:"g-fieldsetBlock-fieldset"},a.default.createElement("legend",{className:"g-fieldsetBlock-fieldset__legend"},void 0!==n?n:a.default.createElement(a.default.Fragment,null,"Legend text")),r?a.default.createElement(a.default.Fragment,null,a.default.createElement("div",{className:"g-fieldsetBlock-hint",id:r},void 0!==o?o:a.default.createElement(a.default.Fragment,null,"Hint text"))):"",t?a.default.createElement(a.default.Fragment,null,a.default.createElement("div",{className:"g-fieldsetBlock-error-message",id:t},a.default.createElement("span",{className:"g-fieldsetBlock-visually-hidden"},"Error:"),void 0!==l?l:a.default.createElement(a.default.Fragment,null,"Error text"))):"",a.default.createElement("div",null,void 0!==u?u:a.default.createElement(a.default.Fragment,null,"Fieldset contents"))))}},function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=n(r(0)),o={xlarge:"g-heading-xl",large:"g-heading-l",medium:"g-heading-m",small:"g-heading-s",xsmall:"g-heading-xs",xxsmall:"g-heading-xxs"};t.default=function(e){var t=e.styleSize,r=e.marginBottom8,n=e.marginBottom0,l=e.marginTop0,u=e.marginTop8,i=e.id,c=e.children;return a.default.createElement("h1",{className:"g-heading"+(void 0!==o[t]?" "+o[t]:"")+(r?" g-heading-mb-8":"")+(n?" g-heading-mb-0":"")+(l?" g-heading-mt-0":"")+(u?" g-heading-mt-8":""),id:i},void 0!==c?c:a.default.createElement(a.default.Fragment,null,"Example text"))}},function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=n(r(0)),o={large:"g-body-l",medium:"g-body-m",small:"g-body-s","x-small":"g-body-xs"};t.default=function(e){var t=e.styleSize,r=e.marginBottom0,n=e.children;return a.default.createElement("p",{className:"g-body"+(void 0!==o[t]?" "+o[t]:"")+(r?" g-body-marginBottom0":"")},void 0!==n?n:a.default.createElement(a.default.Fragment,null,"Example text"))}},function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),o=r(2),l=r.n(o),u=r(3),i=r.n(u),c=r(4),d=r.n(c),f=r(5),s=r.n(f),m=r(1),p=r.n(m);function b(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,a=!1,o=void 0;try{for(var l,u=e[Symbol.iterator]();!(n=(l=u.next()).done)&&(r.push(l.value),!t||r.length!==t);n=!0);}catch(e){a=!0,o=e}finally{try{n||null==u.return||u.return()}finally{if(a)throw o}}return r}(e,t)||y(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function g(e){return function(e){if(Array.isArray(e))return v(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||y(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function y(e,t){if(e){if("string"==typeof e)return v(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?v(e,t):void 0}}function v(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function h(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function O(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?h(Object(r),!0).forEach((function(t){E(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function E(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function _(e){return(_="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function j(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function x(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function S(e,t,r){return t&&x(e.prototype,t),r&&x(e,r),e}function w(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&P(e,t)}function P(e,t){return(P=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function C(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=M(e);if(t){var a=M(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return k(this,r)}}function k(e,t){return!t||"object"!==_(t)&&"function"!=typeof t?F(e):t}function F(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function M(e){return(M=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function B(){return(B=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var I=function(e){var t=e.children;return a.a.createElement(n.Fragment,null,t)},N=function(e){return a.a.createElement(I,B({title:"Example: Checkboxes"},A({})),a.a.createElement(i.a,B({legend:a.a.createElement(d.a,{styleSize:"large",id:"providerChoiceTitle1",marginBottom8:!0},"Who are your providers?"),hint:a.a.createElement(s.a,null,"Select all that apply."),hintId:"hintId1"},A({})),a.a.createElement(p.a,B({label:"Aardvark Access",id:"anyCheckboxId1",value:"provider1",name:"providerChoice1"},A({value:"provider1"}))),a.a.createElement(p.a,B({label:"Bumblebee Business",id:"anyCheckboxId2",value:"provider2",name:"providerChoice1"},A({value:"provider2"}))),a.a.createElement(p.a,B({label:"Caterpillar Company",id:"anyCheckboxId3",value:"provider3",name:"providerChoice1"},A({value:"provider3"})))))},D=a.a.createContext(void 0),A=(n.Component,a.a.Component,a.a.Component,function(e){var t=b(Object(n.useState)(e&&e.value),2),r=t[0],a=t[1],o=b(Object(n.useState)(e&&e.value2),2),l=o[0],u=o[1],i=b(Object(n.useState)(e&&e.value3),2),c=i[0],d=i[1];return{value:r,value2:l,value3:c,onChange:function(e){return a(e.target.value)},onChange2:function(e){return u(e.target.value)},onChange3:function(e){return d(e.target.value)}}});document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelector("#root");e?l.a.hydrate(a.a.createElement(N,null),e,window.afterRender):console.error("Couldn't find app mount point ","#root")}))}]);