// using regex
function isPalindromePermutation_1(str: string): boolean {
    str = str.replace(/\s/g, "");

    const set: Set<string> = new Set();
    let count: number = 0;

    for (let c of str) {
        if (!set.has(c)) {
            set.add(c);
            count++;
        } else {
            count--;
        }
    }

    return count === 0 || count === 1;
}

// without using regex
function isPalindromePermutation_2(str: string): boolean {
    const set: Set<string> = new Set();
    let count: number = 0;

    for (let c of str) {
        if (!set.has(c) && c !== " ") {
            set.add(c);
            count++;
        } else if (c !== " ") {
            count--;
        }
    }

    return count === 0 || count === 1;
}

console.log(isPalindromePermutation_2("tact coa"));
