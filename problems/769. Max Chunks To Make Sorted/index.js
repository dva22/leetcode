// Source : https://leetcode.com/problems/max-chunks-to-make-sorted/description/
// Author : Dubchak Valery

/***
Given an array arr that is a permutation of [0, 1, ..., arr.length - 1], we split the array into some number of "chunks" (partitions), and individually sort each chunk.  After concatenating them, the result equals the sorted array.

What is the most number of chunks we could have made?

Example 1:

Input: arr = [4,3,2,1,0]
Output: 1

***/

var maxChunksToSorted = module.exports = function(arr) {
    let ans = 0, max = 0;
        for (let i = 0; i < arr.length; ++i) {
            max = Math.max(max, arr[i]);
            if (max == i) ans++;
        }
        return ans;
};