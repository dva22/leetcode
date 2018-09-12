// Source : https://leetcode.com/problems/valid-permutations-for-di-sequence/description/
// Author : Dubchak Valery

/***
We are given S, a length n string of characters from the set {'D', 'I'}. (These letters stand for "decreasing" and "increasing".)

A valid permutation is a permutation P[0], P[1], ..., P[n] of integers {0, 1, ..., n}, such that for all i:

If S[i] == 'D', then P[i] > P[i+1], and;
If S[i] == 'I', then P[i] < P[i+1].
How many valid permutations are there?  Since the answer may be large, return your answer modulo 10^9 + 7. 

Example 1:

Input: "DID"
Output: 5

***/

var numPermsDISequence = module.exports = function(S) {
    let n = S.length, mod = 1e9 + 7;
        let dp = [], dp2 = [];
    for (let j = 0; j <= n; j++) dp[j] = 1;
    for (let i = 0; i < n; i++) {
            if (S[i] == 'I')
                for (let j = 0, cur = 0; j < n - i; j++)
                    dp2[j] = cur = Math.round((cur + dp[j]) % mod);
            else
                for (let j = n - i - 1, cur = 0; j >= 0; j--)
                    dp2[j] = cur = Math.round((cur + dp[j + 1]) % mod);
            dp = dp2.slice();
    }
    return dp[0];
};