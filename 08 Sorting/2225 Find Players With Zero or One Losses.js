/**
 * @param {number[][]} matches
 * @return {number[][]}
 * brute force
 * 先用hashmap记录每个player输掉的局数，再统计只输掉一局和从没输过的人，再排序
 * time: O(nlog)
 * space: O(n)
 */
var findWinners = function(matches) {
  let win = new Set(), lost = new Map();
  for (let [w, l] of matches) {
    win.add(w);
    lost.set(l, (lost.get(l) || 0) + 1);
  }

  let lostArr = [];
  for ([key, val] of lost) {
    if (val === 1) lostArr.push(key);
    if (win.has(key)) win.delete(key);
  }
  return [[...win].sort((a, b) => a - b), lostArr.sort((a, b) => a - b)];
};

/**
 * @param {number[][]} matches
 * @return {number[][]}
 * 桶排序
 * 设置一个array, lost，长度为player的最大值，存储每个player输掉的局数，初始值设为-1表示还没有参加过比赛
 * 如果player i赢了，并且从未参加过比赛，则设置lost[i] = 0。
 * 如果 i 输了并且从未参加过比赛，则设置lost[i] = 1。否则lost[i]+=1
 * 最后遍历lost，根据lost[i]的值分配结果
 * time: O(n)
 * space: O(n)
 */
var findWinners2 = function(matches) {
  let lost = new Array(Math.pow(10, 5) + 1).fill(-1);
  for (let [w, l] of matches) {
    if (lost[l] === -1) lost[l] = 1;
    else lost[l] += 1;
    if (lost[w] === -1) lost[w] = 0;
  }

  let res = [[], []];
  for (let i = 1; i < lost.length; i++) {
    if (lost[i] === 0) res[0].push(i);
    if (lost[i] === 1) res[1].push(i);
  }
  return res;
};