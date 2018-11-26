/*
* 二叉树节点类
*/
export default class TreeNode {
  value = undefined;
  leftNode = null;
  rightNode = null;

  constructor(value) {
    this.value = value || undefined;
  }

  add = value => {
    if (this.value === undefined) {
      this.value = value;
    } else if (value < this.value) {
      if (this.leftNode !== null) {
        this.leftNode.add(value);
      } else {
        this.leftNode = new TreeNode(value);
      }
    } else {
      if (this.rightNode !== null) {
        this.rightNode.add(value);
      } else {
        this.rightNode = new TreeNode(value);
      }
    }
  };

  print = (result) => {
    if (this.leftNode) {
      this.leftNode.print(result);
    }
    result.push(this.value);
    if (this.rightNode) {
      this.rightNode.print(result);
    }
  }
}
