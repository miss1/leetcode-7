## 哈希表

在平均时间复杂度O(1)内可实现任何操作的数据结构

Map
```
// 字典，存储唯一值的数据结构，以键值对的形式存储
const m = new Map();

// 增，改
m.set('a', '123');
m.set('b', '456');

// 查
m.get('b');
m.has('a');

// 删
m.delete('a');
m.clear();

// 遍历
for (let item of map) console.log(item) // item => [key, value]
map.forEach((val,key) => {console.log(val, key)})
```

Set
```
// 集合,无序且唯一的数据结构
let mySet = new Set();

// 增
mySet.add(1);

// 查
mySet.has(1);

// 删
mySet.delete(1);

// 遍历
for (let item of mySet) console.log(item);
for (let item of mySet.keys()) console.log(item);
for (let item of mySet.values()) console.log(item);
for (let [key, value] of mySet.entries()) console.log(key, value);  // key === value

// 转数组
const myArr = [...mySet];

const set = new Set([1, 2]);
const set2 = new Set([2, 3]);

// 求交集
const set3 = new Set([...set].filter(item => set2.has(item)));

// 求差集
const set4 = new Set([...set].filter(item => !set2.has(item)));

// 去重
const arr = [1, 1, 2, 2];
const arr2 = [...new Set(arr)]; // [1, 2]
```

常见题目类型
* 统计XX出现次数/频率
* 需要查找/增加/删除操作为O(1)时间复杂度
* 题目类型为图数据结构相关
* 需要存储之前的状态以减少计算开销
* 状态压缩
* 记录第一次出现的位置，以便求最远或最近

题目推荐

128，500，697, 811, 2025
