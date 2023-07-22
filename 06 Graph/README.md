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

DFS
* Traverse all vertices in a “graph”
* Traverse all paths between any two vertices in a “graph”

BFS
* Traversing all vertices in the “graph”
* Finding the shortest path between two vertices in a graph where all edges have equal and positive weights.

### 常见算法
* Dijkstra 算法。单源最短路径
* Floyd-Warshall 算法。多源最短路径
* 拓扑排序
* Kahn 算法
...

### Union-Find（disjoint set）
* 一种树形的数据结构，用于处理一些不交集（Disjoint Sets）的合并及查询问题。
* 让所有连接的顶点具有相同的父节点或者根节点。要检查两个顶点是否相连，只需检查他们是否具有相同的根节点
* 两个点之间是否至少有一条路径，并查集只能回答两个点之间是否联通，而不能回答具体的联通路径是什么。

核心API
* Find(x): 找到x的代表。也就是确定元素属于哪一个子集（找到x的根节点）
* 两个元素的根相等说明两个元素联通
* Union(x, y): 将x的代表和y的代表进行合并，也就是将两个子集合并成同一个集合，让他们具有相同的根节点
* Connected(x, y): 检查两个顶点是否相连

不带权并查集
```javascript
/**
 * 用root记录每个node的root值，数组，下标为node，value为root
 * 用rank记录每个顶点的高度，每次合并两个顶点时，根据rank来决定哪个点作为root，可以限制整个树的高度
 */
class UnionFind {
  // O(n)
  constructor(size) {
    this.root = new Array(size).fill(0).map((val, i) => i);
    this.rank = new Array(size).fill(1);
  }
  // O(α(N)), regarded as O(1) on average.
  find(a) {
    if (a === this.root[a]) return a;
    return this.root[a] = this.find(this.root[a]); // root[a] = find(root[a]); return root[a];
  }
  // O(α(N))
  union(x, y) {
    let rootX = this.find(x);
    let rootY = this.find(y);
    if (rootX !== rootY) {
      if (this.rank[rootX] > this.rank[rootY]) this.root[rootY] = rootX;
      else if (this.rank[rootX] < this.rank[rootY]) this.root[rootX] = rootY;
      else {
        this.root[rootY] = rootX;
        this.rank[rootX] += 1;
      }
    }
  }
  // O(α(N))
  connected(x, y) {
    return this.find(x) === this.find(y);
  }
}

let uf = new UnionFind(10);
```

场景
* 判断有多少个root(component数量)；每次union合并的时候减少一个node，最后剩下的node数量就是root数量
* 判断环；当两个点具有相同的root时，如果这两个点直接相连，说明存在环
* 判断两个点之间是否存在路径，两个点拥有同一个root
* 261, 323, 547, 1101, 1202, 1319
* 带权Union-Find，399

### Topological sorting & Kahn's Algorithm
* Kahn's Algorithm: keeping track of the number of incoming edges into each node (in-degree)
* 先计算每个node的in-degree和out-degree. in-degree为0，说明当前可以访问该node
* 将in-degree为0的node加入queue，删除该node并且更新与其相关连的node的in-degree。直到没有node的in-degree为0
* 如果没有node的in-degree为0，并且存在没有遍历过的node，说明存在环
* Topological sorting只适用于有向图和无环图（需要有in-degree为0的node作为起点）
* 210,269,1136,310, Topological sorting
* 207, 判断有没有环，做一遍Topological sorting，如果不能遍历完所有node，说明有环

### Minimum Spanning Tree
* Spanning Tree: A spanning tree is a connected subgraph in an undirected graph where all vertices are connected with the minimum number of edges
* 无向图中用最少的edges连接所有的node，形成的subgraph就是Spanning Tree
* Minimum Spanning Tree: 带权图中，total edge weight最少的Spanning Tree

Cut Property
* "cut": 将graph中的顶点划分为两个不相交的子集
* crossing edge: 连接两个子集中node的edge
* 如果子集A中的edge E的weight比A中的其它edge都小，那这个edge属于graph中所有的MST(Minimum Spanning Tree)

Kruskal’s Algorithm (by adding edges)
* construct a “minimum spanning tree” of a “weighted undirected graph”.
* 先将所有的edges按weight排序，升序
* 根据排好序之后的顺序选择edge组成Minimum Spanning Tree，如果edge会让Tree出现环则跳过该edge
* 重复上一步直到选择的edge数量等于n-1（树的概念，edges = n - 1）
* 注意两个点：1.edges = n - 1, 2.判断有没有环
* time:  O(ElogE+Eα(V))=O(ElogE)
* 1584, 1168

Prim’s Algorithm (by adding vertices)
* construct a “minimum spanning tree” of a “weighted undirected graph”.
* 将点分为两个set，visited和unvisited，从任意一个点vertices开始，加入到visited中
* 从所有与visited中的点相连的边中选择weight最小的边，找到下一个点，加入visited中
* 每找到一个点时，遍历找到与该点相连的所有边，存储到heap中，每次取新的点从heap中取
* 重复上一步直到所有点都在visited中
* 优化：可以用一个数组来记录每个点到其它点的最小weight，详情参考1584
* 1584

### connected component
求图有多少个component(单独的模块，不跟其它模块相连)
* DFS or BFS遍历，首先要遍历n个node，以当前node为起点往下走，每次重新开始一个起点往下走时，说明就是在遍历一个新的component
* Union-Find，判断最后root的数量，root的数量等于component的数量
* 当component中一共有n个点，且任意两个点之间都有一条线时，线的数量为：line = n(n-1)/2
* 323, 547, 2685

### 判断图是否是有效树
* 判断一个graph是否是一个有效树，同时满足两点
* 1：只有一个connected component；
* 2：graph中不存在环（line = n - 1,树的概念(无向图)）
* 261

### 判断两个点之间是否存在路径
* BFS, DFS，从起点开始，逐层寻找destination
* Union-Find，两个点拥有同一个root说明存在路径
* 1971

获取两个点之间的所有路径（DFS）
* DFS + Backtrack
* 回溯的思路，从起点开始，dfs寻找，直到找到目标点，如果一条路走完还没有找到，则返回上一节点走其它分支
* 模板可参考797
* 399, 332, 797

获取两个点之间的所有路径（BFS）
* queue记录当前的所有路径，路径中最后一个节点为当前节点。
* 持续寻找当前节点的neighbors, 添加到queue中, 直到找到target
* 797

### single-source shortest path(单源最短路径)

Dijkstra’s algorithm
* can only be used to solve this problem in a graph with non-negative weights.
* 从起点start开始逐渐向外层扩张，同时更新到达其它节点的最短路径
* Each step selects the “minimum weight” from the currently reached vertices to find the “shortest path” to other vertices.
* 用priority queue存储每个点到start的距离，每次取距离最短的点，直到queue为空
* time: O(E + VlogV)
* 743， 1631

Bellman-Ford algorithm
* can solve the “single-source shortest path” in a weighted directed graph with any weights
* only applicable to “graphs” with no “negative weight cycles”.
* Theorem 1: In a “graph with no negative-weight cycles” with N vertices, the shortest path between any two vertices has at most N-1 edges.
* Theorem 2: In a “graph with negative weight cycles”, there is no shortest path.
* 从start开始遍历，更新每个node到start的最短距离，存储到数组中
* 重复遍历n-1次，得到的数组中的值就是到达每个node的最短距离
* 检测graph是否存在negative weight cycle：重复遍历n次，第n次的时候如果出现更短的距离说明存在负环
* time: O(V⋅E)

DP
* Bellman-Ford algorithm
* 由Bellman-Ford algorithm可知，最多可以有N-1 edges，所以要遍历 N-1次
* 先计算最多有1条边的结果，在计算最多有2条边的结果.....最后n-1条边的结果
* 如果题目要求最多经过k个点，或者最多经过k条边，则遍历k次即可
* dp[k][u] = min(dp[k][u], dp[k - 1][v] + weight(u,v))
* k为最多经过的边数，u为当前node，v为当前node的前一个节点
* 787

SPFA algorithm(the Shortest Path Faster Algorithm)
* improved variation of the Bellman-Ford algorithm by using a queue
* 从start开始遍历，更新每个node到start的最短距离，存储到数组中，如果遇到更短的距离，将该node存储到queue中
* 当前遍历完成后，从queue中出队取出node作为下一次遍历的start，重复直到queue为空
* time: O(V⋅E)

### 图中是否存在环
* 无向图：Union-Find，当两个点具有相同的root时，如果这两个点直接相连，说明存在环
* 对于有向图：Topological sorting，做一遍Topological sorting，如果不能遍历完所有node，说明有环
* 207