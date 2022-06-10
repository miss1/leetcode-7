/**
 * @param {number} n
 * @return {boolean}
 * 如果n能通过2的x次方得到，首先排除n <= 0的数
 * 要满足2的x次方等于n，说明n的二进制中只存在1个1
 * 先找到n中低位的第一个1(n & -n)，如果n中低位第一个1开头组成的数跟n相等，说明n只有一个1
 * eg: n = 4 = 010; (n & -n) = 010 = n
 */
var isPowerOfTwo = function(n) {
  if (n <= 0) return false;
  return (n & -n) === n;
};
