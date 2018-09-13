// Source : https://leetcode.com/problems/find-pivot-index/description/
// Author : Dubchak Valery

/***
Given an array of integers nums, write a method that returns the "pivot" index of this array.

We define the pivot index as the index where the sum of the numbers to the left of the index is equal to the sum of the numbers to the right of the index.

If no such index exists, we should return -1. If there are multiple pivot indexes, you should return the left-most pivot index.

Example 1:
Input: 
nums = [1, 7, 3, 6, 5, 6]
Output: 3

***/


var pivotIndex  = module.exports = function(nums) {
    let sum = 0, leftsum = 0;
        for (x of nums) sum += x;
        for (let i = 0; i < nums.length; ++i) {
            if (leftsum == sum - leftsum - nums[i]) return i;
            leftsum += nums[i];
        }
        return -1;
};