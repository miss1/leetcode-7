## 树

### 结构
```
// binary tree node
function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}
```

### 基本概念
* 树的高度：根节点到叶子节点的最大值
* 树的深度：高度和深度相反，高度是从下往上数，深度是从上往下。根节点的深度是0，叶子节点的高度是0
* 树的层：根开始定义，根为第一层，根的孩子为第二层...
* 二叉树，三叉树...N叉树：由其子节点最多可以有几个决定，最多有N个就是N叉树

### 二叉树
每个节点最多只有两个节点，习惯称之为左节点和右节点

分类
* 完全二叉树
* 满二叉树
* 二叉搜索树
* 平衡二叉树
* 红黑树
* ...

表示
* 链表存储
* 数组存储（非常适合完全二叉树）

遍历
* 前序遍历
* 中序遍历
* 后序遍历
* 层序遍历（BFS）

![binary tree](./binary-tree.png)

前序遍历
* 访问当前节点
* 遍历左子树
* 遍历右子树
```
const preorder = (root) => {
  if (!root) return;
  console.log(root.val);
  preorder(root.left);
  preorder(root.right);
};

// FBADCEGIH
```

中序遍历
* 遍历左子树
* 访问当前节点
* 遍历右子树
```
const inorder = (root) => {
  if (!root) return;
  inorder(root.left);
  console.log(root.val);
  inorder(root.right);
};

// ABCDEFGHI
```

后续遍历
* 遍历左子树
* 遍历右子树
* 访问当前节点
```
const postorder = (root) => {
  if (!root) return;
  postorder(root.left);
  postorder(root.right);
  console.log(root.val);
};

// ACEDBHIGF
```

层序遍历（BFS）
* 先遍历树的第一层，再遍历树的第二层，以此类推
* 可使用DFS并记录当前访问层级的方式实现
* 更多时候使用队列的先进先出特性实现
```
const bfs = (root) => {
  const q = [root];
  while (q.length > 0) {
    const n = q.shift();
    console.log(n.val);
    if (n.left) q.push(n.left);
    if (n.right) q.push(n.right)
  }
};

// FBGADICEH
```

二叉树构建
* 确定根节点
* 确定左子树
* 确定右子树

 ... 待续
 
 ### 二叉搜索树
 二叉树的一种，具有以下性质
 * 左子树的所有节点值小于根的节点值
 * 右子树的所有节点值大于根的节点值
 
 *二叉搜索树的中序遍历结果是一个有序列表*
 
 二叉搜索树题目：1008，94，98，173，250


