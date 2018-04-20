// Source : https://leetcode.com/problems/add-two-numbers/description/
// Author : Dubchak Valery

/***
Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

Example:

Input: [-2,1,-3,4,-1,2,1,-5,4],
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.
Follow up:

If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.

***/


var maxSubArray = module.exports = function(nums) {
  var maxn = -Number.MAX_VALUE;
  var sum = 0;
  nums.forEach(function(item, index, array) {
    sum += item;
    if (sum > maxn)
      maxn = sum;
    if (sum < 0)
      sum = 0;
  });

  return maxn;
};