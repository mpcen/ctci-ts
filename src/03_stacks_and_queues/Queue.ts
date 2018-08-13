class Queue<T> {
    private data: { [index: number]: T } = Object.create(null);
    private nextEnqueueIndex: number = 0;
    private lastDequeuedIndex: number = 0;

    public enqueue(item: T): void {
        this.data[this.nextEnqueueIndex] = item;
        this.nextEnqueueIndex++;
    }

    public dequeue(): T | undefined {
        if (this.nextEnqueueIndex !== this.lastDequeuedIndex) {
            const dequeuedItem = this.data[this.lastDequeuedIndex];
            delete this.data[this.lastDequeuedIndex];
            this.lastDequeuedIndex++;
            return dequeuedItem;
        }

        return undefined;
    }

    public peek(): T | undefined {
        return this.data[this.lastDequeuedIndex];
    }

    public isEmpty(): boolean {
        return this.nextEnqueueIndex - this.lastDequeuedIndex === 0;
    }

    public size(): number {
        return this.nextEnqueueIndex - this.lastDequeuedIndex;
    }
}

const queue = new Queue();
queue.enqueue("a");
queue.enqueue("b");
queue.enqueue("c");

console.log(queue.peek());
console.log(queue.isEmpty());
console.log(queue.size());

console.log("dequeing:", queue.dequeue());
console.log(queue.peek());
console.log(queue.isEmpty());
console.log(queue.size());

console.log("dequeing:", queue.dequeue());
console.log("dequeing:", queue.dequeue());

console.log(queue.peek());
console.log(queue.isEmpty());
console.log(queue.size());

export {};
