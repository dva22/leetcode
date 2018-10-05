// Source : https://leetcode.com/problems/possible-bipartition/description/

// Author : Dubchak Valery (dva@farma.amur.ru)

/***
Given a set of N people (numbered 1, 2, ..., N), we would like to split everyone into two groups of any size.

Each person may dislike some other people, and they should not go into the same group. 

Formally, if dislikes[i] = [a, b], it means it is not allowed to put the people numbered a and b into the same group.

Return true if and only if it is possible to split everyone into two groups in this way.

 

Example 1:

Input: N = 4, dislikes = [[1,2],[1,3],[2,4]]
Output: true
***/

var possibleBipartition = module.exports = function(N, dislikes) {
    if (!dislikes || !dislikes.length) return true;
    
    const graph = createGraph(dislikes);
    const queue = [];
    
    graph[dislikes[0][0]].color = 'red';
    queue.push(graph[dislikes[0][0]]);
    
    while(queue.length) {
        const node = queue.shift();
        
        for (let i = 0; i < node.dislikes.length; i++) {
            if (node.dislikes[i].color && node.dislikes[i].color === node.color) {
                return false;
            }
            else if (!node.dislikes[i].color) {
                node.dislikes[i].color = node.color === 'red' ? 'blue' : 'red';
                queue.push(node.dislikes[i]);
            }
        }
    }
    
    return true;
};

var createGraph = function(dislikes) {
    const graph = {};
    for (let i = 0; i < dislikes.length; i++) {
        let nodeA = {val: dislikes[i][0], color: null, dislikes: []};
        let nodeB = {val: dislikes[i][1], color: null, dislikes: []};
        
        if (graph[dislikes[i][0]]) nodeA = graph[dislikes[i][0]];
        else graph[dislikes[i][0]] = nodeA;
        if (graph[dislikes[i][1]]) nodeB = graph[dislikes[i][1]];
        else graph[dislikes[i][1]] = nodeB;
        
        nodeA.dislikes.push(nodeB);
        nodeB.dislikes.push(nodeA);
    }
    
    return graph;
};