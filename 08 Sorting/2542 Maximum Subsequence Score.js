/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number}
 * Priority Queue
 * 先将nums2按降序排列，nums1跟随nums2一起
 * 我们尽力取nums2中较大的值，对于nums1，因为是取subsequence，所以只需保证跟nums2[i]中对应的值包含在k个数中，剩余的其它数最大值即可
 * 所以降序遍历nums2，将对应的nums1存入优先队列，每次检查新的nums2时，将队列中的最小值pop，再插入新的nums1
 * time: O(n²)
 * space: O(n)
 */
var maxScore = function(nums1, nums2, k) {
  const n = nums1.length;
  let arr = new Array(n).fill(0);
  for (let i = 0; i < n; i++) {
    arr[i] = [nums1[i], nums2[i]];
  }
  arr.sort((a, b) => b[1] - a[1]);

  let queue = [];
  const enqueque = function(val) {
    let low = 0, high = queue.length;
    while(low < high) {
      let mid = low + ((high - low) >> 1);
      if (val > queue[mid]) high = mid;
      else low = mid + 1;
    }
    queue.splice(low, 0, val);
  };
  let res = 0, sum = 0;
  for (let i = 0; i < n; i++) {
    if (i < k - 1) {
      enqueque(arr[i][0]);
      sum += arr[i][0];
    } else if (i === k - 1) {
      enqueque(arr[i][0]);
      sum += arr[i][0];
      res = Math.max(res, sum * arr[i][1]);
    } else {
      sum -= queue.pop();
      enqueque(arr[i][0]);
      sum += arr[i][0];
      res = Math.max(res, sum * arr[i][1]);
    }
  }
  return res;
};