/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 * time O(n)
 * space O(1)
 * 先用快慢指针找到中间节点，中简节点即为新链表的尾部。
 * 从中节点开始到结尾，反转链表
 * 最后头指向尾部，尾指向头的下一个，头的下一个指向尾的前一个，以此循环即可
 */
var reorderList = function(head) {
  if (head.next === null || head.next.next === null) return;
  let fast = head, slow = head;
  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
  }
  let center = slow, pre = null;
  while(center) {
    let next = center.next;
    center.next = pre;
    pre = center;
    center = next;
  }
  let end = pre, start = head.next;
  while (end.next !== start && start !== end) {
    let next = start.next;
    let endpre = end.next;
    end.next = start;
    start.next = endpre;
    start = next;
    end = endpre;
  }
  head.next = pre;
};
