/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {number[]} nums
 * @param {ListNode} head
 * @return {ListNode}
 * 将nums存储到Set中，双指针遍历链表，删除在set中的值
 * time: O(n)
 * space: O(1)
 */
var modifiedList = function(nums, head) {
  const set = new Set(nums);
  const h = new ListNode(0, head);

  let p = h, q = h.next;
  while (q) {
    if (set.has(q.val)) {
      p.next = q.next;
      q.next = null;
      q = p.next;
    } else {
      p = q;
      q = p.next;
    }
  }

  return h.next;
};