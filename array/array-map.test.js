const array1 = [1, 4, 9, 16];

// pass a function to map
const map1 = array1.map(x => x * 2);

test('index for arrays', () => {
    expect(map1).toEqual([2, 8, 18, 32]);
});


