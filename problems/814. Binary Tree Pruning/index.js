// Source : https://leetcode.com/problems/add-two-numbers/description/
// Author : Dubchak Valery

/***
We are given the head node root of a binary tree, where additionally every node's value is either a 0 or a 1.

Return the same tree where every subtree (of the given tree) not containing a 1 has been removed.

(Recall that the subtree of a node X is X, plus every node that is a descendant of X.)
The binary tree will have at most 100 nodes.
The value of each node will only be 0 or 1.
***/


var pruneTree = module.exports = function(root) {
  if (!root) return null
  console.log(root);

  // recurse as deep as you can until you hit a leaf
  root.left = pruneTree(root.left)
  root.right = pruneTree(root.right)
  
  // we only keep leaf nodes if they contain a 1
  const isLeaf = !root.left && !root.right
  if (isLeaf && root.val !== 1) return null
  
  return root
};