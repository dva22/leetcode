// Source : https://leetcode.com/problems/binary-trees-with-factors/description/
// Author : Dubchak Valery

/***
Given an array of unique integers, each integer is strictly greater than 1.

We make a binary tree using these integers and each number may be used for any number of times.

Each non-leaf node's value should be equal to the product of the values of it's children.

How many binary trees can we make?  Return the answer modulo 10 ** 9 + 7.

Example 1:

Input: A = [2, 4]
Output: 3
Explanation: We can make these trees: [2], [4], [4, 2, 2]
Example 2:

Input: A = [2, 4, 5, 10]
Output: 7
***/

var numFactoredBinaryTrees = module.exports = function(A) {
        mod = 1000000007;
        A.sort(function(a, b) {
                return a - b;
               });
        let map = new Map();
        
        res = 0; tmp = 0;
        for(let i=0; i<A.length; i++) {
            tmp = 1;
            for(let j=0; j<i; j++) {
                if(A[i]%A[j] == 0 && map.get(A[i]/A[j]) != null) {
                     tmp = (tmp+map.get(A[j])*map.get(A[i]/A[j]))%mod;
                }
            }
            map.set(A[i], tmp);
            res = (res +tmp) %mod;
        }
        return res;
};