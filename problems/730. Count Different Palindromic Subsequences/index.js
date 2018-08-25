// Source : https://leetcode.com/problems/count-different-palindromic-subsequences/description/
// Author : Dubchak Valery

/***
Given a string S, find the number of different non-empty palindromic subsequences in S, and return that number modulo 10^9 + 7.

A subsequence of a string S is obtained by deleting 0 or more characters from S.

A sequence is palindromic if it is equal to the sequence reversed.

Two sequences A_1, A_2, ... and B_1, B_2, ... are different if there is some i for which A_i != B_i.

Example 1:
Input: 
S = 'bccb'
Output: 6
***/

var countPalindromicSubsequences = module.exports = function(S) {
    if (S == null || S.length == 0) return 0;
        let mod = 1000000007, l, r;
        let dp= Array(S.length).fill(0).map(()=>Array(S.length).fill(0));
        for (let i = S.length - 1; i > -1; i--){
            dp[i][i] = 1;
            for (let j = i + 1; j < S.length; j++){
                if (S[i] != S[j]) dp[i][j] = (dp[i][j - 1] + dp[i + 1][j] - dp[i + 1][j - 1]) % mod;
                else {
                    dp[i][j] = (2 * dp[i + 1][j - 1]) % mod;
                    l = i + 1;
                    r = j - 1;
                    while (l <= r && S[i] != S[l]) l++;
                    while (l <= r && S[i] != S[r]) r--;
                    if (l > r) dp[i][j] = (2 + dp[i][j]) % mod;
                    else if(l == r) dp[i][j] = (1 + dp[i][j]) % mod;
                    else if(r - l >= 2) dp[i][j] = (dp[i][j] - dp[l + 1][r - 1]) % mod;
                }
                dp[i][j] = (dp[i][j] + mod) % mod;
            }
        }
        return dp[0][S.length - 1];
};