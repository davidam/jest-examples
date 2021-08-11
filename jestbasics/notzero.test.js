test('the sum result is not zero', () => {
  expect(2 + 0).not.toBe(0);    
  for (let a = 1; a < 10; a++) {
    for (let b = 1; b < 10; b++) {
      expect(a + b).not.toBe(0);
    }
  }
});
