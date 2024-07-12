/**
 * @param {string} s
 * @return {number}
 * 获取连续的0或者1的个数，记录到数组中，例如'110001111000000' => [2,3,4,6]
 * 在相邻的0和1中，假设2个0，3个1。我们最多可以有两种组合，1个0或者2个0 => Math.min(2,3);
 * time: O(n)
 * space: O(n)
 */
var countBinarySubstrings = function(s) {
  let count = 1, arr = [], res = 0;
  for (let i = 1; i < s.length; i++) {
    if (s[i] !== s[i - 1]) {
      arr.push(count);
      count = 1;
    } else {
      count += 1;
    }
  }
  arr.push(count);
  for (let i = 1; i < arr.length; i++) {
    res += Math.min(arr[i], arr[i - 1]);
  }
  return res;
};

/**
 * @param {string} s
 * @return {number}
 * 上面解法的改进。不用数组记录个数，累计个数的同时作比较，得到最后结果
 * time: O(n)
 * space: O(1)
 */
var countBinarySubstrings2 = function(s) {
  let count = 1, preCount = 0, res = 0;
  for (let i = 1; i < s.length; i++) {
    if (s[i] !== s[i - 1]) {
      res += Math.min(preCount, count);
      preCount = count;
      count = 1;
    } else {
      count += 1;
    }
  }
  res += Math.min(preCount, count);
  return res;
};