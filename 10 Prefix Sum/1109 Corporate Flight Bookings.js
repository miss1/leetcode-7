/**
 * @param {number[][]} bookings
 * @param {number} n
 * @return {number[]}
 * 更新范围的时候，不用更新每一个，只需更新范围第一个数即可
 * eg: arr = [0,0,0,0,0], 从1到2每个数增加1。只要从index=1开始往后每个数都增加1，然后从index=2+1开始往后每个数都减去1即可
 * 所以只需要arr[1] = 1记录从1开始每个数都加1，再arr[3] = -1记录从3开始每个数都减去1
 * 最后计算arr中的值时，只需计算每个位置的前缀和即可
 * time: O(n)
 * space: O(1)
 */
var corpFlightBookings = function(bookings, n) {
  let res = new Array(n).fill(0);
  for (let booking of bookings) {
    res[booking[0] - 1] += booking[2];
    if (booking[1] < n) res[booking[1]] -= booking[2];
  }
  for (let i = 1; i < n; i++) {
    res[i] += res[i - 1];
  }
  return res;
};