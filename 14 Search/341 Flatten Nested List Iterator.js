/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * function NestedInteger() {
 *
 *     Return true if this NestedInteger holds a single integer, rather than a nested list.
 *     @return {boolean}
 *     this.isInteger = function() {
 *         ...
 *     };
 *
 *     Return the single integer that this NestedInteger holds, if it holds a single integer
 *     Return null if this NestedInteger holds a nested list
 *     @return {integer}
 *     this.getInteger = function() {
 *         ...
 *     };
 *
 *     Return the nested list that this NestedInteger holds, if it holds a nested list
 *     Return null if this NestedInteger holds a single integer
 *     @return {NestedInteger[]}
 *     this.getList = function() {
 *         ...
 *     };
 * };
 */
/**
 * @constructor
 * @param {NestedInteger[]} nestedList
 */
var NestedIterator = function(nestedList) {
  this.lists = [];
  this.position = 0;
  this.flattenList(nestedList);
};

NestedIterator.prototype.flattenList = function(nestedList) {
  for (let i = 0; i < nestedList.length; i++) {
    if (nestedList[i].isInteger()) {
      this.lists.push(nestedList[i].getInteger());
    } else {
      this.flattenList(nestedList[i].getList());
    }
  }
};

/**
 * @this NestedIterator
 * @returns {boolean}
 */
NestedIterator.prototype.hasNext = function() {
  return this.position < this.lists.length;
};

/**
 * @this NestedIterator
 * @returns {integer}
 */
NestedIterator.prototype.next = function() {
  let res = this.lists[this.position];
  this.position += 1;
  return res;
};

/**
 * Your NestedIterator will be called like this:
 * var i = new NestedIterator(nestedList), a = [];
 * while (i.hasNext()) a.push(i.next());
 * 递归进行深度遍历，将遍历结果存储到lists中
 * time: O(n) nestedList中所有整数的数量
 * space: O(n + d), d为递归栈深度，即nestedList中的最大深度
 */
