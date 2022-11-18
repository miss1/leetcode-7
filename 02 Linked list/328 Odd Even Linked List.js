/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 * time: O(n)
 * space: O(1)
 */
var oddEvenList = function(head) {
  if (head == null) return head;
  let p1 = head, p2 = head.next, even = head.next;
  while (p2 && p2.next) {
    p1.next = p2.next;
    p2.next = p2.next.next;
    p1 = p1.next;
    p2 = p2.next;
  }
  p1.next = even;
  return head;
};
