/**
 * @param {string[]} bank
 * @return {number}
 * 计算每一行的1的数量count，跳过数量为0的行
 * 求count[i] * count[i + 1] + count[i + 1] * count[i + 2]... + count[n - 2] * count[n - 1]
 * time: O(m * n)
 * space: O(1)
 */
var numberOfBeams = function(bank) {
  let res = 0, preCount = 0;
  for (let i = 0; i < bank.length; i++) {
    let count = 0;
    for (let j = 0; j < bank[i].length; j++) {
      if (bank[i][j] === '1') count++;
    }
    if (count > 0) {
      res += count * preCount;
      preCount = count;
    }
  }
  return res;
};
