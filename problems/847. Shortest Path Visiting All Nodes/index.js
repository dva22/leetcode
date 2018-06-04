// Source : https://leetcode.com/problems/shortest-path-visiting-all-nodes/description/

// Author : Dubchak Valery (dva@farma.amur.ru)

/***
An undirected, connected graph of N nodes (labeled 0, 1, 2, ..., N-1) is given as graph.

graph.length = N, and j != i is in the list graph[i] exactly once, if and only if nodes i and j are connected.

Return the length of the shortest path that visits every node. You may start and stop at any node, you may revisit nodes multiple times, and you may reuse edges.

 

Example 1:

Input: [[1,2,3],[0],[0],[0]]
Output: 4
***/


var shortestPathLength = module.exports = function(graph) {
	var n = graph.length;
	const MAX_VALUE = Number.MAX_VALUE;

	if (n == 1) return 0;

	sp = Array(n).fill(0).map(() => Array(n).fill(MAX_VALUE));

	for (let i = 0; i < n; i++) {
		for (j of graph[i]) {
			sp[i][j] = 1;
		}
	}



	for (let k = 0; k < n; k++) 
		for (let i = 0; i < n; i++) 
			for (let j = 0; j < n; j++)            
				if (sp[i][k] < 10000 && sp[k][j] < 10000 && 
					sp[i][k] + sp[k][j] < sp[i][j])
							sp[i][j] = sp[i][k] + sp[k][j];



        //scdp
    let dp = Array(1<<n).fill(null).map(() => Array(n).fill(null));

        for (let i = 0; i < n; i++) {
        	dp[1<<i][i] = 0;
        } 
        
        let rtn = MAX_VALUE;
        for (let i = 1; i < (1<<n); i++) 
        	for (let j = 0; j < n; j++) {
        		if (dp[i][j] != null) continue;
        		if ((i & (1<<j)) == 0) continue;
        		
        		let ans = MAX_VALUE;
        		
        		for (let k = 0; k < n; k++) {
        			if (((i & (1<<k)) != 0) && sp[j][k] < 10000 && dp[(i & ~(1 << j))][k] != null)
        			{ 
        				ans = Math.min(ans, sp[j][k] + dp[(i & ~(1 << j))][k]);
        				
        			} 
        		}   

        		if (ans != MAX_VALUE) {
        			
        			dp[i][j] = ans;
        			if (i == ((1<<n) - 1))
        				rtn = Math.min(rtn, dp[i][j]);
        		}
        	
        	}

    return rtn;
}
