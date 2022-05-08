## 二分查找

### 解空间
题目所有可能的解构成的集合。解空间一定是有限的，不然问题不可解

### 序列有序
* 大部分二分题目都有有序这个显著特征
* 有的题目直接限定了有序
* 有的题目需要自己构造有序序列

### 极值
* 静态极值，求第K大（小）的数

### 一个中心
* 要明确根据什么条件舍弃哪一部分

### 常见题型
查找一个数; 寻找最左边的满足条件的值; 寻找最右边的满足条件的值
* 先从数组中间元素开始，mid = left + ((right - left) >> 1)
* 若目标元素大于中间元素，则在数组大于中间元素的那一半继续找
* 若目标元素小于中间元素，则在数组小于中间元素的那一半继续找
* time: O(logn)
```javascript
function binarySearch(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    const mid = left + ((right - left) >> 1);
    if (nums[mid] === target) return mid;
    if (nums[mid] < target)
      // 搜索区间变为 [mid+1, right]
      left = mid + 1;
    if (nums[mid] > target)
      // 搜索区间变为 [left, mid - 1]
      right = mid - 1;
  }
  return -1;
}
```

### 局部有序的情况
33, 81

### 二位数组
74，153

### 二叉树
在一个二叉搜索树中进行搜索的过程就是二分
875，300，354

### 四大应用
* 能力检测二分和计数二分，都是普通二分的泛化
* 前缀和二分和插入排序二分，本质都是在构建有序序列
* 475，778，327，493
