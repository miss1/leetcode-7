/**
 * @param {string} s
 * @param {number[][]} queries
 * @return {number[][]}
 * 由0 <= firsti, secondi <= 10的9次方可知，数字的最大值位2的32次方
 * 可以遍历s，计算以s[i]为起点时能组成多少个数字，因为数字最多是32位，所以只要每次将数字左移一位，再加上s[i + 1], 最多一共移动32次就能得到所有结果
 * 将计算到的所有可能的值放到hashmap中
 * a ^ b = c -> a = b ^ c, 由此可知，只要寻找到s中queries[0] ^ queries[1]的值即可
 * 判断queries[0] ^ queries[1]是否在hashmap中，是的话组说明是一个答案
 * time: O(32n)
 * space: O(32n)
 */
var substringXorQueries = function(s, queries) {
  let map = new Map();
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '0') {
      if (!map.has(0)) map.set(0, [i, i]);
      continue;
    }
    let n = 0;
    for (let j = i; j < Math.min(i + 32, s.length); j++) {
      n = (n << 1) + Number(s[j]);
      if (!map.has(n)) map.set(n, [i, j]);
    }
  }
  let res = [];
  for (let q of queries) {
    let key = q[0] ^ q[1];
    if (map.has(key)) res.push(map.get(key));
    else res.push([-1, -1]);
  }
  return res;
};