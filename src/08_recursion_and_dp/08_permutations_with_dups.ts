// Permutations with Dups: Write a method to compute all permutations of a string whose
//characters are not necessarily unique. The list of permutations should not have duplicates.

function permutationsWithDups(
    strArr: string[],
    chosen: string[] = [],
    printed: Set<string> = new Set()
): void {
    if(!strArr.length) {
        const chosenStr: string = chosen.join('');
        if(!printed.has(chosenStr)) {
            printed.add(chosenStr);
            console.log(chosenStr);
        }
    } else {
        for(let i = 0; i < strArr.length; i++) {
            // choose
            const char = strArr.splice(i, 1)[0];
            chosen.push(char!);

            // explore
            permutationsWithDups(strArr, chosen, printed);

            // unchoose
            strArr.splice(i, 0, char);
            chosen.pop();
        }
    }
}

console.log(permutationsWithDups(['a', 's', 'a', 'd', 'f']));