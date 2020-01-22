function isPalindrome(num) {
  // get reverse
  let reversed = String(num)
    .split('')
    .reverse()
    .join('');
  // return equality check
  return Number(reversed) === num;
}

function largestPalindromeProductNaive(n) {
  let highest = 0;
  // Find largest number
  let largestNum = '9';
  largestNum += Number(largestNum.repeat(n - 1));
  largestNum = Number(largestNum);

  for (let i = largestNum; i > 0; i--) {
    for (let j = largestNum; j > 0; j--) {
      let product = i * j;
      if (isPalindrome(product) && product > highest) highest = product;
    }
  }

  // Good luck!
  console.log(highest)
  return highest;
}

function largestPalindromeProduct(n) {
  let highest = 0;
  // Find largest number
  let largestNum = '9';
  largestNum += Number(largestNum.repeat(n - 1));
  largestNum = Number(largestNum);

  for (let i = largestNum; i > 0; i--) {
    for (let j = largestNum; j > 0; j--) {
      let product = i * j;
      if (isPalindrome(product)) {
        if (product > highest) highest = product;
        // we have the highest palindrome for this set, skip to next loop
        break;
      }
    }
  }

  // Good luck!
  return highest;
}

console.time('pal');
largestPalindromeProductNaive(3);
console.timeEnd('pal');
console.time('pal2');
largestPalindromeProduct(3);
console.timeEnd('pal2');
