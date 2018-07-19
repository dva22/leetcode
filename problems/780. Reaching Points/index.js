// Source : https://leetcode.com/problems/reaching-points/description/
// Author : Dubchak Valery (dva@farma.amur.ru)

/***
A move consists of taking a point (x, y) and transforming it to either (x, x+y) or (x+y, y).

Given a starting point (sx, sy) and a target point (tx, ty), return True if and only if a sequence of moves exists to transform the point (sx, sy) to (tx, ty). Otherwise, return False.

Examples:
Input: sx = 1, sy = 1, tx = 3, ty = 5
Output: True
***/

var reachingPoints = module.exports = function(sx, sy, tx, ty) {
    while (sx<tx && sy<ty) 
        if (tx<ty) 
            ty%=tx; 
        else 
            tx%=ty;
    
    return sx==tx && (ty-sy)%sx==0 ||
            sy==ty && (tx-sx)%sy==0;    
};