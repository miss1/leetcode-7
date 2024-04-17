/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * 要获取随机一个node的值
 * 需要先获取一共有多少个node，再用Math.random获取长度以内的随机数
 * time: O(n)
 * space: O(1)
 */
var Solution = function(head) {
  this.size = 0;
  this.head = head;
  let p = this.head;
  while (p) {
    this.size++;
    p = p.next;
  }
};

/**
 * @return {number}
 * time: O(n)
 * space: O(1)
 */
Solution.prototype.getRandom = function() {
  let idx = Math.floor(Math.random() * this.size);
  let p = this.head, len = 0;
  while (len < idx) {
    p = p.next;
    len++;
  }
  return p.val;
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(head)
 * var param_1 = obj.getRandom()
 */
