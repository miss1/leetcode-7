/**
 * @param {string} senate
 * @return {string}
 * 贪心，每个senator都禁掉排在它后面的离他最近的对方阵营的人，如果寻找的时候到达的尾部，则从头开始
 * time: O(n²)
 * space: O(n)
 */
var predictPartyVictory = function(senate) {
  let r = 0, d = 0;
  let arr = senate.split(''), size = arr.length;
  for (let s of arr) {
    if (s === 'R') r++;
    else d++;
  }
  const updateSenate = function(tag, start) {
    for (let j = start + 1; j < size + start; j++) {
      let idx = j < size ? j : j - size;
      if (arr[idx] === tag) {
        arr[idx] = '';
        return;
      }
    }
  };
  let i = 0;
  while (r > 0 && d > 0) {
    if (arr[i] === 'R') {
      d--;
      updateSenate('D', i);
    } else if (arr[i] === 'D') {
      r--;
      updateSenate('R', i);
    }
    i = i === size - 1 ? 0 : i + 1;
  }
  return r === 0 ? 'Dire' : 'Radiant';
};

/**
 * @param {string} senate
 * @return {string}
 * stack
 * 也是贪心的思路，跟上面一样，需要清除掉在当前item后面离他最近的对方阵营的人
 * 用一个stack，遍历senate，当senate[i]跟栈顶元素相同时，说明它前一个是己方阵营的人，它安全了不会被清除，入栈
 * 当senate[i]跟栈顶元素不相同，说明它前一个是对方阵营的人，senate[i]会被前一个人(栈顶)清除，
 * 此时栈顶元素可以进入下一轮，将栈顶元素pop，并push进senate以进行下一轮
 * 最后栈里面剩下的那个人就是胜者
 * time: O(n)
 * space: O(n)
 */
var predictPartyVictory2 = function(senate) {
  let arr = senate.split('');
  let stack = [];
  for (let i = 0; i < arr.length; i++) {
    if (stack.length === 0 || stack[stack.length - 1] === arr[i]) {
      stack.push(arr[i]);
    } else {
      arr.push(stack.pop())
    }
  }
  return stack[0] === 'R' ? 'Radiant' : 'Dire';
};