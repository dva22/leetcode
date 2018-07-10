// Source : https://leetcode.com/problems/prime-palindrome/description/

// Author : Dubchak Valery (dva@farma.amur.ru)

/***
Find the smallest prime palindrome greater than or equal to N.

Recall that a number is prime if it's only divisors are 1 and itself, and it is greater than 1. 

For example, 2,3,5,7,11 and 13 are primes.

Recall that a number is a palindrome if it reads the same from left to right as it does from right to left. 

For example, 12321 is a palindrome.

 

Example 1:

Input: 6
Output: 7
***/

var primePalindrome = module.exports = function(N) {
	if(N<=2) return 2;
	let cur = N;
	while(!isPal(cur)) cur++;
	while(true){
		if(isPrime(cur)) return cur;
		cur = nextPal(cur);
	}
};
function isPal(n){
	return (''+n)===(''+n).split('').reverse().join('');
}
function nextPal(n){
	let s = (''+n), len = s.length, half = Math.ceil(len/2);
	let left=s.slice(0,half);
	let tmp = (+left+1)+'';
	if(half===len-half){
		return +(tmp+tmp.slice(0,half).split('').reverse().join('')); //66->77 99->101
	}else{
		if(tmp.length===half) return +(tmp+tmp.slice(0,len-half).split('').reverse().join(''));// 888->898
		else return +(tmp.slice(0,half)+tmp.slice(0,half).split('').reverse().join(''));// 999->1001
	}
}
function isPrime(n){
	if(n%2===0) return false;
	for(let i=3; i*i<=n; i+=2){
		if(n%i===0) return false;
	}
	return true;
}