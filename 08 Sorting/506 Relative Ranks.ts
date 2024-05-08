/**
 * 对于score，记录下每一项的index，再根据值排序，降序
 * 根据排序后的score获取answer
 * time: O(nlogn)
 * space: O(n)
 * @param score
 */
function findRelativeRanks(score: number[]): string[] {
  let record: [number, number][] = [];
  let s: string[] = ['Gold Medal', 'Silver Medal', 'Bronze Medal'];
  for (let i = 0; i < score.length; i++) {
    record.push([score[i], i]);
  }
  record.sort((a, b) => b[0] - a[0]);

  let answer: string[] = new Array(score.length).fill('');
  for (let i = 0; i < record.length; i++) {
    let idx: number = record[i][1];
    if (i < 3) {
      answer[idx] = s[i];
    } else {
      answer[idx] = i + 1 + '';
    }
  }
  return answer;
}
