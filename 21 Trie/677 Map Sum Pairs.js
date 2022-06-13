
var MapSum = function() {
  this.root = {}
};

/**
 * @param {string} key
 * @param {number} val
 * @return {void}
 * sum字段记录以当前节点结束的前缀的所有值的总和；第一遍遍历key判断出是否需要覆盖之前的key，记录下被覆盖的key的val
 * 计算每个字符的sum时，要先减去被覆盖的val值再加上当前的val
 * time: O(len(key))
 * space: O(26 * m) m为所有key的字符总个数
 */
MapSum.prototype.insert = function(key, val) {
  let node = this.root;
  let preVal = 0, d = true;
  for (let k of key) {
    if (!node[k]) {
      d = false;
      break;
    }
    node = node[k];
  }
  if (d && node.val) preVal = node.val;
  node = this.root;
  for (let k of key) {
    if (!node[k]) node[k] = {sum: 0};
    node[k].sum = node[k].sum - preVal + val;
    node = node[k];
  }
  node.val = val;
};

/**
 * @param {string} prefix
 * @return {number}
 * time: O(len(prefix))
 */
MapSum.prototype.sum = function(prefix) {
  let node = this.root;
  for (let p of prefix) {
    if (!node[p]) return 0;
    node = node[p];
  }
  return node.sum;
};

/**
 * Your MapSum object will be instantiated and called as such:
 * var obj = new MapSum()
 * obj.insert(key,val)
 * var param_2 = obj.sum(prefix)
 */
