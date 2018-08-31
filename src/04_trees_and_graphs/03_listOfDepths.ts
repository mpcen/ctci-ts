// List of Depths: Given a binary tree, design an algorithm which creates a
// linked list of all the nodes at each depth (e.g., if you have a tree with depth 0,
// you'll have 0 linked lists).

class TreeNode {
    public data: number;
    public left: TreeNode | undefined = undefined;
    public right: TreeNode | undefined = undefined;

    public constructor(data: number) {
        this.data = data;
    }
}

class LinkedListNode {
    public data: number;
    public next: LinkedListNode | undefined = undefined;

    public constructor(data: number) {
        this.data = data;
    }
}

class LinkedList {
    public head: LinkedListNode;

    public constructor(data: number) {
        this.head = new LinkedListNode(data);
    }

    public addToTail(data: number): void {
        const newNode = new LinkedListNode(data);
        let currentNode = this.head;

        while (currentNode.next) {
            currentNode = currentNode.next;
        }

        currentNode.next = newNode;
    }
}

const tree = new TreeNode(4);
tree.left = new TreeNode(5);
tree.left.left = new TreeNode(8);
tree.left.right = new TreeNode(6);
tree.right = new TreeNode(7);
tree.right.right = new TreeNode(9);
tree.right.left = new TreeNode(2);

function traverseBF(
    list: LinkedList[],
    currentNode: TreeNode | undefined,
    depth: number
) {
    if (currentNode) {
        if (!list[depth]) {
            list[depth] = new LinkedList(currentNode.data);
        } else {
            list[depth].addToTail(currentNode.data);
        }

        traverseBF(list, currentNode.left, depth + 1);
        traverseBF(list, currentNode.right, depth + 1);
    }
}

function createListsFromTree(tree: TreeNode): LinkedList[] {
    const lists: LinkedList[] = [];
    traverseBF(lists, tree, 0);
    return lists;
}

console.log(createListsFromTree(tree));

export {};
