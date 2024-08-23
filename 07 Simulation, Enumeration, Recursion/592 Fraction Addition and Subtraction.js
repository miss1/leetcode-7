/**
 * @param {string} expression
 * @return {string}
 * simulation, 模拟分数相加的步骤
 * 先遍历获取每一个分数 a/b, 再跟当前分数 x/y相加。两个分数相加的时候，如果分母不相等，则分母相乘
 * 获取到新的x/y之后，计算最大公约数，分子分母同时除以最大公约数
 * time: O(n)
 * space: O(log(min(a, b))) 寻找最大公约数，递归产生的
 */
var fractionAddition = function(expression) {
  if (expression[0] !== '-') expression = '+' + expression;
  const arr = expression.split('');

  // 寻找最大公约数， O(1)
  const gcd = (a, b) => {
    if (isNaN(a) || isNaN(b)) return 1;
    if (b === 0) return a;
    return gcd(b, a % b);
  };

  // 两个分数相加
  let x = 0, y = 1, stack = [];
  const calculate = () => {
    const [a, b] = stack;
    if (b === y) {
      const g = gcd(Math.abs(x + a), y);
      x = (x + a) / g;
      y = y / g;
    } else {
      x = (x * b) + (y * a);
      y = b * y;
      const g = gcd(Math.abs(x), y);
      x = x / g;
      y = y / g;
    }
  };

  // 寻找下一个分数 a/b
  let i = 0;
  while (i < arr.length) {
    const ch = arr[i];
    if (ch === '-' || ch === '+' || ch === '/') {
      const tag = ch === '-' ? -1 : 1;
      i++;
      let t = '';
      while (!isNaN(Number(arr[i]))) {
        t += arr[i];
        i++;
      }
      stack.push(Number(t) * tag);

      if (ch === '/') {
        calculate();
        stack = [];
      }
    }
  }

  return x + '/' + y;
};