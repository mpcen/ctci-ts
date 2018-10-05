// Recursive Multiply: Write a recursive function to multiply two positive integers without using the
// * operator. You can use addition, subtraction, and bit shifting, but you should minimize the number
// of those operations

function multiply(a: number, b: number, c: number = 0): number {
    if(b === 0) return c;
    return multiply(a, b - 1, c += a);
}

console.log(multiply(4,2));