## 前缀和
理解
* 数列nums的前n项和
* pre[i] = pre[i-1] + nums[i]

跟滑动窗口类似，适合在题目要求连续的情况下使用

使用场景
* 差分（1109）
* 前缀和与二分。如果nums是一个正整数数组，那么其前缀和一定单调递增
* 求区间内的 1 的个数。如求任意区间内的1的个数，可以将1以外的数字预处理为0，然后做前缀和，最后做差求区间和（1871）
* 区间值计数。求nums中的值在[lower, upper]之间的数有多少，可以开辟一个与nums值域等大的数组，统计nums值出现的频率，再做前缀和（1862）
* 区间值计数扩展。在上面情况下增加索引限制。可以先做一个二维前缀和pre[i][j]表示前i项j的出现次数（1906）

题目：467，795，904，992，1109

### 二维数组的前缀和
* 求以当前点为end时组成的矩形的和
* 先求当前行的前缀和，矩形的前缀和等于当前行的和加上这一行之前所有值的和
* prefixMatrix[i][j] = prefixSum[j] + prefixMatrix[i - 1][j]
* 304

