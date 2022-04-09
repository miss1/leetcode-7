/**
 * @param {ListNode} head
 * @return {TreeNode}
 * time: O(nlogn), 递归二分 logn, 每一层递归的基本操作为n。
 * space: O(logn), 递归，递归栈的开销是递归的深度
 * 用快慢指针查找链表的中间节点，中间节点就是父节点
 * 从中间节点分成左右两个链表，再分别查找左右两个链表的中间节点作为左右子节点，以此类推
 */
var sortedListToBST = function(head) {
  if (head === null) return head;
  if (head.next === null) return new TreeNode(head.val);
  return getRoot(head, null);
};

let getRoot = function(start, end) {
  if (start === end) return null;
  let fast = start, slow = start;
  while (fast !== end && fast.next !== end) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return new TreeNode(slow.val, getRoot(start, slow), getRoot(slow.next, end));
}