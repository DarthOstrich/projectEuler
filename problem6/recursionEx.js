// 1. check if we have reached our limiter
// 2. square the value
// 3. add it to the total
// 4. decrement the limiter
// 5. return to step 1
function getSumSquares(ceiling, total = 0) {
  if (ceiling === 0) {
    return total;
  }
  total += ceiling ** 2;
  return getSumSquares(ceiling - 1, total);
}
getSumSquares(10);
