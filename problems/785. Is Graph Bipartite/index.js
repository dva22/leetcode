// Source : https://leetcode.com/problems/is-graph-bipartite/description/
// Author : Dubchak Valery (dva@farma.amur.ru)

/***
Given an undirected graph, return true if and only if it is bipartite.

Recall that a graph is bipartite if we can split it's set of nodes into two independent subsets A and B such that every edge in the graph has one node in A and another node in B.

The graph is given in the following form: graph[i] is a list of indexes j for which the edge between nodes i and j exists.  Each node is an integer between 0 and graph.length - 1.  There are no self edges or parallel edges: graph[i] does not contain i, and it doesn't contain any element twice.

Example 1:
Input: [[1,3], [0,2], [1,3], [0,2]]
Output: true
***/

var isBipartite = module.exports = function(graph) {

    let color = [];
    
    for (let i=0;i<graph.length;i++) {
        color[i] = -1;
    }
    
    for(let i=0;i<graph.length;i++) {
        if(color[i]==-1) {
            color[i] = 0;
            let isBip = helper(graph, i, color);
            if(!isBip) return false;
        }
    }
    
    return true;
    
    function helper(graph, start, color) {
        
        for(next of graph[start]) {
            
            if(color[next]==-1) {
            
                color[next] = 1 - color[start];
                let isBip = helper(graph, next, color);
                if(!isBip) return false;
            
            }else if(color[next] == color[start]) {
                return false;
            }
        }

        return true;
    }

};