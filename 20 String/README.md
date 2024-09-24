## String

### 字符和 UTF-16 code
'a'.charCodeAt() = 97

### KMP Algorithm for Pattern Searching
* 寻找pattern在text中的位置
* 基于brute force，利用lps避免重复计算
* O(m+n)
* 28

basic knowledge
* Proper prefix: 不包含自身的前缀; Suffixes: 后缀
* eg: txt = ABC, Proper prefix = ['', 'A', 'AB'], Suffixes = ['', 'C', 'BC', 'ABC']

计算lps
* lps[]: lps[i]存储pattern[0 ~ i]中，即属于Proper prefix又属于Suffixes的子串的最大长度; 
* eg: pattern = ABC -> lps = [0,0,0]
* O(m), m = pattern.length
```
const getLPS = (p) => {
    const lps = [0];
    let len = 0, i = 1;
    while (i < p.length) {
        if (p[i] === p[len]) {
            len++;
            lps[i] = len;
            i++;
        } else {
            if (len !== 0) {
                len = lps[len - 1];
            } else {
                lps[i] = 0;
                i++;
            }
        }
    }
    return lps;
};
```

Pattern Searching
* 双指针i,j分别指向txt和pattern
* 如果txt[i] === pattern[j], 说明匹配，同时移动i和j
* 如果txt[i] !== pattern[j], 两种情况
* j === 0, i右移一位，继续比较
* j !== 0, j = lps[j - 1], 继续比较
* O(n), n = txt.length

### Rotate String - 796
假设string可以头尾相连，怎么判断一个string旋转之后等于另一个string
* A = str1 + str1, 如果str2存在于A中，则说明相等
* KMP Algorithm for Pattern Searching

### Palindrome - 回文
判断是否是回文
* 双指针指向头尾，进行比较
* 125

字符串s, 找出以s[0]开头的最长回文
* 将s翻转得到s1
* 找到字符串t, t是s中的prefix，并且t是s1中的suffix，且t的长度最长，则t是最长的回文串
* 214


