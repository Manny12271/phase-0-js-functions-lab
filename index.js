// index.js

function calculateTax(amount) {
    return amount * 0.10;
  }
  
  function convertToUpperCase(text) {
    return text.toUpperCase();
  }
  
  function findMaximum(num1, num2) {
    return num1 > num2 ? num1 : num2;
  }
  
  function isPalindrome(word) {
    return word === word.split('').reverse().join('');
  }
  
  function calculateDiscountedPrice(originalPrice, discountPercentage) {
    return originalPrice - (originalPrice * (discountPercentage / 100));
  }
  
  // Example calls to test them directly
  console.log(calculateTax(100)); // should print 10
  console.log(convertToUpperCase("hello")); // should print "HELLO"
  console.log(findMaximum(5, 10)); // should print 10
  console.log(isPalindrome("radar")); // should print true
  console.log(calculateDiscountedPrice(100, 20)); // should print 80




// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };