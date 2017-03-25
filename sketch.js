var tree;

function setup() {
  createCanvas(800, 500);
  background(51);

  tree = new BinaryTree();
  for (let i = 0; i < 10; i++) {
    tree.addValue(floor(random(0, 100)));
  }
  console.log(tree);
  tree.traverse();

}

function draw() {

}

function AddValue(val) {
  clear();
  createCanvas(800, 500);
  background(51);
  tree.addValue(val);
  tree.traverse();
}

function SearchValue(val) {
  tree.search(val);
}