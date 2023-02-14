/**
 * 判断一个数是否是质数，穷举法， 判断从2~n-1中是否有数字能被n整除
 * time: O(n)
 * space: O(1)
 * @param n
 * @returns {boolean}
 */
function isPrimeNumber(n) {
  if (n < 2) return false;
  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}

/**
 * 判断一个数是否是质数，穷举法的改进， 判断从 2 ~ n/2 中是否有数字能被n整除
 * time: O(n)
 * space: O(1)
 * @param n
 * @returns {boolean}
 */
function isPrimeNumber2(n) {
  if (n < 2) return false;
  for (let i = 2; i <= Math.floor(n/2); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

/**
 * 判断一个数是否是质数，判断从 2 ~ 根号n 中是否有数字能被n整除
 * 证明：如果n不是素数，则存在两个数p，q， p小于q且 n = p * q
 * 假设 a = n开根， 则 n = a * a; n = p * q => p <= a
 * @param n
 * @returns {boolean}
 */
function isPrimeNumber3(n) {
  if (n < 2) return false;
  for (let i = 2; i <= Math.floor(Math.sqrt(n)); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

/**
 * 筛选出n以内的所有质数，埃拉托斯特尼筛法
 * 一个数总是可以分解成若干个质数的乘积，那么如果把质数（最初只知道2是质数）的倍数都去掉，那么剩下的就是质数了。
 * 最初知道2是质数，先把n以内2的倍数都排除掉，接下来是3...以此类推，最后剩下的都是n以内的质数
 * @param n
 * @return Array
 */
function getPrimeNumber(n) {
  // 初始化，默认所有数字都是质数
  let isPrime = new Array(n + 1).fill(true);
  for (let i = 2; i <= n / i; i++) {
    if (isPrime[i]) {
      for (let j = 2; j <= n / i; j++) {
        isPrime[i * j] = false;
      }
    }
  }
  return isPrime;
}

console.log(getPrimeNumber(10))
console.log(isPrimeNumber3(4))
