function largestPrimeFactor(number) {
  let factors = [];
  let primesAndFactor = [];
  // find all factors
  // In order to maintain this property of unique prime factorizations, it is necessary that the number one, 1, be categorized as neither prime nor composite.
  for (let factorIterator = 0; factorIterator <= number; factorIterator++) {
    // check if factor
    let isFactor = number % factorIterator == 0;
    let isPrime = true;

    if (isFactor) {
      factors.push(factorIterator);

      // see if factor is a prime
      let highestFactor = 1;
      // a prime number has two factors, 1 and itself
      for (let i = 2; i < factorIterator; i++) {
        // console.log(i, factorIterator, factorIterator % i)
        if (factorIterator % i == 0) {
          isPrime = false;
        }
      }
    }

    // if so, push to primes list
    if (isFactor && isPrime) {
      primesAndFactor.push(factorIterator);
      console.log(factorIterator);
    }
  }

  // return last element of array
  // console.log(factors)
  console.log(primesAndFactor);
  // Good luck!
  return primesAndFactor.pop();
}

largestPrimeFactor(1092);
