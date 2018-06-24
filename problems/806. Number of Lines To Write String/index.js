// Source : https://leetcode.com/problems/number-of-lines-to-write-string/description/

// Author : Dubchak Valery (dva@farma.amur.ru)

/***
We are to write the letters of a given string S, from left to right into lines. Each line has maximum width 100 units, and if writing a letter would cause the width of the line to exceed 100 units, it is written on the next line. We are given an array widths, an array where widths[0] is the width of 'a', widths[1] is the width of 'b', ..., and widths[25] is the width of 'z'.

Now answer two questions: how many lines have at least one character from S, and what is the width used by the last such line? Return your answer as an integer list of length 2.

 

Example :
Input: 
widths = [10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10]
S = "abcdefghijklmnopqrstuvwxyz"
Output: [3, 60]
***/

var numberOfLines = module.exports = function(widths, S) {
    let sum = 0, 
    line = 1;
    
    for (v of S){
        cw = widths[v.charCodeAt(0)-97]
        sum += cw
        if (sum > 100){
            sum = cw
            line += 1
        }  
    }
    
    return [line, sum]
};