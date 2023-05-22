/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 * 遍历flowerbed，只要flowerbed[i]是0，并且它前后都是0，则说明flowerbed[i]可以种花
 * time: O(n)
 * space: O(1)
 */
var canPlaceFlowers = function(flowerbed, n) {
  for (let i = 0; i < flowerbed.length; i++) {
    let pre = i === 0 ? flowerbed[i] : flowerbed[i - 1];
    let next = i === flowerbed.length - 1 ? flowerbed[i] : flowerbed[i + 1];
    if (flowerbed[i] === 0 && flowerbed[i] === pre && flowerbed[i] === next) {
      flowerbed[i] = 1;
      n--;
    }
  }
  return n <= 0;
};