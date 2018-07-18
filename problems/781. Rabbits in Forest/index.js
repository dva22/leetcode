// Source : https://leetcode.com/problems/rabbits-in-forest/description/
// Author : Dubchak Valery (dva@farma.amur.ru)

/***
In a forest, each rabbit has some color. Some subset of rabbits (possibly all of them) tell you how many other rabbits have the same color as them. Those answers are placed in an array.

Return the minimum number of rabbits that could be in the forest.

Examples:
Input: answers = [1, 1, 2]
Output: 5
***/

var numRabbits = module.exports = function(answers) {
    
    let map = [];
    
    for (let  i of answers) 
        if (map[i])
            map[i]++;
        else
            map[i]=1;
    
    let res = 0;
    
    for (let i = 0; i< map.length; i++) 
        if (map[i] > 0)        
            res += Math.floor((map[i] + i) / (i + 1))* (i + 1) ;
    
    return res;    
};