!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var i="Expected a function",o=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,s="object"==typeof self&&self&&self.Object===Object&&self,d=c||s||Function("return this")(),v=Object.prototype.toString,m=Math.max,p=Math.min,g=function(){return d.Date.now()};function b(e,t,n){var r,o,a,u,f,l,c=0,s=!1,d=!1,v=!0;if("function"!=typeof e)throw new TypeError(i);function b(t){var n=r,i=o;return r=o=void 0,c=t,u=e.apply(i,n)}function j(e){return c=e,f=setTimeout(O,t),s?b(e):u}function S(e){var n=e-l;return void 0===l||n>=t||n<0||d&&e-c>=a}function O(){var e=g();if(S(e))return w(e);f=setTimeout(O,function(e){var n=t-(e-l);return d?p(n,a-(e-c)):n}(e))}function w(e){return f=void 0,v&&r?b(e):(r=o=void 0,u)}function T(){var e=g(),n=S(e);if(r=arguments,o=this,l=e,n){if(void 0===f)return j(l);if(d)return f=setTimeout(O,t),b(l)}return void 0===f&&(f=setTimeout(O,t)),u}return t=h(t)||0,y(n)&&(s=!!n.leading,a=(d="maxWait"in n)?m(h(n.maxWait)||0,t):a,v="trailing"in n?!!n.trailing:v),T.cancel=function(){void 0!==f&&clearTimeout(f),c=0,r=l=o=f=void 0},T.flush=function(){return void 0===f?u:w(g())},T}function y(t){var n=void 0===t?"undefined":e(r)(t);return!!t&&("object"==n||"function"==n)}function h(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(r)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==v.call(t)}(t))return NaN;if(y(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=y(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(o,"");var i=u.test(t);return i||f.test(t)?l(t.slice(2),i?2:8):a.test(t)?NaN:+t}t=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError(i);return y(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),b(e,t,{leading:r,maxWait:t,trailing:o})};var j=document.querySelector(".feedback-form"),S=j.querySelector("input"),O=j.querySelector("textarea"),w=JSON.parse(localStorage.getItem("feedback-form-state")),T={email:"",massage:""};S.placeholder="твоя пошта",O.placeholder="твоє повідомлення",w&&(T.email=w.email,T.massage=w.massage,S.value=w.email,O.value=w.massage),j.addEventListener("input",e(t)((function(e){e.preventDefault(),"email"===e.target.name&&(T.email=e.target.value);"message"===e.target.name&&(T.massage=e.target.value);localStorage.setItem("feedback-form-state",JSON.stringify(T))}),500)),j.addEventListener("submit",(function(e){e.preventDefault(),S.value?O.value?(console.dir(T),localStorage.removeItem("feedback-form-state"),S.value="",O.value=""):(O.focus(),O.placeholder="Вводь своє повідомлення сюди!"):(S.focus(),S.placeholder="Вводь свою пошту сюди!")}))}();
//# sourceMappingURL=03-feedback.76def9c4.js.map