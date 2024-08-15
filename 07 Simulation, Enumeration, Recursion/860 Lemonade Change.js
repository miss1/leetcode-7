/**
 * @param {number[]} bills
 * @return {boolean}
 * simulation
 * 数组记录当前拥有的钱数，每次找钱时，先使用最大的面值
 * time: O(n)
 * space: o(1)
 */
var lemonadeChange = function(bills) {
  let arr = [0, 0, 0];
  for (let b of bills) {
    if (b === 5) arr[0] += 1;
    else if (b === 10) {
      arr[1] += 1;
      if (arr[0] <= 0) return false;
      arr[0] -= 1;
    } else if (b === 20) {
      arr[2] += 1;
      if (arr[0] <= 0 || (arr[0] * 5 + arr[1] * 10) < 15) return false;
      if (arr[1] > 0) {
        arr[1] -= 1;
        arr[0] -= 1;
      } else {
        arr[0] -= 3;
      }
    }
  }
  return true;
};