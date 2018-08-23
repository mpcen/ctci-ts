enum AnimalType {
    Dog = "Dog",
    Cat = "Cat"
}

class Animal {
    public type: string;
    public time?: number;

    public constructor(type: string, time?: number) {
        this.type = type;
        this.time = time;
    }
}

abstract class Dog extends Animal {
    public constructor() {
        super(AnimalType.Dog);
    }
}

class Cat extends Animal {
    public constructor() {
        super(AnimalType.Cat);
    }
}

class Queue<Animal> {
    public items: { [index: number]: Animal } = Object.create(null);
    public nextEnqueueIndex: number = 0;
    public lastDequeuedIndex: number = 0;

    public enqueue(item: Animal): void {
        this.items[this.nextEnqueueIndex] = item;
        this.nextEnqueueIndex++;
    }

    public dequeue(): Animal | undefined {
        if (this.lastDequeuedIndex !== this.nextEnqueueIndex) {
            const itemToDequeue: Animal = this.items[this.lastDequeuedIndex];
            delete this.items[this.lastDequeuedIndex];
            this.lastDequeuedIndex++;
            return itemToDequeue;
        }
        return undefined;
    }

    public peek(): Animal | undefined {
        return this.items[this.lastDequeuedIndex];
    }

    public isEmpty(): boolean {
        return this.nextEnqueueIndex === this.lastDequeuedIndex;
    }
}

class AnimalQueue {
    private dogQueue = new Queue<Dog>();
    private catQueue = new Queue<Cat>();
    private time: number = 0;

    public enqueue(animal: AnimalType): void {
        const newAnimal = new Animal(animal, this.time);

        if (newAnimal.type === "Dog") {
            this.dogQueue.enqueue(newAnimal);
        } else {
            this.catQueue.enqueue(newAnimal);
        }

        this.time++;
    }

    public dequeueAny(): Animal | undefined {
        if (this.dogQueue.isEmpty()) {
            return this.catQueue.dequeue();
        } else if (this.catQueue.isEmpty()) {
            return this.dogQueue.dequeue();
        }

        const oldestDog = this.dogQueue.peek();
        const oldestCat = this.catQueue.peek();

        return oldestDog!.time! <= oldestCat!.time!
            ? this.dogQueue.dequeue()
            : this.catQueue.dequeue();
    }

    public dequeueDog(): Dog | undefined {
        return this.dogQueue.dequeue();
    }

    public dequeueCat(): Cat | undefined {
        return this.catQueue.dequeue();
    }
}

export {};

const animalQueue = new AnimalQueue();

animalQueue.enqueue(AnimalType.Dog);
animalQueue.enqueue(AnimalType.Dog);
animalQueue.enqueue(AnimalType.Dog);
animalQueue.enqueue(AnimalType.Cat);
animalQueue.enqueue(AnimalType.Cat);
animalQueue.enqueue(AnimalType.Dog);

console.log(animalQueue.dequeueAny());
console.log(animalQueue.dequeueCat());
console.log(animalQueue.dequeueDog());
console.log(animalQueue.dequeueDog());
console.log(animalQueue.dequeueAny());
console.log(animalQueue.dequeueCat());
console.log(animalQueue.dequeueAny());
console.log(animalQueue.dequeueAny());

/*

dog
cat
dog
dog
dog
cat

*/
