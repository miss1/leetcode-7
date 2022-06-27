/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 * 删除链表倒数第n个节点。双指针，两个指针中间间隔n-1个节点，当p2到达终点时，删除p1后面一个节点
 * time: O(n)
 * space: O(1)
 */
var removeNthFromEnd = function(head, n) {
  let p1 = head, p2 = head;
  while (n && p2.next) {
    p2 = p2.next;
    n--;
  }
  if (n > 0) return head.next;
  while (p2.next) {
    p1 = p1.next;
    p2 = p2.next;
  }
  let next = p1.next;
  p1.next = next.next;
  next.next = null;
  return head;
};