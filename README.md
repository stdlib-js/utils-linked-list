<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# Linked List

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Singly linked list.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

To use in Observable,

```javascript
linkedList = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/utils-linked-list@umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var linkedList = require( 'path/to/vendor/umd/utils-linked-list/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/utils-linked-list@umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.linkedList;
})();
</script>
```

#### linkedList()

Returns a new linked list instance.

```javascript
var list = linkedList();
// returns <LinkedList>
```

##### list.clear()

Clears a list.

```javascript
var list = linkedList();
// returns <LinkedList>

// Add values to the list:
list.push( 'foo' ).push( 'bar' );

// Peek at the first value:
var v = list.first().value;
// returns 'foo'

// Examine the list length:
var len = list.length;
// returns 2

// Clear all list items:
list.clear();

// Peek at the first value:
v = list.first();
// returns undefined

// Examine the list length:
len = list.length;
// returns 0
```

##### list.first()

Returns the first `node`. If the list is currently empty, the returned value is `undefined`.

```javascript
var list = linkedList();
// returns <LinkedList>

// Add values to the list:
list.push( 'foo' ).push( 'bar' );

// Peek at the first value:
var v = list.first().value;
// returns 'foo'
```

##### list.insert( node, value )

Inserts a `value` into the list **after** a provided list `node`.

```javascript
var list = linkedList();
// returns <LinkedList>

// Add values to the list:
list.push( 'foo' ).push( 'bar' ).push( 'beep' );

// Determine the list length:
var len = list.length;
// returns 3

// Get the second node:
var node = list.first().next;

// Insert a value after the second node:
list.insert( node, 'boop' );

// Determine the list length:
len = list.length;
// returns 4
```

##### list.iterator()

Returns an iterator for iterating over a list. If an environment supports `Symbol.iterator`, the returned iterator is iterable.

```javascript
var list = linkedList();

// Add values to the list:
list.push( 'foo' ).push( 'bar' );

// Create an iterator:
var it = list.iterator();

// Iterate over the list...
var v = it.next().value;
// returns 'foo'

v = it.next().value;
// returns 'bar'

var bool = it.next().done;
// returns true
```

**Note**: in order to prevent confusion arising from list mutation during iteration, a returned iterator **always** iterates over a list "snapshot", which is defined as the list of list elements at the time of `list.iterator()` invocation.

##### list.last()

Returns the last `node`. If the list is currently empty, the returned value is `undefined`.

```javascript
var list = linkedList();
// returns <LinkedList>

// Add values to the list:
list.push( 'foo' ).push( 'bar' );

// Peek at the last value:
var v = list.last().value;
// returns 'bar'
```

##### list.length

List length.

```javascript
var list = linkedList();

// Examine the initial list length:
var len = list.length;
// returns 0

// Add values to the list:
list.push( 'foo' ).push( 'bar' );

// Retrieve the current list length:
len = list.length;
// returns 2
```

##### list.pop()

Removes a value from the end of the list. If the list is currently empty, the returned value is `undefined`.

```javascript
var list = linkedList();

// Add values to the list:
list.push( 'foo' ).push( 'bar' );

// Remove the last value:
var v = list.pop();
// returns 'bar'

// Add a new value to the list:
list.push( 'beep' );

// Remove the last value:
v = list.pop();
// returns 'beep'
```

##### list.push( value )

Adds a value to the end of the list.

```javascript
var list = linkedList();

// Add values to the list:
list.push( 'foo' ).push( 'bar' );

// Remove the last value:
var v = list.pop();
// returns 'bar'

// Add a new value to the list:
list.push( 'beep' );

// Remove the last value:
v = list.pop();
// returns 'beep'
```

##### list.remove( node )

Removes a `node` from the list.

```javascript
var list = linkedList();

// Add values to the list:
list.push( 'foo' ).push( 'bar' ).push( 'beep' );

// Determine the list length:
var len = list.length;
// returns 3

// Get the second node:
var node = list.first().next;

// Remove the second node:
var v = list.remove( node );
// returns 'bar'

// Determine the list length:
len = list.length;
// returns 2
```

##### list.shift()

Removes a value from the beginning of the list. If the list is currently empty, the returned value is `undefined`.

```javascript
var list = linkedList();

// Add values to the list:
list.push( 'foo' ).push( 'bar' );

// Remove the first value:
var v = list.shift();
// returns 'foo'

// Add a new value to the list:
list.push( 'beep' );

// Remove the first value:
v = list.shift();
// returns 'bar'
```

##### list.toArray()

Returns an array of list values.

```javascript
var list = linkedList();

// Add values to the list:
list.push( 'foo' ).push( 'bar' );

// Get an array of list values:
var vals = list.toArray();
// returns [ 'foo', 'bar' ]
```

##### list.toJSON()

Serializes a list as JSON.

```javascript
var list = linkedList();

// Add values to the list:
list.push( 'foo' ).push( 'bar' );

// Serialize to JSON:
var o = list.toJSON();
// returns { 'type': 'linked-list', 'data': [ 'foo', 'bar' ] }
```

**Note**: `JSON.stringify()` implicitly calls this method when stringifying a list instance.

##### list.unshift( value )

Adds a value to the beginning of the list.

```javascript
var list = linkedList();

// Add values to the list:
list.unshift( 'foo' ).unshift( 'bar' );

// Remove the last value:
var v = list.pop();
// returns 'foo'

// Add a new value to the list:
list.unshift( 'beep' );

// Remove the last value:
v = list.pop();
// returns 'bar'
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/utils-linked-list@umd/browser.js"></script>
<script type="text/javascript">
(function () {

// Create a new linked list:
var list = linkedList();

// Add some values to the list:
list.push( 'foo' );
list.push( 'bar' );
list.push( 'beep' );
list.push( 'boop' );

// Peek at the first and last list values:
var v = list.first().value;
// returns 'foo'

v = list.last().value;
// returns 'boop'

// Inspect the list length:
var len = list.length;
// returns 4

// Remove the last list value:
v = list.pop();
// returns 'boop'

// Inspect the list length:
len = list.length;
// returns 3

// Iterate over the list:
var iter = list.iterator();
var i;
for ( i = 0; i < len; i++ ) {
    console.log( 'List value #%d: %s', i+1, iter.next().value );
}

// Clear the list:
list.clear();

// Inspect the list length:
len = list.length;
// returns 0

})();
</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/utils/doubly-linked-list`][@stdlib/utils/doubly-linked-list]</span><span class="delimiter">: </span><span class="description">doubly linked list.</span>
-   <span class="package-name">[`@stdlib/utils/stack`][@stdlib/utils/stack]</span><span class="delimiter">: </span><span class="description">stack.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/utils-linked-list.svg
[npm-url]: https://npmjs.org/package/@stdlib/utils-linked-list

[test-image]: https://github.com/stdlib-js/utils-linked-list/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/utils-linked-list/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/utils-linked-list/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/utils-linked-list?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/utils-linked-list.svg
[dependencies-url]: https://david-dm.org/stdlib-js/utils-linked-list/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/utils-linked-list/tree/deno
[umd-url]: https://github.com/stdlib-js/utils-linked-list/tree/umd
[esm-url]: https://github.com/stdlib-js/utils-linked-list/tree/esm
[branches-url]: https://github.com/stdlib-js/utils-linked-list/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/utils-linked-list/main/LICENSE

<!-- <related-links> -->

[@stdlib/utils/doubly-linked-list]: https://github.com/stdlib-js/utils-doubly-linked-list/tree/umd

[@stdlib/utils/stack]: https://github.com/stdlib-js/utils-stack/tree/umd

<!-- </related-links> -->

</section>

<!-- /.links -->
