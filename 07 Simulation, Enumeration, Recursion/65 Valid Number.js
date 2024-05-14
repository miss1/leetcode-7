/**
 * @param {string} s
 * @return {boolean}
 * simulation，根据规则模拟判断
 * time: O(n)
 * space: O(1)
 */
var isNumber = function (s) {
  if (isLetter(s[0])) return false;  // 首字母不能是字符
  if (s.length === 1 && (s[0] === '.' || s[0] === '+' || s[0] === '-')) return false;  // 长度为1时，只能是数字
  if (s[0] === '.' && !(isDigit(s[1]))) return false;  // . 的前面不是digit，则后面一定是digit

  let ex = false, dot = s[0] === '.';  // 标记，只能有一个e和一个.
  for (let i = 1; i < s.length; i++) {
    // +,- 只能存在于e的后一位，并且不能是最后一位 （因为e后面可以接一个integer，可以带正负号）
    if ((s[i] === '+' || s[i] === '-') && (s[i - 1] !== 'e' && s[i - 1] !== 'E')) return false;
    if ((s[i] === '+' || s[i] === '-') && i === s.length - 1) return false;

    // e, 只能有一个e，e前面只能是digit或者.,e不能是最后一位
    if (s[i] === 'e' || s[i] === 'E') {
      if (ex || !(isDigit(s[i - 1]) || s[i - 1] === '.') || i === s.length - 1) return false;
      ex = true;
    } else if (isLetter(s[i])) {  // 不能是除e以外的任何字符
      return false;
    }

    // .; 只能有一个dot，dot的前面和后面至少需要一个digit; dot前面不能有e
    if (s[i] === '.') {
      if (ex || dot || !(isDigit(s[i - 1]) || s[i - 1] === '+' || s[i - 1] === '-')) return false;
      if ((i === s.length - 1 || !(isDigit(s[i + 1]))) && !(isDigit(s[i - 1]))) return false;
      dot = true;
    }
  }
  return true;
};

var isDigit = function(c) {
  return !isNaN(Number(c));
}

var isLetter = function(c) {
  const code = c.charCodeAt(0);
  return (code >= 65 && code <= 90) || (code >= 97 && code <= 122);
}
