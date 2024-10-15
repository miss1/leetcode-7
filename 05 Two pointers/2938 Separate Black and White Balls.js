/**
 * @param {string} s
 * @return {number}
 * 双指针i,j从s[0]开始
 * 如果s[i] === '0', 则不需要交换，移动到下一个
 * 如果s[i] === '1'，需要交换，移动j直到找到下一个'0'用来交换。交换的次数为 j - i
 * 交换完之后，i ~ j之间的数全都是1，所以i++处理下一个1即可
 * time: O(n)
 * space: O(n)
 */
var minimumSteps = function(s) {
  const arr = s.split('');
  let i = 0, j = 1, res = 0;
  while (j < arr.length) {
    if (arr[i] === '0') {
      i += 1;
      j = i + 1;
    } else {
      if (arr[j] === '1') j++;
      else {
        res += j - i;
        arr[i] = '0';
        arr[j] = '1';
        i++;
        j++;
      }
    }
  }
  return res;
};