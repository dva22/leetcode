// Source : https://leetcode.com/problems/shifting-letters/description/

// Author : Dubchak Valery (dva@farma.amur.ru)

/***
We have a string S of lowercase letters, and an integer array shifts.

Call the shift of a letter, the next letter in the alphabet, (wrapping around so that 'z' becomes 'a'). 

For example, shift('a') = 'b', shift('t') = 'u', and shift('z') = 'a'.

Now for each shifts[i] = x, we want to shift the first i+1 letters of S, x times.

Return the final string after all such shifts to S are applied.

Example 1:

Input: S = "abc", shifts = [3,5,9]
Output: "rpl"
***/

var shiftingLetters = module.exports = function(S, shifts) {
        let sh = 0;
        s = ''
    
        for(let i = S.length-1; i >= 0; i--) {
         
            sh = (sh+shifts[i]) % 26;
            
            s = String.fromCharCode('a'.charCodeAt(0) + (S[i].charCodeAt(0)-'a'.charCodeAt(0)+sh) % 26) + s;
       
        }
    
        return s;
};
