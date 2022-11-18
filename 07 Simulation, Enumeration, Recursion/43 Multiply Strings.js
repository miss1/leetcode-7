/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 * 模拟乘法的计算步骤。从末尾开始逐个相乘进位
 * time: O(mn)
 * space: O(m+n) m位数和n位数相乘，结果最大为m+n位数
 */
var multiply = function(num1, num2) {
  if (num1 === '0' || num2 === '0') return '0';
  let n1 = [...num1].reverse();
  let n2 = [...num2].reverse();
  let res = new Array(n1.length + n2.length).fill(0);
  for (let i = 0; i < n1.length; i++) {
    let digit1 = n1[i];
    for (let j = 0; j < n2.length; j++) {
      let digit2 = n2[j];
      let total = digit1 * digit2 + res[i + j];
      res[i + j] = total % 10;
      res[i + j + 1] += Math.floor(total / 10);
    }
  }
  if (res[res.length - 1] === 0) res.pop();
  return res.reverse().join('');
};