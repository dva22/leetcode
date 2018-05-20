// Source : https://leetcode.com/problems/new-21-game/description/

// Author : Dubchak Valery (dva@farma.amur.ru)

/***
Alice plays the following game, loosely based on the card game "21".

Alice starts with 0 points, and draws numbers while she has less than K points.  During each draw, she gains an integer number of points randomly from the range [1, W], where W is an integer.  Each draw is independent and the outcomes have equal probabilities.

Alice stops drawing numbers when she gets K or more points.  What is the probability that she has N or less points?

Example 1:

Input: N = 10, K = 1, W = 10
Output: 1.00000
***/

var new21Game = module.exports = function(N, K, W) {
        let dp = Array(N + W + 1).fill(0);
        for (let k = K; k <= N; ++k)
            dp[k] = 1.0;

        let S = Math.min(N - K + 1, W);
        for (let k = K - 1; k >= 0; --k) {
            dp[k] = S / W;
            S += dp[k] - dp[k + W];
        }
        return dp[0];
};
 