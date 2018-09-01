// Source : https://leetcode.com/problems/self-dividing-numbers/description/
// Author : Dubchak Valery

/***
A self-dividing number is a number that is divisible by every digit it contains.

For example, 128 is a self-dividing number because 128 % 1 == 0, 128 % 2 == 0, and 128 % 8 == 0.

Also, a self-dividing number is not allowed to contain the digit zero.

Given a lower and upper number bound, output a list of every possible self dividing number, including the bounds if possible.

Example 1:
Input: 
left = 1, right = 22
Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 22]

***/


var selfDividingNumbers = module.exports = function(left, right) {
    let ans = []
    for(let i=left; i<=right; i++){
        let temp = i;
        while(temp>0){
            if(i%(temp%10) == 0){
                temp = Math.floor(temp/10)
            } else {
                temp = -1
            }
        }
        if(temp != -1) ans.push(i)
    }
    return ans
};