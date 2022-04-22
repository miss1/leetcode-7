/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 * 删除节点
 * time: O(n)
 * space: O(1)
 */
var removeElements = function(head, val) {
  while (head && head.val === val) head = head.next;
  let p = head;
  while (p && p.next) {
    if (p.next.val !== val) p = p.next;
    else {
      let d = p.next;
      p.next = p.next.next;
      d.next = null;
    }
  }
  return head;
};
