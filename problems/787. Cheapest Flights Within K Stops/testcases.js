var ListNode = require('../../structures/ListNode');
var buildTree = require('../../structures/TreeNode');
module.exports = [
  {
    input: [3, [[0,1,100],[1,2,100],[0,2,500]], 0, 2, 1],
    output: 200
  },
  {
    input: [3, [[0,1,100],[1,2,100],[0,2,500]], 0, 2, 0],
    output: 500
  }
];