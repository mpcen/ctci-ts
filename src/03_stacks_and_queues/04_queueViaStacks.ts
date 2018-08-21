class MyQueue<T> {
    private s0: T[] = [];
    private s1: T[] = [];

    public enqueue(item: T): void {
        this.s0.push(item);
    }

    public dequeue(): T | undefined {
        let item: T | undefined;

        while (this.s0.length) {
            this.s1.push(this.s0.pop() as T);
        }
        item = this.s1.pop();
        while (this.s1.length) {
            this.s0.push(this.s1.pop() as T);
        }
        return item;
    }
}

export {};

const queue = new MyQueue();
queue.enqueue("a");
queue.enqueue("b");
queue.enqueue("c");
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log("--");
queue.enqueue("a");
queue.enqueue("b");
queue.enqueue("c");
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
