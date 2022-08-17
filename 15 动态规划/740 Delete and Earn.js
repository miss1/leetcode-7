/**
 * @param {number[]} nums
 * @return {number}
 * 先用哈希表统计每个相同数字累计的和。再将nums去重排序。接下来就是跟198 house robber一样的解法了
 * 如果取了n就不能取n-1和n+1；遍历计算遍历到当前位置时能取到的最大值。
 * 当存在n-1时，f(n) = Math.max(f(n - 2) + nums[n], f(n - 1))
 * 当不存在n-1时，可以取前一个数，f(n) = f(n - 1) + nums[n]
 * time: O(nlogn) 排序
 * space: O(n)
 */
var deleteAndEarn = function(nums) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], map.has(nums[i]) ? map.get(nums[i]) + nums[i] : nums[i]);
  }
  let keys = [...new Set(nums)];
  keys.sort((a, b) => a - b);
  let a = 0, b = 0;
  for (let key of keys) {
    let res = 0;
    if (map.has(key - 1)) {
      res = Math.max(a + map.get(key), b);
    } else {
      res = b + map.get(key);
    }
    a = b;
    b = res;
  }
  return Math.max(a, b);
};
