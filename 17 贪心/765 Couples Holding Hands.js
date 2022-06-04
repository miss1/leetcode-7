/**
 * @param {number[]} row
 * @return {number}
 * 先用哈希表存储每个人所在的位置，key是数组值，value是下标
 * 遍历row，遍历的间隔为2，判断当前数的下一个位置是不是它的情侣，是的话不做处理，不是的话，通过map找到它情侣的当前下标，交换位置
 * time: O(n)
 * space: O(n)
 */
var minSwapsCouples = function(row) {
  let map = new Map();
  let res = 0;
  for (let i = 0; i < row.length; i++) map.set(row[i], i);
  for (let i = 0; i < row.length - 1; i += 2) {
    let c = row[i] % 2 === 0 ? row[i] + 1 : row[i] - 1;
    if (row[i + 1] !== c) {
      let index = map.get(c);
      let t = row[index];
      row[index] = row[i + 1];
      row[i + 1] = t;
      map.set(row[i + 1], i + 1);
      map.set(row[index], index);
      res++;
    }
  }
  return res;
};
