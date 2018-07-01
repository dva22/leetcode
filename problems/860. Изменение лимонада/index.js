// Source : https://leetcode.com/problems/custom-sort-string/description/

// Author : Dubchak Valery (dva@farma.amur.ru)

/***
S and T are strings composed of lowercase letters. In S, no letter occurs more than once.

S was sorted in some custom order previously. We want to permute the characters of T so that they match the order that S was sorted. More specifically, if x occurs before y in S, then x should occur before y in the returned string.

Return any permutation of T (as a string) that satisfies this property.

Example :
Input: 
S = "cba"
T = "abcd"
Output: "cbad"
***/


var lemonadeChange = module.exports = function(bills) {
    let money = [];
    money[5]=0;
    money[10]=0;
    money[20]=0;
    for (i of bills) {
        if (i == 5) money[5]++;

        if (i == 10) {
            if (money[5] > 0) {
                money[5]--;
                money[10]++;
            } else return false;
        }

        if (i == 20) {
            if (money[10] > 0) {
                if (money[5]>0) {
                    money[5]--;
                    money[10]--;
                    money[20]++
                } else return false;
            } else if (money[5]>2){
                money[5]=money[5]-3;
            } else return false
        }

    }
    return true;
    
};