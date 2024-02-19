const findUnique = require('./findUnique');


test('when the unique element is in the middle of the array', () => {
  expect(findUnique([2, 2, 3, 2, 2])).toBe(3);
});

test('when the unique element is at the beginning of the array', () => {
  expect(findUnique([5, 1, 1, 1])).toBe(5);
});

test('when the unique element is at the end of the array', () => {
  expect(findUnique([2, 2, 2, 3])).toBe(3);
});

test('when the unique element is the second of the array', () => {
  expect(findUnique([2, 7, 2, 2])).toBe(7);
});

test('when the input is invalid', () => {
  const invalidInput = 'not_an_array';
  expect(findUnique(invalidInput)).toBe('Invalid input');
});