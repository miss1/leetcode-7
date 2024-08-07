/**
 * @param {number} num
 * @return {string}
 * 先用map记录下数字和对应的英文
 * 再将数字从低到高按三个一组分开，eg:  2,147,483,640
 * 从低到高获取每一组三个数字的读法，再拼接起来即可
 * time: O(log10(num))
 * space: O(1)
 */
var numberToWords = function(num) {
  if (num === 0) return 'Zero';
  const map = {
    0: "Zero",
    1: "One",
    2: "Two",
    3: "Three",
    4: "Four",
    5: "Five",
    6: "Six",
    7: "Seven",
    8: "Eight",
    9: "Nine",
    10: "Ten",
    11: "Eleven",
    12: "Twelve",
    13: "Thirteen",
    14: "Fourteen",
    15: "Fifteen",
    16: "Sixteen",
    17: "Seventeen",
    18: "Eighteen",
    19: "Nineteen",
    20: "Twenty",
    30: "Thirty",
    40: "Forty",
    50: "Fifty",
    60: "Sixty",
    70: "Seventy",
    80: "Eighty",
    90: "Ninety",
    100: "Hundred",
    1000: "Thousand",
    1000000: "Million",
    1000000000: "Billion"
  };

  // convert 3 digits to words
  const getText = function(n) {
    if (n <= 20) return map[n];
    if (n < 100) {
      const a = Math.floor(n / 10) * 10, b = n % 10;
      return b === 0 ? map[a] : map[a] + ' ' + getText(b);
    }
    const x = Math.floor(n / 100), y = n % 100;
    return map[x] + ' ' + map[100] + ((y > 0 && ' ' + getText(y)) || '');
  };

  // divide num and get each chunk's word
  let res = '', ex = 1;
  while (num > 0) {
    const t = num % 1000;
    if (t > 0) {
      const txt = getText(t) + ((ex > 1 && ' ' + map[ex]) || '');
      res = txt + ((res !== '' && ' ' + res) || '');
    }
    num = Math.floor(num / 1000);
    ex = ex * 1000;
  }

  return res;
};