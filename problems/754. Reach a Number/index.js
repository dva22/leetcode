// Source : https://leetcode.com/problems/reach-a-number/description/
// Author : Dubchak Valery

/***
You are standing at position 0 on an infinite number line. There is a goal at position target.

On each move, you can either go left or right. During the n-th move (starting from 1), you take n steps.

Return the minimum number of steps required to reach the destination.

Example 1:
Input: target = 3
Output: 2

***/

var reachNumber = module.exports  = function(target) {
    target = Math.abs(target);
    let k = 0;
    while (target > 0)
        target -= ++k;
    return target % 2 == 0 ? k : k + 1 + k%2;
};