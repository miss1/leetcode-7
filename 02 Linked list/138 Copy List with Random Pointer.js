/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 * 递归，遍历链表，复制链表节点，用map记录已经复制过的节点，原节点为key值，新节点为value
 * time: O(n)
 * space: O(n)
 */
var copyRandomList = function(head) {
  let visited = new Map();
  const deepCopy = function(head) {
    if (head === null) return null;
    if (visited.has(head)) return visited.get(head);
    let node = new Node(head.val, null, null);
    visited.set(head, node);
    node.next = deepCopy(head.next);
    node.random = deepCopy(head.random);
    return node;
  };
  return deepCopy(head);
};
