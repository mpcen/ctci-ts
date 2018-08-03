function zeroMatrix(matrix: number[][]): number[][] {
    const zeroISet: Set<number> = new Set();
    const zeroJSet: Set<number> = new Set();

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j] === 0) {
                zeroISet.add(i);
                zeroJSet.add(j);
            }
        }
    }

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (zeroISet.has(i) || zeroJSet.has(j)) {
                matrix[i][j] = 0;
            }
        }
    }

    return matrix;
}

const matrix = [[0, 1, 2, 3], [4, 5, 6, 7], [8, 9, 0, 11], [12, 13, 14, 15]];

console.log(zeroMatrix(matrix));
