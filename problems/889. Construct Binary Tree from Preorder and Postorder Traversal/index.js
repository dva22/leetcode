// Source : https://leetcode.com/problems/construct-binary-tree-from-preorder-and-postorder-traversal/description/
// Author : Dubchak Valery

/***
Return any binary tree that matches the given preorder and postorder traversals.

Values in the traversals pre and post are distinct positive integers.
 

Example 1:

Input: pre = [1,2,4,5,3,6,7], post = [4,5,2,6,7,3,1]
Output: [1,2,3,4,5,6,7]

***/
function TreeNode(val) {
     this.val = val;
     this.left = this.right = null;
 }

var constructFromPrePost = module.exports = function(pre, post) {
    if(pre.length===0) return null;
    if(pre.length===1) return new TreeNode(pre[0]);
    let res = new TreeNode(pre[0]);
    let leftVal = pre[1], indexOfLeft = post.indexOf(leftVal);
    res.left = constructFromPrePost(pre.slice(1, indexOfLeft+2), post.slice(0,indexOfLeft+1));
    res.right = constructFromPrePost(pre.slice(indexOfLeft+2), post.slice(indexOfLeft+1));
    return res;
};