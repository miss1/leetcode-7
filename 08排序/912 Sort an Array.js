/**
 * @param {number[]} nums
 * @return {number[]}
 * 归并排序
 * time: O(nlog(n))
 * space: O(n)
 */
var sortArray = function(nums) {
  if (nums.length === 1) return nums;
  return mergeSort(nums, 0, nums.length - 1);
};

const mergeSort = function(nums, start, end) {
  if (start >= end) return [nums[start]];
  let mid = start + ((end - start) >> 1);
  let left = mergeSort(nums, start, mid);
  let right = mergeSort(nums, mid + 1, end);
  return sortOrderlyArray(left, right);
};

const sortOrderlyArray = function(a, b) {
  let i = 0, j = 0;
  let res = [];
  while (i < a.length || j < b.length) {
    if (i >= a.length || a[i] > b[j]) {
      res.push(b[j]);
      j++;
      continue;
    }
    if (j >= b.length || a[i] <= b[j]) {
      res.push(a[i]);
      i++;
    }
  }
  return res;
};
