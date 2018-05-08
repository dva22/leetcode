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
        
var maskPII = module.exports = function(S) {
        
        String.prototype.replaceAll = function(search, replace){
            return this.split(search).join(replace);
        }

        let atIndex = S.indexOf('@');
        if (atIndex >= 0) { // email
            return (S.substring(0, 1) + "*****" + S.substring(atIndex - 1)).toLowerCase();
        } else { // phone
            digits = S.replaceAll(new RegExp("\\D+"), "");
            local = "***-***-" + digits.substring(digits.length - 4);

            if (digits.length == 10) return local;
            ans = "+";

            for (let i = 0; i < digits.length - 10; i++)
                ans += "*";
            return ans + "-" + local;
        }
    
};