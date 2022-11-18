/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 * 双指针指向一头一尾。交换两个指针指向的数据。
 * time: O(n)
 * space: O(1)
 */
var reverseString = function(s) {
  let left = 0, right = s.length - 1;
  while (left < right) {
    let t = s[left];
    s[left] = s[right];
    s[right] = t;
    left++;
    right--;
  }
};
