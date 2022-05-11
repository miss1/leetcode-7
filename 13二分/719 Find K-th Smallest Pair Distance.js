/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 * 寻找第k小的差值，先将nums排序，然后可以获取nums中差值最小值为0，最大值maxDiff为nums中最大值减最小值
 * 确定解空间为(0, maxDiff), 使用双指针遍历数组nums，累计nums中差值小于等于diff的数量count，
 * 如果count大于等于target，说明右边部分可抛弃，反之抛弃左边
 * 注意，是寻找最左边的满足条件的值，最左二分，所以最后返回的是left
 * time: O(nlongn)
 * space: O(log(n)) sort排序所占的空间
 */
var smallestDistancePair = function(nums, k) {
  nums.sort((a,b) => a - b);
  let left = 0, right = nums[nums.length - 1]  - nums[0];
  while (left < right) {
    let mid = left + ((right - left) >> 1);
    let count = getDiffCount(nums, mid);
    if (count >= k) right = mid;
    else left = mid + 1;
  }
  return left;
};

const getDiffCount = function(nums, target) {
  let l = 0, count = 0;
  for (let r = 1; r < nums.length; r++) {
    while (nums[r] - nums[l] > target) l++;
    count += r - l;
  }
  return count;
}