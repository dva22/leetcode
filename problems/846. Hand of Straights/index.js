// Source : https://leetcode.com/problems/hand-of-straights/description/

// Author : Dubchak Valery (dva@farma.amur.ru)

/***
Alice has a hand of cards, given as an array of integers.

Now she wants to rearrange the cards into groups so that each group is size W, and consists of W consecutive cards.

Return true if and only if she can.

 

Example 1:

Input: hand = [1,2,3,6,2,3,4,7,8], W = 3
Output: true
***/


var isNStraightHand = module.exports = function(hand, W) {
	
	if (hand.length % W != 0) return false;
	let m = new Map();

	for(let i=0; i<hand.length; i++) {
		m[hand[i]] = 0;
	}

	for(let i=0; i<hand.length; i++) {
		m[hand[i]]++;
	}	

	hand.sort((a, b) => a - b);	

	for(let i=0; i<hand.length; i++) {
		
		if (m[hand[i]] > 0) {
			for(let j=0; j<W; j++) {
				if (m[hand[i]+j]>0)
					m[hand[i]+j]--;
				else 
					return false;
			}
		}            
	}

	return true;
};
