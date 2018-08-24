// Source : https://leetcode.com/problems/prime-number-of-set-bits-in-binary-representation/description/
// Author : Dubchak Valery

/***
Given two integers L and R, find the count of numbers in the range [L, R] (inclusive) having a prime number of set bits in their binary representation.

(Recall that the number of set bits an integer has is the number of 1s present when written in binary. For example, 21 written in binary is 10101 which has 3 set bits. Also, 1 is not a prime.)

Example 1:

Input: L = 6, R = 10
Output: 4
***/

var countPrimeSetBits = module.exports = function(L, R) {
    let res = 0;
        for(let i = L; i <= R;i++){
            let count = bitCount(i);
            res+= count < 4 ? (count > 1 ? 1 : 0) : (count %3 !=0 && count%2 !=0 ? 1 : 0); 
        }
        return res;
};

function bitCount(u) {
  const uCount = u - ((u >> 1) & 0o33333333333) - ((u >> 2) & 0o11111111111);
  return ((uCount + (uCount >> 3)) & 0o30707070707) % 63;
}