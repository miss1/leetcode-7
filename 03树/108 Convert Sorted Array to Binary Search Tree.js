/**
 * @param {number[]} nums
 * @return {TreeNode}
 * time: O(logn), 二分
 * space: O(logn)
 * 数组的中间位置数据就是根节点，找到数组中间位置，再分别找到左右两半数组的中间位置作为左右子树根节点，以此类推
 */
var sortedArrayToBST = function(nums) {
  const getRoot = function(start, end) {
    if (start > end) return null;
    let center = start + Math.ceil((end - start) / 2);
    return new TreeNode(nums[center], getRoot(start, center - 1), getRoot(center + 1, end));
  };
  return getRoot(0, nums.length - 1);
};