// Power Set: Write a method to return all subsets of a set.

function powerSet<T>(
    set: T[],
    chosen: T[] = [],
    subsets: T[][] = []
): T[][] | void {
    if(!set.length) {
        subsets.push(chosen);
        console.log(chosen);
        return subsets;
    } else {
        // choose
        const item: T | undefined = set.shift();

        // explore without item
        powerSet(set, chosen, subsets);

        // explore with item
        chosen.push(item!);
        powerSet(set, chosen, subsets);

        // unchoose
        chosen.pop();
        set.unshift(item!);
    }
}

const set = ['Jane', 'Sara', 'Matt', 'Bob'];

console.log(powerSet(set));