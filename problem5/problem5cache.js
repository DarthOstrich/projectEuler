let smallestCache = {};
function smallestMult(n) {
  // calculate the lcm for each number, use that as the starting point for the next one.
  let increment = smallestCache[n - 1] || 2;
  console.log(increment);
  let smallestNum = increment;

  let ceiling = Number.MAX_SAFE_INTEGER;

  while (smallestNum < ceiling) {
    for (let i = 2; i <= n; i++) {
      // check if evenly divisible
      let divisible = smallestNum % i === 0;
      // console.log(smallestNum, n, divisible)
      if (!divisible) {
        // smallestNum++
        break;
      }
      if (i === n) {
        console.log(n, smallestNum);
        smallestCache[n] = smallestNum;
        return smallestNum;
      }
    }
    smallestNum = smallestNum + increment;
  }
  // Good luck!

  // return smallestNum;
}
// smallestMult(3);
// smallestMult(4);
smallestMult(5);
smallestMult(7);
smallestMult(10);
smallestMult(13);
// smallestMult(14);
// smallestMult(15);
// smallestMult(16);
// smallestMult(17);
// smallestMult(18);
// smallestMult(19);
smallestMult(20);
console.log(smallestCache);
