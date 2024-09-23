## String

### 字符和 UTF-16 code
'a'.charCodeAt() = 97

### KMP Algorithm for Pattern Searching
* 寻找pattern在text中的位置 - 28
* Proper prefix: 不包含自身的前缀; Suffixes: 后缀
* eg: txt = ABC, Proper prefix = ['', 'A', 'AB'], Suffixes = ['', 'C', 'BC', 'ABC']
* 创建一个数组lps[], lps[i]存储pattern[0 ~ i]中，即属于Proper prefix又属于Suffixes的子串的最大长度; eg: pattern = ABC -> lps = [0,0,0]
* 

### Rotate String - 796
假设string可以头尾相连，怎么判断一个string旋转之后等于另一个string
* A = str1 + str1, 如果str2存在于A中，则说明相等
* KMP Algorithm for Pattern Searching

### Rolling Hash
