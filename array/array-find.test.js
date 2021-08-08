const array1 = [5, 12, 8, 130, 44];

const found = array1.find(element => element > 10);

test('finding in arrays', () => {
    expect(found).toEqual(12);
});

// console.log(found);
// expected output: 12
