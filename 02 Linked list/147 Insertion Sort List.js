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
 * 插入排序。
 * time： O(n²)
 * space: O(1)
 */
var insertionSortList = function(head) {
  let p = head, h = head;
  while (p && p.next) {
    let t = p.next, pre = null, s = h;
    while (s !== t) {
      if (t.val <= s.val) {
        p.next = t.next;
        t.next = s;
        if (pre == null) h = t;
        else pre.next = t;
        break;
      } else {
        pre = s;
        s = s.next;
      }
    }
    if (s === t) p = p.next;
  }
  return h;
};