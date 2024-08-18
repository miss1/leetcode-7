/**
 * @param {number} n
 * @return {number}
 * 获取Ugly number: 从1开始，将目前获取的Ugly number分别乘以2，3，5来获取新的Ugly number
 * 用arr存储获取到的Ugly number(按顺序)
 * x,y,z从idx=0开始；每一个已知的number都需要乘以2，3，5。如果已经乘过了，则移动对应的idx(x,y,z)
 * 每次新增的Ugly number，arr[i] = Math.min(arr[x] * 2, arr[y] * 3, arr[z] * 5)
 * time: O(n)
 * space: O(n)
 */
var nthUglyNumber = function(n) {
  let arr = [1];
  let x = 0, y = 0, z = 0;
  while (arr.length < n) {
    const t = Math.min(arr[x] * 2, arr[y] * 3, arr[z] * 5);
    if (t === arr[x] * 2) x++;
    if (t === arr[y] * 3) y++;
    if (t === arr[z] * 5) z++;
    arr.push(t);
  }
  return arr[n - 1];
};

/**
 * @param {number} n
 * @return {number}
 * PriorityQueue, 从1开始，每次dequeue的数乘以2，3，5存入queue中，如果有重复的数，则不用enqueue
 * time: O(nlogn)
 * space: O(n)
 */
var nthUglyNumber2 = function(n) {
  const pq = new PriorityQueue({compare: (a, b) => a - b});
  pq.enqueue(1);
  let res = 0, set = new Set([1]);
  for (let i = 1; i <= n; i++) {
    res = pq.dequeue();
    if (!set.has(res * 2)) {
      pq.enqueue(res * 2);
      set.add(res * 2);
    }
    if (!set.has(res * 3)) {
      pq.enqueue(res * 3);
      set.add(res * 3);
    }
    if (!set.has(res * 5)) {
      pq.enqueue(res * 5);
      set.add(res * 5);
    }
  }
  return res;
};
