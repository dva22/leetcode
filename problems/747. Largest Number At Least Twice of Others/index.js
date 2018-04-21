// Source : https://leetcode.com/problems/add-two-numbers/description/
// Author : Dubchak Valery

/***
Given two arrays, write a function to compute their intersection.

Example:
Given nums1 = [1, 2, 2, 1], nums2 = [2, 2], return [2].

Note:
Each element in the result must be unique.
The result can be in any order.

***/


var dominantIndex = module.exports  = function dominantIndex(nums) {
  let first = nums[0]
  let second = -Infinity
  let maxIndex = 0

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] >= first) {
      second = first
      first = nums[i]
      maxIndex = i
    } else if (nums[i] > second) {
      second = nums[i]
    }
  }

  if (first < second * 2) return -1
  return maxIndex
}