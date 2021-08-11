function expo(x, f) {
  return Number.parseFloat(x).toExponential(f);
}

test('toexponential test', () => {
    expect(expo(123456, 2)).toEqual("1.23e+5");
    expect(expo(123456)).toEqual("1.23456e+5");
    expect(expo('oink')).toEqual("NaN");
});

// console.log(expo(123456, 2));
// // expected output: "1.23e+5"

// console.log(expo('123456'));
// // expected output: "1.23456e+5"

// console.log(expo('oink'));
// // expected output: "NaN"
