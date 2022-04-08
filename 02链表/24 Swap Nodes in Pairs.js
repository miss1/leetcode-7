/**
 * @param {ListNode} head
 * @return {ListNode}
 * time: O(n)
 * space: O(1)
 * 定义一个pre节点和next节点，位置分别在要交换的两个节点的前后
 * 遍历交换节点
 */
var swapPairs = function(head) {
  if (head === null || head.next === null) return head;
  let res = new ListNode(0);
  let p1 = head;
  let p2 = head.next;
  let pre = res;
  pre.next = head;
  while (p1 && p2) {
    let next = p2.next;
    p1.next = next;
    p2.next = p1;
    pre.next = p2;
    pre = p1;
    p1 = next;
    p2 = p1 === null ? null : p1.next;
  }
  return res.next;
};