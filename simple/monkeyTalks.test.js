const monkeyTalk = require('./monkeyTalk');

test('when empty string returns the correct value', () => {
  expect(monkeyTalk(""))
    .toBe("");
});

test('monkeyTalk sentence', () => {
  expect(monkeyTalk("The big brown fox jumped over the lazy dog"))
    .toBe("Ook ook ook ook ook eek ook ook ook.");
});

test('monkeyTalk "the"', () => {
  expect(monkeyTalk("the"))
    .toBe("Ook.");
});

test('monkeyTalk "an"', () => {
  expect(monkeyTalk("an"))
    .toBe("Eek.");
});

test('monkeyTalk sentence string with multiple punctuation marks ', () => {
  expect(monkeyTalk("the, big. brown, fox: jumped over the lazy. dog"))
    .toBe("Ook ook ook ook ook eek ook ook ook.");
});