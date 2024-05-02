/**
 * @param nums
 * 先将nums中的数字放到正数负数两个集合中
 * 再根据正数集合中的值来寻找对应的负数
 * time: O(n)
 * space: O(n)
 */
function findMaxK(nums: number[]): number {
  let n:Set<number> = new Set();
  let p:Set<number> = new Set();
  for (let num of nums) {
    if (num < 0) n.add(num);
    else p.add(num);
  }

  let res:number = -1;
  for (let t of p) {
    if (n.has(-t) && t > res) res = t;
  }
  return res;
}
