/**
 * @param {number} n
 * @return {number}
 * BFS
 * 要判断是否能拆分成连续的字符串，并且和满足条件：eg: 36 * 36 = 1296; 1 + 29 + 6 = 36. 所以36满足条件
 * 对于1296，进行遍历，每新加一个数字。有两种选择，拼接到上一个数字的末尾，或者单独成一个数字， 1 -> 12 or 1, 2
 * 如果根据上面画图，我们可以得到一个二叉树。遍历这个二叉树，就能得到所有的拆分结果。只要有一个满足条件，就可以返回true
 * time: O(n * (2 ^ k - 1)) k: n*n结果的字符串长度；(2 ^ k - 1)：满二叉树的节点个数
 * space: O(2^(k-1)) 满二叉树的叶子节点个数
 */
var punishmentNumber = function(n) {
  let res = 0;

  const isValid = function(arr, target) {
    let current = [{val: Number(arr[0]), last: Number(arr[0])}];
    for (let i = 1; i < arr.length; i++) {
      let next = [];
      for (let j = 0; j < current.length; j++) {
        let last1 = current[j].last * 10 + Number(arr[i]);
        let val1 = current[j].val + last1 - current[j].last;

        let last2 = Number(arr[i]);
        let val2 = current[j].val + last2;

        if (val1 <= target) next.push({val: val1, last: last1});
        if (val2 <= target) next.push({val: val2, last: last2});
      }
      current = next;
    }

    for (let item of current) {
      if (item.val === target) return true;
    }
    return false;
  };

  for (let i = 1; i <= n; i++) {
    const square = i * i;
    const arr = (square + '').split('');
    if (isValid(arr, i)) res += square;
  }
  return res;
};