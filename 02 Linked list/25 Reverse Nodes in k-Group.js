/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 * 从头开始，每k个node为一组进行翻转。跟92题类似。循环找到要翻转的起点、起点前一个结点、终点、终点后一个节点，然后翻转这一段链表
 * time: O(n)
 * space: O(1)
 */
var reverseKGroup = function(head, k) {
  let node = new ListNode();
  let pre = node, start = head, end = head, count = 1;
  while (end) {
    if (count !== k) {
      end = end.next;
      count += 1;
    } else {
      pre = reverseBetween(pre, start, end, end.next);
      start = pre.next;
      end = start;
      count = 1;
    }
  }
  return node.next;
};

var reverseBetween = function(pre, start, end, tail) {
  let p1 = start, p2 = start.next;
  while (p1 !== end) {
    let next = p2.next;
    p2.next = p1;
    p1 = p2;
    p2 = next;
  }
  pre.next = end;
  start.next = tail;
  return start;
};
