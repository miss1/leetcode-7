/**
 * @param {string} s
 * @return {number}
 * 设计九宫格键盘
 * 贪心，先记录s中每个字符出现的频率，再根据频率排序，将频率高的字符排在第一位
 * 频率前九的字符排第一，10-18的拍第二，其它的第三
 * time: O(n)
 * space: O(26)
 */
var minimumKeypresses = function(s) {
  let arr = new Array(26).fill(0);
  const start = 'a'.charCodeAt(0);
  for (let c of s) {
    arr[c.charCodeAt(0) - start] += 1;
  }
  arr.sort((a, b) => b - a);
  let res = 0;
  for (let i = 0; i < 26; i++) {
    if (i < 9) {
      res += arr[i];
    } else if (i < 18) {
      res += arr[i] * 2;
    } else {
      res += arr[i] * 3;
    }
  }
  return res;
};