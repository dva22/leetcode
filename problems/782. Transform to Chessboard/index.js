// Source : https://leetcode.com/problems/transform-to-chessboard/description/
// Author : Dubchak Valery (dva@farma.amur.ru)

/***
An N x N board contains only 0s and 1s. In each move, you can swap any 2 rows with each other, or any 2 columns with each other.

What is the minimum number of moves to transform the board into a "chessboard" - a board where no 0s and no 1s are 4-directionally adjacent? If the task is impossible, return -1.

Examples:
Input: board = [[0,1,1,0],[0,1,1,0],[1,0,0,1],[1,0,0,1]]
Output: 2
***/

var movesToChessboard = module.exports = function(b) {
       let N = b.length, rowSum = 0, colSum = 0, rowSwap = 0, colSwap = 0;
        for (let i = 0; i < N; i++) for (let j = 0; j < N; j++)
                if ((b[0][0] ^ b[i][0] ^ b[0][j] ^ b[i][j]) == 1) return -1;
        for (let i = 0; i < N; i++) {
            rowSum += b[0][i];
            colSum += b[i][0];
            if (b[i][0] == i % 2) rowSwap ++;
            if (b[0][i] == i % 2) colSwap ++ ;
        }
 
    
        if (Math.floor(N / 2) > rowSum || rowSum > (N + 1) / 2) return -1;
        if ((Math.floor(N / 2) > colSum) || colSum > (N + 1) / 2) return -1;
        if (N % 2 == 1) {
            if (colSwap % 2 == 1) colSwap = N - colSwap;
            if (rowSwap % 2 == 1) rowSwap = N - rowSwap;
        } else {
            colSwap = Math.min(N - colSwap, colSwap);
            rowSwap = Math.min(N - rowSwap, rowSwap);
        }
        return (colSwap + rowSwap) / 2;
  
};