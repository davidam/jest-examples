const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);

// expected output: Array ["a", "b", "c", "d", "e", "f"]

test('concating arrays', () => {
  expect(array3).toEqual(["a", "b", "c", "d", "e", "f"]);
});
