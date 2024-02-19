const { reverseNumber, isPalindrome, palindromeChainLength } = require('./palindromeChainLength');

test('test for the reverseNumber function', () => {
  expect(reverseNumber(123)).toBe(321);
  expect(reverseNumber(987654321)).toBe(123456789);
});

test('test for the isPalindrome function', () => {
  expect(isPalindrome(121)).toBe(true);
  expect(isPalindrome(123)).toBe(false);
});

test('test where it takes 0 iterations to get a palindrome', () => {
  expect(palindromeChainLength(12321)).toBe(0);
});


test('test where it takes 1 iterations to get a palindrome', () => {
  expect(palindromeChainLength(123))
    .toBe(1);
});

test('test where it takes large number iterations to get a palindrome', () => {
  expect(palindromeChainLength(167))
    .toBe(11);
});

test('test where it takes large number2 iterations to get a palindrome', () => {
  expect(palindromeChainLength(89))
    .toBe(24);
});

test('test where the number cannot be made into a palindrome and throws an error', () => {
  expect(() => palindromeChainLength(196)).toThrow();
});