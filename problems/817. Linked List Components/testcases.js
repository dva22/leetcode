var ListNode = require('../../structures/ListNode');
var buildTree = require('../../structures/TreeNode');

module.exports = [
  {
    input: [ListNode.generateList(123),[0, 1, 3]],
    output: 2
  },
  {
    input: [ListNode.generateList(1234),[0, 3, 1, 4]],
    output: 2
  }
];