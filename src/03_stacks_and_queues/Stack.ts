class Stack<T> {
    private data: T[] = [];

    public push(item: T): void {
        this.data.push(item);
    }

    public pop(): T | undefined {
        return this.data.pop();
    }

    public size(): number {
        if (this.data.length > 0) return this.data.length;
        return 0;
    }

    public peek(): T | undefined {
        return this.data[this.size() - 1];
    }

    public isEmpty(): boolean {
        return this.size() === 0;
    }
}

const stack = new Stack();
stack.push("a");
console.log(stack.size());
console.log(stack.peek());
console.log(stack.pop());
console.log(stack.peek());
console.log(stack.size());
stack.push("b");
stack.push("c");
console.log(stack.peek());
console.log(stack.size());

export {};
