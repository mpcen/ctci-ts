function oneAway(str1: string, str2: string): boolean {
    const map = {};
    let counter = str1.length;

    for (let c of str1) {
        if (!map[c]) map[c] = 0;
        map[c] += 1;
    }

    for (let c of str2) {
        if (map[c]) {
            map[c]--;
            counter--;

            if (map[c] < 0) return false;
        }
    }

    return counter === 1;
}

console.log(oneAway("pale", "bake"));
