// Source : https://leetcode.com/problems/sort-array-by-parity-ii/description/
// Author : Dubchak Valery

/***
Given an array A of non-negative integers, half of the integers in A are odd, and half of the integers are even.

Sort the array so that whenever A[i] is odd, i is odd; and whenever A[i] is even, i is even.

You may return any answer array that satisfies this condition.

 

Example 1:

Input: [4,2,5,7]
Output: [4,5,2,7]

***/

var sortArrayByParityII = module.exports = function(A) {
    odd = [];
    even = [];
    res = [];
    
    for (a of A) {
        if (a % 2 == 0) even.push(a);
        else odd.push(a);
    }
    
    for (let i = 0; i < even.length; i++) {
        res.push(even[i]);
        res.push(odd[i]);
    }
        
    return res;
};