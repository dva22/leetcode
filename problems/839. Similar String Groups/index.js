// Source : https://leetcode.com/problems/similar-string-groups/description/

// Author : Dubchak Valery (dva@farma.amur.ru)

/***
Two strings X and Y are similar if we can swap two letters (in different positions) of X, so that it equals Y.

For example, "tars" and "rats" are similar (swapping at positions 0 and 2), and "rats" and "arts" are similar, but "star" is not similar to "tars", "rats", or "arts".

Together, these form two connected groups by similarity: {"tars", "rats", "arts"} and {"star"}.  Notice that "tars" and "arts" are in the same group even though they are not similar.  Formally, each group is such that a word is in the group if and only if it is similar to at least one other word in the group.

We are given a list A of unique strings.  Every string in A is an anagram of every other string in A.  How many groups are there?

Example 1:

Input: ["tars","rats","arts","star"]
Output: 2
***/

var numSimilarGroups = module.exports = function(A) {
    let N = A.length;
        let adj = Array(N).fill(0).map(() => Array(N).fill(0));

        let nadj = Array(N).fill(0);
        let pos = Array(2).fill(0);
        for (let i = 0; i < N; ++i) {
        	let len = A[i].length;
        	for (let j = i + 1; j < N; ++j) {
            	let index = 0;
            	let good = true;
        		for (let k = 0; k < len; ++k) {
        			if (A[i].charAt(k) != A[j].charAt(k)) {
        				if (index >= 2) {
        					good = false;
        					break;
        				}
        				pos[index++] = k;
        			}
        		}
            	if (good && index == 2 && A[i].charAt(pos[0]) == A[j].charAt(pos[1]) && A[i].charAt(pos[1]) == A[j].charAt(pos[0])) {
            		adj[i][nadj[i]++] = j;
            		adj[j][nadj[j]++] = i;
            	}
        	}
        }
        let res = 0;
        let visited = Array(N).fill(false);
        for (let i = 0; i < N; ++i) {
        	if (!visited[i]) {
        		++res;
        		DFS(i, visited, adj, nadj);
        	}
        }
        return res;
   
    
    function DFS(pos, visited, adj, nadj) {
    	if (visited[pos]) return;
    	visited[pos] = true;
    	for (let i = 0; i < nadj[pos]; ++i) {
    		DFS(adj[pos][i], visited, adj, nadj);
    	}
    }
};
 