// Source : https://leetcode.com/problems/friends-of-appropriate-ages/description/
// Author : Dubchak Valery (dva@farma.amur.ru)

/***
Some people will make friend requests. The list of their ages is given and ages[i] is the age of the ith person. 

Person A will NOT friend request person B (B != A) if any of the following conditions are true:

age[B] <= 0.5 * age[A] + 7
age[B] > age[A]
age[B] > 100 && age[A] < 100
Otherwise, A will friend request B.

Note that if A requests B, B does not necessarily request A.  Also, people will not friend request themselves.

How many total friend requests are made?

Example 1:

Input: [16,16]
Output: 2
Explanation: 2 people friend request each other.
***/

var numFriendRequests = module.exports = function(ages) {
        count = [];
        for (let i = 0; i <= 120; i++) {
            count[i] = 0;
        }    
        for (age of ages) count[age]++;
        ans = 0;
        for (let ageA = 0; ageA <= 120; ageA++) {
            countA = count[ageA];
            for (let ageB = 0; ageB <= 120; ageB++) {
                countB = count[ageB];
                if (ageA * 0.5 + 7 >= ageB) continue;
                if (ageA < ageB) continue;
                if (ageA < 100 && 100 < ageB) continue;
                ans += countA * countB;
                if (ageA == ageB) ans -= countA;
            }
        }

        return ans;
};