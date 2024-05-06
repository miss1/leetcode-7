/**
 * Definition for singly-linked list.
 */
class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
  }
}

/**
 * 先遍历一遍链表，将值存入到单调栈中，保证栈中的值为递减的
 * 再遍历链表，将不在单调栈中的node删掉
 * time: O(n)
 * space: O(n)
 * @param head
 */
function removeNodes(head: ListNode | null): ListNode | null {
  let p: ListNode | null = head;
  let stack: number[] = [];
  while (p) {
    if (stack.length > 0 && p.val > stack[stack.length - 1]) {
      stack.pop();
    } else {
      stack.push(p.val);
      p = p.next;
    }
  }

  let i: number = 0;
  let res: ListNode = new ListNode(0, head);
  let p1: ListNode = res;
  let p2: ListNode | null = head;
  while (p2 && i < stack.length) {
    if (p2.val === stack[i]) {
      if (i === stack.length - 1) p2.next = null;
      else {
        p1 = p2;
        p2 = p2.next;
      }
      i++;
    } else {
      p1.next = p2.next;
      p2.next = null;
      p2 = p1.next;
    }
  }
  return res.next;
}
