/**
 * @param {number[]} nums
 * @return {number}
 * 归并排序的思想，二分，将数组不断分成两半，直到无法分割。再比较两个数是否符合条件，再排序合并。
 * 合并之后，拿左边中的每个数跟右边中的每个数进行比较（左边数的下标一定会大于右边数的下标，所以符合题意）
 * 注意，js的sort方法在这不适用，会超时，需要自己写sort方法
 * time: O(nlogn)
 * space: O(n)
 */
var reversePairs = function(nums) {
  return mergeSort(nums, 0, nums.length - 1);
};

const mergeSort = function(nums, start, end) {
  if (start >= end) return 0;
  let mid = start + ((end - start) >> 1);
  let res = mergeSort(nums, start, mid) + mergeSort(nums, mid + 1, end);
  let j =  mid + 1;
  for (let i = start; i <= mid; i++) {
    while (j <= end && nums[i] > 2 * nums[j]) j++
    res += j - (mid + 1);
  }
  sortBetween(nums, start, mid, end);
  return res;
};

// 合并两个有序数组，排序
const sortBetween = (arr = [], start, mid, end) => {
  let s = [], j = mid + 1;
  for (let i = start; i <= mid; i++) {
    while (j <= end && arr[i] > arr[j]) {
      s.push(arr[j]);
      j++;
    }
    s.push(arr[i]);
  }
  while (j <= end) {
    s.push(arr[j]);
    j++;
  }
  for (let i = start; i <= end; i++) arr[i] = s[i - start];
};
