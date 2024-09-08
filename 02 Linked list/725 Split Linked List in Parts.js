/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode[]}
 * 先遍历计算链表的长度len，再用 len / k + len % k 计算每一个部分的长度
 * time: O(n)
 * space: O(1)
 */
var splitListToParts = function(head, k) {
  let len = 0, n = head;
  while (n) {
    len++;
    n = n.next;
  }

  const size = Math.floor(len / k);
  let t = len % k;

  let h = head, p = h, res = [];
  for (let i = 0; i < k; i++) {
    let x = size + (t > 0 ? 1 : 0);
    if (!h || x === 0) res.push(null);
    else {
      for (let j = 1; j < x; j++) {
        p = p.next;
      }
      res.push(h);
      h = p.next;
      p.next = null;
      p = h;
    }
    if (t > 0) t--;
  }

  return res;
};