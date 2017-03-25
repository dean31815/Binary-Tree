
function Node(val) {
  this.value = val;
  this.parent = null;
  this.left = null;
  this.right = null;
  this.x = null;
  this.y = null;
  this.lv = null;
}

Node.prototype.addNode = function (n) {
  // set parent node
  n.parent = this;
  // new node y inscrease 50
  n.y = this.y + 50;
  // increase tree height
  if(this.left == null && this.right == null) {
    tree.height++;
  }
  // set level
  n.lv = this.lv + 1;

  // new value is smaller
  if (n.value < this.value) { 
    if (this.left == null) {
      n.x = this.x - width / pow(2, n.lv);
      this.left = n;
    } else {
      this.left.addNode(n);
    }
  }
  // n: 57 ; this: 55
  else if (n.value > this.value) { // new value is bigger
    if (this.right == null) {
      n.x = this.x + width / pow(2, n.lv);      
      this.right = n;
    } else {
      this.right.addNode(n);
    }
  }
}

Node.prototype.visit = function (parent) {
  // visit left node if existed
  if(this.left != null) {
    this.left.visit(this);
  }
  // print this node value
  fill(255);
  noStroke();
  textAlign(CENTER);
  text(this.value, this.x, this.y);
  stroke(255);
  noFill();
  ellipse(this.x, this.y - 5, 30, 30);
  if(this != tree.root) {
    line(parent.x, parent.y + 10, this.x, this.y - 20);
  }
  // visit right node if existed
  if(this.right != null) {
    this.right.visit(this);
  }
}

Node.prototype.search = function (val) {
  if(this.value == val) {
    return 'Founded.';
  } else {
    if(val < this.value && this.left != null) {
      return this.left.search(val);
    } else if(val > this.value && this.right != null) {
      return this.right.search(val);
    }
  }
  return 'Does not exist.';
}
