/**
 * @param {number[]} commands
 * @param {number[][]} obstacles
 * @return {number}
 * direction数组存储方向，1为y轴方向，0为x轴方向，direction前两个数是正向的，后两个是负方向的。d为当前direction的下标
 * 将obstacles转换成set字符串ob
 * 每次移动时，遍历要移动的的步数，每次走一步，并且判断当前位置是否在ob中
 * time: O(n), n为移动的总步数
 * space: O(b), b为obstacles长度
 */
var robotSim = function(commands, obstacles) {
  let res = 0;
  let p = [0, 0];
  let direction = [1, 0, 1, 0], d = 0;
  let ob = new Set(obstacles.map(val => val[0] + ':' + val[1]));
  for (let i = 0; i < commands.length; i++) {
    let c = commands[i];
    if (c === -1) d = d === direction.length - 1 ? 0 : d + 1;
    else if (c === -2) d = d === 0 ? direction.length - 1 : d - 1;
    else {
      let m = direction[d], tag = d > 1 ? -1 : 1;
      for (let n = 0; n < c; n++) {
        p[m] += tag;
        if (ob.has(p[0] + ':' + p[1])) {
          p[m] -= tag;
          break;
        }
      }
      res = Math.max(res, p[0] * p[0] + p[1] * p[1]);
    }
  }
  return res;
};
