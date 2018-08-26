interface INode<T> {
    data: T;
    next?: INode<T>;
}

class Node<T> {
    public data: T;
    public next: INode<T> | undefined;

    public constructor(data: T, next?: INode<T>) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList<T> {
    private head?: INode<T>;

    public insertFirst(data: T): void {
        const node: INode<T> = new Node(data);

        if (this.head) node.next = this.head;
        this.head = node;
    }

    public size(): number {
        let currentNode: INode<T> | undefined = this.head;
        let counter: number = 0;

        while (currentNode) {
            currentNode = currentNode.next;
            counter++;
        }

        return counter;
    }

    public getFirst(): INode<T> | undefined {
        return this.head;
    }

    public getLast(): INode<T> | undefined {
        let currentNode: INode<T> | undefined = this.head;

        if(!currentNode) return undefined;

        while (currentNode.next) {
            currentNode = currentNode.next;
        }

        return currentNode;
    }

    public clear(): void {
        this.head = undefined;
    }

    public removeFirst(): void {
        if (this.head) {
            this.head = this.head.next;
        }
    }

    public removeLast(): void | undefined {
        let currentNode: INode<T> | undefined = this.head;
        let lastNode: INode<T> | undefined = undefined;

        if (!this.head) return undefined;
        if (!this.head.next) return (this.head = undefined);

        while (currentNode) {
            if (!currentNode.next) {
                lastNode!.next = undefined;
            }

            lastNode = currentNode;
            currentNode = currentNode.next;
        }
    }

    public insertLast(data: T): void | undefined {
        const node: INode<T> = new Node<T>(data);

        let currentNode: INode<T> | undefined = this.head;

        if (currentNode) {
            while (currentNode.next) {
                currentNode = currentNode.next;
            }

            currentNode.next = node;
            return;
        }

        this.head = node;
    }

    public getAt(index: number): INode<T> | undefined {
        let counter: number = 0;
        let currentNode: INode<T> | undefined = this.head;

        while (currentNode) {
            if (counter === index) {
                return currentNode;
            }

            currentNode = currentNode.next;
            counter++;
        }

        return undefined;
    }

    public removeAt(index: number): void {
        let currentNode: INode<T> | undefined = this.head;
        let lastNode: INode<T> | undefined = undefined;
        let counter: number = 0;

        if (!currentNode) return;
        if (index === 0) {
            this.head = currentNode.next;
            return;
        }

        while (currentNode) {
            if (counter === index) {
                lastNode!.next = currentNode.next;
                return;
            }

            lastNode = currentNode;
            currentNode = currentNode.next;
            counter++;
        }
    }

    public insertAt(data: T, index: number): void {
        let currentNode: INode<T> | undefined = this.head;
        let lastNode: INode<T> | undefined = undefined;
        let counter: number = 0;
        const node: INode<T> = new Node(data);

        if (!currentNode) {
            this.head = node;
            return;
        }

        if (index === 0) {
            node.next = this.head;
            this.head = node;
            return;
        }

        while (currentNode) {
            if (counter === index) {
                lastNode!.next = node;
                node.next = currentNode;
                return;
            }

            lastNode = currentNode;
            currentNode = currentNode.next;
            counter++;
        }

        lastNode!.next = node;
    }

    public forEach(cb: (node: INode<T>) => void): void {
        let currentNode: INode<T> | undefined = this.head;

        if (!currentNode) return;

        while (currentNode) {
            cb(currentNode);
            currentNode = currentNode.next;
        }
    }

    *[Symbol.iterator]() {
        let currentNode: INode<T> | undefined = this.head;
        while (currentNode) {
            yield currentNode;
            currentNode = currentNode.next;
        }
    }
}

const ll = new LinkedList<number>();
ll.insertLast(1);
ll.insertLast(2);
ll.insertLast(3);

for (let node of ll) {
    console.log(node);
}

export {};
