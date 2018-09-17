// Source : https://leetcode.com/problems/sort-array-by-parity/description/
// Author : Dubchak Valery

/***
Given an array A of non-negative integers, return an array consisting of all the even elements of A, followed by all the odd elements of A.

You may return any answer array that satisfies this condition.
 

Example 1:

Input: [3,1,2,4]
Output: [2,4,3,1]

***/

var sortArrayByParity = module.exports = function(A) {
    let res = [];
    for (a of A) {
        if (a % 2 ===0) res.unshift(a);
            else res.push(a);
    }
    return res;
    
};