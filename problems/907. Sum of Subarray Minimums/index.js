// Source : https://leetcode.com/problems/sum-of-subarray-minimums/description/
// Author : Dubchak Valery

/***
Given an array of integers A, find the sum of min(B), where B ranges over every (contiguous) subarray of A.

Since the answer may be large, return the answer modulo 10^9 + 7.

 

Example 1:

Input: [3,1,2,4]
Output: 17

***/

var sumSubarrayMins = module.exports  = function(A) {
    let mod=1000000007;
    let sum=0;
    for(let i=0; i<A.length; i++){
        let left=i-1, right=i+1;
        while(left>=0 && A[left]>=A[i]) left--;
        while(right<A.length && A[right]>A[i]) right++;
        sum=(sum+(right-i)*(i-left)*A[i]%mod)%mod;
    }
    return sum;
};