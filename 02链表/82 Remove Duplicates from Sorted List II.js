/**
 * @param {ListNode} head
 * @return {ListNode}
 * time: O(n)
 * space: O(1)
 * 定义一个pre节点，循环比较两个相邻节点p1,p2，
 * 如果两个相等，p1,p2继续往下走直到不相等，再将pre.next指向p2以删除中间相等的节点。
 */
var deleteDuplicates = function(head) {
  if (head === null || head.next === null) return head;
  let res = new ListNode(0);
  res.next = head;
  let pre = res;
  let p1 = head, p2 = head.next;
  while (p1) {
    if (p2 && p1.val === p2.val) {
      p1 = p1.next;
      p2 = p2.next;
    } else if (pre.next !== p1) {
      pre.next = p2;
      p1.next = null;
      p1 = p2;
      if (p1) p2 = p1.next;
    } else {
      pre = p1;
      p1 = p2;
      if (p1) p2 = p1.next;
    }
  }
  return res.next;
};