
var Trie = function() {
  this.children = {};
  this.count = 0;
  this.preCount = 0;
};

/**
 * @param {string} word
 * @return {void}
 * time: O(len(word))
 */
Trie.prototype.insert = function(word) {
  let node = this.children;
  for (let char of word) {
    if (!node[char]) node[char] = { count: 0, preCount: 0};
    node = node[char];
    node.preCount += 1;
  }
  node.count += 1;
};

/**
 * @param {string} word
 * @return {boolean}
 * time: O(len(word))
 */
Trie.prototype.search = function(word) {
  let node = this.children;
  for (let char of word) {
    if (!node[char]) return false;
    node = node[char];
  }
  return node.count > 0;
};

/**
 * @param {string} prefix
 * @return {boolean}
 * time: O(len(prefix))
 */
Trie.prototype.startsWith = function(prefix) {
  let node = this.children;
  for (let char of prefix) {
    if (!node[char]) return false;
    node = node[char];
  }
  return node.preCount > 0;
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
