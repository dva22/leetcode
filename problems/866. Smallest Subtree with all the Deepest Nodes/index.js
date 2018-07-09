// Source : https://leetcode.com/problems/smallest-subtree-with-all-the-deepest-nodes/description/

// Author : Dubchak Valery (dva@farma.amur.ru)

/***
Given a binary tree rooted at root, the depth of each node is the shortest distance to the root.

A node is deepest if it has the largest depth possible among any node in the entire tree.

The subtree of a node is that node, plus the set of all descendants of that node.

Return the node with the largest depth such that it contains all the deepest nodes in it's subtree.

 

Example 1:

Input: [3,5,1,6,2,0,8,null,null,7,4]
Output: [2,7,4]
***/

var subtreeWithAllDeepest = module.exports = function(root) {
    let stk=[{node:root, p: null}];
    let lmost, rmost;
    while(stk.length>0){
        let levelNum = stk.length;
        for(let i=0;i<levelNum;i++){
            let curr = stk.shift();
            if(i===0)lmost = curr;
            if(i===levelNum-1)rmost = curr;
            if(curr.node.left){stk.push({node:curr.node.left,p:curr});}
            if(curr.node.right){stk.push({node:curr.node.right,p:curr});}
        }
    }
    
    if(lmost.node===rmost.node)return lmost.node;
    let lparent = lmost.p, rparent = rmost.p;
    while(lparent!==rparent){
        lparent = lparent.p;
        rparent = rparent.p;
    }
    return lparent.node;
};