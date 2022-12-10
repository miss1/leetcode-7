/**
 * @param {number[]} citations
 * @return {number}
 * h-index, 题目可以理解成找到最大的h，使citations中至少有h个item大于等于h。
 * 根据题意，h的值只可能在0-citations.length之间。对于每个可能的h，计算citations中大于等于h的个数，存储到新数组中
 * 例如[3,0,6,1,5] -> count = [1,1,0,1,0,2]。然后从右到左遍历新数组，大于等于5的数有两个，所以大于等于4的数有 count[4] + count[5] = 2, [5,4,3,3,2,2]
 * 最后找到 最大的i满足count[i] >= i
 * time: O(n)
 * space: O(n)
 */
var hIndex = function(citations) {
  let len = citations.length;
  let count = new Array(len + 1).fill(0);
  for (let item of citations) {
    if (item > len) count[len] += 1;
    else count[item] += 1;
  }
  for (let i = len - 1; i >= 0; i--) {
    if (count[i + 1] >= i + 1) return i + 1;
    count[i] += count[i + 1];
  }
  return 0;
};