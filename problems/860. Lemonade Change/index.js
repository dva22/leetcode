// Source : https://leetcode.com/problems/lemonade-change/description/

// Author : Dubchak Valery (dva@farma.amur.ru)

/***
At a lemonade stand, each lemonade costs $5. 

Customers are standing in a queue to buy from you, and order one at a time (in the order specified by bills).

Each customer will only buy one lemonade and pay with either a $5, $10, or $20 bill.  You must provide the correct change to each customer, so that the net transaction is that the customer pays $5.

Note that you don't have any change in hand at first.

Return true if and only if you can provide every customer with correct change.

 

Example 1:

Input: [5,5,5,10,20]
Output: true
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