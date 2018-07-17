var ListNode = require('../../structures/ListNode');
var buildTree = require('../../structures/TreeNode');
module.exports = [
  {
    input: [1, 1, []],
    output: 0
  },
  {
    input: [100, 1, [[10,100]]],
    output: -1
  },
  {
    input: [100, 10, [[10,60],[20,30],[30,30],[60,40]]],
    output: 2
  }  
];