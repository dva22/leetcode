// Source : https://leetcode.com/problems/jewels-and-stones/description/
// Author : Dubchak Valery

/***
You're given strings J representing the types of stones that are jewels, and S representing the stones you have.  Each character in S is a type of stone you have.  You want to know how many of the stones you have are also jewels.

The letters in J are guaranteed distinct, and all characters in J and S are letters. Letters are case sensitive, so "a" is considered a different type of stone from "A".

Example 1:

Input: J = "aA", S = "aAAbbbb"
Output: 3
***/

var numJewelsInStones = module.exports = function(J, S) {
    let res=0;
       for(c of S){
           if(J.indexOf(c) != -1){
               res++;
           }
       }
       return res;
};