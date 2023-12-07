/**
 * @param {string} path
 * @return {string}
 * 栈stack
 * 遇到 / 时，判断栈顶的 '.' 的个数，如果栈顶只有1个 '.' ，当前目录，删除当前的 /.即可
 * 如果栈顶有两个 '.' ，上层目录，一直出栈，直到删除上层目录为止（到达上一个/）
 * 如果 '.' 的个数等于0或者大于3则不做处理，直接入栈。
 * time: O(n)
 * space: O(n)
 */
var simplifyPath = function(path) {
  let stack = [];
  path = path + '/';
  for (let p of path) {
    if (p === '/' && stack[stack.length - 1] === '/') continue;
    if (p !== '/' || stack.length === 0 || stack[stack.length - 1] !== '.') {
      stack.push(p);
      continue;
    }
    const p1 = stack.pop();
    const p2 = stack.pop();
    if (p2 === '/') {
      stack.push(p);
    } else if (p2 === '.' && stack[stack.length - 1] === '/') {
      stack.pop();
      while (stack.length > 0 && stack[stack.length - 1] !== '/') {
        stack.pop();
      }
      if (stack.length === 0) stack.push('/');
    } else {
      stack.push(p2);
      stack.push(p1);
      stack.push(p);
    }
  }
  if (stack.length > 1 && stack[stack.length - 1] === '/') stack.pop();
  return stack.join('');
};

/**
 * @param {string} path
 * @return {string}
 * Stack
 * 将path按'/'切割，获取到切割后的数组arr
 * 遍历arr，当遇到 '' || '/' || '.'时，跳过
 * 遇到 '..'时需要到上一层目录，出栈一项即可
 * 其余情况，直接入栈
 * 最后在stack中插入'/'分隔符，返回字符串
 * time: O(n)
 * space: O(n)
 */
var simplifyPath2 = function(path) {
  let stack = [];
  let arr = path.split('/');
  for (let p of arr) {
    if (p === '' || p === '/' || p === '.') continue;
    if (p === '..') stack.pop();
    else stack.push(p);
  }
  return '/' + stack.join('/');
};