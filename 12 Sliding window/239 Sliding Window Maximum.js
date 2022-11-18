/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 * 建立一个递减的双端队列，存储窗口中的值。窗口移动时，入队的数小于等于队尾时直接入队，若大于队尾则一直出队直到数字不大于队尾。
 * （要寻找最大值，所以队尾小于当前数字的值都无价值，需要出队抛弃掉）
 * 左指针需要出队的失效元素，如果小于队头，根据入队规则说明之前已经被抛弃掉了，所以不做处理，等于队头的时候才要移除队头。
 * time: O(n)
 * space: O(k)
 */
var maxSlidingWindow = function(nums, k) {
  let queue = [nums[0]];
  for (let i = 1; i < k; i++) pushVal(nums[i], queue);
  let res = [queue[0]];
  let left = 0, right = k - 1;
  while (right + 1 < nums.length) {
    if (nums[left] >= queue[0]) queue.shift();
    pushVal(nums[right + 1], queue);
    res.push(queue[0]);
    left++;
    right++;
  }
  return res;
};

// 入队
let pushVal = function(val, queue) {
  if (val <= queue[queue.length - 1]) queue.push(val);
  else {
    while (queue[queue.length - 1] < val) queue.pop();
    queue.push(val);
  }
};
