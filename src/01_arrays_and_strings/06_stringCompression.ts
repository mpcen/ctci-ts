function stringCompression(str: string): string {
    if (!str.length) return str;

    let newStr: string = str.charAt(0);
    let totalCount = 1;
    let counter: number = 1;
    let currentChar: string = str.charAt(0);

    for (let i = 1; i < str.length; i++) {
        if (str.charAt(i) === currentChar) {
            counter++;
        } else {
            newStr += counter.toString() + str.charAt(i);
            counter = 1;
            totalCount++;
        }

        currentChar = str.charAt(i);
    }

    newStr += counter.toString();

    if (totalCount === str.length) return str;

    return newStr;
}

console.log(stringCompression("aabcccccaaa"));
console.log(stringCompression("abcd"));
console.log(stringCompression("a"));
console.log(stringCompression(""));
