## 单调栈
### 理解
单调栈是要求栈中的元素是单调递增或者单调递减的（取决于出栈顺序，出栈元素单调增则为单调递增栈）

适合的题目是求解： *下一个大于XXX*，*下一个小于XXX*，*在其之后第一个小（大）于其本身的位置*

### 过程
* 如果压栈之后仍然可以保持单调性，那么直接压
* 否则先弹出栈的元素，直到压入之后可以保持单调性

### 原理
* 单调递增栈，被弹出的元素都是小于当前元素
* 因此在其之后小于其本身的最近的就是当前元素
* eg，stack=[5,3,2,1] cur=4

### 代码模板
```javascript
// 739.获取在其之后第一个大于其本身的位置
// T=[1,7,4,5,2,9] -> result=[1,4,1,2,1,0]
var monostoneStack = function (T) {
  let stack = [];
  let result = [];
  for (let i = 0; i < T.length; i++) {
    result[i] = 0;
    while (stack.length > 0 && T[stack[stack.length - 1]] < T[i]) {
      let peek = stack.pop();
      result[peek] = i - peek;
    }
    stack.push(i);
  }
  return result;
};
```

题目：42，84，739，255，768；316，321，402，1081

单调队列：239
