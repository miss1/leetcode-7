/**
 * @param {number} n
 * @param {number} target
 * @return {number}
 * 要让n的所有数字和小于target，如果和已经小于等target，说明不需要再加任何数字，直接返回0
 * 要让添加的数最小，当和大于target时，那就要从个位开始置0，计算出要加上多少数才能置0就行
 * eg: n = 467, target = 6
 * 将个位的7置0，res = 3; n = 470; sum = 4 + 7 + 0
 * 将十位的7置0，res += 30 = 33; n = 500; sum = 5 < 6 -> res = 33
 * time: O(n) n为数字number的长度
 * space: O(n)
 */
var makeIntegerBeautiful = function(n, target) {
  let digit = [], sum = 0;
  while (n > 0) {
    digit.push(n % 10);
    sum += n % 10;
    n = Math.floor(n / 10);
  }
  if (sum <= target) return 0;
  let res = 0;
  for (let i = 0; i < digit.length; i++) {
    res += (10 - digit[i]) * Math.pow(10, i);
    sum = sum - digit[i] + 1;
    if (i + 1 < digit.length) digit[i + 1] += 1;
    else digit.push(1);
    if (sum <= target) return res;
  }
  return res;
};