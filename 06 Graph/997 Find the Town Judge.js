/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 * 图的基本知识，定义两个数组，记录入度和出度。入度=n-1并且出度=0的点是要寻找的点
 * time: O(n)
 * space: (n)
 */
var findJudge = function(n, trust) {
  let inArray = new Array(n).fill(0);
  let outArray = new Array(n).fill(0);
  for (let i = 0; i < trust.length; i++) {
    outArray[trust[i][0] - 1] += 1;
    inArray[trust[i][1] - 1] += 1;
  }
  for (let i = 0; i < n; i++) {
    if (inArray[i] === n - 1 && outArray[i] === 0) return i+1;
  }
  return -1;
};
