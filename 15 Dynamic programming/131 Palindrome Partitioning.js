/**
 * @param {string} s
 * @return {string[][]}
 * DP
 * 遍历s，当只有前i的字符时，dp存储所有可能的结果
 * 每当新增一个字符时，遍历dp，取出每一个数组，将新字符添加进去，查看是否是回文
 * eg s = aab
 * 1. dp = [[a]]
 * 2. i = 1：dp = [[a, a], [aa]]
 * 3. i = 2: 遍历[a, a] -> [a, a, b]是回文，[a, ab]不是，[aab]不是；遍历[aa] -> [aa, b]是回文，[aab]不是
 * 所以结果 dp = [[a, a, b], [aa, b]]。注意避免重复计算，用set
 */
var partition = function(s) {
  // O(n)
  const isPalindrome = function(str) {
    let i = 0, j = str.length - 1;
    while (i < j) {
      if (str[i] !== str[j]) return false;
      i++;
      j--;
    }
    return true;
  };

  // O(n * n * n * n)
  let dp = [[s[0]]];
  for (let i = 1; i < s.length; i++) {
    let n = [], set = new Set();
    for (let arr of dp) {
      let t = s[i];
      if (!set.has([...arr, t].join())) {
        n.push([...arr, t]);
        set.add([...arr, t].join());
      }

      for (let j = arr.length - 1; j >= 0; j--) {
        t = arr[j] + t;
        if (isPalindrome(t)) {
          const v = arr.slice(0, j);
          v.push(t);
          if (!set.has(v.join())) {
            n.push(v);
            set.add(v.join());
          }
        }
      }
    }
    dp = n;
  }

  return dp;
};
