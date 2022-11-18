/**
 * @param {TreeNode} root
 * @return {number[][]}
 * DFS, 先序遍历，记录每个节点的row和col，存储到map中，map中col为key值，value为对象数组[{row: row, val: root.val}]
 * 对map的key排序，遍历key获取map的值，将取出来的数组根据row和val的值排序（先比较row的大小，row相同再比较val），再将排序好的数组push到结果数组res中
 * {0：[{row: row, val: root.val}]}
 * time: O(nlogn), sort排序的时间复杂度为O(nlogn)
 * space: O(n)
 */
var verticalTraversal = function(root) {
  let map = new Map();
  let keys = [], res = [];
  let preOrder = function(root, row, col) {
    if (!root) return;
    if (map.has(col)) map.get(col).push({row: row, val: root.val});
    else {
      map.set(col, [{row: row, val: root.val}]);
      keys.push(col);
    }
    preOrder(root.left, row + 1, col - 1);
    preOrder(root.right, row + 1, col + 1);
  };
  preOrder(root, 0, 0);
  keys.sort((a,b) => { return a - b; });
  for (let i = 0; i < keys.length; i++) {
    let arr = map.get(keys[i]);
    arr.sort((a,b) => {
      if (a.row === b.row) return a.val - b.val;
      else return a.row - b.row;
    });
    res.push(arr.map(val => {return val.val}));
  }
  return res;
};