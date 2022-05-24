/**
 * @param {number} rowIndex
 * @return {number[]}
 * time: O(n) n为结果的长度
 * space: O(n)
 */
var getRow = function(rowIndex) {
  if (rowIndex === 0) return [1];
  if (rowIndex === 1) return [1, 1];
  let arr = [1, 1];
  for (let i = 2; i <= rowIndex; i++) {
    let res = [1];
    for (let j = 0; j < arr.length - 1; j++) {
      res.push(arr[j] + arr[j + 1]);
    }
    res.push(1);
    arr = res;
  }
  return arr;
};
