function multiply(x, y) {
  if (x * y > Number.MAX_VALUE) {
    return ('Process as Infinity');
  }
  return (x * y);
}

test('MAX_VALUE', () => {
    expect(multiply(1.7976931348623157e+308, 1)).toEqual(1.7976931348623157e+308);
    expect(multiply(1.7976931348623157e+308, 2)).toEqual("Process as Infinity");
});

// console.log(multiply(1.7976931348623157e+308, 1));
// // expected output: 1.7976931348623157e+308

// console.log(multiply(1.7976931348623157e+308, 2));
// // expected output: "Process as Infinity"
