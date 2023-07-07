/**
 * @param {string} answerKey
 * @param {number} k
 * @return {number}
 * 两种情况，一种是把T变成F，另一种是把F变成T
 * 移动窗口，当窗口内的T(F)数量等于k时，计算窗口长度，最大的窗口长度就是我们要求的结果。当数量大于k时，移动左指针直到数量小于等于k
 * time: O(n)
 * space: O(1)
 */
var maxConsecutiveAnswers = function(answerKey, k) {
  let left = 0, right = 0, n = k;
  let res = 0;
  while (right < answerKey.length) {
    if (answerKey[right] === 'T') n--;
    if (n < 0) {
      res = Math.max(res, right - left);
      while (n < 0) {
        if (answerKey[left] === 'T') n++;
        left++;
      }
    }
    right++;
  }
  res = Math.max(res, right - left);
  left = 0, right = 0, n = k;
  while (right < answerKey.length) {
    if (answerKey[right] === 'F') n--;
    if (n < 0) {
      res = Math.max(res, right - left);
      while (n < 0) {
        if (answerKey[left] === 'F') n++;
        left++;
      }
    }
    right++;
  }
  res = Math.max(res, right - left);
  return res;
};

/**
 * @param {string} answerKey
 * @param {number} k
 * @return {number}
 * 跟上面一样的思路，代码优化
 */
var maxConsecutiveAnswers2 = function(answerKey, k) {
  let left = 0, right = 0, t = k, f = k;
  let res = 0;
  while (right < answerKey.length) {
    if (answerKey[right] === 'T') t--;
    if (answerKey[right] === 'F') f--;
    while (t < 0 && f < 0) {
      if (answerKey[left] === 'T') t++;
      if (answerKey[left] === 'F') f++;
      left++;
    }
    res = Math.max(res, right - left + 1);
    right++;
  }
  return res;
};