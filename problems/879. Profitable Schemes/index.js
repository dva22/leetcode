// Source : https://leetcode.com/problems/profitable-schemes/description/

// Author : Dubchak Valery (dva@farma.amur.ru)

/***
There are G people in a gang, and a list of various crimes they could commit.

The i-th crime generates a profit[i] and requires group[i] gang members to participate.

If a gang member participates in one crime, that member can't participate in another crime.

Let's call a profitable scheme any subset of these crimes that generates at least P profit, and the total number of gang members participating in that subset of crimes is at most G.

How many schemes can be chosen?  Since the answer may be very large, return it modulo 10^9 + 7.

 

Example 1:

Input: G = 5, P = 3, group = [2,2], profit = [2,3]
Output: 2
***/
 
var profitableSchemes = module.exports = function(G, P, group, profit) {
    let dp = Array(P + 1).fill(0).map(() => Array(G + 1).fill(0));
        dp[0][0] = 1;
        let res = 0, mod = 1e9 + 7;;
        for (let k = 0; k < group.length; k++) {
            let g = group[k], p = profit[k];
            for (let i = P; i >= 0; i--)
                for (let j = G - g; j >= 0; j--)
                    dp[Math.min(i + p, P)][j + g] = (dp[Math.min(i + p, P)][j + g] + dp[i][j]) % mod;
        }
        for (let x of dp[P]) res = (res + x) % mod;
        return res;
};