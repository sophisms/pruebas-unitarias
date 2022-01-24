const calculator = require('./calculator');

test('adds 1 + 2 to equal 3', () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test('adds -4 + 8 to equal 4', () => {
  expect(calculator.add(-4, 8)).toBe(4);
});

test('subtract 5 - 4 to equal 1', () => {
  expect(calculator.subtract(5, 4)).toBe(1);
});

test('subtract -5 - -10 to equal 5', () => {
  expect(calculator.subtract(-5, -10)).toBe(5);
});

test('multiply 2 * 2 to equal 4', () => {
  expect(calculator.multiply(2, 2)).toBe(4);
});

test('multiply -5 * 3.5 to equal -17.5', () => {
  expect(calculator.multiply(-5, 3.5)).toBe(-17.5);
});

test('divide 10 / 2 to equal 5', () => {
  expect(calculator.divide(10, 2)).toBe(5);
});

test('divide 250 / 0 to equal infinit', () => {
  expect(calculator.divide(250, 0)).toBe(Infinity);
});