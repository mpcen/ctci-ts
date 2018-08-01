function isUnique(str: string): boolean {
    let map: Set<string> = new Set<string>();

    for (let c of str) {
        if (!map.has(c)) map.add(c);
        else return false;
    }

    return true;
}

function isUnique_no_ds(str: string): boolean {
    for (let i = 0; i < str.length; i++) {
        for (let j = str.length - 1; j > i; j--) {
            if (str.charAt(j) === str.charAt(i)) return false;
        }
    }

    return true;
}

function isUnique_no_ds2(str: string): boolean {
    let charSet: boolean[] = [];

    for (let c of str) {
        if (charSet[c.charCodeAt(0)]) return false;
        else charSet[c.charCodeAt(0)] = true;
    }

    return true;
}

console.log(isUnique_no_ds2("assdf"));
