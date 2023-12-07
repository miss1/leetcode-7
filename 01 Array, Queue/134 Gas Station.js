/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 * 当sum(gas) < sum(cost)时，说明不可能，返回-1。反之则说明一定存在一个答案且答案唯一
 * 当gas[i] < cost[i]时，说明这个位置不可能是起点，因为到不了下一个位置
 * 所以，只需要累计total_tank = sum(gas) - sum(cost)， 小于0时返回-1
 * 同时，累积current_tank，小于0时说明当前位置为起点时走不通，尝试下一个位置
 * time: O(n)
 * space: O(1)
 */
var canCompleteCircuit = function(gas, cost) {
  let n = gas.length;
  let total_tank = 0, current_tank = 0;
  let start = 0;
  for (let i = 0; i < n; i++) {
    total_tank += gas[i] - cost[i];
    current_tank += gas[i] - cost[i];
    if (current_tank < 0) {
      start = i + 1;
      current_tank = 0;
    }
  }
  return total_tank < 0 ? -1 : start;
};