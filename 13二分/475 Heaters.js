/**
 * @param {number[]} houses
 * @param {number[]} heaters
 * @return {number}
 * 二分查找。先将heaters排序。然后遍历houses，用house在heaters中二分查找找到最小距离。
 * 最后我们会得到每一个房子距离炉子的最小距离。从这些距离中取最大值就是所求
 * time: O(nlogm), n为houses长度，m为heaters长度
 * space: O(logn) sort排序所占的空间
 */
var findRadius = function(houses, heaters) {
  heaters.sort((a,b) => a - b);
  let res = 0;
  for (let i = 0; i < houses.length; i++) {
    res = Math.max(res, binarySearch(houses[i], heaters));
  }
  return res;
};

const binarySearch = function(house, heaters) {
  let left = 0, right = heaters.length - 1;
  let radius = Infinity;
  while (left <= right) {
    let mid = left + ((right - left) >> 1);
    if (heaters[mid] === house) return 0;
    if (heaters[mid] > house) {
      radius = Math.min(radius, heaters[mid] - house);
      right = mid - 1;
    } else {
      radius = Math.min(radius, house - heaters[mid]);
      left = mid + 1;
    }
  }
  return radius;
};