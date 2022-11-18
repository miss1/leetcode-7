/**
 * @param {string} digits
 * @return {string[]}
 * 暴力方法，三层循环
 * time: O(n) n为结果数组的长度
 * space: O(1)
 */
var letterCombinations = function (digits) {
  let map = {'2': 'abc', '3': 'def', '4': 'ghi', '5': 'jkl', '6': 'mno', '7': 'pqrs', '8': 'tuv', '9': 'wxyz'};
  let res = [];
  for (let d of digits) {
    let arr = [];
    for (let c of map[d]) {
      if (res.length === 0) arr.push(c);
      else {
        for (let i = 0; i < res.length; i++) arr.push(res[i] + c);
      }
    }
    res = arr;
  }
  return res;
};


/**
 * @param {string} digits
 * @return {string[]}
 * 递归
 * time: O(n) n为结果数组的长度
 * space: O(n)
 */
var letterCombinations2 = function(digits) {
  let map = {'2': 'abc', '3': 'def', '4': 'ghi', '5': 'jkl', '6': 'mno', '7': 'pqrs', '8': 'tuv', '9': 'wxyz'};
  let res = [];
  const combination = function(prefix, index) {
    if (index === digits.length) {
      if (prefix !== '') res.push(prefix);
      return;
    }
    let letters = map[digits[index]];
    for (let c of letters) {
      combination(prefix + c, index + 1);
    }
  };
  combination('', 0);
  return res;
};