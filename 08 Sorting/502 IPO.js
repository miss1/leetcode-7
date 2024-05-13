/**
 * @param {number} k
 * @param {number} w
 * @param {number[]} profits
 * @param {number[]} capital
 * @return {number}
 * 先将capital和profits按升序排序，获取新数组arr
 * 遍历arr，将capital小于等于w的profits放入heap中,然后取最大值，添加到w
 * 取k个值，每次取值时都是取当前heap中，capital小于等于w，最大的profit
 * time: O(nlogn)
 * space: O(n)
 */
var findMaximizedCapital = function(k, w, profits, capital) {
  let arr = [];
  for (let i = 0; i < capital.length; i++) {
    arr.push([capital[i], profits[i]]);
  }
  arr.sort((a, b) => a[0] - b[0]);

  let queue = new PriorityQueue({compare: (a, b) => b - a});
  let i = 0;
  while (i < arr.length && k > 0) {
    if (arr[i][0] <= w) {
      queue.enqueue(arr[i][1]);  // log(n)
      i++;
    } else {
      w += queue.dequeue();  // log(n)
      k--;
    }
  }
  while (k > 0) {
    w += queue.dequeue();
    k--;
  }

  return w;
};
