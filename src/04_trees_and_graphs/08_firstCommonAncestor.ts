class Node {
    public data: number;
    public left: Node | undefined = undefined;
    public right: Node | undefined = undefined;

    public constructor(data: number) {
        this.data = data;
    }
}

const tree = new Node(6);
tree.left = new Node(-2);
tree.left.left = new Node(12);
tree.left.right = new Node(13);
tree.left.right.left = new Node(11);
tree.left.right.right = new Node(40);
tree.right = new Node(9);
tree.right.left = new Node(4);
tree.right.left.right = new Node(54);
tree.right.right = new Node(10);

function commonAncestor(
    node: Node,
    p: Node | undefined,
    q: Node | undefined
): Node | undefined {
    if (!node) return undefined;

    if (node === p || node === q) return node;

    const left = commonAncestor(node.left!, p, q);
    const right = commonAncestor(node.right!, p, q);

    if (left && right) return node;
    else return left ? left : right;
}

// 11                       40
console.log(commonAncestor(tree, tree.left.right.left, tree.right.left.right));

export {};
