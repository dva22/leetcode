// Source : https://leetcode.com/problems/bitwise-ors-of-subarrays/description/
// Author : Dubchak Valery

/***
We have an array A of non-negative integers.

For every (contiguous) subarray B = [A[i], A[i+1], ..., A[j]] (with i <= j), we take the bitwise OR of all the elements in B, obtaining a result A[i] | A[i+1] | ... | A[j].

Return the number of possible results.  (Results that occur more than once are only counted once in the final answer.)

 

Example 1:

Input: [0]
Output: 1
Explanation: 
There is only one possible result: 0.

***/

var subarrayBitwiseORs = module.exports = function(A) {
    if(A.length===0) return 0;
    let prev = [A[0]];
    let res = new Set();
    res.add(A[0]);
    for(let i=1; i<A.length; i++){
        let tmp = new Set();
        tmp.add(A[i]);
        res.add(A[i]);
        for(let j=0; j<prev.length; j++){
            let o = A[i]|prev[j];
            tmp.add(o);
            res.add(o);
        }
        prev=[...tmp];
    }
    return res.size;
};