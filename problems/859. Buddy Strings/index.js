// Source : hhttps://leetcode.com/problems/buddy-strings/description/

// Author : Dubchak Valery (dva@farma.amur.ru)

/***
Given two strings A and B of lowercase letters, return true if and only if we can swap two letters in A so that the result equals B.

 

Example 1:

Input: A = "ab", B = "ba"
Output: true
***/

var buddyStrings = module.exports = function(A, B) {
    if (A.length != B.length) {
        return false;
    }
    let [dif, chars] = [[], new Set(A)];
    for (i in A) {
        if (A[i] != B[i]) {
            dif.push([A[i], B[i]]);
        }
    }
    return dif.length == 2 && dif[0].join() == dif[1].reverse().join() || (dif.length == 0 && chars.size != A.length);
};