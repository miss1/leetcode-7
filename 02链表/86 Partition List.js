/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 * time: O(n)
 * space: O(1)
 * 定义一个pre指针，一个p指针
 * 第一个循环，查找到链表中第一个大于等于x的节点，该节点为p的起使位置，pre为p的前一个位置
 * 从p开始继续循环遍历，p的值大于等于x时，p继续往前走，直到p.next的值小于x。
 * 然后将p.next的节点放到pre.next的位置，继续循环
 */
var partition = function(head, x) {
  if (head === null || head.next === null) return head;
  let n = new ListNode(-999);
  n.next = head;
  let pre = n;
  while (pre.next && pre.next.val < x) pre = pre.next;
  let p = pre.next;
  while (p && p.next) {
    if (p.next.val < x) {
      let n = p.next;
      p.next = n.next;
      n.next = pre.next;
      pre.next = n;
      pre = n;
    } else {
      p = p.next;
    }
  }
  return n.next;
};