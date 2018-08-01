function sortString(str: string): string {
    return str
        .replace(/\s/g, "")
        .split("")
        .sort()
        .join("");
}

function checkPermutation_simple(str1: string, str2: string): boolean {
    str1 = sortString(str1);
    str2 = sortString(str2);

    return str1 === str2;
}

function checkPermutation_optimized(str1: string, str2: string): boolean {
    if (str1.length !== str2.length) return false;

    const map = {};
    let count = str1.length;

    for (let c of str1) {
        if (!map[c]) map[c] = 0;
        map[c]++;
    }

    for (let c of str2) {
        if (!map[c]) return false;
        else {
            map[c]--;
            count--;
            if (map[c] < 0) return false;
        }
    }

    return count === 0;
}

console.log(checkPermutation_simple("asdf", "dsaf"));
