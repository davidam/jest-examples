const x = Number.MAX_SAFE_INTEGER + 1;
const y = Number.MAX_SAFE_INTEGER + 2;

test('MAX_SAFE_INTEGER test', () => {
    expect(Number.MAX_SAFE_INTEGER).toEqual(9007199254740991);
    expect(Number.MAX_SAFE_INTEGER).toEqual(9007199254740992);
    expect(x === y).toBeTruthy();
});

// console.log(Number.MAX_SAFE_INTEGER);
// // expected output: 9007199254740991

// console.log(x);
// // expected output: 9007199254740992

// console.log(x === y);
// // expected output: true
