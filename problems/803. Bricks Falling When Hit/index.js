// Source : https://leetcode.com/problems/bricks-falling-when-hit/description/

// Author : Dubchak Valery (dva@farma.amur.ru)

/***
We have a grid of 1s and 0s; the 1s in a cell represent bricks.  A brick will not drop if and only if it is directly connected to the top of the grid, or at least one of its (4-way) adjacent bricks will not drop.

We will do some erasures sequentially. Each time we want to do the erasure at the location (i, j), the brick (if it exists) on that location will disappear, and then some other bricks may drop because of that erasure.

Return an array representing the number of bricks that will drop after each erasure in sequence.

Example 1:
Input: 
grid = [[1,0,0,0],[1,1,1,0]]
hits = [[1,0]]
Output: [2]
***/

const EXIST = 100000000;
const NOT_EXIST = 0;

var hitBricks = module.exports = function(grid, hits) {
    
        
        let hitsTime = hits.length;
        let result = Array(hitsTime).fill(0);

        let row = grid.length;
        let col = grid[0].length;
        let gridStatus = Array(row).fill(0).map(() => Array(col).fill(0));

        for (let i = 0; i < hitsTime; i++) {
            let hit = hits[i];
            if (gridStatus[hit[0]][hit[1]] == 0) {
                gridStatus[hit[0]][hit[1]] = (i + 1);
            }
        }

        for (let i = 0; i < col; i++) {
            active(grid, gridStatus, 0, i);
        }

        for (let i = hitsTime - 1; i >= 0; i--) {
            let hit = hits[i];
            result[i] = restore(grid, gridStatus, hit[0], hit[1], i + 1);
            result[i] = result[i] == 0 ? 0 : (result[i] - 1);
        }

        return result;
    }

    function restore(grid, gridStatus, x, y, version) {
        if (x < 0 || x >= grid.length || y < 0 || y >= grid[0].length) {
            return 0;
        }
        if (grid[x][y] == 0) {
            return 0;
        }
        if (gridStatus[x][y] == EXIST) {
            return 0;
        }
        if (gridStatus[x][y] != NOT_EXIST && gridStatus[x][y] < version) {
            return 0;
        }
        if ((exist(gridStatus, x - 1, y) ||
                exist(gridStatus, x + 1, y) ||
                exist(gridStatus, x, y - 1) ||
                exist(gridStatus, x, y + 1)) == false) {
            return 0;
        }
        gridStatus[x][y] = EXIST;
        return 1 + restore(grid, gridStatus, x - 1, y, version) +
                restore(grid, gridStatus, x + 1, y, version) +
                restore(grid, gridStatus, x, y - 1, version) +
                restore(grid, gridStatus, x, y + 1, version);
    }

    function exist(gridStatus, x, y) {
        if (x >= gridStatus.length || y < 0 || y >= gridStatus[0].length) {
            return false;
        }
        return x < 0 || gridStatus[x][y] == EXIST;
    }
    

    function active(grid, gridStatus, x, y) {
        if (x < 0 || x >= grid.length || y < 0 || y >= grid[0].length) {
            return;
        }
        if (gridStatus[x][y] != NOT_EXIST || grid[x][y] == 0) {
            return;
        }
        gridStatus[x][y] = EXIST;
        active(grid, gridStatus, x - 1, y);
        active(grid, gridStatus, x + 1, y);
        active(grid, gridStatus, x, y - 1);
        active(grid, gridStatus, x, y + 1);
    }
 