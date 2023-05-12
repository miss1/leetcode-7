/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 * closures and objects
 */
var createCounter = function(init) {
  let num = init;
  const obj  = {
    increment: function() {
      num += 1;
      return num;
    },
    decrement: function() {
      num -= 1;
      return num;
    },
    reset: function() {
      num = init;
      return num;
    }
  };
  return obj;
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */


/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter2 = function(init) {
  let num = init;
  return {
    increment: () => ++num,
    decrement: () => --num,
    reset: () => (num = init)
  };
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */