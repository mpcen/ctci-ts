class MinHeap {
    private size: number = 0;
    public items: number[] = [];

    private getLeftChildIndex(parentIndex: number): number {
        return 2 * parentIndex + 1;
    }
    private getRightChildIndex(parentIndex: number): number {
        return 2 * parentIndex + 2;
    }
    private getParentIndex(childIndex: number): number {
        return (childIndex - 1) / 2;
    }

    private hasLeftChild(index: number): boolean {
        return this.getLeftChildIndex(index) < this.size;
    }
    private hasRightChild(index: number): boolean {
        return this.getLeftChildIndex(index) < this.size;
    }
    private hasParent(index: number): boolean {
        return this.getParentIndex(index) >= 0;
    }

    private leftChild(index: number): number {
        return this.items[this.getLeftChildIndex(index)];
    }
    private rightChild(index: number): number {
        return this.items[this.getRightChildIndex(index)];
    }
    private parent(index: number): number {
        return this.items[this.getParentIndex(index)];
    }

    private swap(indexOne: number, indexTwo: number): void {
        const temp = this.items[indexOne];
        this.items[indexOne] = this.items[indexTwo];
        this.items[indexTwo] = temp;
    }

    public peek(): number | undefined {
        return this.items[0];
    }

    public poll(): number | undefined {
        const item = this.items[0];
        this.items[0] = this.items[this.size - 1];
        this.size--;
        this.heapifyDown();
        return item;
    }

    public add(item: number): void {
        this.items[this.size] = item;
        this.size++;
        this.heapifyUp();
    }

    public heapifyUp(): void {
        let index = this.size - 1;
        while (
            this.hasParent(index) &&
            this.parent(index) > this.items[index]
        ) {
            this.swap(this.getParentIndex(index), index);
            index = this.getParentIndex(index);
        }
    }

    public heapifyDown(): void {
        let index = 0;
        while (this.hasLeftChild(index)) {
            let smallerChildIndex = this.getLeftChildIndex(index);
            if (
                this.hasRightChild(index) &&
                this.rightChild(index) < this.leftChild(index)
            ) {
                smallerChildIndex = this.getRightChildIndex(index);
            }

            if (this.items[index] < this.items[smallerChildIndex]) {
                break;
            } else {
                this.swap(index, smallerChildIndex);
            }
            index = smallerChildIndex;
        }
    }
}

export {};
