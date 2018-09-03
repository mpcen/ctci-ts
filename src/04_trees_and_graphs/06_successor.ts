// Write an algorithm to find the "next" node (i .e ., in-order successor ) of a given node in a
// binary search tree. You may assume that each node has a link to its parent.

class Node {
    public data: number;
    public left: Node | undefined = undefined;
    public right: Node | undefined = undefined;

    public constructor(data: number) {
        this.data = data;
    }
}

function getAncestorSuccessor(
    currentNode: Node | undefined,
    targetNode: Node | undefined,
    ancestorSuccessorNode: Node | undefined = undefined
): Node | undefined {
    if (targetNode === currentNode) return ancestorSuccessorNode;

    if (targetNode!.data <= currentNode!.data) {
        return getAncestorSuccessor(currentNode!.left, targetNode, currentNode);
    } else if (targetNode!.data > currentNode!.data) {
        return getAncestorSuccessor(
            currentNode!.right,
            targetNode,
            ancestorSuccessorNode
        );
    }

    return undefined;
}

function successor(
    currentNode: Node | undefined,
    targetNode: Node | undefined
): Node | undefined {
    if (!currentNode || !targetNode) return undefined;

    if (targetNode.right) {
        targetNode = targetNode.right;

        while (targetNode!.left) {
            targetNode = targetNode!.left;
        }

        return targetNode;
    } else {
        return getAncestorSuccessor(currentNode, targetNode);
    }
}

const node = new Node(4);
node.left = new Node(3);
node.left.left = new Node(-2);
node.left.left.right = new Node(2);
node.right = new Node(9);
node.right.left = new Node(6);
node.right.left.left = new Node(5);
// findSuccessor(tree1, 3) // 4
// findSuccessor(tree1, -2) // 2
// findSuccessor(tree1, 4) // 5

console.log(successor(node, node.left)!.data);

export {};
