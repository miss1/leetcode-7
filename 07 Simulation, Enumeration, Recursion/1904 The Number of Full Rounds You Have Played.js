/**
 * @param {string} loginTime
 * @param {string} logoutTime
 * @return {number}
 * 可以将时间看作是时长，比如 23:15分看作是23小时15分
 * loginTime大于logoutTime时，同时增加时长至loginTime等于0，logout一直增加可以超过24，比如 23:10,23:01 -> 00:10,24:01
 * 最后只要计算login和logout的时长差值即可
 * time: O(1)
 * space: O(1)
 */
var numberOfRounds = function(loginTime, logoutTime) {
  let start = loginTime.split(':').map(val => parseInt(val));
  let end = logoutTime.split(':').map(val => parseInt(val));

  // loginTime 大于 logoutTime时，将login小时数设置为0，计算出增加的小时数添加到logout中
  if (start[0] * 60 + start[1] > end[0] * 60 + end[1]) {
    end[0] += 24 - start[0];
    start[0] = 0;
  }

  // 处理分钟，调整至最近可用时间
  if (start[1] % 15 > 0) start[1] = start[1] - start[1] % 15 + 15;
  if (end[1] % 15 > 0) end[1] = end[1] - end[1] % 15;

  // 计算差值，分钟为单位
  let startCount = start[0] * 60 + start[1];
  let endCount = end[0] * 60 + end[1];
  if (startCount > endCount) return 0;
  return (endCount - startCount) / 15;
};
