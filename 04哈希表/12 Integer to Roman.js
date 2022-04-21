/**
 * @param {number} num
 * @return {string}
 * 建立两个长度相同的数组，存储对应的数字和罗马字符
 * 从最大的罗马数字M开始，用num除以当前的数字，获取当前罗马字符的个数
 * time: O(n)
 * space: O(1)
 */
var intToRoman = function(num) {
  let roman = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
  let arr = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  let res = '';
  for (let i = 0; i < arr.length; i++) {
    if (num >= arr[i]) {
      let count = Math.floor(num / arr[i]);
      while (count > 0) {
        res += roman[i];
        count--;
      }
      num = num % arr[i];
    }
  }
  return res;
};