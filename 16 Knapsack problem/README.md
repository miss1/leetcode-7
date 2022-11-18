## 背包

描述

给定一组物品，每种物品都有自己的重量和价格，在限定的总重量内，我们如何选择才能使得物品的总价格最高。

### 01背包问题

描述
* 有n个物品，每个物品对应的重量为w，价值为v。问在不超过背包重量m的情况下，能够装入物品的最大价值，每个物品只能使用一次。

分析
* 定义状态dp[i][j]表示仅考虑前i个物品将其装入承重为j的背包可以获得的最大价值

状态转移
* 当第i件物品我要了，dp[i][j]就是当前物品的价值v[i] + 仅考虑前i-1件剩余容量为j-w[i]的最大价值
* dp[i][j] = dp[i - 1][j - w[i]] + v[i]
* 当第i件物品我不要了，dp[i][j] = dp[i - 1][j]
* 目标是最大值，所以取两种情况中的最大值
* dp[i][j]=max(dp[i−1][j],dp[i−1][j−w[i]]+v[i]), j>=w[i]
* time: O(n * w)

```
N, M, W, V
dp[0..M] = 0
let dp = new Array(m + 1).fill(0);
for (let i = 1; i <= n; i++) {
    for (let j = m; j >= w[i]; j--) { // 这里必须逆向枚举，因为当前计算需要dp[i - 1]对应的其他状态来计算
        dp[j] = max(dp[j], dp[j - W[i]] + V[i])
    }
}
return dp[M]
```

### 完全背包问题

描述
* 与01背包一样，区别是每个物品可以使用无限次

状态转移
* 当第i件物品我要了，dp[i][j] = dp[i][j - w[i]] + v[i]
* 因为物品可以无限次使用，因此不应该用 i-1 的状态计算而是继续在 i 状态
* 当第i件物品我不要了，dp[i][j] = dp[i - 1][j]
* dp[i][j] = max(dp[i - 1][j], dp[i][j - w[i]] + v[i]), j>=w[i]

```
N, M, W, V
let dp = new Array(m + 1).fill(0);
for (let i = 1; i <= n; i++) {
    for (let j = w[i]; j <= m; j++) { // 这里必须正向枚举，因为当前计算需要dp[i]对应的其他状态来计算
        dp[j] = max(dp[j], dp[j - W[i]] + V[i])
    }
}
return dp[M]
```

### 多重背包问题

描述
* 和上面问题的区别在于，每个物品的个数有限制

状态转移方程
* dp[i][j]=max((dp[i−1][j−h∗w[i]]+h∗v[i])for every h)
* 其中 h 为装入第 i 件物品的个数，h≤min(H[i], j / W[i]), H 为物品及其个数的对应关 系。

```
N, M, W, V, H
dp[0..M] = 0
let dp = new Array(m + 1).fill(0);
for (let i = 1; i <= n; i++) {
    for (let j = m; j >= w[i]; j--) { // 这里必须逆向枚举，因为当前计算需要dp[i - 1]对应的其他状态来计算
        for (let h = 0; h <= min(H[i], j / W[i]); h++) {
            dp[j] = max(dp[j], dp[j - h * W[i]] + h * V[i])
        }
    }
}
return dp[M]
```

### 恰好装满 VS 可以不装满
* 恰好装满：只需初始化 dp[0] 为0
* 可以不装满：全部初始化成一样的

