!function(e){var t={};function r(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=4)}([function(e,t){e.exports=React},function(e,t){e.exports=ReactDOM},function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=n(r(0));t.default=function(e){var t=e.errorId,r=e.hintId,n=e.label,o=e.hint,u=e.error,l=e.id,i=e.dayId,c=e.required,d=e.disabled,s=e.readOnly,f=e.autoFocus,p=e.dayName,m=e.value,g=e.spellCheck,y=e.autoComplete,b=e.onChange,v=e.ref,h=e.monthId,O=e.yearName,_=e.value2,I=e.onChange2,E=e.ref2,j=e.yearId,x=e.value3,S=e.onChange3,w=e.ref3;return a.default.createElement("div",{className:"g-dateInput-form-group"+(t?" g-dateInput-form-group--error":"")},a.default.createElement("fieldset",{"aria-describedby":void 0!==r||void 0!==t?(r||"")+(t?" "+t:""):void 0,className:"g-dateInput-fieldset",role:"group"},a.default.createElement("legend",{className:"g-dateInput-fieldset__legend"},void 0!==n?n:a.default.createElement(a.default.Fragment,null,"Example label")),a.default.createElement("span",{className:"g-dateInput-hint",id:r},void 0!==o?o:a.default.createElement(a.default.Fragment,null,"Example hint")),void 0!==t?a.default.createElement(a.default.Fragment,null,a.default.createElement("span",{className:"g-dateInput-error-message",id:t},a.default.createElement("span",{className:"g-dateInput-visually-hidden"},"Error: "),void 0!==u?u:a.default.createElement(a.default.Fragment,null,"Example error"))):"",a.default.createElement("div",{className:"g-dateInput",id:l},a.default.createElement("div",{className:"g-dateInput__item"},a.default.createElement("div",{className:"g-dateInput-form-group"},a.default.createElement("label",{className:"g-dateInput-label g-dateInput__label",htmlFor:i},"Day"),a.default.createElement("input",{className:"g-dateInput-input g-dateInput__input g-dateInput-input--width-2"+(u?" g-dateInput-input--error":""),id:i,maxLength:2,name:p,pattern:"[0-9]*",type:"text",value:m,required:c,disabled:void 0!==d?"true"===d.toString():void 0,readOnly:s,autoFocus:f,spellCheck:g,autoComplete:y,onChange:b,ref:v}))),a.default.createElement("div",{className:"g-dateInput__item"},a.default.createElement("div",{className:"g-dateInput-form-group"},a.default.createElement("label",{className:"g-dateInput-label g-dateInput__label",htmlFor:h},"Month"),a.default.createElement("input",{className:"g-dateInput-input g-dateInput__input g-dateInput-input--width-2"+(u?" g-dateInput-input--error":""),id:h,maxLength:2,name:O,pattern:"[0-9]*",type:"text",value:_,required:c,disabled:void 0!==d?"true"===d.toString():void 0,readOnly:s,autoFocus:f,spellCheck:g,autoComplete:y,onChange:I,ref:E}))),a.default.createElement("div",{className:"g-dateInput__item"},a.default.createElement("div",{className:"g-dateInput-form-group"},a.default.createElement("label",{className:"g-dateInput-label g-dateInput__label",htmlFor:j},"Year"),a.default.createElement("input",{className:"g-dateInput-input g-dateInput__input g-dateInput-input--width-4"+(u?" g-dateInput-input--error":""),id:j,maxLength:4,name:O,pattern:"[0-9]*",type:"text",value:x,required:c,disabled:void 0!==d?"true"===d.toString():void 0,readOnly:s,autoFocus:f,spellCheck:g,autoComplete:y,onChange:S,ref:w}))))))}},function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=n(r(0)),o={xlarge:"g-heading-xl",large:"g-heading-l",medium:"g-heading-m",small:"g-heading-s",xsmall:"g-heading-xs",xxsmall:"g-heading-xxs"};t.default=function(e){var t=e.styleSize,r=e.marginBottom8,n=e.marginBottom0,u=e.id,l=e.children;return a.default.createElement("h1",{className:"g-heading"+(void 0!==o[t]?" "+o[t]:"")+(r?" g-heading-mb-8":"")+(n?" g-heading-mb-0":""),id:u},void 0!==l?l:a.default.createElement(a.default.Fragment,null,"Example text"))}},function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),o=r(1),u=r.n(o),l=r(2),i=r.n(l),c=r(3),d=r.n(c);function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,a=!1,o=void 0;try{for(var u,l=e[Symbol.iterator]();!(n=(u=l.next()).done)&&(r.push(u.value),!t||r.length!==t);n=!0);}catch(e){a=!0,o=e}finally{try{n||null==l.return||l.return()}finally{if(a)throw o}}return r}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return f(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return f(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function m(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){g(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function g(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function y(e){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function b(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function v(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function h(e,t,r){return t&&v(e.prototype,t),r&&v(e,r),e}function O(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_(e,t)}function _(e,t){return(_=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function I(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=x(e);if(t){var a=x(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return E(this,r)}}function E(e,t){return!t||"object"!==y(t)&&"function"!=typeof t?j(e):t}function j(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function x(e){return(x=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function S(){return(S=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var w=function(e){var t=e.children;return a.a.createElement(n.Fragment,null,t)},C=function(e){return a.a.createElement(w,S({title:"Example: Error state #2 (Date input)"},N({})),a.a.createElement(i.a,S({id:"passport-issued",hintId:"passport-issued-hint",errorId:"passport-issued-error",dayId:"passport-issued-day",monthId:"passport-issued-month",yearId:"passport-issued-year",label:a.a.createElement(d.a,{styleSize:"large",marginBottom0:!0},"When was your passport issued?"),hint:"For example, 12 11 2007",value:"6",value2:"3",value3:"2076",error:"The date your passport was issued must be in the past"},N({value:"6",value2:"3",value3:"2076"}))))},P=a.a.createContext(void 0),N=(n.Component,a.a.Component,a.a.Component,function(e){var t=s(Object(n.useState)(e&&e.value),2),r=t[0],a=t[1],o=s(Object(n.useState)(e&&e.value2),2),u=o[0],l=o[1],i=s(Object(n.useState)(e&&e.value3),2),c=i[0],d=i[1];return{value:r,value2:u,value3:c,onChange:function(e){return a(e.target.value)},onChange2:function(e){return l(e.target.value)},onChange3:function(e){return d(e.target.value)}}});document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelector("#root");e?u.a.hydrate(a.a.createElement(C,null),e,window.afterRender):console.error("Couldn't find app mount point ","#root")}))}]);