function isPalindrome(num) {
  // also not my idea...
  return Number([...`${num}`].reverse().join('')) === num;
}

function largestPalindromeProduct(n) {
  let highestPalindrome = 0;
  // Stole this
  // Find largest number
  let largestNum = '9';
  largestNum += Number(largestNum.repeat(n - 1));
  largestNum = Number(largestNum);

  for (let i = largestNum; i > 0; i--) {
    for (let j = largestNum; j > 0; j--) {
      let product = i * j;
      if (isPalindrome(product) && product > highestPalindrome)
        highestPalindrome = product;
    }
  }

  // Good luck!
  return highestPalindrome;
}

largestPalindromeProduct(3);
