// Source : https://leetcode.com/problems/max-increase-to-keep-city-skyline/description/

// Author : Dubchak Valery (dva@farma.amur.ru)

/***
In a 2 dimensional array grid, each value grid[i][j] represents the height of a building located there. We are allowed to increase the height of any number of buildings, by any amount (the amounts can be different for different buildings). Height 0 is considered to be a building as well. 

At the end, the "skyline" when viewed from all four directions of the grid, i.e. top, bottom, left, and right, must be the same as the skyline of the original grid. A city's skyline is the outer contour of the rectangles formed by all the buildings when viewed from a distance. See the following example.

What is the maximum total sum that the height of the buildings can be increased?

Example:
Input: grid = [[3,0,8,4],[2,4,5,7],[9,2,6,3],[0,3,1,0]]
Output: 35
***/

var maxIncreaseKeepingSkyline = module.exports = function(grid) {
        let N = grid.length;
        let rowMaxes = Array(N).fill(0);
        let colMaxes = Array(N).fill(0);

        for (let r = 0; r < N; ++r)
            for (let c = 0; c < N; ++c) {
                rowMaxes[r] = Math.max(rowMaxes[r], grid[r][c]);
                colMaxes[c] = Math.max(colMaxes[c], grid[r][c]);
        }

        let ans = 0;
        for (let r = 0; r < N; ++r)
            for (let c = 0; c < N; ++c)
                ans += Math.min(rowMaxes[r], colMaxes[c]) - grid[r][c];

        return ans;
};
 