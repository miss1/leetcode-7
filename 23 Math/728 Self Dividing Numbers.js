/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 * 遍历每一个数字，对于每一个数字，判断它是否能被它的每一位整除
 * time: O(n), 为right到left之间的数字个数。因为数字最大为10000， 所以其实时间复杂度为 O(5*n) => O(n)
 * space: O(d), d为答案的数量
 */
var selfDividingNumbers = function(left, right) {
  let res = [];
  for (let i = left; i <= right; i++) {
    let num = i;
    while (num > 0) {
      let d = num % 10;
      if (d !== 0 && i % d === 0) {
        num = Math.floor(num / 10);
      } else {
        break;
      }
    }
    if (num === 0) res.push(i);
  }
  return res;
};