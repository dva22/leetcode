// Source : https://leetcode.com/problems/reordered-power-of-2/description/

// Author : Dubchak Valery (dva@farma.amur.ru)

/***
Starting with a positive integer N, we reorder the digits in any order (including the original order) such that the leading digit is not zero.

Return true if and only if we can do this in a way such that the resulting number is a power of 2.

 

Example 1:

Input: 1
Output: true
***/


var reorderedPowerOf2 = module.exports = function(N) {

    for (let i = 0, c = count(N); i < 32; i++)
        if (count(1 << i) == c) return true;

    return false;
        
    function count(N) {
        let res = 0;
        
        for (; N > 0; N = Math.floor(N/10)) 
            res += Math.floor(Math.pow(10, N % 10));
        
        return res;
    }    
    
};