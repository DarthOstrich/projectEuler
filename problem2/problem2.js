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

function calcFib(n) {
  // establish the golden ratio
  let sqrRtFive = Math.sqrt(5);
  let gr = 0.5 * (1 + sqrRtFive);
  // I don't know why we do n + 1
  // Binet's Formula
  let numerator = Math.pow(gr, n + 1) - Math.pow(1 - gr, n + 1);
  return Math.floor(numerator / sqrRtFive);
}

function fiboEvenSumImp(n) {
  let fibNumSum = 0;

  for (let i = 0; i <= n; i++) {
    let nextFib = calcFib(i);
    // console.log(nextFib)

    if (nextFib % 2 == 0) {
      fibNumSum += nextFib;
    }
    // console.log(fibNumSum)
  }

  // You can do it!
  return fibNumSum;
}

function calcFiboNum(x) {
  let gr = 0.5 * (1 + Math.sqrt(5));
  return Math.floor(
    (Math.pow(gr, x + 1) - Math.pow(1 - gr, x + 1)) / Math.sqrt(5)
  );
}

function fiboEvenSumCodeFay(y) {
  let sum = 0;
  let n = y + 1; // adjust n because Fibo sequence starts with 1,2,3 instead of 0,1,1,2

  for (var i = Math.floor(n / 3); i > 0; i--) {
    sum += calcFiboNum(i * 3 - 1);
  }
  return sum;
}

console.time('fib1');
fiboEvenSum(43);
console.timeEnd('fib1');

console.time('fib Imp');
fiboEvenSumImp(43);
console.timeEnd('fib Imp');

console.time('fiboEvenSumCodeFay');
fiboEvenSumCodeFay(43);
console.timeEnd('fiboEvenSumCodeFay');
