const array1 = [1, 2, 3];
const num1 = array1.unshift(4, 5);

test('unshift test', () => {
    expect(num1).toEqual(5);
    expect(array1).toEqual([4, 5, 1, 2, 3]);
});

