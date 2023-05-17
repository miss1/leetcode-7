/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 * 先用快慢指针找到链表的middle node
 * 然后从头遍历链表，将前半部分的值存进stack中
 * 后半部分链表，每遍历一个node，从stack中pop出它的twin，将值相加，然后跟当前的result比较，取更大值
 * time: O(n)
 * space: O(n)
 */
var pairSum = function(head) {
  let stack = [];
  let p = head.next, mid = head, res = 0;
  while (p && p.next) {
    stack.push(mid.val);
    p = p.next.next;
    mid = mid.next;
  }
  stack.push(mid.val);
  p = mid.next;
  while (p) {
    res = Math.max(res, stack.pop() + p.val);
    p = p.next;
  }
  return res;
};