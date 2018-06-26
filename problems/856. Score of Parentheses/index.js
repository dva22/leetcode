// Source : https://leetcode.com/problems/score-of-parentheses/description/

// Author : Dubchak Valery (dva@farma.amur.ru)

/***
Given a balanced parentheses string S, compute the score of the string based on the following rule:

() has score 1
AB has score A + B, where A and B are balanced parentheses strings.
(A) has score 2 * A, where A is a balanced parentheses string.
 

Example 1:

Input: "()"
Output: 1
***/

var scoreOfParentheses = module.exports = function(S) {
        if(S.length == 0) return 0;
    
        if(S.charAt(0) == '(' && S.charAt(1) == ')') {
            return 1 + scoreOfParentheses(S.substring(2));
        }
    
        let d = 0;
        let end = -1;
    
        for(let i = 0; i < S.length; i++) {
            if(S.charAt(i) == '(') d++;
            else d--;
            if(d == 0) {
                end = i+1;
                break;
            }
        }
    
        return 2 * scoreOfParentheses(S.substring(1, end-1)) + scoreOfParentheses(S.substring(end));
}