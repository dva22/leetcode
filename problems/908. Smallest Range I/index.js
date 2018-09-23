// Source : https://leetcode.com/problems/smallest-range-i/description/
// Author : Dubchak Valery

/***
Given an array A of integers, for each integer A[i] we may choose any x with -K <= x <= K, and add x to A[i].

After this process, we have some array B.

Return the smallest possible difference between the maximum value of B and the minimum value of B.

 

Example 1:

Input: A = [1], K = 0
Output: 0
Explanation: B = [1]

***/

var smallestRangeI = module.exports = function(A, K) {
    let maxA = Math.max(...A);
    let minA = Math.min(...A);
    let diff = maxA - minA;
    if (diff > K * 2) return diff - K * 2;
    else return 0;
};