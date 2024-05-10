/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 * 暴力解法，双层循环找出所有的值，再排序
 * time: O(n*n)
 * space: O(n)
 */
var kthSmallestPrimeFraction = function(arr, k) {
  let fractions = [];
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      fractions.push([arr[i], arr[j]]);
    }
  }
  fractions.sort((a, b) => (a[0] / a[1]) - (b[0] / b[1]));
  return fractions[k - 1];
};

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 * 二分搜索，从0到1中找一个值，满足条件:arr中的fraction有k个小于等于它
 * 具体的还没整明白==
 * time: O(nlogn)
 * space: O(1)
 */
var kthSmallestPrimeFraction2 = function(arr, k) {
  let l = 0, r = 1;
  while (true) {
    const m = l + ((r - l) / 2);
    let j = 1, count = 0, a = 0, b = 1;
    for (let i = 0; i < arr.length - 1; i++) {
      while (j < arr.length && arr[i] / arr[j] > m) j++;
      count += arr.length - j;
      if (arr[i] / arr[j] > a / b) [a, b] = [arr[i], arr[j]];
    }
    if (count === k) return [a, b];
    if (count < k) l = m;
    else r = m;
  }
};
