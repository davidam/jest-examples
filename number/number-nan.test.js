function clean(x) {
  if (x === Number.NaN) {
    // can never be true
    return null;
  }
  if (isNaN(x)) {
    return 0;
  }
}

test('nan test', () => {
  expect(clean(Number.NaN)).toEqual(0);
});

//console.log(clean(Number.NaN));
// expected output: 0
