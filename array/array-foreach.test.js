const array1 = ['a', 'b', 'c'];
const array2 = [];

array1.forEach(element => array2.push(element));

test('foreach test for arrays', () => {
    expect(array2).toEqual(array1);
});


// expected output: "a"
// expected output: "b"
// expected output: "c"
