/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 * 枚举。先将a,b存储数组中，数组中存储每个字符的个数，数组下标对应1-26个字符
 * 遍历26个字符，假设a中最大字符为当前字符i，满足条件需要a中最大字符小于b中最小字符
 * 则a中所有大于i的字符都需要操作(改成小于等i)，b中所有小于等于i的字符都需要操作(改成大于i)
 * 对于第三种情况，a,b所有字符相等，遍历26个字符，假设将所有字符设置成当前字符i，则操作数为a,b总长度减去当前已经是i的字符数
 * time: O(m+n) m,n分别为a,b的长度
 * space: O(26)
 */
var minCharacters = function(a, b) {
  let c1 = new Array(26).fill(0);
  let c2 = new Array(26).fill(0);
  for (let i = 0; i < a.length; i++) c1[a[i].charCodeAt(0) - 97] += 1;
  for (let i = 0; i < b.length; i++) c2[b[i].charCodeAt(0) - 97] += 1;
  let res = a.length + b.length;
  // r1: 第一种情况，a中所有字符小于b中所有字符；r2: 第二种情况，b中所有字符小于a中所有字符
  for (let i = 0; i < 25; i++) {
    let r1 = 0, r2 = 0;
    for (let j = i + 1; j < 26; j++) {
      r1 += c1[j];
      r2 += c2[j];
    }
    for (let x = i; x >= 0; x--) {
      r1 += c2[x];
      r2 += c1[x];
    }
    res = Math.min(res, r1, r2);
  }
  // 第三种情况，a,b所有字符相等
  for (let i = 0; i < 26; i++) res = Math.min(res, a.length + b.length - c1[i] - c2[i]);
  return res;
};
