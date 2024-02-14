// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.1.0-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-accessor@v0.1.0-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/symbol-iterator@v0.1.1-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-property@v0.2.0-esm/index.mjs";function r(t){return n(this,"next",{configurable:!1,enumerable:!0,get:function(){return this._next}}),this.value=t,n(this,"_next",{configurable:!1,enumerable:!1,writable:!0,value:null}),n(this,"_prev",{configurable:!1,enumerable:!1,writable:!0,value:null}),this}function s(){return this instanceof s?(this._length=0,this._first=null,this._last=null,this):new s}t(s.prototype,"clear",(function(){return this._length=0,this._first=null,this._last=null,this})),t(s.prototype,"first",(function(){if(this._length)return this._first})),t(s.prototype,"insert",(function(t,e){var i;if(t===this._last)return this.push(e);for(i=this._first;i!==this._last&&i!==t;)i=i._next;if(i===this._last)throw new Error("invalid argument. The list does not contain the provided list node.");return i=new r(e),t._next._prev=i,i._next=t._next,t._next=i,i._prev=t,this._length+=1,this})),t(s.prototype,"iterator",(function(){var e,n,r,s,h;return r=this,h=-1,e=this.toArray(),t(n={},"next",(function(){if(h+=1,s||h>=e.length)return{done:!0};return{value:e[h],done:!1}})),t(n,"return",(function(t){if(s=!0,arguments.length)return{value:t,done:!0};return{done:!0}})),i&&t(n,i,(function(){return r.iterator()})),n})),t(s.prototype,"last",(function(){if(this._length)return this._last})),e(s.prototype,"length",(function(){return this._length})),t(s.prototype,"pop",(function(){var t;return this._length&&(t=this._last.value,this._last._prev?(this._last=this._last._prev,this._last._next=null):(this._first=null,this._last=null),this._length-=1),t})),t(s.prototype,"push",(function(t){var e;return e=new r(t),0===this._length?(this._first=e,this._last=e):(e._prev=this._last,this._last._next=e,this._last=e),this._length+=1,this})),t(s.prototype,"remove",(function(t){var e,i;if(t===this._first)return this.shift();if(t===this._last)return this.pop();for(e=t.value,i=this._first;i!==this._last&&i!==t;)i=i._next;if(i===this._last)throw new Error("invalid argument. The list does not contain the provided list node.");return t._prev._next=t._next,t._next._prev=t._prev,this._length-=1,e})),t(s.prototype,"shift",(function(){var t;return this._length&&(t=this._first.value,this._first._next?(this._first=this._first._next,this._first._prev=null):(this._first=null,this._last=null),this._length-=1),t})),t(s.prototype,"toArray",(function(){var t,e,i;for(e=[],t=this._first,i=0;i<this._length;i++)e.push(t.value),t=t.next;return e})),t(s.prototype,"toJSON",(function(){var t={type:"linked-list"};return t.data=this.toArray(),t})),t(s.prototype,"unshift",(function(t){var e;return e=new r(t),0===this._length?(this._first=e,this._last=e):(e._next=this._first,this._first._prev=e,this._first=e),this._length+=1,this}));export{s as default};
//# sourceMappingURL=index.mjs.map
