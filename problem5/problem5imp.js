function smallestMult(n) {
  // setup state
  let inc = 2;
  let step = 2;
  let smallestNum = 2;

  while (smallestNum <= Number.MAX_SAFE_INTEGER) {
    for (let i = 2; i <= n; i++) {
      const divisible = smallestNum % i === 0;
      // console.log(smallestNum, i, divisible)
      if (!divisible) {
        break;
      }
      if (i === inc) {
        step = smallestNum;
        console.log(i, inc, step);
        inc++;
      }
      if (i === n) {
        return smallestNum;
      }
    }
    smallestNum += step;
  }

  // Good luck!

  // return smallestNum;
}
console.time('smallestMult');
smallestMult(20);
console.timeEnd('smallestMult');
