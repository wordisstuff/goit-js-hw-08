function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,o=/^0o[0-7]+$/i,u=parseInt,f="object"==typeof n&&n&&n.Object===Object&&n,l="object"==typeof self&&self&&self.Object===Object&&self,c=f||l||Function("return this")(),s=Object.prototype.toString,d=Math.max,m=Math.min,v=function(){return c.Date.now()};function g(e,t,n){var i,r,a,o,u,f,l=0,c=!1,s=!1,g=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=i,a=r;return i=r=void 0,l=t,o=e.apply(a,n)}function j(e){return l=e,u=setTimeout(h,t),c?b(e):o}function S(e){var n=e-f;return void 0===f||n>=t||n<0||s&&e-l>=a}function h(){var e=v();if(S(e))return w(e);u=setTimeout(h,function(e){var n=t-(e-f);return s?m(n,a-(e-l)):n}(e))}function w(e){return u=void 0,g&&i?b(e):(i=r=void 0,o)}function O(){var e=v(),n=S(e);if(i=arguments,r=this,f=e,n){if(void 0===u)return j(f);if(s)return u=setTimeout(h,t),b(f)}return void 0===u&&(u=setTimeout(h,t)),o}return t=y(t)||0,p(n)&&(c=!!n.leading,a=(s="maxWait"in n)?d(y(n.maxWait)||0,t):a,g="trailing"in n?!!n.trailing:g),O.cancel=function(){void 0!==u&&clearTimeout(u),l=0,i=f=r=u=void 0},O.flush=function(){return void 0===u?o:w(v())},O}function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var n=a.test(e);return n||o.test(e)?u(e.slice(2),n?2:8):r.test(e)?NaN:+e}t=function(e,t,n){var i=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return p(n)&&(i="leading"in n?!!n.leading:i,r="trailing"in n?!!n.trailing:r),g(e,t,{leading:i,maxWait:t,trailing:r})};const b=document.querySelector(".feedback-form"),j=b.querySelector("input"),S=b.querySelector("textarea");let h=JSON.parse(localStorage.getItem("feedback-form-state")),w={email:"",massage:""};h&&(w.email=h.email,w.massage=h.massage,j.value=h.email,S.value=h.massage),b.addEventListener("input",e(t)((function(e){e.preventDefault(),"email"===e.target.name&&(w.email=e.target.value);"message"===e.target.name&&(w.massage=e.target.value);localStorage.setItem("feedback-form-state",JSON.stringify(w))}),500)),b.addEventListener("submit",(function(e){e.preventDefault(),e.stopPropagation(),console.dir(h),localStorage.removeItem("feedback-form-state"),j.value="",S.value=""}));
//# sourceMappingURL=03-feedback.9e5dbe7c.js.map
