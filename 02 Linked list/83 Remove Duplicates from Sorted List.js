/**
 * @param {ListNode} head
 * @return {ListNode}
 * time: O(n)
 * space: O(1)
 * 循环比较当前节点和next节点，删除相同的节点
 */
var deleteDuplicates = function(head) {
  if (head === null || head.next === null) return head;
  let p = head;
  while (p.next) {
    let next = p.next;
    if (p.val === next.val) {
      p.next = next.next;
      next.next = null;
    } else {
      p = p.next;
    }
  }
  return head;
};