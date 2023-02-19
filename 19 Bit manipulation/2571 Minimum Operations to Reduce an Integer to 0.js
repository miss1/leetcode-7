/**
 * @param {number} n
 * @return {number}
 * If there is an alone 1, like ..00001,
 * it takes at leat one operation to remove.
 * and we can remove it in one operation.
 *
 * If there are multiple 1s, like ..0000111,
 * we can't remove them in one single operation,
 * so it takes at leat two operation to remove,
 * and we can remove it in one operation.
 */
var minOperations = function(n) {
  let res = 0;
  while (n > 0) {
    // 011 判断最后两位是不是1，是的话，+1把最后两位1变为0
    if ((n & 3) === 3) {
      n++;
      res++;
    } else {
      // 最后两位不是1，判断最后一位是不是1
      res += n & 1;  // 最后一位是1，需要一次操作把末尾1去掉
      n = n >> 1;
    }
  }
  return res;
};