## Trie (前缀树)
可实现基于前缀的模糊搜索（输入key自动联想剩下的词）。

比如词表中有try, tree 两个单词。输入关键词tr, 查找词表中是否有tr这个词（完整查找）；或者查找词表中是否有以tr为前缀的词（前缀查找）。
此时可以将词表构造成Trie前缀树来操作

### 场景
* 算法的复杂度瓶颈在字符串查找，并且字符串有很多公共前缀，就可以用前缀树优化。

### 节点
* 根节点无实际意义
* 每个其它节点数据域存储一个字符
* 每个其它节点的控制域可以自定义

### 模板
```
// 208题
// 结构，输入单词：lu { l: { count: 0, preCount: 1, u: { count: 1, preCount: 1 } } }
var Trie = function () {
  this.children = {};
  // node.count = 0; 表示以当前节点结束的单词个数
  // node.preCount = 0; 表示以当前节点结束的前缀个数
};

// O(len(word))
Trie.prototype.insert = function (word) {
  let node = this.children;
  for (let char of word) {
    if (!node[char]) node[char] = { count: 0, preCount: 0 };
    node = node[char];
    node.preCount += 1;
  }
  node.count += 1;
};

// O(len(word))
Trie.prototype.search = function (word) {
  let node = this.children;
  for (let char of word) {
    if (!node[char]) return false;
    node = node[char];
  }
  return node.count > 0;
};

Trie.prototype.startWith = function (prefix) {
  let node = this.children;
  for (let char of prefix) {
    if (!node[char]) return false;
    node = node[char];
  }
  return node.preCount > 0;
};

// 建树的最坏空间复杂度，是存储的字符串没有任何前缀时，O(m*n); m: 字符集大小, n: 字符串长度
```

### 特点
* 前缀树一般是将一系列的单词记录到树上
* 如果这些单词没有公共前缀，则和直接用数组存没有任何区别
* 如果有公共前缀， 则公共前缀仅会被存储一次
* 本质上是空间换时间

### 题目
208，211，212，472，648，820，1032
