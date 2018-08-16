class Stacks<T> {
    private data: T[];
    private stackSize: number;
    private numberOfStacks: number = 3;
    private stackStartLocations: number[] = new Array(this.numberOfStacks);
    private stackItemsPresent: number[] = new Array(this.numberOfStacks);

    public constructor(stackSize: number) {
        this.stackSize = stackSize;
        this.data = new Array(stackSize * this.numberOfStacks);
        this.stackStartLocations = [0, 1 * stackSize, 2 * stackSize];
        this.stackItemsPresent.fill(0);
    }

    public push(stackNum: number, value: T): void {
        if (this.stackItemsPresent[stackNum] === this.stackSize) {
            throw "Stack size exceeded";
        }

        this.data[
            this.stackStartLocations[stackNum] +
                this.stackItemsPresent[stackNum]
        ] = value;
        this.stackItemsPresent[stackNum]++;
    }

    public pop(stackNum: number): T {
        if (this.stackItemsPresent[stackNum] > 0) {
            const itemRemoved = this.data[
                this.stackStartLocations[stackNum] +
                    this.stackItemsPresent[stackNum] -
                    1
            ];

            delete this.data[
                this.stackStartLocations[stackNum] +
                    this.stackItemsPresent[stackNum] -
                    1
            ];
            this.stackItemsPresent[stackNum]--;
            return itemRemoved;
        }

        throw "No item present to pop";
    }

    public print(): T[] {
        return this.data;
    }
}

const stacks = new Stacks(3);
stacks.push(0, "a");
stacks.push(0, "b");
stacks.push(2, "x");
stacks.push(2, "y");
stacks.push(2, "z");

stacks.pop(2);
stacks.pop(2);
stacks.pop(2);
stacks.push(2, "z");
console.log(stacks.print());

export {};
