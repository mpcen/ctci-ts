/*
Magic Index: A magic index in an array A [e ... n -1] is defined to be an index such that A[ i] =
i. Given a sorted array of distinct integers, write a method to find a magic index, if one exists, in
array A.
*/

function magicIndex(
    arr: number[],
    start: number = 0,
    end: number = arr.length - 1
): number {
    if(start > end) return -1;

    const mid: number = Math.floor((start + end) / 2);

    if(mid === arr[mid]) return mid;

    return mid > arr[mid] ? magicIndex(arr, mid + 1, end) : magicIndex(arr, start, mid - 1);
}

const arr = [-40,-20,-1,1,2,3,5,7,9,12,13];

console.log(magicIndex(arr));

/*
FOLLOW UP
What if the values are not distinct?
*/

// the algorithm above works for both.