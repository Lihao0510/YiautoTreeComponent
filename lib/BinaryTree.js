/*
* 二叉搜索树类
* 需要完成功能:
* 1.根据数组构造一个二叉搜索树,并返回根节点;
* 2.增加一个节点
* 3.删除一个节点
* 4.中序遍历输出数组
* 5.根据查找方法返回要查找的值
*/
import lodash from "lodash";

export default class BinaryTree {
  rootNode = null;

  constructor(collection) {
    console.log("BinaryTree Init ==>", collection);
    if (collection && lodash.isArray(collection)) {
      this.buildTreeFromArray(collection);
    } else {
      this.rootNode = new TreeNode();
    }
  }

  buildTreeFromArray = collection => {
    collection.forEach(item => {
      this.addNode(item);
    })
  };

  addNode = (node) => {

  }
}

class TreeNode {
  constructor(value) {
    this.value = value || undefined;
  }
}
