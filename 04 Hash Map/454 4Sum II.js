/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 * 求四个数组中分别取一个数相加等于0的个数。先求出nums1和nums2；nums3和nums4中所有组合的和，存到map中
 * 然后就是tow sum的解法，遍历map1，再从map2中是否存在target值，若存在，取出两个map中的value值，相乘就是组合的个数
 * time: O(n²)
 * space: O(n²)
 */
var fourSumCount = function(nums1, nums2, nums3, nums4) {
  let len = nums1.length;
  let sum1 = new Map(), sum2 = new Map();
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      let s1 = nums1[i] + nums2[j];
      let s2 = nums3[i] + nums4[j]
      sum1.set(s1, sum1.has(s1) ? sum1.get(s1) + 1 : 1);
      sum2.set(s2, sum2.has(s2) ? sum2.get(s2) + 1 : 1);
    }
  }
  let res = 0;
  for (let s of sum1) {
    let target = 0 - s[0];
    if (sum2.has(target)) res += sum2.get(target) * s[1];
  }
  return res;
};
