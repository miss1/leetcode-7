/**
 * @param {ListNode} head
 * @return {boolean}
 * time O(n)
 * space O(1)
 * 判断回文
 * 先快慢指针找到链表中点，从中点到链表尾部这一段，反转链表。
 * 两个指针分别从头部和尾部往中间移动，判断值是否相等
 */
var isPalindrome = function(head) {
  let fast = head, center = head;
  while (fast && fast.next) {
    fast = fast.next.next;
    center = center.next;
  }
  let pre = null, end = center;
  while (end.next) {
    let next = end.next;
    end.next = pre;
    pre = end;
    end = next;
  }
  end.next = pre;
  let p = head;
  while (p !== center && end !== center) {
    if (p.val !== end.val) return false;
    p = p.next;
    end = end.next;
  }
  return p.val === end.val;
};