/**
 * Calculates the square of a number
 * The paramater is constrained to number
 * The type of 2 and 3 is assignable to (compatible with) number
 * A string is not assignable to number so squareOf('z') throws a compilation error
 */

function squareOf(n: number) {
    return  n * n
}

const four = squareOf(2);
const nine = squareOf(3);
// const error = squareOf('z');

