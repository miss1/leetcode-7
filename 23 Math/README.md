# prime number(质数)
A number greater than 1 is called prime if it is divisible by only 1 and itself.

一个合数总是可以分解成若干个质数的乘积
* 判断一个数是否是质数，穷举法， 判断从2~n-1中是否有数字能被n整除
* 判断一个数是否是质数，穷举法的改进， 判断从 2 ~ n/2 中是否有数字能被n整除
* 判断一个数是否是质数，判断从 2 ~ Math.sqrt(n) 中是否有数字能被n整除
* 筛选出n以内的所有质数，埃拉托斯特尼筛法; 最初知道2是质数，先把n以内2的倍数都排除掉，接下来是3...以此类推，最后剩下的都是n以内的质数
* 204

# Subsequences

Assuming the size of the array is n
* non-empty subsequences: 2^n - 1
* non-empty subsequences(start with the first element): 2^(n-1)

# greatest common divisor of x and y（最大公约数）

```
const gcd = function(a, b) {
    if (b === 0) return a;
    return gcd(b, a % b);
}
```

# 累加和
1 + 2 + 3 + ... + n = n(n+1)/2

# 两点[x1, y1]和[x2, y2]之间的距离 
d = (x1-x2)² + (y1-y2)², d开根就是两点的距离。

# 排列
* 从n个不同元素中任取m个数，能有多少种排列
* n * (n-1) * ... * (n-m+1)
* 全排列是直接对n个元素进行排列，n * (n-1) * (n-2) * ... * 1

# 组合
* 从n个不同元素中取出m个数，能有多少种取法（不用考虑排列顺序）
* n(n-1)...(n-m+1) / m(m-1)...1