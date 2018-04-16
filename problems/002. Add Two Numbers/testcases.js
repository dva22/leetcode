var ListNode = require('../../structures/ListNode');

module.exports = [
  {
    input: [ListNode.generateList(342), ListNode.generateList(465)],
    output: [7,0,8],// ListNode.generateList(807),
  },
  {
    input: [ListNode.generateList(999), ListNode.generateList(888)],
    output: [7, 8, 8, 1],
  },
  {
    input: [ListNode.generateList(81), ListNode.generateList(0)],
    output: [1, 8],
  },
  {
    input: [ListNode.generateList(0), ListNode.generateList(0)],
    output: [0],
  },
];