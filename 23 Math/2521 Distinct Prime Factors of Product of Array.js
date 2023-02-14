/**
 * @param {number[]} nums
 * @return {number}
 * 因为2 <= nums[i] <= 1000，先找出1000以内的所有质数，存储到数组中
 * 然后对于nums中的每个数，判断其是否能被质数整除，可以的话，将该质数添加到结果set中
 * 最后返回set的长度
 * time: O(n)
 * space: O(n)
 */
var distinctPrimeFactors = function(nums) {
  const max = 1000;
  let primeNumList = new Array(max + 1).fill(true);
  for (let i = 2; i <= max / i; i++) {
    if (primeNumList[i]) {
      for (let j = 2; j <= max / i; j++) {
        primeNumList[i * j] = false;
      }
    }
  }
  let set = new Set();
  for (let num of nums) {
    if (primeNumList[num]) set.add(num);
    else {
      for (let i = 2; i <= num / 2; i++) {
        if (primeNumList[i] && num % i === 0) {
          set.add(i);
          if (primeNumList[num / i]) set.add(num / i);
        }
      }
    }
  }
  return set.size;
};

/**
 * @param {number[]} nums
 * @return {number}
 * 一个合数总是可以分解成若干个质数的乘积；判断n是否是质数，只需判断从 2 ~ sqrt(n) 中是否有数字能被n整除
 * 对于每个num，判断其是否是质数，是的话存入set中，不是的话，它最小的那个除数就是质数，然后得到剩下的值，继续判断是否是质数，直到num小于2
 * time: O(n)
 * space: O(n)
 */
var distinctPrimeFactors2 = function(nums) {
  let set = new Set();
  for (let num of nums) {
    let x = 2;
    while (x <= Math.sqrt(num) && num > 1) {
      if (num % x === 0) {
        set.add(x);
        num = num / x;
      } else {
        x++;
      }
    }
    if (num > 1) set.add(num);
  }
  return set.size;
};