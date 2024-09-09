/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {number} m
 * @param {number} n
 * @param {ListNode} head
 * @return {number[][]}
 * Matrix中可以向四个方向移动，每次到达边界时修改移动的方向即可
 * time: O(m*n)
 * space: O(1)
 */
var spiralMatrix = function(m, n, head) {
  const res = new Array(m).fill(-1).map(val => new Array(n).fill(-1));
  const direction = [[0, 1], [1, 0], [0, -1], [-1, 0]];
  let idx = 0, p = head, i = 0, j = -1;
  while (p) {
    const x = i + direction[idx][0], y = j + direction[idx][1];
    if (x < 0 || x >= m || y < 0 || y >= n || res[x][y] !== -1) {
      idx = idx === 3 ? 0 : idx + 1;
    } else {
      res[x][y] = p.val;
      p = p.next;
      i = x
      j = y;
    }
  }
  return res;
};