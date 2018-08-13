// Source : https://leetcode.com/problems/spiral-matrix-iii/description/

// Author : Dubchak Valery (dva@farma.amur.ru)

/***
On a 2 dimensional grid with R rows and C columns, we start at (r0, c0) facing east.

Here, the north-west corner of the grid is at the first row and column, and the south-east corner of the grid is at the last row and column.

Now, we walk in a clockwise spiral shape to visit every position in this grid. 

Whenever we would move outside the boundary of the grid, we continue our walk outside the grid (but may return to the grid boundary later.) 

Eventually, we reach all R * C spaces of the grid.

Return a list of coordinates representing the positions of the grid in the order they were visited.

 

Example 1:

Input: R = 1, C = 4, r0 = 0, c0 = 0
Output: [[0,0],[0,1],[0,2],[0,3]]
***/

var spiralMatrixIII = module.exports = function(R, C, r0, c0) {
    let n = Math.max(r0, c0, R-1-r0, C-1-c0);
    let res = [[r0,c0]];
    for(let i=1; i<=n; i++){
        for(let j=1-i; j<=i; j++) res.push([r0+j,c0+i]); //line 1
        for(let j=i-1; j>=-i; j--) res.push([r0+i,c0+j]); //line 2
        for(let j=i-1; j>=-i; j--) res.push([r0+j,c0-i]); //line 3
        for(let j=1-i; j<=i; j++) res.push([r0-i,c0+j]); //line 4
    }
    return res.filter(x=>x[0]>=0&&x[0]<R&&x[1]>=0&&x[1]<C);
};