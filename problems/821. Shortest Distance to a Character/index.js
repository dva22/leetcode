// Source : https://leetcode.com/problems/shortest-distance-to-a-character/description/
// Author : Dubchak Valery

/***
Given a string S and a character C, return an array of integers representing the shortest distance from the character C in the string.

Example 1:

Input: S = "loveleetcode", C = 'e'
Output: [3, 2, 1, 0, 1, 0, 0, 1, 2, 2, 1, 0]
***/


var shortestToChar = module.exports = function(S, C) {
     let indexOfC = S.split('').reduce((a,val,i)=>{
     if(val==C)
        a.push(i+1)
     return a
 },[]);
 
 let result = S.split('').reduce((a,val,i)=>{
     let num = i+1;
     let min = Math.min.apply(null,indexOfC.map((val,i)=>{
         return Math.abs(num-val);
     }))

     a.push(min);
     return a;
 },[]);

 return result
};