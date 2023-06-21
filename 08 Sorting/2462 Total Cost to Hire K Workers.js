/**
 * @param {number[]} costs
 * @param {number} k
 * @param {number} candidates
 * @return {number}
 * 优先队列。先建立两个长度为candidates的优先队列（降序）。
 * 然后比较两个队列的最后一个数，取出较小数添加到结果种，再入队一个新的数作为补充
 * time: O(km + mm)  m=candidates/2
 * space: O(m)
 */
var totalCost = function(costs, k, candidates) {
  let q1 = [], q2 = [];

  //O(m)
  const enqueue = function(h, val) {
    let low = 0, high = h.length;
    while (low < high) {
      let mid = low + ((high - low) >> 1);
      if (h[mid] < val) high = mid;
      else low = mid + 1;
    }
    h.splice(low, 0, val); //O(m)
  };

  // m*m
  let left = 0, right = costs.length - 1;
  while (left <= right && q1.length < candidates) {
    enqueue(q1, costs[left]);
    if (left !== right) enqueue(q2, costs[right]);
    left++;
    right--;
  }

  //km
  let res = 0;
  while (k > 0) {
    let t1 = q1.pop() || Infinity, t2 = q2.pop() || Infinity;
    if (t1 <= t2) {
      res += t1;
      q2.push(t2);
      if (left <= right) {
        enqueue(q1, costs[left]);
        left++;
      }
    } else {
      res += t2;
      q1.push(t1);
      if (left <= right) {
        enqueue(q2, costs[right]);
        right--;
      }
    }
    k--;
  }
  return res;
};