// Source : https://leetcode.com/problems/cat-and-mouse/description/
// Author : Dubchak Valery

/***
A game on an undirected graph is played by two players, Mouse and Cat, who alternate turns.

The graph is given as follows: graph[a] is a list of all nodes b such that ab is an edge of the graph.

Mouse starts at node 1 and goes first, Cat starts at node 2 and goes second, and there is a Hole at node 0.

During each player's turn, they must travel along one edge of the graph that meets where they are.  For example, if the Mouse is at node 1, it must travel to any node in graph[1].

Additionally, it is not allowed for the Cat to travel to the Hole (node 0.)

Then, the game can end in 3 ways:

If ever the Cat occupies the same node as the Mouse, the Cat wins.
If ever the Mouse reaches the Hole, the Mouse wins.
If ever a position is repeated (ie. the players are in the same position as a previous turn, and it is the same player's turn to move), the game is a draw.
Given a graph, and assuming both players play optimally, return 1 if the game is won by Mouse, 2 if the game is won by Cat, and 0 if the game is a draw.

 

Example 1:

Input: [[2,5],[3],[0,4,5],[1,4,5],[2,3],[0,2,3]]
Output: 0

***/

var catMouseGame = module.exports = function(g) {
            let n = g.length;
	        let win = Array(2).fill(0).map(()=>Array(n*n).fill(0));
	        // mc
	        for(let i = 0;i < n;i++){
	        	win[0][i] = 1;
	        	win[1][i] = 1;
	        }
	        for(let i = 1;i < n;i++){
	        	win[0][i*n+i] = 2;
	        	win[1][i*n+i] = 2;
	        }
	        
	        while(true){
	        	let anew = false;
		        for(let m = 0;m < n;m++){
		        	inner:
		        	for(let c = 1;c < n;c++){
		        		if(win[0][m*n+c] == 0){
		        			let und = false;
		        			for(let e of g[m]){
		        				if(win[1][e*n+c] == 1){
		        					win[0][m*n+c] = 1;
			        				anew = true;
		        					continue inner;
		        				}
		        				if(win[1][e*n+c] == 0){
		        					und = true;
		        				}
		        			}
		        			if(!und){
		        				win[0][m*n+c] = 2;
		        				anew = true;
		        			}
		        		}
		        	}
		        }
	        	for(let c = 1;c < n;c++){
		        	inner:
	    	        for(let m = 0;m < n;m++){
		        		if(win[1][m*n+c] == 0){
		        			let und = false;
		        			for(e of g[c]){
		        				if(e == 0)continue;
		        				if(win[0][m*n+e] == 2){
		        					win[1][m*n+c] = 2;
			        				anew = true;
		        					continue inner;
		        				}
		        				if(win[0][m*n+e] == 0){
		        					und = true;
		        				}
		        			}
		        			if(!und){
		        				win[1][m*n+c] = 1;
		        				anew = true;
		        			}
		        		}
		        	}
		        }
	        	if(!anew)break;
	        }
	        
	        return win[0][1*n+2];
	    
};