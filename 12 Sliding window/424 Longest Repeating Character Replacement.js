/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 * 要求最多改变k个字符后，最长的连续相同字符的长度
 * 移动窗口，map记录窗口内每个字符出现的频率，并记录下最大频率，
 * 当窗口长度小于等于最大频率+k时，移动右指针增大窗口；当窗口长度大于k+最大频率时，移动左指针缩小窗口
 * time: O(n)
 * space: O(n)
 */
var characterReplacement = function(s, k) {
  let l = 0, r = 0;
  let frequencyMap = new Map();
  let maxFrequency = 0;
  let res = 0;
  while (r < s.length) {
    frequencyMap.set(s[r], frequencyMap.has(s[r]) ? frequencyMap.get(s[r]) + 1 : 1);
    maxFrequency = Math.max(maxFrequency, frequencyMap.get(s[r]));
    if (r - l + 1 - maxFrequency <= k) {
      res = Math.max(res, r - l + 1);
    } else {
      frequencyMap.set(s[l], frequencyMap.get(s[l]) - 1);
      l++;
    }
    r++;
  }
  return res;
};