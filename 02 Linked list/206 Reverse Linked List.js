/**
 * @param {ListNode} head
 * @return {ListNode}
 * 反转链表
 * time: O(n)
 * space: O(1)
 */
var reverseList = function(head) {
  if (head === null || head.next === null) return head;
  let pre = null;
  while (head.next) {
    let next = head.next;
    head.next = pre;
    pre = head;
    head = next;
  }
  head.next = pre;
  return head;
};