import sum from '../sum';

test('sum should return the total of two numbers', () => {
  const result = sum(2, 3);

  expect(result).toBe(5);
});
