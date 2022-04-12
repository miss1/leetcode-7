function ListNode(val, key) {
  this.val = val;
  this.key = key;
  this.next = null;
  this.pre = null;
}

/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
  this.head = new ListNode(0);
  this.tail = new ListNode(0);
  this.head.next = this.tail;
  this.tail.pre = this.head;
  this.map = new Map();
  this.size = capacity;
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
  if (this.map.has(key)) {
    let node = this.map.get(key);
    this.moveNodeInHead(node);
    return node.val;
  }
  return -1;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
  if (this.map.has(key)) {
    let node = this.map.get(key);
    node.val = value;
    this.moveNodeInHead(node);
  } else {
    let node = new ListNode(value, key);
    this.map.set(key, node);
    let next = this.head.next;
    this.head.next = node;
    node.pre = this.head;
    node.next = next;
    next.pre = node;
    if (this.map.size > this.size) this.deleteNodeInTail();
  }
};

LRUCache.prototype.moveNodeInHead = function(node) {
  let pre = node.pre;
  let next = node.next;
  pre.next = next;
  next.pre = pre;
  let hnext = this.head.next;
  this.head.next = node;
  node.pre = this.head;
  node.next = hnext;
  hnext.pre = node;
};

LRUCache.prototype.deleteNodeInTail = function() {
  let node = this.tail.pre;
  this.map.delete(node.key);
  let p = node.pre;
  p.next = this.tail;
  this.tail.pre = p;
  node.next = null;
  node.pre = null;
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 * time O(1)
 * space O(n)
 * 哈希表加双向链表
 * 哈希表存储 key, node; node 存储key, value
 * put时更新或者新建node, 并且将node插入到链表头部。如果长度溢出了，则删除链表的尾部节点
 * get时，通过哈希表获取到node，将node移到链表头部（移动node时可以先将node从该位置删除，在插入到头部）
 */