/**
 * @param {number[]} quality
 * @param {number[]} wage
 * @param {number} k
 * @return {number}
 * heap, sort
 * 1.ratio = wage/quality
 * 2.total_money = group_leader_ratio * (sum of min picked qualities)
 * 先将quality和wage的值按照ratio的大小排序，获取新数组arr
 * 从头开始遍历arr，k个一组，计算total_money。
 * 用一个heap维护k个quality，每次arr中移动i时，将i新的quality push进heap中，再pop出最大值，确保heap中的值是目前最小的
 * time: O(nlogn)
 * space: O(n)
 */
var mincostToHireWorkers = function(quality, wage, k) {
  const arr = [];
  for (let i = 0; i < quality.length; i++) {
    arr.push([quality[i], wage[i]]);
  }
  arr.sort((a, b) => ((a[1] / a[0]) - b[1] / b[0]));

  let total = 0, queue = new MaxPriorityQueue();
  let res = 0;
  for (let i = 0; i < quality.length; i++) {
    if (i < k) {
      total += arr[i][0];
      queue.enqueue(arr[i][0]);
      if (i === k - 1) res = (arr[i][1] / arr[i][0]) * total;
    } else {
      total += arr[i][0];
      queue.enqueue(arr[i][0]);
      total -= queue.dequeue().element;
      res = Math.min(res, (arr[i][1] / arr[i][0]) * total);
    }
  }
  return res;
};
