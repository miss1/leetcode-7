/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 * 删除，不需要删除该节点，将当前节点的值设为下一个节点的值，删除下一个节点就行
 * time: O(1)
 * space: O(1)
 */
var deleteNode = function(node) {
  node.val = node.next.val;
  node.next = node.next.next;
};
