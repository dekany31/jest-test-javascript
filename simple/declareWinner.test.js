const declareWinner = require('./declareWinner');

test('Hulk vs Thor', () => {
  expect(declareWinner(
    { name: "Hulk", damagePerAttack: 120, health: 1000 },
    { name: "Thor", damagePerAttack: 125, health: 900 },
    "Thor"
  )).toBe("Thor");
});

test('Csaba vs Otto', () => {
  expect(declareWinner(
    { name: "Csaba", damagePerAttack: 50, health: 200 },
    { name: "Otto", damagePerAttack: 75, health: 210 },
    "Csaba"
  )).toBe("Otto");
});

test('Dead Hulk vs Thor', () => {
  expect(declareWinner(
    { name: "Hulk", damagePerAttack: 120, health: -1000 },
    { name: "Thor", damagePerAttack: 125, health: 900 },
    "Thor"
  )).toBe("Thor");
});

test('Dead Hulk vs Dead Thor', () => {
  expect(declareWinner(
    { name: "Hulk", damagePerAttack: 120, health: -1000 },
    { name: "Thor", damagePerAttack: 125, health: -1900 },
    "Thor"
  )).toBe("Thor");
});
