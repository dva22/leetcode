// Source : https://leetcode.com/problems/koko-eating-bananas/description/

// Author : Dubchak Valery (dva@farma.amur.ru)

/***
Koko loves to eat bananas.  There are N piles of bananas, the i-th pile has piles[i] bananas.  The guards have gone and will come back in H hours.

Koko can decide her bananas-per-hour eating speed of K.  Each hour, she chooses some pile of bananas, and eats K bananas from that pile.  If the pile has less than K bananas, she eats all of them instead, and won't eat any more bananas during this hour.

Koko likes to eat slowly, but still wants to finish eating all the bananas before the guards come back.

Return the minimum integer K such that she can eat all the bananas within H hours.

 

Example 1:

Input: piles = [3,6,7,11], H = 8
Output: 4
***/
 
var minEatingSpeed = module.exports = function(piles, H) {
    let l = 1, r = 1000000000;
        while (l < r) {
            let m =  Math.floor((l + r) / 2), total = 0;
            for (let p of piles) 
                total += Math.floor((p + m - 1) / m);
            if (total > H) 
                l = m + 1; 
            else r = m;
        }
        return l;
};