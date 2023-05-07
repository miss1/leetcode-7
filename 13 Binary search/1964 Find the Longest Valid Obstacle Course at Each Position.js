/**
 * @param {number[]} obstacles
 * @return {number[]}
 * 这题类似于 300LIS。要求以index为i结尾的最长子串
 * 遍历obstacles，对于每一个obs，我们需要查找它之前的所有小于等于它的obs的子串长度，然后取其中的最大值再+1
 * 我们可以用一个数组list来存储我们已经遍历过的obs（升序），每次新加入obs时，查找它应该的位置，并替换掉原来的
 * time: O(nlogn)
 * space: O(n)
 */
var longestObstacleCourseAtEachPosition = function(obstacles) {
  let res = [], list = [];
  for (let obs of obstacles) {
    let left = 0, right = list.length;
    while (left < right) {
      let mid = left + ((right - left) >> 1);
      if (list[mid] > obs) right = mid;
      else left = mid + 1;
    }
    list[left] = obs;
    res.push(left + 1);
  }
  return res;
};