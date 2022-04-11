/**
 * @param {ListNode} head
 * @return {ListNode}
 * time O(n)
 * space O(1)
 * 寻找环的入口，定义快慢指针，快指针每次走两步，慢指针每次走一步。
 * 两个指针第一次相遇时，将快指针指向头部，改成每次走一步。两个指针第二次相遇是就是环的入口。
 * 注意如果第一次相遇是在头部，说明头就是入口，直接返回
 */
var detectCycle = function(head) {
  if (head === null || head.next === null) return null;
  let fast = head, slow = head;
  let count = 0;
  while (fast && fast.next) {
    slow = slow.next;
    if (count === 0) fast = fast.next.next;
    else fast = fast.next;
    if (slow === fast) {
      if (head === fast) return head;
      if (count === 0) {
        fast = head;
        count++;
      } else {
        return fast;
      }
    }
  }
  return null;
};