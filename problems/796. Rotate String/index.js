// Source : https://leetcode.com/problems/rotate-string/description/

// Author : Dubchak Valery (dva@farma.amur.ru)

/***
We are given two strings, A and B.

A shift on A consists of taking string A and moving the leftmost character to the rightmost position. For example, if A = 'abcde', then it will be 'bcdea' after one shift on A. Return True if and only if A can become B after some number of shifts on A.

Example 1:
Input: A = 'abcde', B = 'cdeab'
Output: true
***/

var rotateString  = module.exports = function(A, B) {
    return A.length == B.length && (A + A).indexOf(B) > -1;
};
 