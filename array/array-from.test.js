// console.log(Array.from('foo'));
// // expected output: Array ["f", "o", "o"]

// console.log(Array.from([1, 2, 3], x => x + x));
// expected output: Array [2, 4, 6]

test('from test arrays', () => {
    expect(Array.from('foo')).toEqual(["f", "o", "o"]);
    expect(Array.from([1, 2, 3], x => x + x)).toEqual([2, 4, 6]);
});
