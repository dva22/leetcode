// Source : https://leetcode.com/problems/minimum-number-of-refueling-stops/description/

// Author : Dubchak Valery (dva@farma.amur.ru)

/***
A car travels from a starting position to a destination which is target miles east of the starting position.

Along the way, there are gas stations.  Each station[i] represents a gas station that is station[i][0] miles east of the starting position, and has station[i][1] liters of gas.

The car starts with an infinite tank of gas, which initially has startFuel liters of fuel in it.  It uses 1 liter of gas per 1 mile that it drives.

When the car reaches a gas station, it may stop and refuel, transferring all the gas from the station into the car.

What is the least number of refueling stops the car must make in order to reach its destination?  If it cannot reach the destination, return -1.

Note that if the car reaches a gas station with 0 fuel left, the car can still refuel there.  If the car reaches the destination with 0 fuel left, it is still considered to have arrived.

 

Example 1:

Input: target = 1, startFuel = 1, stations = []
Output: 0
***/

var minRefuelStops = module.exports = function(target, startFuel, s) {
        dp = Array(s.length + 1).fill(0);
        dp[0] = startFuel;
        for (let i = 0; i < s.length; ++i)
            for (let t = i; t >= 0 && dp[t] >= s[i][0]; --t)
                dp[t + 1] = Math.max(dp[t + 1], dp[t] + s[i][1]);
        for (let t = 0; t <= s.length; ++t)
            if (dp[t] >= target) return t;
        return -1;
};