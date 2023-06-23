/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 * OR: 两个都为0时结果才为0。
 * 用&操作获取a,b,c的最后一位，根据他们的关系添加res。直到a,b,c都为0
 * time: O(n)
 * space: O(1)
 */
var minFlips = function(a, b, c) {
  let res = 0;
  while (a !== 0 || b !== 0 || c !== 0) {
    let t = c & 1, t1 = a & 1, t2 = b & 1;
    if (t === 0) {
      if (t1 === 1) res++;
      if (t2 === 1) res++;
    } else {
      if (t1 === 0 && t2 === 0) res++;
    }
    c = c >> 1;
    a = a >> 1;
    b = b >> 1;
  }
  return res;
};