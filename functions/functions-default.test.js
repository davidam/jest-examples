function multiply(a, b = 1) {
  return a * b;
}

test('multiply test', () => {
    expect(multiply(5, 2)).toEqual(10);
    expect(multiply(5)).toEqual(5);    
});

// console.log(multiply(5, 2));
// // expected output: 10

// console.log(multiply(5));
// // expected output: 5
