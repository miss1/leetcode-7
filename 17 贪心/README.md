## 贪心算法

### 简介
* 在对问题求解时，总是做出在当前看来是最好的选择
* 不能保证每次都能找到最优解，有时只能找到接近最优解的方案
* 仅考虑局部最优

### 使用场景
* 贪心选择的局部最优解能得到整体的最优解
* 无后效性，可以看成是不需要回溯的动态规划
* 适合求解极值问题

### 证明
* 如何证明贪心算法的正确性
* 反证法：如果交换方案中任意两个元素，答案不会变的更好，那可以推定目前的解是最优解
* 数学归纳法：先算的出边界情况的最优解，比如F(1)，再证明F(n)都可用F(n-1)推导出来

### 解题步骤
* 将问题分解为子问题
* 求出当前子问题的局部最优解
* 通过这个局部最优解推导出全局最优解

### 贪心策略
* 排序
* 堆

题目：881，765，870，621



