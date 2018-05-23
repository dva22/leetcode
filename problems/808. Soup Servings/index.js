// Source : https://leetcode.com/problems/sum-of-distances-in-tree/description/
// Author : Dubchak Valery (dva@farma.amur.ru)

/***
An undirected, connected tree with N nodes labelled 0...N-1 and N-1 edges are given.

The ith edge connects nodes edges[i][0] and edges[i][1] together.

Return a list ans, where ans[i] is the sum of the distances between node i and all other nodes.

Example 1:

Input: N = 6, edges = [[0,1],[0,2],[2,3],[2,4],[2,5]]
Output: [8,12,6,10,10,10]
***/

 
var soupServings = module.exports = function(N) {
    memo = Array(200).fill(null).map(() => Array(200).fill(null));
     
        return N >= 4800 ?  1.0 : f(Math.ceil(N / 25.0),Math.ceil(N / 25.0));
     

    function f( a,   b) {
        if (a <= 0 && b <= 0) return 0.5;
        if (a <= 0) return 1;
        if (b <= 0) return 0;
        if (memo[a][b] > 0) return memo[a][b];
        memo[a][b] = 0.25 * (f(a - 4, b) + f(a - 3, b - 1) + f(a - 2, b - 2) + f(a - 1, b - 3));
        return memo[a][b]
    }
};