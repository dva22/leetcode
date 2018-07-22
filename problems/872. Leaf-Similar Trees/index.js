// Source : https://leetcode.com/problems/leaf-similar-trees/description/

// Author : Dubchak Valery (dva@farma.amur.ru)

/***
Consider all the leaves of a binary tree.  From left to right order, the values of those leaves form a leaf value sequence.



For example, in the given tree above, the leaf value sequence is (6, 7, 4, 9, 8).

Two binary trees are considered leaf-similar if their leaf value sequence is the same.

Return true if and only if the two given trees with head nodes root1 and root2 are leaf-similar.
***/

var leafSimilar = module.exports = function(root1, root2) {
  const l1 = []
  const l2 = []

  function getLeafVals(root, arr) {
    if (root === null) {
      return null
    }
    if (root.left === null && root.right === null) {
      arr.push(root.val)
    }
    getLeafVals(root.left, arr)
    getLeafVals(root.right, arr)
  }
  
  getLeafVals(root1, l1)
  getLeafVals(root2, l2)
  
  if (l1.length !== l2.length) {
    return false
  }
  
  for (let i = 0; i < l1.length; i++) {
    if (l1[i] !== l2[i]) {
      return false
    }
  }
  
  return true
};