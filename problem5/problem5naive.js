function smallestMult(n) {
  let isEven = n % 2 === 0;

  let smallestNum = 2 ** n;

  // console.log(smallestNum)

  let ceiling = Infinity;

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
        console.log(`smallest mult for ${n} is ${smallestNum}`);
        return smallestNum;
      }
    }
    smallestNum = smallestNum + 2;
  }
  // Good luck!

  // return smallestNum;
}

console.time('smallestMult');
smallestMult(20);
console.timeEnd('smallestMult');
