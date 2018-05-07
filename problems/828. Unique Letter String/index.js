// Source : https://leetcode.com/problems/unique-letter-string/description/
// Author : Dubchak Valery (dva@farma.amur.ru)

/***
A character is unique in string S if it occurs exactly once in it.

For example, in string S = "LETTER", the only unique characters are "L" and "R".

Let's define UNIQ(S) as the number of unique characters in string S.

For example, UNIQ("LETTER") =  2.

Given a string S, calculate the sum of UNIQ(substring) over all non-empty substrings of S.

If there are two or more equal substrings at different positions in S, we consider them different.

Since the answer can be very large, retrun the answer modulo 10 ^ 9 + 7.

 

Example 1:

Input: "ABC"
Output: 10
***/
        
var uniqueLetterString = module.exports = function(S) {   
   
    let M = 1000000007;
    let cur = [];
    let prev = [];
    
    for (let i = 0; i < 128; i++) {
        cur[i] = -1;
    }
    
    for (let i = 0; i < 128; i++) {
        prev[i] = -1;
    }
    
    let count = 0;
    let sum = 0;
    for (let i = 0; i < S.length; i++) {
        k = S.charCodeAt(i);
        count += i - cur[k] - (cur[k] - prev[k]);
        prev[k] = cur[k];
        cur[k] = i;
        sum = (sum + count) % M;
    }   
  
    return sum;    
};