// Source : https://leetcode.com/problems/ambiguous-coordinates/description/
// Author : Dubchak Valery (dva@farma.amur.ru)

/***
We had some 2-dimensional coordinates, like "(1, 3)" or "(2, 0.5)".  Then, we removed all commas, decimal points, and spaces, and ended up with the string S.  Return a list of strings representing all possibilities for what our original coordinates could have been.

Our original representation never had extraneous zeroes, so we never started with numbers like "00", "0.0", "0.00", "1.0", "001", "00.01", or any other number that can be represented with less digits.  Also, a decimal point within a number never occurs without at least one digit occuring before it, so we never started with numbers like ".1".

The final answer list can be returned in any order.  Also note that all coordinates in the final answer have exactly one space between them (occurring after the comma.)

Example 1:
Input: "(123)"
Output: ["(1, 23)", "(12, 3)", "(1.2, 3)", "(1, 2.3)"]
***/

var ambiguousCoordinates = module.exports = function(S) {
  
        let n = S.length;
        let res = [];
        let A = [];
        let B = [];
        for (let i = 1; i < n - 2; i++) {        
            A = f(S.substring(1, i + 1));        
            B = f(S.substring(i + 1, n - 1));
            
            for (a of A)  
                for (b of B) 
                    res.push("(" + a + ", " + b + ")");
        }
        return res;
            
};
var f = function (S) {
        let n = S.length;
        let res = [];
        if (n == 0 || (n > 1 && S.charAt(0) == '0' && S.charAt(n - 1) == '0')) return res;
        if (n > 1 && S.charAt(0) == '0') {
            res.push("0." + S.substring(1));
            return res;
        }
        res.push(S);
        if (n == 1 || S.charAt(n - 1) == '0') return res;
        for (let i = 1; i < n; i++) 
            res.push(S.substring(0, i) + '.' + S.substring(i));
        return res;
    }