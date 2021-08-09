const sum = new Function('a', 'b', 'return a + b');

test('constructor test', () => {
    expect(sum(2, 6)).toEqual(8);
});


// console.log(sum(2, 6));
// expected output: 8
