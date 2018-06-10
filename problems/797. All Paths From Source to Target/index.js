// Source : https://leetcode.com/problems/all-paths-from-source-to-target/description/

// Author : Dubchak Valery (dva@farma.amur.ru)

/***
Given a directed, acyclic graph of N nodes.  Find all possible paths from node 0 to node N-1, and return them in any order.

The graph is given as follows:  the nodes are 0, 1, ..., graph.length - 1.  graph[i] is a list of all nodes j for which the edge (i, j) exists.

Example:
Input: [[1,2], [3], [3], []] 
Output: [[0,1,3],[0,2,3]] 
***/

var allPathsSourceTarget = module.exports = function(graph) {
    var res = [];
    var path = [];  
					
    path.push(0);
   
    dfsSearch(0); 
    
    function dfsSearch(node) {
         
        if (node == graph.length - 1) {           
            res.push(path.slice(0));           
        } else
            for (nextNode of graph[node]) {
                path.push(nextNode);
                dfsSearch(nextNode);
                path.pop();
            }
    }
    return res;
};
