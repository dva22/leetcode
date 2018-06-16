// Source : https://leetcode.com/problems/maximize-distance-to-closest-person/description/

// Author : Dubchak Valery (dva@farma.amur.ru)

/***
In a row of seats, 1 represents a person sitting in that seat, and 0 represents that the seat is empty. 

There is at least one empty seat, and at least one person sitting.

Alex wants to sit in the seat such that the distance between him and the closest person to him is maximized. 

Return that maximum distance to closest person.

Example 1:

Input: [1,0,0,0,1,0,1]
Output: 2
***/

var maxDistToClosest = module.exports = function(seats) {

    let maxLength = 0,
    count = 0,
    N = seats.length;
    
    for (i of seats) {
        
        if (i == 0) count++;
        if (i == 1) count = 0;

        maxLength = Math.max((count + 1) / 2, maxLength);
    }

    for (let i = 0; i < N; i++)  
        if (seats[i] == 1) {
            maxLength = Math.max(maxLength, i);
            break;
        }

    for (let i = N - 1; i >= 0; i--)  
        if (seats[i] == 1) {
            maxLength = Math.max(maxLength, N - 1 - i);
            break;
        }
   
    return  Math.round(maxLength) > maxLength 
            ? 
            Math.round(maxLength)-1 
            : 
            Math.round(maxLength);
    
};