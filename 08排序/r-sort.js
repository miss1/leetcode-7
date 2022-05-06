//以下都是升序

/**
 * 冒泡排序
 * @param nums
 * 两层循环，内层循环比较相邻两个数的大小，不符合顺序则交换位置，每一轮都能将一个值放到正确位置
 * 设置一个sorted变量来优化程序，当某一轮发现已经是有序时，跳出循环得到结果
 * time: O(n²)
 * space: O(1)
 */
function bubble(nums) {
  let sorted = true;
  for (let i = 0; i < nums.length - 1; i++) {
    sorted = true;
    for (let j = 1; j < nums.length - i; j++) {
      if (nums[j - 1] > nums[j]) {
        let tmp = nums[j];
        nums[j] = nums[j - 1];
        nums[j - 1]  = tmp;
        sorted = false;
      }
    }
    if (sorted) break;
  }
  return nums;
}

/**
 * 插入排序
 * @type {number[]}
 * 两层循环。外层循环用来就位每一个数，内层循环将nums[i]跟每一个已经就位的数进行比较，将它插入到对应的位置
 * time: O(n²)
 * space: O(1)
 */
function insert(nums) {
  for (let i = 1; i < nums.length; i++) {
    let t = nums[i];
    let j = i - 1;
    while (j > -1 && nums[j] > t) {
      nums[j + 1] = nums[j];
      j--;
    }
    nums[j + 1] = t;
  }
  return nums;
}

/**
 * 归并排序
 * @type {number[]}
 * 分治，将数组不断分为两半，直到无法分割，再两两合并
 * time: O(nlog(n))
 * space: O(n)
 * 具体解法看 912题
 */
function merge(nums) {
  if (nums.length === 1) return nums;
}

/**
 * 快速排序,不稳定
 * @type {number[]}
 * 找一个基准元素，不断寻找左边大于它的数和右边小于它的数，交换两个数的位置，直到左边的数都小于它，右边的数都大于它，一轮结束
 * time: O(nlogn), 最坏情况(一边倒的时候)是O(n²)
 * space: O(logn)
 */
function quick(nums) {

}

/**
 * 计数排序
 * @type {number[]}
 * 新建一个数组，大小为nums中的 最大值upper - 最小值lower + 1，用来存储nums中每个数出现的次数，新数组的下标对应nums中的数字
 * eg: nums = [1,3,2,7,5,7,8,9]  -> bucket = [0,1,1,1,0,1,0,2,1,1], 7有两个，所以bucket[7]=2
 * 最后遍历bucket即可得到一个有序数组
 * 就位思想：1放到nums[0], 2放到nums[1]... 让下标跟数字对应起来
 * time: O(upper - lower)
 * space: O(upper - lower) 即bucket的大小
 */
function count(nums) {

}

/**
 * 优先队列，动态求极值
 * compare: function, heap的排序顺序
 */
class PriorityQueue {
  constructor(compare){
    this.heap = [];
    this.compare = compare
  }
  // 二分查找，寻找插入位置 O(logn)
  search(target) {
    let low = 0, high = this.heap.length;
    while (low < high) {
      let mid = low + ((high - low) >> 1);
      if (this.compare(this.heap[mid], target) > 0) high = mid;
      else low = mid + 1
    }
    return low;
  }
  // 入队 O(n)
  enqueue(val) {
    let index = this.search(val);
    this.heap.splice(index, 0, val);
  }
  // 出队 O(1)
  dequeue() {
    return this.heap.pop();
  }
  // 查看队首 O(1)
  peek() {
    return this.heap[this.size() - 1];
  }
  // 队列长度
  size() {
    return this.heap.length;
  }
}

// let p = new PriorityQueue((a, b) => b-a);


