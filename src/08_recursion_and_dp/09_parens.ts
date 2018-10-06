// Parens: Implement an algorithm to print all valid (e.g ., properly opened and closed) combinations
// of n pairs of parentheses.
// EXAMPLE
// Input: 3
// Output: ()()(), ()(()), (())(), (()()), ((()))

function validateParens(parenArr: string[], n: number = 0): boolean {
    if(n < 0) return false;
    if(!parenArr.length) return n === 0;
    const char: string | undefined = parenArr.shift();
    return validateParens(parenArr, char === ')' ? n - 1 : n + 1);
}

function permuteStr(
    strArr : string[],
    chosen: string[] = [],
    sum: number = 0,
    completed: Map<string, string> = new Map()
): void {
    if(!strArr.length) {
        const chosenStr: string = chosen.join('');

        if(validateParens([...chosen]) && !completed.has(chosenStr)) {
            completed.set(chosenStr, chosenStr);
            console.log(chosenStr);
        }
    } else if(sum >= 0) {
        for(let i = 0; i < strArr.length; i++) {
            // choose
            const char: string = strArr.splice(i, 1)[0];
            chosen.push(char);

            // explore
            permuteStr(
                strArr,
                chosen,
                char === ')' ? sum - 1 : sum + 1,
                completed
            );
            
            // unchoose
            strArr.splice(i, 0, char);
            chosen.pop();
        }
    }
}

function generateString(str: string, n: number): string[] {
    let newStr = '';
    for(let i = 0; i < n; i++) newStr += str;
    return newStr.split('');
}

permuteStr(generateString('()', 3));