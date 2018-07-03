// Source : https://leetcode.com/problems/all-nodes-distance-k-in-binary-tree/description/

// Author : Dubchak Valery (dva@farma.amur.ru)

/***
We are given a binary tree (with root node root), a target node, and an integer value K.

Return a list of the values of all nodes that have a distance K from the target node.  The answer can be returned in any order.

 

Example 1:

Input: root = [3,5,1,6,2,0,8,null,null,7,4], target = 5, K = 2

Output: [7,4,1]
***/

var distanceK = module.exports = function(root, target, K) {
    let res = [];
    printkdistanceNode(root, target, K);   
    return res;

function printkdistanceNodeDown (node, k) {
        if (node == null || k < 0)
            return;

        if (k == 0) {
            res.push(node.val);
            return;
        }

        printkdistanceNodeDown(node.left, k - 1);
        printkdistanceNodeDown(node.right, k - 1);
    }

function printkdistanceNode (node, target, k) {
        if (node == null)
            return -1;

        if (node == target) {
            printkdistanceNodeDown(node, k);
            return 0;
        }

        let dl = printkdistanceNode(node.left, target, k);

        if (dl != -1) {

            if (dl + 1 == k) {
                res.push(node.val);
            }

            else {
                printkdistanceNodeDown(node.right, k - dl - 2);
            }
            
            return 1 + dl;
        }

        let dr = printkdistanceNode(node.right, target, k);
        if (dr != -1) {
            if (dr + 1 == k) {
                res.push(node.val);
            } else
                printkdistanceNodeDown(node.left, k - dr - 2);
            return 1 + dr;
        }

        return -1;
    }
};