// Source : https://leetcode.com/problems/add-two-numbers/description/
// Author : Dubchak Valery

/***
Given an integer, write a function to determine if it is a power of three.

Follow up:
Could you do it without using any loop / recursion?

***/



var isPowerOfThree = module.exports = function(n) {
    return n > 0 && 1162261467 % n == 0;
};