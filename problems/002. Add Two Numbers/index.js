// Source : https://leetcode.com/problems/add-two-numbers/description/
// Author : Dubchak Valery

/***
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example

Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807.
***/


var addTwoNumbers = module.exports = function(l1, l2) {
    let summ = 0,
    	returnList = [];
        tmpL1 = l1,
        tmpL2 = l2,
        valL1 = 0,
        valL2 = 0;
    while (tmpL1 != null || tmpL2 != null ) {
        
        valL1 = 0;
        valL2 = 0;
        
        if (tmpL1 != null) {
            valL1 = tmpL1.val;
            tmpL1 = tmpL1.next;
        };
        if (tmpL2 != null) {
            valL2 = tmpL2.val;
            tmpL2 = tmpL2.next;
        }
        summ = valL1 + valL2 + summ;
    	if (summ > 9) {
    		returnList.push(summ-10);
    		summ = 1;
    	} else {
    		returnList.push(summ);
    		summ = 0;
    	} 
        
    }
    if (summ == 1) {
        returnList.push(summ);
    }
    return returnList;
};