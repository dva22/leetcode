// Source : https://leetcode.com/problems/walking-robot-simulation/description/

// Author : Dubchak Valery (dva@farma.amur.ru)

/***
A robot on an infinite grid starts at point (0, 0) and faces north.  The robot can receive one of three possible types of commands:

-2: turn left 90 degrees
-1: turn right 90 degrees
1 <= x <= 9: move forward x units
Some of the grid squares are obstacles. 

The i-th obstacle is at grid point (obstacles[i][0], obstacles[i][1])

If the robot would try to move onto them, the robot stays on the previous grid square instead (but still continues following the rest of the route.)

Return the square of the maximum Euclidean distance that the robot will be from the origin.

 

Example 1:

Input: commands = [4,-1,3], obstacles = []
Output: 25
***/

var robotSim = module.exports = function(commands, obstacles) {
    var obstaclesDic = Object.create(null);
    obstacles.forEach(x => obstaclesDic[x[0] + "-" + x[1]] = true);
    
    var directions = [[0,1],[1,0],[0,-1],[-1,0]];
    var currectDirection = 0;
    var current = [0, 0];
    var max = 0;
    
    for (var i = 0; i < commands.length; i++) {
        switch (commands[i]) {
            case -2:
                if (currectDirection === 0) {
                    currectDirection = directions.length - 1;
                } else {
                    currectDirection--;
                }
                break;
            case -1:
                currectDirection = (currectDirection + 1) % directions.length;
                break;
            default:
                for (var j = 0; j < commands[i]; j++) {
                    if (obstaclesDic[(current[0] + directions[currectDirection][0]) + "-" +
                                     (current[1] + directions[currectDirection][1])]) {
                        break;
                    }
                    
                    current[0] += directions[currectDirection][0];
                    current[1] += directions[currectDirection][1];
                }
                break;
        }
        
        if (commands[i] > 0) {
            max = Math.max(max, Math.pow(current[0], 2) + Math.pow(current[1], 2));
        }
    }
    
    return max;
};