// Source : https://leetcode.com/problems/card-flipping-game/description/
// Author : Dubchak Valery

/***
On a table are N cards, with a positive integer printed on the front and back of each card (possibly different).

We flip any number of cards, and after we choose one card. 

If the number X on the back of the chosen card is not on the front of any card, then this number X is good.

What is the smallest number that is good?  If no number is good, output 0.

Here, fronts[i] and backs[i] represent the number on the front and back of card i. 

A flip swaps the front and back numbers, so the value on the front is now on the back and vice versa.

Example:

Input: fronts = [1,2,4,4,7], backs = [1,3,4,1,3]
Output: 2
***/

var flipgame  = module.exports = function(fronts, backs) {
        a = [];
        for (let i = 0; i < 2001; i++) {
            a[i] = -1;
        }
    
        n = fronts.length; 
        for(let i = 0 ; i < n; i++){
            if(fronts[i] == backs[i]) a[backs[i]] = 1;
            else{ 
                if(a[backs[i]] != 1)
                    a[backs[i]] = 0; 
                if(a[fronts[i]] != 1)
                    a[fronts[i]] = 0; 
            }
        }
        ans = 0;
        for(let i = 1; i < a.length; i++){
            if(a[i] == 0){
                ans = i; 
                break; 
            } 
        }
        return ans; 
};