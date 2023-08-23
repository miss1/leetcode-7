/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 * BFS
 * 从beginWord开始，列举所有替换的可能，将26的字母替换到它的每一个位置，O(26 * 10)
 * 替换后生成的所有新字符，并且存在于wordList中的，就是它的neighbors，存储到nextLevel中
 * 重复直到找到endWord，返回endWord所在的层数
 * time: O(26* n * n * m) n: length of single word; m: length of wordList
 * space: O(m)
 */
var ladderLength = function(beginWord, endWord, wordList) {
  let words = new Set(wordList);
  let currentLevel = [beginWord], level = 1;
  let visited = new Set([beginWord]);
  while (currentLevel.length > 0) {
    let nextLevel = [];
    for (let w of currentLevel) {
      // O(26 * n * n)
      for (let i = 0; i < 26; i++) {
        for (let j = 0; j < beginWord.length; j++) {
          let neighbor = w.slice(0, j) + String.fromCharCode('a'.charCodeAt(0) + i) + w.slice(j + 1); // O(n)
          if (words.has(neighbor) && !visited.has(neighbor)) {
            if (neighbor === endWord) return level + 1;
            visited.add(neighbor);
            nextLevel.push(neighbor);
          }
        }
      }
    }
    currentLevel = nextLevel;
    level += 1;
  }
  return 0;
};
