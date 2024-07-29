/**
 * @param {number[]} rating
 * @return {number}
 * 先遍历，计算每个值右边比它大(小)的值的个数
 * 再遍历，对于每一个值，假设以它为起点，能组成多少个队
 * time: O(n²)
 * space: O(n)
 */
var numTeams = function(rating) {
  const len = rating.length;
  const asc = new Array(len).fill(0);
  const des = new Array(len).fill(0);

  // 计算右边比当前数更大（小）的数的数量
  for (let i = 0; i < len - 1; i++) {
    for (let j = i + 1; j < len; j++) {
      if (rating[i] > rating[j]) des[i] += 1;  // 比当前值更小的数的数量
      if (rating[i] < rating[j]) asc[i] += 1;  // 比当前值更大的数的数量
    }
  }

  let res = 0;
  // rating[i]为第一个数，rating[j]为第二个数，能组成多少队
  for (let i = 0; i < len - 2; i++) {
    for (let j = i + 1; j < len - 1; j++) {
      if (rating[i] > rating[j]) res += des[j];
      if (rating[i] < rating[j]) res += asc[j];
    }
  }

  return res;
};