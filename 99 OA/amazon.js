/**
 * hard
 * Max average stock price
 * A group of k consecutive months is said to be observable if no two months in the group have the same stock price.
 * The sum of stock prices of an observable group of months is called the cumulative observable sum.
 * Give the price of Amazon stock  for n months, find the maximum possible cumulative observable sum among all the observable group of months.
 * If there is no observable group, return -1;
 * eg: stockPrice = [1,2,7,7,4,3,6]; k = 3
 * all the observable group of months: [1,2,7], [7,4,3], [4,3,6]; max = 7+4+3 = 14
 * Solve: 双指针，移动窗口，将窗口内的元素存储到set中，每次移动指针时，判断新添加的元素是否已经存在了，是的话，丢弃所有窗口内的元素，
 * 从当前右指针的位置新建窗口
 */
console.log('---------------Max average stock price---------------')
function maxAverageStockPrice(stockPrice, k) {
  let res = -1, sum = 0;
  let set = new Set(), left = 0, right = 0;
  while (right < stockPrice.length) {
    if (set.has(stockPrice[right])) {
      set.clear();
      set.add(stockPrice[right]);
      sum = stockPrice[right];
      left = right;
      right++;
    } else {
      if (right < k + left - 1) {
        set.add(stockPrice[right]);
        sum += stockPrice[right];
        right++;
      } else {
        set.add(stockPrice[right]);
        sum += stockPrice[right];
        res = Math.max(res, sum);
        set.delete(stockPrice[left]);
        sum -= stockPrice[left];
        left++;
        right++
      }
    }
  }
  return res;
}
console.log(maxAverageStockPrice([1,2,7,7,4,3,6], 3)); // 14

/**
 * 3016
 * 九宫格
 * 设计手机九宫格，将26个字母放到九宫格中，每一个最多三个字母。要求给出的字符串能够通过最少的点击次数打出来。返回这个最少点击次数
 * Solve: 贪心，先遍历text，统计出每个字母出现的次数，再按次数排序，尽可能的把次数多的字母放到每个按钮的第一个位置
 */
console.log('---------------九宫格---------------')
function keypad(text) {
  let res = 0;
  let count = new Array(26).fill(0);
  for (let t of text) {
    count[t.charCodeAt(0) - 'a'.charCodeAt(0)] += 1;
  }
  count.sort((a, b) => b - a);
  for (let i = 0; i < 26; i++) {
    if (i < 9) {
      res += count[i];
    } else if (i < 18) {
      res += count[i] * 2;
    } else {
      res += count[i] * 3;
    }
  }
  return res;
}
console.log(keypad('abacadefghibj')) // 14

/**
 * SearchWord & ResultWord
 * 找到最少需要添加多少个字符到searchWord的末尾，才能使resultWord是searchWord的子串
 */
console.log('---------------SearchWord & ResultWord---------------')
function searchWord(searchWord, resultWord) {
  let i = 0, j = 0;
  while (i < searchWord.length && j < resultWord.length) {
    if (searchWord[i] === resultWord[j]) {
      i++;
      j++;
    } else {
      i++;
    }
  }
  return j < resultWord.length ? resultWord.length - j : 0;
}
console.log(searchWord('armaze', 'amazon')); // 2

/**
 * move locations
 */
console.log('---------------move locations---------------')
function findDataLocations(locations, movedFrom, movedTo) {
  let set = new Set(locations);
  for (let i = 0; i < movedFrom.length; i++) {
    set.delete(movedFrom[i]);
    set.add(movedTo[i]);
  }
  return [...set].sort((a, b) => a - b);
}
console.log(findDataLocations([1,7,6,8], [1,7,2], [2,9,5])); // [5,6,8,9]

/**
 * user system
 */
console.log('---------------user system---------------')
function implementApi(logs) {
  let res = [];
  let user = new Map();
  let loggedUser = new Set();
  const register = function(log) {
    if (user.has(log.username)) {
      res.push('Username already exists');
    } else {
      user.set(log.username, log.password);
      res.push('Registered successfully');
    }
  };
  const login = function(log) {
    if (!loggedUser.has(log.username) && user.has(log.username) && user.get(log.username) === log.password) {
      res.push('Logged in Successfully');
      loggedUser.add(log.username);
    } else {
      res.push('Login Unsuccessful');
    }
  };
  const logout = function(log) {
    if (loggedUser.has(log.username)) {
      res.push('Logged out Successfully');
      loggedUser.delete(log.username);
    } else {
      res.push('Logout Unsuccessful');
    }
  };
  for (let log of logs) {
    if (log.type === 'register') register(log);
    if (log.type === 'login') login(log);
    if (log.type === 'logout') logout(log);
  }
  return res;
}
console.log(implementApi([{type: 'register', username: 'test', password: '123'},
  {type: 'login', username: 'test', password: '123'}, {type: 'logout', username: 'test'}]))

/**
 * s中的字母可以组成多少个t，给定两个字符串s,t，求s中的字符最多可以重组出多少个t
 * Solve: 先用两个hash map记录t和s中每个字符的数量。然后遍历t中的字符，计算 s中该字符出现的数量/t中该字符出现的数量。记录最小值
 */
console.log('---------------s中的字母可以组成多少个t---------------')
function rearrange(s, t) {
  let res = Infinity;
  let count1 = new Map(), count2 = new Map();
  for (let l of s) {
    count1.set(l, count1.has(l) ? count1.get(l) + 1 : 1);
  }
  for (let l of t) {
    count2.set(l, count2.has(l) ? count2.get(l) + 1 : 1);
  }
  for (let item of count2) {
    const letter = item[0], n = item[1];
    if (!count1.has(letter)) return 0;
    res = Math.min(res, Math.floor(count1.get(letter) / n));
  }
  return res;
}
console.log(rearrange('abacbcd', 'bca')); // 2

/**
 * 灰度题
 * the greyness of a cell(i,j) is the difference between the number of black pixels in the ith row and the jth column and
 * the number of white pixels in the ith row and the jth column. Find the maximum greyness among all the cells of the grid
 * 0->white, 1->black
 * Solve: 先遍历计算出每一行的灰度值和每一列的灰度值row & column
 * 再找出灰度值最大的row和灰度值最大的column，将灰度值相加即可
 */
console.log('---------------灰度题---------------')
function gray(input) {
  let res = 0;
  let length1 = input.length, length2 = input[0].length;
  let row = new Array(length1).fill(0), column = new Array(length2).fill(0);
  for (let i = 0; i < length1; i++) {
    for (let j = 0; j < length2; j++) {
      if (input[i][j] === '1') {
        row[i] += 1;
        column[j] += 1;
      } else {
        row[i] -= 1;
        column[j] -= 1;
      }
    }
  }
  for (let i = 0; i < length1; i++) {
    for (let j = 0; j < length2; j++) {
      let g = input[i][j] === '1' ? row[i] + column[j] - 1 : row[i] + column[j] + 1;
      res = Math.max(res, g);
    }
  }
  return res;
}
console.log(gray(['1101', '0011', '1010']));  // 4

/**
 * deliver box
 * You are an amazon delivery, and you have some boxes that you have to deliver, but there are some conditions
 * You can take 2 boxes of same weight in one round; you can take 3 boxes of same weight in one round
 * You have to find the minimum number of rounds to deliver the boxes or -1 if it is not possible to deliver them.
 * eg: boxes = [2, 2, 3, 3, 2, 4, 4, 4, 4, 4], output: 4
 * Solve: 1. Make a Counter of frequency of weights； 2.If there is any weight with frequency 1 return -1
 * all the freq > 1 can be seen as a sum of 2 and 3(因为每次可以搬运两个（偶数）或者三个（奇数），说明所有除了1以外的都可以搬完)
 * 贪心，遍历所有的frequency， 先三个一趟搬，如果三个般不完，则最后一趟搬两个
 */
console.log('---------------deliver box---------------')
function deliverBoxs(boxs) {
  let frequency = new Map();
  for (let box of boxs) {
    frequency.set(box, frequency.has(box) ? frequency.get(box) + 1 : 1)
  }
  let res = 0;
  for (let item of frequency) {
    if (item[1] === 1) return -1;
    res += Math.ceil(item[1] / 3);
  }
  return res;
}
console.log(deliverBoxs([2, 2, 3, 3, 2, 4, 4, 4, 4, 4]))  // 4

/**
 * PrimeMovieAward
 * 将数组分组，确保每个组内的任意两个元素的差不大于k，求最小可以分多少组
 * 贪心，先将数组排序，记录当前组的最小值，逐个添加元素直到当前元素与最小值的差大于k时，更新最小值，开始新的组
 */
console.log('---------------PrimeMovieAward---------------')
function primeVideo(awards, k) {
  awards.sort((a, b) => a - b);
  let min = awards[0], res = 1;
  for (let i = 1; i < awards.length; i++) {
    if (awards[i] - min > k) {
      min = awards[i];
      res++;
    }
  }
  return res;
}
console.log(primeVideo([1,5,4,6,8,9,2], 3))  // 3; [2,1],[5,4,6],[8,9]

/**
 * hard
 * Given a binary array and an integer k, find the position of zeroes flipping which creates maximum number of consecutive 1s in array.
 * eg: arr = [1, 0, 0, 1, 1, 0, 1, 0, 1, 1, 1], k = 2; Output: [5, 7]
 * Explanation:
 * We are allowed to flip maximum 2 zeroes. If we flip arr[5] and arr[7], we get 8 consecutive 1's which is
 * maximum possible under given constraints
 * lc1004
 */
console.log('---------------zeroes flipping---------------')
function flipZero(nums, k) {
  let start = 0, end = 0;
  let i = 0, j = 0;
  while (j < nums.length) {
    if (nums[j] === 0) k--;
    if (k === -1 && j - i > start - end) {
      start = i;
      end = j;
    }
    while (k < 0) {
      if (nums[i] === 0) k++;
      i++;
    }
    j++;
  }
  if (j - i > start - end) {
    start = i;
    end = j;
  }
  let res = [];
  for (let i = start; i < end; i++) {
    if (nums[i] === 0) res.push(i);
  }
  return res;
}
console.log(flipZero([1, 0, 0, 1, 1, 0, 1, 0, 1, 1, 1], 2))

/**
 * lc2104
 */

/**
 * 11 temperature
 * eg: arr = [6,-2,5], day1 = math.max(6, (6-2+5)) = 9, day2 = math.max(6-2, -2+5) = 4, day3 = math.max(6-2+5, 5) = 9
 * res = Math.max(9,4,9) = 9;
 * 前缀和
 */
console.log('---------------temperature---------------')
function temperature(arr) {
  let prefixSum = [arr[0]];
  for (let i = 1; i < arr.length; i++) {
    prefixSum[i] = prefixSum[i - 1] + arr[i];
  }
  let max = prefixSum[prefixSum.length - 1];
  let res = -Infinity;
  for (let i = 0; i < prefixSum.length; i++) {
    let change = 0;
    if (i === 0) {
      change = Math.max(prefixSum[i], max);
    } else {
      change = Math.max(prefixSum[i], max - prefixSum[i - 1]);
    }
    res = Math.max(res, change);
  }
  return res;
}
console.log(temperature([6,-2,5]))

/**
 * lc1846
 * greedy
 * hard
 */

/**
 * lc56
 * hard
 * 合并区间，先将区间按start的大小排序
 */

/**
 * lc2214
 * 找到通关所需的最低初始血量
 * 假设游戏结束后只剩1点血，从最后一关开始，计算到达每一关时需要剩下的最少血量。
 * arr[i] = damage[i] + arr[i+1]
 * eg: damage = [2,7,4,3], armor = 4
 * 由于armor能抵挡一次伤害，我们使用它抵挡血量花费最高的一关
 * hard
 */

/**
 * lc2221
 */

/**
 * hard, 重点，要会默写
 * Common Prefix Length
 * https://leetcode.com/discuss/interview-question/851513/roblox-new-grad-2021-oa-hackerrank
 * 给一个string array. 对于每一个string， 从任意位置切开分成两个string，求后一部分和原来的string的共同前缀的长度
 * eg arr = ["abcabcd"]
 * '' + 'abcabcd' -> 'abcabcd' 和 'abcabcd' 的共同前缀 = 7
 * 'a' + 'bcabcd' -> 0
 * 'ab' + 'cabcd' -> 0
 * 'abc' + 'abcd' -> 3
 * 'abca' + 'bcd' -> 0;  'abcab' + 'cd' -> 0;  'abcabc' + 'd' -> 0
 * sum = 7 + 0 + 0 + 3 + 0 + 0 + 0 = 10
 * Solve: Z algorithm. O(n)
 */
console.log('---------------Z algorithm---------------')
function common_prefix_length(str) {
  let n = str.length;
  let z = new Array(n).fill(0);
  z[0] = n;
  let l = 0, r = 0;
  for (let i = 1; i < n; i++) {
    if (i > r) {
      l = i;
      r = i;
      while (r < n && str[r-l] === str[r]) r++;
      z[i] = r - l;
      r--;
    } else {
      let k = i - l;
      if (z[k] < r - i + 1) z[i] = z[k];
      else {
        l = i;
        while (r < n && str[r - l] === str[r]) r++;
        z[i] = r - l;
        r--;
      }
    }
  }
  console.log(z);
  return z.reduce((total, val) => total + val);
}
console.log(common_prefix_length('abcabcd'));
console.log(common_prefix_length('aabcaabxaaaz'));

/**
 * 找出左右平均差值最小的index(从1计数)
 * lc2256
 */
console.log('---------------左右平均差值最小的index---------------')
function findIndex(arr) {
  let index = 0;
  let diff = Infinity, n = arr.length;
  let sum = arr.reduce((total, val) => total + val);
  let left = 0, right = 0;
  for (let i = 0; i < n - 1; i++) {
    left += arr[i];
    right = sum - left;
    let leftAverage = Math.floor(left / (i + 1));
    let rightAverage = i === arr.length - 1 ? 0 : Math.floor(right / (n - i - 1));
    let d = Math.abs(leftAverage - rightAverage);
    if (diff > d) {
      diff = d;
      index = i;
    }
  }
  return index + 1;
}
console.log(findIndex([1,4,4,5,4,4,1]));

/**
 * 反转链表
 */

/**
 * 给定一个二进制字符串，从中选出3个递增的index，取出对应index的二进制字符，使得相邻的两个不相等
 * eg: book = '01001'
 * output = 4 -> [1,2,3](010), [1,2,4](010), [2,3,5](101), [2,4,5](101)
 * Solve: 3个字符，任意两个不相等，那只有两种情况：'010', '101'。找到子序列中'010', '101'的个数即可
 * 三个循环，暴力破解
 */
console.log('---------------子序列---------------')
function findPage(book) {
  let res = 0;
  for (let i = 0; i < book.length - 2; i++) {
    for (let j = i + 1; j < book.length - 1; j++) {
      if (book[i] === book[j]) continue;
      for (let x = j + 1; x < book.length; x++) {
        if (book[x] === book[j]) continue;
        res++;
      }
    }
  }
  return res;
}
console.log(findPage('01001'))

/**
 * hard, tricky
 * 每一个数字被4，2整除，有多少种方法
 * eg: [4,5,6]
 * 4: 4*1 || 2*2 -> 2种
 * 5: 0
 * 6: 2*3 || 2*1 + 4*1 -> 2
 * res = [2,0,2]
 * Solve: 先求出该数能被多少个2整除，再依次减少2的个数，每次减少两个2同时增加一个4
 */
console.log('---------------2，4整除---------------')
function chooseFleets(wheels) {
  let res = [];
  for (let item of wheels) {
    if (item % 2 === 0) {
      let n = item / 2;
      if (n % 2 === 0) {
        res.push(n / 2 + 1);
      } else {
        res.push(Math.ceil(n / 2));
      }
    } else {
      res.push(0);
    }
  }
  return res;
}
console.log(chooseFleets([4,5,6,14,16,18]))

/**
 * hard, tricky
 * 给定一个以大写字母组成的字符串，最多可以另外添加一个字符到字符串中，要求包含最多的'AZ'子序列
 * eg: str = 'BAZAZ', 在第二个位置添加一个'A' => 'BAAZAZ' -> 包含5个'AZ' -> return 5
 * Solve: 添加A或者Z，A加在开头或者Z添加到末尾才可能得到最多的AZ
 * 分两种情况，'A' + str; str + 'Z', 计算两个字符串中AZ的个数，取最大值
 * 从前往后遍历新str，每遇到一个Z，就能和前面的所有A组成AZ，所以只要记录Z之前有多少个A即可
 */
console.log('---------------count AZ---------------')
function maxmizeAZ(str) {
  let countA = 0;
  let str1 = 'A' + str, count1 = 0;
  for (let s of str1) {
    if (s === 'A') countA++;
    if (s === 'Z') count1 += countA;
  }
  countA = 0;
  let str2 = str + 'Z', count2 = 0;
  for (let s of str2) {
    if (s === 'A') countA++;
    if (s === 'Z') count2 += countA;
  }
  return Math.max(count1, count2);
}
console.log(maxmizeAZ('BAZAZ'))

/**
 * lc1492
 * 穷举法，判断质数
 */

/**
 * hard, 前缀和
 * router
 * buildingCount(代表每个building的人数): [1,4,2,3,2] -> building1有1个人，building2有4个人，依次类推
 * routerLocation(代表router在哪个building): [3,1] -> router1在building3， router2在building1
 * routerRange(代表router能辐射的范围): [2,3] -> router1能辐射前后2个building，如果它位于building3，那么1,2,3,4,5都能被覆盖
 * 每个building被辐射的router数量必须大于等于人数才能算serve。问有几个building能被serve
 * lc1109
 */

/**
 * hard
 * 最短路线清楚目标（Robot）
 * https://leetcode.com/discuss/interview-question/1257344/amazon-oa-demolition-of-robot
 */
console.log('---------------demolition robot---------------')
function robot(lot) {

}
console.log(robot([[1,1,1],[1,1,1],[1,1,9]]))

/**
 * minimal move
 * 把0. 1移到两头，最少需要几步，0和1或左或右都可以，只要归到一侧就可以
 * swap any two adjacent elements. Determine the minimum number of swaps to sort the array.
 * eg: [0，1，0，1]，需要1步，[0, 0, 1, 1]; [1, 1, 1, 1, 0, 1, 0, 1] 需要3步， [1, 1, 1, 1, 1, 1, 0, 0]
 * https://www.geeksforgeeks.org/minimum-swaps-required-sort-binary-array/
 * Solve: 分两种情况 1：0在左边，1在右边； 2：1在左边，0在右边
 * 假设0在左边，1在右边：遍历数组，累计1的数量count，遇到0时，说明要将0左移count次（此时0左边有count个1）
 */
console.log('---------------minimal move---------------')
function minMoves(arr) {
  let step1 = 0, step0 = 0;
  let count1 = 0, count0 = 0;
  for (let n of arr) {
    if (n === 1) {
      count1 += 1;
      step1 += count0;
    } else {
      count0 += 1;
      step0 += count1;
    }
  }
  return Math.min(step0, step1);
}
console.log(minMoves([0, 0, 1, 0, 1, 0, 1, 1]))

/**
 * password strong
 * 如果一个密码段同时含有至少一个元音和一个辅音，称这个密码是strong的
 * 给定一个密码，返回这个密码的强壮度（每含有上述一个密码段，强壮度+1）
 * 元音 = ['a', 'e', 'i', 'o', 'u']
 * eg: input: "thisisbeautiful"; output: 6; explain: thi si sbe aut if ul
 */
console.log('---------------password strong---------------')
function passwordStrong(password) {
  let vowel = new Set(['a', 'e', 'i', 'o', 'u']);
  let vol = false, con = false;
  let res = 0;
  for (let p of password) {
    if (vowel.has(p)) vol = true;
    else con = true;
    if (vol && con) {
      res++;
      vol = false;
      con = false;
    }
  }
  return res;
}
console.log(passwordStrong('thisisbeautiful'))


/**
 * 38
 * hard
 * sliding window max
 * lc239
 * https://leetcode.com/discuss/interview-question/1636493/Amazon-or-OA-or-Max-Length-of-Valid-Server-Cluster
 */

/**
 * 39
 */

/**
 * lc424
 */

/**
 * 最少的交换次数，让binary string变成回文
 * 计算不match的pair，两队不match的，交换一次就行，如果奇数个pair不match，剩下的那个跟中间的交换，没有中间，则不成立
 */
console.log('---------------binary string 回文---------------')
function numswaps(binary) {
  let n = binary.length, count = 0;
  for (let i = 0; i < Math.floor(n / 2); i++) {
    if (binary[i] !== binary[n - i - 1]) {
      count += 1;
    }
  }
  if (count % 2 === 1 && n % 2 === 0) return -1;
  return Math.floor((count + 1) / 2);
}
console.log(numswaps('0100101'));

/**
 * P-matching score；要从str1中每隔p个字符挑一个字符出来，有多少中序列能重组成str2
 * eg: str1 = 'acaccaa', str2 = 'aac', p = 2
 */
console.log('---------------P-matching---------------')
function pMatching(username1, username2, p) {
  let len1 = username1.length;
  let len2 = username2.length;
  let freq2 = new Array(26).fill(0);
  for (let c of username2) {
    freq2[c.charCodeAt(0) - 'a'.charCodeAt(0)] += 1;
  }
  let res = 0;
  for (let q = 0; q < p; q++) {
    let freq1 = new Array(26).fill(0);
    let left = q, right = q;
    while (right < left + (len2 - 1) * p) {
      if (right >= len1) break;
      freq1[username1[right].charCodeAt(0) - 'a'.charCodeAt(0)] += 1;
      right += p;
    }
    if (right !== left + (len2 - 1) * p) continue;

    while (right < len1) {
      freq1[username1[right].charCodeAt(0) - 'a'.charCodeAt(0)] += 1;
      if (isMatch(freq1, freq2)) {
        // console.log('start: ' + left);
        res++;
      }
      let de = username1[left];
      freq1[de.charCodeAt(0) - 'a'.charCodeAt(0)] -= 1;
      left += p;
      right += p;
    }
  }
  return res;
}

function pMatching2(username1, username2, p) {
  let len1 = username1.length;
  let len2 = username2.length;
  let freq2 = new Array(26).fill(0);
  for (let c of username2) {
    freq2[c.charCodeAt(0) - 'a'.charCodeAt(0)] += 1;
  }
  let res = 0;
  for (let i = 0; i < len1; i++) {
    let freq1 = new Array(26).fill(0);
    for (let j = i; j <= i + (len2 - 1) * p && j < len1; j += p) {
      freq1[username1[j].charCodeAt(0) - 'a'.charCodeAt(0)] += 1;
    }
    if (isMatch(freq1, freq2)) {
      // console.log('start: ' + i)
      res++;
    }
  }
  return res;
}

function isMatch(freq1, freq2) {
  for (let i = 0; i < 26; i++) {
    if (freq1[i] !== freq2[i]) return false;
  }
  return true;
}

function pMatching3(username1, username2, p) {
  let arr2 = new Array(26).fill(0);
  const start = 'a'.charCodeAt(0);
  for (let name of username2) {
    arr2[name.charCodeAt(0) - start] += 1;
  }

  let res = 0;
  for (let i = 0; i < p; i++) {
    let arr1 = new Array(26).fill(0);
    let l = i, r = i;
    const end = (username2.length - 1) * p + i;
    if (end > username1.length) return res;
    while (r <= end) {
      arr1[username1[r].charCodeAt(0) - start] += 1;
      r += p;
    }
    if (arr1.join('') === arr2.join('')) res += 1;
    while (r < username1.length) {
      arr1[username1[l].charCodeAt(0) - start] -= 1;
      arr1[username1[r].charCodeAt(0) - start] += 1;
      if (arr1.join('') === arr2.join('')) res += 1;
      l += p;
      r += p;
    }
  }

  return res;
}

console.log('---------------P-matching 1---------------')
console.log(pMatching('acaccaaaaaaaaascdfdsdsdscscscscasascsdcsdcsdcrrasasaccacscacaswrffddsdcasdssdasdfdcsdcaacdscasascacacccsaasas', 'aac', 2))

console.log('---------------P-matching 2---------------')
console.log(pMatching2('acaccaaaaaaaaascdfdsdsdscscscscasascsdcsdcsdcrrasasaccacscacaswrffddsdcasdssdasdfdcsdcaacdscasascacacccsaasas', 'aac', 2))

console.log('---------------P-matching 3---------------')
console.log(pMatching3('acaccaaaaaaaaascdfdsdsdscscscscasascsdcsdcsdcrrasasaccacscacaswrffddsdcasdssdasdfdcsdcaacdscasascacacccsaasas', 'aac', 2))






