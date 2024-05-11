/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
  if (!root) return '';
  let res = [], currentLevel = [root];
  while (currentLevel.length > 0) {
    let nextLevel = [];
    for (let i = 0; i < currentLevel.length; i++) {
      if (currentLevel[i]) {
        nextLevel.push(currentLevel[i].left);
        nextLevel.push(currentLevel[i].right);
        res.push(currentLevel[i].val);
      } else {
        res.push('null');
      }
    }
    currentLevel = nextLevel;
  }
  return res.toString();
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
  if (data === '') return null;
  let arr = data.split(',');
  let root = new TreeNode(arr[0]);
  let queue = [root];
  let i = 0;
  while (i + 2 < arr.length) {
    let node = queue.shift();
    if (arr[i + 1] === 'null') node.left = null;
    else {
      let left = new TreeNode(arr[i + 1]);
      node.left = left;
      queue.push(left);
    }
    if (arr[i + 2] === 'null') node.right = null;
    else {
      let right = new TreeNode(arr[i + 2]);
      node.right = right;
      queue.push(right);
    }
    i += 2;
  }
  return root;
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 * serialize，层序遍历，将值存储到数组中，假设二叉树为完全二叉树，缺失的节点用null补上，最后将得到的数组转换成字符串返回
 * deserialize，将字符串参数转换成数组，指针i从0开始移动，i+1为左节点，i+2为右节点，生成的左右节点push到队列queue中
 * i每次增加2，每次循环从队列中出队获取当前节点
 * time: O(n)
 * space: O(n)
 */


/*************************************************************************************************************/


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize2 = function(root) {
  if (root == null) return '';
  let res = [];
  const dfs = function(node) {
    if (node == null) res.push('null');
    else {
      res.push(node.val);
      dfs(node.left);
      dfs(node.right);
    }
  };
  dfs(root);
  return res.join(',');
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize2 = function(data) {
  if (data === '') return null;
  let arr = data.split(',');
  let i = 0;
  const dfs = function() {
    if (arr[i] === 'null') return null;
    let node = new TreeNode(Number(arr[i]));
    i++;
    let left = dfs();
    i++;
    let right = dfs();
    node.left = left;
    node.right = right;
    return node;
  };
  return dfs();
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 * DFS
 * serialize: DFS先序遍历生成字符串
 * deserialize: DFS生成树，记录一个i表示arr的下标，每生成一个node，下标i加1
 * arr中的顺序就是按照dfs的顺序来的，所以每次直接将i加一位就可
 */
