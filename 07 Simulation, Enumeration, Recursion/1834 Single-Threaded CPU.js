/**
 * @param {number[][]} tasks
 * @return {number[]}
 * 堆(使用了datastructures-js中的优先队列，没有动手建立堆)，先将index添加到tasks中，再将tasks按enqueueTime排序。
 * 遍历tasks，将enqueueTime小于当前时间的任务添加到堆中等待执行；取出堆中第一个task执行，更新执行完之后的当前时间。
 * time: O(nlog(n))
 * space: O(n)
 */
var getOrder = function(tasks) {
  tasks = tasks.map((val, index) => [...val, index]);
  tasks.sort((a, b) => b[0] - a[0]);
  let queue = new MinPriorityQueue({priority: (val) => (10 ** 5) * val[1] + val[2]});
  let res = [], time = tasks[tasks.length - 1][0];
  while (tasks.length > 0 || queue.size() > 0) {
    while (tasks.length > 0 && time >= tasks[tasks.length - 1][0]) queue.enqueue(tasks.pop());
    if (queue.size() > 0) {
      let current = queue.dequeue().element;
      time = time + current[1];
      res.push(current[2]);
    } else if (tasks.length > 0) {
      time = tasks[tasks.length - 1][0];
    }
  }
  return res;
};
