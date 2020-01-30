function getSumSquares(ceiling, total = 0) {
  if (ceiling === 0) {
    return total;
  }
  let squared = (total += ceiling ** 2);
  return getSumSquares(ceiling - 1, total);
}

function getSquareSum(ceiling, total = 0) {
  if (ceiling === 0) {
    return total ** 2;
  }
  total += ceiling;
  return getSquareSum(ceiling - 1, total);
}

function sumSquareDifference(n) {
  // total for sum of squares of the n natural numbers
  let sumOfSquares = getSumSquares(n);
  // total of square of the sum
  let squareOfSum = getSquareSum(n);
  // get difference between the two
  return squareOfSum - sumOfSquares;
}

let tenSum = sumSquareDifference(10);
let hundoSum = sumSquareDifference(100);
