// Source : https://leetcode.com/problems/add-two-numbers/description/
// Author : Dubchak Valery

/***
A matrix is Toeplitz if every diagonal from top-left to bottom-right has the same element.

Now given an M x N matrix, return True if and only if the matrix is Toeplitz.

***/

var isToeplitzMatrix = module.exports = function(matrix) {
    for(var r = 1; r < matrix.length; r++) {
        for(var c = 1; c < matrix[0].length; c++) {
            if(matrix[r][c] != matrix[r-1][c-1]) {
                return false;
            }
        }
    }
    return true;
};