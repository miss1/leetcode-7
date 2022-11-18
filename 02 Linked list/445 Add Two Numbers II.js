/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 * 两数相加，从尾部开始加，先将l1, l2翻转，再遍历链表，相加，将值添加到新链表中
 * time: O(n)
 * space: O(n)
 */
var addTwoNumbers = function(l1, l2) {
  let p1 = reverseList(l1);
  let p2 = reverseList(l2);
  let n = null, add = 0;
  while (p1 || p2) {
    let v1 = p1 ? p1.val : 0;
    let v2 = p2 ? p2.val : 0;
    let sum = v1 + v2 + add;
    add = Math.floor(sum / 10);
    n = new ListNode(sum % 10, n);
    p1 = p1 && p1.next;
    p2 = p2 && p2.next;
  }
  if (add > 0) n = new ListNode(add, n);
  return n;
};

let reverseList = function(head) {
  let p = head.next, pre = head;
  pre.next = null
  while (p) {
    let t = p.next;
    p.next = pre;
    pre = p;
    p = t;
  }
  return pre;
}