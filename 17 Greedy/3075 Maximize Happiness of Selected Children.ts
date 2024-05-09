/**
 * 贪心，先倒序排序，再依次取最大值
 * time: O(nlogn)
 * space: O(logn)
 * @param happiness
 * @param k
 */
function maximumHappinessSum(happiness: number[], k: number): number {
  happiness.sort((a, b) => b - a);
  let res: number = 0;
  let d: number = 0;
  for (let i = 0; i < k; i++) {
    let h: number = Math.max(happiness[i] - d, 0);
    res += h;
    d++;
  }
  return res;
}
