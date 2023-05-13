/**
 * @param {Function} fn
 * memoization
 */
function memoize(fn) {
  let memo = {};
  return function(...args) {
    const key = args.join(',');
    if (memo.hasOwnProperty(key)) {
      return memo[key];
    }
    const val = fn(...args);
    memo[key] = val;
    return val;
  }
}


/**
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1
 */