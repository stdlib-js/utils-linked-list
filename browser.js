// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,e;t=this,e=function(){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null,e=Object.defineProperty;function r(t){return"number"==typeof t}function i(t){var e,r="";for(e=0;e<t;e++)r+="0";return r}function n(t,e,r){var n=!1,a=e-t.length;return a<0||(function(t){return"-"===t[0]}(t)&&(n=!0,t=t.substr(1)),t=r?t+i(a):i(a)+t,n&&(t="-"+t)),t}var a=String.prototype.toLowerCase,s=String.prototype.toUpperCase;function o(t){var e,i,o;switch(t.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(i=t.arg,o=parseInt(i,10),!isFinite(o)){if(!r(i))throw new Error("invalid integer. Value: "+i);o=0}return o<0&&("u"===t.specifier||10!==e)&&(o=4294967295+o+1),o<0?(i=(-o).toString(e),t.precision&&(i=n(i,t.precision,t.padRight)),i="-"+i):(i=o.toString(e),o||t.precision?t.precision&&(i=n(i,t.precision,t.padRight)):i="",t.sign&&(i=t.sign+i)),16===e&&(t.alternate&&(i="0x"+i),i=t.specifier===s.call(t.specifier)?s.call(i):a.call(i)),8===e&&t.alternate&&"0"!==i.charAt(0)&&(i="0"+i),i}function l(t){return"string"==typeof t}var p=Math.abs,u=String.prototype.toLowerCase,c=String.prototype.toUpperCase,h=String.prototype.replace,f=/e\+(\d)$/,g=/e-(\d)$/,_=/^(\d+)$/,d=/^(\d+)e/,v=/\.0$/,y=/\.0*e/,b=/(\..*[^0])0*e/;function w(t){var e,i,n=parseFloat(t.arg);if(!isFinite(n)){if(!r(t.arg))throw new Error("invalid floating-point number. Value: "+i);n=t.arg}switch(t.specifier){case"e":case"E":i=n.toExponential(t.precision);break;case"f":case"F":i=n.toFixed(t.precision);break;case"g":case"G":p(n)<1e-4?((e=t.precision)>0&&(e-=1),i=n.toExponential(e)):i=n.toPrecision(t.precision),t.alternate||(i=h.call(i,b,"$1e"),i=h.call(i,y,"e"),i=h.call(i,v,""));break;default:throw new Error("invalid double notation. Value: "+t.specifier)}return i=h.call(i,f,"e+0$1"),i=h.call(i,g,"e-0$1"),t.alternate&&(i=h.call(i,_,"$1."),i=h.call(i,d,"$1.e")),n>=0&&t.sign&&(i=t.sign+i),i=t.specifier===c.call(t.specifier)?c.call(i):u.call(i)}function m(t){var e,r="";for(e=0;e<t;e++)r+=" ";return r}function x(t,e,r){var i=e-t.length;return i<0?t:t=r?t+m(i):m(i)+t}var k=String.fromCharCode,E=isNaN,S=Array.isArray;function j(t){var e={};return e.specifier=t.specifier,e.precision=void 0===t.precision?1:t.precision,e.width=t.width,e.flags=t.flags||"",e.mapping=t.mapping,e}function T(t){var e,r,i,a,s,p,u,c,h;if(!S(t))throw new TypeError("invalid argument. First argument must be an array. Value: `"+t+"`.");for(p="",u=1,c=0;c<t.length;c++)if(l(i=t[c]))p+=i;else{if(e=void 0!==i.precision,!(i=j(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+i+"`.");for(i.mapping&&(u=i.mapping),r=i.flags,h=0;h<r.length;h++)switch(a=r.charAt(h)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=r.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===i.width){if(i.width=parseInt(arguments[u],10),u+=1,E(i.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(e&&"*"===i.precision){if(i.precision=parseInt(arguments[u],10),u+=1,E(i.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,e=!1)}switch(i.arg=arguments[u],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(i.padZeros=!1),i.arg=o(i);break;case"s":i.maxWidth=e?i.precision:-1;break;case"c":if(!E(i.arg)){if((s=parseInt(i.arg,10))<0||s>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=E(s)?String(i.arg):k(s)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(i.precision=6),i.arg=w(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=n(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=x(i.arg,i.width,i.padRight)),p+=i.arg||"",u+=1}return p}var V=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function A(t){var e={mapping:t[1]?parseInt(t[1],10):void 0,flags:t[2],width:t[3],precision:t[5],specifier:t[6]};return"."===t[4]&&void 0===t[5]&&(e.precision="1"),e}function $(t){var e,r,i,n;for(r=[],n=0,i=V.exec(t);i;)(e=t.slice(n,V.lastIndex-i[0].length)).length&&r.push(e),r.push(A(i)),n=V.lastIndex,i=V.exec(t);return(e=t.slice(n)).length&&r.push(e),r}function F(t){return"string"==typeof t}function I(t){var e,r;if(!F(t))throw new TypeError(I("invalid argument. First argument must be a string. Value: `%s`.",t));for(e=[$(t)],r=1;r<arguments.length;r++)e.push(arguments[r]);return T.apply(null,e)}var O,C=Object.prototype,P=C.toString,R=C.__defineGetter__,Z=C.__defineSetter__,G=C.__lookupGetter__,L=C.__lookupSetter__;O=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?e:function(t,e,r){var i,n,a,s;if("object"!=typeof t||null===t||"[object Array]"===P.call(t))throw new TypeError(I("invalid argument. First argument must be an object. Value: `%s`.",t));if("object"!=typeof r||null===r||"[object Array]"===P.call(r))throw new TypeError(I("invalid argument. Property descriptor must be an object. Value: `%s`.",r));if((n="value"in r)&&(G.call(t,e)||L.call(t,e)?(i=t.__proto__,t.__proto__=C,delete t[e],t[e]=r.value,t.__proto__=i):t[e]=r.value),a="get"in r,s="set"in r,n&&(a||s))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&R&&R.call(t,e,r.get),s&&Z&&Z.call(t,e,r.set),t};var W=O;function N(t,e,r){W(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})}var U,X,z,J=Object.prototype.hasOwnProperty,M="function"==typeof Symbol?Symbol:void 0,q="function"==typeof M&&"symbol"==typeof M("foo")&&(X="iterator",null!=(U=M)&&J.call(U,X))&&"symbol"==typeof M.iterator?Symbol.iterator:null;function B(t){return W(this,"next",{configurable:!1,enumerable:!0,get:function(){return this._next}}),this.value=t,W(this,"_next",{configurable:!1,enumerable:!1,writable:!0,value:null}),W(this,"_prev",{configurable:!1,enumerable:!1,writable:!0,value:null}),this}function D(){return this instanceof D?(this._length=0,this._first=null,this._last=null,this):new D}return N(D.prototype,"clear",(function(){return this._length=0,this._first=null,this._last=null,this})),N(D.prototype,"first",(function(){if(this._length)return this._first})),N(D.prototype,"insert",(function(t,e){var r;if(t===this._last)return this.push(e);for(r=this._first;r!==this._last&&r!==t;)r=r._next;if(r===this._last)throw new Error("invalid argument. The list does not contain the provided list node.");return r=new B(e),t._next._prev=r,r._next=t._next,t._next=r,r._prev=t,this._length+=1,this})),N(D.prototype,"iterator",(function(){var t,e,r,i,n;return r=this,n=-1,t=this.toArray(),N(e={},"next",(function(){return n+=1,i||n>=t.length?{done:!0}:{value:t[n],done:!1}})),N(e,"return",(function(t){return i=!0,arguments.length?{value:t,done:!0}:{done:!0}})),q&&N(e,q,(function(){return r.iterator()})),e})),N(D.prototype,"last",(function(){if(this._length)return this._last})),z=D.prototype,W(z,"length",{configurable:!1,enumerable:!1,get:function(){return this._length}}),N(D.prototype,"pop",(function(){var t;return this._length&&(t=this._last.value,this._last._prev?(this._last=this._last._prev,this._last._next=null):(this._first=null,this._last=null),this._length-=1),t})),N(D.prototype,"push",(function(t){var e;return e=new B(t),0===this._length?(this._first=e,this._last=e):(e._prev=this._last,this._last._next=e,this._last=e),this._length+=1,this})),N(D.prototype,"remove",(function(t){var e,r;if(t===this._first)return this.shift();if(t===this._last)return this.pop();for(e=t.value,r=this._first;r!==this._last&&r!==t;)r=r._next;if(r===this._last)throw new Error("invalid argument. The list does not contain the provided list node.");return t._prev._next=t._next,t._next._prev=t._prev,this._length-=1,e})),N(D.prototype,"shift",(function(){var t;return this._length&&(t=this._first.value,this._first._next?(this._first=this._first._next,this._first._prev=null):(this._first=null,this._last=null),this._length-=1),t})),N(D.prototype,"toArray",(function(){var t,e,r;for(e=[],t=this._first,r=0;r<this._length;r++)e.push(t.value),t=t.next;return e})),N(D.prototype,"toJSON",(function(){var t={type:"linked-list"};return t.data=this.toArray(),t})),N(D.prototype,"unshift",(function(t){var e;return e=new B(t),0===this._length?(this._first=e,this._last=e):(e._next=this._first,this._first._prev=e,this._first=e),this._length+=1,this})),D},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).linkedList=e();
//# sourceMappingURL=browser.js.map
