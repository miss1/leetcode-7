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
 * 快慢指针寻找到链表中点，添加一个pre指针记录中点的前一个node
 * 最后删除中点
 * time：O(n)
 * space: O(1)
 */
var deleteMiddle = function(head) {
  let r = new ListNode(0, head);
  let pre = r, p1 = head, p2 = head;
  while (p2 && p2.next) {
    p1 = p1.next;
    pre = pre.next
    p2 = p2.next.next;
  }
  pre.next = p1.next;
  p1.next = null;
  return r.next;
};