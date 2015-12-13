/**
 * Modules
 */

var filter = require('@micro-js/filter')

/**
 * Expose reduceFilter
 */

module.exports = reduceFilter['default'] = reduceFilter

/**
 * reduceFilter
 */

function reduceFilter (fn) {
  return function (state, value) {
    return filter(predicate, state)

    function predicate (item, key) {
      return fn(item, value, key)
    }
  }
}
