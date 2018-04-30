// Source : https://leetcode.com/problems/making-a-large-island/description/
// Author : Dubchak Valery (dva@farma.amur.ru)

/***
In a 2D grid of 0s and 1s, we change at most one 0 to a 1.

After, what is the size of the largest island? (An island is a 4-directionally connected group of 1s).

Example 1:

Input: [[1, 0], [0, 1]]
Output: 3
Explanation: Change one 0 to 1 and connect two 1s, then we get an island with area = 3.
***/

var largestIsland = module.exports = function(grid) {
        max=0;

        rows = grid.length;
        if (rows == 0){
            return 0;
        }
        cols = grid[0].length;
        
        for (let i=0; i<rows; i++) {
            for (let j=0; j<cols; j++) {
                change=false;
                if (grid[i][j]==0){
                    grid[i][j]=1;
                    change=true;
                }
                
                let visited = [[]];
                for (let i1 = 0; i1 < rows; i1++) {
                    visited[i1] = [];
                    for (let j1 = 0; j1 < cols; j1++) {
                        visited[i1][j1] = false;
                    }        
                }
                
                max = Math.max(dfs(grid, i, j, rows, cols, visited), max);
                if (change) {
                    grid[i][j]=0;
                }
            }
        }
        
        return max;
};
var dfs = function(grid, x, y, rows, cols, visited){
        
        moves = [[0,-1],[0,1],[-1,0],[1,0]];
     
        visited[x][y]=true;
        count = 1;
     
        for (let i=0; i<moves.length; i++){
            newX = x+moves[i][0];
            newY = y+moves[i][1];
            if (newX>=0 && newY>=0 && newX<rows && newY<cols && visited[newX][newY]==false && grid[newX][newY]==1) {
                 count+= dfs(grid, newX, newY, rows, cols, visited);
            }
        }
        
        return count;
}