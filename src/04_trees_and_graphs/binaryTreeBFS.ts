class TreeNode<T> {
    public data: T;
    public left: TreeNode<T> | undefined = undefined;
    public right: TreeNode<T> | undefined = undefined;

    public constructor(data: T) {
        this.data = data;
    }
}

const treeNode = new TreeNode(4);
treeNode.left = new TreeNode(5);
treeNode.left.left = new TreeNode(8);
treeNode.left.right = new TreeNode(6);
treeNode.right = new TreeNode(7);
treeNode.right.right = new TreeNode(9);
treeNode.right.left = new TreeNode(2);

function traverseBF<T>(treeNode: TreeNode<T>): void {
    const queue: TreeNode<T>[] = [treeNode];

    while (queue.length) {
        const currentNode = queue.shift();

        console.log(currentNode!.data);

        if (currentNode && currentNode.left) {
            queue.push(currentNode.left);
        }

        if (currentNode && currentNode.right) {
            queue.push(currentNode.right);
        }
    }
}

traverseBF(treeNode);

export {};
