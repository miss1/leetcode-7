/**
 * @param {number} n
 * @return {string[]}
 * 模拟，按照题目条件写就行
 * time: O(n)
 * space: O(1)
 */
var fizzBuzz = function(n) {
  let answer = [];
  for (let x = 0; x < n; x++) {
    let i = x + 1;
    if (i % 3 === 0 && i % 5 === 0) answer[x] = "FizzBuzz";
    else if (i % 3 === 0) answer[x] = "Fizz";
    else if (i % 5 === 0) answer[x] = "Buzz";
    else answer[x] = i + '';
  }
  return answer;
};
