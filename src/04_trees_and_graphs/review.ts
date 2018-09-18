class Node {
    public data: number;
    public left: Node | undefined = undefined;
    public right: Node | undefined = undefined;

    public constructor(data) {
        this.data = data;
    }
}

// Minimal Tree: Given a sorted (increasing order) array with unique integer elements, write an algo-
// rithm to create a binary search tree with minimal height.
function minTree(
    arr: number[],
    start: number = 0,
    end: number = arr.length - 1
): Node | undefined {
    if (start > end) return undefined;

    const mid = Math.floor((start + end) / 2);
    const root = new Node(arr[mid]);
    root.left = minTree(arr, start, mid - 1);
    root.right = minTree(arr, mid + 1, end);

    return root;
}

// List of Depths: Given a binary tree, design an algorithm which creates a linked list of all the nodes
// at each depth (e.g., if you have a tree with depth 0, you' ll have 0 linked lists).
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

    public addToTail(data: number) {
        const newNode = new LinkedListNode(data);
        let currentNode = this.head;
        while (currentNode.next) {
            currentNode = currentNode.next;
        }
        currentNode.next = newNode;
    }
}
function listOfDepths(tree: Node | undefined): LinkedList[] {
    const list: LinkedList[] = [];
    traverseTree(list, tree);
    return list;
}
function traverseTree(
    list: LinkedList[],
    node: Node | undefined,
    depth: number = 0
): void {
    if (node) {
        if (!list[depth]) {
            list[depth] = new LinkedList(node.data);
        } else {
            list[depth].addToTail(node.data);
        }

        traverseTree(list, node.left, depth + 1);
        traverseTree(list, node.right, depth + 1);
    }
}

// Check Balanced: Implement a function to check if a binary tree is balanced. For the purposes of
// this question, a balanced tree is defined to be a tree such that the heights of the two subtrees of any
// node never differ by more than one.
function checkBalanced(node: Node | undefined): boolean {
    return traverseBalancedTree(node) !== -1;
}
function traverseBalancedTree(node: Node | undefined): number {
    if (!node) return 0;

    const heightLeft = traverseBalancedTree(node.left);
    const heightRight = traverseBalancedTree(node.right);

    if (heightLeft === -1 || heightRight === -1) return -1;
    if (Math.abs(heightLeft - heightRight) > 1) return -1;

    return Math.max(heightLeft, heightRight) + 1;
}

// Validate BST: Implement a function to check if a binary tree is a binary search tree.
function validateBST(
    node: Node | undefined,
    min: number = Number.MIN_SAFE_INTEGER,
    max: number = Number.MAX_SAFE_INTEGER
): boolean {
    if (!node) return true;

    if (node.data <= min || node.data > max) return false;

    return (
        validateBST(node.left, min, node.data) &&
        validateBST(node.right, node.data, max)
    );
}

// First Common Ancestor: Design an algorithm and write code to find the first common ancestor
// of two nodes in a binary tree. Avoid storing additional nodes in a data structure. NOTE : This is not
// necessarily a binary search tree.
function FCA(
    tree: Node,
    nodeA: Node | undefined,
    nodeB: Node | undefined
): Node | undefined {
    if (!tree) return undefined;
    if (tree === nodeA || tree === nodeB) return tree;

    const left = FCA(tree.left!, nodeA, nodeB);
    const right = FCA(tree.right!, nodeA, nodeB);

    if (left && right) return tree;

    return left ? left : right;
}

// Successor: Write an algorithm to find the "next" node (i .e ., in-order successor )
// of a given node in a binary search tree. You may assume that each node has a link to its parent.
function BSTsuccessor(tree: Node | undefined, target: Node): Node | undefined {
    if (target.data > tree!.data) {
        tree = tree!.right;
        while (tree!.left) {
            tree = tree!.left;
        }
        return tree;
    } else {
        let store = tree;
        while (tree !== target) {
            if (target.data > tree!.data) {
                tree = tree!.right;
            } else {
                store = tree;
                tree = tree!.left;
            }
        }
        return store;
    }
}

const tree = minTree([1, 2, 3, 4, 5, 6, 7]);
console.log(BSTsuccessor(tree, tree!.left!.left!));

export {};
