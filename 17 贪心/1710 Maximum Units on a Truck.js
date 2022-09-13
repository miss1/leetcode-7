/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 * 贪心，先将boxTypes按units倒序排序。再贪心优先取最大值
 */
var maximumUnits = function(boxTypes, truckSize) {
  boxTypes.sort((a,b) => b[1] - a[1]);
  let i = 0, unit = 0;
  while (i < boxTypes.length && truckSize > 0) {
    if (boxTypes[i][0] <= truckSize) {
      unit += boxTypes[i][0] * boxTypes[i][1];
      truckSize -= boxTypes[i][0];
      i++;
    } else {
      unit += truckSize * boxTypes[i][1];
      truckSize = 0;
    }
  }
  return unit;
};