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

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 * time: O(n)
 * space: O(1)
 */
var mergeTwoLists2 = function(list1, list2) {
  if (!list1) return list2;
  if (!list2) return list1;
  let p = list1.val <= list2.val ? list1 : list2;
  while (list1 && list2) {
    if (list1.val <= list2.val) {
      let next = list1.next;
      if (next && next.val <= list2.val) {
        list1 = next;
      } else {
        list1.next = list2;
        list1 = next;
      }
    } else {
      let next = list2.next;
      if (next && next.val < list1.val) {
        list2 = next;
      } else {
        list2.next = list1;
        list2 = next;
      }
    }
  }
  return p;
};