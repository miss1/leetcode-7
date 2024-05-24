/**
 * @param {string[]} words
 * @param {character[]} letters
 * @param {number[]} score
 * @return {number}
 * 回溯
 * 先计算每个word的分数，记录到map；记录每个letter的数量
 * 回溯，逐个添加word，累计分数，同时记录消耗的letter，当某个letter出现负值是，说明需要return
 * time: O((2^n) * (A + W)); n = words.length, A = 26, W = word.length
 * space: O(A + n)
 */
var maxScoreWords = function(words, letters, score) {
  // 获取字符的下标; O(1)
  const idx = function(letter) {
    return letter.charCodeAt(0) - 'a'.charCodeAt(0);
  }

  // 记录letter数量; O(L), L = letters.length
  const letterCount = new Array(26).fill(0);
  for (let letter of letters) {
    letterCount[idx(letter)] += 1;
  }

  // 记录每个word的分数; O(n), n = words.length
  const scores = new Map();
  for (let word of words) {
    let s = 0;
    for (let w of word) {
      s += score[idx(w)];
    }
    scores.set(word, s);
  }

  // 每次push或者pop word时，需要更新当前剩余的letter数量；O(W), W = word.length
  const handleLetter = function(word, tag) {
    for (let w of word) {
      if (tag) {
        letterCount[idx(w)] += 1;
      } else {
        letterCount[idx(w)] -= 1;
      }
    }
  };

  // 判断当前的letter数量是否出现负值，是的话则需要return backtrack; O(A), A = 26
  const shouldReturn = function() {
    for (let i = 0; i < 26; i++) {
      if (letterCount[i] < 0) return true;
    }
    return false;
  };

  let res = 0;
  const backTrack = function(start, arr, totalScore) {
    if (shouldReturn()) return;  // letter不够了，需要return
    res = Math.max(res, totalScore);  // 记录当前最大分数
    for (let i = start; i < words.length; i++) {
      arr.push(words[i]);
      handleLetter(words[i], false);
      backTrack(i + 1, arr, totalScore + scores.get(words[i]));
      handleLetter(words[i], true);
      arr.pop();
    }
  }
  backTrack(0, [], 0);

  return res;
};
