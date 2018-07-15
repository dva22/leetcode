// Source : https://leetcode.com/problems/binary-gap/description/
// Author : Dubchak Valery (dva@farma.amur.ru)

/***
Given a positive integer N, find and return the longest distance between two consecutive 1's in the binary representation of N.

If there aren't two consecutive 1's, return 0.
 

Example 1:

Input: 22
Output: 2
***/

var binaryGap = module.exports = function(N) {
    let bin = N.toString(2),
    result = 0,
    length = -1;

    for (i of bin) {
        if (i === '0' && length >= 0) {
            length++;
        }
        if (i ==='1') {
            length++;
            result = Math.max(result, length);
            length = 0;
        }

    }

    return result === - 1
    ? 0
    : result;
    
};
