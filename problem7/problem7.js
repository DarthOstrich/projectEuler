const { performance } = require("perf_hooks");
function isPrime(num) {
  const isPrime = true;
  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return true;
}

function nthPrimeNaive(n) {
  let count = 0;
  let highest = 0;
  for (let i = 2; count < n; i++) {
    if (isPrime(i)) {
      count++;
      highest = i;
    }
  }
  return highest;
}

function isPrimeAlgo(num) {}

function nthPrimeAlgo(n) {}

var t0 = performance.now();
console.log("nthPrimeNaive:", nthPrimeNaive(10001));
var t1 = performance.now();
console.log("Took " + (t1 - t0) + " ms");
