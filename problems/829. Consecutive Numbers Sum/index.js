// Source : https://leetcode.com/problems/consecutive-numbers-sum/description/
// Author : Dubchak Valery (dva@farma.amur.ru)

/***
Given a positive integer N, how many ways can we write it as a sum of consecutive positive integers?

Example 1:

Input: 5
Output: 2
Explanation: 5 = 5 = 2 + 3
***/
        
var consecutiveNumbersSum = module.exports = function(N) {
        while ((N & 1) == 0) N >>= 1;
        ans = 1, d = 3;

        while (d * d <= N) {
            e = 0;
            while (N % d == 0) {
                N /= d;
                e++;
            }
            ans *= e + 1;
            d += 2;
        }

        if (N > 1) ans <<= 1;
        return ans;
};