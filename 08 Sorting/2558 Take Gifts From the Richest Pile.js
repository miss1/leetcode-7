/**
 * @param {number[]} gifts
 * @param {number} k
 * @return {number}
 * 优先队列，每次取出最大值，再开方之后存进去
 * time: O(n²)
 * space: O(n)
 */
var pickGifts = function(gifts, k) {
  let heap = [];
  const insert = function(value) {
    let low = 0, high = heap.length;
    while (low < high) {
      let mid = low + ((high - low) >> 1);
      if (value < heap[mid]) high = mid;
      else low = mid + 1;
    }
    heap.splice(low, 0, value);
  };
  for (let g of gifts) {
    insert(g);
  }
  for (let i = 0; i < k; i++) {
    let t = heap.pop();
    insert(Math.floor(Math.sqrt(t)));
  }
  let res = 0;
  for (let h of heap) res += h;
  return res;
};