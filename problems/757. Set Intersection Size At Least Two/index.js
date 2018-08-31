// Source : https://leetcode.com/problems/set-intersection-size-at-least-two/description/
// Author : Dubchak Valery

/***
An integer interval [a, b] (for integers a < b) is a set of all consecutive integers from a to b, including a and b.

Find the minimum size of a set S such that for every integer interval A in intervals, the intersection of S with A has size at least 2.

Example 1:
Input: intervals = [[1, 3], [1, 4], [2, 5], [3, 5]]
Output: 3

***/

var intersectionSizeTwo = module.exports = function(intervals) {
    intervals.sort((a, b) =>
                    a[0] != b[0] ? a[0]-b[0] : b[1]-a[1]);
       let todo = Array(intervals.length).fill(2);
        let ans = 0, t = intervals.length;
        while (--t >= 0) {
            let s = intervals[t][0];
            let e = intervals[t][1];
            let m = todo[t];
            for (let p = s; p < s+m; ++p) {
                for (let i = 0; i <= t; ++i)
                    if (todo[i] > 0 && p <= intervals[i][1])
                        todo[i]--;
                ans++;
            }
        }
        return ans;
};