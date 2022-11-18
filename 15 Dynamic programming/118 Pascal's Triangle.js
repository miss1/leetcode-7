/**
 * @param {number} numRows
 * @return {number[][]}
 * time: O(n) n为结果的长度
 * space: O(n)
 */
var generate = function(numRows) {
  if (numRows === 1) return [[1]];
  if (numRows === 2) return [[1], [1,1]];
  let res = [[1], [1,1]];
  for (let i = 2; i < numRows; i++) {
    let arr = [1];
    let pre = res[i - 1];
    for (let j = 0; j < pre.length - 1; j++) {
      arr.push(pre[j] + pre[j + 1]);
    }
    arr.push(1);
    res.push(arr);
  }
  return res;
};
