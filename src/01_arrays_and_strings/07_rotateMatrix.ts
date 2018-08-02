function swap(matrix: number[][], a: number[], b: number[]): void {
    let tmp: number = matrix[a[0]][a[1]];
    matrix[a[0]][a[1]] = matrix[b[0]][b[1]];
    matrix[b[0]][b[1]] = tmp;
}

function printMatrix(matrix: number[][]): void {
    for (let i = 0; i < matrix.length; i++) {
        let row = "";
        for (let j = 0; j < matrix.length; j++) {
            row += matrix[i][j] + " ";
        }
        console.log(row);
        row = "";
    }
}

const matrix2x2 = [[0, 1], [2, 3]];
const matrix3x3 = [[0, 1, 2], [3, 4, 5], [6, 7, 8]];
const matrix4x4 = [
    [0, 1, 2, 3],
    [4, 5, 6, 7],
    [8, 9, 10, 11],
    [12, 13, 14, 15]
];

function rotateMatrix(matrix: number[][]): number[][] {
    let level = 0;
    let last = matrix.length - 1;

    while (level < Math.floor(matrix.length / 2)) {
        for (let i = level; i < last; i++) {
            swap(matrix, [level, i], [i, last]);
            swap(matrix, [level, i], [last, last - i + level]);
            swap(matrix, [level, i], [last - i, level]);
        }
        level++;
        last--;
    }

    return matrix;
}

printMatrix(matrix2x2);
console.log("-----");
const rotatedMatrix: number[][] = rotateMatrix(matrix2x2);
printMatrix(rotatedMatrix);
