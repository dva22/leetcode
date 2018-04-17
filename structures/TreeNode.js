// Definition for a binary tree node.

const TreeNode = function(val) {
  this.val = val;
  this.left = this.right = null;
};

const buildTree = nodes => {
  const build = i => {
    if (nodes[i] !== null && nodes[i] !== undefined) {
      const node = new TreeNode(nodes[i]);
      node.left = build(i * 2 + 1);
      node.right = build((i + 1) * 2);
      return node;
    } else {
      return null;
    }
  };
  return build(0);
};

module.exports = buildTree;