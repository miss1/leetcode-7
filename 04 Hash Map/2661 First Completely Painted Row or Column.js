/**
 * @param {number[]} arr
 * @param {number[][]} mat
 * @return {number}
 * 先遍历mat，用哈希表记录每个值的坐标
 * 新建两个数组rows和columns记录mat中每一行和每一列已经记录到的数量，初始值为0
 * 遍历arr，对于arr中的每一个数字。从hashmap中找出对应的坐标，然后更新两个数组的值
 * 当当前更新的值到达map中每一行/列中的总数时，说明找到了该index
 * time: O(m*n)
 * space: O(m*n)
 */
var firstCompleteIndex = function(arr, mat) {
  let map = new Map();
  const m = mat.length, n = mat[0].length;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      map.set(mat[i][j], [i, j]);
    }
  }

  let rows = new Array(m).fill(0);
  let columns = new Array(n).fill(0);
  for (let i = 0; i < arr.length; i++) {
    let p = map.get(arr[i]);
    rows[p[0]] += 1;
    columns[p[1]] += 1;
    if (rows[p[0]] === n || columns[p[1]] === m) return i;
  }
  return 0;
};