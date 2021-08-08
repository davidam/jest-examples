
test('flatMap test', () => {
    const arr1 = [1, 2, [3], [4, 5], 6, []];
    const flattened = arr1.flatMap(num => num);
    expect(flattened).toEqual([1, 2, 3, 4, 5, 6]);
});

// console.log(flattened);
// expected output: Array [1, 2, 3, 4, 5, 6]
