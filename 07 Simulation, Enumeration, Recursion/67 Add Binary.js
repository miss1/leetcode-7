/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 * 模拟二进制的计算，从末尾开始相加进位
 * time: O(Math.max(m,n))
 * space: O(Math.max(m,n))
 */
var addBinary = function(a, b) {
  let s1 = [...a];
  let s2 = [...b];
  let res = [], addition = 0;
  while (s1.length > 0 || s2.length > 0) {
    let n1 = s1.length > 0 ? s1.pop() : 0;
    let n2 = s2.length > 0 ? s2.pop() : 0;
    let total = Number(n1) + Number(n2) + addition;
    if (total >= 2) {
      res.push(total % 2);
      addition = 1;
    } else {
      res.push(total);
      addition = 0;
    }
  }
  if (addition === 1) res.push(1);
  return res.reverse().join('');
};