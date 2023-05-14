/**
 * @param {Function} fn
 * @return {Function}
 * fn.length: 函数的形参个数
 */
var curry = function(fn) {
  console.log(fn.length)
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn(...args);
    }
    return (...nextArgs) => curried(...args, ...nextArgs);
  };
};


/**
 * @param {Function} fn
 * @return {Function}
 */
var curry2 = function(fn) {
  let p = [];
  return function curried(...args) {
    p.push(...args);
    if (p.length >= fn.length) return fn(...p);
    return curried;
  };
};

/**
 * function sum(a, b) { return a + b; }
 * const csum = curry(sum);
 * csum(1)(2) // 3
 */
