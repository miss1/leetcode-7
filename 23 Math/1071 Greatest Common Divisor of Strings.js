/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 * 需要计算出一个字符串的长度，该长度既可以整除str1的长度又可以整除str2的长度（最大公约数）
 * 欧几里得算法（辗转相除法）求最大公约数。gcd(a,b) = gcd(b,a mod b)
 * 求得字符串长度的最大公约数之后，截取对应的长度返回即可
 * time: O(n)
 * space: O(1)
 */
var gcdOfStrings = function(str1, str2) {
  if (str1 + str2 !== str2 + str1) return '';
  let a = str1.length, b = str2.length;
  while (b !== 0) {
    let t = b;
    b = a % b;
    a = t;
  }
  return str1.slice(0, a);
};

/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings2 = function(str1, str2) {
  const gcd = function(a, b) {
    if (b === 0) return a;
    else return gcd(b, a % b);
  };
  if (str1 + str2 !== str2 + str1) return '';
  let size = gcd(str1.length, str2.length);
  return str1.slice(0, size);
};