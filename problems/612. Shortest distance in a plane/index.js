// Source : https://leetcode.com/problems/shortest-distance-in-a-plane
// Author : Dubchak Valery

/***
Table point_2d holds the coordinates (x,y) of some unique points (more than two) in a plane.
Write a query to find the shortest distance between these points rounded to 2 decimals.
| x  | y  |
|----|----|
| -1 | -1 |
| 0  | 0  |
| -1 | -2 |
The shortest distance is 1.00 from point (-1,-1) to (-1,2). So the output should be:
| shortest |
|----------|
| 1.00     |
Note: The longest distance among all the points are less than 10000.
***/

/* Write your T-SQL query statement below */
/***
SELECT ROUND(MIN(SQRT(POW(p1.x - p2.x, 2) + POW(p1.y - p2.y, 2))), 2) AS shortest
FROM point_2d AS p1
JOIN point_2d AS p2
ON p1.x <> p2.x
OR p1.y <> p2.y
*///