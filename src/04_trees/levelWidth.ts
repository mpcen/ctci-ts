/*
Given the root node of a tree, return an array
where each element is the width of the tree
at each level.
Ex, Given:
      0
    / | \
   1  2  3
   |     |
   4     5

Answer: [1, 3, 2]
*/

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
        this.children = this.children.filter(
            treeNode => treeNode.data !== data
        );
    }
}

function levelWidth<T>(treeNode: ITreeNode<T>): number[] {
    if (!treeNode) return [];

    const END_FLAG = "end";
    const queue: (ITreeNode<T> | string)[] = [treeNode, END_FLAG];
    const levels: number[] = [1];
    let count = 0;

    while (queue.length) {
        const queueItem = queue.shift();

        if (queueItem instanceof TreeNode) {
            count += queueItem.children.length;
            queue.push(...queueItem.children);
        } else if (queueItem === END_FLAG && queue.length) {
            levels.push(count);
            count = 0;
            queue.push(END_FLAG);
        }
    }

    return levels;
}

const treeNode = new TreeNode(0);
treeNode.add(1);
treeNode.add(2);
treeNode.add(3);
treeNode.children[0].add(4);
treeNode.children[2].add(5);

console.log(levelWidth(treeNode));

export {};
