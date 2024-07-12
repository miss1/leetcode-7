/**
 * @param {string} s
 * @return {string}
 * time: O(1)
 * space: O(1)
 */
var findLatestTime = function(s) {
  let res = '';

  if (s[0] === '?') res = s[1] > 1 ? 0 : 1;
  else res += s[0];

  if (s[1] === '?') res = res[0] === '0' ? res + '9' : res + '1';
  else res += s[1];

  res += ':';

  if (s[3] === '?') res += '5';
  else res += s[3];

  if (s[4] === '?') res += '9';
  else res += s[4];

  return res;
};
