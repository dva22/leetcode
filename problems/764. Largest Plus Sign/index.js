// Source : https://leetcode.com/problems/largest-plus-sign/description/
// Author : Dubchak Valery

/***
In a 2D grid from (0, 0) to (N-1, N-1), every cell contains a 1, except those cells in the given list mines which are 0. What is the largest axis-aligned plus sign of 1s contained in the grid? Return the order of the plus sign. If there is none, return 0.

An "axis-aligned plus sign of 1s of order k" has some center grid[x][y] = 1 along with 4 arms of length k-1 going up, down, left, and right, and made of 1s. This is demonstrated in the diagrams below. Note that there could be 0s or 1s beyond the arms of the plus sign, only the relevant area of the plus sign is checked for 1s.


Example 2:

Input: N = 2, mines = []
Output: 1

***/


var orderOfLargestPlusSign = module.exports = function(N, mines) {
        let grid = Array(N).fill(1).map(() => Array(N).fill(1));
        let ans = 0;
        
        for (m of mines) {
            grid[m[0]][m[1]] = 0;
        }
        
        for(let i = 0; i < N; i++){
            for(let j = 0; j < N; j++){
                if(grid[i][j] == 1){
                    let count = 1;
                    let dir = 1;
                    while(j-dir >= 0 && j+dir < N  && i-dir >= 0 && i+dir < N  && 
                         grid[i][j-dir] == 1 && grid[i][j+dir] == 1 && 
                         grid[i-dir][j] == 1 && grid[i+dir][j] == 1){
                        count++;
                        dir++;    
                    }
                    ans = Math.max(count, ans);
                }
            }   
        }
        return ans;
};