// Source : https://leetcode.com/problems/subdomain-visit-count/description/
// Author : Dubchak Valery (dva@farma.amur.ru)

/***
A website domain like "discuss.leetcode.com" consists of various subdomains. At the top level, we have "com", at the next level, we have "leetcode.com", and at the lowest level, "discuss.leetcode.com". When we visit a domain like "discuss.leetcode.com", we will also visit the parent domains "leetcode.com" and "com" implicitly.

Now, call a "count-paired domain" to be a count (representing the number of visits this domain received), followed by a space, followed by the address. An example of a count-paired domain might be "9001 discuss.leetcode.com".

We are given a list cpdomains of count-paired domains. We would like a list of count-paired domains, (in the same format as the input, and in any order), that explicitly counts the number of visits to each subdomain.

Example 1:
Input: 
["9001 discuss.leetcode.com"]
Output: 
["9001 discuss.leetcode.com", "9001 leetcode.com", "9001 com"]
***/

 
var subdomainVisits = module.exports = function(cpdomains) {
	let web = new Map();

	for (d of cpdomains) {

		let domains = d.split(" ");
		let splitDomain = domains[1].split(".");

		for (let i = 0; i < splitDomain.length; i++) {

			let iDomain = splitDomain.slice(i).join(".");
			
			if (web.has(iDomain))
				web.set(iDomain, web.get(iDomain) + parseInt(domains[0], 10));
			else
				web.set(iDomain, parseInt(domains[0], 10));

		}
	}
    
	let res = [];
	for (w of web) {
		res.push(w[1]+' '+w[0]);
	}

	return res; 
};