/**
 * @param {ListNode} head
 * @return {ListNode}
 * 归并排序
 * time: O(nlog(n))
 * space: O(log(n))
 */
var sortList = function(head) {
  if (head == null || head.next == null) return head;
  return mergeSort(head);
};

// 传入链表头部
const mergeSort = function(h1) {
  if (h1.next == null) return h1;
  // 快慢指针找到链表中点
  let slow = h1, fast = h1.next;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  // 从中点切分，分成h1,h2两个链表
  let h2 = slow.next;
  slow.next = null;
  let left = mergeSort(h1);
  let right = mergeSort(h2);
  return sortOrderlyList(left, right);
};

// 两个有序链表合并
const sortOrderlyList = function(h1, h2) {
  let res, p1, p2;
  // 两个链表中头部更小的链表作为返回结果
  if (h1.val <= h2.val) {
    res = h1;
    p1 = h1;
    p2 = h2;
  } else {
    res = h2;
    p1 = h2;
    p2 = h1;
  }
  // 比较大小，合并
  while (p1.next) {
    if (p1.next.val > p2.val) {
      let n = p1.next;
      p1.next = p2;
      p2 = n;
      p1 = p1.next;
    } else {
      p1 = p1.next;
    }
  }
  p1.next = p2;
  return res;
};
