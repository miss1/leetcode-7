/**
 * @param {number} n
 * @return {number[]}
 * next = current ^ (1 << i);  异或，相同为0，相异为1；1依次往右移，求出的next只有1当前的位置会跟current不同，其它位置为0，相同
 * eg: current = 101, 1 << 1 = 010 -> next = 111只有第二位不同
 * 回溯backtrack。逐个枚举判断
 * time: O(n*(2^n))
 * space: O(2^n)
 */
var grayCode = function(n) {
  let res = [0];
  let set = new Set(res);
  const backTrack = function(arr) {
    if (arr.length === (1 << n)) return true;
    let current = res[res.length - 1];
    for (let i = 0; i < n; i++) {
      let next = current ^ (1 << i);
      if (!set.has(next)) {
        set.add(next);
        res.push(next);
        if (backTrack(res)) return true;
        let d = res.pop();
        set.delete(d);
      }
    }
  };
  backTrack(res);
  return res;
}

/**
 * @param {number} n
 * @return {number[]}
 * recursion递归
 * n = 0 -> [0]
 * n = 1 -> [0, 1]
 * n = 2 -> [00, 01, 11, 10]
 * n = 3 -> [000, 001, 011, 010, 110, 111, 101, 100]
 * 可以看出规律，当 n = 3时，只要在n = 2的基础上，在每一个结果的最前面加上0，再将res2逆序，在每一个结果的最前面加1即可
 * time: O(2^n)
 * space: O(1)
 */
var grayCode2 = function(n) {
  let res = [0];
  for (let i = 1; i <= n; i++) {
    let length = res.length;
    let mask = 1 << (i - 1);
    for (let j = length - 1; j >= 0; j--) {
      res.push(mask + res[j]);
    }
  }
  return res;
}