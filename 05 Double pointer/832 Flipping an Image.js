/**
 * @param {number[][]} image
 * @return {number[][]}
 * 双指针分别指向一头一尾，交换两个指针指向的值，并且invert。两个指针向中间移动
 * time: O(n * n)
 * space: (1)
 */
var flipAndInvertImage = function(image) {
  for (let num of image) {
    let i = 0, j = num.length - 1;
    while (i < j) {
      let t = num[i];
      num[i] = num[j] === 0 ? 1 : 0;
      num[j] = t === 0 ? 1 : 0;
      i++;
      j--;
    }
    if (i === j) num[i] = num[i] === 0 ? 1 : 0;
  }
  return image;
};