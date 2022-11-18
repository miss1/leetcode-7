/**
 * @param {string[]} strs
 * @return {string[][]}
 * 将每个字符串排序后得到key值，然后将字符串存储到对应key值得哈希表中
 * time: O(n²logn)
 * space: O(n)
 */
var groupAnagrams = function(strs) {
  let map = new Map();
  for (let s of strs) {
    let key = s.split('').sort().join('');
    if (map.has(key)) {
      let arr = map.get(key);
      arr.push(s);
      map.set(key, arr);
    } else {
      map.set(key, [s]);
    }
  }
  let res = [];
  for (let item of map) res.push(item[1]);
  return res;
};
