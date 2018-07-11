// Source : https://leetcode.com/problems/transpose-matrix/description/

// Author : Dubchak Valery (dva@farma.amur.ru)

/***
Given a matrix A, return the transpose of A.

The transpose of a matrix is the matrix flipped over it's main diagonal, switching the row and column indices of the matrix.
 

Example 1:

Input: [[1,2,3],[4,5,6],[7,8,9]]
Output: [[1,4,7],[2,5,8],[3,6,9]]
***/

var transpose = module.exports = function(A) {

    result = Array(A[0].length).fill(0).map(()=>Array(A.length).fill(0));

    for (let i = 0; i < A.length; i++) {
    	for (let j = 0; j < A[i].length; j++) {
    		result[j][i] = A[i][j];
    	}
    }

    return result;
    
};