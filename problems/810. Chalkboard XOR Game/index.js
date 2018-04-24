// Source : https://leetcode.com/problems/add-two-numbers/description/
// Author : Dubchak Valery

/***
A matrix is Toeplitz if every diagonal from top-left to bottom-right has the same element.

Now given an M x N matrix, return True if and only if the matrix is Toeplitz.

***/


var xorGame = module.exports = function(nums) {
    xo = 0;
    for(var r = 0; r < nums.length; r++) { xo ^= nums[r] };
    return xo == 0 || nums.length % 2 == 0;
};