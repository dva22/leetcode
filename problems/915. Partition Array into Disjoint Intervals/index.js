// Source : https://leetcode.com/problems/partition-array-into-disjoint-intervals/description/
// Author : Dubchak Valery

/***
Given an array A, partition it into two (contiguous) subarrays left and right so that:

Every element in left is less than or equal to every element in right.
left and right are non-empty.
left has the smallest possible size.
Return the length of left after such a partitioning.  It is guaranteed that such a partitioning exists.

 

Example 1:

Input: [5,0,3,8,6]
Output: 3

***/

var partitionDisjoint = module.exports = function(A) {
    let left = [], temp = [];
    
    for(let i=0; i<A.length; i++) {
        const cur = A[i];
        if(i==0) {
            left.push(cur);
            continue;
        }
        const last = Math.max.apply(this, left) // top elem

        if(cur < last && i!==A.length-1) {
            left.push(cur);
                if(temp.length > 0) { 
                    while(temp.length) left.push(temp.shift());
                }
            } else {
            temp.push(cur);
        }
        
    }
    return left.length;
};