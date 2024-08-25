/**
 * @param {number[][]} points
 * @return {number}
 * 判断多个点是否在一条直线：每两个点之间的d1 = x1-x2, d2 = y1-y2. d1/d2的值相等说明在同一条直线；
 * 即一条线上的每两个点之间的x方向的距离和y方向的距离的比例是一样的
 * 遍历points，计算任意两个点之间的x和y方向的距离比例 scale, 具有相同scale的点在同一条直线，scale为key，point作为value存储到map中
 * 要注意三点：1，多个点是一条垂直的线（x相等）； 2，水平的线（y相等）；3，可能存在多条平行的线
 * time: O(n*n)
 * map: O(n)
 */
var maxPoints = function(points) {
  if (points.length === 1) return 1;
  const map = new Map();

  // 最大公约数，用于计算用分数表示的scale
  const gcd = (a, b) => {
    if (b === 0) return a;
    return gcd(b, a % b);
  };

  // 计算两个点之间的scale
  const getScale = (a, b) => {
    const x = a[0] - b[0], y = a[1] - b[1];
    let scale = '';
    if (x === 0) scale = `x:${a[0]}`;  // 垂直线，记录x坐标
    else if (y === 0) scale = `y:${a[1]}` // 水平线，记录y坐标
    else {
      const g = gcd(Math.abs(x), Math.abs(y));
      const t1 = x / g, t2 = y / g; // scale = t1 / t2
      const p = a[0] - (t1/t2) * a[1]; // 为了记录不同的平行的线(scale相等)，多计算一个点，当y=0时x的值
      const tag = t1 * t2 > 0 ? '' : '-';  // 记录是否是小数
      scale = `${p},0:${tag}${Math.abs(t1)}/${Math.abs(t2)}`;
    }
    return scale;
  };

  // 将具有相同scale的点放到一起
  for (let i = 1; i < points.length; i++) {
    for (j = 0; j < i; j++) {
      const scale = getScale(points[i], points[j]);
      if (map.has(scale)) {
        map.get(scale).add(points[i].join(','));
        map.get(scale).add(points[j].join(','));
      } else {
        map.set(scale, new Set([points[i].join(','), points[j].join(',')]))
      }
    }
  }

  // 找出点最多的set
  let res = 0;
  for (let item of map) {
    res = Math.max(res, item[1].size);
  }

  return res;
};