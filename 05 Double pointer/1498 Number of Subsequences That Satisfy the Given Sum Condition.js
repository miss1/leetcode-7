/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * 先将nums升序排序，两个指针l,r分别指向头尾，这样l，r分别指向最小值和最大值
 * 当两个值的和大于target时，移动r, 减少最大值，当和小于等于target时，此时需要计算以l开始，r结尾的字符串中，有多少个l开头的序列
 * tip：non-empty subsequences(start with the first element): 2^(n-1) => 2^(r - l)
 * 计算出结果后移动l，继续计算
 * 由于每次重新计算Math.pow(2, r - l)，由于数字过大会导致超出范围出现NaN
 * 所以需要以 2 * p[i-1]的方式计算出2^0到2^n的值(每次计算时都取余)
 * time: O(nlog(n))
 * space: O(n)
 */
var numSubseq1 = function(nums, target) {
  let res = 0;
  const mod = Math.pow(10, 9) + 7;
  nums.sort((a, b) => a - b);
  let l = 0, r = nums.length - 1;
  while (l <= r) {
    if (nums[l] + nums[r] > target) {
      r--;
    } else {
      res += (Math.pow(2, r - l) % mod);
      res = res % mod;
      l++;
    }
  }
  return res;
};

var numSubseq2 = function(nums, target) {
  let res = 0, len = nums.length;
  const mod = Math.pow(10, 9) + 7;
  nums.sort((a, b) => a - b);

  let p = new Array(len);
  p[0] = 1;
  for (let i = 1; i < len; i++) {
    p[i] = (p[i - 1] * 2) % mod;
  }

  let l = 0, r = len - 1;
  while (l <= r) {
    if (nums[l] + nums[r] > target) {
      r--;
    } else {
      res += p[r - l];
      res = res % mod;
      l++;
    }
  }
  return res;
};