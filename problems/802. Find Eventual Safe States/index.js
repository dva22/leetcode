// Source : https://leetcode.com/problems/split-array-into-fibonacci-sequence/description/

// Author : Dubchak Valery (dva@farma.amur.ru)

/***
Given a string S of digits, such as S = "123456579", we can split it into a Fibonacci-like sequence [123, 456, 579].

Formally, a Fibonacci-like sequence is a list F of non-negative integers such that:

0 <= F[i] <= 2^31 - 1, (that is, each integer fits a 32-bit signed integer type);
F.length >= 3;
and F[i] + F[i+1] = F[i+2] for all 0 <= i < F.length - 2.
Also, note that when splitting the string into pieces, each piece must not have extra leading zeroes, except if the piece is the number 0 itself.

Return any Fibonacci-like sequence split from S, or return [] if it cannot be done.

Example 1:

Input: "123456579"
Output: [123,456,579]
***/



var eventualSafeNodes = module.exports = function(graph) {

	let N = graph.length;
	let color = Array(N).fill(0);
	let res = [];

	for (let i = 0; i < N; i++) {
		if (dfs(i, color, graph))
			res.push(i);
	}
	return res;
}

function dfs (i, color, graph) {
	
	if (color[i] > 0) {
		return color[i] == 2;
	}

	color[i] = 1;	
	
	for (neighbor of graph[i]) {
	
		if (color[neighbor] == 2) continue;

		if (color[neighbor] == 1 || !dfs(neighbor, color, graph)) 
			return false;
	}

	color[i] = 2;
	
	return true;
}
