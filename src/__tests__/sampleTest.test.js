import sum from '../pages/sampleTest';

test('should be sum of 2 num', () => {
  const output = sum(50, 75);
  expect(output).toBe(125);
});

test('should be invalid', () => {
  const output = sum(5, true);
  expect(output).toBe('invalid');
});
