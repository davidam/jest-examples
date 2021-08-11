const max = 2n ** 64n - 1n;

function check64bit(number) {
  (number > max) ?
    x = 'Number doesn\'t fit in unsigned 64-bit integer!' :
    x = BigInt.asUintN(64, number);
  return x;
}

test('asUintN test', () => {
    expect(check64bit(2n ** 64n)).toEqual("Number doesn't fit in unsigned 64-bit integer!");
    expect(check64bit(2n ** 32n)).toEqual(4294967296n);
});

// check64bit(2n ** 64n);
// // expected output: "Number doesn't fit in unsigned 64-bit integer!"

// check64bit(2n ** 32n);
// // expected output: 4294967296n
