/**
 * @param {string[]} creators
 * @param {string[]} ids
 * @param {number[]} views
 * @return {string[][]}
 * 用哈希表存储每个creator的所有浏览量之和，以及最受欢迎的视频的id和浏览量
 * map = {creator: {total: 0, id: 'one', view: 0}}
 * 然后遍历map，找出浏览总量total最大的数据，存储到result中
 * time: O(n)
 * space: O(n)
 */
var mostPopularCreator = function(creators, ids, views) {
  let map = new Map();
  for (let i = 0; i < creators.length; i++) {
    if (map.has(creators[i])) {
      let info = map.get(creators[i]);
      info.total += views[i];
      if (views[i] > info.view) {
        info.id = ids[i];
        info.view = views[i];
      }
      if (views[i] === info.view && info.id > ids[i]) {
        info.id = ids[i];
      }
      map.set(creators[i], info);
    } else {
      let info = {total: views[i], id: ids[i], view: views[i]};
      map.set(creators[i], info);
    }
  }
  let res = [], max = 0;
  for (let item of map) {
    let creator = item[0];
    let info = item[1];
    if (info.total < max) continue;
    if (info.total > max) {
      res = [[creator, info.id]];
      max = info.total;
    } else {
      res.push([creator, info.id]);
    }
  }
  return res;
};