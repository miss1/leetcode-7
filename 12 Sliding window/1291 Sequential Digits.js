/**
 * @param {number} low
 * @param {number} high
 * @return {number[]}
 * brute force
 * 排列，1，12，123，1234； 2，23，234； 3，34；依次类推找到范围内的数
 * 最后再排序
 * time: O(n)
 * space: O(1)
 */
var sequentialDigits = function(low, high) {
  let res = [];
  for (let i = 1; i < 10; i++) {
    let n = 0;
    for (let j = i; j < 10; j++) {
      n = n * 10 + j;
      if (n > high) break;
      if (n >= low) res.push(n);
    }
  }
  return res.sort((a, b) => a - b);
};

/**
 * @param {number} low
 * @param {number} high
 * @return {number[]}
 * 固定窗口大小的移动窗口
 * 根据low和high可知结果的长度范围为low.length ~ high.length
 * 在这个范围，遍历，固定窗口大小，在digit中寻找结果
 * time: O(10 * 10) -> O(1)
 * space: O(1)
 */
var sequentialDigits2 = function(low, high) {
  let res = [];
  const min = low.toString().length, max = high.toString().length;
  const digit = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  //遍历。当窗口长度为n时，n在min到max之间
  for (let i = min; i <= max; i++) {
    // sliding window
    let n = 0, l = 0, r = 0;
    // 先得到长度为i的窗口
    while (r - l < i - 1) {
      n = n * 10 + digit[r];
      r++;
    }
    // 滑动判断结果
    while (r < digit.length) {
      n = n * 10 + digit[r];
      if (n >= low && n <= high) res.push(n);
      n = n - digit[l] * Math.pow(10, i - 1);
      l++;
      r++;
    }
  }
  return res;
};