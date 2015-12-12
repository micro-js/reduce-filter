/**
 * Imports
 */

var reduceFilter = require('..')
var test = require('tape')

/**
 * Tests
 */

test('should work', function (t) {
  t.deepEqual(reduceFilter(isDivisbleBy)([1, 2, 3, 4, 5], 2), [2, 4])
  t.end()
})

function isDivisbleBy(n) {
  return function (m) {
    return m % n === 0
  }
}
