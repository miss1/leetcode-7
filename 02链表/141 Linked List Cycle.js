/**
 * @param {ListNode} head
 * @return {boolean}
 * time: O(n)
 * space: O(1)
 * 定义快慢指针，快指针每次走两步，慢指针每次走一步，如果存在环，两个指针一定会相遇
 */
var hasCycle = function(head) {
  let fast = head, slow = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) return true;
  }
  return false;
};