/**
 * hashmap存储key value， 同时计算出value的过期时间，一起存储
 * 每次set时，先判断要set的key是否已经过期（通过比较当前时间和过期时间）
 * @constructor
 */
var TimeLimitedCache = function() {
  this.map = new Map();
};

/**
 * @param {number} key
 * @param {number} value
 * @param {number} time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function(key, value, duration) {
  let status = this.map.has(key) && new Date().getTime() <= this.map.get(key)[1];
  this.map.set(key, [value, new Date().getTime() + duration]);
  return status;
};

/**
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function(key) {
  if (this.map.has(key) && new Date().getTime() <= this.map.get(key)[1]) {
    return this.map.get(key)[0];
  }
  return -1;
};

/**
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function() {
  const time = new Date().getTime();
  let res = 0;
  for (let item of this.map) {
    if (time <= item[1][1]) res++;
  }
  return res;
};

/**
 * Your TimeLimitedCache object will be instantiated and called as such:
 * var obj = new TimeLimitedCache()
 * obj.set(1, 42, 1000); // false
 * obj.get(1) // 42
 * obj.count() // 1
 */


/**
 * hashmap存储key value以及一个timeout，timeout function设置当时间过了duration之后，从hashmap中删除该key
 * @constructor
 */
function TimeLimitedCache2() {
  this.cache = new Map();
}

TimeLimitedCache2.prototype.set = function(key, value, duration) {
  const valueInCache = this.cache.get(key);
  if (valueInCache) {
    clearTimeout(valueInCache.timeout);
  }
  const timeout = setTimeout(() => this.cache.delete(key), duration);
  this.cache.set(key, { value, timeout });
  return Boolean(valueInCache);
}

TimeLimitedCache2.prototype.get = function(key) {
  return this.cache.has(key) ? this.cache.get(key).value : -1;
}

TimeLimitedCache2.prototype.count = function() {
  return this.cache.size;
}