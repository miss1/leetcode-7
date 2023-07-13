## 图

### 图的建立

邻接矩阵(Adjacency Matrix)
* 使用一个n*n的矩阵来描述图
* 二维数组表示
* 无权图，n[i][j] 表示i到j之间有无边，从i指向j。
* 对于有权图，n[i][j]中可以存储权重

邻接表(Adjacency List)
* 对于每个点，存储一条链表，用来指向所有与该点直接相连的点
* 对于有权图，链表中值对应权重

### 图的遍历

* 深度优先遍历。从图中某顶点出发，不断访问邻居，邻居的邻居，直到访问完毕
* 广度优先遍历
* 可参考 841 题

### 常见算法
* Dijkstra 算法。单源最短路径
* Floyd-Warshall 算法。多源最短路径
* 拓扑排序
* Kahn 算法
...

### connected component
求图有多少个component(单独的模块，不跟其它模块相连)
* DFS or BFS遍历
* 做dfs或bfs遍历时，我们首先要遍历n个node，以当前node为起点往下走，如果该node已经走过则跳过
* 每次重新开始一个起点往下走时，说明就是在遍历一个新的component
* 当component中一共有n个点，且任意两个点之间都有一条线时，线的数量为：line = n(n-1)/2
* 323, 2685

### 判断图是否是有效树
* 判断一个graph是否是一个有效树，同时满足两点
* 1：只有一个connected component； 
* 2：graph中不存在环（line = n - 1,树的概念(无向图)）
* 261

### Topological sorting
* Kahn's Algorithm: keeping track of the number of incoming edges into each node (in-degree)
* 先计算每个node的in-degree和out-degree. in-degree为0，说明当前可以访问该node
* 将in-degree为0的node加入queue，删除该node并且更新与其相关连的node的in-degree。直到没有node的in-degree为0
* 如果没有node的in-degree为0，并且存在没有遍历过的node，说明存在环
* Topological sorting只适用于有向图和无环图（需要有in-degree为0的node作为起点）
* 210,269,1136,310, Topological sorting
* 207, 判断有没有环，做一遍Topological sorting，如果不能遍历完所有node，说明有环

### 判断两个点之间是否存在路径
* 回溯的思路
* 从起点开始，dfs寻找，直到找到目标点
* 如果一条路走完还没有找到，则返回上一节点走其它分支
* 如果需要计算两点之间的距离，对于每一个选择，计算它的距离，返回
* 399