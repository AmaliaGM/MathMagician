const operate = require('./Calculator');

const a = 12;
const b = 2;

test('Add numbers using the add method', () => {
  expect(operate.add(a, b, '+')).toBe(14);
});

test('Substract numbers using the substract method', () => {
  expect(operate.substract(a, b, '-')).toBe(10);
});

test('Divide numbers using the divide method', () => {
  expect(operate.divide(a, b, '/')).toBe(6);
});

test('Multiply numbers using the multiplication method', () => {
  expect(operate.multiply(a, b, '*')).toBe(24);
});
