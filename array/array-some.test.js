const array = [1, 2, 3, 4, 5];

// checks whether an element is even
const even = (element) => element % 2 === 0;

test('some test', () => {
    expect(array.some(even)).toBeTruthy();
});


// console.log(array.some(even));
// expected output: true
