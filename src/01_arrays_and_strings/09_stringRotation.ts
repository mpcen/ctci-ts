function isRotation(s1: string, s2: string): boolean {
    if (s1.length !== s2.length) return false;

    return isSubString(s1 + s1, s2);
}

function isSubString(s1: string, s2: string): boolean {
    return s1.includes(s2);
}

console.log(isRotation("waterbottle", "erbottlewat"));
