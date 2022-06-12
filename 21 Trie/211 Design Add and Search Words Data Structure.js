
var WordDictionary = function() {
  this.root = {}
};

/**
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
  let node = this.root;
  for (let w of word) {
    if (!node[w]) node[w] = {};
    node = node[w];
  }
  node.isEnd = true;
};

/**
 * @param {string} word
 * @return {boolean}
 * 当前字符为'.'时，所有字符都符合条件，需要遍历判断当前node下的所有路径。递归判断每一条路径
 * time: O(n * 26的m次方), n为添加的word的个数，m为要搜索的word的长度；ps: 每一个node最多都会有26个子节点，26个小写字符，所以每一层最多要遍历26次
 * space: O(m), 搜索的word的长度，递归栈深度
 */
WordDictionary.prototype.search = function(word) {
  let node = this.root;
  const dfs = function(index, n) {
    for (let i = index; i < word.length; i++) {
      let w = word[i];
      if (w !== '.' && !n[w]) return false;
      if (n[w]) n = n[w];
      else {
        for (let key in n) {
          if (key !== 'isEnd' && dfs(i + 1, n[key])) {
            return true;
          }
        }
        return false;
      }
    }
    return n.isEnd === undefined ? false : n.isEnd;
  };
  return dfs(0, node);
};
