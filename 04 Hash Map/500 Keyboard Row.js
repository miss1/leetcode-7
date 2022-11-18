/**
 * @param {string[]} words
 * @return {string[]}
 * 循环，逐个判断每个字符是否在同一行
 * time: O(n), n为字符总长度
 * space: O(1)
 */
var findWords = function(words) {
  let row1 = new Set('qwertyuiop');
  let row2 = new Set('asdfghjkl');
  let res = [];
  let getRow = function(c) {
    let s = c.toLowerCase();
    if (row1.has(s)) return 1;
    if (row2.has(s)) return 2;
    return 3;
  };
  for (let i = 0; i < words.length; i++) {
    let c = words[i];
    let r = getRow(c[0]), j = 1;
    while(j < c.length) {
      if (r !== getRow(c[j])) break;
      j++;
    }
    if (j === c.length) res.push(c);
  }
  return res;
};