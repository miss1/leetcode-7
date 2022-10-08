/**
 * @param {number[]} seats
 * @return {number}
 * 要求距离当前位置最近的人的最远距离，只要求出当前位置左边最近的人的距离和右边最近的人的距离。两者取最小值
 * time: O(n)
 * space: O(n)
 */
var maxDistToClosest = function(seats) {
  let size = seats.length;
  let left = new Array(size).fill(0);
  let right = new Array(size).fill(0);
  if (seats[0] === 0) left[0] = Infinity;
  if (seats[size - 1] === 0) right[size - 1] = Infinity;
  for (let i = 1; i < size; i++) {
    if (seats[i] === 1) left[i] = 0;
    else left[i] = left[i - 1] + 1;
  }
  for (let i = size - 2; i >= 0; i--) {
    if (seats[i] === 1) right[i] = 0;
    else right[i] = right[i + 1] + 1;
  }
  let res = 0;
  for (let i = 0; i < size; i++) {
    let dis = Math.min(left[i], right[i]);
    res = Math.max(res, dis);
  }
  return res;
};


/**
 * @param {number[]} seats
 * @return {number}
 * 双指针，分别指向当前作为的两边最近的人，如果当前位置坐了人，则更新prev(左)指针，如果当前位置超过了future(右)指针，则更新future指针直到找到人
 * time: O(n)
 * space: O(1)
 *
 */
var maxDistToClosest2 = function(seats) {
  let size = seats.length;
  let prev = -1, future = 0;
  let ans = 0;
  for (let i = 0; i < size; i++) {
    if (seats[i] === 1) {
      prev = i;
    } else {
      while (future < size && seats[future] === 0 || future < i) {
        future++;
      }
      let left = prev === -1 ? size : i - prev;
      let right = future === size ? size : future - i;
      ans = Math.max(ans, Math.min(left, right));
    }
  }
  return ans;
};