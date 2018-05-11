// Source : https://leetcode.com/problems/add-strings/description/
// Author : Dubchak Valery (dva@farma.amur.ru)

/***
Given two non-negative integers num1 and num2 represented as string, return the sum of num1 and num2
***/
        
var addStrings = module.exports = function(num1, num2) {

    let doing = false,
    iNum1 = num1.length - 1,
    iNum2 = num2.length - 1, 
    add = 0, 
    valNum1 = 0, 
    valNum2 = 0,
    returnNum = "";

    while (iNum1 >= 0 || iNum2 >= 0 || doing) {

        if (iNum1 >=  0) valNum1 = num1.charCodeAt(iNum1)-48;

        if (iNum2 >= 0) valNum2 = num2.charCodeAt(iNum2)-48;

        if (valNum2 + valNum1 + add > 9) {
            returnNum = valNum2 + valNum1 - 10 + add + returnNum; 
            add = 1;
            doing = true;
        } else {
            returnNum = valNum2 + valNum1 + add + returnNum;
            add = 0;             
            doing = false;
        }
        
        iNum1 --;
        iNum2 --;
        valNum1 = 0;
        valNum2 = 0;

    }
    return returnNum;
    
};