/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 * time: O(n)
 * space: O(n)
 * 新建一个链表，逐个比较两个链表的值，将更小的值写进新链表
 */
var mergeTwoLists = function(list1, list2) {
  if (list1 === null && list2 === null) return list1;
  let node = new ListNode(0);
  let p = node;
  while (list1 && list2) {
    if (list1.val < list2.val) {
      p.next = list1;
      list1 = list1.next;
    } else {
      p.next = list2;
      list2 = list2.next;
    }
    p = p.next;
    p.next = null;
  }
  if (list1) p.next = list1;
  if (list2) p.next = list2;
  return node.next;
};