/**
 * @param {number[]} arr
 * @return {number}
 * BFS, 先用hashmap记录相同的值的下标。值为key，下标为value。表明graph中同一个key中的下标相关联
 * 根据mapping中的值做BFS。node为下标，求从0到arr.length - 1最少走几步
 * 从mapping中根据arr[node]来获取下一层的节点。注意从mapping中获取之后，要删除改值，避免重复计算
 * eg: mapping = {100 => [ 0, 4 ]}, 当取到下一层节点4时，它的值也是100，如果map中不删除key为100的值，又会重新计算一遍100 => [ 0, 4 ]
 * time: O(n)
 * space: O(n)
 */
var minJumps = function (arr) {
  let mapping = new Map();
  for (let i = 0; i < arr.length; i++) {
    if (mapping.has(arr[i])) mapping.get(arr[i]).push(i);
    else mapping.set(arr[i], [i]);
  }

  let queue = [0], target = arr.length - 1;
  let res = 0, visited = new Set([0]);
  while (queue.length > 0) {
    let nextLevel = [];
    for (let node of queue) {
      if (node === target) return res;

      let neibors = mapping.has(arr[node]) ? [...mapping.get(arr[node])] : [];
      if (node + 1 < arr.length && !visited.has(node + 1)) neibors.push(node + 1);
      if (node - 1 >= 0 && !visited.has(node - 1)) neibors.push(node - 1);

      for (let neibor of neibors) {
        if (neibor === node || visited.has(neibor)) continue;
        if (neibor === target) return res + 1;
        nextLevel.push(neibor);
        visited.add(neibor);
      }

      // 重点，避免重复计算导致超时
      mapping.delete(arr[node]);
    }
    queue = nextLevel;
    res += 1;
  }
  return -1;
};
