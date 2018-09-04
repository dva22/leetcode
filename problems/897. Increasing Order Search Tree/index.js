// Source : https://leetcode.com/problems/increasing-order-search-tree/description/
// Author : Dubchak Valery

/***
Given a tree, rearrange the tree in in-order so that the leftmost node in the tree is now the root of the tree, and every node has no left child and only 1 right child.

Example 1:
Input: [5,3,6,2,4,null,8,1,null,null,null,7,9]

Output: [1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9]

***/

var increasingBST = module.exports = function(root) {
    let arr = [];
    (function centerOrder(root){
        if(root===null) return ;
        centerOrder(root.left);
        arr.push(root.val);
        centerOrder(root.right);
    })(root);
    let res = new TreeNode();
    let tmp = res;
    for(let i=0; i<arr.length; i++){
        tmp.val = arr[i];
        if(i<arr.length-1){
            tmp.right = new TreeNode();
            tmp = tmp.right;
        }
    }
    return res;
};