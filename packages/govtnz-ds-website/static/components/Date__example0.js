!function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=4)}([function(e,t){e.exports=React},function(e,t){e.exports=ReactDOM},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=r(n(0));t.default=function(e){var t=e.errorId,n=e.hintId,r=e.label,o=e.hint,u=e.error,l=e.id,i=e.dayId,c=e.required,d=e.disabled,f=e.readOnly,s=e.autoFocus,p=e.dayName,m=e.value,g=e.spellCheck,y=e.autoComplete,b=e.onChange,v=e.ref,h=e.monthId,O=e.yearName,_=e.value2,I=e.onChange2,E=e.ref2,j=e.yearId,x=e.value3,S=e.onChange3,w=e.ref3;return a.default.createElement("div",{className:"g-dateInput-form-group"+(t?" g-dateInput-form-group--error":"")},a.default.createElement("fieldset",{"aria-describedby":void 0!==n||void 0!==t?(n||"")+(t?" "+t:""):void 0,className:"g-dateInput-fieldset",role:"group"},a.default.createElement("legend",{className:"g-dateInput-fieldset__legend"},void 0!==r?r:a.default.createElement(a.default.Fragment,null,"Example label")),a.default.createElement("span",{className:"g-dateInput-hint",id:n},void 0!==o?o:a.default.createElement(a.default.Fragment,null,"Example hint")),void 0!==t?a.default.createElement(a.default.Fragment,null,a.default.createElement("span",{className:"g-dateInput-error-message",id:t},a.default.createElement("span",{className:"g-dateInput-visually-hidden"},"Error: "),void 0!==u?u:a.default.createElement(a.default.Fragment,null,"Example error"))):"",a.default.createElement("div",{className:"g-dateInput",id:l},a.default.createElement("div",{className:"g-dateInput__item"},a.default.createElement("div",{className:"g-dateInput-form-group"},a.default.createElement("label",{className:"g-dateInput-label g-dateInput__label",htmlFor:i},"Day"),a.default.createElement("input",{className:"g-dateInput-input g-dateInput__input g-dateInput-input--width-2"+(u?" g-dateInput-input--error":""),id:i,maxLength:2,name:p,pattern:"[0-9]*",type:"text",value:m,required:c,disabled:void 0!==d?"true"===d.toString():void 0,readOnly:f,autoFocus:s,spellCheck:g,autoComplete:y,onChange:b,ref:v}))),a.default.createElement("div",{className:"g-dateInput__item"},a.default.createElement("div",{className:"g-dateInput-form-group"},a.default.createElement("label",{className:"g-dateInput-label g-dateInput__label",htmlFor:h},"Month"),a.default.createElement("input",{className:"g-dateInput-input g-dateInput__input g-dateInput-input--width-2"+(u?" g-dateInput-input--error":""),id:h,maxLength:2,name:O,pattern:"[0-9]*",type:"text",value:_,required:c,disabled:void 0!==d?"true"===d.toString():void 0,readOnly:f,autoFocus:s,spellCheck:g,autoComplete:y,onChange:I,ref:E}))),a.default.createElement("div",{className:"g-dateInput__item"},a.default.createElement("div",{className:"g-dateInput-form-group"},a.default.createElement("label",{className:"g-dateInput-label g-dateInput__label",htmlFor:j},"Year"),a.default.createElement("input",{className:"g-dateInput-input g-dateInput__input g-dateInput-input--width-4"+(u?" g-dateInput-input--error":""),id:j,maxLength:4,name:O,pattern:"[0-9]*",type:"text",value:x,required:c,disabled:void 0!==d?"true"===d.toString():void 0,readOnly:f,autoFocus:s,spellCheck:g,autoComplete:y,onChange:S,ref:w}))))))}},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=r(n(0)),o={xlarge:"g-heading-xl",large:"g-heading-l",medium:"g-heading-m",small:"g-heading-s",xsmall:"g-heading-xs",xxsmall:"g-heading-xxs"};t.default=function(e){var t=e.styleSize,n=e.marginBottom8,r=e.marginBottom0,u=e.id,l=e.children;return a.default.createElement("h1",{className:"g-heading"+(void 0!==o[t]?" "+o[t]:"")+(n?" g-heading-mb-8":"")+(r?" g-heading-mb-0":""),id:u},void 0!==l?l:a.default.createElement(a.default.Fragment,null,"Example text"))}},function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(1),u=n.n(o),l=n(2),i=n.n(l),c=n(3),d=n.n(c);function f(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,a=!1,o=void 0;try{for(var u,l=e[Symbol.iterator]();!(r=(u=l.next()).done)&&(n.push(u.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==l.return||l.return()}finally{if(a)throw o}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return s(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return s(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){g(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function g(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function y(e){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function b(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function h(e,t,n){return t&&v(e.prototype,t),n&&v(e,n),e}function O(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_(e,t)}function _(e,t){return(_=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function I(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=x(e);if(t){var a=x(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return E(this,n)}}function E(e,t){return!t||"object"!==y(t)&&"function"!=typeof t?j(e):t}function j(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function x(e){return(x=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function S(){return(S=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var w=function(e){var t=e.children;return a.a.createElement(r.Fragment,null,t)},C=function(e){return a.a.createElement(w,S({title:"Example: Date input"},N({})),a.a.createElement(i.a,S({id:"passport-issued",hintId:"passport-issued-hint",dayId:"passport-issued-day",monthId:"passport-issued-month",yearId:"passport-issued-year",label:a.a.createElement(d.a,{styleSize:"large",marginBottom0:!0},"When was your passport issued?"),hint:"For example, 12 11 2007"},N({}))))},P=a.a.createContext(void 0),N=(r.Component,a.a.Component,a.a.Component,function(e){var t=f(Object(r.useState)(e&&e.value),2),n=t[0],a=t[1],o=f(Object(r.useState)(e&&e.value2),2),u=o[0],l=o[1],i=f(Object(r.useState)(e&&e.value3),2),c=i[0],d=i[1];return{value:n,value2:u,value3:c,onChange:function(e){return a(e.target.value)},onChange2:function(e){return l(e.target.value)},onChange3:function(e){return d(e.target.value)}}});document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelector("#root");e?u.a.hydrate(a.a.createElement(C,null),e,window.afterRender):console.error("Couldn't find app mount point ","#root")}))}]);