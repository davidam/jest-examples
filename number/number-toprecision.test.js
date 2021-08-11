function precise(x) {
  return Number.parseFloat(x).toPrecision(4);
}

test('toPrecision', () => {
    expect(precise(123.456)).toEqual("123.5");
    expect(precise(0.004)).toEqual("0.00400");
    expect(precise('123e+5').toEqual("1.230e+5");
});

// console.log(precise(123.456));
// // expected output: "123.5"

// console.log(precise(0.004));
// // expected output: "0.004000"

// console.log(precise('1.23e+5'));
// // expected output: "1.230e+5"
