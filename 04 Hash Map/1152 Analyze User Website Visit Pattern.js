/**
 * @param {string[]} username
 * @param {number[]} timestamp
 * @param {string[]} website
 * @return {string[]}
 * 1.先用map统计每个用户看过的节目
 * 2.将每个用户看过的节目按照时间排序
 * 3.对于每个用户看过的节目。三个循环找到所有可能的组合，生成Pattern存储到map中，并记录每个Pattern观看的user数量
 * 4.遍历Pattern，找到最大值
 * time: O(n^4)
 * space: O(n)
 */
var mostVisitedPattern = function(username, timestamp, website) {
  // t: O(n), s: O(n)
  let map = new Map();
  for (let i = 0; i < username.length; i++) {
    if (map.has(username[i])) {
      map.get(username[i]).push({web: website[i], time: timestamp[i]});
    } else {
      map.set(username[i], [{web: website[i], time: timestamp[i]}]);
    }
  }

  // t: O(n^4), s: O(n)
  let pattern = new Map();
  for (let item of map) {
    let list = item[1];
    let set = new Set();
    list.sort((a, b) => a.time - b.time);
    for (let i = 0; i < list.length - 2; i++) {
      for (let j = i + 1; j < list.length - 1; j++) {
        for (let x = j + 1; x < list.length; x++) {
          let t = list[i].web + ',' + list[j].web + ',' + list[x].web;
          if (set.has(t)) continue;
          set.add(t);
          if (pattern.has(t)) {
            pattern.set(t, pattern.get(t) + 1);
          } else {
            pattern.set(t, 1);
          }
        }
      }
    }
  }

  // t: O(n), s: O(n)
  let res = [], count = 0;
  for (let item of pattern) {
    const p = item[0].split(',');
    if (item[1] > count || (item[1] === count && res > p)) {
      res = p;
      count = item[1];
    }
  }
  return res;
};