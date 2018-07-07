// Source : https://leetcode.com/problems/rotated-digits/description/

// Author : Dubchak Valery (dva@farma.amur.ru)

/***
X is a good number if after rotating each digit individually by 180 degrees, we get a valid number that is different from X.  Each digit must be rotated - we cannot choose to leave it alone.

A number is valid if each digit remains a digit after rotation. 0, 1, and 8 rotate to themselves; 2 and 5 rotate to each other; 6 and 9 rotate to each other, and the rest of the numbers do not rotate to any other number and become invalid.

Now given a positive number N, how many numbers X from 1 to N are good?

Example:
Input: 10
Output: 4
***/

var rotatedDigits = module.exports = function(N) {
    let count = 0;
    for(let i=1; i<=N; i++){
    	let tmp = i+'';
    	if(!/[347]/g.test(tmp) && /[2569]/g.test(tmp)) count++;
    }
    return count;
};