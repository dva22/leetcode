// Source : https://leetcode.com/contest/weekly-contest-90/problems/minimum-cost-to-hire-k-workers/

// Author : Dubchak Valery (dva@farma.amur.ru)

/***
There is a special square room with mirrors on each of the four walls.  Except for the southwest corner, there are receptors on each of the remaining corners, numbered 0, 1, and 2.

The square room has walls of length p, and a laser ray from the southwest corner first meets the east wall at a distance q from the 0th receptor.

Return the number of the receptor that the ray meets first.  (It is guaranteed that the ray will meet a receptor eventually.)

 

Example 1:

Input: p = 2, q = 1
Output: 2
***/

var mirrorReflection = module.exports = function(p, q) {
    while (p % 2 == 0 && q % 2 == 0) {
            p /= 2;
            q /= 2;
        }
        if (p % 2 == 0) {
            return 2;
        } else if (q % 2 == 0) {
            return 0;
        } else {
            return 1;
        }
    
};