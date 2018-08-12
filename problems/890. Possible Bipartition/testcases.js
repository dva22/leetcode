var ListNode = require('../../structures/ListNode');
var buildTree = require('../../structures/TreeNode');

module.exports = [
  {
    input: [4, [[1,2],[1,3],[2,4]]],
    output: true
  },
  {
    input: [3, [[1,2],[1,3],[2,3]]],
    output: false
  },
  {
    input: [5, [[1,2],[2,3],[3,4],[4,5],[1,5]]],
    output: false
  }
];