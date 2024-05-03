"use strict";
/**
 * @param nums
 * 先将nums中的数字放到正数负数两个集合中
 * 再根据正数集合中的值来寻找对应的负数
 * time: O(n)
 * space: O(n)
 */
function findMaxK(nums) {
    let n = new Set();
    let p = new Set();
    for (let num of nums) {
        if (num < 0)
            n.add(num);
        else
            p.add(num);
    }
    let res = -1;
    for (let t of p) {
        if (n.has(-t) && t > res)
            res = t;
    }
    return res;
}
