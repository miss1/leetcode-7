/**
 * @param {number[]} time
 * @return {number}
 * 暴力解法，双层循环求和判断
 * time: O(n²)
 * space: O(1)
 */
var numPairsDivisibleBy60 = function(time) {
  let count = 0;
  for (let i = 0; i < time.length - 1; i++) {
    for (let j = i + 1; j < time.length; j++) {
      if ((time[i] + time[j]) % 60 === 0) count++;
    }
  }
  return count;
};

/**
 * @param {number[]} time
 * @return {number}
 * (time[i] + time[j]) % 60 == 0 --> time[i] % 60 = 0 && time[j] % 60 = 0 或者 (time[i] % 60) + (time[j] % 60) = 60
 * 用一个数组记录余数为分别为1-59的个数（数组下标为余数，value为对应的个数）
 * 对于每一个time，求它的余数a，再从数组中寻找下标为 60 - a 的个数
 * time: O(n)
 * space: O(1)
 */
var numPairsDivisibleBy602 = function(time) {
  let count = 0;
  let arr = new Array(60).fill(0);
  for (let i = 0; i < time.length; i++) {
    if (time[i] % 60 === 0) {
      count += arr[0];
    } else {
      count += arr[60 - time[i] % 60];
    }
    arr[time[i] % 60] += 1;
  }
  return count;
};