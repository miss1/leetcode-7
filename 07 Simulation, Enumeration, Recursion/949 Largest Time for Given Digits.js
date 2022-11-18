/**
 * @param {number[]} arr
 * @return {string}
 * 枚举，枚举所有组合
 * time: O(4*4*4)
 * space: O(1)
 */
var largestTimeFromDigits = function(arr) {
  let hh = -1, mm = -1;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      for (let x = 0; x < arr.length; x++) {
        if (x === i || x === j || i === j) continue;
        // 四个数的index分别为 0,1,2,3 总和为6，用6减去其它三个数的index，剩下的就是最后一个数的index
        let z = 6 - i - j - x;
        let h = arr[i] * 10 + arr[j];
        let m = arr[x] * 10 + arr[z];
        if (h < 24 && m < 60) {
          if (hh * 60 + mm < h * 60 + m) {
            hh = h;
            mm = m;
          }
        }
      }
    }
  }
  if (hh === -1 || mm === -1) return '';
  hh = hh < 10 ? '0' + hh : '' + hh;
  mm = mm < 10 ? '0' + mm : '' + mm;
  return hh + ':' + mm;
};