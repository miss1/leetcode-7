/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 * 回溯，关键在于怎么去重
 * 先对candidates排序
 * 当遍历完一个数的所有情况(result长度为0时)，开始遍历下一个数时，判断这个数是否跟前一个数相等，若相等，则重复了，跳过
 * 得到一个结果时，result pop出来的值n，跳过后面所有等于n的数，再继续循环回溯。
 * time: O(n) n为结果总长度
 * space: O(target)
 */
var combinationSum2 = function(candidates, target) {
  candidates.sort((a, b) => a - b);
  let res = [];
  const backTrack = function(result, sum, start) {
    if (sum > target) return;
    if (sum === target) {
      res.push([...result]);
      return;
    }
    for (let i = start; i < candidates.length; i++) {
      // 跳过重复的数
      if (result.length === 0 && i > 0 && candidates[i] === candidates[i - 1]) continue;
      result.push(candidates[i]);
      sum += candidates[i];
      backTrack(result, sum, i + 1);
      let n = result.pop();
      sum -= n;
      // 跳过重复的数
      while (i < candidates.length - 1 && candidates[i + 1] === candidates[i]) i++;
    }
  };
  backTrack([], 0, 0);
  return res;
};
