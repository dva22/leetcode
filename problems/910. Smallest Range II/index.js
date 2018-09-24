// Source : https://leetcode.com/problems/smallest-range-ii/description/
// Author : Dubchak Valery

/***
Given an array A of integers, for each integer A[i] we need to choose either x = -K or x = K, and add x to A[i] (only once).

After this process, we have some array B.

Return the smallest possible difference between the maximum value of B and the minimum value of B.

 

Example 1:

Input: A = [1], K = 0
Output: 0

***/

var smallestRangeII = module.exports = function(A, K) {
    A.sort((a,b)=>a-b);
    let n = A.length, mx = A[n - 1], mn = A[0], res = mx - mn;
    for (let i = 0; i < n - 1; ++i) {
        mx = Math.max(mx, A[i] + 2 * K);
        mn = Math.min(A[i + 1], A[0] + 2 * K);
        res = Math.min(res, mx - mn);
    }
    return res;
};