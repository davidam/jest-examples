const isBelowThreshold = (currentValue) => currentValue < 40;

const array1 = [1, 30, 39, 29, 10, 13];

test('entries for arrays', () => {
    expect(array1.every(isBelowThreshold)).toBeTruthy();
});


// console.log(array1.every(isBelowThreshold));
// // expected output: true
