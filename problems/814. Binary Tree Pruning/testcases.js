var ListNode = require('../../structures/ListNode');
var buildTree = require('../../structures/TreeNode');

module.exports = [
  {
    input: [buildTree([1,1,0,0,1])],
    output: [buildTree([1,null,0,null,1])]// ListNode.generateList(807),
  },
  {
    input: [ListNode.generateList(999), ListNode.generateList(888)],
    output: [7, 8, 8, 1]
  },
  {
    input: [ListNode.generateList(81), ListNode.generateList(0)],
    output: [1, 8]
  },
  {
    input: [ListNode.generateList(0), ListNode.generateList(0)],
    output: [0]
  },
];