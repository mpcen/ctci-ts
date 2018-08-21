class SetOfStacks<T> {
    private stack: T[][] = [[]];
    private threshold: number;
    private stacks: number = 0;

    public constructor(threshold: number) {
        this.threshold = threshold;
    }

    public push(item: T): void {
        const currentStackSize: number = this.stack[this.stack.length - 1]
            .length;

        if (currentStackSize === this.threshold) {
            this.stacks++;
            this.stack.push([]);
        }

        this.stack[this.stacks].push(item);
    }

    public pop(): T | undefined {
        const currentStackSize: number = this.stack[this.stack.length - 1]
            .length;
        const itemPopped: T | undefined = this.stack[this.stacks].pop();

        if (!itemPopped && this.stacks === 0) return undefined;
        if (this.stacks > 0 && currentStackSize > 0) return itemPopped;

        if (this.stacks > 0 && currentStackSize === 0) {
            this.stack[this.stacks].pop();
            this.stacks--;
            return this.pop();
        }

        return itemPopped;
    }

    public popAt(index: number): T | undefined {
        const itemPopped = this.stack[index].pop();

        if (!itemPopped) return undefined;

        if (!this.stack[index].length) {
            this.stack.splice(index, 1);
            this.stacks--;
        }

        return itemPopped;
    }
}

const stack = new SetOfStacks(3);
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
stack.push(6);
stack.push(7);
stack.push(8);
stack.push(9);
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.popAt(2));
console.log(stack.pop());
console.log(stack.popAt(1));
console.log(stack.popAt(0));
console.log(stack.pop());
console.log(stack.popAt(0));
console.log(stack.popAt(0));
console.log(stack.popAt(0));
