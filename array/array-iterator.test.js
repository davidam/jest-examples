const array1 = ['a', 'b', 'c'];
const iterator1 = array1[Symbol.iterator]();
const array2 = [];
for (const value of iterator1) {
  array2.push(value);
}
test('iterator test', () => {
    expect(array2).toEqual(["a", "b", "c"]);
});
// expected output: "a"
// expected output: "b"
// expected output: "c"
