/**
 * @param {character[]} chars
 * @return {number}
 * 双指针，i指向首个字符，移动j直到到达另一个不相等的字符，则该字符的重复次数为 j - i
 * 将数量转成字符串填充到i的后面，再将i和j之间剩余的字符置空。i从j的位置（新字符）重新开始
 * 最后遍历chars，填充中间的null（从后往前挪）
 * time: O(n)
 * space: O(1)
 */
var compress = function(chars) {
  let i = 0, j = 0;
  while (j < chars.length) {
    if (j + 1 < chars.length && chars[j + 1] === chars[i]) {
      if (j !== i) chars[j] = null;
      j++;
    } else {
      if (j !== i) chars[j] = null;
      let size = j - i + 1;
      if (size > 1) {
        let t = (size + '').split('');
        for (let x = 0; x < t.length; x++) {
          chars[i + x + 1] = t[x];
        }
      }
      i = j + 1;
      j = j + 1;
    }
  }
  i = 0;
  j = 1;
  while (i < chars.length && j < chars.length) {
    if (chars[i] != null) {
      i++;
      j++;
    } else if (chars[j] == null) {
      j++;
    } else {
      chars[i] = chars[j];
      chars[j] = null;
      i++;
      j++;
    }
  }
  return chars[i] == null ? i : i + 1;
};


/**
 * @param {character[]} chars
 * @return {number}
 * 跟上面一样的思路
 * 添加一个end，记录最新的空位，每次压缩新字符时，将字符和数字直接填充到end空位中
 * time: O(n)
 * space: O(1)
 */
var compress2 = function(chars) {
  let i = 0, j = 0, end = 0;
  while (j < chars.length) {
    if (j + 1 < chars.length && chars[j + 1] === chars[i]) {
      j++;
    } else {
      chars[end++] = chars[i];
      let size = j - i + 1;
      if (size > 1) {
        let tmp = (size + '').split('');
        for (t of tmp) {
          chars[end++] = t;
        }
      }
      i = j + 1;
      j = j + 1;
    }
  }
  return end;
};