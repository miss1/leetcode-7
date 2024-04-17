/**
 * @param {number[]} nums
 * @return {number}
 * 找到nums中所有的素数
 * time: O(n * Math.sqrt(m))
 * space: O(n)
 */
var maximumPrimeDifference = function(nums) {
  let arr = [];

  const isPrime = (n) => {
    if (n < 2) return false;
    for (let i = 2; i <= Math.floor(Math.sqrt(n)); i++) {
      if (n % i === 0) return false;
    }
    return true;
  };

  for (let i = 0; i < nums.length; i++) {
    if (isPrime(nums[i])) {
      arr.push(i);
    }
  }

  return arr[arr.length - 1] - arr[0];
};
