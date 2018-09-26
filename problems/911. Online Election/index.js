// Source : https://leetcode.com/problems/online-election/description/
// Author : Dubchak Valery

/***
In an election, the i-th vote was cast for persons[i] at time times[i].

Now, we would like to implement the following query function: TopVotedCandidate.q(int t) will return the number of the person that was leading the election at time t.  

Votes cast at time t will count towards our query.  In the case of a tie, the most recent vote (among tied candidates) wins.

 

Example 1:

Input: ["TopVotedCandidate","q","q","q","q","q","q"], [[[0,1,1,0,0,1,0],[0,5,10,15,20,25,30]],[3],[12],[25],[15],[24],[8]]
Output: [null,0,1,1,0,0,1]

***/

var TopVotedCandidate  = module.exports = function(persons, times) {
  this.winningTimes = {};
  this.times = times;
  var votesCount = [];
  
  var currentWinningPerson = -1;
  var winningVotes = 0;
  for (var i = 0; i < persons.length; i++) {
    if (!votesCount[persons[i]]) {
      votesCount[persons[i]] = 0;
    };
    votesCount[persons[i]]++;
    
    if (votesCount[persons[i]] >= winningVotes) {
      winningVotes = votesCount[persons[i]];
      currentWinningPerson = persons[i];
    }
    this.winningTimes[times[i]] = currentWinningPerson;
  }
};

/** 
 * @param {number} t
 * @return {number}
 */
TopVotedCandidate.prototype.q = function(t1) {
  var p = 0;
  while (this.times[p] < t1) {
    p++;
  }
  
  if (this.times[p] === t1) {
    return this.winningTimes[this.times[p]];
  }
  return this.winningTimes[this.times[p-1]];
};