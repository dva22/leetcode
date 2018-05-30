// Source : https://leetcode.com/problems/keys-and-rooms/description/

// Author : Dubchak Valery (dva@farma.amur.ru)

/***
There are N rooms and you start in room 0.  Each room has a distinct number in 0, 1, 2, ..., N-1, and each room may have some keys to access the next room. 

Formally, each room i has a list of keys rooms[i], and each key rooms[i][j] is an integer in [0, 1, ..., N-1] where N = rooms.length.  A key rooms[i][j] = v opens the room with number v.

Initially, all the rooms start locked (except for room 0). 

You can walk back and forth between rooms freely.

Return true if and only if you can enter every room.

Example 1:

Input: [[1],[2],[3],[]]
Output: true
***/

var canVisitAllRooms = module.exports = function(rooms) {
   
    function visit(i, rooms) {
        if(visited[i] == 1) {
            return;
        }
        visited[i] =1;
        for(next of rooms[i]) {
            visit(next, rooms);
        }
    }     
    
    let n = rooms.length;
    var visited = Array(n).fill(0);
    visit(0, rooms);
    for(i of visited) {
        if(i == 0) {
            return false;
        }
    }
    return true;    
};
 