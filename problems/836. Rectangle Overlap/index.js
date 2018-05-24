// Source : https://leetcode.com/problems/rectangle-overlap/description/

// Author : Dubchak Valery (dva@farma.amur.ru)

/***
A rectangle is represented as a list [x1, y1, x2, y2], where (x1, y1) are the coordinates of its bottom-left corner, and (x2, y2) are the coordinates of its top-right corner.

Two rectangles overlap if the area of their intersection is positive.  To be clear, two rectangles that only touch at the corner or edges do not overlap.

Given two rectangles, return whether they overlap.

Example 1:

Input: rec1 = [0,0,2,2], rec2 = [1,1,3,3]
Output: true
***/

var isRectangleOverlap = module.exports = function(rec1, rec2) {	
	return (Math.min(rec1[2], rec2[2]) > Math.max(rec1[0], rec2[0]) && 
     	Math.min(rec1[3], rec2[3]) > Math.max(rec1[1], rec2[1]));
};
 