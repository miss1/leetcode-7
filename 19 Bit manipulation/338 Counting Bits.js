/**
 * @param {number} n
 * @return {number[]}
 * 对于每一个数字n，判断它最后一位是0还是1(num & 1), 然后右移一位去掉最后一位，继续判断。
 * time: O(nlogn)
 * space: o(1)
 */
var countBits = function(n) {
  let res = [];
  for (let i = 0; i <= n; i++) {
    let count = 0, num = i;
    while (num > 0) {
      if (num & 1 === 1) count += 1;
      num = num >> 1;
    }
    res.push(count);
  }
  return res;
};

/**
 * @param {number} n
 * @return {number[]}
 * DP; 已知 y = x >> 1，y 和 x只有最后一位不一样，并且 y = x/2; 说明x等于x/2在最后一位中加入一位1或者0。0还是1取决于x是偶数还是奇数
 * 可得 dp[x] = dp[x/2] + (x % 2)
 * time: O(n)
 * space: O(1)
 */
var countBits2 = function(n) {
  let res = new Array(n + 1).fill(0);
  for (let i = 1; i <= n; i++) {
    res[i] = res[i >> 1] + (i % 2);
  }
  return res;
};