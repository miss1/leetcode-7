/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 * 归并排序
 * time: O(knlogk)
 * space: O(logk)
 */
var mergeKLists = function(lists) {
  if (lists.length === 0) return null;
  return sortLists(lists, 0, lists.length - 1);
};

// 归并排序
const sortLists = function(lists, start, end) {
  if (start >= end) return lists[start];
  let center = start + ((end - start) >> 1);
  let leftNodes = sortLists(lists, start, center);
  let rightNodes = sortLists(lists, center + 1, end);
  return mergeTwoLists(leftNodes, rightNodes);
};

// 合并两个有序链表
const mergeTwoLists = function(n1, n2) {
  let res = new ListNode(0);
  let p = res, p1 = n1, p2 = n2;
  while (p1 && p2) {
    if (p1.val < p2.val) {
      p.next = p1;
      p = p.next;
      p1 = p1.next;
    } else {
      p.next = p2;
      p = p.next;
      p2 = p2.next;
    }
  }
  if (p1) p.next = p1;
  if (p2) p.next = p2;
  return res.next;
};
