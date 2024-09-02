/**
 * @param {number} n
 * @param {number[]} primes
 * @return {number}
 * 跟264差不多的思想
 * 用PriorityQueue存储当前得到的结果，取最小值分别和primes中的每个数相乘，将结果放入PriorityQueue中。
 * 注意重复的值
 * time: O(n*m*logm) m = primes.length
 * space: O(m)
 */
var nthSuperUglyNumber = function(n, primes) {
  const queue = new PriorityQueue({compare: (a, b) => a - b});
  queue.enqueue(1);

  const set = new Set();
  let res = 0;
  while (n > 0) {
    const num = queue.dequeue();
    if (set.has(num)) continue;
    set.add(num);
    res = num;
    for (let p of primes) {
      if (!set.has(p * num)) queue.enqueue(p * num);
    }
    n--;
  }

  return res;
};