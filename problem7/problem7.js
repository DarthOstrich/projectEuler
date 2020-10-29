const { performance } = require("perf_hooks");
function isPrime(num) {
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

var t0 = performance.now();
console.log("nthPrimeNaive:", nthPrimeNaive(10001));
var t1 = performance.now();
console.log("Took " + (t1 - t0) + " ms");

function generatePrimes(limit) {
  const upperLimit = limit * (Math.log(limit) + Math.log(Math.log(limit)));
  let primes = [2, 3];
  let currentPrime = 3;
  let i = 0;
  while (currentPrime < upperLimit) {
    i += 1;
    currentPrime = 6 * i - 1;
    if (isPrimeNum(currentPrime)) {
      primes.push(currentPrime);
    }
    currentPrime = 6 * i + 1;
    if (isPrimeNum(currentPrime)) {
      primes.push(currentPrime);
    }
  }
  // for (let i = 1; i <= limit; i++) {
  // const nextPrimePlus = 6 * i + 1;
  // const nextPrimeMinus = 6 * i - 1;
  // if (isPrimeNum(nextPrimePlus) && !primes.includes(nextPrimePlus)) {
  //   primes.push(nextPrimePlus);
  // }
  // if (isPrimeNum(nextPrimeMinus) && !primes.includes(nextPrimeMinus)) {
  //   primes.push(nextPrimeMinus);
  // }
  // }
  // primes.sort(function(a, b) {
  //   return a - b;
  // });
  // console.log(primes);
  return primes;
}

function isPrimeNum(num) {
  if (num % 2 === 0 || num % 3 === 0) {
    return true;
  }
  for (let i = 2; i <= Math.ceil(Math.sqrt(num)); i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return true;

  // var i = 5;
  // while (i <= Math.ceil(Math.sqrt(num))) {
  //   if (num % i === 0) return false;
  //   if (num % (i + 2) === 0) return false;
  //   i += 6;
  // }
  // return true;
}

function nthPrime(n) {
  const primes = generatePrimes(n);
  // for (let item of primes)  {
  //   if(isPrime(item)) {
  //     filteredPrimes.push(item)
  //   }
  // }
  primes.sort(function(a, b) {
    return a - b;
  });
  const answer = primes[n - 1];
  return answer;
}

var t2 = performance.now();
console.log("nthPrimeAlgo:", nthPrime(10001));
var t3 = performance.now();
console.log("Took " + (t3 - t2) + " ms");
