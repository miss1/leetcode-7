# prime number(质数)
A number greater than 1 is called prime if it is divisible by only 1 and itself.

一个合数总是可以分解成若干个质数的乘积
* 判断一个数是否是质数，穷举法， 判断从2~n-1中是否有数字能被n整除
* 判断一个数是否是质数，穷举法的改进， 判断从 2 ~ n/2 中是否有数字能被n整除
* 判断一个数是否是质数，判断从 2 ~ Math.sqrt(n) 中是否有数字能被n整除
* 筛选出n以内的所有质数，埃拉托斯特尼筛法; 最初知道2是质数，先把n以内2的倍数都排除掉，接下来是3...以此类推，最后剩下的都是n以内的质数