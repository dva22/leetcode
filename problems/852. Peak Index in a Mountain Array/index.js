// Source : https://leetcode.com/problems/peak-index-in-a-mountain-array/description/

// Author : Dubchak Valery (dva@farma.amur.ru)

/***
Let's call an array A a mountain if the following properties hold:

A.length >= 3
There exists some 0 < i < A.length - 1 such that A[0] < A[1] < ... A[i-1] < A[i] > A[i+1] > ... > A[A.length - 1]
Given an array that is definitely a mountain, return any i such that A[0] < A[1] < ... A[i-1] < A[i] > A[i+1] > ... > A[A.length - 1].

Example 1:

Input: [0,1,0]
Output: 1
***/

var peakIndexInMountainArray = module.exports = function(A) {

    let i = 0,
    maxValue = -1;

    for (let j = 0; j < A.length ; j++) {
        if (A[j] > maxValue) {
            i = j;
            maxValue = A[i];
        } else break;
    }
    
    return i;

};