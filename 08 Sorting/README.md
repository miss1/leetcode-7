## 排序

### 冒泡排序
* 两层循环，内层循环比较相邻两个数的大小，不符合顺序则交换位置，每一轮都能将一个值放到正确位置
* time: O(n²)
* space: O(1)

### 插入排序
* 两层循环。外层循环用来就位每一个数，内层循环将nums[i]跟每一个已经就位的数进行比较，将它插入到对应的位置
* time: O(n²)
* space: O(1)

### 归并排序
* 分治，将数组不断分为两半，直到无法分割，再两两合并
* time: O(nlog(n))
* space: O(n)

### 快速排序
* 找一个基准元素，不断寻找左边大于它的数和右边小于它的数，交换两个数的位置，直到左边的数都小于它，右边的数都大于它，一轮结束
* time: O(nlogn), 最坏时是 O(n²)
* space: O(logn)

### 计数排序(桶排序)
* 新建一个数组，大小为nums中的 最大值upper - 最小值lower + 1，用来存储nums中每个数出现的次数，新数组的下标对应nums中的数字
* eg: nums = [1,3,2,7,5,7,8,9]  -> bucket = [0,1,1,1,0,1,0,2,1,1], 7有两个，所以bucket[7]=2
* 最后遍历bucket即可得到一个有序数组
* time: O(upper + lower + n)
* space: O(upper + lower + n)

### js的sort方法
* v8引擎中对sort方法提供两种排序算法
* 长度小于10时，采用插入排序
* 长度大于10时，采用快速排序

### priority-queue
* 2353
```javascript
/**
 * datastructures-js/priority-queue
 * https://github.com/datastructures-js/priority-queue
 */
let queue = new PriorityQueue({compare: (a, b) => b - a});
queue.enqueue(1);  // logn
queue.dequeue();  // logn

const numbers = [3, -2, 5, 0, -1, -5, 4];
const pq = PriorityQueue.fromArray(numbers, (a, b) => a - b);  // O(n)

const numbersQueue = new MinPriorityQueue();
numbersQueue.dequeue().element
const bidsQueue = new MaxPriorityQueue((bid) => bid.value);

```

