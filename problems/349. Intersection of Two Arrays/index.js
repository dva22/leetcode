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

var intersection = module.exports = function(nums1, nums2) {
  var hash = {};

  nums1.forEach(function(item) {
    hash[item] = 1; 
  });

  nums2.forEach(function(item) {
    if (hash[item])
      hash[item] = 2;
  });

  var ans = [];

  for (var k in hash) 
    hash[k] === 2 && (ans.push(+k));

  return ans;
};