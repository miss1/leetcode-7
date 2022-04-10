/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 * time O(n)
 * space O(1)
 * 先循环遍历找到要翻转的起始节点start和结束节点end，记录好起始节点的前一个结点pre和结束节点的下一个节点tail
 * 然后从start开始做链表反翻转
 * 最后连接pre和tail
 */
var reverseBetween = function(head, left, right) {
  if (head.next === null || left === right) return head;
  let h = new ListNode(0);
  h.next = head;
  let pre = h, start = null, end = head, tail = null;
  let i = 1;
  while (i < right) {
    if (i < left) pre = pre.next;
    else if (i === left) start = end;
    end = end.next;
    i++;
  }
  tail = end.next;

  let p2 = null, startReverse = start;
  while (startReverse !== end) {
    let next = startReverse.next;
    startReverse.next = p2;
    p2 = startReverse;
    startReverse = next;
  }
  startReverse.next = p2;

  start.next = tail;
  pre.next = end;

  return h.next;
};