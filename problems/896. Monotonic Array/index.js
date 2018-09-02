// Source : https://leetcode.com/problems/add-two-numbers/description/
// Author : Dubchak Valery

/***
An array is monotonic if it is either monotone increasing or monotone decreasing.

An array A is monotone increasing if for all i <= j, A[i] <= A[j].  An array A is monotone decreasing if for all i <= j, A[i] >= A[j].

Return true if and only if the given array A is monotonic.

 

Example 1:

Input: [1,2,2,3]
Output: true

***/

var isMonotonic = module.exports = function(A) {
    if (A.length === 0) return true;
    
    let prevA = A[0],
        sign = 0;
    
    for (a of A) {
        
        if (a < prevA) {
            if (sign === 1) return false;
            sign = -1;
        }
        
        if (a > prevA) {
            if (sign === -1) return false;
            sign = 1;
        }
        prevA = a;        
    }
    return true;
};