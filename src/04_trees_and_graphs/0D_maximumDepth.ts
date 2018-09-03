class Node<T> {
    public data: T;
    public left: Node<T> | undefined = undefined;
    public right: Node<T> | undefined = undefined;

    public constructor(data: T) {
        this.data = data;
    }
}

function maxDepth<T>(node: Node<T> | undefined): number {
    if (!node) return 0;

    const heightLeft = maxDepth(node.left!);
    const heightRight = maxDepth(node.right!);

    if (heightLeft > heightRight) return heightLeft + 1;

    return heightRight + 1;
}

const node = new Node(4);
node.left = new Node(5);
node.left.left = new Node(8);
node.left.right = new Node(6);
node.right = new Node(7);
node.right.right = new Node(9);
node.right.left = new Node(2);

console.log(maxDepth(node));

export {};
