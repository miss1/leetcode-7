/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 * 题目是要求两个相同字母中间至少有n个时间单位（一个时间单位处理一个任务或者一个idle）
 * 取个数最多的字母(eg: A)，将其它的字母填充到多个A中间。
 * 假设tasks中个数最多的字母是A，有x个，则这些A中间一共有x-1个空格，每个空格中应该填充n个插槽，一共是emptySlots = n(x-1)个插槽。
 * 现有的剩余字母个数是availableTasks = tasks.length - x。如果availableTasks小于emptySlots，说明字母不够，需要 idles填充
 * 所以 idles = Math.max(0, emptySlots - availableTasks)
 * time: O(n)
 * space: O(26)
 */
var leastInterval = function(tasks, n) {
  let counter = new Array(26).fill(0);
  let max = 0, maxCount = 0;
  for (let i = 0; i < tasks.length; i++) {
    let index = tasks[i].charCodeAt(0) - 'A'.charCodeAt(0);
    counter[index] += 1;
    if (max === counter[index]) maxCount++;
    else if (max < counter[index]) {
      max = counter[index];
      maxCount = 1;
    }
  }

  let partCount = max - 1;  // 相同的字母中间的空格，'A A A' 中间有两个空格
  let partLength = n - (maxCount - 1);
  let emptySlots = partCount * partLength; // partCount * n  两个相同字母中间应该插入n个插槽，
  let availableTasks = tasks.length - max * maxCount;
  let idles = Math.max(0, emptySlots - availableTasks);

  return tasks.length + idles;
};
