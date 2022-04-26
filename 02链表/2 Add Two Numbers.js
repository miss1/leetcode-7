/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 * 遍历两个链表，两个数字和进位一起相加
 * time: O(n)
 * space: O(n)
 */
var addTwoNumbers = function(l1, l2) {
  let list = new ListNode(0);
  let over = 0, n = list;
  while (l1 || l2 || over > 0) {
    let s1 = l1 ? l1.val : 0;
    let s2 = l2 ? l2.val : 0;
    let sum = s1 + s2 + over;
    n.next = new ListNode(sum % 10);
    over = Math.floor(sum / 10);
    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
    n = n.next;
  }
  return list.next;
};
