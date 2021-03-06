
# reduce-filter

[![Build status][travis-image]][travis-url]
[![Git tag][git-image]][git-url]
[![NPM version][npm-image]][npm-url]
[![Code style][standard-image]][standard-url]

Generates a reducer that filters its accumulator by reducing each of its items to a boolean value. That is somewhat complicated to state, but easy to read as code:

```javascript
function reduceFilter (fn) {
  return function (state, value) {
    return filter(predicate, state)

    function predicate (item, key) {
      return fn(item, value, key)
    }
  }
}

```

## Installation

    $ npm install @f/reduce-filter

## Usage

```js
var reduceFilter = require('@f/reduce-filter')

reduceFilter(isDivisbleBy)([1, 2, 3, 4, 5], 2) // -> [2, 4]

function isDivisbleBy (m, n) {
  return m % n === 0
}

```

## API

### reduceFilter(fn)

- `fn` - Accepts `(item, value, key)` and returns a bool, indicating whether or not to retain `item`.

**Returns:** Returns a reducing function that accepts `(state, value)` and returns a new container of type `state` filtered by `fn`.

## License

MIT

[travis-image]: https://img.shields.io/travis/micro-js/reduce-filter.svg?style=flat-square
[travis-url]: https://travis-ci.org/micro-js/reduce-filter
[git-image]: https://img.shields.io/github/tag/micro-js/reduce-filter.svg
[git-url]: https://github.com/micro-js/reduce-filter
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat
[standard-url]: https://github.com/feross/standard
[npm-image]: https://img.shields.io/npm/v/@f/reduce-filter.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@f/reduce-filter
