/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 * 先构造trie，然后dfs搜索包含前缀的所有products
 * time: O(M) M: products.length * products[i].length, total number of characters in products
 * space: O(26n), n: the number of nodes in the trie
 */
var suggestedProducts = function(products, searchWord) {
  let root = {};
  // create trie
  for (let p of products) {
    let node = root;
    for (let c of p) {
      if (!node[c]) node[c] = {end: false};
      node = node[c];
    }
    node.end = true;
  }

  // dfs
  const dfs = function(node, word, r) {
    if (!node || r.length >= 3) return;
    if (node.end) r.push(word);
    for (let i = 0; i < 26; i++) {
      let next = String.fromCharCode(i + 'a'.charCodeAt());
      dfs(node[next], word + next, r);
    }
  };

  // do search
  let prefix = '', res = [], n = root;
  for (let key of searchWord) {
    if (!n || !n[key]) {
      res.push([]);
      n = null;
    } else {
      let s = [];
      dfs(n[key], prefix + key, s);
      res.push([...s]);
      n = n[key];
    }
    prefix += key;
  }
  return res;
};