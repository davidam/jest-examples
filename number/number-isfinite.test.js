
test('isFinite test', () => {
    expect(Number.isFinite(1 / 0)).toEqual(false);
    expect(Number.isFinite(10 / 5)).toEqual(true);
    expect(Number.isFinite(0 / 0)).toEqual(false);        
});

// console.log(Number.isFinite(1 / 0));
// // expected output: false

// console.log(Number.isFinite(10 / 5));
// // expected output: true

// console.log(Number.isFinite(0 / 0));
// // expected output: false
