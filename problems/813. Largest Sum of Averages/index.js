// Source : https://leetcode.com/problems/largest-sum-of-averages/description/
// Author : Dubchak Valery (dva@farma.amur.ru)

/***
We partition a row of numbers A into at most K adjacent (non-empty) groups, then our score is the sum of the average of each group. What is the largest score we can achieve?

Note that our partition must use every number in A, and that scores are not necessarily integers.

Example:
Input: 
A = [9,1,2,3,9]
K = 3
Output: 20
***/
var largestSumOfAverages = module.exports = function(A, K) {
        let N = A.length;
        let P = Array(N+1).fill(0);
        for (let i = 0; i < N; ++i)
            P[i+1] = P[i] + A[i];

        dp = [];
        for (let i = 0; i < N; ++i)
            dp[i] = (P[N] - P[i]) / (N - i);

        for (let k = 0; k < K-1; ++k)
            for (let i = 0; i < N; ++i)
                for (let j = i+1; j < N; ++j)
                    dp[i] = Math.max(dp[i], (P[j]-P[i]) / (j-i) + dp[j]);

        return dp[0];
};
   
 