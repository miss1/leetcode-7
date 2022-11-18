/**
 * @param {number[][]} points
 * @return {number}
 * 两点[x1, y1]和[x2, y2]之间的距离 d = (x1-x2)² + (y1-y2)², d开根就是两点的距离
 * 排列：从n个数中取出m个数能组合的排列数 -> n(n-1)(n-2)...(n-m+1)
 * 两个循环遍历，计算出每个点到其它点之间的距离，存到map中，距离distance为key值，value为跟当前点距离相同的点的个数
 * 固定当前点为第一个数，取出具有相同distance的点的个数 n, 从n中取两个数能组合的排列数就是当前的结果数量
 * time: O(n²)
 * space: O(n)
 */
var numberOfBoomerangs = function(points) {
  let map = new Map(), count = 0;
  let getDistance = function(p1, p2) {
    let x = p1[0] - p2[0];
    let y = p1[1] - p2[1];
    return x * x + y * y;
  };
  for (let i = 0; i < points.length; i++) {
    for (let j = 0; j < points.length; j++) {
      let distance = getDistance(points[j], points[i]);
      if (map.has(distance)) map.set(distance, map.get(distance) + 1);
      else map.set(distance, 1);
    }
    map.forEach((val, key) => { if (val > 1) count += val * (val - 1); });
    map.clear();
  }
  return count;
};