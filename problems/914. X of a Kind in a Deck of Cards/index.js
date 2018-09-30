// Source : https://leetcode.com/problems/x-of-a-kind-in-a-deck-of-cards/description/
// Author : Dubchak Valery

/***
In a deck of cards, each card has an integer written on it.

Return true if and only if you can choose X >= 2 such that it is possible to split the entire deck into 1 or more groups of cards, where:

Each group has exactly X cards.
All the cards in each group have the same integer.
 

Example 1:

Input: [1,2,3,4,4,3,2,1]
Output: true

***/

const hasGroupsSizeX  = module.exports = (deck) => {
  const cardCountMap = {}
  
  for(let i = 0; i < deck.length; i++) {
    if(cardCountMap[deck[i]] === undefined) { cardCountMap[deck[i]] = 1 }
    else cardCountMap[deck[i]]++
  }
  
  const cardKeys = Object.keys(cardCountMap)
  let res = cardCountMap[cardKeys[0]]
  for(let i = 1; i < cardKeys.length;i++) {
    let count = cardCountMap[cardKeys[i]]
    res = findGCD(res,count)
  }
  
  return res >= 2
}

const findGCD = (num1, num2) => {
  if(num2 === 0)  return num1
  return findGCD(num2, num1 % num2)
}