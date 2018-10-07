// Paint Fill: Implement the "paint nil" function that one might see on many image editing programs.
// That is , given a screen (represented by a two -dimensional array of colors), a point, and a new color,
// nil in the surrounding area until the color changes from the original color.

enum Color {
    GREEN = 'GREEN',
    RED = 'RED',
    BLACK = 'BLACK',
    YELLOW = 'YELLOW',
    WHITE = 'WHITE',
    OMEGABLUE = 'OMEGABLUE'
}

interface IImagePoint {
    y: number;
    x: number;
}

function paintFill(
    image: Color[][],
    point: IImagePoint,
    newColor: Color,
    oldColor: Color = image[point.y][point.x]
): boolean {
    if(point.y < 0 || point.y > image.length - 1 || point.x < 0 || point.x > image[0].length - 1) {
        return false;
    }

    if(image[point.y][point.x] === newColor || image[point.y][point.x] !== oldColor) {
        return false;
    }

    image[point.y][point.x] = newColor

    // explore top
    paintFill(image, {y: point.y - 1, x: point.x}, newColor, oldColor);

    // explore right
    paintFill(image, {y: point.y, x: point.x + 1}, newColor, oldColor);

    // explore down
    paintFill(image, {y: point.y + 1, x: point.x}, newColor, oldColor);

    // explore left
    paintFill(image, {y: point.y, x: point.x - 1}, newColor, oldColor);

    return true;
}

const image: Color[][] = [
    [Color.GREEN,    Color.RED,      Color.WHITE,    Color.YELLOW],
    [Color.RED,      Color.GREEN,    Color.RED,      Color.YELLOW],
    [Color.RED,      Color.RED,      Color.RED,      Color.YELLOW],
    [Color.BLACK,    Color.BLACK,    Color.WHITE,    Color.WHITE],
];
const targetPoint: IImagePoint = { y: 1, x: 2 };

paintFill(image, targetPoint, Color.OMEGABLUE);

console.log(image);