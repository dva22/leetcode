// Source : https://leetcode.com/problems/all-possible-full-binary-trees/discuss/172319/Recursive-Javascript-Solution
// Author : Dubchak Valery

/***
A full binary tree is a binary tree where each node has exactly 0 or 2 children.

Return a list of all possible full binary trees with N nodes.  Each element of the answer is the root node of one possible tree.

Each node of each tree in the answer must have node.val = 0.

You may return the final list of trees in any order.

 

Example 1:

Input: 7
Output: [[0,0,0,null,null,0,0,null,null,0,0],[0,0,0,null,null,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,null,null,null,null,0,0],[0,0,0,0,0,null,null,0,0]]


***/

var allPossibleFBT = module.exports = function(N) {
    if (N % 2 === 0) return [];
    if (N === 1) return [new TreeNode(0)];
    
    let trees = [];
    for (let i = 1; i <= N - 2; i += 2) {
        let leftTrees = allPossibleFBT(i);
        let rightTrees = allPossibleFBT(N - 1 - i);
        leftTrees.forEach(lt => {
            rightTrees.forEach(rt => {
                let root = new TreeNode(0);
                root.left = lt;
                root.right = rt;
                trees.push(root);
            });
        });
    }
    return trees;
};