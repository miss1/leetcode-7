/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 * 先求最大公约数，再插入到链表
 * time: O(n*log(min(a,b)))
 * space: O(1)
 */
var insertGreatestCommonDivisors = function(head) {
  const gcd = (a, b) => {
    if (b === 0) return a;
    return gcd(b, a % b);
  };

  let p = head, q = head.next;
  while (q) {
    p.next = new ListNode(gcd(p.val, q.val), q);
    p = q;
    q = q.next;
  }

  return head;
};