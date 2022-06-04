/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 * 贪心，每次尽可能多装一些重量
 * 由于每次只能装两人，所以优先考虑最轻的人a和最重的人b，如果两个重量和大于limit，那么b就只能单独一个人乘船
 * time: O(nlogn), 考虑排序
 * space: O(logn), 考虑排序
 */
var numRescueBoats = function(people, limit) {
  people.sort((a,b) => a - b);
  let left = 0, right = people.length - 1;
  let res = 0;
  while (left <= right) {
    if (people[right] + people[left] <= limit) left++;
    right--;
    res++;
  }
  return res;
};
