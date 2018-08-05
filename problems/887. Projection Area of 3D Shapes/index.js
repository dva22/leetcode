// Source : https://leetcode.com/contest/weekly-contest-96/problems/projection-area-of-3d-shapes/

// Author : Dubchak Valery (dva@farma.amur.ru)

/***
On a N * N grid, we place some 1 * 1 * 1 cubes that are axis-aligned with the x, y, and z axes.

Each value v = grid[i][j] represents a tower of v cubes placed on top of grid cell (i, j).

Now we view the projection of these cubes onto the xy, yz, and zx planes.

A projection is like a shadow, that maps our 3 dimensional figure to a 2 dimensional plane. 

Here, we are viewing the "shadow" when looking at the cubes from the top, the front, and the side.

Return the total area of all three projections.

 

Example 1:

Input: [[2]]
Output: 5
***/

var projectionArea = module.exports = function(grid) {
    let l = grid.length;
    let answer = 0;
  
    for (let i = 0; i < l; i++) {
        let maxRow = 0;
        let maxLine = 0;
        for (let j = 0; j < l; j++) {
            maxRow = Math.max(maxRow, grid[j][i]);
            maxLine = Math.max(maxLine, grid[i][j]);
            if (grid[i][j] > 0) answer ++;
            
        }
        answer += maxRow;
        answer += maxLine;
    }
    return answer;    
};