// Source : https://leetcode.com/problems/maximum-frequency-stack/description/
// Author : Dubchak Valery

/***
Implement FreqStack, a class which simulates the operation of a stack-like data structure.

FreqStack has two functions:

push(int x), which pushes an integer x onto the stack.
pop(), which removes and returns the most frequent element in the stack.
If there is a tie for most frequent element, the element closest to the top of the stack is removed and returned.
 

Example 1:

Input: 
["FreqStack","push","push","push","push","push","push","pop","pop","pop","pop"],
[[],[5],[7],[5],[7],[4],[5],[],[],[],[]]
Output: [null,null,null,null,null,null,null,5,7,5,4]

***/

var FreqStack = module.exports  = function() {
    this.stack = Array.from({length:10001}, x=>[]);
    this.top = 0;
    this.f={};
};
FreqStack.prototype.push = function(x) {
    if(!this.f[x]) this.f[x]=0;
    this.f[x]++;
    if(this.f[x]>this.top) this.top=this.f[x];
    this.stack[this.f[x]].push(x);
};
FreqStack.prototype.pop = function() {
	let res = this.stack[this.top].pop();
	if(this.stack[this.top].length===0) this.top--;
	this.f[res]--;
	return res;
};