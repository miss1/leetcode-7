/**
 * @param {number} n
 * @return {number}
 * 模拟，逐个判断，将满足x % i == 1的数存到set中，最后返回set长度
 * time: O(n²)
 * space: O(n)
 */
var distinctIntegers = function(n) {
  let arr = [n];
  let set = new Set(arr);
  for (let x of arr) {
    for (let i = 1; i <= n; i++) {
      if (x % i === 1) {
        set.add(i);
        arr.push(i);
      }
    }
  }
  return set.size;
};

/**
 * @param {number} n
 * @return {number}
 * 因为 n % (n - 1) = 1
 * 所以 n, n-1, n-1-1 ..... 3, 2（2%1=0所以1不在范围内）；2~n一共n-1个数
 * eg: n=5 -> 5%4==1, 4加入, 4%3==1, 3加入, 3%2==1, 2加入。答案为 5,4,3,2
 */
var distinctIntegers2 = function(n) {
  return n === 1 ? 1 : n - 1;
};