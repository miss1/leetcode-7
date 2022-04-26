/**
 * @param {number} n
 * @return {boolean}
 * 类似于判断环的入口是不是1，快慢指针
 * slow 每次计算一次结果，fast每次计算两次结果，平方和一定存在环，slow和fast一定会在某个值相等
 * 相等的时候，查看当前值是否为1，若slow或者fast有一个先到达1，则提前返回结果
 * time: O(n)
 * space: O(1)
 */
var isHappy = function(n) {
  const getSquares = function(n) {
    let sum = 0;
    while (n !== 0) {
      let a = n % 10;
      sum += a * a;
      n = Math.floor(n / 10);
    }
    return sum;
  };
  let slow = getSquares(n);
  let fast = getSquares(slow);
  while (slow !== fast) {
    slow = getSquares(slow);
    fast = getSquares(fast);
    fast = getSquares(fast);
    if (slow === 1 || fast === 1) return true
  }
  return fast === 1;
};


/**
 * @param {number} n
 * @return {boolean}
 * 循环计算，将得到的值存储到set中，直到计算得到重复的值，最后判断set中是否包含1
 * time: O(n)
 * space: O(n)
 */
var isHappy2 = function(n) {
  const getSquares = function(n) {
    let sum = 0;
    while (n !== 0) {
      let a = n % 10;
      sum += a * a;
      n = Math.floor(n / 10);
    }
    return sum;
  };
  let set = new Set();
  while (!set.has(n)) {
    set.add(n);
    n = getSquares(n);
  }
  return set.has(1);
};
