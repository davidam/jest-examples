const array1 = [5, 12, 8, 130, 44];

const isLargeNumber = (element) => element > 13;

test('find index for arrays', () => {
    expect(array1.findIndex(isLargeNumber)).toEqual(3);
});

// console.log(array1.findIndex(isLargeNumber));
// expected output: 3
