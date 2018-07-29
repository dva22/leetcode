// Source : https://leetcode.com/problems/middle-of-the-linked-list/description/

// Author : Dubchak Valery (dva@farma.amur.ru)

/***
Given a non-empty, singly linked list with head node head, return a middle node of linked list.

If there are two middle nodes, return the second middle node.

 

Example 1:

Input: [1,2,3,4,5]
Output: Node 3 from this list (Serialization: [3,4,5])
***/
 
var middleNode = module.exports = function(head) {
    let n = 0;
	for(let x = head; x != null; x = x.next, n++);
	        
	let m = Math.floor(n/2);
	let y = head;
	for(let i = 0;i < m;i++, y = y.next);
	return y;        
};