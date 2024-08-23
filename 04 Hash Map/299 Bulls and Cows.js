/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 * 遍历，如果secret[i] === guess[i]，则找到一个A。如果不等于，则分别将两个字符存储到两个hashmap中
 * 再遍历hashmap，寻找B
 * time: O(n)
 * space: O(n)
 */
var getHint = function(secret, guess) {
  const map1 = new Map(), map2 = new Map();
  const n = secret.length;

  let a = 0, b = 0;
  for (let i = 0; i < n; i++) {
    if (secret[i] === guess[i]) a++;
    else {
      map1.set(secret[i], (map1.get(secret[i]) || 0) + 1);
      map2.set(guess[i], (map2.get(guess[i]) || 0) + 1);
    }
  }

  for (let [key, val] of map2) {
    if (map1.has(key)) {
      b += Math.min(map1.get(key), val);
    }
  }

  return `${a}A${b}B`;
};