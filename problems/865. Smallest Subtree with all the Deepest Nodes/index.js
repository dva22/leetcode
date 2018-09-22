// Source : https://leetcode.com/problems/smallest-subtree-with-all-the-deepest-nodes/description/
// Author : Dubchak Valery

/***
Given a binary tree rooted at root, the depth of each node is the shortest distance to the root.

A node is deepest if it has the largest depth possible among any node in the entire tree.

The subtree of a node is that node, plus the set of all descendants of that node.

Return the node with the largest depth such that it contains all the deepest nodes in its subtree.

 

Example 1:

Input: [3,5,1,6,2,0,8,null,null,7,4]
Output: [2,7,4]

***/

var subtreeWithAllDeepest = module.exports = function(root) {
const traverse = (node, depth) => {
    let subtreeL, subtreeR;
    let depthL = depth;
    let depthR = depth;

    if (node.left) [subtreeL, depthL] = traverse(node.left, depth + 1);
    if (node.right) [subtreeR, depthR] = traverse(node.right, depth + 1);

    if (depthL === depthR)
      return [node, depthL];
    else
      return depthL > depthR ? [subtreeL, depthL] : [subtreeR, depthR];
  };

  return traverse(root, 0)[0];
};