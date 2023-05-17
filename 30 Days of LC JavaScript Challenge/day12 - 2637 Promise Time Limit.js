/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var timeLimit = function(fn, t) {
  return async function(...args) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject('Time Limit Exceeded');
      }, t);
      fn(...args).then(resolve).catch(reject);
    });
  }
};

/**
 * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 * limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
 */


/**
 * Promise.race
 *  It accepts an array of promises and returns a new promise.
 *  The returned promise resolves or rejects with the first value one of the promises resolves or rejects with.
 * @param fn
 * @param t
 * @return {function(...[*]): Promise<Awaited<unknown>>}
 */
var timeLimit2 = function(fn, t) {
  return async function(...args) {
    const timeLimitPromise = new Promise((resolve, reject) => {
      setTimeout(() => reject("Time Limit Exceeded"), t)
    });
    const returnedPromise = fn(...args);
    return Promise.race([timeLimitPromise, returnedPromise]);
  }
};