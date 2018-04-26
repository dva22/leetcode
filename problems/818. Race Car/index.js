// Source : https://leetcode.com/problems/race-car/description/
// Author : Dubchak Valery

/***
Your car starts at position 0 and speed +1 on an infinite number line.  (Your car can go into negative positions.)

Your car drives automatically according to a sequence of instructions A (accelerate) and R (reverse).

When you get an instruction "A", your car does the following: position += speed, speed *= 2.

When you get an instruction "R", your car does the following: if your speed is positive then speed = -1 , otherwise speed = 1.  (Your position stays the same.)

For example, after commands "AAR", your car goes to positions 0->1->3->3, and your speed goes to 1->2->4->-1.

Now for some target position, say the length of the shortest sequence of instructions to get there.

Example 1:
Input: 
target = 3
Output: 2
Explanation: 
The shortest instruction sequence is "AA".
Your position goes from 0->1->3.
***/


var racecar = module.exports = function(target) {
   
    dp = [];
        for (let i = 0; i < target + 3; i++) {
            dp[i] = 9999999;
        }     
        dp[0] = 0; dp[1] = 1; dp[2] = 4;

        for (let t = 3; t <= target; t++) {
            k = 32 - Math.clz32(t);
            if (t == (1<<k) - 1) {
                dp[t] = k;
                continue;
            }
            for (let j = 0; j < k-1; j++)
                dp[t] = Math.min(dp[t], dp[t - (1<<(k-1)) + (1<<j)] + k-1 + j + 2);
            if ((1<<k) - 1 - t < t)
                dp[t] = Math.min(dp[t], dp[(1<<k) - 1 - t] + k + 1);
        }

        return dp[target];
};