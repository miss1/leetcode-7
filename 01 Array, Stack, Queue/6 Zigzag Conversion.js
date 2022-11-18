/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 * 新建一个长度为numRows的数组，用来存储每一行的字符
 * 遍历字符串s，判断当前字符第几行，存储到数组的对应位置中。遍历时数组下标index从0递增，直到达到numRows再递减，以此类推
 * time: O(n)
 * space: O(n)
 */
var convert = function(s, numRows) {
  if (numRows === 1) return s;
  let res = new Array(numRows).fill('');
  let tag = 1, index = 0;
  for (let c of s) {
    res[index] += c;
    if (index === 0) tag = 1;
    else if (index === numRows - 1) tag = -1;
    index += tag;
  }
  return res.join('');
};
