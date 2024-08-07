## 数组

常见操作
* 随机访问 -> O(1)
* 根据索引修改 -> O(1)
* 遍历数组 -> O(n)
* 插入数值到数组 -> O(n)
* 从数组删除数值 -> O(n)
* 从数组最后插入/删除 -> O(1)
* js sort排序 -> O(nlogn)

题目：414，88，380，41，59，859

## 队列
先进先出
 
常见操作
* 插入 - 在队列尾部添加元素
* 删除 - 在队列头部删除元素
* 查看首个元素 - 返回队列头部的元素值

时间复杂度（数组实现）
* 插入 -> O(1) 
* 删除 -> O(n) -> 要实现O(1)可以用两个指针head和tail，需要动态开辟内存
* 查看首个元素 -> O(1)
 
时间复杂度（链表实现）
* 插入 -> O(n) -> 要实现O(1)只要维护一个尾节点引用tail
* 删除 -> O(1)
* 查看首个元素 -> O(1)

应用
* 广度优先遍历（BFS）
* HTTP请求队列

## Z array
对于一个string str = [0...n-1], z的长度跟str相等，z[i]存储以s[i]开头的最长子串的长度，这个子串是str的前缀

eg: str = a   a   b   c   a   a   b   x   a   a   a   z

z value = X   1   0   0   3   1   0   0   2   2   1   0

explain: i = 1时， 以str[1]开头的最长子串是abcaabxaaaz，它与str的共同前缀是 a, 长度为1，z[1] = 1

```
function zarray(str) {
  let n = str.length;
  let z = new Array(n).fill(0);
  z[0] = n;
  let l = 0, r = 0;
  for (let i = 1; i < n; i++) {
    if (i > r) {
      l = i;
      r = i;
      while (r < n && str[r-l] === str[r]) r++;
      z[i] = r - l;
      r--;
    } else {
      let k = i - l;
      if (z[k] < r - i + 1) z[i] = z[k];
      else {
        l = i;
        while (r < n && str[r - l] === str[r]) r++;
        z[i] = r - l;
        r--;
      }
    }
  }
  console.log(z);
}
```


z[0]没有什么意义，z[0]的值为str.length，因为以str[0]开头的最长字串是他自己

## 专题

### 栈匹配
使用场景
* 判断有效括号(())
* 链表的回文判断

题目： 20，678，2116

