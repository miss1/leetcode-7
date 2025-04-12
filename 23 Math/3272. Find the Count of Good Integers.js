const generateAllPalindromes = (n) => {
  const p = [];
  const backTrack = (a) => {
    if (a.length === Math.floor(n / 2)) {
      p.push(a);
      return;
    }
    for (let i = 0; i < 10; i++) {
      if (a.length === 0 && i === 0) continue;
      backTrack(a + i);
    }
  };
  backTrack("");
  return p;
};

const getValidPalindromes = (p, n, k) => {
  const palindromes = [];
  for (let a of p) {
    const r = a.split("").reverse().join("");
    if (n % 2 === 0) {
      if (Number(a + r) % k === 0) palindromes.push(a + r);
    } else {
      for (let i = 0; i < 10; i++) {
        if (Number(a + i + r) % k === 0) palindromes.push(a + i + r);
      }
    }
  }
  return palindromes;
};

const factorial = (a) => {
  return a <= 1 ? 1 : a * factorial(a - 1);
};

const calculatePermutations = (palindrome, visited) => {
  const arr = new Array(10).fill(0), n = palindrome.length;
  for (let p of palindrome) {
    arr[Number(p)]++
  }

  // avoid processing the same digit frequency
  if (visited.has(arr.join())) return 0;
  visited.add(arr.join());

  // Total Permutations = n! / (f1! * f2! * ... * f9!)
  let t = 1;
  for (let i = 0; i < 10; i++) {
    t = t * factorial(arr[i]);
  }
  const total = factorial(n) / t;

  if (arr[0] === 0) return total;

  // Permutations with Leading 0
  let t1 = 1;
  for (let i = 0; i < 10; i++) {
    t1 = t1 * factorial(i === 0 ? arr[i] - 1 : arr[i]);
  }
  const lead0 = factorial(n - 1) / t1;

  return total - lead0;
};

/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 * 1.backtrack 生成所有可能的palindromes，用0-9组合生成长度为 n/2 的所有字符串（得到palindromes的前半部分）。
 * 2.便利所得的palindromes，得到所有能被k整除的palindromes
 * 3.对于每一个有效的palindrome，计算他能排列组成多少个字符串
 * 先计算字符串中每个字符的数量，Total Permutations = n! / (f1! * f2! * ... * f9!)
 */
var countGoodIntegers = function(n, k) {
  // Generate all possible n‑digit palindromes, half
  const allPalindromes = generateAllPalindromes(n);

  // Generate palindromes that can be divided by k
  const palindromes = getValidPalindromes(allPalindromes, n, k);

  // count valid permutations
  let res = 0;
  const visited = new Set();
  for (let p of palindromes) {
    res += calculatePermutations(p, visited);
  }

  return res;
};