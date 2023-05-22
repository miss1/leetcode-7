/**
 * @param {string} s
 * @return {string}
 * 先遍历s，记录下所有Vowels的下标，存储到数组v中
 * 再遍历v，两个指针分别从v的头尾向中间移动，交换s中位于两个指针所指下标的字符
 * time: O(n)
 * space: O(n)
 */
var reverseVowels = function(s) {
  const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
  let str = s.split('');
  let v = [];
  for (let i = 0; i < str.length; i++) {
    if (vowels.has(str[i])) v.push(i);
  }
  for (let i = 0; i < v.length / 2; i++) {
    const index1 = v[i], index2 = v[v.length - 1 - i];
    let tmp = str[index1];
    str[index1] = str[index2];
    str[index2] = tmp;
  }
  return str.join('');
};