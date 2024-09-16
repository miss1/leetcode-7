/**
 * @param {string[]} timePoints
 * @return {number}
 * 先将timePoints按时间大小排序
 * 在逐个计算相邻两个时间的时间差。注意第一个时间和最后一个时间也需要计算差值
 * 计算两个时间的差值时，考虑两种情况，相差小于12小时，则直接计算。大于12小时，则需要将更大的时间累加到0点以后，再继续计算
 * time: O(nlogn)
 * space: O(logn)
 */
var findMinDifference = function(timePoints) {
  timePoints.sort((a, b) => Number(a.split(':').join('')) - Number(b.split(':').join('')));

  const getTime = (t) => {
    const [h, m] = t.split(':');
    return [Number(h), Number(m)]
  };

  const getDiff = (t1, t2) => {
    let [h1, m1] = getTime(t1);
    let [h2, m2] = getTime(t2);
    if (h2 - h1 > 12) {
      return (24 - h2) * 60 - m2 + h1 * 60 + m1;
    }
    return (h2 - h1) * 60 + m2 - m1;
  }

  let res = Infinity;
  for (let i = 0; i < timePoints.length; i++) {
    let diff = 0;
    if (i === 0) {
      diff = getDiff(timePoints[0], timePoints[timePoints.length - 1])
    } else {
      diff = getDiff(timePoints[i - 1], timePoints[i]);
    }
    res = Math.min(res, diff);
  }

  return res;
};