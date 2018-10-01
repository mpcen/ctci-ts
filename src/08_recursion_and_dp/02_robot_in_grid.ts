/*
Robot in a Grid: Imagine a robot sitting on the upper left corner of grid with r rows and c columns.
The robot can only move in two directions, right and down, but certain cells are "off limits" such that
the robot cannot step on them. Design an algorithm to find a path for the robot from the top left to
the bottom right.
*/

type Grid = (string | number)[][];

const grid: Grid = [
    [0, "x", "x", "x"],
    [0, 0, 0, 0],
    [0, 0, "x", "x"],
    ["x", 0, 0, 0]
];
/*
    Should result to:
        [
            [1,  'x', 'x', 'x'],
            [1,   1,   0,   0 ],
            [0,   1,  'x', 'x'],
            ['x', 1,   1,   1 ]
        ];
            Where the starting position is startingGrid[0][0]
            and ending position is [length-1][length-1]
*/

function escapeGrid(
    grid: Grid,
    row: number = 0,
    col: number = 0
): Grid | boolean {
    // case 0: arrived at end-point
    if (row === grid.length - 1 && col === grid[0].length - 1) {
        grid[row][col] = 1;

        console.log("Completed", grid);

        return grid;
    }

    // case 1: out-of-bounds
    else if (
        row < 0 ||
        row >= grid.length ||
        col < 0 ||
        col >= grid[0].length
    ) {
        return false;
    }

    // case 2: in an already-visited space
    else if (grid[row][col] === 1) {
        return false;
    }

    // case 3: in a wall
    else if (grid[row][col] === "x") {
        return false;
    } else {
        // choose
        grid[row][col] = 1;

        // explore
        if (escapeGrid(grid, row, col + 1) || escapeGrid(grid, row + 1, col)) {
            return true;
        } else {
            // unchoose
            grid[row][col] = 0;
            return false;
        }
    }
}

escapeGrid(grid);
