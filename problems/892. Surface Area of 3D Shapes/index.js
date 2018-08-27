// Source : https://leetcode.com/problems/surface-area-of-3d-shapes/description/

// Author : Dubchak Valery (dva@farma.amur.ru)

/***
On a N * N grid, we place some 1 * 1 * 1 cubes.

Each value v = grid[i][j] represents a tower of v cubes placed on top of grid cell (i, j).

Return the total surface area of the resulting shapes.

 

Example 1:

Input: [[2]]
Output: 10
***/

var surfaceArea = module.exports = function(grid) {
    let N = grid.length,
        res = 0;
    
     for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            res = res +
                (parseInt(grid[i][j], 10)>0?2:0)+
                ((parseInt(grid[i][j], 10) - (i > 0 ? parseInt(grid[i-1][j], 10) : 0))<0?0:(parseInt(grid[i][j], 10) - (i > 0 ? parseInt(grid[i-1][j], 10) : 0)))+
                ((parseInt(grid[i][j], 10) - ((i < N - 1) ? parseInt(grid[i+1][j], 10) : 0))<0?0:(parseInt(grid[i][j], 10) - (i < N - 1 ? parseInt(grid[i+1][j], 10) : 0))) +              
                ((parseInt(grid[i][j], 10) - (j > 0 ? parseInt(grid[i][j-1], 10) : 0))<0?0:(parseInt(grid[i][j], 10) - (j > 0 ? parseInt(grid[i][j-1],10) : 0))) +
                ((parseInt(grid[i][j], 10) - ((j < N - 1) ? parseInt(grid[i][j+1], 10) : 0))<0?0:(parseInt(grid[i][j], 10) - (j < N - 1 ? parseInt(grid[i][j+1], 10) : 0))); 
        }
    }  
        
    return res;    
};