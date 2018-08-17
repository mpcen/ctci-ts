interface IStackNode {
    value: number;
    curMin: number;
}

class StackNode implements IStackNode {
    public value: number;
    public curMin: number;

    public constructor(value: number, curMin: number) {
        this.value = value;
        this.curMin = curMin;
    }
}

class Stack {
    private stack: IStackNode[] = [];
    private min: number = Number.MAX_SAFE_INTEGER;

    public push(value: number): void {
        this.stack.push(new StackNode(value, this.min));
        this.min = value < this.min ? value : this.min;
    }

    public pop(): number | undefined {
        const nodeToRemove: IStackNode | undefined = this.stack.pop();

        if (!nodeToRemove || !this.stack.length) {
            this.min = Number.MAX_SAFE_INTEGER;
            return undefined;
        }

        this.min =
            nodeToRemove.value === this.min ? nodeToRemove.curMin : this.min;

        return nodeToRemove.value;
    }

    public print(): void {
        console.log("STACK:", this.stack);
        console.log("MIN:", this.min);
        console.log("--------------");
    }
}

const stack = new Stack();
stack.push(6);
stack.print();
stack.push(7);
stack.print();
stack.push(5);
stack.print();
stack.push(3);
stack.print();
stack.pop();
stack.print();
stack.pop();
stack.print();
stack.pop();
stack.print();
stack.pop();
stack.print();
stack.pop();
stack.print();

export {};
