/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var throttle = function(fn, t) {
  let timer = null, tmp = null;

  const timeoutFunction = () => {
    if (tmp == null) {
      timer = null
    } else {
      fn(...tmp);
      tmp = null;
      timer = setTimeout(timeoutFunction, t);
    }
  };

  return function(...args) {
    if (timer) tmp = args;
    else {
      fn(...args);
      timer = setTimeout(timeoutFunction, t);
    }
  }
};

/**
 * const throttled = throttle(console.log, 100);
 * throttled("log"); // logged immediately.
 * throttled("log"); // logged at t=100ms.
 */