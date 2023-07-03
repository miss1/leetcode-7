/**
 * @param {string} val
 * @return {Object}
 * closures
 */
var expect = function(val) {
  return {
    toBe: function(number) {
      if (val === number) return true;
      throw new Error('Not Equal');
    },
    notToBe: function(number) {
      if (val !== number) return true;
      throw new Error('Equal');
    }
  }
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */