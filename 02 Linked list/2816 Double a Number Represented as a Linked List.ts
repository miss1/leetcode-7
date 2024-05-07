/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

/**
 * Recursion
 * 递归，从最后一个node开始计算，如果有进位，则返回进位
 * 只要更新当前node的值即可，最后返回head时，如果有进位，则新建node，如果没有则直接返回head
 * time: O(n)
 * space: O(n)
 * @param head
 */
function doubleIt(head: ListNode | null): ListNode | null {
  let add: number = db(head);
  if (add === 0) return head;
  return new ListNode(add, head);
}

function db(head: ListNode | null): number {
  if (head == null) return 0;
  let add: number = db(head.next);
  let total: number = head.val * 2 + add;
  head.val = total % 10;
  return Math.floor(total / 10);
}
