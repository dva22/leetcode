// Source : https://leetcode.com/problems/car-fleet/description/

// Author : Dubchak Valery (dva@farma.amur.ru)

/***
N cars are going to the same destination along a one lane road.  The destination is target miles away.

Each car i has a constant speed speed[i] (in miles per hour), and initial position position[i] miles towards the target along the road.

A car can never pass another car ahead of it, but it can catch up to it, and drive bumper to bumper at the same speed.

The distance between these two cars is ignored - they are assumed to have the same position.

A car fleet is some non-empty set of cars driving at the same position and same speed.  Note that a single car is also a car fleet.

If a car catches up to a car fleet right at the destination point, it will still be considered as one car fleet.


How many car fleets will arrive at the destination?

 

Example 1:

Input: target = 12, position = [10,8,0,5,3], speed = [2,4,1,1,3]
Output: 3
***/

var carFleet = module.exports = function(target, position, speed) {
    let map = [];
	let Result = 0;
    
	for(let i = 0; i < position.length; i++)
		{
			map[target - position[i]] = (target - position[i]) / speed[i];           
		}
    
	let Max = 0       
    
	for (let i of map) {            
            
		if(i > Max) {
			Result++;
			Max = i;				
		}
            
	}
		
		return Result;
};