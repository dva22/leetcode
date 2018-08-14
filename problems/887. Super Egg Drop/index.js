// Source :h ttps://leetcode.com/problems/super-egg-drop/description/
// Author : Dubchak Valery (dva@farma.amur.ru)

/***
You are given K eggs, and you have access to a building with N floors from 1 to N. 

Each egg is identical in function, and if an egg breaks, you cannot drop it again.

You know that there exists a floor F with 0 <= F <= N such that any egg dropped at a floor higher than F will break, and any egg dropped at or below floor F will not break.

Each move, you may take an egg (if you have an unbroken one) and drop it from any floor X (with 1 <= X <= N). 

Your goal is to know with certainty what the value of F is.

What is the minimum number of moves that you need to know with certainty what F is, regardless of the initial value of F?

 

Example 1:

Input: K = 1, N = 2
Output: 2
***/

var superEggDrop = module.exports = function(K, N) {
    
    let dp = Array(N + 1).fill(0).map(()=>Array(K + 1).fill(0));
        let m = 0;
        while (dp[m][K] < N) {
            ++m;
            for (let k = 1; k <= K; ++k)
                dp[m][k] = dp[m - 1][k - 1] + dp[m - 1][k] + 1;
        }
        return m;
    
};