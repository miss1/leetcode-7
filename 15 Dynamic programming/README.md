## 动态规划

### 记忆化递归
特殊的递归函数
* 递归函数不依赖外部变量
* 递归函数不改变外部变量
* 通过函数来描述问题，并通过函数间的调用关系来描述问题间的关系就是记忆化递归的核心内容
* 这里的递归函数是数学中的函数，参数一定，返回值也不会变

### 动态规划基本概念
最优子结构
* 决定了具体如何解决
* 如果问题的最优解所包含的子问题的解也是最优的，我们就称该问题具有最优子结构性质

无后效性
* 决定了是否可用动态规划来解决
* 子问题的解一旦确定，就不再改变

三要素
* 状态定义，需要记录的变量
* 临界条件，base cases，dp终止的条件
* 状态转移方程
* memorization 记录已经获取的数据

### Two Methods
Bottom-up (Tabulation)
* implemented with iteration and starts at the base cases
* runtime is usually faster, as iteration does not have the overhead that recursion does.

Top-down (Memoization)
* implemented with recursion and made efficient with memoization (O(n))
* if without memoization, O(2^n)
* usually much easier to write.

198, 740, 746, 1137, 1770

### 类型
1D problem
* 只有一种状态
* 70, 746, 322

Multi-dimensional problem
* 有多种状态，互相关联
* 309, 714

Matrix DP
* 二维数组状态
* 63, 931


题型
* a problem is asking for the maximum/minimum/longest/shortest of something
* the number of ways to do something
* if it is possible to reach a certain point
* has constraints that cause decisions to affect other decisions
* LIS, 最长上升子序列, 673
* LCS, 最长公众子序列, 1143
* 子集，子序列问题，可以考虑倒序遍历，从最后一个元素往前推


