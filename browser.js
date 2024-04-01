// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,e;t=this,e=function(){"use strict";function t(){var t,e=arguments,r="https://stdlib.io/e/"+e[0]+"?";for(t=1;t<e.length;t++)r+="&arg[]="+encodeURIComponent(e[t]);return r}var e="function"==typeof Object.defineProperty?Object.defineProperty:null,r=Object.defineProperty;function i(t){return"number"==typeof t}function n(t){var e,r="";for(e=0;e<t;e++)r+="0";return r}function a(t,e,r){var i=!1,a=e-t.length;return a<0||(function(t){return"-"===t[0]}(t)&&(i=!0,t=t.substr(1)),t=r?t+n(a):n(a)+t,i&&(t="-"+t)),t}var s=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function l(t){var e,r,n;switch(t.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(r=t.arg,n=parseInt(r,10),!isFinite(n)){if(!i(r))throw new Error("invalid integer. Value: "+r);n=0}return n<0&&("u"===t.specifier||10!==e)&&(n=4294967295+n+1),n<0?(r=(-n).toString(e),t.precision&&(r=a(r,t.precision,t.padRight)),r="-"+r):(r=n.toString(e),n||t.precision?t.precision&&(r=a(r,t.precision,t.padRight)):r="",t.sign&&(r=t.sign+r)),16===e&&(t.alternate&&(r="0x"+r),r=t.specifier===o.call(t.specifier)?o.call(r):s.call(r)),8===e&&t.alternate&&"0"!==r.charAt(0)&&(r="0"+r),r}var p=Math.abs,u=String.prototype.toLowerCase,c=String.prototype.toUpperCase,h=String.prototype.replace,f=/e\+(\d)$/,g=/e-(\d)$/,_=/^(\d+)$/,d=/^(\d+)e/,v=/\.0$/,y=/\.0*e/,b=/(\..*[^0])0*e/;function w(t){var e,r,n=parseFloat(t.arg);if(!isFinite(n)){if(!i(t.arg))throw new Error("invalid floating-point number. Value: "+r);n=t.arg}switch(t.specifier){case"e":case"E":r=n.toExponential(t.precision);break;case"f":case"F":r=n.toFixed(t.precision);break;case"g":case"G":p(n)<1e-4?((e=t.precision)>0&&(e-=1),r=n.toExponential(e)):r=n.toPrecision(t.precision),t.alternate||(r=h.call(r,b,"$1e"),r=h.call(r,y,"e"),r=h.call(r,v,""));break;default:throw new Error("invalid double notation. Value: "+t.specifier)}return r=h.call(r,f,"e+0$1"),r=h.call(r,g,"e-0$1"),t.alternate&&(r=h.call(r,_,"$1."),r=h.call(r,d,"$1.e")),n>=0&&t.sign&&(r=t.sign+r),r=t.specifier===c.call(t.specifier)?c.call(r):u.call(r)}function m(t){var e,r="";for(e=0;e<t;e++)r+=" ";return r}var x=String.fromCharCode,k=isNaN,E=Array.isArray;function S(t){var e={};return e.specifier=t.specifier,e.precision=void 0===t.precision?1:t.precision,e.width=t.width,e.flags=t.flags||"",e.mapping=t.mapping,e}function V(t){var e,r,i,n,s,o,p,u,c,h,f,g,_;if(!E(t))throw new TypeError("invalid argument. First argument must be an array. Value: `"+t+"`.");for(o="",p=1,u=0;u<t.length;u++)if("string"==typeof(i=t[u]))o+=i;else{if(e=void 0!==i.precision,!(i=S(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+u+"`. Value: `"+i+"`.");for(i.mapping&&(p=i.mapping),r=i.flags,c=0;c<r.length;c++)switch(n=r.charAt(c)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=r.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===i.width){if(i.width=parseInt(arguments[p],10),p+=1,k(i.width))throw new TypeError("the argument for * width at position "+p+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(e&&"*"===i.precision){if(i.precision=parseInt(arguments[p],10),p+=1,k(i.precision))throw new TypeError("the argument for * precision at position "+p+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,e=!1)}switch(i.arg=arguments[p],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(i.padZeros=!1),i.arg=l(i);break;case"s":i.maxWidth=e?i.precision:-1;break;case"c":if(!k(i.arg)){if((s=parseInt(i.arg,10))<0||s>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=k(s)?String(i.arg):x(s)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(i.precision=6),i.arg=w(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=a(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=(h=i.arg,f=i.width,g=i.padRight,_=void 0,(_=f-h.length)<0?h:h=g?h+m(_):m(_)+h)),o+=i.arg||"",p+=1}return o}var j=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function A(t){var e={mapping:t[1]?parseInt(t[1],10):void 0,flags:t[2],width:t[3],precision:t[5],specifier:t[6]};return"."===t[4]&&void 0===t[5]&&(e.precision="1"),e}function T(t){var e,r,i,n;for(r=[],n=0,i=j.exec(t);i;)(e=t.slice(n,j.lastIndex-i[0].length)).length&&r.push(e),r.push(A(i)),n=j.lastIndex,i=j.exec(t);return(e=t.slice(n)).length&&r.push(e),r}function $(t){var e,r;if("string"!=typeof t)throw new TypeError($("invalid argument. First argument must be a string. Value: `%s`.",t));for(e=[T(t)],r=1;r<arguments.length;r++)e.push(arguments[r]);return V.apply(null,e)}var F,I=Object.prototype,C=I.toString,O=I.__defineGetter__,R=I.__defineSetter__,P=I.__lookupGetter__,Z=I.__lookupSetter__;F=function(){try{return e({},"x",{}),!0}catch(t){return!1}}()?r:function(t,e,r){var i,n,a,s;if("object"!=typeof t||null===t||"[object Array]"===C.call(t))throw new TypeError($("invalid argument. First argument must be an object. Value: `%s`.",t));if("object"!=typeof r||null===r||"[object Array]"===C.call(r))throw new TypeError($("invalid argument. Property descriptor must be an object. Value: `%s`.",r));if((n="value"in r)&&(P.call(t,e)||Z.call(t,e)?(i=t.__proto__,t.__proto__=I,delete t[e],t[e]=r.value,t.__proto__=i):t[e]=r.value),a="get"in r,s="set"in r,n&&(a||s))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&O&&O.call(t,e,r.get),s&&R&&R.call(t,e,r.set),t};var G=F;function L(t,e,r){G(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})}var W,N,U,B=Object.prototype.hasOwnProperty,X="function"==typeof Symbol?Symbol:void 0,z="function"==typeof X&&"symbol"==typeof X("foo")&&(N="iterator",null!=(W=X)&&B.call(W,N))&&"symbol"==typeof X.iterator?Symbol.iterator:null;function J(t){return G(this,"next",{configurable:!1,enumerable:!0,get:function(){return this._next}}),this.value=t,G(this,"_next",{configurable:!1,enumerable:!1,writable:!0,value:null}),G(this,"_prev",{configurable:!1,enumerable:!1,writable:!0,value:null}),this}function M(){return this instanceof M?(this._length=0,this._first=null,this._last=null,this):new M}return L(M.prototype,"clear",(function(){return this._length=0,this._first=null,this._last=null,this})),L(M.prototype,"first",(function(){if(this._length)return this._first})),L(M.prototype,"insert",(function(e,r){var i;if(e===this._last)return this.push(r);for(i=this._first;i!==this._last&&i!==e;)i=i._next;if(i===this._last)throw new Error(t("1VB1e"));return i=new J(r),e._next._prev=i,i._next=e._next,e._next=i,i._prev=e,this._length+=1,this})),L(M.prototype,"iterator",(function(){var t,e,r,i,n;return r=this,n=-1,t=this.toArray(),L(e={},"next",(function(){return n+=1,i||n>=t.length?{done:!0}:{value:t[n],done:!1}})),L(e,"return",(function(t){return i=!0,arguments.length?{value:t,done:!0}:{done:!0}})),z&&L(e,z,(function(){return r.iterator()})),e})),L(M.prototype,"last",(function(){if(this._length)return this._last})),U=M.prototype,G(U,"length",{configurable:!1,enumerable:!1,get:function(){return this._length}}),L(M.prototype,"pop",(function(){var t;return this._length&&(t=this._last.value,this._last._prev?(this._last=this._last._prev,this._last._next=null):(this._first=null,this._last=null),this._length-=1),t})),L(M.prototype,"push",(function(t){var e;return e=new J(t),0===this._length?(this._first=e,this._last=e):(e._prev=this._last,this._last._next=e,this._last=e),this._length+=1,this})),L(M.prototype,"remove",(function(e){var r,i;if(e===this._first)return this.shift();if(e===this._last)return this.pop();for(r=e.value,i=this._first;i!==this._last&&i!==e;)i=i._next;if(i===this._last)throw new Error(t("1VB1e"));return e._prev._next=e._next,e._next._prev=e._prev,this._length-=1,r})),L(M.prototype,"shift",(function(){var t;return this._length&&(t=this._first.value,this._first._next?(this._first=this._first._next,this._first._prev=null):(this._first=null,this._last=null),this._length-=1),t})),L(M.prototype,"toArray",(function(){var t,e,r;for(e=[],t=this._first,r=0;r<this._length;r++)e.push(t.value),t=t.next;return e})),L(M.prototype,"toJSON",(function(){var t={type:"linked-list"};return t.data=this.toArray(),t})),L(M.prototype,"unshift",(function(t){var e;return e=new J(t),0===this._length?(this._first=e,this._last=e):(e._next=this._first,this._first._prev=e,this._first=e),this._length+=1,this})),M},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).linkedList=e();
//# sourceMappingURL=browser.js.map
