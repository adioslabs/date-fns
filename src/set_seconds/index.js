var parse = require('../parse/index.js')

/**
 * @category Second Helpers
 * @summary Set the seconds to the given date.
 *
 * @description
 * Set the seconds to the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} seconds - the seconds of the new date
 * @param {Options} [options] - the object with options. See [Options]{@link docs/Options}
 * @returns {Date} the new date with the seconds setted
 *
 * @example
 * // Set 45 seconds to 1 September 2014 11:30:40:
 * var result = setSeconds(new Date(2014, 8, 1, 11, 30, 40), 45)
 * //=> Mon Sep 01 2014 11:30:45
 */
function setSeconds (dirtyDate, seconds, options) {
  var date = parse(dirtyDate, options)
  date.setSeconds(seconds)
  return date
}

module.exports = setSeconds
