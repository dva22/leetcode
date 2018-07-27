// Source : https://leetcode.com/problems/minimum-distance-between-bst-nodes/description/
// Author : Dubchak Valery (dva@farma.amur.ru)

/***
Given a Binary Search Tree (BST) with the root node root, return the minimum difference between the values of any two different nodes in the tree.

Example :

Input: root = [4,2,6,1,3,null,null]
Output: 1
***/
module.exports = minDiffInBST = root => {
    const stack = [];
    let curr = root, prev = null, min = Infinity;
    
    while (stack.length || curr) {
        if (curr) {
            stack.push(curr);
            curr = curr.left;
        } else {
            curr = stack.pop();
            
            if (prev) {
                min = Math.min(min, Math.abs(curr.val - prev.val))
            }
            prev = curr;
						
            curr = curr.right;
        }
    }
    
    return min;
};