/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 * time: O(n)
 * space: O(1)
 * 先遍历链表，获取链表的长度length，和尾节点tail。将尾节点指向头，形成环
 * 向右旋转K位，意味着头指针要向前走 length - K 步
 */
var rotateRight = function(head, k) {
  if (head === null || head.next === null) return head;
  let tail = head;
  let length = 1;
  while (tail.next) {
    tail = tail.next;
    length++;
  }
  tail.next = head;
  let num = length - k % length;
  while (num > 0) {
    head = head.next;
    tail = tail.next;
    num--;
  }
  tail.next = null;
  return head;
};