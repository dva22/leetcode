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

var numMagicSquaresInside = module.exports = function(grid) {
	if(grid.length == 0) return 0;
	let n = grid.length,
	m = grid[0].length,
	ct = 0;
	for(let i = 0;i < n-2;i++){
		for(let j = 0;j < m-2;j++){
			if(check(grid, i, j)) ct++;
		}
	}
	return ct;
};

function check(a, r, c)
{
	let ptn = 0;
	for(let i = 0;i < 3;i++){
		for(let j = 0;j < 3;j++){
			ptn |= 1<<a[r+i][c+j];
		}
	}
	if(ptn != (1<<10)-2) return false;
	
	let gs = -1;
	for(let i = 0;i < 3;i++){
		let s = 0;
		for(let j = 0;j < 3;j++){
			s += a[r+j][c+i];
		}
		if(gs == -1){
			gs = s;
		}else if(gs != s){
			return false;
		}
	}
	for(let i = 0;i < 3;i++){
		let s = 0;
		for(let j = 0;j < 3;j++){
			s += a[r+i][c+j];
		}
		if(gs != s)return false;
	}
	{
		let s = 0;
		for(let i = 0;i < 3;i++){
			s += a[r+i][c+i];
		}
		if(gs != s)return false;
	}
	{
		let s = 0;
		for(let i = 0;i < 3;i++){
			s += a[r+2-i][c+i];
		}
		if(gs != s)return false;
	}
	return true;
}
 