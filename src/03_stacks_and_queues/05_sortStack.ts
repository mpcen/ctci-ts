class SortStack<T> {
    private s0: T[] = [];
    private s1: T[] = [];

    public push(item: T): void {
        while (this.peek()! >= item || this.isEmpty()) {
            this.s1.push(this.s0.pop() as T);
        }

        this.s0.push(item);

        while (this.s1.length) {
            this.s0.push(this.s1.pop() as T);
        }
    }

    public pop(): T | undefined {
        return this.s0.pop();
    }

    public peek(): T | undefined {
        return this.s0[this.s0.length - 1];
    }

    public isEmpty(): boolean {
        return this.s0.length > 0;
    }
}

export {};

const stack = new SortStack();
stack.push(1);
stack.push(3);
stack.push(5);

console.log(stack.peek());
console.log(stack.pop());
console.log(stack.peek());
stack.push(9);
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
stack.push(5);
console.log(stack.pop());
console.log(stack.pop());
