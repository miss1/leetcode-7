/**
 * @param {Function} fn
 * @return {Function}
 * higher-order function
 */
var once = function(fn) {
  let tag = true;
  return function(...args){
    if (tag) {
      tag = false;
      return fn(...args);
    }
    return undefined;
  }
};

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */