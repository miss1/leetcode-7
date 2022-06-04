/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 * 类似于田忌赛马，nums1的最小值跟nums2的最小值比较，比得过则判断下一个值，比不过则拿它跟nums2的最大值比
 * time: O(nlongn)
 * space: O(n)
 */
var advantageCount = function(nums1, nums2) {
  let res = new Array(nums1.length).fill(0);
  // map存储nums2中每个值的位置，由于可能存在重复的值，所以value值以数组形式
  let map = new Map();
  for (let i = 0; i < nums2.length; i++) {
    if (map.has(nums2[i])) {
      let a = map.get(nums2[i]);
      a.push(i);
      map.set(nums2[i], a);
    }
    else map.set(nums2[i], [i]);
  }
  // 排序
  nums1.sort((a,b) => a - b);
  nums2.sort((a,b) => a - b);
  let i = 0, j = 0, end = nums2.length - 1;
  while (i < nums1.length) {
    if (nums1[i] > nums2[j]) {
      // 比得过，则放到nums2中对应的位置
      res[map.get(nums2[j]).pop()] = nums1[i];
      j++;
    } else {
      // 比不过，则放到nums2中最大值的位置，跟最大值比
      res[map.get(nums2[end]).pop()] = nums1[i];
      end--;
    }
    i++;
  }
  return res;
};
