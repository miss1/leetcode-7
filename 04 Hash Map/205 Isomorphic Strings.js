/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 * hashmap将每个字符按照位置转换成对应的数字，最后比较两个字符串是否得到相同的pattern
 * time: O(n)
 * space: O(n)
 */
var isIsomorphic = function(s, t) {

  const getpattern = (str) => {
    let map = new Map();
    let res = '', n = 0;
    for (let c of str) {
      if (map.has(c)) res += map.get(c);
      else {
        res += n;
        map.set(c, n + ',');
        n++;
      }
    }
    return res;
  };

  return getpattern(s) === getpattern(t);
};