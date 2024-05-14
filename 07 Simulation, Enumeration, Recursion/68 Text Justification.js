/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 * simulation，按照规则模拟
 * 依次取word，当总长度超过maxWidth时，将之前的word当作一行，计算gap，平均填充空格
 * time: O(n * maxWidth)
 * space: O(n)
 */
var fullJustify = function(words, maxWidth) {
  let res = [];
  let i = 0, arr = [], total = 0;
  while (i < words.length) {
    if (total + words[i].length + arr.length > maxWidth) {
      let str = arr[0];
      if (arr.length === 1) {  // 一行只有一个单词时，空格填充到末尾
        let add = maxWidth - str.length;
        str += ' '.repeat(add);
      } else {
        // 计算单词间的空格数
        let t = maxWidth - total;
        let add = Math.floor(t / (arr.length - 1));
        let ex = t % (arr.length - 1);
        // 依次插入空格，arr最大长度为maxWidth
        for (let x = 1; x < arr.length; x++) {
          str += ' '.repeat(add);
          if (ex > 0) {
            str += ' ';
            ex--;
          }
          str += arr[x];
        }
      }
      res.push(str);
      total = 0;
      arr = [];
    } else {
      arr.push(words[i]);
      total += words[i].length;
      i++;
    }
  }
  // 最后一行，将空格填充到末尾
  if (arr.length > 0) {
    let str = arr.join(' ');
    let add = maxWidth - str.length;
    str += ' '.repeat(add);
    res.push(str);
  }
  return res;
};
