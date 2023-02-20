/**
 * Complementary
 * @param data
 * @returns {number}
 * 回文，数量为奇数的字符不能大于1
 * 异或： 任何数和本身异或都为0，可以通过异或过滤掉偶数个数的字符，只剩下奇数个数的字符
 */
function countComplementaryPairs(data) {
  let bitCount = new Map();
  let result = 0;
  for (let word of data) {
    let mask = 0;
    for (let letter of word) {
      // 左移是为了用二进制表示字符，从右到左分别表示a,b,c，例如，0001=a, 0010=b, 0100=c
      // 将字母转换成数字： a->0, b->1 ....
      // 1左移对应的位数，例如 b = 1 -> 1左移1位 -> 0010
      // 以此类推 a -> 0001, b -> 0010, c -> 0100
      // abc 的mask = a ^ b ^ c = 0111 -> 说明a,b,c数量都为奇数
      // abca 的mask = a ^ b ^ c ^ a = b ^ c = 0110, 说明b和c的数量为奇数
      mask ^= (1 << (letter.charCodeAt(0) - 'a'.charCodeAt(0)));
    }
    // 得到mask，即每个字符串中奇数个数的字符，存储到map中。如果map中刚好有相同的mask，两个结合刚好能组成回文
    bitCount.set(mask, bitCount.has(mask) ? bitCount.get(mask) + 1 : 1);
    result += bitCount.get(mask) - 1;

    for (let i = 0; i < 26; i++) {
      // 检查结合之后剩下一个奇数字符的情况，即两个mask字符串结合之后剩下一个字符不能成对，说明两个mask中，其中一个比另一个多一个字符
      // 例如 abc 和 abcd, 两个结合之后，d不能成对
      // 对于每个mask，尝试分别加上26个字符后，是否存在于map中
      let tmpMask = (1 << i) ^ mask;
      if (bitCount.has(tmpMask)) {
        result += bitCount.get(tmpMask);
      }
    }
  }
  return result;
}
console.log('Complementary: ', countComplementaryPairs(['abc', 'abcd', 'bc', 'adc']))

/**
 * Binary Game
 * @param min_length
 * @param max_length
 * @param one_group
 * @param zero_group
 * @returns {number}
 * dp[i] += dp[i - one_group]
 * dp[i] += dp[i - zero_group]
 */
function binaryGame(min_length, max_length, one_group, zero_group) {
  let result = 0
  let dp = new Array(max_length + 1).fill(0);
  dp[0] = 1;
  for (let i = 1; i < max_length + 1; i++) {
    let tmp = 0;
    if (i >= one_group) {
      tmp += dp[i - one_group] % 1000000007;
    }
    if (i >= zero_group) {
      tmp += dp[i - zero_group] % 1000000007;
    }
    dp[i] = tmp % 1000000007;
  }
  for (let i = min_length; i < max_length + 1; i++) {
    result += dp[i];
  }
  return result;
}
console.log('Binary Game: ', binaryGame(1, 3, 2, 1))

/**
 * Array Generator
 * @param arr
 * @param l
 * @param r
 * @returns {any[]|number[]}
 * brr[i] = Math.max(brr[i - 1], arr[i] + diff + 1);
 * diff = brr[i] - arr[i];
 */
function arrayGenerator(arr, l, r) {
  let brr = new Array(arr.length).fill(0);
  brr[0] = l;
  let diff = brr[0] - arr[0];
  for (let i = 1; i < arr.length; i++) {
    brr[i] = Math.max(brr[i - 1], arr[i] + diff + 1);
    if (brr[i] > r) {
      return [-1];
    }
    diff = brr[i] - arr[i];
  }
  return brr;
}
console.log('Array Generator: ', arrayGenerator([1,2,1,2], 1, 10));

/**
 * Maximum Score
 * @param arr
 * @param k
 * @returns {number}
 * 堆，求top k的和
 */
function maximumScore(arr, k) {
  let result = 0;
  let heap = [];
  for (let num of arr) {
    let low = 0, high = heap.length;
    while (low < high) {
      let mid = low + ((high - low) >> 1);
      if (num > heap[mid]) high = mid;
      else low = mid + 1;
    }
    heap.splice(low, 0, num);
    if (heap.length > k) heap.pop();
  }
  for (let n of heap) result += n;
  return result;
}
console.log('Maximum Score: ', maximumScore([4, 6, -10, -1, 10, -20], 4))


/**
 * Bank Transaction
 * @param transactions
 * @returns {number}
 * 要交易最多，就要在可允许范围内把所有负交易都算进去
 * 把每一次交易放进最小堆中，当交易额为负时，弹出最小值，并把弹出的值补回交易额中
 */
function bankTransaction(transactions) {
  let heap = [];
  let balance = 0;
  for (let n of transactions) {
    let low = 0, high = heap.length;
    while (low < high) {
      let mid = low + ((high - low) >> 1);
      if (n > heap[mid]) high = mid;
      else low = mid + 1
    }
    heap.splice(low, 0, n);
    balance += n;
    while (balance < 0) {
      balance -= heap.pop();
    }
  }
  return heap.length;
}
console.log('Bank Transaction: ', bankTransaction([3,2,-5,-6,-1,4]));


/**
 * Minimum Health
 * @param initial_players
 * @param new_players
 * @param rank
 * @returns {number}
 * 最小堆，堆的长度为rank， 堆顶就是每次要打败的人
 */
function getMinimumHealth(initial_players, new_players, rank) {
  let heap = [];
  const insertToHeap = function (value) {
    let low = 0, high = heap.length;
    while (low < high) {
      let mid = low + ((high - low) >> 1);
      if (value > heap[mid]) high = mid;
      else low = mid + 1;
    }
    heap.splice(low, 0, value);
    if (heap.length > rank) heap.pop();
  };
  for (let p of initial_players) {
    insertToHeap(p);
  }
  let result = heap[heap.length - 1];
  for (let p of new_players) {
    insertToHeap(p);
    result += heap[heap.length - 1];
  }
  return result;
}
console.log('Minimum Health: ', getMinimumHealth([1,2], [3,4], 2));

/**
 * Finding integers
 * @param arr
 * @param k
 * @returns {*[]}
 * 最小堆，长度为k; 每次取堆顶的值
 */
function getGreatestElements(arr, k) {
  let res = [];
  let heap = [];
  for (let n of arr) {
    let low = 0, high = heap.length;
    while (low < high) {
      let mid = low + ((high - low) >> 1);
      if (n > heap[mid]) high = mid;
      else low = mid + 1;
    }
    heap.splice(low, 0, n);
    if (heap.length > k) heap.pop();
    if (heap.length === k) res.push(heap[k - 1]);
  }
  return res;
}
console.log('Finding integers: ', getGreatestElements([4,2,1,3], 2));


/**
 * Data Updates
 * @param data
 * @param updates
 * @returns {*}
 * 暴力循环
 */
function getFinalData(data, updates) {
  let count = new Array(data.length).fill(0);
  for (let update of updates) {
    for (let i = update[0] - 1; i < update[1]; i++) {
      count[i] += 1;
    }
  }
  for (let i = 0; i < data.length; i++) {
    data[i] = data[i] * Math.pow(-1, count[i]);
  }
  return data;
}
/**
 * Data Updates
 * @param data
 * @param updates
 * @returns {*}
 * 类似于leetcode 370。更新范围不需要访问每一个元素，只需访问第一个元素和范围后的第一个元素
 */
function getFinalData2(data, updates) {
  let count = new Array(data.length).fill(1);
  for (let update of updates) {
    count[update[0] - 1] *= -1;
    if (update[1] < count.length) count[update[1]] *= -1;
  }
  data[0] *= count[0];
  for (let i = 1; i < data.length; i++) {
    count[i] *= count[i - 1];
    data[i] *= count[i];
  }
  return data;
}
console.log('Data Updates', getFinalData([1,-4,-5,2], [[2,4],[1,2]]));
console.log('Data Updates', getFinalData2([1,-4,-5,2], [[2,4],[1,2]]));


/**
 * Even Tag
 * @param val
 * @returns {number|number}
 * 把所有正数加起来并记录绝对值最小的奇数
 * 如果结果为even，世界返回
 * 结果为odd，减去这个绝对值最小的奇数
 */
function evenTag(val) {
  let sum = 0;
  let odd = null;
  for (let n of val) {
    if (n >= 0) sum += n;
    if (n % 2 === 1) {
      if (odd == null) odd = Math.abs(n);
      else odd = Math.abs(n) > odd ? odd : Math.abs(n);
    }
  }
  return sum % 2 === 0 ? sum : sum - odd;
}
console.log('Even Tag: ', evenTag([2,3,6,-5,10,1,1]))


/**
 * Efficent Teams
 * @param skill
 * @returns {number}
 * 每个组有两个成员，并且每组的skill相等。可以求出每组总的skill：sumOfEachTeam
 * 接下来，类似于two sum的解法。用hashmap寻找两数和等于sumOfEachTeam的值
 */
function efficientTeam(skill) {
  let total = 0;
  for (let s of skill) {
    total += s;
  }
  if (total % (skill.length / 2) !== 0) return -1;
  let sumOfEachTeam = total / (skill.length / 2);
  let sum = 0, map = new Map();
  for (let s of skill) {
    if (s > sumOfEachTeam) return -1;
    let target = sumOfEachTeam - s;
    if (map.has(target)) {
      sum += s * target;
      if (map.get(target) === 1) map.delete(target);
      else map.set(target, map.get(target) - 1);
    } else {
      map.set(s, map.has(s) ? map.get(s) + 1 : 1);
    }
  }
  if (map.size === 0) return sum;
  else return -1;
}
console.log('Efficent Teams: ', efficientTeam([1,2,3,2,3,2]));