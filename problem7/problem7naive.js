function isPrime(num) {
  const isPrime = true;
  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return true;
}

function nthPrime(n) {
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

nthPrime(1000); //7919
