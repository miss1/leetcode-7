/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 * 组合
 * 回溯。先排序是为了去掉重复的答案
 * time: O(n) n: 答案的总长度
 * space: O(target) 递归栈的深度
 */
var combinationSum = function(candidates, target) {
  let res = [];
  candidates.sort((a,b) => a - b);
  const backTrack = function(result, sum) {
    if (sum > target) return;
    if (sum === target) {
      res.push([...result]);
      return;
    }
    for (let i = 0; i < candidates.length; i++) {
      if (result.length > 0 && candidates[i] < result[result.length - 1]) continue;
      result.push(candidates[i]);
      sum += candidates[i];
      backTrack(result, sum);
      let n = result.pop();
      sum -= n;
    }
  };
  backTrack([], 0);
  return res;
};
