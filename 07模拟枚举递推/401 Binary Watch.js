/**
 * @param {number} turnedOn
 * @return {string[]}
 * 枚举。二进制手表，手表中灯亮的个数其实就是对应的数字转换成二进制后1的个数。
 * 比如 hour = 6 = 4 + 2 = 110 -> 手表中 4，2亮，两个1亮两个数字
 * 0 < hour < 12, 0 < minute < 60 。 枚举所有可能的时间，将1的个数为turnedOn的时间存起来作为答案
 * i.toString(2) -> 将数字转换成二进制字符串
 * time: 0(1)
 * space" O(1)
 */
var readBinaryWatch = function(turnedOn) {
  let res = [];
  for (let i = 0; i < 12; i++) {
    let h = i.toString(2).split('').filter(val => val === '1').length;
    for (let j = 0; j < 60; j++) {
      let m = j.toString(2).split('').filter(val => val === '1').length;
      if (m + h === turnedOn) res.push(i + ':' + (j < 10 ? '0' + j : j));
    }
  }
  return res;
};
