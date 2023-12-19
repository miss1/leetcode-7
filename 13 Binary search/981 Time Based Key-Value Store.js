// space: O(n)
var TimeMap = function() {
  this.map = new Map();
};

/**
 * @param {string} key
 * @param {string} value
 * @param {number} timestamp
 * @return {void}
 * map = {key: [[value, timestamp], [value, timestamp]]}
 * time: O(1)
 */
TimeMap.prototype.set = function(key, value, timestamp) {
  if (this.map.has(key)) this.map.get(key).push([value, timestamp]);
  else this.map.set(key, [[value, timestamp]]);
};

/**
 * @param {string} key
 * @param {number} timestamp
 * @return {string}
 * 二分查找第一个小于等于timestamp的值
 * time: O(logn)
 */
TimeMap.prototype.get = function(key, timestamp) {
  if (!this.map.has(key)) return '';

  const arr = this.map.get(key);
  if (arr[0][1] > timestamp) return '';

  let low = 0, high = arr.length - 1;
  while (low <= high) {
    let mid = low + ((high - low) >> 1);
    if (arr[mid][1] === timestamp) return arr[mid][0];
    if (arr[mid][1] > timestamp) high = mid - 1;
    else low = mid + 1;
  }
  return arr[high][0];
};

/**
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */