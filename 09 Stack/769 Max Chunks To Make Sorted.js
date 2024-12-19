/**
 * @param {number[]} arr
 * @return {number}
 * 从第一个数开始，将第一个数作为第一个trunk，记录最大值和最小值，放进stack中
 * 之后遍历arr，对于每一个arr[i], 判断它是否可以合并到前一个trunk中
 * time: O(n)
 * space: O(n)
 */
var maxChunksToSorted = function(arr) {
  const stack = [[arr[0], arr[0]]];
  for (let i = 1; i < arr.length; i++) {
    const [mi, ma] = stack.pop();
    if (arr[i] > ma) {
      stack.push([mi, ma]);
      stack.push([arr[i], arr[i]]);
    } else if (arr[i] > mi) {
      stack.push([mi, ma]);
    } else {
      let t = arr[i];
      while (stack.length > 0 && t < stack[stack.length - 1][1]) {
        t = Math.min(t, stack.pop()[0]);
      }
      stack.push([t, ma]);
    }
  }
  return stack.length;
};