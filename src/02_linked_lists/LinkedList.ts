interface ILinkedListNode<T> {
    value: T;
    next?: ILinkedListNode<T>;
}

class LinkedList<T> {
    private head?: ILinkedListNode<T> = undefined;
    private tail?: ILinkedListNode<T> = undefined;

    public addToTail(value: T): void {
        const node: ILinkedListNode<T> = { value };

        if (!this.head) {
            this.head = node;
        }

        if (this.tail) {
            this.tail.next = node;
        }

        this.tail = node;
    }

    public addToHead(value: T): void {
        const node: ILinkedListNode<T> = { value };

        if (this.head) {
            node.next = this.head;
            this.head = node;
        } else {
            this.head = node;
            this.tail = node;
        }
    }

    public removeHead(): T | null {
        if (this.head) {
            const value: T = this.head.value;
            this.head = this.head.next;

            if (!this.head) this.tail = undefined;

            return value;
        }

        return null;
    }

    public *values(): IterableIterator<T> {
        let current = this.head;

        while (current) {
            yield current.value;
            current = current.next;
        }
    }
}
