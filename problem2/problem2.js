function fiboEvenSum(n) {
  let fibNumSum = 0;
  let fibCurrent = 0;
  let fibNext = 1;

  for (let i = 1; i <= n; i++) {
    // find next number
    let fibTotal = fibCurrent + fibNext;

    // set first number to second number
    fibCurrent = fibNext;

    // set second number to total
    fibNext = fibTotal;
    if (fibTotal % 2 == 0) {
      fibNumSum += fibTotal;
    }
  }

  // You can do it!
  return fibNumSum;
}

fiboEvenSum(10);
