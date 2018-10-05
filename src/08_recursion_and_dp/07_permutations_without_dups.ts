// Permutations without Dups: Write a method to compute all permutations of a string of unique
// characters

function permutationsWithoutDups(strArr: string[], chosen: string[] = []): void {
    if(!strArr.length) {
        console.log(chosen);
    } else {
        for(let i = 0; i < strArr.length; i++) {
            // choose
            let char = strArr.splice(i, 1)[0];
            chosen.push(char!);

            // explore
            permutationsWithoutDups(strArr, chosen);

            // unchoose
            strArr.splice(i, 0, char);
            chosen.pop();
        }
    }
}

console.log(permutationsWithoutDups(['a', 's', 'd', 'f']));