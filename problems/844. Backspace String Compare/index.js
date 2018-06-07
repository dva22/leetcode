// Source : https://leetcode.com/problems/backspace-string-compare/description/

// Author : Dubchak Valery (dva@farma.amur.ru)

/***
Given two strings S and T, return if they are equal when both are typed into empty text editors. # means a backspace character.

Example 1:

Input: S = "ab#c", T = "ad#c"
Output: true
***/

var backspaceCompare = module.exports = function(S, T) {
 
    function reformatString(s) {    
        let res = []
	    let str = s.split('')
	    for (let i = 0; i < str.length; i++) {
		    if(str[i] != '#') {
			    res.push(str[i])
		    }
		    else if(str[i] == '#') {
			    res.pop()
		    }
	    }
	    return res.join('')
    
    };
    
    return reformatString(S) === reformatString(T);
};
