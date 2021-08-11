function checkNumber(bigNumber) {
  if (bigNumber === Number.POSITIVE_INFINITY) {
    return 'Process number as Infinity';
  }
  return bigNumber;
}

test('positive_infinity test', () => {
    expect(checkNumber(Number.MAX_VALUE)).toEqual(1.7976931348623157e+308);
    expect(checkNumber(Number.MAX_VALUE * 2)).toEqual("Process number as Infinity");
});

console.log(checkNumber(Number.MAX_VALUE));
// expected output: 1.7976931348623157e+308

console.log(checkNumber(Number.MAX_VALUE * 2));
// expected output: Process number as Infinity
