function BinaryTree() {
  this.root = null;
  this.height = 0;  
}

BinaryTree.prototype.addValue = function (val) {
  var n = new Node(val);
  if(this.root == null) {
    this.root = n;
    this.root.lv = 1;
    this.root.x = width / 2;
    this.root.y = 50;
    this.height++;
  } else {
    this.root.addNode(n);
  }
}

BinaryTree.prototype.traverse = function () {
  this.root.visit(this.root);
}

BinaryTree.prototype.search = function (val) {
  console.log('Result of searching ' + val + ' : ' + this.root.search(val));
}