
# reduce-filter

[![Build status][travis-image]][travis-url]
[![Git tag][git-image]][git-url]
[![NPM version][npm-image]][npm-url]
[![Code style][standard-image]][standard-url]

Generates a reducer that filters its accumulator using a predicate derived from its value argument. That is complicated to state, but simple to read as code:

```javascript
function reduceFilter (fn) {
  return function (state, value) {
    return filter(fn(value, state), state)
  }
}
```

## Installation

    $ npm install @micro-js/reduce-filter

## Usage

```js
var reduceFilter = require('@micro-js/reduce-filter')

reduceFilter(isDivisbleBy)([1, 2, 3, 4, 5], 2) // -> [2, 4]

function isDivisbleBy(n) {
  return function (m) {
    return m % n === 0
  }
}

```

## API

### reduceFilter(fn)

- `fn` - Accepts `(value, state)` from the reducer, and returns a filter predicate.

**Returns:** Returns a reducing function that accepts `(state, value)` and returns a new `state` filtered by the predicate returned by `fn(value, state)`.

## License

MIT

[travis-image]: https://img.shields.io/travis/micro-js/reduce-filter.svg?style=flat-square
[travis-url]: https://travis-ci.org/micro-js/reduce-filter
[git-image]: https://img.shields.io/github/tag/micro-js/reduce-filter.svg
[git-url]: https://github.com/micro-js/reduce-filter
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat
[standard-url]: https://github.com/feross/standard
[npm-image]: https://img.shields.io/npm/v/@micro-js/reduce-filter.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@micro-js/reduce-filter
