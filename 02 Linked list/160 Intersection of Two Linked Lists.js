/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 * time: O(n)
 * space: O(1)
 * 相交链表求交点
 */
var getIntersectionNode = function(headA, headB) {
  let pA = headA, pB = headB;
  while (pA !== pB) {
    pA = pA.next;
    pB = pB.next;
    if (pA === null && pB !== null) pA = headB;
    if (pB === null && pA !== null) pB = headA;
  }
  return pA;
};