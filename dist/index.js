"use strict";var o=function(i,t){return function(){return t||i((t={exports:{}}).exports,t),t.exports}};var f=o(function(A,_){"use strict";var h=require("@stdlib/utils-define-property");function w(i){return h(this,"next",{configurable:!1,enumerable:!0,get:function(){return this._next}}),this.value=i,h(this,"_next",{configurable:!1,enumerable:!1,writable:!0,value:null}),h(this,"_prev",{configurable:!1,enumerable:!1,writable:!0,value:null}),this}_.exports=w});var c=o(function(N,v){"use strict";var n=require("@stdlib/utils-define-nonenumerable-read-only-property"),m=require("@stdlib/utils-define-nonenumerable-read-only-accessor"),p=require("@stdlib/symbol-iterator"),u=f();function s(){return this instanceof s?(this._length=0,this._first=null,this._last=null,this):new s}n(s.prototype,"clear",function(){return this._length=0,this._first=null,this._last=null,this});n(s.prototype,"first",function(){if(this._length)return this._first});n(s.prototype,"insert",function(t,e){var r;if(t===this._last)return this.push(e);for(r=this._first;r!==this._last&&r!==t;)r=r._next;if(r===this._last)throw new Error("invalid argument. The list does not contain the provided list node.");return r=new u(e),t._next._prev=r,r._next=t._next,t._next=r,r._prev=t,this._length+=1,this});n(s.prototype,"iterator",function(){var t,e,r,a,l;return r=this,l=-1,t=this.toArray(),e={},n(e,"next",g),n(e,"return",x),p&&n(e,p,y),e;function g(){return l+=1,a||l>=t.length?{done:!0}:{value:t[l],done:!1}}function x(d){return a=!0,arguments.length?{value:d,done:!0}:{done:!0}}function y(){return r.iterator()}});n(s.prototype,"last",function(){if(this._length)return this._last});m(s.prototype,"length",function(){return this._length});n(s.prototype,"pop",function(){var t;return this._length&&(t=this._last.value,this._last._prev?(this._last=this._last._prev,this._last._next=null):(this._first=null,this._last=null),this._length-=1),t});n(s.prototype,"push",function(t){var e;return e=new u(t),this._length===0?(this._first=e,this._last=e):(e._prev=this._last,this._last._next=e,this._last=e),this._length+=1,this});n(s.prototype,"remove",function(t){var e,r;if(t===this._first)return this.shift();if(t===this._last)return this.pop();for(e=t.value,r=this._first;r!==this._last&&r!==t;)r=r._next;if(r===this._last)throw new Error("invalid argument. The list does not contain the provided list node.");return t._prev._next=t._next,t._next._prev=t._prev,this._length-=1,e});n(s.prototype,"shift",function(){var t;return this._length&&(t=this._first.value,this._first._next?(this._first=this._first._next,this._first._prev=null):(this._first=null,this._last=null),this._length-=1),t});n(s.prototype,"toArray",function(){var t,e,r;for(e=[],t=this._first,r=0;r<this._length;r++)e.push(t.value),t=t.next;return e});n(s.prototype,"toJSON",function(){var t={};return t.type="linked-list",t.data=this.toArray(),t});n(s.prototype,"unshift",function(t){var e;return e=new u(t),this._length===0?(this._first=e,this._last=e):(e._next=this._first,this._first._prev=e,this._first=e),this._length+=1,this});v.exports=s});var b=c();module.exports=b;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
//# sourceMappingURL=index.js.map
