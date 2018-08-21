// Source : https://leetcode.com/problems/sum-of-subsequence-widths/description/
// Author : Dubchak Valery

/***
Given an array of integers A, consider all non-empty subsequences of A.

For any sequence S, let the width of S be the difference between the maximum and minimum element of S.

Return the sum of the widths of all subsequences of A. 

As the answer may be very large, return the answer modulo 10^9 + 7.

 

Example 1:

Input: [2,1,3]
Output: 6

***/

var sumSubseqWidths = module.exports = function(A) {
        A.sort((a,b)=>a-b);
        let c = 1, res = 0, mod = 1e9 + 7;
        for (let i = 0; i < A.length; ++i, c = (c << 1) % mod)
            res = (res + A[i] * c - A[A.length - i - 1] * c) % mod;
        return Math.floor((res + mod) % mod);
};