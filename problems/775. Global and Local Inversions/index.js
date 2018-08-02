// Source : https://leetcode.com/problems/global-and-local-inversions/description/
// Author : Dubchak Valery

/***
We have some permutation A of [0, 1, ..., N - 1], where N is the length of A.

The number of (global) inversions is the number of i < j with 0 <= i < j < N and A[i] > A[j].

The number of local inversions is the number of i with 0 <= i < N and A[i] > A[i+1].

Return true if and only if the number of global inversions is equal to the number of local inversions.

Example 1:

Input: A = [1,0,2]
Output: true

***/

var isIdealPermutation = module.exports = function(A) {
    for (let i=0; i<A.length;i++){
        if (Math.abs(A[i]-i)>1) return false;
    }
    return true;
};