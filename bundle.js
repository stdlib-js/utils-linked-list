// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).linkedList=e()}(this,(function(){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=function(){try{return t({},"x",{}),!0}catch(t){return!1}},r=Object.defineProperty,n=Object.prototype,i=n.toString,o=n.__defineGetter__,s=n.__defineSetter__,l=n.__lookupGetter__,u=n.__lookupSetter__;var a=r,h=function(t,e,r){var a,h,_,f;if("object"!=typeof t||null===t||"[object Array]"===i.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof r||null===r||"[object Array]"===i.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((h="value"in r)&&(l.call(t,e)||u.call(t,e)?(a=t.__proto__,t.__proto__=n,delete t[e],t[e]=r.value,t.__proto__=a):t[e]=r.value),_="get"in r,f="set"in r,h&&(_||f))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return _&&o&&o.call(t,e,r.get),f&&s&&s.call(t,e,r.set),t},_=e()?a:h,f=_;var p=function(t,e,r){f(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})},c=_;var v=function(t,e,r){c(t,e,{configurable:!1,enumerable:!1,get:r})},y=Object.prototype.hasOwnProperty;var d=function(t,e){return null!=t&&y.call(t,e)};var b=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")&&d(Symbol,"iterator")&&"symbol"==typeof Symbol.iterator}()?Symbol.iterator:null,g=_;var m=p,x=v,w=b,j=function(t){return g(this,"next",{configurable:!1,enumerable:!0,get:function(){return this._next}}),this.value=t,g(this,"_next",{configurable:!1,enumerable:!1,writable:!0,value:null}),g(this,"_prev",{configurable:!1,enumerable:!1,writable:!0,value:null}),this};function S(){return this instanceof S?(this._length=0,this._first=null,this._last=null,this):new S}return m(S.prototype,"clear",(function(){return this._length=0,this._first=null,this._last=null,this})),m(S.prototype,"first",(function(){if(this._length)return this._first})),m(S.prototype,"insert",(function(t,e){var r;if(t===this._last)return this.push(e);for(r=this._first;r!==this._last&&r!==t;)r=r._next;if(r===this._last)throw new Error("invalid argument. The list does not contain the provided list node.");return r=new j(e),t._next._prev=r,r._next=t._next,t._next=r,r._prev=t,this._length+=1,this})),m(S.prototype,"iterator",(function(){var t,e,r,n,i;return r=this,i=-1,t=this.toArray(),m(e={},"next",(function(){if(i+=1,n||i>=t.length)return{done:!0};return{value:t[i],done:!1}})),m(e,"return",(function(t){if(n=!0,arguments.length)return{value:t,done:!0};return{done:!0}})),w&&m(e,w,(function(){return r.iterator()})),e})),m(S.prototype,"last",(function(){if(this._length)return this._last})),x(S.prototype,"length",(function(){return this._length})),m(S.prototype,"pop",(function(){var t;return this._length&&(t=this._last.value,this._last._prev?(this._last=this._last._prev,this._last._next=null):(this._first=null,this._last=null),this._length-=1),t})),m(S.prototype,"push",(function(t){var e;return e=new j(t),0===this._length?(this._first=e,this._last=e):(e._prev=this._last,this._last._next=e,this._last=e),this._length+=1,this})),m(S.prototype,"remove",(function(t){var e,r;if(t===this._first)return this.shift();if(t===this._last)return this.pop();for(e=t.value,r=this._first;r!==this._last&&r!==t;)r=r._next;if(r===this._last)throw new Error("invalid argument. The list does not contain the provided list node.");return t._prev._next=t._next,t._next._prev=t._prev,this._length-=1,e})),m(S.prototype,"shift",(function(){var t;return this._length&&(t=this._first.value,this._first._next?(this._first=this._first._next,this._first._prev=null):(this._first=null,this._last=null),this._length-=1),t})),m(S.prototype,"toArray",(function(){var t,e,r;for(e=[],t=this._first,r=0;r<this._length;r++)e.push(t.value),t=t.next;return e})),m(S.prototype,"toJSON",(function(){var t={type:"linked-list"};return t.data=this.toArray(),t})),m(S.prototype,"unshift",(function(t){var e;return e=new j(t),0===this._length?(this._first=e,this._last=e):(e._next=this._first,this._first._prev=e,this._first=e),this._length+=1,this})),S}));
//# sourceMappingURL=bundle.js.map
