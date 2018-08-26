interface ITreeNode<T> {
    data: T;
    children: ITreeNode<T>[];
    add: (data: T) => void;
    remove: (data: T) => void;
}

class TreeNode<T> implements ITreeNode<T> {
    public data: T;
    public children: ITreeNode<T>[] = [];

    public constructor(data: T) {
        this.data = data;
    }

    public add(data: T): void {
        this.children.push(new TreeNode(data));
    }

    public remove(data: T): void {
        this.children = this.children.filter((treeNode: ITreeNode<T>) => {
            return treeNode.data !== data;
        });
    }
}

function traverseBF<T>(
    treeNode: ITreeNode<T>,
    cb: (treeNode: ITreeNode<T>) => void
): void {
    const queue = [treeNode];

    while (queue.length) {
        const treeNode = queue.shift();

        if (treeNode) {
            queue.push(...treeNode.children);
            cb(treeNode);
        }
    }
}

function traverseDF<T>(
    treeNode: ITreeNode<T>,
    cb: (treeNode: ITreeNode<T>) => void
) {
    const stack = [treeNode];

    while (stack.length) {
        const treeNode = stack.shift();

        if (treeNode) {
            stack.unshift(...treeNode.children);
            cb(treeNode);
        }
    }
}

const node20 = new TreeNode(20);
node20.add(0);
node20.add(40);
node20.add(-15);
node20.children[0].add(12);
node20.children[0].add(-2);
node20.children[0].add(1);
node20.children[2].add(-2);

traverseBF(node20, node => {
    node.data += 10;
});

traverseBF(node20, node => {
    console.log(node.data);
});

console.log("--------");

traverseDF(node20, node => {
    console.log(node.data);
});

export {};
