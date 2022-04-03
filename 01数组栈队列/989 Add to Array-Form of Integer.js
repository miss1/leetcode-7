/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 * 数组
 * time: O(n)
 * space: O(n)
 */
var addToArrayForm = function(num, k) {
  let size = Math.max(num.length, (k + '').length);
  let res = new Array(size);
  let j = num.length - 1;
  for (let i = res.length - 1; i >= 0; i--) {
    let sum = k % 10;
    if (j >= 0) sum += num[j];
    if (res[i]) sum += res[i];
    if (i === 0) {
      res[i] = sum;
    } else {
      res[i] = sum % 10;
      res[i - 1] = Math.floor(sum / 10);
    }
    k = Math.floor(k / 10);
    j--;
  }
  if (res[0] >= 10) {
    let s = res[0];
    res[0] = s % 10;
    res.unshift(Math.floor(s /10));
  }
  return res;
};

// 新建一个数组，长度为num和k的长度的最大值，从num和k的末尾开始相加，得到的值赋值到新数组中，注意进位。