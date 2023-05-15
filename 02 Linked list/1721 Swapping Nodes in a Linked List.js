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
 * @return {ListNode}
 * 先用两个指针，第一个指针先走k-1步，两个指针再同时移动直到到达连伟尾端。这样能找到要交换的两个node
 * 同时记录两个node的pre node和next node
 * 最后交换两个node的位置，注意node1和node2的先后顺序可能不同，也可能相邻
 * time: O(n)
 * space: O(1)
 */
var swapNodes = function(head, k) {
  let n = new ListNode(-1, head);
  let right = head;
  let node1 = head, pre1 = n, next1 = null;
  let node2 = head, pre2 = n, next2 = null;
  let len = 1;
  while (len < k) {
    if (len === k - 1) pre1 = right;
    right = right.next;
    len++;
  }
  node1 = right;
  next1 = node1.next;
  while (right.next) {
    if (!right.next.next) pre2 = node2;
    node2 = node2.next;
    right = right.next;
  }
  next2 = node2.next;

  if (node1.next === node2) {
    pre1.next = node2;
    node2.next = node1;
    node1.next = next2;
  } else if (node2.next === node1) {
    pre2.next = node1;
    node1.next = node2;
    node2.next = next1;
  } else {
    pre1.next = node2;
    node2.next = next1;
    pre2.next = node1;
    node1.next = next2;
  }

  return n.next;
};