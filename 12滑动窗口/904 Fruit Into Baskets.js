/**
 * @param {number[]} fruits
 * @return {number}
 * 滑动窗口，其实是求滑动窗口内只包含两个数时最大的长度
 * 用j记录第一个数第一次出现的index，遍历fruits。
 * 用map记录窗口内两个数最后一次出现的index位置，当出现第三个数时，更新j的位置到第一个数最后一次出现的位置后一个(去掉第一个数)
 * 每次循环(移动i指针时)，记录当前窗口最大长度
 * time: O(n)
 * space: O(1)
 */
var totalFruit = function(fruits) {
  let map = new Map();
  let count = 1, j = 0;
  for (let i = 0; i < fruits.length; i++) {
    map.set(fruits[i], i);
    if (map.size > 2) {
      let minIndex = fruits.length - 1;
      for (let m of map) {
        if (m[1] < minIndex) minIndex = m[1];
      }
      map.delete(fruits[minIndex]);
      j = minIndex + 1;
    }
    count = Math.max(count, i - j + 1);
  }
  return count;
};