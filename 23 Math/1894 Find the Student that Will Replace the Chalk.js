/**
 * @param {number[]} chalk
 * @param {number} k
 * @return {number}
 * 计算chalk中的总和，然后k%total获取最后一轮时k的数量
 * 然后遍历chalk，逐个判断
 * time: O(n)
 * space: O(1)
 */
var chalkReplacer = function(chalk, k) {
  const total = chalk.reduce((acc, item) => acc + item, 0);
  k = k % total;
  for (let i = 0; i < chalk.length; i++) {
    if (k < chalk[i]) return i;
    k -= chalk[i];
  }
  return 0;
};