/**
 * @param {number[][]} nums
 * @return {number[]}
 * priority-queue
 * nums中每个数组都是非降序的，所以先将nums中每个数组的最小值push进pq中，pq中最大值和最小值就是一组可能的答案
 * 每次从pq中出栈最小值，找到这个最小值nums[i][j], 将该数组中的下一个值nums[i][j+1]放进pq中，重新获取pq中最大值和最小值
 * time: O(m*n*logm), m=nums.length, n=nums[i].length
 * space: O(m)
 */
var smallestRange = function(nums) {
  const queue = new PriorityQueue({compare: (a, b) => a[0] - b[0]});
  for (let i = 0; i < nums.length; i++) {
    queue.enqueue([nums[i][0], i, 0]);  // [val, i, j]
  }

  let res = [queue.front()[0], queue.back()[0]];
  let [m, i, j] = queue.dequeue();
  while (j + 1 < nums[i].length) {
    queue.enqueue([nums[i][j + 1], i, j + 1]);
    if (queue.back()[0] - queue.front()[0] < res[1] - res[0]) {
      res = [queue.front()[0], queue.back()[0]];
    }
    [m, i, j] = queue.dequeue();
  }
  return res;
};