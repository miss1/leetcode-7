/**
 * @param {string} word
 * @return {number}
 * 建立一个数组 base = ['a', 'b', 'c'];
 * 双指针，一个指针i指向base，指针j指向word
 * 比较i和j指向的字符，如果相等，则同时右移一位，
 * 如果不相等，说明需要插入一个字符（插入base[i]）到word中，然后j不动，i右移一位。继续比较
 * 最后当遍历完word时，判断i是不是指'a',如果不是，说明需要继续插入字符直到i指向'a'
 * time: O(n)
 * space: O(1)
 */
var addMinimum = function(word) {
  let res = 0;
  let base = ['a', 'b', 'c'];
  let i = 0, j = 0;
  while (j < word.length) {
    if (word[j] === base[i]) {
      i = i === 2 ? 0 : i+1;
      j++;
    } else {
      res++;
      i = i === 2 ? 0 : i+1;
    }
  }
  while (i !== 0) {
    res++;
    i = i === 2 ? 0 : i+1;
  }
  return res;
};