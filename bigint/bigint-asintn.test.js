const max = 2n ** (64n - 1n) - 1n;

function check64bit(number) {
    x = "";  
    (number > max) ?
	x = 'Number doesn\'t fit in signed 64-bit integer!' :
	x = BigInt.asIntN(64, number);
    return x;
}

test('check64bit test', () => {
    expect(check64bit(2n ** 64n)).toEqual("Number doesn't fit in signed 64-bit integer!");
    expect(check64bit(2n ** 32n)).toEqual(4294967296n);
});

// check64bit(2n ** 64n);
// // expected output: "Number doesn't fit in signed 64-bit integer!"

// check64bit(2n ** 32n);
// // expected output: 4294967296n
