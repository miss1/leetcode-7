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