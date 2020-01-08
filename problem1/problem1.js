function multiplesOf3and5(number) {
  let numbers = [];
  let total = 0;
  for (let i = 0; i < number; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
      total += i;
    }
  }

  // Good luck!
  console.log(total);
  return total;
}

multiplesOf3and5(1000);
