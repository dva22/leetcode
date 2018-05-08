// Source : https://leetcode.com/problems/positions-of-large-groups/description/
// Author : Dubchak Valery (dva@farma.amur.ru)

/***
In a string S of lowercase letters, these letters form consecutive groups of the same character.

For example, a string like S = "abbxxxxzyy" has the groups "a", "bb", "xxxx", "z" and "yy".

Call a group large if it has 3 or more characters.  We would like the starting and ending positions of every large group.

The final answer should be in lexicographic order.
 

Example 1:

Input: "abbxxxxzzy"
Output: [[3,6]]
***/
        
var largeGroupPositions = module.exports = function(S) {

    let previus = S[0],
    startGroup = 0,
    endGroup = 0,
    returnVar = [];
    for (var i = 1; i < S.length; i++) {
        if (S[i] == previus) {
            endGroup = i;
        } else {

            if (endGroup - startGroup >=2) returnVar.push([startGroup, endGroup]);

            startGroup = endGroup = i;
            previus = S[i];
        }
    }

    if (endGroup - startGroup >=2) returnVar.push([startGroup, endGroup]);
    
    return returnVar;

    
};