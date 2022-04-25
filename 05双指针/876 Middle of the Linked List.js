/**
 * @param {ListNode} head
 * @return {ListNode}
 * 寻找链表中点，快慢指针
 * time: O(n)
 * space: O(1)
 */
var middleNode = function(head) {
  let fast = head, low = head;
  while (fast && fast.next) {
    fast = fast.next.next;
    low = low.next;
  }
  return low;
};
