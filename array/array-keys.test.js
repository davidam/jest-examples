const array1 = ['a', 'b', 'c'];
const iterator = array1.keys();
const array2 = [];

for (const key of iterator) {
    array2.push(key);
//    console.log(key);
}

test('array keys test', () => {
    expect(array2).toEqual([ 0, 1, 2 ]);
});


// console.log(array2)

// expected output: 0
// expected output: 1
// expected output: 2
