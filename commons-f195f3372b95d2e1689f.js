/*! For license information please see commons-f195f3372b95d2e1689f.js.LICENSE.txt */
(self.webpackChunkcorpo_code_crafted_studios=self.webpackChunkcorpo_code_crafted_studios||[]).push([[223],{3514:function(e,t,n){"use strict";var r=n(4994);t.__esModule=!0,t.Link=void 0;var a=r(n(4634)),l=r(n(4893)),i=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var n=p(t);if(n&&n.has(e))return n.get(e);var r={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var i=a?Object.getOwnPropertyDescriptor(e,l):null;i&&(i.get||i.set)?Object.defineProperty(r,l,i):r[l]=e[l]}r.default=e,n&&n.set(e,r);return r}(n(6540)),o=n(3064),c=n(4794),s=n(3773),u=["language","to","onClick"];function p(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(p=function(e){return e?n:t})(e)}var d=i.default.forwardRef((function(e,t){var n=e.language,r=e.to,p=e.onClick,d=(0,l.default)(e,u),f=(0,i.useContext)(o.I18nextContext),m=n||f.language,h=""+function(e){return f.generateDefaultLanguagePage||e!==f.defaultLanguage?"/"+e:""}(m)+r;return i.default.createElement(c.Link,(0,a.default)({},d,{to:h,innerRef:t,hrefLang:m,onClick:function(e){n&&localStorage.setItem(s.LANGUAGE_KEY,n),p&&p(e)}}))}));t.Link=d},9384:function(e,t,n){"use strict";t.__esModule=!0;var r=n(2389);Object.keys(r).forEach((function(e){"default"!==e&&"__esModule"!==e&&(e in t&&t[e]===r[e]||(t[e]=r[e]))}));var a=n(3064);Object.keys(a).forEach((function(e){"default"!==e&&"__esModule"!==e&&(e in t&&t[e]===a[e]||(t[e]=a[e]))}));var l=n(2232);Object.keys(l).forEach((function(e){"default"!==e&&"__esModule"!==e&&(e in t&&t[e]===l[e]||(t[e]=l[e]))}));var i=n(3514);Object.keys(i).forEach((function(e){"default"!==e&&"__esModule"!==e&&(e in t&&t[e]===i[e]||(t[e]=i[e]))}))},2232:function(e,t,n){"use strict";var r=n(4994);t.__esModule=!0,t.useI18next=void 0;var a=r(n(4634)),l=n(2389),i=n(6540),o=n(4794),c=n(3064),s=n(3773);t.useI18next=function(e,t){var n=(0,l.useTranslation)(e,t),r=n.i18n,u=n.t,p=n.ready,d=(0,i.useContext)(c.I18nextContext),f=d.routed,m=d.defaultLanguage,h=d.generateDefaultLanguagePage,y=function(e){return h||e!==m?"/"+e:""};return(0,a.default)({},d,{i18n:r,t:u,ready:p,navigate:function(e,t){var n=y(d.language),r=f?""+n+e:""+e;return(0,o.navigate)(r,t)},changeLanguage:function(e,t,n){var r=""+y(e)+(t||function(e){if(!f)return e;var t=e.indexOf("/",1);return e.substring(t)}(window.location.pathname))+window.location.search;return localStorage.setItem(s.LANGUAGE_KEY,e),(0,o.navigate)(r,n)}})}},4755:function(e,t,n){e.exports=n(9384)},3135:function(e,t,n){"use strict";var r=n(6540);t.A=e=>{let{fillColour:t}=e;return r.createElement("div",{className:"flex w-full h-full"},r.createElement("svg",{viewBox:"0 0 184.30112 141.24858",version:"1.1",id:"svg1",xmlns:"http://www.w3.org/2000/svg"},r.createElement("g",{id:"layer1",transform:"translate(8.995833,34.131249)"},r.createElement("path",{id:"path248",d:"m 103.61928,-3.5301852 11.27513,-4.8870303 10.66306,11.9499938 -10.8973,5.9742914 z",style:{fill:t,fillOpacity:1,strokeWidth:.352778}}),r.createElement("path",{id:"path249",d:"M 0,0 C -0.009,-2.79 46.179,-17.43 48.971,-18.031 51.753,-18.629 52.498,22.091 52.275,24.5 52.054,26.888 10.011,41.177 7.33,41.843 4.64,42.512 0.009,2.763 0,0",style:{fill:t,fillOpacity:1},transform:"matrix(0.35277776,0,0,-0.35277776,104.66063,27.432483)",clipPath:"url(#clipPath250)"}),r.createElement("path",{id:"path251",d:"m 0,0 c -5.414,-3.462 18.431,-46.88 22.984,-52.806 4.598,-5.985 44.339,15.33 48.919,19.095 4.485,3.689 -19.959,43.19 -24.094,48.145 C 43.709,19.347 5.301,3.389 0,0",style:{fill:t,fillOpacity:1},transform:"matrix(0.35277776,0,0,-0.35277776,78.386577,31.389592)",clipPath:"url(#clipPath252)"}),r.createElement("path",{id:"path253",d:"m 0,0 c -10.644,2.34 -32.48,-30.893 -35.654,-40.914 -3.287,-10.381 39.665,-29.19 51.278,-31.26 11.452,-2.042 29.407,34.551 31.053,43.785 C 48.27,-19.448 10.51,-2.311 0,0",style:{fill:t,fillOpacity:1},transform:"matrix(0.35277776,0,0,-0.35277776,53.290081,16.219759)",clipPath:"url(#clipPath254)"}),r.createElement("path",{id:"path255",d:"m 0,0 c -6.9,8.86 -41.164,7.265 -54.07,2.957 -13.44,-4.488 -9.594,-32.054 -2.351,-42.402 7.381,-10.544 45.418,-6.444 57.923,-0.963 C 13.5,-35.149 7.017,-9.009 0,0",style:{fill:t,fillOpacity:1},transform:"matrix(0.35277776,0,0,-0.35277776,47.684936,-5.6278732)",clipPath:"url(#clipPath256)"}),r.createElement("path",{id:"path257",d:"M 0,0 C 2.74,9.375 -14.694,22.779 -28.835,26.945 -43.218,31.182 -61.425,21.952 -65.789,12.379 -70.358,2.353 -51.417,-12.636 -35.591,-16.869 -20.056,-21.023 -2.863,-9.796 0,0",style:{fill:t,fillOpacity:1},transform:"matrix(0.35277776,0,0,-0.35277776,60.27307,-19.250457)",clipPath:"url(#clipPath258)"}),r.createElement("path",{id:"path259",d:"m 0,0 v 0 c -9.014,9.721 -25.676,15 -37.865,11.833 v 0 c -12.768,-3.318 -16.148,-14.654 -6.81,-25.38 v 0 c 9.54,-10.957 27.967,-16.314 40.402,-11.946 v 0 C 7.576,-21.33 9.193,-9.914 0,0",style:{fill:t,fillOpacity:1},transform:"matrix(0.35277776,0,0,-0.35277776,81.229816,-29.632638)",clipPath:"url(#clipPath260)"}),r.createElement("path",{id:"path261",d:"m 0,0 c -3.296,1.905 -5.8,4.688 -7.508,8.351 -1.71,3.663 -2.564,8.155 -2.564,13.479 0,5.224 0.842,9.656 2.527,13.295 1.685,3.637 4.15,6.397 7.398,8.277 3.248,1.88 7.216,2.82 11.904,2.82 2.93,0 5.798,-0.318 8.607,-0.952 2.808,-0.635 5.091,-1.465 6.849,-2.49 L 26.188,24.54 c -2.686,0.244 -5.373,0.463 -8.058,0.659 l 1.465,12.38 c -1.221,0.341 -2.527,0.61 -3.919,0.805 -1.392,0.195 -2.82,0.293 -4.285,0.293 -2.882,0 -5.287,-0.622 -7.216,-1.867 -1.929,-1.246 -3.369,-3.126 -4.322,-5.641 -0.951,-2.515 -1.428,-5.629 -1.428,-9.339 0,-3.762 0.537,-6.911 1.612,-9.45 C 1.11,9.84 2.734,7.935 4.908,6.666 7.081,5.396 9.877,4.762 13.296,4.762 c 1.952,0 4.04,0.183 6.263,0.549 2.221,0.366 4.431,0.867 6.629,1.502 L 27.433,0 C 25.773,-0.782 23.526,-1.453 20.694,-2.014 17.861,-2.575 14.955,-2.857 11.977,-2.857 7.289,-2.857 3.297,-1.904 0,0",style:{fill:t,fillOpacity:1},transform:"matrix(0.35277776,0,0,-0.35277776,-5.4426554,91.807584)",clipPath:"url(#clipPath262)"}),r.createElement("path",{id:"path263",d:"m 0,0 c 1.685,1.245 2.954,3.124 3.809,5.64 0.854,2.515 1.282,5.677 1.282,9.486 0,3.809 -0.428,6.971 -1.282,9.486 -0.855,2.515 -2.113,4.396 -3.773,5.641 -1.66,1.245 -3.735,1.868 -6.226,1.868 -2.442,0 -4.494,-0.623 -6.153,-1.868 -1.661,-1.245 -2.919,-3.126 -3.772,-5.641 -0.856,-2.515 -1.283,-5.677 -1.283,-9.486 0,-3.809 0.427,-6.971 1.283,-9.486 0.853,-2.516 2.111,-4.395 3.772,-5.64 1.659,-1.246 3.711,-1.868 6.153,-1.868 2.441,0 4.505,0.622 6.19,1.868 m -16.885,-6.557 c -2.93,1.905 -5.164,4.689 -6.702,8.351 -1.539,3.663 -2.307,8.106 -2.307,13.332 0,5.226 0.768,9.669 2.307,13.332 1.538,3.663 3.772,6.447 6.702,8.351 2.931,1.904 6.494,2.857 10.695,2.857 4.15,0 7.703,-0.941 10.659,-2.82 2.954,-1.881 5.2,-4.665 6.739,-8.351 1.538,-3.688 2.307,-8.143 2.307,-13.369 C 13.515,9.9 12.746,5.457 11.208,1.794 9.669,-1.868 7.423,-4.652 4.469,-6.557 1.513,-8.461 -2.04,-9.413 -6.19,-9.413 c -4.201,0 -7.764,0.952 -10.695,2.856",style:{fill:t,fillOpacity:1},transform:"matrix(0.35277776,0,0,-0.35277776,15.489008,89.494562)",clipPath:"url(#clipPath264)"}),r.createElement("path",{id:"path265",d:"m 0,0 c 2.271,1.246 4.029,3.076 5.274,5.494 1.246,2.417 1.868,5.262 1.868,8.534 0,3.271 -0.622,6.116 -1.868,8.534 -1.245,2.417 -2.992,4.248 -5.237,5.493 -2.247,1.246 -4.908,1.869 -7.985,1.869 H -12.05 V -1.868 h 4.029 c 3.077,0 5.75,0.623 8.021,1.868 m -20.4,26.554 0.585,3.736 -5.493,-0.659 c -0.147,2.637 -0.147,5.248 0,7.838 h 15.895 c 5.322,0 9.84,-0.905 13.552,-2.711 3.711,-1.807 6.494,-4.444 8.351,-7.911 1.855,-3.468 2.784,-7.74 2.784,-12.819 C 15.274,8.997 14.345,4.736 12.49,1.246 10.633,-2.247 7.899,-4.896 4.285,-6.703 0.671,-8.51 -3.724,-9.413 -8.9,-9.413 h -11.5 z",style:{fill:t,fillOpacity:1},transform:"matrix(0.35277776,0,0,-0.35277776,30.373593,89.107035)",clipPath:"url(#clipPath266)"}),r.createElement("path",{id:"path267",d:"M 0,0 V 6.3 L 20.071,6.959 V -0.44 Z M -0.732,19.119 0,26.078 h 23.733 l 0.44,-7.399 z m 0,-32.964 25.638,0.513 -0.44,-7.472 H -4.835 Z m -6.52,29.008 1.465,10.915 h 6.812 v -46.882 h -8.277 z m -6.373,10.915 h 12.6 v -6.373 l -12.6,-1.465 z",style:{fill:t,fillOpacity:1},transform:"matrix(0.35277776,0,0,-0.35277776,41.70493,85.088615)",clipPath:"url(#clipPath268)"}),r.createElement("path",{id:"path269",d:"m 0,0 c -3.296,1.905 -5.8,4.688 -7.508,8.351 -1.71,3.663 -2.564,8.155 -2.564,13.479 0,5.224 0.842,9.656 2.527,13.295 1.685,3.637 4.15,6.397 7.398,8.277 3.248,1.88 7.216,2.82 11.904,2.82 2.93,0 5.798,-0.318 8.607,-0.952 2.808,-0.635 5.091,-1.465 6.849,-2.49 L 26.188,24.54 c -2.687,0.244 -5.373,0.463 -8.058,0.659 l 1.465,12.38 c -1.221,0.341 -2.527,0.61 -3.919,0.805 -1.392,0.195 -2.82,0.293 -4.285,0.293 -2.882,0 -5.287,-0.622 -7.216,-1.867 -1.929,-1.246 -3.369,-3.126 -4.322,-5.641 -0.952,-2.515 -1.428,-5.629 -1.428,-9.339 0,-3.762 0.537,-6.911 1.611,-9.45 C 1.11,9.84 2.734,7.935 4.908,6.666 7.081,5.396 9.877,4.762 13.296,4.762 c 1.952,0 4.04,0.183 6.263,0.549 2.221,0.366 4.431,0.867 6.629,1.502 L 27.433,0 C 25.773,-0.782 23.526,-1.453 20.694,-2.014 17.861,-2.575 14.955,-2.857 11.977,-2.857 7.289,-2.857 3.297,-1.904 0,0",style:{fill:t,fillOpacity:1},transform:"matrix(0.35277776,0,0,-0.35277776,72.081451,91.807584)",clipPath:"url(#clipPath270)"}),r.createElement("path",{id:"path271",d:"m 0,0 c -1.71,3.37 -3.345,6.348 -4.908,8.937 l 6.3,3.516 C 3.443,9.62 5.665,6.165 8.058,2.088 10.45,-1.99 12.477,-5.933 14.138,-9.742 H 4.248 C 3.125,-6.618 1.709,-3.37 0,0 m -14.065,12.965 10.183,0.88 c 2.588,0.244 4.675,1.123 6.263,2.637 1.586,1.513 2.381,3.467 2.381,5.86 0,2.392 -0.733,4.285 -2.198,5.677 -1.465,1.392 -3.419,2.088 -5.861,2.088 h -10.621 l 2.344,7.032 h 8.644 c 4.883,0 8.754,-1.245 11.611,-3.736 2.856,-2.491 4.284,-5.909 4.284,-10.255 0,-3.175 -0.695,-5.934 -2.087,-8.278 C 9.486,12.526 7.593,10.682 5.201,9.34 2.807,7.996 0.121,7.179 -2.857,6.886 L -14.065,5.787 Z m -5.86,13.259 0.513,3.736 -4.834,-0.732 c -0.147,3.271 -0.196,5.908 -0.147,7.911 h 12.746 V -9.742 h -8.278 z",style:{fill:t,fillOpacity:1},transform:"matrix(0.35277776,0,0,-0.35277776,92.84513,88.990758)",clipPath:"url(#clipPath272)"}),r.createElement("path",{id:"path273",d:"m 0,0 c -1.245,3.833 -2.65,7.142 -4.212,9.926 h -3.37 C -9.145,7.142 -10.548,3.833 -11.793,0 c -1.246,-3.835 -2.284,-7.948 -3.114,-12.343 H 3.186 C 2.308,-7.948 1.246,-3.835 0,0 m -21.023,-3.297 c 2.27,8.668 5.065,15.468 8.387,20.401 H 0.842 c 3.37,-4.981 6.19,-11.794 8.461,-20.437 2.271,-8.644 3.674,-17.459 4.212,-26.444 H 5.237 c -0.244,3.956 -0.585,7.422 -1.025,10.402 h -20.217 c -0.44,-2.98 -0.782,-6.446 -1.026,-10.402 h -8.204 c 0.537,8.985 1.941,17.811 4.212,26.48",style:{fill:t,fillOpacity:1},transform:"matrix(0.35277776,0,0,-0.35277776,108.41459,81.922928)",clipPath:"url(#clipPath274)"}),r.createElement("path",{id:"path275",d:"m 0,0 v 6.447 l 19.046,0.512 v -7.398 z m -0.732,21.097 -3.004,6.959 h 27.909 v -7.399 z m -6.593,-3.956 1.465,10.915 h 6.812 v -46.882 h -8.277 z m -6.373,10.915 h 13.112 v -6.373 l -13.112,-1.465 z",style:{fill:t,fillOpacity:1},transform:"matrix(0.35277776,0,0,-0.35277776,119.59077,85.786408)",clipPath:"url(#clipPath276)"}),r.createElement("path",{id:"path277",d:"m 0,0 h -15.164 l -0.293,7.032 H 23.367 L 23.66,0 H 8.277 V -39.849 H 0 Z",style:{fill:t,fillOpacity:1},transform:"matrix(0.35277776,0,0,-0.35277776,135.89683,78.36968)",clipPath:"url(#clipPath278)"}),r.createElement("path",{id:"path279",d:"M 0,0 V 6.3 L 20.071,6.959 V -0.44 Z M -0.732,19.119 0,26.078 h 23.733 l 0.44,-7.399 z m 0,-32.964 25.638,0.513 -0.44,-7.472 H -4.835 Z m -6.52,29.008 1.465,10.915 h 6.812 v -46.882 h -8.277 z m -6.373,10.915 h 12.6 v -6.373 l -12.6,-1.465 z",style:{fill:t,fillOpacity:1},transform:"matrix(0.35277776,0,0,-0.35277776,150.23873,85.088615)",clipPath:"url(#clipPath280)"}),r.createElement("path",{id:"path281",d:"m 0,0 c 2.271,1.246 4.029,3.076 5.274,5.494 1.246,2.417 1.868,5.262 1.868,8.534 0,3.271 -0.622,6.116 -1.868,8.534 -1.245,2.417 -2.992,4.248 -5.237,5.493 -2.247,1.246 -4.908,1.869 -7.985,1.869 H -12.05 V -1.868 h 4.029 c 3.077,0 5.75,0.623 8.021,1.868 m -20.4,26.554 0.585,3.736 -5.493,-0.659 c -0.147,2.637 -0.147,5.248 0,7.838 h 15.895 c 5.322,0 9.84,-0.905 13.552,-2.711 3.711,-1.807 6.494,-4.444 8.351,-7.911 1.855,-3.468 2.784,-7.74 2.784,-12.819 C 15.274,8.997 14.345,4.736 12.49,1.246 10.633,-2.247 7.899,-4.896 4.285,-6.703 0.671,-8.51 -3.724,-9.413 -8.9,-9.413 h -11.5 z",style:{fill:t,fillOpacity:1},transform:"matrix(0.35277776,0,0,-0.35277776,169.91696,89.107035)",clipPath:"url(#clipPath282)"}),r.createElement("path",{id:"path283",d:"m 0,0 c -1.209,0.227 -2.403,0.558 -3.581,0.992 l 0.186,0.992 c 1.24,-0.393 2.45,-0.693 3.627,-0.899 1.178,-0.207 2.274,-0.31 3.287,-0.31 1.715,0 3.069,0.361 4.061,1.085 0.993,0.724 1.489,1.715 1.489,2.976 0,0.869 -0.202,1.597 -0.605,2.186 -0.403,0.59 -1.033,1.096 -1.891,1.519 -0.858,0.424 -2,0.822 -3.426,1.194 -1.509,0.392 -2.719,0.822 -3.628,1.287 -0.91,0.465 -1.581,1.033 -2.015,1.705 -0.434,0.672 -0.651,1.493 -0.651,2.465 0,1.654 0.574,2.924 1.72,3.814 1.148,0.888 2.745,1.333 4.791,1.333 1.178,0 2.181,-0.062 3.007,-0.186 C 7.198,20.029 8.066,19.832 8.976,19.564 8.934,19.13 8.872,18.778 8.79,18.509 c -0.93,0.269 -1.773,0.455 -2.527,0.559 -0.755,0.103 -1.721,0.154 -2.899,0.154 -1.674,0 -2.982,-0.34 -3.922,-1.022 -0.941,-0.683 -1.411,-1.654 -1.411,-2.915 0,-0.786 0.186,-1.442 0.558,-1.969 0.372,-0.527 0.941,-0.982 1.705,-1.364 C 1.059,11.57 2.093,11.202 3.395,10.851 5.048,10.396 6.371,9.911 7.364,9.394 8.356,8.877 9.084,8.257 9.549,7.534 10.014,6.81 10.247,5.921 10.247,4.867 10.247,3.234 9.652,1.958 8.464,1.038 7.275,0.119 5.627,-0.341 3.519,-0.341 2.382,-0.341 1.209,-0.228 0,0",style:{fill:t,fillOpacity:1},transform:"matrix(0.35277776,0,0,-0.35277776,31.419306,106.99668)",clipPath:"url(#clipPath284)"}),r.createElement("path",{id:"path285",d:"M 0,0 H -7.038 V 1.085 H 8.216 V 0 H 1.178 V -19.068 H 0 Z",style:{fill:t,fillOpacity:1},transform:"matrix(0.35277776,0,0,-0.35277776,48.574995,100.24822)",clipPath:"url(#clipPath286)"}),r.createElement("path",{id:"path287",d:"m 0,0 c -1.313,1.426 -1.969,3.534 -1.969,6.325 v 12.092 h 1.178 V 6.325 c 0,-2.419 0.548,-4.243 1.644,-5.472 1.095,-1.23 2.728,-1.845 4.898,-1.845 2.067,0 3.674,0.62 4.822,1.86 1.146,1.24 1.72,3.059 1.72,5.457 v 12.092 h 1.178 V 6.325 c 0,-2.749 -0.677,-4.847 -2.03,-6.294 C 10.087,-1.416 8.19,-2.14 5.751,-2.14 3.229,-2.14 1.312,-1.427 0,0",style:{fill:t,fillOpacity:1},transform:"matrix(0.35277776,0,0,-0.35277776,63.652752,106.36238)",clipPath:"url(#clipPath288)"}),r.createElement("path",{id:"path289",d:"m 0,0 c 1.364,0.733 2.418,1.778 3.162,3.132 0.744,1.353 1.117,2.94 1.117,4.759 0,1.818 -0.373,3.405 -1.117,4.759 -0.744,1.354 -1.793,2.392 -3.146,3.116 -1.355,0.723 -2.941,1.085 -4.76,1.085 H -9.426 V -1.101 h 4.651 c 1.819,0 3.411,0.367 4.775,1.101 m -10.573,16.448 v 0.434 1.085 h 5.829 c 2.067,0 3.876,-0.413 5.426,-1.24 C 2.232,15.9 3.426,14.728 4.263,13.208 5.1,11.689 5.519,9.916 5.519,7.891 5.519,5.865 5.1,4.093 4.263,2.573 3.426,1.054 2.232,-0.119 0.682,-0.945 -0.868,-1.772 -2.677,-2.186 -4.744,-2.186 h -5.829 z",style:{fill:t,fillOpacity:1},transform:"matrix(0.35277776,0,0,-0.35277776,84.570975,106.20385)",clipPath:"url(#clipPath290)"}),r.createElement("path",{id:"path291",d:"m 480.761,245.829 h 1.178 v -20.153 h -1.178 z m -5.023,-19.068 5.612,-0.062 5.581,0.062 v -1.085 h -11.162 z m 0.031,19.068 h 11.162 v -1.085 l -5.581,0.062 -5.612,-0.062 z",style:{fill:t,fillOpacity:1},transform:"matrix(0.35277776,0,0,-0.35277776,-69.783606,186.58828)",clipPath:"url(#clipPath292)"}),r.createElement("path",{id:"path293",d:"m 0,0 c 1.178,0.764 2.082,1.845 2.713,3.24 0.63,1.395 0.945,3.043 0.945,4.945 0,1.902 -0.315,3.555 -0.945,4.961 -0.631,1.405 -1.535,2.485 -2.713,3.24 -1.179,0.754 -2.553,1.131 -4.124,1.131 -1.592,0 -2.971,-0.377 -4.139,-1.131 -1.168,-0.755 -2.067,-1.835 -2.697,-3.24 -0.631,-1.406 -0.946,-3.059 -0.946,-4.961 0,-1.902 0.315,-3.555 0.946,-4.961 0.63,-1.406 1.529,-2.485 2.697,-3.24 1.168,-0.754 2.547,-1.131 4.139,-1.131 1.571,0 2.945,0.382 4.124,1.147 m -8.883,-1.023 c -1.354,0.847 -2.398,2.056 -3.132,3.627 -0.734,1.571 -1.1,3.431 -1.1,5.581 0,2.15 0.366,4.01 1.1,5.581 0.734,1.57 1.778,2.78 3.132,3.627 1.354,0.847 2.94,1.272 4.759,1.272 1.819,0 3.406,-0.425 4.76,-1.272 1.353,-0.847 2.397,-2.057 3.131,-3.627 0.733,-1.571 1.1,-3.431 1.1,-5.581 0,-2.15 -0.367,-4.01 -1.1,-5.581 -0.734,-1.571 -1.778,-2.78 -3.131,-3.627 -1.354,-0.848 -2.941,-1.272 -4.76,-1.272 -1.819,0 -3.405,0.424 -4.759,1.272",style:{fill:t,fillOpacity:1},transform:"matrix(0.35277776,0,0,-0.35277776,118.16078,106.30763)",clipPath:"url(#clipPath294)"}),r.createElement("path",{id:"path295",d:"m 0,0 c -1.209,0.227 -2.403,0.558 -3.581,0.992 l 0.186,0.992 c 1.24,-0.393 2.45,-0.693 3.627,-0.899 1.178,-0.207 2.274,-0.31 3.287,-0.31 1.715,0 3.069,0.361 4.061,1.085 0.993,0.724 1.489,1.715 1.489,2.976 0,0.869 -0.202,1.597 -0.605,2.186 -0.403,0.59 -1.033,1.096 -1.891,1.519 -0.858,0.424 -2,0.822 -3.426,1.194 -1.509,0.392 -2.719,0.822 -3.628,1.287 -0.91,0.465 -1.581,1.033 -2.015,1.705 -0.434,0.672 -0.651,1.493 -0.651,2.465 0,1.654 0.574,2.924 1.72,3.814 1.148,0.888 2.745,1.333 4.791,1.333 1.178,0 2.18,-0.062 3.007,-0.186 C 7.198,20.029 8.066,19.832 8.976,19.564 8.934,19.13 8.872,18.778 8.789,18.509 7.86,18.778 7.017,18.964 6.263,19.068 c -0.755,0.103 -1.721,0.154 -2.899,0.154 -1.674,0 -2.982,-0.34 -3.922,-1.022 -0.941,-0.683 -1.411,-1.654 -1.411,-2.915 0,-0.786 0.186,-1.442 0.558,-1.969 0.372,-0.527 0.941,-0.982 1.705,-1.364 C 1.059,11.57 2.093,11.202 3.395,10.851 5.048,10.396 6.371,9.911 7.363,9.394 8.356,8.877 9.084,8.257 9.549,7.534 10.014,6.81 10.247,5.921 10.247,4.867 10.247,3.234 9.652,1.958 8.464,1.038 7.275,0.119 5.627,-0.341 3.519,-0.341 2.382,-0.341 1.209,-0.228 0,0",style:{fill:t,fillOpacity:1},transform:"matrix(0.35277776,0,0,-0.35277776,132.53832,106.99668)",clipPath:"url(#clipPath296)"}))))}},1332:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return L}});var r=n(6540),a=n(4755),l=n(2225);function i(e){return(0,l.k5)({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"3",y1:"12",x2:"21",y2:"12"},child:[]},{tag:"line",attr:{x1:"3",y1:"6",x2:"21",y2:"6"},child:[]},{tag:"line",attr:{x1:"3",y1:"18",x2:"21",y2:"18"},child:[]}]})(e)}function o(e){return(0,l.k5)({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"18",y1:"6",x2:"6",y2:"18"},child:[]},{tag:"line",attr:{x1:"6",y1:"6",x2:"18",y2:"18"},child:[]}]})(e)}var c=n(8027);var s=e=>{let{data:t}=e;const{t:n}=(0,a.useTranslation)(),{0:l,1:s}=(0,r.useState)(!1),{0:p,1:d}=(0,r.useState)(!1);if(!t||!t.menu)return null;return(0,r.useEffect)((()=>{const e=()=>{window.scrollY>100?d(!0):d(!1)};return window.addEventListener("scroll",e),()=>{window.removeEventListener("scroll",e)}}),[]),r.createElement("nav",{className:u.container},r.createElement("button",{onClick:()=>{s(!l)},className:u.burgerButton},l?r.createElement(o,{className:"text-white fixed right-4 z-[70] top-4",size:36}):r.createElement(i,{className:"text-white text-orange mx-8",size:36})),r.createElement("ul",{className:`${u.buttonsWrapper} ${l?u.menuOpen:u.menuClosed}`},t.menu.map(((e,t)=>r.createElement("li",{key:t,className:u.buttonsContainer},r.createElement("button",{onClick:()=>{var t;null===(t=document.getElementById(e))||void 0===t||t.scrollIntoView({behavior:"smooth"}),s(!l)},className:u.buttons},r.createElement(a.Trans,{i18nKey:`menu.${e}`},n(`menu.${e}`))))))),p&&r.createElement("button",{onClick:()=>{window.scrollTo({top:0,behavior:"smooth"})},className:u.backToTopButton,"aria-label":"Back to top"},r.createElement(c.uCC,{size:20})))};const u={container:"inline-block justify-between items-center bg-transparent sm:bg-secondary px-4 py-2 mx-0 sm:mx-8 rounded-none sm:rounded-full relative z-10",burgerButton:"md:hidden block focus:outline-none mx-auto",buttonsWrapper:"flex flex-col md:flex-row justify-evenly items-center w-full fixed sm:relative left-0 top-0 py-8 sm:py-0 gap-4 bg-secondary sm:bg-transparent",buttonsContainer:"my-4 sm:my-0",buttons:"text-white text-2xl px-4 py-0 hover:underline hover:text-purplelight text-nowrap",menuOpen:"block md:flex",menuClosed:"hidden md:flex",backToTopButton:"fixed bottom-4 right-4 bg-secondary text-white p-2 rounded-full shadow-lg z-50"};var p=e=>{let{clubLayout:t}=e;const{languages:n,changeLanguage:l,language:i}=(0,a.useI18next)();return r.createElement("aside",{className:d.container},r.createElement("ul",{className:d.buttonsWrapper},n.map((e=>r.createElement("li",{key:e,className:`${d.buttons} ${d.hover}\n            ${e===i?"bg-purplelight !text-dark font-bold":""}`,onClick:t=>{t.preventDefault(),l(e)}},r.createElement("div",{className:d.text},e))))))};const d={container:"flex flex-row justify-center self-center",buttonsWrapper:"flex justify-evenly flex-col",buttons:"flex my-1 py-1 px-2 shrink-0 grow-0 rounded justify-center text-white cursor-pointer mx-1 text-purplelight",text:"self-center capitalize",hover:"bg-primary hover:bg-secondary hover:text-white"};var f=n(3135),m=n(2215),h=n.n(m),y=function(e){var t=e.condition,n=e.wrapper,r=e.children;return t?n(r):r};function v(){return v=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},v.apply(this,arguments)}function b(e,t){return b=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},b(e,t)}var g,x="top",C="bottom";!function(e){e.STRICT="strict",e.LAX="lax",e.NONE="none"}(g||(g={}));var O="hidden",w="byCookieValue",k="CookieConsent",E=["children"],P={disableStyles:!1,hideOnAccept:!0,hideOnDecline:!0,location:C,visible:w,onAccept:function(e){},onDecline:function(){},cookieName:k,cookieValue:"true",declineCookieValue:"false",setDeclineCookie:!0,buttonText:"I understand",declineButtonText:"I decline",debug:!1,expires:365,containerClasses:"CookieConsent",contentClasses:"",buttonClasses:"",buttonWrapperClasses:"",declineButtonClasses:"",buttonId:"rcc-confirm-button",declineButtonId:"rcc-decline-button",extraCookieOptions:{},disableButtonStyles:!1,enableDeclineButton:!1,flipButtons:!1,sameSite:g.LAX,ButtonComponent:function(e){var t=e.children,n=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,E);return r.createElement("button",Object.assign({},n),t)},overlay:!1,overlayClasses:"",onOverlayClick:function(){},acceptOnOverlayClick:!1,ariaAcceptLabel:"Accept cookies",ariaDeclineLabel:"Decline cookies",acceptOnScroll:!1,acceptOnScrollPercentage:25,customContentAttributes:{},customContainerAttributes:{},customButtonProps:{},customDeclineButtonProps:{},customButtonWrapperAttributes:{},style:{},buttonStyle:{},declineButtonStyle:{},contentStyle:{},overlayStyle:{}},j={visible:!1,style:{alignItems:"baseline",background:"#353535",color:"white",display:"flex",flexWrap:"wrap",justifyContent:"space-between",left:"0",position:"fixed",width:"100%",zIndex:"999"},buttonStyle:{background:"#ffd42d",border:"0",borderRadius:"0px",boxShadow:"none",color:"black",cursor:"pointer",flex:"0 0 auto",padding:"5px 10px",margin:"15px"},declineButtonStyle:{background:"#c12a2a",border:"0",borderRadius:"0px",boxShadow:"none",color:"#e5e5e5",cursor:"pointer",flex:"0 0 auto",padding:"5px 10px",margin:"15px"},contentStyle:{flex:"1 0 300px",margin:"15px"},overlayStyle:{position:"fixed",left:0,top:0,width:"100%",height:"100%",zIndex:"999",backgroundColor:"rgba(0,0,0,0.3)"}},S=function(e){return e+"-legacy"},N=function(e){var t,n;function a(){var t;return(t=e.apply(this,arguments)||this).state=j,t.handleScroll=function(){var e=v({},P,t.props).acceptOnScrollPercentage,n=document.documentElement,r=document.body,a="scrollTop",l="scrollHeight";(n[a]||r[a])/((n[l]||r[l])-n.clientHeight)*100>e&&t.accept(!0)},t.removeScrollListener=function(){t.props.acceptOnScroll&&window.removeEventListener("scroll",t.handleScroll)},t}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,b(t,n);var l=a.prototype;return l.componentDidMount=function(){var e=this.props.debug;(void 0===this.getCookieValue()||e)&&(this.setState({visible:!0}),this.props.acceptOnScroll&&window.addEventListener("scroll",this.handleScroll,{passive:!0}))},l.componentWillUnmount=function(){this.removeScrollListener()},l.accept=function(e){var t;void 0===e&&(e=!1);var n=v({},P,this.props),r=n.cookieName,a=n.cookieValue,l=n.hideOnAccept,i=n.onAccept;this.setCookie(r,a),i(null!=(t=e)&&t),l&&(this.setState({visible:!1}),this.removeScrollListener())},l.overlayClick=function(){var e=v({},P,this.props),t=e.acceptOnOverlayClick,n=e.onOverlayClick;t&&this.accept(),n()},l.decline=function(){var e=v({},P,this.props),t=e.cookieName,n=e.declineCookieValue,r=e.hideOnDecline,a=e.onDecline;e.setDeclineCookie&&this.setCookie(t,n),a(),r&&this.setState({visible:!1})},l.setCookie=function(e,t){var n=this.props,r=n.extraCookieOptions,a=n.expires,l=n.sameSite,i=this.props.cookieSecurity;void 0===i&&(i=!window.location||"https:"===window.location.protocol);var o=v({expires:a},r,{sameSite:l,secure:i});l===g.NONE&&h().set(S(e),t,o),h().set(e,t,o)},l.getCookieValue=function(){return function(e){void 0===e&&(e=k);var t=h().get(e);return void 0===t?h().get(S(e)):t}(this.props.cookieName)},l.render=function(){var e=this;switch(this.props.visible){case O:return null;case w:if(!this.state.visible)return null}var t=this.props,n=t.location,a=t.style,l=t.buttonStyle,i=t.declineButtonStyle,o=t.contentStyle,c=t.disableStyles,s=t.buttonText,u=t.declineButtonText,p=t.containerClasses,d=t.contentClasses,f=t.buttonClasses,m=t.buttonWrapperClasses,h=t.declineButtonClasses,b=t.buttonId,g=t.declineButtonId,k=t.disableButtonStyles,E=t.enableDeclineButton,P=t.flipButtons,j=t.ButtonComponent,S=t.overlay,N=t.overlayClasses,B=t.overlayStyle,L=t.ariaAcceptLabel,z=t.ariaDeclineLabel,D=t.customContainerAttributes,_=t.customContentAttributes,A=t.customButtonProps,I=t.customDeclineButtonProps,V=t.customButtonWrapperAttributes,T={},M={},H={},W={},R={};switch(c?(T=Object.assign({},a),M=Object.assign({},l),H=Object.assign({},i),W=Object.assign({},o),R=Object.assign({},B)):(T=Object.assign({},v({},this.state.style,a)),W=Object.assign({},v({},this.state.contentStyle,o)),R=Object.assign({},v({},this.state.overlayStyle,B)),k?(M=Object.assign({},l),H=Object.assign({},i)):(M=Object.assign({},v({},this.state.buttonStyle,l)),H=Object.assign({},v({},this.state.declineButtonStyle,i)))),n){case x:T.top="0";break;case C:T.bottom="0"}var U=[];return E&&U.push(r.createElement(j,Object.assign({key:"declineButton",style:H,className:h,id:g,"aria-label":z,onClick:function(){e.decline()}},I),u)),U.push(r.createElement(j,Object.assign({key:"acceptButton",style:M,className:f,id:b,"aria-label":L,onClick:function(){e.accept()}},A),s)),P&&U.reverse(),r.createElement(y,{condition:S,wrapper:function(t){return r.createElement("div",{style:R,className:N,onClick:function(){e.overlayClick()}},t)}},r.createElement("div",Object.assign({className:""+p,style:T},D),r.createElement("div",Object.assign({style:W,className:d},_),this.props.children),r.createElement("div",Object.assign({className:""+m},V),U.map((function(e){return e})))))},a}(r.Component);N.defaultProps=P;var B=N;var L=e=>{let{children:t,data:n}=e;const{t:l}=(0,a.useTranslation)(),{0:i,1:o}=(0,r.useState)(!1);(0,r.useEffect)((()=>{i?c():u()}),[i]);const c=()=>{if("undefined"!=typeof window){const e=window.gtag;e&&e("consent","update",{analytics_storage:"granted"})}},u=()=>{if("undefined"!=typeof window){const e=window.gtag;e&&e("consent","update",{analytics_storage:"denied"})}};return r.createElement(r.Fragment,null,r.createElement("div",{className:z.wrapper},r.createElement("div",{className:z.header},r.createElement("div",{className:z.logoContainer},r.createElement(f.A,{fillColour:"#FCFCFC"})),r.createElement("div",{className:z.navbar},r.createElement(s,{data:n})),r.createElement("div",null,r.createElement(p,null))),r.createElement("div",{className:z.childrenContent},r.createElement("main",null,t))),r.createElement(B,{location:"bottom",buttonText:l("granted"),declineButtonText:l("denied"),enableDeclineButton:!0,cookieName:"gatsby-google-analytics-consent",expires:150,onAccept:()=>o(!0),onDecline:()=>o(!1),overlay:!0,buttonClasses:"!border !px-6 !py-2 !rounded-full !bg-light",declineButtonClasses:"!border !px-6 !py-2 !rounded-full !bg-dark",overlayClasses:"!bg-dark/90",containerClasses:"bg-dark border-2 border-light rounded-2xl gradient p-2 sm:p-4 poppins-regular",contentClasses:"text-white"},l("cookieConsent")))};const z={wrapper:"flex flex-col min-h-screen",header:"grid grid-flow-col justify-stretch items-center",logoContainer:"flex h-32 sm:h-60 mx-auto pt-8",navbar:"flex w-1/2 mx-auto",childrenContent:"text-light p-2 sm:p-8 mt-8"}},2215:function(e,t,n){var r,a;!function(l){if(void 0===(a="function"==typeof(r=l)?r.call(t,n,t,e):r)||(e.exports=a),e.exports=l(),!!0){var i=window.Cookies,o=window.Cookies=l();o.noConflict=function(){return window.Cookies=i,o}}}((function(){function e(){for(var e=0,t={};e<arguments.length;e++){var n=arguments[e];for(var r in n)t[r]=n[r]}return t}function t(e){return e.replace(/(%[0-9A-Z]{2})+/g,decodeURIComponent)}return function n(r){function a(){}function l(t,n,l){if("undefined"!=typeof document){"number"==typeof(l=e({path:"/"},a.defaults,l)).expires&&(l.expires=new Date(1*new Date+864e5*l.expires)),l.expires=l.expires?l.expires.toUTCString():"";try{var i=JSON.stringify(n);/^[\{\[]/.test(i)&&(n=i)}catch(s){}n=r.write?r.write(n,t):encodeURIComponent(String(n)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),t=encodeURIComponent(String(t)).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent).replace(/[\(\)]/g,escape);var o="";for(var c in l)l[c]&&(o+="; "+c,!0!==l[c]&&(o+="="+l[c].split(";")[0]));return document.cookie=t+"="+n+o}}function i(e,n){if("undefined"!=typeof document){for(var a={},l=document.cookie?document.cookie.split("; "):[],i=0;i<l.length;i++){var o=l[i].split("="),c=o.slice(1).join("=");n||'"'!==c.charAt(0)||(c=c.slice(1,-1));try{var s=t(o[0]);if(c=(r.read||r)(c,s)||t(c),n)try{c=JSON.parse(c)}catch(u){}if(a[s]=c,e===s)break}catch(u){}}return e?a[e]:a}}return a.set=l,a.get=function(e){return i(e,!1)},a.getJSON=function(e){return i(e,!0)},a.remove=function(t,n){l(t,"",e(n,{expires:-1}))},a.defaults={},a.withConverter=n,a}((function(){}))}))},2225:function(e,t,n){"use strict";n.d(t,{k5:function(){return f}});var r=n(6540),a={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},l=r.createContext&&r.createContext(a),i=["attr","size","title"];function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c.apply(this,arguments)}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t,n){var r;return(t="symbol"==typeof(r=function(e,t){if("object"!=typeof e||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"))?r:r+"")in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(e){return e&&e.map(((e,t)=>r.createElement(e.tag,u({key:t},e.attr),d(e.child))))}function f(e){return t=>r.createElement(m,c({attr:u({},e.attr)},t),d(e.child))}function m(e){var t=t=>{var n,{attr:a,size:l,title:s}=e,p=o(e,i),d=l||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),r.createElement("svg",c({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,a,p,{className:n,style:u(u({color:e.color||t.color},t.style),e.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),s&&r.createElement("title",null,s),e.children)};return void 0!==l?r.createElement(l.Consumer,null,(e=>t(e))):t(a)}}}]);
//# sourceMappingURL=commons-f195f3372b95d2e1689f.js.map