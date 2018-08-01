function URLify_1(str: string): string {
    return str
        .trim()
        .split(" ")
        .join("%20");
}

function URLify_2(str: string, strLen: number): string {
    let newStr = "";

    for (let i = 0; i < strLen; i++) {
        if (str.charAt(i) === " ") {
            newStr += "%20";
        } else {
            newStr += str.charAt(i);
        }
    }

    return newStr;
}

console.log(URLify_2("Mr John Smith   ", 13));
