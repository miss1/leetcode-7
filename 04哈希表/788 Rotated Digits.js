/**
 * @param {number} n
 * @return {number}
 * 哈希表记录每个数字对应的旋转之后的数字，遍历生成旋转后的字符串，旋转后跟原来不相等就是good
 * time: O(n)
 * space: O(1)
 */
var rotatedDigits = function(n) {
  let map = {'0': '0', '1': '1', '2': '5', '5': '2', '6': '9', '8': '8', '9': '6'};
  let count = 0;
  for (let i = 0; i <= n; i++) {
    let num = i + '', str = '';
    for (let j = 0; j < num.length; j++) {
      if (!map.hasOwnProperty(num[j])) {
        str = '';
        break;
      }
      str += map[num[j]];
    }
    if (str && str !== num) count++;
  }
  return count;
};