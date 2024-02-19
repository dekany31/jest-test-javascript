const maxDiff = require('./maxDiff');

test('empty list return 0', () => {
  expect(maxDiff([])).toBe(0);
});

test('empty list return 0', () => {
  expect(maxDiff([3, 1, 2, 5])).toBe(4);
});

test('this list return 4', () => {
  expect(maxDiff([2, 5, 3, 1])).toBe(4);
});