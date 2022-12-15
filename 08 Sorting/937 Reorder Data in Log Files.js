/**
 * @param {string[]} logs
 * @return {string[]}
 * 将logs按Letter-logs和Digit-logs分成两个数组。 然后排序Letter-logs，最后合并两个数组。
 * time: O(nlogn)
 * space: (n)
 */
var reorderLogFiles = function(logs) {
  let digits = [], letters = [];
  for (let log of logs) {
    let arr = log.split(' ');
    if (isNaN(Number(arr[1]))) {
      letters.push(log);
    } else {
      digits.push(log);
    }
  }
  letters.sort((a, b) => {
    let identifiesA = a.split(' ')[0];
    let identifiesB = b.split(' ')[0];
    let contentsA = a.slice(identifiesA.length + 1);
    let contentsB = b.slice(identifiesB.length + 1);
    if (contentsA === contentsB) return identifiesA < identifiesB ? -1 : 1;
    else return contentsA < contentsB ? -1 : 1;
  });
  return letters.concat(digits);
};