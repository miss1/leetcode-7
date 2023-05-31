/**
 * 题目：如果同一ID连续多次check in，中间没有check out，则最后一个check in会覆盖之前的
 * 所以对于同一id，我们只需记录最新的check in数据即可。用一个hashmap记录
 * 对于每一个checkout，都需要查看是否有对应的checkin，
 * 通过id查询对应的check in记录，并且计算时间值，存储到hashmap，key为startStation_endStation;
 * time: O(1)
 * space: O(p + s²) S is the number of stations on the network, and PPP is the number of passengers making a journey concurrently during peak time.
 * @constructor
 */
var UndergroundSystem = function() {
  this.inList = new Map();
  this.time = new Map();
};

/**
 * @param {number} id
 * @param {string} stationName
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkIn = function(id, stationName, t) {
  this.inList.set(id, [stationName, t]);
};

/**
 * @param {number} id
 * @param {string} stationName
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkOut = function(id, stationName, t) {
  if (this.inList.has(id)) {
    let checkInData = this.inList.get(id);
    let key = checkInData[0] + '_' + stationName;
    let arr = this.time.get(key);
    if (this.time.has(key)) {
      arr[0] += (t - checkInData[1]);
      arr[1] += 1;
    } else {
      this.time.set(key, [t - checkInData[1], 1]);
    }
  }
};

/**
 * @param {string} startStation
 * @param {string} endStation
 * @return {number}
 */
UndergroundSystem.prototype.getAverageTime = function(startStation, endStation) {
  let key = startStation + '_' + endStation;
  let arr = this.time.get(key);
  return arr[0] / arr[1];
};

/**
 * Your UndergroundSystem object will be instantiated and called as such:
 * var obj = new UndergroundSystem()
 * obj.checkIn(id,stationName,t)
 * obj.checkOut(id,stationName,t)
 * var param_3 = obj.getAverageTime(startStation,endStation)
 */